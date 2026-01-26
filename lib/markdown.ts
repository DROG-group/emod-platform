/**
 * Parses a subset of Markdown to HTML with Tailwind classes.
 * Supports: bold, italic, h3, unordered lists, paragraphs.
 */
export function parseMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-gray-800 mb-3 mt-4">$1</h3>')
    .replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="list-disc pl-4 space-y-2 my-4 text-gray-700">$&</ul>')
    .replace(/\n\n/g, '</p><p class="mb-4 text-gray-700 leading-relaxed">')
    .replace(/^(?!<[huol]|<li|<p|<strong)(.+)$/gm, '<p class="mb-4 text-gray-700 leading-relaxed">$1</p>')
    .replace(/<p class="mb-4 text-gray-700 leading-relaxed"><\/p>/g, '');
}

/**
 * Returns an emoji icon based on section title keywords.
 */
export function getSectionIcon(title: string): string {
  const lower = title.toLowerCase();
  if (lower.includes('purpose')) return '🎯';
  if (lower.includes('scenario')) return '📋';
  if (lower.includes('task')) return '✅';
  if (lower.includes('method') || lower.includes('workflow')) return '⚙️';
  if (lower.includes('evidence')) return '🔍';
  if (lower.includes('stop')) return '🛑';
  if (lower.includes('dim')) return '🗺️';
  if (lower.includes('key takeaway')) return '💡';
  if (lower.includes('test')) return '📝';
  if (lower.includes('definition') || lower.includes('reference')) return '📖';
  if (lower.includes('step')) return '👣';
  if (lower.includes('start')) return '▶️';
  return '📄';
}
