import Link from "next/link";
import modulesData from "@/lib/modules-data.json";
import { Module } from "@/types/module";

const modules = modulesData as Module[];

// Group modules by learning path
const groupedModules = modules.reduce((acc, module) => {
  const path = module.learningPath || "General";
  if (!acc[path]) {
    acc[path] = [];
  }
  acc[path].push(module);
  return acc;
}, {} as Record<string, Module[]>);

export default function Dashboard() {
  const totalModules = modules.length;
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

      {/* Stats */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-light">{totalModules}</div>
              <div className="text-gray-300 mt-2">Total Modules</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-light">{learningPaths}</div>
              <div className="text-gray-300 mt-2">Learning Paths</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-light">50+</div>
              <div className="text-gray-300 mt-2">Hours of Content</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-light">Free</div>
              <div className="text-gray-300 mt-2">Always</div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16">
        <div className="container">
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
                              <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                                {module.author}
                              </span>
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
