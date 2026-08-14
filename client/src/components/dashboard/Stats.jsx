function Stats({ tasks }) {
  const total = tasks.length;

  const inProgress = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const completed = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const productivity = total
    ? Math.round((completed / total) * 100)
    : 0;

  const stats = [
    {
      label: "Total Tasks",
      value: total,
    },
    {
      label: "In Progress",
      value: inProgress,
    },
    {
      label: "Completed",
      value: completed,
    },
    {
      label: "Productivity",
      value: `${productivity}%`,
    },
  ];

  return (
    <section className="cards">

      {stats.map((stat) => (
        <div
          className="card"
          key={stat.label}
        >
          <span>{stat.label}</span>

          <strong>{stat.value}</strong>
        </div>
      ))}

    </section>
  );
}

export default Stats;