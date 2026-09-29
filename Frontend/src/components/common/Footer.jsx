function Footer() {
    return (
        <footer className="border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto max-w-7xl px-6 py-10">

                <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white">
                                S
                            </div>

                            <span className="text-lg font-bold text-slate-900 dark:text-white">
                                SLIETPrep
                            </span>
                        </div>

                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                            Smart exam preparation for SLIET students.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6 text-sm">
                        <a
                            href="#features"
                            className="text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                        >
                            Features
                        </a>

                        <a
                            href="#how-it-works"
                            className="text-slate-600 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                        >
                            How It Works
                        </a>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-8 border-t border-slate-200 pt-6 dark:border-slate-800">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        © {new Date().getFullYear()} SLIETPrep. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}

export default Footer;