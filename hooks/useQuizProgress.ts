'use client';

import { useState, useEffect, useCallback } from 'react';
import { createClient } from '@/lib/supabase/client';
import { useAuth } from '@/contexts/AuthContext';
import { QuizAttempt } from '@/types/quiz';
import { QuizAttemptRecord } from '@/types/database';
import {
  saveQuizAttemptLocally,
  getLocalModuleAttempts,
  getLocalBestScore,
  getAllLocalAttempts,
  clearLocalQuizData,
  markLocalDataSynced
} from '@/lib/storage/quizStorage';

export function useQuizProgress(moduleId?: string) {
  const { user } = useAuth();
  const [attempts, setAttempts] = useState<QuizAttempt[]>([]);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  // Fetch attempts on mount
  useEffect(() => {
    if (user) {
      fetchFromSupabase();
    } else {
      loadFromLocalStorage();
    }
  }, [user, moduleId]);

  // Sync local data when user logs in
  useEffect(() => {
    if (user) {
      syncLocalToSupabase();
    }
  }, [user]);

  async function fetchFromSupabase() {
    if (!user) return;
    setLoading(true);

    try {
      let query = supabase
        .from('quiz_attempts')
        .select('*')
        .eq('user_id', user.id);

      if (moduleId) {
        query = query.eq('module_id', moduleId);
      }

      const { data, error } = await query.order('completed_at', { ascending: false });

      if (error) throw error;

      // Transform database records to QuizAttempt type
      const transformed: QuizAttempt[] = (data || []).map((record: QuizAttemptRecord) => ({
        id: record.id,
        moduleId: record.module_id,
        sectionTitle: record.section_title,
        userId: record.user_id,
        responses: record.responses,
        scores: record.scores,
        totalScore: record.total_score,
        maxPossibleScore: record.max_possible_score,
        passed: record.passed,
        completedAt: record.completed_at,
        createdAt: record.created_at
      }));

      setAttempts(transformed);
    } catch (error) {
      console.error('Error fetching quiz attempts:', error);
    } finally {
      setLoading(false);
    }
  }

  function loadFromLocalStorage() {
    setLoading(true);

    if (moduleId) {
      setAttempts(getLocalModuleAttempts(moduleId));
    } else {
      setAttempts(getAllLocalAttempts());
    }

    setLoading(false);
  }

  async function syncLocalToSupabase() {
    if (!user) return;

    const localAttempts = getAllLocalAttempts();
    if (localAttempts.length === 0) return;

    try {
      for (const attempt of localAttempts) {
        await supabase.from('quiz_attempts').upsert({
          id: attempt.id,
          user_id: user.id,
          module_id: attempt.moduleId,
          section_title: attempt.sectionTitle,
          responses: attempt.responses,
          scores: attempt.scores,
          total_score: attempt.totalScore,
          max_possible_score: attempt.maxPossibleScore,
          passed: attempt.passed,
          completed_at: attempt.completedAt,
          created_at: attempt.createdAt
        }, {
          onConflict: 'id'
        });
      }

      // Clear local storage after successful sync
      clearLocalQuizData();
      markLocalDataSynced();

      // Refresh from server
      await fetchFromSupabase();
    } catch (error) {
      console.error('Error syncing quiz attempts:', error);
    }
  }

  // Save a new quiz attempt
  const saveAttempt = useCallback(async (attempt: QuizAttempt): Promise<void> => {
    if (user) {
      // Save to Supabase
      try {
        const { error } = await supabase.from('quiz_attempts').insert({
          id: attempt.id,
          user_id: user.id,
          module_id: attempt.moduleId,
          section_title: attempt.sectionTitle,
          responses: attempt.responses,
          scores: attempt.scores,
          total_score: attempt.totalScore,
          max_possible_score: attempt.maxPossibleScore,
          passed: attempt.passed,
          completed_at: attempt.completedAt,
          created_at: attempt.createdAt
        });

        if (error) throw error;

        setAttempts(prev => [attempt, ...prev]);
      } catch (error) {
        console.error('Error saving quiz attempt:', error);
        // Fallback to localStorage
        saveQuizAttemptLocally(attempt);
      }
    } else {
      // Save to localStorage
      saveQuizAttemptLocally(attempt);
      setAttempts(prev => [attempt, ...prev]);
    }
  }, [user, supabase]);

  // Get the best attempt for a section
  const getBestAttempt = useCallback((sectionTitle?: string): QuizAttempt | null => {
    const sectionKey = sectionTitle || 'comprehensive';

    const relevantAttempts = attempts.filter(a =>
      (!moduleId || a.moduleId === moduleId) &&
      (a.sectionTitle || 'comprehensive') === sectionKey
    );

    if (relevantAttempts.length === 0) return null;

    return relevantAttempts.reduce((best, current) =>
      current.totalScore > best.totalScore ? current : best
    );
  }, [attempts, moduleId]);

  // Get best score for a section
  const getBestScore = useCallback((sectionTitle?: string): { score: number; maxScore: number; percentage: number } | null => {
    const best = getBestAttempt(sectionTitle);

    if (!best) {
      // Check localStorage as fallback
      if (!user && moduleId) {
        const localBest = getLocalBestScore(moduleId, sectionTitle);
        if (localBest) {
          return {
            ...localBest,
            percentage: Math.round((localBest.score / localBest.maxScore) * 100)
          };
        }
      }
      return null;
    }

    return {
      score: best.totalScore,
      maxScore: best.maxPossibleScore,
      percentage: Math.round((best.totalScore / best.maxPossibleScore) * 100)
    };
  }, [getBestAttempt, user, moduleId]);

  // Check if section has been attempted
  const hasAttempted = useCallback((sectionTitle?: string): boolean => {
    return getBestAttempt(sectionTitle) !== null;
  }, [getBestAttempt]);

  // Check if section was passed (>=70%)
  const hasPassed = useCallback((sectionTitle?: string): boolean => {
    const best = getBestAttempt(sectionTitle);
    return best?.passed || false;
  }, [getBestAttempt]);

  return {
    attempts,
    loading,
    saveAttempt,
    getBestAttempt,
    getBestScore,
    hasAttempted,
    hasPassed,
    refresh: user ? fetchFromSupabase : loadFromLocalStorage
  };
}
