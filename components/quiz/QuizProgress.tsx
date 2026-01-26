'use client';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  answeredCount: number;
}

export default function QuizProgress({
  currentQuestion,
  totalQuestions,
  answeredCount
}: QuizProgressProps) {
  const progress = (answeredCount / totalQuestions) * 100;

  return (
    <div className="mb-6">
      {/* Question counter */}
      <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
        <span className="font-medium">
          Question {currentQuestion + 1} of {totalQuestions}
        </span>
        <span>
          {answeredCount} answered
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-purple to-purple-light transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Question dots */}
      <div className="flex justify-center gap-2 mt-3">
        {Array.from({ length: totalQuestions }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentQuestion
                ? 'bg-purple scale-125'
                : index < answeredCount
                ? 'bg-green-500'
                : 'bg-gray-300'
            }`}
            aria-label={`Question ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
