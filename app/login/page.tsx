import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-purple/5 to-gray-50 flex items-center justify-center py-12">
      <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign In to EMOD</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple focus:border-transparent"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple focus:border-transparent"
              placeholder="••••••••"
            />
          </div>
          <button className="w-full btn btn-primary py-3">
            Sign In
          </button>
        </div>
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link href="/register" className="text-purple font-semibold hover:underline">
            Create one
          </Link>
        </p>
        <p className="mt-4 text-center">
          <Link href="/dashboard" className="text-gray-500 text-sm hover:text-gray-700">
            Continue as guest
          </Link>
        </p>
      </div>
    </div>
  );
}
