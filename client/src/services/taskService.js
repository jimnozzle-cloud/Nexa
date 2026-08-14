import apiRequest from "./api";

export async function getTasks() {
  const response = await apiRequest("/tasks");

  return response.data;
}

export async function createTask(task) {
  const response = await apiRequest("/tasks", {
    method: "POST",
    body: JSON.stringify(task),
  });

  return response.data;
}

export async function deleteTask(id) {
  return apiRequest(`/tasks/${id}`, {
    method: "DELETE",
  });
}

export async function updateTaskStatus(
  id,
  status
) {
  return apiRequest(`/tasks/${id}/status`, {
    method: "PATCH",
    body: JSON.stringify({ status }),
  });
}