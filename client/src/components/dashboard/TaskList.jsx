import TaskCard from "../tasks/TaskCard";

function TaskList({
  tasks,
  loading,
  error,
  onDelete,
  onStatusChange,
}) {
  if (loading) {
    return (
      <section className="tasks">
        <h2>Recent Tasks</h2>
        <p>Loading tasks...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="tasks">
        <h2>Recent Tasks</h2>

        <p>
          Unable to load tasks: {error}
        </p>
      </section>
    );
  }

  return (
    <section className="tasks">

      <h2>Recent Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            onDelete={onDelete}
            onStatusChange={onStatusChange}
          />
        ))
      )}

    </section>
  );
}

export default TaskList;