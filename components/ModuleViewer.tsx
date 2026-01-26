"use client";

import { useState, useMemo, useCallback, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/hooks/useProgress";
import Link from "next/link";
import Image from "next/image";

interface ModuleViewerProps {
  content: string;
  title: string;
  moduleId: string;
  learningPath: string | null;
  headerImage?: string;
}

interface Section {
  title: string;
  content: string;
  isSubsection?: boolean;
}

function parseMarkdown(text: string): string {
  return text
    // Handle inline images/diagrams: ![alt text](/path/to/image.svg)
    .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<div class="my-6 flex justify-center"><img src="$2" alt="$1" class="max-w-full h-auto rounded-lg shadow-sm border border-gray-200" /></div>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/^### (.+)$/gm, '<h3 class="text-lg font-semibold text-gray-800 mb-3 mt-4">$1</h3>')
    .replace(/^- (.+)$/gm, '<li class="ml-4">$1</li>')
    .replace(/(<li.*<\/li>\n?)+/g, '<ul class="list-disc pl-4 space-y-2 my-4 text-gray-700">$&</ul>')
    .replace(/\n\n/g, '</p><p class="mb-4 text-gray-700 leading-relaxed">')
    .replace(/^(?!<[huol]|<li|<p|<strong|<div)(.+)$/gm, '<p class="mb-4 text-gray-700 leading-relaxed">$1</p>')
    .replace(/<p class="mb-4 text-gray-700 leading-relaxed"><\/p>/g, '');
}

function getSectionIcon(title: string): string {
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

export default function ModuleViewer({ content, title, moduleId, learningPath, headerImage }: ModuleViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasRestored, setHasRestored] = useState(false);
  const { user } = useAuth();
  const { markViewed, markCompleted, isCompleted, getModuleProgress } = useProgress();

  const sections = useMemo(() => {
    const parts = content.split(/^## /gm).filter(Boolean);
    const result: Section[] = [];

    for (const part of parts) {
      const lines = part.split('\n');
      const sectionTitle = lines[0].trim();
      const sectionContent = lines.slice(1).join('\n').trim();

      // Skip empty sections
      if (!sectionContent) continue;

      // Check if this is a main section or subsection
      const isSubsection = sectionTitle.toLowerCase().startsWith('step') ||
                          sectionTitle.toLowerCase().startsWith('start here');

      result.push({
        title: sectionTitle,
        content: sectionContent,
        isSubsection,
      });
    }

    return result;
  }, [content]);

  // Restore last section position on mount
  useEffect(() => {
    if (user && !hasRestored) {
      const progress = getModuleProgress(moduleId);
      if (progress && progress.last_section_index > 0 && progress.last_section_index < sections.length) {
        setCurrentIndex(progress.last_section_index);
      }
      setHasRestored(true);
    }
  }, [user, hasRestored, moduleId, getModuleProgress, sections.length]);

  // Track section view when section changes
  useEffect(() => {
    if (user && hasRestored) {
      markViewed(moduleId, learningPath, currentIndex);
    }
  }, [currentIndex, user, hasRestored, moduleId, learningPath, markViewed]);

  const goToNext = useCallback(() => {
    if (currentIndex < sections.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }, [currentIndex, sections.length]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }, [currentIndex]);

  const goToSection = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const handleComplete = useCallback(async () => {
    if (user) {
      await markCompleted(moduleId, learningPath);
    }
  }, [user, moduleId, learningPath, markCompleted]);

  const currentSection = sections[currentIndex];
  const progress = ((currentIndex + 1) / sections.length) * 100;
  const moduleCompleted = isCompleted(moduleId);

  if (sections.length === 0) {
    return (
      <div className="p-8 text-center text-gray-500">
        No content available for this module.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header Image */}
      {headerImage && (
        <div className="mb-6 rounded-xl overflow-hidden shadow-sm border border-gray-200">
          <Image
            src={headerImage}
            alt={title}
            width={800}
            height={200}
            className="w-full h-auto"
            priority
          />
        </div>
      )}

      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <span>Section {currentIndex + 1} of {sections.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple to-purple-light transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <div className="relative">
        <div
          key={currentIndex}
          className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden animate-fadeIn"
        >
          {/* Card Header */}
          <div className="bg-gradient-to-r from-purple to-purple-light px-6 py-4 text-white">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{getSectionIcon(currentSection.title)}</span>
              <h2 className="text-xl lg:text-2xl font-bold">{currentSection.title}</h2>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-6 lg:p-8">
            <div
              className="module-content prose prose-gray max-w-none"
              dangerouslySetInnerHTML={{ __html: parseMarkdown(currentSection.content) }}
            />
          </div>

          {/* Card Footer Navigation */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
            <button
              onClick={goToPrev}
              disabled={currentIndex === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                currentIndex === 0
                  ? 'text-gray-300 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>

            {currentIndex === sections.length - 1 ? (
              <div className="flex items-center gap-3">
                {moduleCompleted ? (
                  <span className="text-green-600 font-medium flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Module Complete!
                  </span>
                ) : user ? (
                  <button
                    onClick={handleComplete}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-all"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Mark as Complete
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="flex items-center gap-2 px-4 py-2 bg-purple text-white rounded-lg font-medium hover:bg-purple-dark transition-all"
                  >
                    Sign in to save progress
                  </Link>
                )}
              </div>
            ) : (
              <button
                onClick={goToNext}
                className="flex items-center gap-2 px-4 py-2 bg-purple text-white rounded-lg font-medium hover:bg-purple-dark transition-all"
              >
                Next
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Section dots navigation */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => goToSection(index)}
            className={`group relative px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              index === currentIndex
                ? 'bg-purple text-white'
                : index < currentIndex
                ? 'bg-green-100 text-green-700 hover:bg-green-200'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
            title={section.title}
          >
            <span className="flex items-center gap-1">
              {index < currentIndex && (
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
              {index + 1}
            </span>
          </button>
        ))}
      </div>

      {/* Quick jump menu */}
      <div className="mt-6 p-4 bg-gray-50 rounded-xl">
        <p className="text-sm font-medium text-gray-600 mb-3">Jump to section:</p>
        <div className="flex flex-wrap gap-2">
          {sections.map((section, index) => (
            <button
              key={index}
              onClick={() => goToSection(index)}
              className={`text-xs px-2 py-1 rounded transition-all ${
                index === currentIndex
                  ? 'bg-purple text-white'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-purple hover:text-purple'
              }`}
            >
              {section.title.length > 25 ? section.title.slice(0, 25) + '...' : section.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
