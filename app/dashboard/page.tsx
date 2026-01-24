"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import modulesData from "@/lib/modules-data.json";
import { Module, Audience } from "@/types/module";

const modules = modulesData as Module[];

const AUDIENCES: { id: Audience; label: string; description: string; icon: string }[] = [
  { id: "citizens", label: "Citizens", description: "General public", icon: "👥" },
  { id: "policymakers", label: "Policymakers", description: "Government & legislators", icon: "🏛️" },
  { id: "journalists", label: "Journalists", description: "Media professionals", icon: "📰" },
  { id: "researchers", label: "Researchers", description: "Academics & analysts", icon: "🔬" },
  { id: "platform-teams", label: "Platform Teams", description: "Tech & moderation", icon: "⚙️" },
  { id: "comms-professionals", label: "Comms Pros", description: "PR & strategic comms", icon: "📢" },
  { id: "educators", label: "Educators", description: "Teachers & trainers", icon: "🎓" },
];

export default function Dashboard() {
  const [selectedAudience, setSelectedAudience] = useState<Audience | null>(null);

  const filteredModules = useMemo(() => {
    if (!selectedAudience) return modules;
    return modules.filter((m) => m.audiences?.includes(selectedAudience));
  }, [selectedAudience]);

  const groupedModules = useMemo(() => {
    return filteredModules.reduce((acc, module) => {
      const path = module.learningPath || "General";
      if (!acc[path]) {
        acc[path] = [];
      }
      acc[path].push(module);
      return acc;
    }, {} as Record<string, Module[]>);
  }, [filteredModules]);

  const totalModules = filteredModules.length;
  const learningPaths = Object.keys(groupedModules).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-8 lg:py-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-900">
            Learning Modules
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Explore our comprehensive collection of modules on countering disinformation,
            understanding FIMI, and protecting democratic processes.
          </p>
        </div>
      </section>

      {/* Audience Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-10">
        <div className="container py-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-600">Filter by role:</span>
              <button
                onClick={() => setSelectedAudience(null)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  selectedAudience === null
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All ({modules.length})
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {AUDIENCES.map((audience) => {
                const count = modules.filter((m) =>
                  m.audiences?.includes(audience.id)
                ).length;
                const isSelected = selectedAudience === audience.id;
                return (
                  <button
                    key={audience.id}
                    onClick={() =>
                      setSelectedAudience(isSelected ? null : audience.id)
                    }
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                      isSelected
                        ? "bg-purple text-white shadow-sm"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                    title={audience.description}
                  >
                    <span>{audience.icon}</span>
                    {audience.label}
                    <span
                      className={`text-xs px-1.5 py-0.5 rounded ${
                        isSelected
                          ? "bg-white/20"
                          : "bg-gray-200"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 text-white">
        <div className="container py-4">
          <div className="flex flex-wrap items-center gap-6 lg:gap-12">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-purple-light">{totalModules}</span>
              <span className="text-gray-400 text-sm">
                {selectedAudience ? "Matching" : "Total"} Modules
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-purple-light">{learningPaths}</span>
              <span className="text-gray-400 text-sm">Learning Paths</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-purple-light">{Math.round(totalModules * 8 / 60)}+</span>
              <span className="text-gray-400 text-sm">Hours</span>
            </div>
            {selectedAudience && (
              <button
                onClick={() => setSelectedAudience(null)}
                className="ml-auto text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                Clear filter
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-8 lg:py-12">
        <div className="container">
          {Object.keys(groupedModules).length === 0 ? (
            <div className="text-center py-16 bg-white rounded-xl border border-gray-200">
              <div className="text-4xl mb-4">🔍</div>
              <p className="text-xl text-gray-500 mb-4">No modules found for this audience.</p>
              <button
                onClick={() => setSelectedAudience(null)}
                className="btn btn-primary"
              >
                Show all modules
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {Object.entries(groupedModules).map(([pathName, pathModules]) => (
                <div key={pathName} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                  {/* Path Header */}
                  <div className="bg-gradient-to-r from-purple to-purple-light px-6 py-5 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-xl lg:text-2xl font-bold">{pathName}</h2>
                        <p className="text-purple-100 text-sm mt-1">
                          {pathModules.length} modules • ~{pathModules.length * 8} min
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Modules List */}
                  <div className="divide-y divide-gray-100">
                    {pathModules
                      .sort((a, b) => (a.moduleNumber || 0) - (b.moduleNumber || 0))
                      .map((module) => (
                        <Link
                          key={module.id}
                          href={`/modules/${module.slug}`}
                          className="group flex items-start gap-4 p-4 lg:p-5 hover:bg-gray-50 transition-colors"
                        >
                          {/* Module Number */}
                          <div className="flex-shrink-0 w-10 h-10 bg-purple/10 text-purple rounded-lg flex items-center justify-center text-sm font-bold group-hover:bg-purple group-hover:text-white transition-colors">
                            {module.moduleNumber || "•"}
                          </div>

                          {/* Module Content */}
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 group-hover:text-purple transition-colors">
                              {module.title}
                            </h3>
                            <p className="text-sm text-gray-500 mt-1 line-clamp-1">
                              {module.description}
                            </p>
                            <div className="flex items-center gap-3 mt-2">
                              <span className="text-xs text-gray-400 flex items-center gap-1">
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <circle cx="12" cy="12" r="10"/>
                                  <polyline points="12 6 12 12 16 14"/>
                                </svg>
                                {module.estimatedTime}
                              </span>
                              {module.audiences && module.audiences.length > 0 && (
                                <div className="flex gap-1">
                                  {module.audiences.slice(0, 2).map((aud) => (
                                    <span
                                      key={aud}
                                      className="text-xs"
                                      title={AUDIENCES.find((a) => a.id === aud)?.label}
                                    >
                                      {AUDIENCES.find((a) => a.id === aud)?.icon}
                                    </span>
                                  ))}
                                  {module.audiences.length > 2 && (
                                    <span className="text-xs text-gray-400">
                                      +{module.audiences.length - 2}
                                    </span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Arrow */}
                          <div className="flex-shrink-0 text-gray-300 group-hover:text-purple transition-colors">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to Begin?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Start with any module that interests you. All content is free and self-paced.
          </p>
          <Link href="/register" className="btn btn-primary">
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
}
