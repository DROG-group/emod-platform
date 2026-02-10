/**
 * Anti-breeze mechanisms for the DSA Reporting learning path.
 *
 * Rules:
 * 1. Modules must be completed sequentially within the path
 * 2. Quiz modules must be passed (80%) before the next chapter unlocks
 * 3. Minimum reading time: 80% of estimated duration before marking complete
 * 4. Certificate requires all quizzes passed
 *
 * These rules ONLY apply to the DSA Reporting path. Other paths are unrestricted.
 */

import modulesData from '@/lib/modules-data.json'
import quizData from '@/lib/quiz-data.json'
import { Module } from '@/types/module'
import { ModuleQuiz } from '@/types/quiz'

const modules = modulesData as Module[]
const typedQuizData = quizData as Record<string, ModuleQuiz>

export const DSA_LEARNING_PATH = 'DSA Reporting for Resilience Councils'
export const DSA_PASSING_SCORE = 80 // percentage
export const DSA_MIN_TIME_PERCENT = 80 // must spend 80% of estimated time

// DSA chapter structure: which modules belong to which chapter
// Chapter ends with a quiz module
export const DSA_CHAPTERS = [
  { name: 'The Information Landscape', moduleNumbers: [1, 2, 3], quizModuleNumber: 3 },
  { name: 'The DSA Framework', moduleNumbers: [4, 5], quizModuleNumber: 5 },
  { name: 'Evidence That Holds Up', moduleNumbers: [6, 7], quizModuleNumber: 7 },
  { name: 'Writing Reports That Get Results', moduleNumbers: [8, 9], quizModuleNumber: 9 },
  { name: 'From Individual to Coordinated Action', moduleNumbers: [10, 11, 12], quizModuleNumber: 12 },
]

export function isDSAModule(module: Module): boolean {
  return module.learningPath === DSA_LEARNING_PATH
}

export function getDSAModules(): Module[] {
  return modules
    .filter(m => m.learningPath === DSA_LEARNING_PATH)
    .sort((a, b) => (a.moduleNumber || 0) - (b.moduleNumber || 0))
}

export function getDSAModuleByNumber(num: number): Module | undefined {
  return modules.find(m => m.learningPath === DSA_LEARNING_PATH && m.moduleNumber === num)
}

export function getChapterForModule(moduleNumber: number) {
  return DSA_CHAPTERS.find(ch => ch.moduleNumbers.includes(moduleNumber))
}

export function hasQuiz(moduleId: string): boolean {
  return !!typedQuizData[moduleId]
}

export function getQuizPassingScore(moduleId: string): number {
  return typedQuizData[moduleId]?.passingScore || DSA_PASSING_SCORE
}

/**
 * Parse estimated time string (e.g. "15 minutes") into seconds
 */
export function parseEstimatedTime(estimatedTime: string): number {
  const match = estimatedTime.match(/(\d+)/)
  if (!match) return 0
  return parseInt(match[1], 10) * 60
}

/**
 * Get minimum reading time in seconds for a DSA module
 */
export function getMinReadingTime(module: Module): number {
  const totalSeconds = parseEstimatedTime(module.estimatedTime)
  return Math.floor(totalSeconds * DSA_MIN_TIME_PERCENT / 100)
}

export interface ModuleAccessState {
  unlocked: boolean
  reason?: string // why it's locked
  requiresQuizPass?: string // module ID of the quiz that must be passed
  chapterName?: string
}

/**
 * Determine whether a DSA module is accessible given current progress.
 *
 * @param moduleNumber - the module number to check
 * @param completedModuleIds - set of module IDs the user has completed
 * @param passedQuizModuleIds - set of module IDs where the user has passed the quiz
 */
export function getDSAModuleAccess(
  moduleNumber: number,
  completedModuleIds: Set<string>,
  passedQuizModuleIds: Set<string>,
): ModuleAccessState {
  // Module 1 is always unlocked
  if (moduleNumber === 1) {
    return { unlocked: true }
  }

  const chapter = getChapterForModule(moduleNumber)
  if (!chapter) return { unlocked: true }

  const chapterIndex = DSA_CHAPTERS.indexOf(chapter)
  const moduleIndex = chapter.moduleNumbers.indexOf(moduleNumber)

  // Check if previous module in the same chapter is completed
  if (moduleIndex > 0) {
    const prevModuleNumber = chapter.moduleNumbers[moduleIndex - 1]
    const prevModule = getDSAModuleByNumber(prevModuleNumber)
    if (prevModule && !completedModuleIds.has(prevModule.id)) {
      return {
        unlocked: false,
        reason: `Complete "${prevModule.title}" first`,
        chapterName: chapter.name,
      }
    }
  }

  // Check if this is the first module of a new chapter (not chapter 0)
  if (moduleIndex === 0 && chapterIndex > 0) {
    const prevChapter = DSA_CHAPTERS[chapterIndex - 1]
    const prevQuizModule = getDSAModuleByNumber(prevChapter.quizModuleNumber)

    if (prevQuizModule) {
      // Previous chapter's last module must be completed
      if (!completedModuleIds.has(prevQuizModule.id)) {
        return {
          unlocked: false,
          reason: `Complete all modules in "${prevChapter.name}" first`,
          chapterName: chapter.name,
        }
      }

      // Previous chapter's quiz must be passed
      if (!passedQuizModuleIds.has(prevQuizModule.id)) {
        return {
          unlocked: false,
          reason: `Pass the "${prevChapter.name}" quiz first`,
          requiresQuizPass: prevQuizModule.id,
          chapterName: chapter.name,
        }
      }
    }
  }

  return { unlocked: true }
}

/**
 * Check if user can claim DSA certificate.
 * Requires all modules completed AND all quizzes passed.
 */
export function canClaimDSACertificate(
  completedModuleIds: Set<string>,
  passedQuizModuleIds: Set<string>,
): { canClaim: boolean; reason?: string } {
  const dsaModules = getDSAModules()

  // All modules must be completed
  const incomplete = dsaModules.filter(m => !completedModuleIds.has(m.id))
  if (incomplete.length > 0) {
    return {
      canClaim: false,
      reason: `${incomplete.length} module${incomplete.length > 1 ? 's' : ''} not yet completed`,
    }
  }

  // All quiz modules must be passed
  for (const ch of DSA_CHAPTERS) {
    const quizModule = getDSAModuleByNumber(ch.quizModuleNumber)
    if (quizModule && !passedQuizModuleIds.has(quizModule.id)) {
      return {
        canClaim: false,
        reason: `"${ch.name}" quiz not yet passed`,
      }
    }
  }

  return { canClaim: true }
}
