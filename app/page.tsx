import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-purple/5 to-gray-50 py-20 lg:py-32">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Safeguarding Democratic Processes from{" "}
              <span className="text-purple">Foreign Information Manipulation</span> and Interference
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
              EMOD equips you with the knowledge and tools to identify, understand, and counter disinformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register" className="btn btn-primary text-lg px-8 py-4">
                Get Started for Free
              </Link>
              <Link href="https://saufex.eu" target="_blank" className="btn btn-outline text-lg px-8 py-4">
                About SAUFEX
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Self-Paced Learning</h3>
              <p className="text-gray-600">
                Learn at your own pace with flexible modules designed for busy professionals.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Expert Content</h3>
              <p className="text-gray-600">
                Content curated by leading specialists in information security and counter-disinformation.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">Global Community</h3>
              <p className="text-gray-600">
                Join a worldwide network of learners committed to defending democratic values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About EMOD */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">About EMOD</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-purple">Mission</h3>
              <p className="text-gray-600">
                Equipping individuals with awareness and resilience to uphold democratic values in the digital age.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-purple">Drive</h3>
              <p className="text-gray-600">
                Building knowledge foundations to recognize and counter information manipulation challenges.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-purple">Vision</h3>
              <p className="text-gray-600">
                Offering targeted, self-paced resources that develop critical thinking and media literacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Guiding Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              "Raising awareness of information threats and manipulation tactics",
              "Developing critical thinking skills for the digital age",
              "Safeguarding democratic processes through practical strategies",
              "Making complex topics accessible to diverse audiences",
              "Building communities of informed advocates",
              "Supporting anti-disinformation efforts regionally and globally"
            ].map((principle, idx) => (
              <div key={idx} className="flex items-start gap-3 p-6 bg-gray-50 rounded-lg">
                <div className="w-6 h-6 bg-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm font-bold">{idx + 1}</span>
                </div>
                <p className="text-gray-700">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-purple to-purple-light text-white">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join EMOD today and gain the skills to identify and counter disinformation.
          </p>
          <Link href="/dashboard" className="btn bg-white text-purple hover:bg-gray-100 text-lg px-8 py-4">
            Explore Modules
          </Link>
        </div>
      </section>
    </div>
  );
}
