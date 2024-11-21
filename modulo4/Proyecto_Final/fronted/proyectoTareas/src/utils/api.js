const API_URL = "https://4322-idx-cfpprogramaci-ndesarrolosoftwaregit-1731941233207.cluster-vyr53kd25jc2yvngldrwyq6zc4.cloudworkstations.dev";
; // Cambia esta URL si estás en producción

export async function fetchTasks() {
  const response = await fetch(`${API_URL}/tasks`);
  if (!response.ok) {
    throw new Error("Error al obtener las tareas");
  }
  return await response.json();
}

export async function createTask(title) {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title }),
  });
  if (!response.ok) {
    throw new Error("Error al crear la tarea");
  }
  return await response.json();
}

export async function updateTask(id) {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ completed: true }),
  });
  if (!response.ok) {
    throw new Error("Error al actualizar la tarea");
  }
  return await response.json();
}

export async function deleteTask(id) {
  const response = await fetch(`${API_URL}/tasks/${id}`, { method: "DELETE" });
  if (!response.ok) {
    throw new Error("Error al eliminar la tarea");
  }
  return await response.json();
}