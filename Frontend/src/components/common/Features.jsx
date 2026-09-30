const features = [
  {
    title: "Previous Year Papers",
    description:
      "Access previous years' question papers for your subjects in one organised place. Review past examinations to understand the type, difficulty, and structure of questions asked over the years.",
    icon: 1,
  },
  {
    title: "Extracted Questions",
    description:
      "Read individual questions directly from previous papers instead of searching through lengthy PDF files. Explore questions in a structured format and quickly find what you need for your preparation.",
    icon: 2,
  },
  {
    title: "Exam Focused",
    description:
      "Prepare specifically for Minor 1, Minor 2, and Major examinations with content organised according to your exam pattern. Focus your preparation on the topics and questions relevant to each examination.",
    icon: 3,
  },
  {
    title: "Smart Preparation",
    description:
      "Identify repeated questions, frequently tested topics, and important patterns across previous examinations. Use this information to understand what has been asked before and plan your preparation more effectively.",
    icon: 4,
  },
  {
    title: "Subject Wise",
    description:
      "Find academic content organised according to your semester and subjects. Easily move from a subject to its previous papers, extracted questions, and other preparation resources without searching through unrelated material.",
    icon: 5,
  },
  {
    title: "AI Study Assistant",
    description:
      "Ask questions about your academic content and get explanations grounded in SLIETPrep's available papers, questions, and study material. Use AI to clarify concepts, understand questions, and support your exam preparation.",
    icon: 6,
  },
];

function Features() {
  return (
    <section id="features" className="bg-white py-20 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            Everything you need
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Prepare smarter, not harder.
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
            Everything you need to find, understand and practise questions from
            your previous examinations.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex ">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-600 text-xl  text-white dark:font-bold">
                  {feature.icon}
                </div>

                <h3 className="mt-2 ml-4 text-lg font-semibold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>
              </div>

              <p
                className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400 "
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
