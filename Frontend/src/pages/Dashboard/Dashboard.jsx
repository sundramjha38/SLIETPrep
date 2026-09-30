import { useState } from "react";
import { BookOpen, ChevronRight, FileText, Send, Star, X } from "react-feather";

import AppLayout from "../../layout/AppLayout";
import DashboardSidebar from "../../components/dashboard/DashboardSidebar";

function Dashboard() {
  const subjects = [
    {
      code: "ESME-401",
      name: "Engineering Mechanics",
      syllabus: [
        "Force Systems",
        "Equilibrium",
        "Friction",
        "Centroid",
        "Centre of Gravity",
      ],
    },
    {
      code: "ESCS-401",
      name: "Data Structures",
      syllabus: [
        "Arrays",
        "Linked Lists",
        "Stacks",
        "Queues",
        "Trees",
        "Graphs",
      ],
    },
    {
      code: "ESCS-402",
      name: "Database Management",
      syllabus: [
        "Relational Model",
        "SQL",
        "Normalization",
        "Transactions",
        "Indexing",
      ],
    },
    {
      code: "ESCS-403",
      name: "Operating Systems",
      syllabus: [
        "Processes",
        "Threads",
        "CPU Scheduling",
        "Memory Management",
        "File Systems",
      ],
    },
  ];

  const papers = {
    minor1: [
      { year: 2025, questions: 8 },
      { year: 2024, questions: 8 },
      { year: 2023, questions: 10 },
      { year: 2022, questions: 10 },
    ],
    minor2: [
      { year: 2025, questions: 8 },
      { year: 2024, questions: 8 },
      { year: 2023, questions: 10 },
      { year: 2022, questions: 10 },
    ],
    major: [
      { year: 2025, questions: 10 },
      { year: 2024, questions: 10 },
      { year: 2023, questions: 12 },
      { year: 2022, questions: 12 },
    ],
  };

  const [selectedSubject, setSelectedSubject] = useState(subjects[0]);

  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const [isAiOpen, setIsAiOpen] = useState(false);
  const [aiInput, setAiInput] = useState("");
  const [messages, setMessages] = useState([]);

  const [importantQuestions] = useState([]);

  const openAi = (topic = "") => {
    setAiInput(topic);
    setIsAiOpen(true);
  };

  const sendMessage = () => {
    const message = aiInput.trim();

    if (!message) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        role: "user",
        content: message,
      },
    ]);

    setAiInput("");
  };

  const getPaperTypeLabel = (type) => {
    if (type === "minor1") return "Minor 1";
    if (type === "minor2") return "Minor 2";
    return "Major";
  };

  return (
    <AppLayout
      variant="dashboard"
      hasSidebar={true}
      onMenuClick={() => setIsMobileSidebarOpen(true)}
    >
      <DashboardSidebar
        subjects={subjects}
        selectedSubject={selectedSubject}
        onSubjectChange={setSelectedSubject}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        isMobileOpen={isMobileSidebarOpen}
        setIsMobileOpen={setIsMobileSidebarOpen}
      />

      <main
        className={`
                    min-h-[calc(100vh-4rem)]
                    transition-[margin]
                    duration-300
                    ${isSidebarCollapsed ? "lg:ml-[96px]" : "lg:ml-64"}
                `}
      >
        <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Subject Header */}
          <section>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {selectedSubject.code}
            </p>

            <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {selectedSubject.name}
            </h1>
          </section>

          {/* Syllabus */}
          <section className="mt-10">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              Syllabus
            </h2>

            <div className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
              {selectedSubject.syllabus.map((topic) => (
                <div
                  key={topic}
                  className="flex items-center gap-3 border-b border-slate-100 py-2.5 text-sm text-slate-600 dark:border-slate-800 dark:text-slate-300"
                >
                  <BookOpen
                    size={15}
                    strokeWidth={1.8}
                    className="shrink-0 text-slate-400"
                  />

                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </section>

          {/* AI Study Assistant */}
          <section className="mt-10">
            <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 sm:p-6">
              <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                AI Study Assistant
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                What would you like to learn?
              </p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  value={aiInput}
                  onChange={(event) => setAiInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      sendMessage();
                      setIsAiOpen(true);
                    }
                  }}
                  placeholder="Ask about a topic..."
                  className="h-10 flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-blue-500 dark:focus:bg-slate-900"
                />

                <button
                  type="button"
                  onClick={() => {
                    if (aiInput.trim()) {
                      sendMessage();
                    }

                    setIsAiOpen(true);
                  }}
                  className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <Send size={15} strokeWidth={1.8} />
                  Ask AI
                </button>
              </div>

              <div className="mt-5">
                <p className="mb-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                  Suggested topics
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedSubject.syllabus.map((topic) => (
                    <button
                      key={topic}
                      type="button"
                      onClick={() => openAi(topic)}
                      className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-blue-300 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-700 dark:hover:text-blue-400"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Previous Question Papers */}
          <section className="mt-10">
            <div>
              <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                Previous Question Papers
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Access previous examination papers by exam type.
              </p>
            </div>

            <div className="mt-5 space-y-6">
              {Object.entries(papers).map(([type, typePapers]) => (
                <div key={type}>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                      {getPaperTypeLabel(type)}
                    </h3>

                    <button
                      type="button"
                      className="flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
                    >
                      View all
                      <ChevronRight size={14} />
                    </button>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                    {typePapers.map((paper) => (
                      <button
                        key={paper.year}
                        type="button"
                        className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-3 text-left transition hover:border-blue-300 hover:bg-slate-50 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:bg-slate-800"
                      >
                        <div className="flex items-center gap-3">
                          <FileText
                            size={17}
                            strokeWidth={1.8}
                            className="text-slate-400"
                          />

                          <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                              {paper.year}
                            </p>

                            <p className="text-xs text-slate-500 dark:text-slate-400">
                              {paper.questions} questions
                            </p>
                          </div>
                        </div>

                        <ChevronRight size={15} className="text-slate-400" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-900"
            >
              Explore All Papers
              <ChevronRight size={16} />
            </button>
          </section>

          {/* Important Questions */}
          <section className="mt-10 pb-10">
            <div>
              <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                Important Questions
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Questions you mark as important while studying.
              </p>
            </div>

            {importantQuestions.length === 0 ? (
              <div className="mt-4 rounded-xl border border-dashed border-slate-300 px-5 py-8 text-center dark:border-slate-700">
                <Star
                  size={20}
                  strokeWidth={1.8}
                  className="mx-auto text-slate-400"
                />

                <p className="mt-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                  No important questions yet
                </p>

                <p className="mx-auto mt-1 max-w-md text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Mark questions as important while reviewing previous papers
                  and they will appear here.
                </p>
              </div>
            ) : (
              <div className="mt-4 space-y-3">
                {importantQuestions.map((question) => (
                  <div
                    key={question.id}
                    className="rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
                  >
                    {question.text}
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      {/* AI Overlay */}
      {/* AI Overlay */}
      {isAiOpen && (
        <>
          {/* Backdrop */}
          <button
            type="button"
            onClick={() => setIsAiOpen(false)}
            className="fixed inset-0 top-16 z-[60] bg-black/30"
            aria-label="Close AI assistant"
          />

          {/* AI Panel */}
          {/* AI Overlay */}
          {isAiOpen && (
            <>
              {/* Backdrop */}
              <button
                type="button"
                onClick={() => setIsAiOpen(false)}
                className="fixed inset-0 top-16 z-[60] bg-black/30"
                aria-label="Close AI assistant"
              />

              {/* AI Panel */}
              <aside
                className="
        fixed
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
                <div className="flex shrink-0 items-center justify-between border-b border-slate-200 px-4 py-3.5 dark:border-slate-800">
                  <div className="min-w-0">
                    <h2 className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                      AI Study Assistant
                    </h2>

                    <p className="mt-0.5 truncate text-xs text-slate-500 dark:text-slate-400">
                      {selectedSubject.name}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsAiOpen(false)}
                    className="
            ml-3
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
          "
                    aria-label="Close AI assistant"
                  >
                    <X size={17} />
                  </button>
                </div>

                {/* Messages */}
                <div className="min-h-0 flex-1 overflow-y-auto px-3 py-4 sm:px-4 sm:py-5">
                  {messages.length === 0 ? (
                    <div className="flex h-full items-center justify-center px-3 text-center">
                      <div className="max-w-[260px]">
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                          Start learning
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                          Ask anything about the syllabus of{" "}
                          {selectedSubject.name}.
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
                <div className="shrink-0 border-t border-slate-200 p-3 dark:border-slate-800 sm:p-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={aiInput}
                      onChange={(event) => setAiInput(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") {
                          sendMessage();
                        }
                      }}
                      placeholder="Ask about this subject..."
                      className="
              h-10
              min-w-0
              flex-1
              rounded-lg
              border
              border-slate-200
              bg-slate-50
              px-3
              text-sm
              text-slate-900
              outline-none
              transition

              placeholder:text-slate-400

              focus:border-blue-500
              focus:bg-white

              dark:border-slate-700
              dark:bg-slate-900
              dark:text-slate-100
              dark:placeholder:text-slate-500
              dark:focus:border-blue-500
            "
                    />

                    <button
                      type="button"
                      onClick={sendMessage}
                      className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-blue-600
              text-white
              transition
              hover:bg-blue-700
            "
                      aria-label="Send message"
                    >
                      <Send size={16} />
                    </button>
                  </div>
                </div>
              </aside>
            </>
          )}
        </>
      )}
    </AppLayout>
  );
}

export default Dashboard;
