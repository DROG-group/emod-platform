import { notFound } from "next/navigation";
import Link from "next/link";
import modulesData from "@/lib/modules-data.json";
import { Module } from "@/types/module";
import ModuleViewer from "@/components/ModuleViewer";
import DSAAccessGate from "@/components/DSAAccessGate";
import ScrollProgress from "@/components/ScrollProgress";
import { isDSAModule, getMinReadingTime, hasQuiz, DSA_PASSING_SCORE } from "@/lib/anti-breeze";

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

  // Find next and previous modules in the same learning path
  const pathModules = modules
    .filter((m) => m.learningPath === module.learningPath)
    .sort((a, b) => (a.moduleNumber || 0) - (b.moduleNumber || 0));

  const currentIndex = pathModules.findIndex((m) => m.slug === module.slug);
  const prevModule = currentIndex > 0 ? pathModules[currentIndex - 1] : null;
  const nextModule = currentIndex < pathModules.length - 1 ? pathModules[currentIndex + 1] : null;

  const isDSA = isDSAModule(module);
  const minReadingTime = isDSA ? getMinReadingTime(module) : 0;
  const requiresQuizPass = isDSA && hasQuiz(module.id);

  return (
    <div className="min-h-screen bg-gray-100">
      <ScrollProgress />

      {/* Module Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-purple text-sm font-medium mb-4 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Modules
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            <div>
              {module.learningPath && (
                <span className="inline-block bg-purple/10 text-purple px-3 py-1 rounded-full text-sm font-medium mb-3">
                  {module.learningPath}
                </span>
              )}
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">{module.title}</h1>
              {module.description && (
                <p className="text-gray-600 mt-2 max-w-2xl">{module.description}</p>
              )}
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500 lg:text-right">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                {module.estimatedTime}
              </span>
              {module.moduleNumber && (
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                  Module {module.moduleNumber}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Module Content */}
      <section className="py-8 lg:py-12">
        <div className="container">
          {module.content ? (
            isDSA ? (
              <DSAAccessGate module={module}>
                <ModuleViewer
                  content={module.content}
                  title={module.title}
                  moduleId={module.id}
                  learningPath={module.learningPath || null}
                  headerImage={module.headerImage}
                  minReadingTime={minReadingTime}
                  requiresQuizPass={requiresQuizPass}
                  quizPassingScore={DSA_PASSING_SCORE}
                />
              </DSAAccessGate>
            ) : (
              <ModuleViewer
                content={module.content}
                title={module.title}
                moduleId={module.id}
                learningPath={module.learningPath || null}
                headerImage={module.headerImage}
              />
            )
          ) : (
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center">
              <p className="text-gray-500">Module content is being prepared. Please check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Module Navigation */}
      <section className="py-8 bg-white border-t border-gray-200">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between gap-4">
              {prevModule ? (
                <Link
                  href={`/modules/${prevModule.slug}`}
                  className="flex-1 group p-4 bg-gray-50 rounded-xl hover:bg-purple/5 transition-colors text-left"
                >
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Previous</span>
                  <p className="font-medium text-gray-900 group-hover:text-purple transition-colors mt-1 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    {prevModule.title}
                  </p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}

              <Link
                href="/dashboard"
                className="px-4 py-2 text-gray-500 hover:text-purple transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </Link>

              {nextModule ? (
                <Link
                  href={`/modules/${nextModule.slug}`}
                  className="flex-1 group p-4 bg-gray-50 rounded-xl hover:bg-purple/5 transition-colors text-right"
                >
                  <span className="text-xs text-gray-500 uppercase tracking-wide">Next</span>
                  <p className="font-medium text-gray-900 group-hover:text-purple transition-colors mt-1 flex items-center justify-end gap-2">
                    {nextModule.title}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </p>
                </Link>
              ) : (
                <div className="flex-1" />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
