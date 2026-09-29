import { Link } from "react-router";
import Navbar from "../../components/common/Navbar";

function Login() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar showNavigation={false} />
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left panel */}
        <div className="hidden bg-blue-700 p-12 text-white lg:flex lg:flex-col lg:justify-center">
          <div className="mx-auto w-full max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-200">
              Welcome to SLIETPrep
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight xl:text-5xl">
              Prepare smarter for every semester exam.
            </h1>

            <p className="mt-6 text-lg leading-8 text-blue-100">
              Find previous question papers, explore important questions and
              prepare for your SLIET examinations in one place.
            </p>
          </div>
        </div>

        {/* Right panel */}
        <div className="flex items-center justify-center px-6 py-12 sm:px-10 lg:px-12">
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <Link
              to="/"
              className="mb-10 flex items-center justify-center gap-2 lg:hidden"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white">
                S
              </div>

              <span className="text-xl font-bold text-slate-900 dark:text-white">
                SLIETPrep
              </span>
            </Link>

            {/* Heading */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
                Welcome back
              </h2>

              <p className="mt-2 text-slate-600 dark:text-slate-400">
                Login to continue your preparation.
              </p>
            </div>

            {/* Form */}
            <form className="mt-8 space-y-5">
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
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-950"
                />
              </div>

              {/* Password */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
                  >
                    Forgot password?
                  </button>
                </div>

                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:ring-blue-950"
                />
              </div>

              {/* Login button */}
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Login
              </button>

              {/* Divider */}
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />

                <span className="text-sm text-slate-400">OR</span>

                <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
              </div>

              {/* Google */}
              <button
                type="button"
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white px-4 py-3 font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                Continue with Google
              </button>
            </form>

            {/* Signup */}
            <p className="mt-8 text-center text-sm text-slate-600 dark:text-slate-400">
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
