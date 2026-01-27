import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-16 lg:py-24 overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-50 to-transparent" />

        <div className="container relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-100 rounded-full text-sm text-purple-dark font-medium mb-6">
              <span className="w-2 h-2 bg-purple rounded-full animate-pulse" />
              Free e-learning platform
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight text-gray-900">
              Learn to Identify and{" "}
              <span className="text-purple">Counter Disinformation</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              A free e-learning platform covering identification, analysis, and response
              to foreign information manipulation and interference (FIMI).
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/dashboard" className="btn btn-primary text-base px-6 py-3">
                Browse Modules
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/register" className="btn btn-outline text-base px-6 py-3">
                Create Free Account
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-gray-900">64</div>
                <div className="text-sm text-gray-500">Modules</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">10</div>
                <div className="text-sm text-gray-500">Learning Paths</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">19+</div>
                <div className="text-sm text-gray-500">Hours of Content</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple">Free</div>
                <div className="text-sm text-gray-500">Always</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-16 lg:py-20 bg-gray-50 border-y border-gray-200">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Who is EMOD for?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tailored content for different professional roles and expertise levels
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Policymakers", count: 33, icon: "🏛️", desc: "Government & legislators" },
              { title: "Journalists", count: 39, icon: "📰", desc: "Media professionals" },
              { title: "Researchers", count: 46, icon: "🔬", desc: "Academics & analysts" },
              { title: "Citizens", count: 14, icon: "👥", desc: "General public" },
            ].map((audience) => (
              <Link
                key={audience.title}
                href={`/dashboard`}
                className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-purple/30 hover:shadow-lg transition-all duration-200"
              >
                <div className="text-3xl mb-3">{audience.icon}</div>
                <h3 className="font-semibold text-gray-900 group-hover:text-purple transition-colors">
                  {audience.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{audience.desc}</p>
                <p className="text-sm font-medium text-purple">{audience.count} modules</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths Preview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Learning Paths</h2>
              <p className="text-gray-600 max-w-xl">
                Structured courses taking you from fundamentals to advanced topics
              </p>
            </div>
            <Link href="/dashboard" className="mt-4 lg:mt-0 text-purple font-medium hover:underline inline-flex items-center gap-1">
              View all paths
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Understanding Disinformation Basics", modules: 5, level: "Beginner" },
              { name: "Media Literacy Fundamentals", modules: 6, level: "Beginner" },
              { name: "Detection and Verification", modules: 7, level: "Intermediate" },
              { name: "Counter-Messaging Strategies", modules: 6, level: "Intermediate" },
              { name: "Platform Governance", modules: 6, level: "Advanced" },
              { name: "Disinfonomics", modules: 7, level: "Advanced" },
            ].map((path, idx) => (
              <Link
                key={idx}
                href="/dashboard"
                className="group p-6 bg-gray-50 rounded-xl border border-gray-200 hover:bg-white hover:border-purple/30 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className={`badge ${path.level === "Beginner" ? "badge-purple" : "badge-gray"}`}>
                    {path.level}
                  </span>
                  <span className="text-sm text-gray-500">{path.modules} modules</span>
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-purple transition-colors">
                  {path.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-20 bg-gray-900 text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why EMOD?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Built by the SAUFEX consortium to protect democratic processes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Content</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Curated by leading specialists in information security, FIMI, and counter-disinformation.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Practical Focus</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Real scenarios, evidence-based methods, and actionable frameworks you can apply immediately.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 bg-purple/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-purple-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Self-Paced</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Learn at your own pace. Each module is designed to be completed in 8-10 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Educators */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-100 rounded-full text-sm text-purple-dark font-medium mb-4">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                For Educators
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Integrate EMOD into Your Teaching</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Whether you teach university courses, run professional workshops, or develop training programmes,
                EMOD provides flexible, evidence-based content you can integrate into your curriculum.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Modular & Flexible</h4>
                    <p className="text-sm text-gray-600">Self-contained modules (8-10 min each) that fit any schedule</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Ready-to-Use Resources</h4>
                    <p className="text-sm text-gray-600">Syllabi, grading rubrics, discussion prompts, and assessment templates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-purple/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Framework-Based</h4>
                    <p className="text-sm text-gray-600">Built on the DROG Intervention Menu (DIM) methodology</p>
                  </div>
                </div>
              </div>
              <Link href="/handbook" className="btn btn-primary">
                View Teachers Handbook
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Delivery Models</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🎓</span>
                    <h4 className="font-medium text-gray-900">Flipped Classroom</h4>
                  </div>
                  <p className="text-sm text-gray-600">Students complete modules before class; use class time for discussion and case analysis.</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">⚡</span>
                    <h4 className="font-medium text-gray-900">Intensive Workshop</h4>
                  </div>
                  <p className="text-sm text-gray-600">1-3 day professional development with hands-on exercises and live analysis.</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">📚</span>
                    <h4 className="font-medium text-gray-900">Supplementary Material</h4>
                  </div>
                  <p className="text-sm text-gray-600">Integrate specific modules into existing courses as required or recommended reading.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About SAUFEX */}
      <section className="py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Image
              src="/saufex-logo.svg"
              alt="SAUFEX"
              width={180}
              height={60}
              className="h-12 w-auto mx-auto mb-6"
            />
            <h2 className="text-3xl font-bold mb-4">About SAUFEX</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              SAUFEX (Safeguarding EU From Foreign Information Manipulation and Interference)
              is a consortium dedicated to protecting democratic processes through education,
              research, and the development of counter-disinformation tools and methodologies.
            </p>
            <a
              href="https://saufex.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple font-medium hover:underline inline-flex items-center gap-1"
            >
              Learn more about SAUFEX
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-purple to-purple-dark text-white">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-lg text-purple-100 mb-8 max-w-2xl mx-auto">
            64 modules. 10 learning paths. Practical methods you can apply immediately.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/dashboard" className="btn bg-white text-purple hover:bg-gray-100 text-base px-6 py-3">
              Explore Modules
            </Link>
            <Link href="/register" className="btn bg-white/10 text-white hover:bg-white/20 border border-white/30 text-base px-6 py-3">
              Create Free Account
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
