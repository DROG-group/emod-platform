'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { useQuizProgress } from '@/hooks/useQuizProgress'
import QuizViewer from '@/components/QuizViewer'
import quizData from '@/lib/quiz-data.json'
import { QuizData } from '@/types/quiz'

const quizzes = quizData as QuizData

function pathSlugToName(slug: string): string {
  return decodeURIComponent(slug).replace(/-/g, ' ')
}

function pathNameToSlug(name: string): string {
  return encodeURIComponent(name.replace(/\s+/g, '-'))
}

export default function QuizPage() {
  const params = useParams()
  const router = useRouter()
  const pathSlug = params.path as string
  const pathName = pathSlugToName(pathSlug)

  const { user, loading: authLoading } = useAuth()
  const { submitQuizAttempt, hasPassedQuiz, getQuizScore } = useQuizProgress()
  const [started, setStarted] = useState(false)

  const quiz = quizzes[pathName]
  const alreadyPassed = hasPassedQuiz(pathName)
  const previousScore = getQuizScore(pathName)

  useEffect(() => {
    if (!authLoading && !user) {
      router.push(`/login?redirect=/quiz/${pathSlug}`)
    }
  }, [user, authLoading, router, pathSlug])

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple"></div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  if (!quiz) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-900 mb-2">Quiz Not Available</h1>
          <p className="text-gray-600 mb-6">
            No quiz has been created for "{pathName}" yet.
          </p>
          <Link href="/dashboard" className="btn btn-primary">
            Back to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  async function handleQuizComplete(
    score: number,
    totalQuestions: number,
    passed: boolean,
    answers: Record<string, number>
  ) {
    await submitQuizAttempt(pathName, score, totalQuestions, passed, answers)
  }

  if (!started) {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-purple to-purple-light text-white">
          <div className="container py-12 lg:py-16">
            <Link href="/dashboard" className="inline-flex items-center gap-2 text-purple-100 hover:text-white mb-6 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Dashboard
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold mb-3">
              {pathName} Quiz
            </h1>
            <p className="text-purple-100 max-w-2xl">
              Test your knowledge from the learning path modules.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container max-w-2xl">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              {/* Quiz Info */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">Ready to verify your knowledge?</h2>
                <p className="text-gray-600">
                  Complete this quiz to earn a verified certificate.
                </p>
              </div>

              {/* Quiz Details */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple">{quiz.questions.length}</p>
                  <p className="text-sm text-gray-600">Questions</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple">{quiz.passingScore}%</p>
                  <p className="text-sm text-gray-600">Passing Score</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <p className="text-2xl font-bold text-purple">Unlimited</p>
                  <p className="text-sm text-gray-600">Attempts</p>
                </div>
              </div>

              {/* Previous Score */}
              {previousScore && (
                <div className={`mb-8 p-4 rounded-lg ${alreadyPassed ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-700">Previous Attempt</p>
                      <p className="text-lg font-bold">
                        {previousScore.score}/{previousScore.total} ({previousScore.percentage}%)
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      alreadyPassed ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                      {alreadyPassed ? 'Passed' : 'Not Passed'}
                    </span>
                  </div>
                </div>
              )}

              {/* Start Button */}
              <button
                onClick={() => setStarted(true)}
                className="w-full btn btn-primary py-3 text-lg"
              >
                {previousScore ? 'Retake Quiz' : 'Start Quiz'}
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                You can retake this quiz as many times as needed.
              </p>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white border-b border-gray-200">
        <div className="container py-6">
          <div className="flex items-center justify-between">
            <div>
              <Link href="/dashboard" className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1 mb-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Exit Quiz
              </Link>
              <h1 className="text-xl font-bold text-gray-900">{pathName} Quiz</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8">
        <div className="container max-w-3xl">
          <QuizViewer
            learningPath={pathName}
            questions={quiz.questions}
            passingScore={quiz.passingScore}
            onComplete={handleQuizComplete}
          />
        </div>
      </section>
    </div>
  )
}
