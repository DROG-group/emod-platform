"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import modulesData from "@/lib/modules-data.json";
import { Module, Audience } from "@/types/module";

const modules = modulesData as Module[];

const AUDIENCES: { id: Audience; label: string; description: string }[] = [
  { id: "citizens", label: "Citizens", description: "General public" },
  { id: "policymakers", label: "Policymakers", description: "Government & legislators" },
  { id: "journalists", label: "Journalists", description: "Media professionals" },
  { id: "researchers", label: "Researchers", description: "Academics & analysts" },
  { id: "platform-teams", label: "Platform Teams", description: "Tech & moderation" },
  { id: "comms-professionals", label: "Comms Professionals", description: "PR & strategic comms" },
  { id: "educators", label: "Educators", description: "Teachers & trainers" },
];

export default function Dashboard() {
  const [selectedAudience, setSelectedAudience] = useState<Audience | null>(null);

  // Filter modules based on selected audience
  const filteredModules = useMemo(() => {
    if (!selectedAudience) return modules;
    return modules.filter((m) => m.audiences?.includes(selectedAudience));
  }, [selectedAudience]);

  // Group filtered modules by learning path
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple/5 to-gray-50">
      {/* Header */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            EMOD Learning Dashboard
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Explore our comprehensive collection of modules on countering disinformation,
            understanding FIMI, and protecting democratic processes.
          </p>
        </div>
      </section>

      {/* Audience Filter */}
      <section className="py-6 bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="container">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-gray-700">I am a:</span>
              <button
                onClick={() => setSelectedAudience(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedAudience === null
                    ? "bg-purple text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                Show All
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
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                      isSelected
                        ? "bg-purple text-white shadow-md"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                    title={audience.description}
                  >
                    {audience.label}
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-gray-200 text-gray-500"
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

      {/* Stats */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-light">{totalModules}</div>
              <div className="text-gray-300 mt-2">
                {selectedAudience ? "Relevant Modules" : "Total Modules"}
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-light">{learningPaths}</div>
              <div className="text-gray-300 mt-2">Learning Paths</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-light">
                {Math.round(totalModules * 8 / 60)}+
              </div>
              <div className="text-gray-300 mt-2">Hours of Content</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-light">Free</div>
              <div className="text-gray-300 mt-2">Always</div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Audience Info */}
      {selectedAudience && (
        <section className="py-4 bg-purple/10 border-b border-purple/20">
          <div className="container">
            <div className="flex items-center justify-between">
              <p className="text-purple font-medium">
                Showing {totalModules} modules recommended for{" "}
                <span className="font-bold">
                  {AUDIENCES.find((a) => a.id === selectedAudience)?.label}
                </span>
              </p>
              <button
                onClick={() => setSelectedAudience(null)}
                className="text-sm text-purple hover:text-purple-dark underline"
              >
                Clear filter
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Learning Paths */}
      <section className="py-16">
        <div className="container">
          {Object.keys(groupedModules).length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No modules found for this audience.</p>
              <button
                onClick={() => setSelectedAudience(null)}
                className="mt-4 text-purple hover:underline"
              >
                Show all modules
              </button>
            </div>
          ) : (
            <div className="space-y-16">
              {Object.entries(groupedModules).map(([pathName, pathModules]) => (
                <div key={pathName} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                  {/* Path Header */}
                  <div className="bg-gradient-to-r from-purple to-purple-light p-8 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-3xl font-bold mb-2">{pathName}</h2>
                        <p className="text-purple-100 text-lg">
                          {pathModules.length} modules • {pathModules.length * 8} minutes
                        </p>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-semibold">
                        {pathModules.length} Modules
                      </div>
                    </div>
                  </div>

                  {/* Modules List */}
                  <div className="p-8">
                    <div className="grid gap-4">
                      {pathModules
                        .sort((a, b) => (a.moduleNumber || 0) - (b.moduleNumber || 0))
                        .map((module) => (
                          <Link
                            key={module.id}
                            href={`/modules/${module.slug}`}
                            className="group flex items-start gap-6 p-6 bg-gray-50 hover:bg-purple/5 rounded-xl border-2 border-transparent hover:border-purple transition-all duration-300"
                          >
                            {/* Module Number */}
                            <div className="flex-shrink-0 w-14 h-14 bg-purple text-white rounded-full flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                              {module.moduleNumber || "•"}
                            </div>

                            {/* Module Content */}
                            <div className="flex-1 min-w-0">
                              <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple mb-2 transition-colors">
                                {module.title}
                              </h3>
                              <p className="text-gray-600 mb-3 line-clamp-2">
                                {module.description}
                              </p>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10"/>
                                    <polyline points="12 6 12 12 16 14"/>
                                  </svg>
                                  {module.estimatedTime}
                                </span>
                                {/* Audience tags */}
                                {module.audiences && module.audiences.length > 0 && (
                                  <div className="flex flex-wrap gap-1">
                                    {module.audiences.slice(0, 3).map((aud) => (
                                      <span
                                        key={aud}
                                        className="px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded-full"
                                      >
                                        {AUDIENCES.find((a) => a.id === aud)?.label || aud}
                                      </span>
                                    ))}
                                    {module.audiences.length > 3 && (
                                      <span className="px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded-full">
                                        +{module.audiences.length - 3}
                                      </span>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>

                            {/* Arrow Icon */}
                            <div className="flex-shrink-0 text-purple opacity-0 group-hover:opacity-100 transition-opacity">
                              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </Link>
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Start with any module that interests you. All content is free and self-paced.
          </p>
          <Link href="/register" className="btn btn-primary text-lg px-8 py-4">
            Create Free Account
          </Link>
        </div>
      </section>
    </div>
  );
}
