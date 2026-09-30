import { Link } from "react-router";
import Navbar from "../../components/common/Navbar";

function Login() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar showNavigation={false} />

      <div className="grid min-h-screen pt-16 lg:grid-cols-2 ">
        {/* Left panel */}
        <div className="hidden bg-blue-700 px-6 py-12 text-white sm:px-10 lg:flex lg:min-h-[calc(100vh-4rem)] lg:items-center lg:px-12 xl:px-16">
          <div className="mx-auto w-full max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
              Welcome to SLIETPrep
            </p>

            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl">
              Prepare smarter for every semester exam.
            </h1>

            <p className="mt-5 text-base leading-7 text-blue-100 sm:mt-6 sm:text-lg sm:leading-8">
              Find previous question papers, explore important questions and
              prepare for your SLIET examinations in one place.
            </p>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-5 py-10 sm:px-8 sm:py-12 lg:px-10 xl:px-12 ">
          <div className="w-full max-w-md">
            {/* Heading */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
                Welcome back
              </h2>

              <p className="mt-2 text-sm text-slate-600 sm:text-base dark:text-slate-400">
                Login to continue your preparation.
              </p>
            </div>

            {/* Form */}
            <form className="mt-7 space-y-5 sm:mt-8">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 sm:text-base dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-950"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="shrink-0 text-xs font-medium text-blue-600 hover:text-blue-700 sm:text-sm dark:text-blue-400"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 sm:text-base dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-950"
                />
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 sm:text-base"
              >
                Login
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />

                <span className="text-xs text-slate-400 sm:text-sm">OR</span>

                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              </div>

              {/* Google */}
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 sm:text-base dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Continue with Google
              </button>
            </form>

            {/* Signup */}
            <p className="mt-7 text-center text-sm text-slate-600 sm:mt-8 dark:text-slate-400">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
