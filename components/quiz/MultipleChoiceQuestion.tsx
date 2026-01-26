'use client';

import { useState } from 'react';
import { MultipleChoiceQuestion as MCQuestion } from '@/types/quiz';

interface MultipleChoiceQuestionProps {
  question: MCQuestion;
  selectedOption: string | null;
  onSelect: (optionId: string) => void;
  showFeedback: boolean;
  disabled: boolean;
}

export default function MultipleChoiceQuestion({
  question,
  selectedOption,
  onSelect,
  showFeedback,
  disabled
}: MultipleChoiceQuestionProps) {
  const correctOption = question.options.find(o => o.isCorrect);
  const selectedOptionData = question.options.find(o => o.id === selectedOption);
  const isCorrect = selectedOption === correctOption?.id;

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

      {/* Options */}
      <div className="space-y-3">
        {question.options.map((option) => {
          const isSelected = selectedOption === option.id;
          const showCorrect = showFeedback && option.isCorrect;
          const showIncorrect = showFeedback && isSelected && !option.isCorrect;

          return (
            <button
              key={option.id}
              onClick={() => !disabled && onSelect(option.id)}
              disabled={disabled}
              className={`
                w-full p-4 rounded-xl border-2 text-left transition-all
                ${disabled ? 'cursor-not-allowed' : 'cursor-pointer hover:border-purple hover:bg-purple/5'}
                ${isSelected && !showFeedback ? 'border-purple bg-purple/10' : ''}
                ${showCorrect ? 'border-green-500 bg-green-50' : ''}
                ${showIncorrect ? 'border-red-400 bg-red-50' : ''}
                ${!isSelected && !showCorrect && !showIncorrect ? 'border-gray-200 bg-white' : ''}
              `}
            >
              <div className="flex items-start gap-3">
                {/* Option indicator */}
                <div className={`
                  w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5
                  ${isSelected && !showFeedback ? 'border-purple bg-purple text-white' : ''}
                  ${showCorrect ? 'border-green-500 bg-green-500 text-white' : ''}
                  ${showIncorrect ? 'border-red-400 bg-red-400 text-white' : ''}
                  ${!isSelected && !showCorrect ? 'border-gray-300' : ''}
                `}>
                  {showCorrect && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {showIncorrect && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  {!showFeedback && isSelected && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>

                {/* Option text */}
                <div className="flex-1">
                  <p className={`font-medium ${showCorrect ? 'text-green-700' : showIncorrect ? 'text-red-700' : 'text-gray-700'}`}>
                    {option.text}
                  </p>

                  {/* Show explanation after feedback */}
                  {showFeedback && isSelected && option.explanation && (
                    <p className={`mt-2 text-sm ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                      {option.explanation}
                    </p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Overall explanation after answering */}
      {showFeedback && (
        <div className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-amber-50 border border-amber-200'}`}>
          <div className="flex items-start gap-2">
            <span className="text-xl">{isCorrect ? '✅' : '💡'}</span>
            <div>
              <p className={`font-medium ${isCorrect ? 'text-green-700' : 'text-amber-700'}`}>
                {isCorrect ? 'Correct!' : 'Not quite right'}
              </p>
              <p className={`mt-1 text-sm ${isCorrect ? 'text-green-600' : 'text-amber-600'}`}>
                {question.explanation}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Points indicator */}
      <div className="text-right text-sm text-gray-500">
        {question.points} points
      </div>
    </div>
  );
}
