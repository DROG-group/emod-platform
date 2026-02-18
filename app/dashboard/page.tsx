"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import modulesData from "@/lib/modules-data.json";
import { Module, Audience } from "@/types/module";
import { useAuth } from "@/contexts/AuthContext";
import { useProgress } from "@/hooks/useProgress";
import { useCertificates } from "@/hooks/useCertificates";
import { DSA_LEARNING_PATH, getDSAModuleAccess, hasQuiz } from "@/lib/anti-breeze";

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
  const [claimingPath, setClaimingPath] = useState<string | null>(null);
  const { user, profile } = useAuth();
  const { isCompleted, getPathProgress, getLastViewed, progress } = useProgress();
  const { hasCertificateForPath, getCertificateForPath, claimCertificate } = useCertificates();

  async function handleClaimCertificate(pathName: string) {
    setClaimingPath(pathName);
    await claimCertificate(pathName);
    setClaimingPath(null);
  }

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

  // Pre-compute audience counts to avoid recalculating on every render
  const audienceCounts = useMemo(() => {
    return AUDIENCES.reduce((acc, audience) => {
      acc[audience.id] = modules.filter((m) => m.audiences?.includes(audience.id)).length;
      return acc;
    }, {} as Record<Audience, number>);
  }, []);

  // Completed module IDs for DSA access checks
  const completedIds = useMemo(() => {
    return new Set(progress.filter(p => p.completed).map(p => p.module_id));
  }, [progress]);

  const totalModules = filteredModules.length;
  const learningPaths = Object.keys(groupedModules).length;
  const lastViewed = getLastViewed();
  const lastViewedModule = lastViewed ? modules.find(m => m.id === lastViewed.module_id) : null;
  const completedCount = progress.filter(p => p.completed).length;

  // Calculate total hours from actual module estimated times
  const totalMinutes = useMemo(() => {
    return filteredModules.reduce((total, module) => {
      const timeStr = module.estimatedTime || '0';
      const minutes = parseInt(timeStr.match(/\d+/)?.[0] || '0', 10);
      return total + minutes;
    }, 0);
  }, [filteredModules]);
  const totalHours = Math.round(totalMinutes / 60);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Welcome Section for Logged In Users */}
      {user && (
        <section className="bg-gradient-to-r from-purple to-purple-light text-white">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">
                  Welcome back, {profile?.full_name?.split(' ')[0] || 'Learner'}!
                </h2>
                <p className="text-purple-100 text-sm mt-1">
                  You've completed {completedCount} of {modules.length} modules
                </p>
              </div>
              {lastViewedModule && (
                <Link
                  href={`/modules/${lastViewedModule.slug}`}
                  className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Continue: {lastViewedModule.title.length > 30 ? lastViewedModule.title.slice(0, 30) + '...' : lastViewedModule.title}
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-8 lg:py-12">
          <h1 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-900">
            Learning Modules
          </h1>
          <p className="text-gray-600 max-w-2xl">
            63 modules across 10 learning paths covering disinformation detection,
            FIMI analysis, and intervention selection using the DIM framework.
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
                      {audienceCounts[audience.id]}
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
              <span className="text-2xl font-bold text-purple-light">{totalHours}+</span>
              <span className="text-gray-400 text-sm">Hours</span>
            </div>
            {user && (
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-green-400">{completedCount}</span>
                <span className="text-gray-400 text-sm">Completed</span>
              </div>
            )}
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
              {Object.entries(groupedModules).map(([pathName, pathModules]) => {
                const pathProgress = user ? getPathProgress(pathName, pathModules.length) : 0;
                const pathCompletedCount = user ? pathModules.filter(m => isCompleted(m.id)).length : 0;
                const isPathComplete = pathCompletedCount === pathModules.length && pathModules.length > 0;
                const existingCertificate = user ? getCertificateForPath(pathName) : null;

                return (
                  <div key={pathName} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                    {/* Path Header */}
                    <div className="bg-gradient-to-r from-purple to-purple-light px-6 py-5 text-white">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h2 className="text-xl lg:text-2xl font-bold">{pathName}</h2>
                          <p className="text-purple-100 text-sm mt-1">
                            {pathModules.length} modules • ~{pathModules.length * 8} min
                          </p>
                        </div>
                        {user && (
                          <div className="text-right ml-4 flex items-center gap-4">
                            <div>
                              <div className="text-sm text-purple-100">
                                {pathCompletedCount}/{pathModules.length} completed
                              </div>
                              <div className="mt-2 w-32 h-2 bg-white/20 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-white rounded-full transition-all duration-300"
                                  style={{ width: `${pathProgress}%` }}
                                />
                              </div>
                            </div>
                            {isPathComplete && (
                              existingCertificate ? (
                                <Link
                                  href={`/certificates/${existingCertificate.certificate_code}`}
                                  className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                                >
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                  </svg>
                                  View Certificate
                                </Link>
                              ) : (
                                <button
                                  onClick={() => handleClaimCertificate(pathName)}
                                  disabled={claimingPath === pathName}
                                  className="flex items-center gap-2 bg-gold hover:bg-gold/90 text-gray-900 px-3 py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-50"
                                >
                                  {claimingPath === pathName ? (
                                    <>
                                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                      </svg>
                                      Claiming...
                                    </>
                                  ) : (
                                    <>
                                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                      </svg>
                                      Claim Certificate
                                    </>
                                  )}
                                </button>
                              )
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Modules List */}
                    <div className="divide-y divide-gray-100">
                      {pathModules
                        .sort((a, b) => (a.moduleNumber || 0) - (b.moduleNumber || 0))
                        .map((module) => {
                          const completed = user && isCompleted(module.id);
                          const isDSA = pathName === DSA_LEARNING_PATH;
                          const dsaAccess = isDSA && user && module.moduleNumber
                            ? getDSAModuleAccess(module.moduleNumber, completedIds, completedIds)
                            : { unlocked: true };
                          const isLocked = isDSA && user && !dsaAccess.unlocked;
                          const moduleHasQuiz = hasQuiz(module.id);

                          const CardContent = (
                            <>
                              {/* Module Number / Completion / Lock Status */}
                              <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-colors ${
                                completed
                                  ? 'bg-green-100 text-green-600'
                                  : isLocked
                                  ? 'bg-gray-100 text-gray-400'
                                  : 'bg-purple/10 text-purple group-hover:bg-purple group-hover:text-white'
                              }`}>
                                {completed ? (
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                  </svg>
                                ) : isLocked ? (
                                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                  </svg>
                                ) : (
                                  module.moduleNumber || "•"
                                )}
                              </div>

                              {/* Module Content */}
                              <div className="flex-1 min-w-0">
                                <h3 className={`font-semibold transition-colors ${
                                  completed
                                    ? 'text-gray-500'
                                    : isLocked
                                    ? 'text-gray-400'
                                    : 'text-gray-900 group-hover:text-purple'
                                }`}>
                                  {module.title}
                                </h3>
                                <p className={`text-sm mt-1 line-clamp-1 ${isLocked ? 'text-gray-400' : 'text-gray-500'}`}>
                                  {isLocked ? dsaAccess.reason : module.description}
                                </p>
                                <div className="flex items-center gap-3 mt-2">
                                  <span className="text-xs text-gray-400 flex items-center gap-1">
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <circle cx="12" cy="12" r="10"/>
                                      <polyline points="12 6 12 12 16 14"/>
                                    </svg>
                                    {module.estimatedTime}
                                  </span>
                                  {completed && (
                                    <span className="text-xs text-green-600 font-medium">
                                      Completed
                                    </span>
                                  )}
                                  {isDSA && moduleHasQuiz && !completed && (
                                    <span className="text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-medium">
                                      Quiz
                                    </span>
                                  )}
                                  {!isDSA && module.audiences && module.audiences.length > 0 && !completed && (
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

                              {/* Arrow or Lock */}
                              <div className={`flex-shrink-0 transition-colors ${isLocked ? 'text-gray-300' : 'text-gray-300 group-hover:text-purple'}`}>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </div>
                            </>
                          );

                          if (isLocked) {
                            return (
                              <div
                                key={module.id}
                                className="flex items-start gap-4 p-4 lg:p-5 opacity-60 cursor-not-allowed"
                              >
                                {CardContent}
                              </div>
                            );
                          }

                          return (
                            <Link
                              key={module.id}
                              href={`/modules/${module.slug}`}
                              className="group flex items-start gap-4 p-4 lg:p-5 hover:bg-gray-50 transition-colors"
                            >
                              {CardContent}
                            </Link>
                          );
                        })}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      {!user && (
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="container text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to Track Your Progress?</h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Create a free account to save your progress, pick up where you left off, and earn completion certificates.
            </p>
            <Link href="/register" className="btn btn-primary">
              Create Free Account
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
