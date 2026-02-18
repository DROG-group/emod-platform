import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-12 lg:py-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About EMOD
            </h1>
            <p className="text-xl text-gray-600">
              The European Master of Countering Disinformation - a free e-learning
              platform developed by the SAUFEX consortium.
            </p>
          </div>
        </div>
      </section>

      {/* What is EMOD */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What is EMOD?</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>EMOD</strong> (European Master of Countering Disinformation) is a free
                  e-learning platform covering the identification, analysis, and response to
                  foreign information manipulation and interference (FIMI).
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The platform offers <strong>63 modules</strong> across <strong>10 learning paths</strong>,
                  covering topics from basic media literacy to advanced concepts like platform governance
                  and the economics of disinformation.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  All content is free, self-paced, and designed to be completed in short sessions -
                  typically 8-10 minutes per module.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAUFEX Connection */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <Image
                  src="/saufex-logo.svg"
                  alt="SAUFEX"
                  width={180}
                  height={60}
                  className="h-16 w-auto"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Part of SAUFEX</h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    EMOD is developed as part of <strong>SAUFEX</strong> (Safeguarding the EU from
                    Foreign Information Manipulation and Interference) - a consortium dedicated to
                    protecting democratic processes through education, research, and the development
                    of counter-disinformation tools and methodologies.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The SAUFEX project brings together experts from across Europe to address the
                    growing challenge of information manipulation targeting democratic institutions,
                    electoral processes, and public discourse.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    EMOD represents the educational pillar of SAUFEX - making expert knowledge
                    accessible to anyone who wants to understand how information manipulation works
                    and what can be done about it.
                  </p>
                </div>
                <a
                  href="https://saufex.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-purple font-medium hover:underline"
                >
                  Learn more about SAUFEX
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-12 lg:py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Who is EMOD for?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: "🏛️", title: "Policymakers", desc: "Government officials and legislators developing counter-disinformation policy" },
                { icon: "📰", title: "Journalists", desc: "Media professionals verifying information and reporting on disinformation" },
                { icon: "🔬", title: "Researchers", desc: "Academics and analysts studying information manipulation" },
                { icon: "⚙️", title: "Platform Teams", desc: "Tech and moderation professionals at social media companies" },
                { icon: "📢", title: "Communications Professionals", desc: "PR and strategic communications teams responding to disinformation" },
                { icon: "🎓", title: "Educators", desc: "Teachers and trainers building media literacy programs" },
                { icon: "👥", title: "Citizens", desc: "Anyone who wants to better understand and resist manipulation" },
              ].map((audience) => (
                <div key={audience.title} className="bg-white p-5 rounded-xl border border-gray-200">
                  <div className="text-2xl mb-2">{audience.icon}</div>
                  <h3 className="font-semibold text-gray-900">{audience.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{audience.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Approach</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center text-purple font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Evidence-Based</h3>
                  <p className="text-gray-600">
                    All content is grounded in research and real-world case studies, not speculation or ideology.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center text-purple font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Practical Focus</h3>
                  <p className="text-gray-600">
                    Modules include scenarios, workflows, and actionable frameworks you can apply immediately.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center text-purple font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Calibrated Confidence</h3>
                  <p className="text-gray-600">
                    We teach you to assess evidence strength and express appropriate uncertainty - avoiding both overclaiming and paralysis.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center text-purple font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">DIM Framework</h3>
                  <p className="text-gray-600">
                    Content is structured around the DROG Intervention Menu (DIM) - a systematic approach to choosing the right response to information threats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-purple to-purple-dark text-white">
        <div className="container text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-purple-100 mb-8 max-w-xl mx-auto">
            Explore our modules and learn practical methods for identifying and countering disinformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/dashboard" className="btn bg-white text-purple hover:bg-gray-100">
              Browse Modules
            </Link>
            <Link href="/glossary" className="btn bg-white/10 text-white hover:bg-white/20 border border-white/30">
              View Glossary
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
