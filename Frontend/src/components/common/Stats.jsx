function Stats() {
  const stats = [
    {
      value: "5+",
      label: "Years of Question Papers",
    },
    {
      value: "1000+",
      label: "Questions",
    },
    {
      value: "20+",
      label: "Subjects",
    },
    {
      value: "100%",
      label: "Built for SLIET",
    },
  ];

  return (
    <section className="border-y border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 py-10 sm:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center justify-center border-slate-200 px-4 py-4 text-center sm:border-r last:border-r-0 dark:border-slate-800"
          >
            <p className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">
              {stat.value}
            </p>

            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
