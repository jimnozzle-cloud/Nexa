import express from "express";

import {
  getTasks,
  createTask,
  deleteTask,
  changeTaskStatus,
} from "../controllers/taskController.js";

const router = express.Router();

router.get("/", getTasks);

router.post("/", createTask);

router.delete("/:id", deleteTask);

router.patch(
  "/:id/status",
  changeTaskStatus
);

export default router;