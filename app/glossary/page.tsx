"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

interface Term {
  term: string;
  definition: string;
  category: string;
  relatedTerms?: string[];
}

const GLOSSARY_TERMS: Term[] = [
  // Core Concepts
  {
    term: "Disinformation",
    definition: "False information deliberately created or spread with the intent to deceive. The key distinction from misinformation is the intentional nature of the deception.",
    category: "Core Concepts",
    relatedTerms: ["Misinformation", "Malinformation", "FIMI"],
  },
  {
    term: "Misinformation",
    definition: "False information shared without intent to deceive. The person spreading it believes it to be true. While unintentional, misinformation can still cause harm.",
    category: "Core Concepts",
    relatedTerms: ["Disinformation", "Malinformation"],
  },
  {
    term: "Malinformation",
    definition: "True information shared with the intent to cause harm. This includes private information exposed to damage someone, or accurate facts presented out of context to mislead.",
    category: "Core Concepts",
    relatedTerms: ["Disinformation", "Misinformation"],
  },
  {
    term: "FIMI",
    definition: "Foreign Information Manipulation and Interference. A pattern of behaviour that threatens or negatively impacts democratic processes, typically involving foreign state or non-state actors attempting to influence public opinion or political decisions.",
    category: "Core Concepts",
    relatedTerms: ["Disinformation", "Hybrid Threats", "Attribution"],
  },
  {
    term: "Information Disorder",
    definition: "An umbrella term covering the spectrum of mis-, dis-, and malinformation. Coined by Claire Wardle and Hossein Derakhshan to describe the polluted information environment.",
    category: "Core Concepts",
    relatedTerms: ["Disinformation", "Misinformation", "Malinformation"],
  },

  // Frameworks & Methods
  {
    term: "DIM",
    definition: "DROG Intervention Menu. A systematic framework for categorising and selecting responses to information manipulation. Includes Gen 2 (debunking), Gen 3 (prebunking), Gen 4 (moderation), and Gen 5 (interaction design).",
    category: "Frameworks",
    relatedTerms: ["Debunking", "Prebunking", "Inoculation"],
  },
  {
    term: "TTF",
    definition: "Transaction Table Framework. A method for mapping information ecosystems by identifying who gives what to get what, and how. Used to understand the economic incentives behind information manipulation.",
    category: "Frameworks",
    relatedTerms: ["Disinfonomics", "DIM"],
  },
  {
    term: "Debunking",
    definition: "Correcting false information after it has spread. Also called 'reactive fact-checking'. Effective for misinformation but often insufficient for disinformation where intent is to deceive.",
    category: "Frameworks",
    relatedTerms: ["Prebunking", "DIM", "Fact-checking"],
  },
  {
    term: "Prebunking",
    definition: "Proactively warning people about manipulation techniques before they encounter them. Based on inoculation theory - exposing people to weakened forms of manipulation builds resistance.",
    category: "Frameworks",
    relatedTerms: ["Inoculation", "Debunking", "DIM"],
  },
  {
    term: "Inoculation Theory",
    definition: "The psychological principle that exposure to weakened forms of persuasive attacks can build resistance to future manipulation, similar to how vaccines work. The basis for prebunking approaches.",
    category: "Frameworks",
    relatedTerms: ["Prebunking", "DIM"],
  },

  // Actors & Tactics
  {
    term: "Coordinated Inauthentic Behaviour (CIB)",
    definition: "When groups of accounts work together to mislead others about who they are or what they're doing. Often involves fake accounts, bots, or real people being paid to pose as grassroots supporters.",
    category: "Actors & Tactics",
    relatedTerms: ["Astroturfing", "Bot", "Troll Farm"],
  },
  {
    term: "Astroturfing",
    definition: "Creating the false impression of grassroots support for a position. Named after AstroTurf (fake grass), it involves organised campaigns that disguise their true origin and funding.",
    category: "Actors & Tactics",
    relatedTerms: ["CIB", "Troll Farm"],
  },
  {
    term: "Troll Farm",
    definition: "An organised group that creates and operates fake social media accounts to spread disinformation or influence public opinion. Often state-sponsored or commercially operated.",
    category: "Actors & Tactics",
    relatedTerms: ["CIB", "Bot", "Astroturfing"],
  },
  {
    term: "Bot",
    definition: "An automated account that posts or interacts on social media without human intervention. Can be used to artificially amplify content, create false impressions of popularity, or harass users.",
    category: "Actors & Tactics",
    relatedTerms: ["CIB", "Troll Farm"],
  },
  {
    term: "Influence Operation",
    definition: "A coordinated effort to affect the opinions, attitudes, or behaviour of a target audience. Can include disinformation, propaganda, and other manipulation techniques.",
    category: "Actors & Tactics",
    relatedTerms: ["FIMI", "CIB", "Propaganda"],
  },
  {
    term: "Propaganda",
    definition: "Information, especially biased or misleading, used to promote a political cause or point of view. Unlike disinformation, propaganda may contain true information but is presented to serve a specific agenda.",
    category: "Actors & Tactics",
    relatedTerms: ["Disinformation", "Influence Operation"],
  },

  // Detection & Analysis
  {
    term: "Attribution",
    definition: "The process of identifying who is responsible for an information operation. Attribution is difficult and requires strong evidence - overclaiming attribution undermines credibility.",
    category: "Detection & Analysis",
    relatedTerms: ["FIMI", "Influence Operation"],
  },
  {
    term: "Open Source Intelligence (OSINT)",
    definition: "Intelligence gathered from publicly available sources such as social media, websites, public records, and media. A key method for investigating disinformation campaigns.",
    category: "Detection & Analysis",
    relatedTerms: ["Attribution", "Verification"],
  },
  {
    term: "Verification",
    definition: "The process of confirming whether information, images, or videos are authentic and accurately represent what they claim. A core practice for journalists and researchers.",
    category: "Detection & Analysis",
    relatedTerms: ["OSINT", "Fact-checking"],
  },
  {
    term: "Fact-checking",
    definition: "The process of verifying claims and statements to determine their accuracy. Professional fact-checkers follow standardised methodologies and transparency practices.",
    category: "Detection & Analysis",
    relatedTerms: ["Verification", "Debunking"],
  },

  // Platform & Governance
  {
    term: "Content Moderation",
    definition: "The practice of monitoring and applying rules to user-generated content on platforms. Includes removing violating content, labelling misleading information, and reducing distribution.",
    category: "Platform & Governance",
    relatedTerms: ["Platform Governance", "DIM"],
  },
  {
    term: "Algorithmic Amplification",
    definition: "When platform algorithms increase the visibility and reach of content. Engagement-optimising algorithms can inadvertently amplify disinformation because it often generates strong reactions.",
    category: "Platform & Governance",
    relatedTerms: ["Content Moderation", "Platform Governance"],
  },
  {
    term: "Platform Governance",
    definition: "The rules, policies, and practices platforms use to manage content and user behaviour. Includes terms of service, content policies, and enforcement mechanisms.",
    category: "Platform & Governance",
    relatedTerms: ["Content Moderation", "Algorithmic Amplification"],
  },

  // Psychology & Effects
  {
    term: "Confirmation Bias",
    definition: "The tendency to search for, interpret, and recall information in a way that confirms one's pre-existing beliefs. Makes people vulnerable to disinformation that aligns with their worldview.",
    category: "Psychology",
    relatedTerms: ["Echo Chamber", "Filter Bubble"],
  },
  {
    term: "Echo Chamber",
    definition: "An environment where people only encounter information and opinions that reinforce their existing beliefs. Often involves active exclusion of contrary views.",
    category: "Psychology",
    relatedTerms: ["Filter Bubble", "Confirmation Bias"],
  },
  {
    term: "Filter Bubble",
    definition: "The intellectual isolation that can occur when algorithms selectively present information based on user preferences. Different from echo chambers, which involve social reinforcement.",
    category: "Psychology",
    relatedTerms: ["Echo Chamber", "Algorithmic Amplification"],
  },
  {
    term: "Backfire Effect",
    definition: "When correcting misinformation causes people to believe it more strongly. Research suggests this is rarer than commonly claimed, but can occur on identity-linked beliefs.",
    category: "Psychology",
    relatedTerms: ["Debunking", "Confirmation Bias"],
  },

  // AI & Technology
  {
    term: "Deepfake",
    definition: "Synthetic media where a person's likeness is replaced with someone else's using AI. Can create convincing fake videos of people saying or doing things they never did.",
    category: "AI & Technology",
    relatedTerms: ["Synthetic Media", "AI-generated Content"],
  },
  {
    term: "Synthetic Media",
    definition: "Media (images, video, audio, text) that is artificially generated or manipulated using AI. Includes deepfakes, AI-generated images, and text produced by large language models.",
    category: "AI & Technology",
    relatedTerms: ["Deepfake", "AI-generated Content"],
  },
  {
    term: "Hybrid Threats",
    definition: "Threats that combine conventional and unconventional methods, including disinformation, cyberattacks, economic pressure, and military intimidation. Often employed by state actors.",
    category: "AI & Technology",
    relatedTerms: ["FIMI", "Influence Operation"],
  },
];

