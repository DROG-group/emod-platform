'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useProgress } from '@/hooks/useProgress'
import {
  isDSAModule,
  getDSAModuleAccess,
  getDSAModules,
  DSA_PASSING_SCORE,
} from '@/lib/anti-breeze'
import { Module } from '@/types/module'

interface DSAAccessGateProps {
  module: Module
  children: React.ReactNode
}

/**
 * Client-side gate that blocks access to DSA modules that haven't been unlocked.
 * Sequential access is enforced by checking module completion status.
 * Quiz modules can only be marked complete when the quiz is passed (enforced in ModuleViewer).
 */
export default function DSAAccessGate({ module, children }: DSAAccessGateProps) {
  const { user, loading: authLoading } = useAuth()
  const { progress, loading: progressLoading } = useProgress()

  const accessState = useMemo(() => {
    if (!isDSAModule(module) || !module.moduleNumber) {
      return { unlocked: true }
    }

    if (!user) {
      return {
        unlocked: false,
        reason: 'Sign in to access the DSA Reporting course',
      }
    }

    const completedIds = new Set(
      progress.filter(p => p.completed).map(p => p.module_id)
    )

    // For sequential check, completedIds also serves as "passed quiz" proxy,
    // because ModuleViewer blocks marking complete until quiz is passed.
    return getDSAModuleAccess(module.moduleNumber, completedIds, completedIds)
  }, [module, user, progress])

  if (authLoading || progressLoading) {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-12 text-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    )
  }

  if (!accessState.unlocked) {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 text-white">
          <div className="flex items-center gap-3">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h2 className="text-xl font-bold">Module Locked</h2>
          </div>
        </div>
        <div className="p-8 text-center">
          <p className="text-gray-700 text-lg mb-2">{accessState.reason}</p>
          <p className="text-gray-500 text-sm mb-6">
            The DSA Reporting course requires completing modules in order.
            Each chapter quiz must be passed with {DSA_PASSING_SCORE}% before the next chapter unlocks.
          </p>
          {!user ? (
            <Link
              href="/login"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple text-white rounded-lg font-medium hover:bg-purple/90 transition-colors"
            >
              Sign in to start
            </Link>
          ) : (
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple text-white rounded-lg font-medium hover:bg-purple/90 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Dashboard
            </Link>
          )}
        </div>
      </div>
    )
  }

  return <>{children}</>
}
