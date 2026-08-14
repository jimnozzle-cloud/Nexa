function TaskCard({
  task,
  onDelete,
  onStatusChange,
}) {
  const nextStatus =
    task.status === "Completed"
      ? "Todo"
      : "Completed";

  return (
    <div className="task">

      <button
        className={`check ${
          task.status === "Completed"
            ? "checked"
            : ""
        }`}
        onClick={() =>
          onStatusChange(
            task.id,
            nextStatus
          )
        }
      >
        {task.status === "Completed"
          ? "✓"
          : ""}
      </button>

      <div className="task-content">

        <strong>
          {task.title}
        </strong>

        <p>
          {task.description}
        </p>

      </div>

      <span className="task-status">
        {task.status}
      </span>

      <button
        className="delete"
        onClick={() =>
          onDelete(task.id)
        }
      >
        ×
      </button>

    </div>
  );
}

export default TaskCard;