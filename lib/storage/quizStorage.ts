import { QuizAttempt } from '@/types/quiz';

const QUIZ_STORAGE_KEY = 'emod_quiz_attempts';
const SYNC_STATUS_KEY = 'emod_quiz_synced';

// Save a quiz attempt to localStorage
export function saveQuizAttemptLocally(attempt: QuizAttempt): void {
  if (typeof window === 'undefined') return;

  const existing = getAllLocalAttempts();
  existing.unshift(attempt);

  try {
    localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(existing));
  } catch (error) {
    console.error('Error saving quiz attempt to localStorage:', error);
  }
}

// Get all attempts for a specific module
export function getLocalModuleAttempts(moduleId: string): QuizAttempt[] {
  const all = getAllLocalAttempts();
  return all.filter(a => a.moduleId === moduleId);
}

// Get best score for a module section
export function getLocalBestScore(moduleId: string, sectionTitle?: string): { score: number; maxScore: number } | null {
  const moduleAttempts = getLocalModuleAttempts(moduleId);
  const sectionKey = sectionTitle || 'comprehensive';

  const sectionAttempts = moduleAttempts.filter(a =>
    (a.sectionTitle || 'comprehensive') === sectionKey
  );

  if (sectionAttempts.length === 0) return null;

  const best = sectionAttempts.reduce((best, current) =>
    current.totalScore > best.totalScore ? current : best
  );

  return {
    score: best.totalScore,
    maxScore: best.maxPossibleScore
  };
}

// Get all local attempts
export function getAllLocalAttempts(): QuizAttempt[] {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(QUIZ_STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored) as QuizAttempt[];
  } catch (error) {
    console.error('Error reading quiz attempts from localStorage:', error);
    return [];
  }
}

// Clear all local quiz data
export function clearLocalQuizData(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(QUIZ_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing quiz data from localStorage:', error);
  }
}

// Mark local data as synced (after uploading to Supabase)
export function markLocalDataSynced(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.setItem(SYNC_STATUS_KEY, new Date().toISOString());
  } catch (error) {
    console.error('Error marking sync status:', error);
  }
}

// Check if local data needs syncing
export function needsSync(): boolean {
  if (typeof window === 'undefined') return false;

  const attempts = getAllLocalAttempts();
  return attempts.length > 0;
}
