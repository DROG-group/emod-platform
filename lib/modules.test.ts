import { describe, it, expect } from 'vitest'
import modulesData from './modules-data.json'
import { Module, Audience } from '@/types/module'

const modules = modulesData as Module[]

const VALID_AUDIENCES: Audience[] = [
  'citizens',
  'policymakers',
  'journalists',
  'researchers',
  'platform-teams',
  'comms-professionals',
  'educators',
]

describe('modules-data.json', () => {
  it('contains modules', () => {
    expect(modules.length).toBeGreaterThan(0)
  })

  it('has expected number of modules', () => {
    expect(modules.length).toBe(65)
  })

  describe('each module', () => {
    it('has required fields', () => {
      modules.forEach((module, index) => {
        expect(module.id, `Module ${index} missing id`).toBeDefined()
        expect(module.title, `Module ${index} missing title`).toBeDefined()
        expect(module.slug, `Module ${index} missing slug`).toBeDefined()
        expect(module.description, `Module ${index} missing description`).toBeDefined()
        expect(module.estimatedTime, `Module ${index} missing estimatedTime`).toBeDefined()
      })
    })

    it('has unique ids', () => {
      const ids = modules.map(m => m.id)
      const uniqueIds = new Set(ids)
      expect(uniqueIds.size).toBe(ids.length)
    })

    it('has unique slugs', () => {
      const slugs = modules.map(m => m.slug)
      const uniqueSlugs = new Set(slugs)
      expect(uniqueSlugs.size).toBe(slugs.length)
    })

    it('has valid audiences when present', () => {
      modules.forEach((module) => {
        if (module.audiences) {
          module.audiences.forEach((audience) => {
            expect(
              VALID_AUDIENCES.includes(audience),
              `Module "${module.title}" has invalid audience: ${audience}`
            ).toBe(true)
          })
        }
      })
    })

    it('has valid estimatedTime format', () => {
      const timePattern = /^\d+(-\d+)?\s*(min|mins|minute|minutes|hour|hours)$/i
      modules.forEach((module) => {
        expect(
          timePattern.test(module.estimatedTime) || module.estimatedTime.includes('min'),
          `Module "${module.title}" has invalid estimatedTime: ${module.estimatedTime}`
        ).toBe(true)
      })
    })

    it('has non-empty titles', () => {
      modules.forEach((module) => {
        expect(module.title.trim().length).toBeGreaterThan(0)
      })
    })

    it('has descriptions (may be empty for some modules)', () => {
      const withDescriptions = modules.filter(m => m.description && m.description.trim().length > 0)
      // Most modules should have descriptions
      expect(withDescriptions.length).toBeGreaterThan(modules.length * 0.9)
    })
  })

  describe('learning paths', () => {
    it('has modules with learning paths', () => {
      const modulesWithPaths = modules.filter(m => m.learningPath)
      expect(modulesWithPaths.length).toBeGreaterThan(0)
    })

    it('has consistent learning path naming', () => {
      const paths = [...new Set(modules.map(m => m.learningPath).filter(Boolean))]
      expect(paths.length).toBeGreaterThan(0)
      paths.forEach(path => {
        expect(path!.trim().length).toBeGreaterThan(0)
      })
    })
  })
})
