"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQ_ITEMS: FAQItem[] = [
  // About EMOD
  {
    question: "What is EMOD?",
    answer: "EMOD (European Master of Countering Disinformation) is a free e-learning platform developed by the SAUFEX consortium. It provides comprehensive training on identifying, understanding, and countering foreign information manipulation and interference (FIMI).",
    category: "About EMOD",
  },
  {
    question: "Is EMOD really free?",
    answer: "Yes, EMOD is completely free. All 64 modules across 10 learning paths are accessible without any payment. The platform is funded through the SAUFEX consortium as a public good to strengthen democratic resilience.",
    category: "About EMOD",
  },
  {
    question: "What is SAUFEX?",
    answer: "SAUFEX (Safeguarding the EU from Foreign Information Manipulation and Interference) is a consortium of European organisations dedicated to protecting democratic processes through education, research, and the development of counter-disinformation tools. EMOD is the educational pillar of SAUFEX.",
    category: "About EMOD",
  },
  {
    question: "Who created the EMOD content?",
    answer: "EMOD content is developed by the SAUFEX consortium, bringing together experts in information security, media literacy, platform governance, and counter-disinformation from across Europe. Content follows the DROG methodology and DIM framework.",
    category: "About EMOD",
  },

  // Using EMOD
  {
    question: "Do I need to create an account?",
    answer: "No, you can browse and complete all modules without creating an account. An account is optional and would allow you to track your progress across sessions (coming soon).",
    category: "Using EMOD",
  },
  {
    question: "How long does each module take?",
    answer: "Most modules are designed to be completed in 8-10 minutes. Each module is broken into smaller sections that you can navigate at your own pace using the card-based viewer.",
    category: "Using EMOD",
  },
  {
    question: "Is there a recommended order to take the modules?",
    answer: "While you can start with any module, we recommend beginners start with 'Understanding Disinformation Basics' and 'Media Literacy Fundamentals' before moving to more advanced paths like 'Disinfonomics' or 'Platform Governance'.",
    category: "Using EMOD",
  },
  {
    question: "Can I use EMOD on my phone?",
    answer: "Yes, EMOD is fully responsive and works on mobile devices, tablets, and desktop computers. The card-based module viewer is designed to work well on smaller screens.",
    category: "Using EMOD",
  },
  {
    question: "Can I use EMOD content for training in my organisation?",
    answer: "Yes, EMOD content is designed to be used for training. If you're planning to use EMOD for organisational training, please contact us at info@saufex.eu to discuss how we can support your needs.",
    category: "Using EMOD",
  },

  // Content & Methodology
  {
    question: "What is the DIM framework?",
    answer: "DIM (DROG Intervention Menu) is a systematic framework for categorising and selecting responses to information manipulation. It includes Gen 2 (debunking), Gen 3 (prebunking), Gen 4 (moderation), and Gen 5 (interaction design). Our modules teach you how to apply DIM in different contexts.",
    category: "Content",
  },
  {
    question: "What is the difference between disinformation and misinformation?",
    answer: "Disinformation is false information deliberately created or spread to deceive. Misinformation is false information shared without intent to deceive - the person spreading it believes it's true. The distinction matters because different interventions work for each.",
    category: "Content",
  },
  {
    question: "What is FIMI?",
    answer: "FIMI stands for Foreign Information Manipulation and Interference. It refers to patterns of behaviour by foreign state or non-state actors that threaten or negatively impact democratic processes through information manipulation.",
    category: "Content",
  },
  {
    question: "How do I know which modules are right for me?",
    answer: "Use the audience filter on the dashboard to see modules recommended for your role (Policymaker, Journalist, Researcher, etc.). Each audience has a curated set of relevant modules, though you're welcome to explore all content.",
    category: "Content",
  },

  // Technical
  {
    question: "My progress isn't being saved. What should I do?",
    answer: "Currently, EMOD doesn't save progress between sessions. This feature is coming soon. For now, you can note which modules you've completed or bookmark them in your browser.",
    category: "Technical",
  },
  {
    question: "Can I download modules for offline use?",
    answer: "Not currently, but we're considering adding PDF export functionality. For now, EMOD requires an internet connection.",
    category: "Technical",
  },
  {
    question: "I found an error in a module. How do I report it?",
    answer: "Please email us at info@saufex.eu with the module name and a description of the error. We appreciate your help in improving the content.",
    category: "Technical",
  },
];

const CATEGORIES = [...new Set(FAQ_ITEMS.map(item => item.category))];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const faqByCategory = CATEGORIES.map(category => ({
    category,
    items: FAQ_ITEMS.filter(item => item.category === category),
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b border-gray-200">
        <div className="container py-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600">
              Find answers to common questions about EMOD and how to use the platform.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-8 lg:py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-8">
            {faqByCategory.map(({ category, items }) => (
              <div key={category}>
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple rounded-full" />
                  {category}
                </h2>
                <div className="space-y-3">
                  {items.map((item, idx) => {
                    const globalIndex = FAQ_ITEMS.indexOf(item);
                    const isOpen = openItems.has(globalIndex);
                    return (
                      <div
                        key={idx}
                        className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-900">{item.question}</span>
                          <svg
                            className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Get in touch with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="mailto:info@saufex.eu"
                className="btn btn-primary"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
              <a
                href="https://discord.gg/bvaGd5rahu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
