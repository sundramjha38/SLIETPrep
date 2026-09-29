import { Send, X } from "react-feather";

function PaperAI({
  mode,
  question,
  paper,
  input,
  setInput,
  messages,
  onSend,
  onClose,
}) {
  const title =
    mode === "question" ? `Question ${question?.number}` : "Chat with Paper";

  const subtitle =
    mode === "question"
      ? "Ask about this question"
      : `${paper.subjectName} · ${paper.year}`;

  return (
    <>
      <button
        type="button"
        onClick={onClose}
        className="fixed inset-0 top-16 z-[60] bg-black/30"
        aria-label="Close AI assistant"
      />

      <aside
         className="fixed
        right-2
        top-[4.5rem]
        z-[70]

        flex
        h-[calc(100dvh-5rem)]
        w-[min(260px,52vw)]
        max-w-[360px]
        flex-col

        overflow-hidden
        rounded-xl
        border
        border-slate-200
        bg-white
        shadow-2xl

        dark:border-slate-800
        dark:bg-slate-950

        sm:right-4
        sm:top-[4.5rem]
        sm:h-[calc(100dvh-5.5rem)]
        sm:w-[380px]
        sm:max-w-[380px]

        lg:right-6
        lg:top-[4.5rem]
        lg:h-[calc(100dvh-5.5rem)]
        lg:w-[420px]
        lg:max-w-[420px]
      "
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-4 py-4 dark:border-slate-800">
          <div className="min-w-0">
            <h2 className="truncate text-sm font-semibold text-slate-900 dark:text-white">
              {title}
            </h2>

            <p className="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">
              {subtitle}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="ml-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800"
            aria-label="Close AI"
          >
            <X size={17} />
          </button>
        </div>

        {/* Messages */}
        <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5">
          {messages.length === 0 ? (
            <div className="flex h-full items-center justify-center text-center">
              <div className="max-w-xs">
                <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  {mode === "question"
                    ? "Ask about this question"
                    : "Start a conversation"}
                </p>

                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {mode === "question"
                    ? "Ask for an explanation, solution, or clarification."
                    : "Ask questions about the entire paper or ask for similar questions."}
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`
                    max-w-[88%]
                    rounded-lg
                    px-3.5
                    py-2.5
                    text-sm
                    leading-5
                    break-words

                    ${
                      message.role === "user"
                        ? "ml-auto bg-blue-600 text-white"
                        : "mr-auto bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-300"
                    }
                  `}
                >
                  {message.content}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Input */}
        <div className="shrink-0 border-t border-slate-200 p-3 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              className="h-9 w-full rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:bg-slate-900"
            />

            <button
              type="button"
              onClick={onSend}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white transition hover:bg-blue-700"
              aria-label="Send message"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default PaperAI;
