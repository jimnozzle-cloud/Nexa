import { useState } from "react";

function Hero({ onCreateTask }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    try {
      await onCreateTask({
        title,
        description,
      });

      setTitle("");
      setDescription("");
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <section className="hero">

        <p>Good afternoon 👋</p>

        <h1>
          Let's get things done.
        </h1>

        <p>
          Manage your tasks and projects
          from one beautiful workspace.
        </p>

        <button
          className="new-task"
          onClick={() => setOpen(true)}
        >
          + New Task
        </button>

      </section>

      {open && (
        <div className="modal">

          <div className="modal-box">

            <button
              className="close"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            <h2>Create Task</h2>

            <form onSubmit={handleSubmit}>

              <label>Task title</label>

              <input
                value={title}
                onChange={(event) =>
                  setTitle(event.target.value)
                }
                placeholder="Build homepage"
              />

              <label>Description</label>

              <textarea
                value={description}
                onChange={(event) =>
                  setDescription(event.target.value)
                }
                placeholder="What needs to be done?"
                rows="4"
              />

              <button
                className="create"
                type="submit"
              >
                Create Task
              </button>

            </form>

          </div>

        </div>
      )}
    </>
  );
}

export default Hero;