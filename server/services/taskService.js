import pool from "../database/database.js";

export async function getTasks() {
  const result = await pool.query(`
    SELECT
      id,
      title,
      description,
      status,
      created_at
    FROM tasks
    ORDER BY id DESC
  `);

  return result.rows;
}

export async function createTask({
  title,
  description,
}) {
  const result = await pool.query(
    `
      INSERT INTO tasks (
        title,
        description
      )
      VALUES ($1, $2)
      RETURNING
        id,
        title,
        description,
        status,
        created_at
    `,
    [title, description]
  );

  return result.rows[0];
}

export async function deleteTask(id) {
  const result = await pool.query(
    `
      DELETE FROM tasks
      WHERE id = $1
    `,
    [id]
  );

  return result.rowCount > 0;
}

export async function updateTaskStatus(
  id,
  status
) {
  const result = await pool.query(
    `
      UPDATE tasks
      SET status = $1
      WHERE id = $2
    `,
    [status, id]
  );

  return result.rowCount > 0;
}