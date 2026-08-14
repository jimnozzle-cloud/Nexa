import db from "../database/database.js";

export function getTasks() {
  const statement = db.prepare(`
    SELECT
      id,
      title,
      description,
      status,
      created_at
    FROM tasks
    ORDER BY id DESC
  `);

  return statement.all();
}

export function createTask({
  title,
  description,
}) {
  const statement = db.prepare(`
    INSERT INTO tasks (
      title,
      description
    )
    VALUES (?, ?)
  `);

  const result = statement.run(
    title,
    description
  );

  return {
    id: Number(result.lastInsertRowid),
    title,
    description,
    status: "Todo",
  };
}

export function deleteTask(id) {
  const statement = db.prepare(`
    DELETE FROM tasks
    WHERE id = ?
  `);

  const result = statement.run(id);

  return result.changes > 0;
}

export function updateTaskStatus(id, status) {
  const statement = db.prepare(`
    UPDATE tasks
    SET status = ?
    WHERE id = ?
  `);

  const result = statement.run(
    status,
    id
  );

  return result.changes > 0;
}