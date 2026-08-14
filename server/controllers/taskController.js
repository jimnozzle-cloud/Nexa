import {
  getTasks as getAllTasks,
  createTask as createNewTask,
  deleteTask as removeTask,
  updateTaskStatus,
} from "../services/taskService.js";

export async function getTasks(req, res, next) {
  try {
    const tasks = await getAllTasks();

    res.json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    next(error);
  }
}

export async function createTask(req, res, next) {
  try {
    const { title, description } = req.body;

    if (!title?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Task title is required",
      });
    }

    if (!description?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Task description is required",
      });
    }

    const task = await createNewTask({
      title: title.trim(),
      description: description.trim(),
    });

    res.status(201).json({
      success: true,
      data: task,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteTask(req, res, next) {
  try {
    const id = Number(req.params.id);

    if (!Number.isInteger(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid task ID",
      });
    }

    const deleted = await removeTask(id);

    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.json({
      success: true,
      message: "Task deleted",
    });
  } catch (error) {
    next(error);
  }
}

export async function changeTaskStatus(
  req,
  res,
  next
) {
  try {
    const id = Number(req.params.id);
    const { status } = req.body;

    const allowedStatuses = [
      "Todo",
      "In Progress",
      "Completed",
    ];

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid status",
      });
    }

    const updated = await updateTaskStatus(
      id,
      status
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    res.json({
      success: true,
      message: "Task updated",
    });
  } catch (error) {
    next(error);
  }
}