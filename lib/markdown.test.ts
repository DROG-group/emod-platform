import { describe, it, expect } from 'vitest'
import { parseMarkdown, getSectionIcon } from './markdown'

describe('parseMarkdown', () => {
  it('converts bold text', () => {
    const result = parseMarkdown('This is **bold** text')
    expect(result).toContain('<strong>bold</strong>')
  })

  it('converts italic text', () => {
    const result = parseMarkdown('This is *italic* text')
    expect(result).toContain('<em>italic</em>')
  })

  it('converts h3 headings', () => {
    const result = parseMarkdown('### My Heading')
    expect(result).toContain('<h3')
    expect(result).toContain('My Heading')
    expect(result).toContain('</h3>')
  })

  it('converts unordered lists', () => {
    const result = parseMarkdown('- Item 1\n- Item 2')
    expect(result).toContain('<ul')
    expect(result).toContain('<li')
    expect(result).toContain('Item 1')
    expect(result).toContain('Item 2')
  })

  it('wraps plain text in paragraphs', () => {
    const result = parseMarkdown('Just some text')
    expect(result).toContain('<p')
    expect(result).toContain('Just some text')
    expect(result).toContain('</p>')
  })

  it('handles multiple paragraphs', () => {
    const result = parseMarkdown('First paragraph\n\nSecond paragraph')
    expect(result).toContain('First paragraph')
    expect(result).toContain('Second paragraph')
    expect(result).toContain('</p><p')
  })

  it('handles complex mixed content', () => {
    const input = `### Title

This is **bold** and *italic* text.

- List item 1
- List item 2`

    const result = parseMarkdown(input)
    expect(result).toContain('<h3')
    expect(result).toContain('<strong>bold</strong>')
    expect(result).toContain('<em>italic</em>')
    expect(result).toContain('<ul')
    expect(result).toContain('<li')
  })

  it('removes empty paragraphs', () => {
    const result = parseMarkdown('Text\n\n\n\nMore text')
    expect(result).not.toContain('<p class="mb-4 text-gray-700 leading-relaxed"></p>')
  })
})

describe('getSectionIcon', () => {
  it('returns target icon for purpose sections', () => {
    expect(getSectionIcon('Purpose of this module')).toBe('🎯')
  })

  it('returns clipboard icon for scenario sections', () => {
    expect(getSectionIcon('Scenario Overview')).toBe('📋')
  })

  it('returns checkmark icon for task sections', () => {
    expect(getSectionIcon('Your Task')).toBe('✅')
  })

  it('returns gear icon for method sections', () => {
    expect(getSectionIcon('Method')).toBe('⚙️')
    expect(getSectionIcon('Workflow')).toBe('⚙️')
  })

  it('returns magnifier icon for evidence sections', () => {
    expect(getSectionIcon('Evidence Collection')).toBe('🔍')
  })

  it('returns stop icon for stop sections', () => {
    expect(getSectionIcon('STOP and Think')).toBe('🛑')
  })

  it('returns map icon for DIM sections', () => {
    expect(getSectionIcon('DIM Framework')).toBe('🗺️')
  })

  it('returns lightbulb icon for key takeaway sections', () => {
    expect(getSectionIcon('Key Takeaway')).toBe('💡')
  })

  it('returns document icon for unknown sections', () => {
    expect(getSectionIcon('Random Section')).toBe('📄')
  })

  it('is case insensitive', () => {
    expect(getSectionIcon('PURPOSE')).toBe('🎯')
    expect(getSectionIcon('purpose')).toBe('🎯')
    expect(getSectionIcon('PuRpOsE')).toBe('🎯')
  })
})
