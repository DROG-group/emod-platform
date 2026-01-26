'use client'

import { useState } from 'react'
import { QuizQuestion } from '@/types/quiz'

interface QuizViewerProps {
  learningPath: string
  questions: QuizQuestion[]
  passingScore: number
  onComplete: (score: number, totalQuestions: number, passed: boolean, answers: Record<string, number>) => Promise<void>
}

export default function QuizViewer({ learningPath, questions, passingScore, onComplete }: QuizViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({})
  const [showResults, setShowResults] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const currentQuestion = questions[currentIndex]
  const totalQuestions = questions.length
  const progress = ((currentIndex + 1) / totalQuestions) * 100

  function handleSelectAnswer(index: number) {
    if (showResults) return
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: index
    }))
  }

  function handleNext() {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  function handleShowResults() {
    setShowResults(true)
    setCurrentIndex(0)
  }

  async function handleSubmit() {
    const score = questions.reduce((acc, q) => {
      return acc + (selectedAnswers[q.id] === q.correctIndex ? 1 : 0)
    }, 0)
    const percentage = Math.round((score / totalQuestions) * 100)
    const passed = percentage >= passingScore

    setSubmitting(true)
    await onComplete(score, totalQuestions, passed, selectedAnswers)
    setSubmitting(false)
    setSubmitted(true)
  }

  const score = questions.reduce((acc, q) => {
    return acc + (selectedAnswers[q.id] === q.correctIndex ? 1 : 0)
  }, 0)
  const percentage = Math.round((score / totalQuestions) * 100)
  const passed = percentage >= passingScore
  const allAnswered = Object.keys(selectedAnswers).length === totalQuestions

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${
          passed ? 'bg-green-100' : 'bg-amber-100'
        }`}>
          {passed ? (
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          ) : (
            <svg className="w-10 h-10 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          )}
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {passed ? 'Congratulations!' : 'Not quite there'}
        </h2>
        <p className="text-gray-600 mb-4">
          You scored <span className="font-bold">{score}/{totalQuestions}</span> ({percentage}%)
        </p>
        <p className="text-sm text-gray-500 mb-8">
          {passed
            ? 'Your certificate has been upgraded to Verified status!'
            : `You need ${passingScore}% to pass. Review the material and try again.`
          }
        </p>
        <div className="flex justify-center gap-4">
          {passed ? (
            <a href="/certificates" className="btn btn-primary">
              View Certificates
            </a>
          ) : (
            <button
              onClick={() => {
                setShowResults(false)
                setSubmitted(false)
                setSelectedAnswers({})
                setCurrentIndex(0)
              }}
              className="btn btn-primary"
            >
              Try Again
            </button>
          )}
          <a href="/dashboard" className="btn btn-outline">
            Back to Dashboard
          </a>
        </div>
      </div>
    )
  }

  if (showResults) {
    return (
      <div className="space-y-6">
        {/* Score Summary */}
        <div className={`p-6 rounded-xl ${passed ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Your Score</h3>
              <p className="text-3xl font-bold mt-1">
                <span className={passed ? 'text-green-600' : 'text-amber-600'}>{percentage}%</span>
                <span className="text-gray-400 text-lg ml-2">({score}/{totalQuestions})</span>
              </p>
            </div>
            <div className={`px-4 py-2 rounded-lg font-semibold ${
              passed ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
            }`}>
              {passed ? 'PASSED' : 'NOT PASSED'}
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Passing score: {passingScore}%
          </p>
        </div>

        {/* Review Questions */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Review Your Answers</h3>
          {questions.map((q, idx) => {
            const selected = selectedAnswers[q.id]
            const isCorrect = selected === q.correctIndex
            return (
              <div key={q.id} className="bg-white border border-gray-200 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold ${
                    isCorrect ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                  }`}>
                    {isCorrect ? '✓' : '✗'}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 mb-3">{idx + 1}. {q.question}</p>
                    <div className="space-y-2">
                      {q.options.map((opt, optIdx) => (
                        <div
                          key={optIdx}
                          className={`p-3 rounded-lg text-sm ${
                            optIdx === q.correctIndex
                              ? 'bg-green-50 border border-green-200 text-green-800'
                              : optIdx === selected && !isCorrect
                              ? 'bg-red-50 border border-red-200 text-red-800'
                              : 'bg-gray-50 text-gray-600'
                          }`}
                        >
                          {opt}
                          {optIdx === q.correctIndex && <span className="ml-2 font-medium">(Correct)</span>}
                          {optIdx === selected && optIdx !== q.correctIndex && <span className="ml-2 font-medium">(Your answer)</span>}
                        </div>
                      ))}
                    </div>
                    <p className="mt-3 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                      <span className="font-medium">Explanation:</span> {q.explanation}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="btn btn-primary px-8 py-3 disabled:opacity-50"
          >
            {submitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting...
              </span>
            ) : (
              'Submit Results'
            )}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>Question {currentIndex + 1} of {totalQuestions}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-purple rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">
          {currentQuestion.question}
        </h3>
        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleSelectAnswer(idx)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedAnswers[currentQuestion.id] === idx
                  ? 'border-purple bg-purple/5'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  selectedAnswers[currentQuestion.id] === idx
                    ? 'border-purple bg-purple text-white'
                    : 'border-gray-300'
                }`}>
                  {selectedAnswers[currentQuestion.id] === idx && (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </span>
                <span className="text-gray-900">{option}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="btn btn-ghost disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </button>

        {/* Question dots */}
        <div className="flex gap-2">
          {questions.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex
                  ? 'bg-purple scale-125'
                  : selectedAnswers[q.id] !== undefined
                  ? 'bg-purple/50'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>

        {currentIndex === totalQuestions - 1 ? (
          <button
            onClick={handleShowResults}
            disabled={!allAnswered}
            className="btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
          >
            View Results
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="btn btn-primary"
          >
            Next
            <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>

      {/* Unanswered warning */}
      {currentIndex === totalQuestions - 1 && !allAnswered && (
        <p className="text-center text-amber-600 text-sm mt-4">
          Please answer all questions before viewing results.
          ({Object.keys(selectedAnswers).length}/{totalQuestions} answered)
        </p>
      )}
    </div>
  )
}
