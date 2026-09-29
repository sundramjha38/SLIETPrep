import { useTheme } from "../../context/ThemeContext";
import { Link } from "react-router";
import { Search, Sun, Moon } from "react-feather";

function Navbar({ showNavigation = true }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="w-full border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-lg font-bold text-white">
            S
          </div>

          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            SLIETPrep
          </span>
        </Link>

        {/* Right side */}
        <div className="flex items-center gap-6">

          {/* Navigation + Actions */}
          {showNavigation && (
            <>
              {/* Navigation */}
              <div className="hidden items-center gap-6 sm:flex">
                <a
                  href="/#features"
                  className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  Features
                </a>

                <a
                  href="/#how-it-works"
                  className="text-sm font-medium text-slate-600 transition hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                >
                  How It Works
                </a>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <Link
                  to="/login"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Get Started
                </Link>
              </div>
            </>
          )}

          {/* Theme switch */}
        <button
                 onClick={toggleTheme}
                 className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 cursor-pointer"
                 aria-label="Toggle theme"
               >
                 {theme === "light" ? (
                   <Moon size={17} strokeWidth={1.8} />
                 ) : (
                   <Sun size={17} strokeWidth={1.8} />
                 )}
               </button>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;