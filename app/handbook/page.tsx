"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const SECTIONS = [
  { id: "overview", title: "Overview" },
  { id: "approach", title: "Our Approach" },
  { id: "dim-framework", title: "DIM Framework" },
  { id: "self-study", title: "Self-Study Guidelines" },
  { id: "course-delivery", title: "Course Delivery" },
  { id: "grading", title: "Grading Guidelines" },
  { id: "online-adaptation", title: "Online Course Adaptation" },
  { id: "resources", title: "Additional Resources" },
];

export default function HandbookPage() {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-12 lg:py-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sm text-purple font-medium mb-3">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              For Educators
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Teachers Handbook
            </h1>
            <p className="text-xl text-gray-600">
              Practical guidance for integrating EMOD into university courses, professional training,
              or self-directed learning. No fluff, no buzzwords. Just concrete methods you can use.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-10">
        <div className="container">
          <nav className="flex overflow-x-auto gap-1 py-3 -mx-4 px-4 scrollbar-hide">
            {SECTIONS.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                  activeSection === section.id
                    ? "bg-purple text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {section.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 lg:py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-12">

            {/* Overview */}
            <div id="overview" className="scroll-mt-32">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center text-purple">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Overview
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    EMOD (European Master of Countering Disinformation) is a free e-learning
                    platform developed by the SAUFEX consortium. It provides <strong>64 modules</strong> across{" "}
                    <strong>10 learning paths</strong>, covering identification, analysis, and response
                    to foreign information manipulation and interference (FIMI).
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    This handbook gives you what you need to integrate EMOD into your teaching, whether
                    as a standalone course, supplementary material, or professional workshop.
                    We&apos;ve included delivery models, grading rubrics, and discussion prompts ready to adapt.
                  </p>

                  <div className="bg-purple-50 rounded-xl p-6 mt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features for Educators</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Modular structure:</strong> Each module is self-contained (8-10 minutes)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Audience-tailored:</strong> Content filtered by role (policymakers, journalists, researchers, etc.)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Framework-based:</strong> Built on the DROG Intervention Menu (DIM) methodology</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span><strong>Free access:</strong> No registration required, completely open</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Approach */}
            <div id="approach" className="scroll-mt-32">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center text-purple">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </span>
                  Our Approach
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    EMOD takes a practical, evidence-based approach to counter-disinformation training.
                    We focus on building analytical skills rather than teaching shortcuts that break under real-world complexity.
                  </p>

                  <div className="bg-purple-50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Core Principles</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-purple/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm font-bold text-purple">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Low drama, high signal</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            We avoid sensationalism. No &quot;crack the code&quot; narratives or breathless warnings.
                            Clear analysis, not Netflix drama.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-purple/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm font-bold text-purple">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Anti-overclaim</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            We teach confidence levels: low, medium, high. We say &quot;signals suggest X&quot; rather than
                            &quot;this is definitely Y.&quot; Certainty is earned, not assumed.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-purple/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm font-bold text-purple">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Focus on harm and impact</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            &quot;Foreign&quot; is a possible attribute, not the goal. We teach harm assessment, intent analysis,
                            coordination detection, and impact evaluation.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-purple/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-sm font-bold text-purple">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Detection is not intervention</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Identifying a problem is step one. Choosing the right response is the real skill.
                            We train both analysis and intervention selection.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Evidence Ladder</h3>
                  <p className="text-gray-700 mb-4">
                    Every module teaches students to classify evidence by strength, not just presence:
                  </p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <h4 className="font-semibold text-green-900">Strong Signals</h4>
                      </div>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>Coordinated timing + shared infrastructure</li>
                        <li>Account creation patterns</li>
                        <li>Cross-platform content reuse</li>
                        <li>Documented attribution</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <h4 className="font-semibold text-yellow-900">Medium Signals</h4>
                      </div>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>Repeated coordination behaviours</li>
                        <li>Partial attribution links</li>
                        <li>Unusual engagement patterns</li>
                        <li>Content amplification anomalies</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <h4 className="font-semibold text-red-900">Weak Signals</h4>
                      </div>
                      <ul className="text-sm text-red-800 space-y-1">
                        <li>Grammar or language patterns</li>
                        <li>&quot;It feels choreographed&quot;</li>
                        <li>&quot;It spread fast&quot;</li>
                        <li>Vibes and intuition alone</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-3 italic">
                    Weak signals are reasons to investigate, not conclusions to report.
                  </p>
                </div>
              </div>
            </div>

            {/* DIM Framework */}
            <div id="dim-framework" className="scroll-mt-32">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center text-purple">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </span>
                  DIM Framework
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The DROG Intervention Menu (DIM) is the methodological backbone of EMOD. It provides a structured
                    approach to selecting interventions based on context, not reflex. DIM is not a timeline. It&apos;s a menu.
                    Your training teaches people to pick the right tool for the context.
                  </p>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">The Five Generations</h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-600">G1</span>
                          <h4 className="font-semibold text-gray-900">Generation 1: Awareness</h4>
                        </div>
                        <p className="text-sm text-gray-600 ml-11">
                          Basic media literacy campaigns. &quot;Be aware disinformation exists.&quot; Necessary foundation, but limited
                          effectiveness alone. Often where interventions stop prematurely.
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-purple-200 ring-1 ring-purple-100">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-8 h-8 bg-purple text-white rounded-full flex items-center justify-center text-sm font-bold">G2</span>
                          <h4 className="font-semibold text-gray-900">Generation 2: Debunking</h4>
                          <span className="text-xs bg-purple/10 text-purple px-2 py-0.5 rounded-full">Reactive</span>
                        </div>
                        <p className="text-sm text-gray-600 ml-11">
                          Fact-checking and correction after false content spreads. Works best for misinformation
                          (honest errors). Less effective for disinformation (deliberate deception) or committed believers.
                          Correcting someone who knows they&apos;re lying rarely changes their behaviour.
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-purple-200 ring-1 ring-purple-100">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-8 h-8 bg-purple text-white rounded-full flex items-center justify-center text-sm font-bold">G3</span>
                          <h4 className="font-semibold text-gray-900">Generation 3: Prebunking</h4>
                          <span className="text-xs bg-purple/10 text-purple px-2 py-0.5 rounded-full">Proactive</span>
                        </div>
                        <p className="text-sm text-gray-600 ml-11">
                          Inoculation against manipulation techniques before exposure. Teaches recognition of tactics
                          rather than specific claims. More durable than debunking because it builds resistance to
                          future encounters with similar techniques.
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-purple-200 ring-1 ring-purple-100">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-8 h-8 bg-purple text-white rounded-full flex items-center justify-center text-sm font-bold">G4</span>
                          <h4 className="font-semibold text-gray-900">Generation 4: Moderation</h4>
                          <span className="text-xs bg-purple/10 text-purple px-2 py-0.5 rounded-full">Structural</span>
                        </div>
                        <p className="text-sm text-gray-600 ml-11">
                          Platform-level interventions: content removal, labelling, reduced distribution, account
                          suspension. Necessary for coordinated inauthentic behaviour. Raises free expression
                          concerns that must be weighed against harm reduction.
                        </p>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-purple-200 ring-1 ring-purple-100">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="w-8 h-8 bg-purple text-white rounded-full flex items-center justify-center text-sm font-bold">G5</span>
                          <h4 className="font-semibold text-gray-900">Generation 5: Interaction Design</h4>
                          <span className="text-xs bg-purple/10 text-purple px-2 py-0.5 rounded-full">Systemic</span>
                        </div>
                        <p className="text-sm text-gray-600 ml-11">
                          Redesigning how platforms and information systems work. Friction before sharing,
                          algorithmic changes, transparency requirements, interoperability. Addresses root
                          causes rather than symptoms. The frontier of counter-disinformation work.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Matching Response to Context</h3>
                  <p className="text-gray-700 mb-4">
                    The key skill EMOD develops is matching the right intervention to the situation:
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Situation</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Recommended DIM</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Rationale</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-3 px-4 text-gray-700">Person shared false claim they believe is true</td>
                          <td className="py-3 px-4"><span className="bg-purple/10 text-purple px-2 py-0.5 rounded text-xs font-medium">G2 Debunk</span></td>
                          <td className="py-3 px-4 text-gray-600">Correction works when intent wasn&apos;t to deceive</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700">Predictable manipulation campaign approaching (e.g., election)</td>
                          <td className="py-3 px-4"><span className="bg-purple/10 text-purple px-2 py-0.5 rounded text-xs font-medium">G3 Prebunk</span></td>
                          <td className="py-3 px-4 text-gray-600">Build resistance before exposure</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700">Coordinated inauthentic accounts spreading content</td>
                          <td className="py-3 px-4"><span className="bg-purple/10 text-purple px-2 py-0.5 rounded text-xs font-medium">G4 Moderate</span></td>
                          <td className="py-3 px-4 text-gray-600">Debunking won&apos;t stop bad-faith actors</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700">Platform design amplifies harmful content systematically</td>
                          <td className="py-3 px-4"><span className="bg-purple/10 text-purple px-2 py-0.5 rounded text-xs font-medium">G5 Redesign</span></td>
                          <td className="py-3 px-4 text-gray-600">Address the system, not individual content</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-gray-900 text-white rounded-xl p-6 mt-6">
                    <h4 className="font-semibold mb-2">The DROG Principle</h4>
                    <p className="text-gray-300 text-sm">
                      Stop treating detection as the hero. Stop assuming stable patterns. Stop defaulting to
                      &quot;educate/fact-check.&quot; Start teaching context selection, intervention choice, and
                      interaction conditions. Detection is input into choosing an intervention, not the intervention itself.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Self-Study Guidelines */}
            <div id="self-study" className="scroll-mt-32">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center text-purple">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                  Self-Study Guidelines
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    EMOD is designed to support independent learning. Here&apos;s how to guide students
                    through effective self-study:
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Recommended Learning Sequence</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Foundation Modules</h4>
                        <p className="text-gray-600 text-sm mt-1">
                          Start with &quot;Understanding Disinformation Basics&quot; and &quot;Media Literacy Fundamentals&quot;
                          to establish core concepts and terminology.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Role-Specific Paths</h4>
                        <p className="text-gray-600 text-sm mt-1">
                          Use the audience filter to focus on modules relevant to the learner&apos;s field
                          (journalism, policy, research, etc.).
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 p-4 bg-gray-50 rounded-xl">
                      <div className="flex-shrink-0 w-8 h-8 bg-purple text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Advanced Topics</h4>
                        <p className="text-gray-600 text-sm mt-1">
                          Progress to specialised paths like &quot;Disinfonomics,&quot; &quot;Platform Governance,&quot;
                          or &quot;AI & Synthetic Media&quot; based on interest.
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Study Recommendations</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 border border-gray-200 rounded-xl">
                      <div className="text-2xl mb-2">📅</div>
                      <h4 className="font-semibold text-gray-900">Pace</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        2-3 modules per session, allowing time for reflection between topics.
                      </p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl">
                      <div className="text-2xl mb-2">📝</div>
                      <h4 className="font-semibold text-gray-900">Notes</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Keep a learning journal to record key concepts, questions, and real-world examples.
                      </p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl">
                      <div className="text-2xl mb-2">🔍</div>
                      <h4 className="font-semibold text-gray-900">Practice</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Apply concepts by analysing current news stories for manipulation techniques.
                      </p>
                    </div>
                    <div className="p-4 border border-gray-200 rounded-xl">
                      <div className="text-2xl mb-2">📚</div>
                      <h4 className="font-semibold text-gray-900">Glossary</h4>
                      <p className="text-gray-600 text-sm mt-1">
                        Use the <Link href="/glossary" className="text-purple hover:underline">Glossary</Link> to
                        reinforce terminology and explore related concepts.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-3">Time Commitment</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Programme</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Modules</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Est. Time</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-3 px-4 text-gray-700">Core Fundamentals</td>
                          <td className="py-3 px-4 text-gray-600">12 modules</td>
                          <td className="py-3 px-4 text-gray-600">2-3 hours</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700">Role-Specific Track</td>
                          <td className="py-3 px-4 text-gray-600">15-20 modules</td>
                          <td className="py-3 px-4 text-gray-600">3-4 hours</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700">Complete Programme</td>
                          <td className="py-3 px-4 text-gray-600">64 modules</td>
                          <td className="py-3 px-4 text-gray-600">10-12 hours</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Course Delivery */}
            <div id="course-delivery" className="scroll-mt-32">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center text-purple">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </span>
                  Course Delivery
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    EMOD can be integrated into university courses, professional training, or workshop formats.
                    Here are recommended delivery models:
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">Delivery Models</h3>

                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                      <div className="bg-purple/5 px-6 py-4 border-b border-gray-200">
                        <h4 className="font-semibold text-gray-900">Model A: Flipped Classroom</h4>
                        <p className="text-sm text-gray-600 mt-1">Recommended for semester courses</p>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-purple font-bold">•</span>
                            <span>Students complete assigned EMOD modules before class (2-4 modules/week)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple font-bold">•</span>
                            <span>In-class time devoted to discussion, case studies, and practical exercises</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple font-bold">•</span>
                            <span>Weekly reflection papers connecting module content to current events</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple font-bold">•</span>
                            <span>Group projects applying DIM framework to real disinformation cases</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                      <div className="bg-purple/5 px-6 py-4 border-b border-gray-200">
                        <h4 className="font-semibold text-gray-900">Model B: Intensive Workshop</h4>
                        <p className="text-sm text-gray-600 mt-1">For professional development (1-3 days)</p>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-purple font-bold">•</span>
                            <span>Pre-workshop: Assign 6-8 foundational modules as preparation</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple font-bold">•</span>
                            <span>Workshop: Focus on hands-on exercises, simulations, and role-play</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple font-bold">•</span>
                            <span>Include live analysis of current disinformation campaigns</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple font-bold">•</span>
                            <span>Post-workshop: Self-directed completion of remaining modules</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="border border-gray-200 rounded-xl overflow-hidden">
                      <div className="bg-purple/5 px-6 py-4 border-b border-gray-200">
                        <h4 className="font-semibold text-gray-900">Model C: Supplementary Material</h4>
                        <p className="text-sm text-gray-600 mt-1">Integration into existing courses</p>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-2 text-gray-700 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-purple font-bold">•</span>
                            <span>Select specific modules relevant to course topics</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple font-bold">•</span>
                            <span>Assign as required or recommended reading alongside primary materials</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple font-bold">•</span>
                            <span>Use glossary terms to standardise vocabulary</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple font-bold">•</span>
                            <span>Reference DIM framework in assignments</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Suggested Weekly Schedule (14-Week Semester)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Week</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Focus</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Modules</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-3 px-4 text-gray-700">1-2</td>
                          <td className="py-3 px-4 text-gray-600">Foundations & Terminology</td>
                          <td className="py-3 px-4 text-gray-600">Disinformation Basics, Media Literacy</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700">3-4</td>
                          <td className="py-3 px-4 text-gray-600">FIMI & Threat Landscape</td>
                          <td className="py-3 px-4 text-gray-600">FIMI Introduction, Hybrid Threats</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700">5-6</td>
                          <td className="py-3 px-4 text-gray-600">Detection & Verification</td>
                          <td className="py-3 px-4 text-gray-600">OSINT Techniques, Source Verification</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700">7-8</td>
                          <td className="py-3 px-4 text-gray-600">DIM Framework</td>
                          <td className="py-3 px-4 text-gray-600">Debunking, Prebunking, Inoculation</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700">9-10</td>
                          <td className="py-3 px-4 text-gray-600">Platform Dynamics</td>
                          <td className="py-3 px-4 text-gray-600">Content Moderation, Algorithmic Amplification</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700">11-12</td>
                          <td className="py-3 px-4 text-gray-600">Specialisation</td>
                          <td className="py-3 px-4 text-gray-600">Role-specific modules (journalism, policy, etc.)</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700">13-14</td>
                          <td className="py-3 px-4 text-gray-600">Capstone Projects</td>
                          <td className="py-3 px-4 text-gray-600">Applied analysis, presentations</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Discussion Prompts</h3>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-purple font-bold">1.</span>
                        <span>Find a recent example of disinformation. Which manipulation techniques does it use?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple font-bold">2.</span>
                        <span>Apply the DIM framework: What intervention would you recommend and why?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple font-bold">3.</span>
                        <span>What are the trade-offs between content moderation and free expression?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple font-bold">4.</span>
                        <span>How might AI change the disinformation landscape in the next 5 years?</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-purple font-bold">5.</span>
                        <span>Design a prebunking campaign for a specific audience on a topic of your choice.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Grading Guidelines */}
            <div id="grading" className="scroll-mt-32">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center text-purple">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Grading Guidelines
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    EMOD modules include quizzes but no formal grading. For academic credit, you&apos;ll
                    need your own assessment framework. Here&apos;s what we recommend: tested approaches
                    that reward good judgement over rote recall:
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">Assessment Components</h3>

                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">Module Completion & Reflection</h4>
                        <span className="text-sm font-medium text-purple bg-purple/10 px-3 py-1 rounded-full">20%</span>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Weekly reflection journals (1-2 pages) connecting modules to current events</li>
                        <li>• Demonstrated engagement with module content and glossary terms</li>
                        <li>• Credit for completing assigned modules on schedule</li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">Participation & Discussion</h4>
                        <span className="text-sm font-medium text-purple bg-purple/10 px-3 py-1 rounded-full">20%</span>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Quality contributions to class discussions</li>
                        <li>• Ability to apply concepts from modules to discussion topics</li>
                        <li>• Peer engagement and constructive feedback</li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">Case Study Analysis</h4>
                        <span className="text-sm font-medium text-purple bg-purple/10 px-3 py-1 rounded-full">25%</span>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Mid-term assignment: Analyse a disinformation campaign using EMOD frameworks</li>
                        <li>• Identify actors, techniques, platforms, and target audiences</li>
                        <li>• Propose intervention strategies using the DIM framework</li>
                      </ul>
                    </div>

                    <div className="border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">Final Project</h4>
                        <span className="text-sm font-medium text-purple bg-purple/10 px-3 py-1 rounded-full">35%</span>
                      </div>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Design a counter-disinformation intervention for a specific context</li>
                        <li>• Options: prebunking campaign, policy brief, platform recommendation, training programme</li>
                        <li>• Present and defend methodology using EMOD concepts</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Rubric: Case Study Analysis</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Criterion</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Excellent (A)</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Satisfactory (B-C)</th>
                          <th className="text-left py-3 px-4 font-semibold text-gray-900">Needs Work (D-F)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr>
                          <td className="py-3 px-4 text-gray-700 font-medium">Identification</td>
                          <td className="py-3 px-4 text-gray-600">Correctly identifies type, actors, techniques with appropriate confidence levels</td>
                          <td className="py-3 px-4 text-gray-600">Identifies most elements; confidence levels unclear</td>
                          <td className="py-3 px-4 text-gray-600">Significant misidentification or overclaims certainty</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700 font-medium">Framework Application</td>
                          <td className="py-3 px-4 text-gray-600">Selects appropriate DIM intervention with clear rationale for context</td>
                          <td className="py-3 px-4 text-gray-600">Applies framework but with incomplete reasoning</td>
                          <td className="py-3 px-4 text-gray-600">Defaults to debunking without considering alternatives</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700 font-medium">Evidence Strength</td>
                          <td className="py-3 px-4 text-gray-600">Classifies signals as weak/medium/strong; uses multiple credible sources</td>
                          <td className="py-3 px-4 text-gray-600">Adequate sourcing; signal strength not clearly distinguished</td>
                          <td className="py-3 px-4 text-gray-600">Treats all signals as equal weight; unverified claims</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-700 font-medium">Intervention Design</td>
                          <td className="py-3 px-4 text-gray-600">Practical recommendations; acknowledges limitations and trade-offs</td>
                          <td className="py-3 px-4 text-gray-600">Reasonable suggestions lacking nuance</td>
                          <td className="py-3 px-4 text-gray-600">Unrealistic proposals; no consideration of constraints</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Sample Final Project Topics</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "Design a prebunking campaign for vaccine misinformation targeting parents",
                      "Develop content moderation guidelines for a social media platform",
                      "Create a media literacy curriculum for high school students",
                      "Write a policy brief on AI-generated disinformation for policymakers",
                      "Analyse a foreign influence operation and propose countermeasures",
                      "Design a newsroom protocol for verifying viral content",
                    ].map((topic, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg text-sm text-gray-700">
                        <span className="text-purple font-bold">{idx + 1}.</span>
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Online Course Adaptation */}
            <div id="online-adaptation" className="scroll-mt-32">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center text-purple">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </span>
                  Online Course Adaptation
                </h2>
                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-700 leading-relaxed mb-6">
                    EMOD&apos;s web-based format makes it ideal for online learning. Here&apos;s how to structure
                    a fully online course:
                  </p>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">LMS Integration</h3>
                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-gray-700 mb-4">
                      EMOD can be integrated with any Learning Management System (Moodle, Canvas, Blackboard, etc.):
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Link directly to specific modules in your LMS course structure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Create discussion forums corresponding to each module or learning path</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Use LMS quizzes to verify understanding of module concepts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Embed glossary terms as LMS glossary entries for quick reference</span>
                      </li>
                    </ul>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">Asynchronous vs Synchronous</h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="border border-gray-200 rounded-xl p-5">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs">A</span>
                        Asynchronous Elements
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Self-paced EMOD module completion</li>
                        <li>• Discussion board responses</li>
                        <li>• Weekly reflection journals</li>
                        <li>• Peer review of written work</li>
                        <li>• Case study submissions</li>
                      </ul>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-5">
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center text-xs">S</span>
                        Synchronous Elements
                      </h4>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Weekly video conference sessions</li>
                        <li>• Live case study discussions</li>
                        <li>• Guest speaker presentations</li>
                        <li>• Group project work sessions</li>
                        <li>• Final project presentations</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-4">Recommended Weekly Structure</h3>
                  <div className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
                      <div className="p-5">
                        <h4 className="font-semibold text-gray-900 mb-3">Days 1-4: Self-Paced</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <span className="text-purple">→</span>
                            Complete assigned EMOD modules
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple">→</span>
                            Post to discussion forum
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple">→</span>
                            Begin reflection journal
                          </li>
                        </ul>
                      </div>
                      <div className="p-5">
                        <h4 className="font-semibold text-gray-900 mb-3">Days 5-7: Interactive</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                          <li className="flex items-start gap-2">
                            <span className="text-purple">→</span>
                            Live session (60-90 min)
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple">→</span>
                            Respond to peers on forum
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-purple">→</span>
                            Submit reflection journal
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Engagement Strategies</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-purple/5 rounded-xl">
                      <div className="text-3xl mb-2">🎯</div>
                      <h4 className="font-semibold text-gray-900 text-sm">Clear Expectations</h4>
                      <p className="text-xs text-gray-600 mt-1">Publish weekly schedule with deadlines upfront</p>
                    </div>
                    <div className="text-center p-4 bg-purple/5 rounded-xl">
                      <div className="text-3xl mb-2">💬</div>
                      <h4 className="font-semibold text-gray-900 text-sm">Active Presence</h4>
                      <p className="text-xs text-gray-600 mt-1">Regular instructor posts and quick feedback</p>
                    </div>
                    <div className="text-center p-4 bg-purple/5 rounded-xl">
                      <div className="text-3xl mb-2">👥</div>
                      <h4 className="font-semibold text-gray-900 text-sm">Peer Learning</h4>
                      <p className="text-xs text-gray-600 mt-1">Small group projects and peer review</p>
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Technology Requirements</h3>
                  <p className="text-gray-700 mb-4">
                    For students participating in an EMOD-based online course:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Modern web browser (Chrome, Firefox, Safari, Edge)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Stable internet connection for accessing EMOD and video sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Webcam and microphone for live sessions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Access to institution&apos;s LMS</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Resources */}
            <div id="resources" className="scroll-mt-32">
              <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-10 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 bg-purple/10 rounded-lg flex items-center justify-center text-purple">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </span>
                  Additional Resources
                </h2>
                <div className="prose prose-gray max-w-none">
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <Link
                      href="/glossary"
                      className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-purple/30 hover:bg-purple/5 transition-colors group no-underline"
                    >
                      <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center text-purple group-hover:bg-purple group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Glossary</h4>
                        <p className="text-sm text-gray-600">Key terms and definitions</p>
                      </div>
                    </Link>
                    <Link
                      href="/faq"
                      className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-purple/30 hover:bg-purple/5 transition-colors group no-underline"
                    >
                      <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center text-purple group-hover:bg-purple group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">FAQ</h4>
                        <p className="text-sm text-gray-600">Common questions answered</p>
                      </div>
                    </Link>
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-purple/30 hover:bg-purple/5 transition-colors group no-underline"
                    >
                      <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center text-purple group-hover:bg-purple group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">All Modules</h4>
                        <p className="text-sm text-gray-600">Browse the complete catalogue</p>
                      </div>
                    </Link>
                    <Link
                      href="/about"
                      className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:border-purple/30 hover:bg-purple/5 transition-colors group no-underline"
                    >
                      <div className="w-12 h-12 bg-purple/10 rounded-lg flex items-center justify-center text-purple group-hover:bg-purple group-hover:text-white transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">About EMOD</h4>
                        <p className="text-sm text-gray-600">Learn about the platform</p>
                      </div>
                    </Link>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">External Resources</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>
                        <a href="https://saufex.eu" target="_blank" rel="noopener noreferrer" className="text-purple hover:underline font-medium">SAUFEX Project</a>
                        {" "}- Learn more about the consortium behind EMOD
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>
                        <a href="https://dfrlab.org" target="_blank" rel="noopener noreferrer" className="text-purple hover:underline font-medium">Digital Forensic Research Lab</a>
                        {" "}- Case studies and analysis of disinformation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-purple flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span>
                        <a href="https://euvsdisinfo.eu" target="_blank" rel="noopener noreferrer" className="text-purple hover:underline font-medium">EUvsDisinfo</a>
                        {" "}- EU database of pro-Kremlin disinformation cases
                      </span>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mt-8 mb-4">Contact for Educators</h3>
                  <div className="bg-purple/5 rounded-xl p-6">
                    <p className="text-gray-700 mb-4">
                      Planning to use EMOD in your institution? We&apos;d love to hear from you and support
                      your implementation.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="mailto:info@saufex.eu"
                        className="btn btn-primary inline-flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Contact Us
                      </a>
                      <a
                        href="https://discord.gg/bvaGd5rahu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline inline-flex items-center justify-center gap-2"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                        </svg>
                        Join Discord Community
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
