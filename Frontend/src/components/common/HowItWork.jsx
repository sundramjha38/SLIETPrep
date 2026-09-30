const steps = [
  {
    number: "01",
    title: "Set up your profile",
    description:
      "Tell SLIETPrep your degree, branch, year and semester so we can show you the relevant academic content.",
  },
  {
    number: "02",
    title: "Choose your subject",
    description:
      "Browse subjects from your current semester and select the one you want to prepare for.",
  },
  {
    number: "03",
    title: "Explore past papers",
    description:
      "Choose Minor 1, Minor 2 or Major papers and explore questions from previous examinations.",
  },
  {
    number: "04",
    title: "Prepare smarter",
    description:
      "Study extracted questions, identify important patterns and eventually use AI assistance for your preparation.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-20 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
            How it works
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            From semester to preparation in a few steps.
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-400">
            SLIETPrep keeps the entire preparation process organised in one
            place.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number}>
              <div className="flex">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                  {step.number}
                </div>

                <h3 className="mt-2 ml-4 text-lg font-semibold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
              </div>

              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
