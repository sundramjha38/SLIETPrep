import {
  ChevronLeft,
  ChevronRight,
  FileText,
  Star,
} from "react-feather";

function PaperSidebar({
  papers,
  selectedPaper,
  onPaperChange,
  importantQuestions,
  onQuestionSelect,
  isCollapsed,
  setIsCollapsed,
}) {
  return (
    <aside
      className={`
        fixed
        left-0
        top-16
        z-40
        hidden
        h-[calc(100dvh-4rem)]
        flex-col
        border-r
        border-slate-200
        bg-white
        transition-all
        duration-300
        dark:border-slate-800
        dark:bg-slate-950
        lg:flex

        ${isCollapsed ? "w-20" : "w-64"}
      `}
    >
      {/* Header */}
      <div
        className={`
          flex
          h-14
          shrink-0
          items-center
          border-b
          border-slate-200
          dark:border-slate-800
          ${isCollapsed ? "justify-center" : "justify-between px-3"}
        `}
      >
        {!isCollapsed && (
          <span className="px-2 text-xs font-semibold tracking-wider text-slate-500 dark:text-slate-400">
            QUESTION PAPERS
          </span>
        )}

        <button
          type="button"
          onClick={() => setIsCollapsed((current) => !current)}
          className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight size={18} />
          ) : (
            <ChevronLeft size={18} />
          )}
        </button>
      </div>

      {/* Years */}
      <div className="min-h-0 flex-1 overflow-y-auto px-3 py-5">
        {!isCollapsed && (
          <p className="mb-3 px-2 text-[11px] font-semibold tracking-wider text-slate-400">
            PAPERS
          </p>
        )}

        <div className="space-y-1">
          {papers.map((paper) => {
            const isSelected = selectedPaper.id === paper.id;

            return (
              <button
                key={paper.id}
                type="button"
                onClick={() => onPaperChange(paper)}
                title={isCollapsed ? String(paper.year) : undefined}
                className={`
                  flex
                  w-full
                  items-center
                  rounded-lg
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
                  <span className="text-xs font-semibold">
                    {paper.year}
                  </span>
                ) : (
                  <>
                    <FileText
                      size={17}
                      strokeWidth={1.8}
                      className="shrink-0"
                    />

                    <div className="min-w-0 text-left">
                      <p className="text-sm font-medium">
                        {paper.year}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400 dark:text-slate-500">
                        {paper.examType}
                      </p>
                    </div>
                  </>
                )}
              </button>
            );
          })}
        </div>

        {/* Important Questions */}
        <section className="mt-8">
          {!isCollapsed && (
            <p className="mb-3 px-2 text-[11px] font-semibold tracking-wider text-slate-400">
              IMPORTANT QUESTIONS
            </p>
          )}

          {importantQuestions.length === 0 ? (
            !isCollapsed && (
              <p className="px-2 text-xs leading-5 text-slate-400 dark:text-slate-500">
                Questions you mark as important will appear here.
              </p>
            )
          ) : (
            <div className="space-y-1">
              {importantQuestions.map((question) => (
                <button
                  key={question.id}
                  type="button"
                  onClick={() => onQuestionSelect(question.id)}
                  title={isCollapsed ? `Question ${question.number}` : undefined}
                  className={`
                    flex
                    w-full
                    items-center
                    rounded-lg
                    text-left
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
                  <Star
                    size={16}
                    strokeWidth={1.8}
                    className="shrink-0"
                  />

                  {!isCollapsed && (
                    <span className="truncate text-xs font-medium">
                      Question {question.number}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </section>
      </div>

      {/* Original Paper */}
      <div className="shrink-0 border-t border-slate-200 p-3 dark:border-slate-800">
        <button
          type="button"
          title={isCollapsed ? "Original Paper" : undefined}
          className={`
            flex
            w-full
            items-center
            rounded-lg
            text-slate-600
            transition
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
          <FileText
            size={17}
            strokeWidth={1.8}
            className="shrink-0"
          />

          {!isCollapsed && (
            <span className="text-sm font-medium">
              Original Paper
            </span>
          )}
        </button>
      </div>
    </aside>
  );
}

export default PaperSidebar;