const features = [
    {
        title: "Previous Year Papers",
        description:
            "Access previous years' question papers for your subjects in one organised place.",
        icon: "📄",
    },
    {
        title: "Extracted Questions",
        description:
            "Read individual questions directly instead of searching through lengthy PDF files.",
        icon: "🔍",
    },
    {
        title: "Exam Focused",
        description:
            "Prepare specifically for Minor 1, Minor 2 and Major examinations.",
        icon: "🎯",
    },
    {
        title: "Smart Preparation",
        description:
            "Identify repeated questions and important patterns to make your preparation more effective.",
        icon: "📊",
    },
    {
        title: "Subject Wise",
        description:
            "Find papers and questions organised according to your semester and subjects.",
        icon: "📚",
    },
    {
        title: "AI Study Assistant",
        description:
            "Ask questions and get answers grounded in SLIETPrep's academic content.",
        icon: "✨",
    },
];

function Features() {
    return (
        <section
            id="features"
            className="bg-white py-20 dark:bg-slate-950"
        >
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
                        Everything you need to find, understand and practise
                        questions from your previous examinations.
                    </p>
                </div>

                {/* Feature cards */}
                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
                        >
                            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-100 text-xl dark:bg-blue-950">
                                {feature.icon}
                            </div>

                            <h3 className="mt-5 text-lg font-semibold text-slate-900 dark:text-white">
                                {feature.title}
                            </h3>

                            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
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