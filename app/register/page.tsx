import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Image
            src="/saufex-logo.svg"
            alt="SAUFEX"
            width={120}
            height={40}
            className="h-10 w-auto mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-900">Create your account</h1>
          <p className="text-gray-600 mt-2">Start learning for free</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="space-y-5">
            <div>
              <label className="label">Full Name</label>
              <input
                type="text"
                className="input"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="label">Email Address</label>
              <input
                type="email"
                className="input"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="label">I am a...</label>
              <select className="input">
                <option value="">Select your role</option>
                <option value="citizen">Citizen / General Public</option>
                <option value="policymaker">Policymaker</option>
                <option value="journalist">Journalist</option>
                <option value="researcher">Researcher</option>
                <option value="platform-team">Platform / Tech Team</option>
                <option value="comms-professional">Communications Professional</option>
                <option value="educator">Educator</option>
              </select>
            </div>
            <button className="w-full btn btn-primary py-3">
              Create Account
            </button>
          </div>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-purple font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        <p className="mt-6 text-center">
          <Link href="/dashboard" className="text-sm text-gray-500 hover:text-gray-700">
            Continue browsing as guest →
          </Link>
        </p>
      </div>
    </div>
  );
}
