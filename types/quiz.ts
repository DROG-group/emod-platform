export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export interface Quiz {
  learningPath: string
  passingScore: number
  questions: QuizQuestion[]
}

export interface QuizData {
  [learningPath: string]: {
    passingScore: number
    questions: QuizQuestion[]
  }
}

export interface QuizAnswer {
  questionId: string
  selectedIndex: number
  correct: boolean
}

export interface QuizResult {
  score: number
  totalQuestions: number
  percentage: number
  passed: boolean
  answers: QuizAnswer[]
}
