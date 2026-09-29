import { MessageCircle, Star } from "react-feather";

function PaperQuestion({
  question,
  isImportant,
  onToggleImportant,
  onAskAI,
}) {
  return (
    <article
      id={`question-${question.id}`}
      className="scroll-mt-24 rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="p-5 sm:p-6">
        {/* Question header */}
        <div className="flex items-start gap-3">
          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-100 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {question.number}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-4">
              <p className="text-sm font-medium leading-6 text-slate-900 dark:text-white">
                {question.text}
              </p>

              <span className="shrink-0 text-xs font-medium text-slate-400">
                {question.marks} marks
              </span>
            </div>

            {/* Answer */}
            <div className="mt-5 border-t border-slate-100 pt-5 dark:border-slate-800">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                Answer
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
                {question.answer}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
              <button
                type="button"
                onClick={() => onToggleImportant(question)}
                className={`
                  inline-flex
                  items-center
                  gap-2
                  rounded-lg
                  px-3
                  py-2
                  text-xs
                  font-medium
                  transition

                  ${
                    isImportant
                      ? "bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                  }
                `}
              >
                <Star
                  size={15}
                  strokeWidth={1.8}
                  fill={isImportant ? "currentColor" : "none"}
                />

                {isImportant
                  ? "Marked important"
                  : "Mark important"}
              </button>

              <button
                type="button"
                onClick={() => onAskAI(question)}
                className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-blue-600 transition hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950/40"
              >
                <MessageCircle size={15} strokeWidth={1.8} />
                Ask AI
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PaperQuestion;