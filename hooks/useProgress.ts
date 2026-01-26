'use client'

import { useState, useEffect, useCallback, useMemo } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useAuth } from '@/contexts/AuthContext'
import { ModuleProgress } from '@/types/database'

export function useProgress() {
  const { user } = useAuth()
  const [progress, setProgress] = useState<ModuleProgress[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const supabase = useMemo(() => createClient(), [])

  // Fetch all progress on mount
  useEffect(() => {
    if (user) {
      fetchProgress()
    } else {
      setProgress([])
      setLoading(false)
      setError(null)
    }
  }, [user])

  async function fetchProgress() {
    if (!user) return
    setLoading(true)
    setError(null)
    try {
      const { data, error: fetchError } = await supabase
        .from('module_progress')
        .select('*')
        .eq('user_id', user.id)

      if (fetchError) {
        console.error('Failed to fetch progress:', fetchError)
        setError('Failed to load progress')
        setProgress([])
      } else {
        setProgress(data || [])
      }
    } catch (err) {
      console.error('Unexpected error fetching progress:', err)
      setError('Failed to load progress')
      setProgress([])
    } finally {
      setLoading(false)
    }
  }

  // Mark module as viewed (upsert)
  const markViewed = useCallback(async (moduleId: string, learningPath: string | null, sectionIndex: number = 0) => {
    if (!user) return { data: null, error: new Error('Not authenticated') }

    try {
      const { data, error: upsertError } = await supabase
        .from('module_progress')
        .upsert({
          user_id: user.id,
          module_id: moduleId,
          learning_path: learningPath,
          last_viewed_at: new Date().toISOString(),
          last_section_index: sectionIndex,
        }, {
          onConflict: 'user_id,module_id',
        })
        .select()
        .single()

      if (upsertError) {
        console.error('Failed to mark module as viewed:', upsertError)
        return { data: null, error: upsertError }
      }

      if (data) {
        setProgress(prev => {
          const existing = prev.findIndex(p => p.module_id === moduleId)
          if (existing >= 0) {
            const updated = [...prev]
            updated[existing] = data
            return updated
          }
          return [...prev, data]
        })
      }
      return { data, error: null }
    } catch (err) {
      console.error('Unexpected error marking module as viewed:', err)
      return { data: null, error: err as Error }
    }
  }, [user, supabase])

  // Mark module as completed
  const markCompleted = useCallback(async (moduleId: string, learningPath: string | null) => {
    if (!user) return { data: null, error: new Error('Not authenticated') }

    try {
      const { data, error: upsertError } = await supabase
        .from('module_progress')
        .upsert({
          user_id: user.id,
          module_id: moduleId,
          learning_path: learningPath,
          completed: true,
          completed_at: new Date().toISOString(),
          last_viewed_at: new Date().toISOString(),
        }, {
          onConflict: 'user_id,module_id',
        })
        .select()
        .single()

      if (upsertError) {
        console.error('Failed to mark module as completed:', upsertError)
        return { data: null, error: upsertError }
      }

      if (data) {
        setProgress(prev => {
          const existing = prev.findIndex(p => p.module_id === moduleId)
          if (existing >= 0) {
            const updated = [...prev]
            updated[existing] = data
            return updated
          }
          return [...prev, data]
        })
      }
      return { data, error: null }
    } catch (err) {
      console.error('Unexpected error marking module as completed:', err)
      return { data: null, error: err as Error }
    }
  }, [user, supabase])

  // Helper: Check if module is completed
  const isCompleted = useCallback((moduleId: string) => {
    return progress.find(p => p.module_id === moduleId)?.completed || false
  }, [progress])

  // Helper: Get progress for a specific module
  const getModuleProgress = useCallback((moduleId: string) => {
    return progress.find(p => p.module_id === moduleId) || null
  }, [progress])

  // Helper: Get last viewed module
  const getLastViewed = useCallback(() => {
    if (progress.length === 0) return null
    return progress.reduce((latest, current) => {
      if (!latest) return current
      return new Date(current.last_viewed_at) > new Date(latest.last_viewed_at) ? current : latest
    }, null as ModuleProgress | null)
  }, [progress])

  // Helper: Calculate progress percentage for a learning path
  const getPathProgress = useCallback((learningPath: string, totalModules: number) => {
    if (totalModules === 0) return 0
    const completedInPath = progress.filter(
      p => p.learning_path === learningPath && p.completed
    ).length
    return Math.round((completedInPath / totalModules) * 100)
  }, [progress])

  // Helper: Get count of completed modules in a path
  const getCompletedCount = useCallback((learningPath: string) => {
    return progress.filter(p => p.learning_path === learningPath && p.completed).length
  }, [progress])

  return {
    progress,
    loading,
    error,
    markViewed,
    markCompleted,
    isCompleted,
    getModuleProgress,
    getLastViewed,
    getPathProgress,
    getCompletedCount,
    refresh: fetchProgress,
  }
}
