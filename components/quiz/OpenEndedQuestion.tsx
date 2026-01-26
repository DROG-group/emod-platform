'use client';

import { useState, useEffect } from 'react';
import { OpenEndedQuestion as OEQuestion, EvaluationResponse } from '@/types/quiz';

interface OpenEndedQuestionProps {
  question: OEQuestion;
  answer: string;
  onChange: (text: string) => void;
  showFeedback: boolean;
  feedback?: EvaluationResponse;
  isEvaluating: boolean;
  disabled: boolean;
}

export default function OpenEndedQuestion({
  question,
  answer,
  onChange,
  showFeedback,
  feedback,
  isEvaluating,
  disabled
}: OpenEndedQuestionProps) {
  const wordCount = answer.trim() ? answer.trim().split(/\s+/).length : 0;
  const minWords = question.minimumWordCount || 50;
  const meetsMinimum = wordCount >= minWords;

  return (
    <div className="space-y-4">
      {/* Context/Scenario */}
      {question.context && (
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <p className="text-sm text-gray-600 font-medium mb-1">Scenario:</p>
          <p className="text-gray-700">{question.context}</p>
        </div>
      )}

      {/* Question */}
      <h3 className="text-lg font-semibold text-gray-800">
        {question.question}
      </h3>

      {/* Evaluation criteria hint */}
      <div className="bg-purple/5 rounded-lg p-3 border border-purple/20">
        <p className="text-sm text-purple-dark font-medium mb-2">Your response should address:</p>
        <ul className="text-sm text-gray-600 space-y-1">
          {question.evaluationCriteria.slice(0, 3).map((criterion, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-purple">•</span>
              <span>{criterion}</span>
            </li>
          ))}
          {question.evaluationCriteria.length > 3 && (
            <li className="text-gray-500 italic">
              ...and {question.evaluationCriteria.length - 3} more criteria
            </li>
          )}
        </ul>
      </div>

      {/* Text input area */}
      {!showFeedback && (
        <div className="relative">
          <textarea
            value={answer}
            onChange={(e) => onChange(e.target.value)}
            disabled={disabled}
            placeholder="Type your response here..."
            className={`
              w-full h-48 p-4 rounded-xl border-2 resize-none
              focus:outline-none focus:ring-2 focus:ring-purple/20
              ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}
              ${meetsMinimum ? 'border-gray-200 focus:border-purple' : 'border-amber-300 focus:border-amber-400'}
            `}
          />

          {/* Word count */}
          <div className={`absolute bottom-3 right-3 text-sm ${meetsMinimum ? 'text-gray-400' : 'text-amber-500'}`}>
            {wordCount} / {minWords} words minimum
          </div>
        </div>
      )}

      {/* Show answer when feedback is displayed */}
      {showFeedback && (
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
          <p className="text-sm text-gray-500 font-medium mb-2">Your response:</p>
          <p className="text-gray-700 whitespace-pre-wrap">{answer}</p>
        </div>
      )}

      {/* Loading state during evaluation */}
      {isEvaluating && (
        <div className="bg-purple/5 rounded-xl p-6 border border-purple/20">
          <div className="flex items-center justify-center gap-3">
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-purple border-t-transparent" />
            <span className="text-purple font-medium">Evaluating your response...</span>
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">
            Our AI is analyzing your answer against the evaluation criteria
          </p>
        </div>
      )}

      {/* Feedback display */}
      {showFeedback && feedback && !isEvaluating && (
        <div className="space-y-4">
          {/* Score */}
          <div className={`p-4 rounded-xl ${feedback.score >= feedback.maxScore * 0.7 ? 'bg-green-50 border border-green-200' : feedback.score >= feedback.maxScore * 0.4 ? 'bg-amber-50 border border-amber-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-700">Score</span>
              <span className={`text-2xl font-bold ${feedback.score >= feedback.maxScore * 0.7 ? 'text-green-600' : feedback.score >= feedback.maxScore * 0.4 ? 'text-amber-600' : 'text-red-600'}`}>
                {feedback.score} / {feedback.maxScore}
              </span>
            </div>
            <p className="mt-2 text-gray-600">{feedback.feedback}</p>
          </div>

          {/* Strengths */}
          {feedback.strengths && feedback.strengths.length > 0 && (
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <p className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                <span>✓</span> Strengths
              </p>
              <ul className="space-y-1">
                {feedback.strengths.map((strength, index) => (
                  <li key={index} className="text-green-600 text-sm flex items-start gap-2">
                    <span className="text-green-500">•</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Areas for improvement */}
          {feedback.improvements && feedback.improvements.length > 0 && (
            <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
              <p className="font-semibold text-amber-700 mb-2 flex items-center gap-2">
                <span>💡</span> Areas for Improvement
              </p>
              <ul className="space-y-1">
                {feedback.improvements.map((improvement, index) => (
                  <li key={index} className="text-amber-600 text-sm flex items-start gap-2">
                    <span className="text-amber-500">•</span>
                    <span>{improvement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Points indicator */}
      <div className="text-right text-sm text-gray-500">
        Up to {question.maxPoints} points
      </div>
    </div>
  );
}
