import { Mail, Lock, ArrowRight } from "lucide-react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

const Login = () => {
  return (
    <section
      id="login"
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center px-6 py-24"
    >
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-2xl">
        {/* Logo */}

        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white text-2xl font-bold">
            🇫🇷
          </div>

          <h1 className="mt-5 text-3xl font-bold text-slate-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-slate-600">
            Sign in to continue learning with French Dome.
          </p>
        </div>

        {/* Form */}

        <form className="mt-10 space-y-6">
          <div>
            <label className="mb-2 block font-medium">Email</label>

            <div className="flex items-center rounded-xl border px-4">
              <Mail className="text-slate-400" size={20} />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent px-3 py-4 outline-none"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block font-medium">Password</label>

            <div className="flex items-center rounded-xl border px-4">
              <Lock className="text-slate-400" size={20} />

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent px-3 py-4 outline-none"
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" />
              Remember Me
            </label>

            <a href="#" className="text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

         <SignedOut>
  <SignInButton mode="modal">
    <button
      type="button"
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
    >
      Login
      <ArrowRight size={18} />
    </button>
  </SignInButton>
</SignedOut>

<SignedIn>
  <UserButton />
</SignedIn>
        </form>

        {/* Divider */}

        <div className="my-8 flex items-center">
          <div className="h-px flex-1 bg-slate-300"></div>
          <span className="mx-4 text-sm text-slate-500">OR</span>
          <div className="h-px flex-1 bg-slate-300"></div>
        </div>

        {/* Social Login */}
       

        <div className="space-y-4">
          <button className="flex w-full items-center justify-center gap-3 rounded-xl border py-4 transition hover:bg-slate-50">
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>

          <button className="flex w-full items-center justify-center gap-3 rounded-xl border py-4 transition hover:bg-slate-50">
            <FaGithub />
            Continue with GitHub
          </button>
        </div>

        {/* Sign Up */}

        <p className="mt-8 text-center text-slate-600">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="font-semibold text-blue-600 hover:underline"
          >
            Create Account
          </a>
        </p>
      </div>
    </section>
  );
};

export default Login;
