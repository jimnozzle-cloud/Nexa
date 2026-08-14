import express from "express";
import cors from "cors";

import taskRoutes from "./routes/taskRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Nexa API is running",
  });
});

app.use(
  "/api/tasks",
  taskRoutes
);

app.use(errorHandler);

export default app;