'use client';

import { useState, useCallback } from 'react';
import {
  QuizQuestion,
  QuizResponse,
  QuestionScore,
  QuizAttempt,
  EvaluationResponse,
  isMultipleChoice,
  isOpenEnded
} from '@/types/quiz';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import OpenEndedQuestion from './OpenEndedQuestion';
import QuizProgress from './QuizProgress';
import QuizFeedback from './QuizFeedback';

interface QuizContainerProps {
  questions: QuizQuestion[];
  moduleId: string;
  sectionTitle?: string;
  onComplete?: (attempt: QuizAttempt) => void;
}

type QuizState = 'answering' | 'reviewing' | 'completed';

export default function QuizContainer({
  questions,
  moduleId,
  sectionTitle,
  onComplete
}: QuizContainerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [scores, setScores] = useState<Record<string, QuestionScore>>({});
  const [feedbacks, setFeedbacks] = useState<Record<string, EvaluationResponse>>({});
  const [quizState, setQuizState] = useState<QuizState>('answering');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showQuestionFeedback, setShowQuestionFeedback] = useState(false);
  const [attempt, setAttempt] = useState<QuizAttempt | null>(null);

  const currentQuestion = questions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === questions.length;

  // Handle answer selection/input
  const handleAnswer = useCallback((questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  }, []);

  // Submit current answer and get feedback
  const handleSubmitAnswer = useCallback(async () => {
    const question = currentQuestion;
    const answer = answers[question.id];

    if (!answer) return;

    if (isMultipleChoice(question)) {
      // Immediate feedback for MC
      const correctOption = question.options.find(o => o.isCorrect);
      const isCorrect = answer === correctOption?.id;

      const score: QuestionScore = {
        questionId: question.id,
        score: isCorrect ? question.points : 0,
        maxScore: question.points,
        feedback: isCorrect ? 'Correct!' : `The correct answer was: ${correctOption?.text}`
      };

      setScores(prev => ({ ...prev, [question.id]: score }));
      setShowQuestionFeedback(true);
    } else if (isOpenEnded(question)) {
      // AI evaluation for open-ended
      setIsEvaluating(true);

      try {
        const response = await fetch('/api/quiz/evaluate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            questionId: question.id,
            question: question.question,
            context: question.context,
            evaluationCriteria: question.evaluationCriteria,
            sampleResponse: question.sampleResponse,
            userAnswer: answer,
            maxPoints: question.maxPoints
          })
        });

        if (!response.ok) {
          throw new Error('Evaluation failed');
        }

        const evaluation: EvaluationResponse = await response.json();

        const score: QuestionScore = {
          questionId: question.id,
          score: evaluation.score,
          maxScore: evaluation.maxScore,
          feedback: evaluation.feedback,
          strengths: evaluation.strengths,
          improvements: evaluation.improvements
        };

        setScores(prev => ({ ...prev, [question.id]: score }));
        setFeedbacks(prev => ({ ...prev, [question.id]: evaluation }));
        setShowQuestionFeedback(true);
      } catch (error) {
        console.error('Evaluation error:', error);
        // Fallback: save without evaluation
        const score: QuestionScore = {
          questionId: question.id,
          score: 0,
          maxScore: question.maxPoints,
          feedback: 'Unable to evaluate automatically. Your response has been saved.'
        };
        setScores(prev => ({ ...prev, [question.id]: score }));
        setShowQuestionFeedback(true);
      } finally {
        setIsEvaluating(false);
      }
    }
  }, [currentQuestion, answers]);

  // Move to next question
  const handleNext = useCallback(() => {
    setShowQuestionFeedback(false);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Quiz complete - calculate total
      const totalScore = Object.values(scores).reduce((sum, s) => sum + s.score, 0);
      const maxPossible = questions.reduce((sum, q) =>
        sum + (isMultipleChoice(q) ? q.points : q.maxPoints), 0
      );

      const quizAttempt: QuizAttempt = {
        id: crypto.randomUUID(),
        moduleId,
        sectionTitle,
        responses: Object.entries(answers).map(([questionId, answer]) => ({
          questionId,
          questionType: questions.find(q => q.id === questionId)?.type || 'multiple-choice',
          userAnswer: answer,
          timestamp: new Date().toISOString()
        })),
        scores: Object.values(scores),
        totalScore,
        maxPossibleScore: maxPossible,
        passed: (totalScore / maxPossible) >= 0.7,
        completedAt: new Date().toISOString(),
        createdAt: new Date().toISOString()
      };

      setAttempt(quizAttempt);
      setQuizState('completed');
      onComplete?.(quizAttempt);
    }
  }, [currentIndex, questions, scores, answers, moduleId, sectionTitle, onComplete]);

  // Skip current question
  const handleSkip = useCallback(() => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, questions.length]);

  // Retry quiz
  const handleRetry = useCallback(() => {
    setCurrentIndex(0);
    setAnswers({});
    setScores({});
    setFeedbacks({});
    setQuizState('answering');
    setShowQuestionFeedback(false);
    setAttempt(null);
  }, []);

  // Continue after completing
  const handleContinue = useCallback(() => {
    // Could navigate to next section or close quiz
    setQuizState('completed');
  }, []);

  // Show final results
  if (quizState === 'completed' && attempt) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border-2 border-purple/20 overflow-hidden">
        <div className="bg-gradient-to-r from-purple to-purple-light px-6 py-4 text-white">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🏆</span>
            <h2 className="text-xl font-bold">Quiz Complete!</h2>
          </div>
        </div>
        <div className="p-6">
          <QuizFeedback
            attempt={attempt}
            questions={questions}
            onRetry={handleRetry}
            onContinue={handleContinue}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border-2 border-purple/20 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple to-purple-light px-6 py-4 text-white">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📝</span>
          <h2 className="text-xl font-bold">Test Your Knowledge</h2>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <QuizProgress
          currentQuestion={currentIndex}
          totalQuestions={questions.length}
          answeredCount={Object.keys(scores).length}
        />

        {/* Question */}
        {isMultipleChoice(currentQuestion) ? (
          <MultipleChoiceQuestion
            question={currentQuestion}
            selectedOption={answers[currentQuestion.id] || null}
            onSelect={(optionId) => handleAnswer(currentQuestion.id, optionId)}
            showFeedback={showQuestionFeedback}
            disabled={showQuestionFeedback || isEvaluating}
          />
        ) : (
          <OpenEndedQuestion
            question={currentQuestion}
            answer={answers[currentQuestion.id] || ''}
            onChange={(text) => handleAnswer(currentQuestion.id, text)}
            showFeedback={showQuestionFeedback}
            feedback={feedbacks[currentQuestion.id]}
            isEvaluating={isEvaluating}
            disabled={showQuestionFeedback || isEvaluating}
          />
        )}

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          {!showQuestionFeedback ? (
            <>
              <button
                onClick={handleSkip}
                className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium"
                disabled={isEvaluating}
              >
                Skip for now
              </button>
              <button
                onClick={handleSubmitAnswer}
                disabled={!answers[currentQuestion.id] || isEvaluating}
                className={`
                  flex-1 px-4 py-3 rounded-xl font-medium transition-all
                  ${answers[currentQuestion.id] && !isEvaluating
                    ? 'bg-purple text-white hover:bg-purple-dark'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }
                `}
              >
                {isEvaluating ? 'Evaluating...' : 'Submit Answer'}
              </button>
            </>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 px-4 py-3 rounded-xl bg-purple text-white font-medium hover:bg-purple-dark transition-all"
            >
              {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
