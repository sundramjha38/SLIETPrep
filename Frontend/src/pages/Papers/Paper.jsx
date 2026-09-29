import { useState } from "react";
import {
  ChevronLeft,
  MessageCircle,
} from "react-feather";

import AppLayout from "../../layout/AppLayout";
import PaperSidebar from "../../components/paper/PaperSidebar";
import PaperQuestion from "../../components/paper/PaperQuestion";
import PaperAI from "../../components/paper/PaperAi";

function Paper() {
  /*
   * Temporary data.
   *
   * The structure matches the backend QuestionPaper
   * and Question models so that we can replace this
   * with API data later.
   */

  const papers = [
    {
      id: "paper-2025-minor1",
      year: 2025,
      examType: "Minor 1",
      subjectCode: "ESME-401",
      subjectName: "Engineering Mechanics",
      paperSetter: "Department of Mechanical Engineering",
      totalMarks: 20,
      duration: "1 Hour",
    },
    {
      id: "paper-2024-minor1",
      year: 2024,
      examType: "Minor 1",
      subjectCode: "ESME-401",
      subjectName: "Engineering Mechanics",
      paperSetter: "Department of Mechanical Engineering",
      totalMarks: 20,
      duration: "1 Hour",
    },
    {
      id: "paper-2023-minor1",
      year: 2023,
      examType: "Minor 1",
      subjectCode: "ESME-401",
      subjectName: "Engineering Mechanics",
      paperSetter: "Department of Mechanical Engineering",
      totalMarks: 20,
      duration: "1 Hour",
    },
    {
      id: "paper-2022-minor1",
      year: 2022,
      examType: "Minor 1",
      subjectCode: "ESME-401",
      subjectName: "Engineering Mechanics",
      paperSetter: "Department of Mechanical Engineering",
      totalMarks: 20,
      duration: "1 Hour",
    },
  ];

  const questions = [
    {
      id: "question-1",
      number: 1,
      text: "Explain the concept of force systems and classify the different types of force systems.",
      marks: 4,
      answer:
        "A force system is a collection of forces acting simultaneously on a body. Force systems can be classified as coplanar or non-coplanar and may be concurrent, parallel, or general.",
    },
    {
      id: "question-2",
      number: 2,
      text: "State and explain the conditions required for the equilibrium of a rigid body.",
      marks: 4,
      answer:
        "For a rigid body to remain in equilibrium, the resultant force and resultant moment acting on the body must both be zero.",
    },
    {
      id: "question-3",
      number: 3,
      text: "What is friction? Explain the laws of dry friction.",
      marks: 4,
      answer:
        "Friction is the resisting force that opposes relative motion or the tendency of relative motion between two surfaces in contact.",
    },
    {
      id: "question-4",
      number: 4,
      text: "Define centroid and explain its significance in engineering mechanics.",
      marks: 4,
      answer:
        "The centroid is the geometric center of a plane figure. It is useful for determining the location at which the entire area of a plane figure may be considered concentrated.",
    },
    {
      id: "question-5",
      number: 5,
      text: "Differentiate between centre of gravity and centroid.",
      marks: 4,
      answer:
        "The centre of gravity is the point through which the entire weight of a body may be considered to act, whereas the centroid is the geometric center of an area or plane figure.",
    },
  ];

  const [selectedPaper, setSelectedPaper] = useState(papers[0]);

  const [isSidebarCollapsed, setIsSidebarCollapsed] =
    useState(false);

  const [importantQuestions, setImportantQuestions] =
    useState([]);

  const [aiMode, setAiMode] = useState(null);
  const [selectedQuestion, setSelectedQuestion] =
    useState(null);

  const [aiInput, setAiInput] = useState("");
  const [messages, setMessages] = useState([]);

  const toggleImportant = (question) => {
    setImportantQuestions((current) => {
      const exists = current.some(
        (item) => item.id === question.id
      );

      if (exists) {
        return current.filter(
          (item) => item.id !== question.id
        );
      }

      return [...current, question];
    });
  };

  const openQuestionAI = (question) => {
    setSelectedQuestion(question);
    setAiMode("question");
    setMessages([]);
    setAiInput("");
  };

  const openPaperAI = () => {
    setSelectedQuestion(null);
    setAiMode("paper");
    setMessages([]);
    setAiInput("");
  };

  const closeAI = () => {
    setAiMode(null);
    setSelectedQuestion(null);
    setMessages([]);
    setAiInput("");
  };

  const sendMessage = () => {
    const message = aiInput.trim();

    if (!message) {
      return;
    }

    setMessages((current) => [
      ...current,
      {
        role: "user",
        content: message,
      },
    ]);

    setAiInput("");
  };

  const handleQuestionSelect = (questionId) => {
    const element = document.getElementById(
      `question-${questionId}`
    );

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <AppLayout
      variant="paper"
      hasSidebar={false}
    >
      {/* Paper Sidebar */}
      <PaperSidebar
        papers={papers}
        selectedPaper={selectedPaper}
        onPaperChange={setSelectedPaper}
        importantQuestions={importantQuestions}
        onQuestionSelect={handleQuestionSelect}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
      />

      {/* Main Content */}
      <main
        className={`
          min-h-[calc(100vh-4rem)]
          transition-[margin]
          duration-300
          ${isSidebarCollapsed ? "lg:ml-20" : "lg:ml-64"}
        `}
      >
        <div className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Back */}
          <button
            type="button"
            onClick={() => window.history.back()}
            className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <ChevronLeft size={16} />
            Back
          </button>

          {/* Paper Header */}
          <section className="border-b border-slate-200 pb-7 dark:border-slate-800">
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
              {selectedPaper.subjectCode}
            </p>

            <div className="mt-1 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {selectedPaper.subjectName}
                </h1>

                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {selectedPaper.examType} · {selectedPaper.year}
                </p>
              </div>

              <button
                type="button"
                onClick={openPaperAI}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                <MessageCircle size={16} />
                Chat with Paper
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-3">
              <div>
                <p className="text-xs font-medium text-slate-400">
                  Total Marks
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                  {selectedPaper.totalMarks}
                </p>
              </div>

              <div>
                <p className="text-xs font-medium text-slate-400">
                  Duration
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                  {selectedPaper.duration}
                </p>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <p className="text-xs font-medium text-slate-400">
                  Paper Setter
                </p>

                <p className="mt-1 text-sm font-medium text-slate-900 dark:text-white">
                  {selectedPaper.paperSetter}
                </p>
              </div>
            </div>
          </section>

          {/* Questions */}
          <section className="py-8">
            <div className="mb-5">
              <h2 className="text-base font-semibold text-slate-900 dark:text-white">
                Questions
              </h2>

              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                Review the questions and study their answers.
              </p>
            </div>

            <div className="space-y-5">
              {questions.map((question) => (
                <PaperQuestion
                  key={question.id}
                  question={question}
                  isImportant={importantQuestions.some(
                    (item) => item.id === question.id
                  )}
                  onToggleImportant={toggleImportant}
                  onAskAI={openQuestionAI}
                />
              ))}
            </div>
          </section>

          {/* Original Paper */}
          <section className="border-t border-slate-200 py-8 dark:border-slate-800">
            <button
              type="button"
              className="flex w-full items-center justify-center rounded-lg border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
            >
              View Original Paper
            </button>
          </section>
        </div>
      </main>

      {/* AI */}
      {aiMode && (
        <PaperAI
          mode={aiMode}
          question={selectedQuestion}
          paper={selectedPaper}
          input={aiInput}
          setInput={setAiInput}
          messages={messages}
          onSend={sendMessage}
          onClose={closeAI}
        />
      )}
    </AppLayout>
  );
}

export default Paper;