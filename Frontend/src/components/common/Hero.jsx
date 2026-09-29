function Hero() {
    return (
        <section className="bg-white dark:bg-slate-950">
            <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28 lg:gap-20">

                {/* Left content */}
                <div>
                    <p className="mb-5 text-sm font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400">
                        For SLIET students
                    </p>

                    <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-6xl">
                        Prepare smarter for every semester exam.
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
                        SLIETPrep organises previous years' question papers
                        into clean, readable questions — so you spend your
                        time studying, not searching PDFs.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <button className="rounded-lg bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800">
                            Get started free
                        </button>

                        <button className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800">
                            I already have an account
                        </button>
                    </div>
                </div>

                {/* Product preview */}
                <div className="hidden md:block">
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">

                        <div className="rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-950">

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        Current subject
                                    </p>

                                    <h2 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                                        Engineering Mechanics
                                    </h2>
                                </div>

                                <span className="rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                                    Major
                                </span>
                            </div>

                            <div className="mt-6 space-y-3">

                                <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4 dark:border-slate-700">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                            Question Paper
                                        </p>
                                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                            Major examination
                                        </p>
                                    </div>

                                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                        2024
                                    </span>
                                </div>

                                <div className="flex items-center justify-between rounded-lg border border-slate-200 p-4 dark:border-slate-700">
                                    <div>
                                        <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                                            Extracted questions
                                        </p>
                                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                            Clean and readable
                                        </p>
                                    </div>

                                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                                        24
                                    </span>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Hero;