import { notFound } from "next/navigation";
import Link from "next/link";
import modulesData from "@/lib/modules-data.json";
import { Module } from "@/types/module";

const modules = modulesData as Module[];

export function generateStaticParams() {
  return modules.map((module) => ({
    slug: module.slug,
  }));
}

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const module = modules.find((m) => m.slug === slug);

  if (!module) {
    notFound();
  }

  // Convert markdown content to HTML (simple version - just paragraphs)
  const contentSections = module.content
    ?.split(/\[screen \d+\]/)
    .filter(Boolean)
    .map((section) => section.trim())
    .filter((section) => section.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Module Header */}
      <section className="bg-gradient-to-r from-purple to-purple-light text-white py-16">
        <div className="container max-w-4xl">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-purple-100 hover:text-white mb-6 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Dashboard
          </Link>
          {module.learningPath && (
            <div className="inline-block bg-white/20 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {module.learningPath}
            </div>
          )}
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">{module.title}</h1>
          <div className="flex items-center gap-6 text-purple-100">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              {module.estimatedTime}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {module.author}
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(module.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </span>
          </div>
        </div>
      </section>

      {/* Module Description */}
      {module.description && (
        <section className="py-8 bg-white border-b border-gray-200">
          <div className="container max-w-4xl">
            <p className="text-xl text-gray-700 leading-relaxed">{module.description}</p>
          </div>
        </section>
      )}

      {/* Module Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              {contentSections && contentSections.length > 0 ? (
                contentSections.map((section, idx) => (
                  <div key={idx} className="mb-12 pb-12 border-b border-gray-200 last:border-0">
                    <div
                      className="module-content"
                      dangerouslySetInnerHTML={{
                        __html: section
                          .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                          .replace(/\*(.+?)\*/g, "<em>$1</em>")
                          .replace(/^#{1,6}\s+(.+)$/gm, (_, text) => `<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-8">${text}</h2>`)
                          .replace(/^•\s+(.+)$/gm, "<li>$1</li>")
                          .replace(/(<li>.*<\/li>\n?)+/g, '<ul class="list-disc pl-6 space-y-2 my-4">$&</ul>')
                          .replace(/\n\n/g, "</p><p class='mb-4 text-gray-700 leading-relaxed'>")
                          .replace(/^\[(.+)\]\((.+)\)$/gm, '<a href="$2" class="text-purple hover:underline">$1</a>')
                          .replace(/^(?!<[h|u|l|p|s|a])(.+)$/gm, "<p class='mb-4 text-gray-700 leading-relaxed'>$1</p>")
                      }}
                    />
                    {idx < (contentSections?.length || 0) - 1 && (
                      <div className="mt-8 text-center text-sm text-gray-400">
                        Screen {idx + 1} of {contentSections?.length}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-gray-600">
                  <p>Module content is being prepared. Please check back soon.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="container max-w-4xl">
          <div className="flex items-center justify-between">
            <Link href="/dashboard" className="btn btn-outline">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Dashboard
            </Link>
            <Link href="/dashboard" className="btn btn-primary">
              View All Modules
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