const CATEGORIES = [...new Set(GLOSSARY_TERMS.map(t => t.category))];

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter(term => {
      const matchesSearch = searchQuery === "" ||
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definition.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === null || term.category === selectedCategory;
      return matchesSearch && matchesCategory;
    }).sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, selectedCategory]);

  const groupedTerms = useMemo(() => {
    const groups: Record<string, Term[]> = {};
    for (const term of filteredTerms) {
      if (!groups[term.category]) {
        groups[term.category] = [];
      }
      groups[term.category].push(term);
    }
    return groups;
  }, [filteredTerms]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Glossary
            </h1>
            <p className="text-xl text-gray-600">
              Key terms and concepts used throughout EMOD modules.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-10">
        <div className="container py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search terms..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple/20 focus:border-purple outline-none"
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  selectedCategory === null
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                All
              </button>
              {CATEGORIES.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-purple text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-8 lg:py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {filteredTerms.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <p className="text-gray-500">No terms found matching your search.</p>
              </div>
            ) : (
              <div className="space-y-8">
                {Object.entries(groupedTerms).map(([category, terms]) => (
                  <div key={category}>
                    <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple rounded-full" />
                      {category}
                      <span className="text-sm font-normal text-gray-500">({terms.length})</span>
                    </h2>
                    <div className="space-y-4">
                      {terms.map(term => (
                        <div
                          key={term.term}
                          id={term.term.toLowerCase().replace(/\s+/g, '-')}
                          className="bg-white rounded-xl border border-gray-200 p-6 hover:border-purple/30 transition-colors"
                        >
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{term.term}</h3>
                          <p className="text-gray-700 leading-relaxed">{term.definition}</p>
                          {term.relatedTerms && term.relatedTerms.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-gray-100">
                              <span className="text-sm text-gray-500">Related: </span>
                              <span className="text-sm">
                                {term.relatedTerms.map((related, idx) => (
                                  <span key={related}>
                                    <a
                                      href={`#${related.toLowerCase().replace(/\s+/g, '-')}`}
                                      className="text-purple hover:underline"
                                    >
                                      {related}
                                    </a>
                                    {idx < term.relatedTerms!.length - 1 && ", "}
                                  </span>
                                ))}
                              </span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container text-center">
          <p className="text-gray-600 mb-4">
            Want to learn more about these concepts?
          </p>
          <Link href="/dashboard" className="btn btn-primary">
            Explore Modules
          </Link>
        </div>
      </section>
    </div>
  );
}
