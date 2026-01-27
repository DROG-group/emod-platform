'use client';

/**
 * Scroll Progress Indicator using CSS Scroll-Driven Animations
 *
 * Uses the new CSS scroll() animation-timeline for smooth,
 * GPU-accelerated progress tracking without JavaScript scroll listeners.
 *
 * Browser support: Chrome 115+, Edge 115+
 * Fallback: Hidden on unsupported browsers (progressive enhancement)
 */
export default function ScrollProgress() {
  return (
    <div
      className="scroll-progress-container"
      aria-hidden="true"
    >
      <div className="scroll-progress-bar" />
    </div>
  );
}
