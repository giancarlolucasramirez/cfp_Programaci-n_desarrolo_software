const API_URL = "http://localhost:3000/api"; // Cambiar al dominio real si aplica

export async function fetchTasks() {
  const response = await fetch(`${API_URL}/tasks`);
  if (!response.ok) {
    throw new Error("Error al obtener las tareas");
  }
  return response.json();
}

export async function crearTarea(title) {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  if (!response.ok) {
    throw new Error("Error al crear la tarea");
  }
  return response.json();
}

export async function completeTask(id) {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT",
  });
  if (!response.ok) {
    throw new Error("Error al completar la tarea");
  }
  return response.json();
}

export async function deleteTask(id) {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("Error al eliminar la tarea");
  }
}
