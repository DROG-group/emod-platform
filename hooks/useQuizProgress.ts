'use client'

import { useState, useEffect, useCallback } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useAuth } from '@/contexts/AuthContext'
import { QuizAttempt } from '@/types/database'

export function useQuizProgress() {
  const { user } = useAuth()
  const [attempts, setAttempts] = useState<QuizAttempt[]>([])
  const [loading, setLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    if (user) {
      fetchAttempts()
    } else {
      setAttempts([])
      setLoading(false)
    }
  }, [user])

  async function fetchAttempts() {
    if (!user) return
    setLoading(true)
    const { data } = await supabase
      .from('quiz_attempts')
      .select('*')
      .eq('user_id', user.id)
      .order('completed_at', { ascending: false })
    setAttempts(data || [])
    setLoading(false)
  }

  const submitQuizAttempt = useCallback(async (
    learningPath: string,
    score: number,
    totalQuestions: number,
    passed: boolean,
    answers: Record<string, number>
  ) => {
    if (!user) return { data: null, error: new Error('Not authenticated') }

    const { data, error } = await supabase
      .from('quiz_attempts')
      .upsert({
        user_id: user.id,
        learning_path: learningPath,
        score,
        total_questions: totalQuestions,
        passed,
        answers,
      }, {
        onConflict: 'user_id,learning_path',
      })
      .select()
      .single()

    if (!error && data) {
      setAttempts(prev => {
        const existing = prev.findIndex(a => a.learning_path === learningPath)
        if (existing >= 0) {
          const updated = [...prev]
          updated[existing] = data
          return updated
        }
        return [data, ...prev]
      })
    }
    return { data, error }
  }, [user, supabase])

  const getAttemptForPath = useCallback((learningPath: string) => {
    return attempts.find(a => a.learning_path === learningPath) || null
  }, [attempts])

  const hasPassedQuiz = useCallback((learningPath: string) => {
    const attempt = attempts.find(a => a.learning_path === learningPath)
    return attempt?.passed || false
  }, [attempts])

  const getQuizScore = useCallback((learningPath: string) => {
    const attempt = attempts.find(a => a.learning_path === learningPath)
    if (!attempt) return null
    return {
      score: attempt.score,
      total: attempt.total_questions,
      percentage: Math.round((attempt.score / attempt.total_questions) * 100)
    }
  }, [attempts])

  return {
    attempts,
    loading,
    submitQuizAttempt,
    getAttemptForPath,
    hasPassedQuiz,
    getQuizScore,
    refresh: fetchAttempts,
  }
}
