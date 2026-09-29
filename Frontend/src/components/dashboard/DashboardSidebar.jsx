import {
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Clipboard,
  FileText,
  X,
} from "react-feather";

function DashboardSidebar({
  subjects,
  selectedSubject,
  onSubjectChange,
  isCollapsed,
  setIsCollapsed,
  isMobileOpen,
  setIsMobileOpen,
}) {
  const notices = [
    {
      label: "Exam Dates",
      icon: Calendar,
    },
    {
      label: "Seating Plan",
      icon: Clipboard,
    },
    {
      label: "Holidays",
      icon: BookOpen,
    },
    {
      label: "Announcements",
      icon: FileText,
    },
  ];

  const handleSubjectChange = (subject) => {
    onSubjectChange(subject);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isMobileOpen && (
        <button
          type="button"
          onClick={() => setIsMobileOpen(false)}
          className="fixed inset-0 top-16 z-40 bg-black/40 lg:hidden"
          aria-label="Close sidebar"
        />
      )}

      <aside
        className={`
          fixed left-0 top-16 z-50
          flex flex-col
          h-[calc(100dvh-4rem)]
          border-r border-slate-200
          bg-white
          dark:border-slate-800
          dark:bg-slate-950

          w-[min(260px,52vw)]

          transform
          transition-all
          duration-300
          ease-in-out

          ${
            isMobileOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }

          ${isCollapsed ? "lg:w-24" : "lg:w-64"}

          shadow-xl
          lg:shadow-none
        `}
      >
        {/* Header */}
        <div className="flex h-14 shrink-0 items-center justify-between border-b border-slate-200 px-3 dark:border-slate-800">
          {/* Desktop title */}
          <div className="min-w-0 lg:flex-1">
            {!isCollapsed && (
              <span className="block truncate px-2 text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400">
                YOUR STUDY
              </span>
            )}
          </div>

          {/* Desktop collapse button */}
          <button
            type="button"
            onClick={() => setIsCollapsed((current) => !current)}
            className="
              hidden
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              text-slate-500
              transition
              hover:bg-slate-100
              hover:text-slate-900
              dark:text-slate-400
              dark:hover:bg-slate-800
              dark:hover:text-white
              lg:flex
            "
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight size={18} />
            ) : (
              <ChevronLeft size={18} />
            )}
          </button>

          {/* Mobile close */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(false)}
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              text-slate-500
              transition
              hover:bg-slate-100
              dark:text-slate-400
              dark:hover:bg-slate-800
              lg:hidden
            "
            aria-label="Close sidebar"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="min-h-0 flex-1 overflow-y-auto px-3 py-5">
          {/* Subjects */}
          <section>
            {!isCollapsed && (
              <p className="mb-3 px-2 text-[11px] font-semibold tracking-wider text-slate-400">
                MY SUBJECTS
              </p>
            )}

            <div className="space-y-1">
              {subjects.map((subject) => {
                const isSelected = selectedSubject.code === subject.code;

                return (
                  <button
                    key={subject.code}
                    type="button"
                    onClick={() => handleSubjectChange(subject)}
                    title={isCollapsed ? subject.name : undefined}
                    className={`
                      flex w-full items-center rounded-lg
                      transition-colors

                      ${
                        isSelected
                          ? "bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-400"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                      }

                      ${
                        isCollapsed
                          ? "justify-center px-2 py-3"
                          : "gap-3 px-3 py-2.5"
                      }
                    `}
                  >
                    {isCollapsed ? (
                      <span className="whitespace-nowrap text-[10px] font-semibold">
                        {subject.code}
                      </span>
                    ) : (
                      <>
                        <BookOpen
                          size={17}
                          strokeWidth={1.8}
                          className="shrink-0"
                        />

                        <div className="min-w-0 text-left">
                          <p className="truncate text-sm font-medium">
                            {subject.name}
                          </p>

                          <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">
                            {subject.code}
                          </p>
                        </div>
                      </>
                    )}
                  </button>
                );
              })}
            </div>
          </section>

          {/* Notices */}
          <section className="mt-8">
            {!isCollapsed && (
              <p className="mb-3 px-2 text-[11px] font-semibold tracking-wider text-slate-400">
                NOTICES
              </p>
            )}

            <div className="space-y-1">
              {notices.map(({ label, icon: Icon }) => (
                <button
                  key={label}
                  type="button"
                  title={isCollapsed ? label : undefined}
                  className={`
                    flex w-full items-center rounded-lg
                    text-slate-600
                    transition-colors
                    hover:bg-slate-100
                    hover:text-slate-900
                    dark:text-slate-300
                    dark:hover:bg-slate-800
                    dark:hover:text-white

                    ${
                      isCollapsed
                        ? "justify-center px-2 py-3"
                        : "gap-3 px-3 py-2.5"
                    }
                  `}
                >
                  <Icon size={17} strokeWidth={1.8} className="shrink-0" />

                  {!isCollapsed && (
                    <span className="text-sm font-medium">{label}</span>
                  )}
                </button>
              ))}
            </div>
          </section>
        </div>
      </aside>
    </>
  );
}

export default DashboardSidebar;
