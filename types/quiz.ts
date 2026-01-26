// Quiz system type definitions

export type QuestionType = 'multiple-choice' | 'open-ended';

// Multiple choice option
export interface MultipleChoiceOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation?: string; // Shown after selection
}

// Multiple choice question
export interface MultipleChoiceQuestion {
  id: string;
  type: 'multiple-choice';
  question: string;
  context?: string; // Scenario description
  options: MultipleChoiceOption[];
  explanation: string; // Overall explanation shown after answering
  points: number;
}

// Open-ended question with AI evaluation
export interface OpenEndedQuestion {
  id: string;
  type: 'open-ended';
  question: string;
  context?: string; // Scenario description
  evaluationCriteria: string[]; // Criteria for Claude to evaluate against
  sampleResponse?: string; // Example of good response (for Claude reference)
  maxPoints: number;
  minimumWordCount?: number;
}

// Union type for all question types
export type QuizQuestion = MultipleChoiceQuestion | OpenEndedQuestion;

// Quiz for a specific section within a module
export interface SectionQuiz {
  sectionTitle: string; // Must match section title from module content
  questions: QuizQuestion[];
}

// Complete quiz configuration for a module
export interface ModuleQuiz {
  moduleId: string;
  sectionQuizzes: SectionQuiz[]; // Quizzes after specific sections
  comprehensiveQuiz?: QuizQuestion[]; // End-of-module comprehensive quiz
  passingScore?: number; // Percentage to "pass" (optional)
}

// User's response to a single question
export interface QuizResponse {
  questionId: string;
  questionType: QuestionType;
  userAnswer: string; // Selected option ID for MC, full text for open-ended
  timestamp: string;
}

// Score for a single question
export interface QuestionScore {
  questionId: string;
  score: number;
  maxScore: number;
  feedback?: string;
  strengths?: string[];
  improvements?: string[];
}

// Complete quiz attempt record
export interface QuizAttempt {
  id: string;
  moduleId: string;
  sectionTitle?: string; // null for comprehensive quizzes
  userId?: string; // null for anonymous users
  responses: QuizResponse[];
  scores: QuestionScore[];
  totalScore: number;
  maxPossibleScore: number;
  passed?: boolean;
  completedAt: string;
  createdAt: string;
}

// API request for evaluating an open-ended answer
export interface EvaluationRequest {
  questionId: string;
  question: string;
  context?: string;
  evaluationCriteria: string[];
  sampleResponse?: string;
  userAnswer: string;
  maxPoints: number;
}

// API response from Claude evaluation
export interface EvaluationResponse {
  questionId: string;
  score: number;
  maxScore: number;
  feedback: string;
  strengths: string[];
  improvements: string[];
}

// Quiz data structure (maps moduleId to quiz config)
export type QuizData = Record<string, ModuleQuiz>;

// Type guards
export function isMultipleChoice(question: QuizQuestion): question is MultipleChoiceQuestion {
  return question.type === 'multiple-choice';
}

export function isOpenEnded(question: QuizQuestion): question is OpenEndedQuestion {
  return question.type === 'open-ended';
}
