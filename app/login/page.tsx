import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
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
          <h1 className="text-2xl font-bold text-gray-900">Sign in to EMOD</h1>
          <p className="text-gray-600 mt-2">Access your learning dashboard</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
          <div className="space-y-5">
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
            <button className="w-full btn btn-primary py-3">
              Sign In
            </button>
          </div>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/register" className="text-purple font-semibold hover:underline">
                Create one
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
