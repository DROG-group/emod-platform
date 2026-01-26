'use client';

import { QuizAttempt, QuizQuestion, isMultipleChoice } from '@/types/quiz';

interface QuizFeedbackProps {
  attempt: QuizAttempt;
  questions: QuizQuestion[];
  onRetry: () => void;
  onContinue: () => void;
}

export default function QuizFeedback({
  attempt,
  questions,
  onRetry,
  onContinue
}: QuizFeedbackProps) {
  const percentage = Math.round((attempt.totalScore / attempt.maxPossibleScore) * 100);
  const passed = percentage >= 70;

  const getScoreColor = () => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-amber-600';
    return 'text-red-600';
  };

  const getScoreBg = () => {
    if (percentage >= 80) return 'bg-green-50 border-green-200';
    if (percentage >= 60) return 'bg-amber-50 border-amber-200';
    return 'bg-red-50 border-red-200';
  };

  return (
    <div className="space-y-6">
      {/* Overall score card */}
      <div className={`rounded-2xl p-6 border-2 ${getScoreBg()}`}>
        <div className="text-center">
          <p className="text-gray-600 font-medium mb-2">Your Score</p>
          <p className={`text-5xl font-bold ${getScoreColor()}`}>
            {attempt.totalScore} / {attempt.maxPossibleScore}
          </p>
          <p className={`text-2xl font-semibold mt-1 ${getScoreColor()}`}>
            {percentage}%
          </p>
          <p className={`mt-3 font-medium ${passed ? 'text-green-600' : 'text-amber-600'}`}>
            {passed ? '🎉 Great job!' : '📚 Keep learning!'}
          </p>
        </div>
      </div>

      {/* Question breakdown */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
          <h3 className="font-semibold text-gray-700">Question Breakdown</h3>
        </div>
        <div className="divide-y divide-gray-100">
          {questions.map((question, index) => {
            const score = attempt.scores.find(s => s.questionId === question.id);
            const response = attempt.responses.find(r => r.questionId === question.id);
            const maxScore = isMultipleChoice(question) ? question.points : question.maxPoints;
            const gotFull = score && score.score === maxScore;
            const gotPartial = score && score.score > 0 && score.score < maxScore;
            const gotNone = !score || score.score === 0;

            return (
              <div key={question.id} className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        gotFull ? 'bg-green-100 text-green-700' :
                        gotPartial ? 'bg-amber-100 text-amber-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {index + 1}
                      </span>
                      <span className="text-sm text-gray-500">
                        {isMultipleChoice(question) ? 'Multiple Choice' : 'Open Response'}
                      </span>
                    </div>
                    <p className="mt-1 text-gray-700 font-medium line-clamp-2">
                      {question.question}
                    </p>
                    {score?.feedback && (
                      <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                        {score.feedback}
                      </p>
                    )}
                  </div>
                  <div className={`text-right font-semibold ${
                    gotFull ? 'text-green-600' :
                    gotPartial ? 'text-amber-600' :
                    'text-red-600'
                  }`}>
                    {score?.score || 0} / {maxScore}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={onRetry}
          className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 text-gray-700 font-medium hover:bg-gray-50 transition-all"
        >
          Try Again
        </button>
        <button
          onClick={onContinue}
          className="flex-1 px-4 py-3 rounded-xl bg-purple text-white font-medium hover:bg-purple-dark transition-all"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
