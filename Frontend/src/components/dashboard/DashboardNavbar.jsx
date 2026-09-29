import { Link } from "react-router";
import { Menu, Moon, Search, Sun, User , Grid} from "react-feather";
import { useTheme } from "../../context/ThemeContext";


function DashboardNavbar({
  variant = "dashboard",
  hasSidebar = false,
  onMenuClick,
}) {
  const { theme, toggleTheme } = useTheme();

  const showSearch = variant !== "profile";
  const showProfile = variant === "dashboard";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="flex h-16 items-center gap-3 px-4 sm:px-6">
        {/* Mobile sidebar button */}
        {hasSidebar && (
          <button
            type="button"
            onClick={onMenuClick}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 lg:hidden"
            aria-label="Open sidebar"
          >
            <Menu size={18} strokeWidth={1.8} />
          </button>
        )}

        {/* Logo */}
        <Link
          to="/dashboard"
          className="shrink-0 text-lg font-bold tracking-tight text-slate-900 dark:text-white"
        >
          SLIETPrep
        </Link>

        {/* Search */}
        {showSearch && (
          <div className="relative ml-auto w-full max-w-md">
            <Search
              size={17}
              strokeWidth={1.8}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search questions, papers..."
              className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:bg-slate-900"
            />
          </div>
        )}

        {/* Keeps Profile controls on the right */}
        {!showSearch && <div className="ml-auto" />}

        {/* Theme toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <Moon size={17} strokeWidth={1.8} />
          ) : (
            <Sun size={17} strokeWidth={1.8} />
          )}
        </button>

        {/* Page navigation */}
        {showProfile ? (
          <Link
            to="/profile"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Profile"
          >
            <User size={17} strokeWidth={1.8} />
          </Link>
        ) : (
          <Link
            to="/dashboard"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Dashboard"
          >
            <Grid size={17} strokeWidth={1.8} />
          </Link>
        )}
      </div>
    </header>
  );
}

export default DashboardNavbar;
