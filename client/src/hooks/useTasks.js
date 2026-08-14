import { useCallback, useEffect, useState } from "react";

import {
  getTasks,
  createTask,
  deleteTask,
  updateTaskStatus,
} from "../services/taskService";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError("");

      const data = await getTasks();

      setTasks(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  async function addTask(task) {
    const newTask = await createTask(task);

    setTasks((current) => [
      newTask,
      ...current,
    ]);
  }

  async function removeTask(id) {
    await deleteTask(id);

    setTasks((current) =>
      current.filter((task) => task.id !== id)
    );
  }

  async function changeStatus(id, status) {
    await updateTaskStatus(id, status);

    setTasks((current) =>
      current.map((task) =>
        task.id === id
          ? { ...task, status }
          : task
      )
    );
  }

  return {
    tasks,
    loading,
    error,
    addTask,
    removeTask,
    changeStatus,
    reload: loadTasks,
  };
}