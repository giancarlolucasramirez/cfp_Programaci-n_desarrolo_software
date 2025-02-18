const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000; // Puerto del servidor

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:4321',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type'],
}));

// Conexión con MongoDB
const mongoURI = "mongodb+srv://admin:admin2024@cluster0.k2htd.mongodb.net/taskManager?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch((err) => console.error('Error de conexión a MongoDB:', err));

// Esquema y modelo de tareas
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const Task = mongoose.model('Task', taskSchema);

// Endpoints

// Obtener todas las tareas
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find(); // Busca todas las tareas
    res.json(tasks); // Devuelve en formato JSON
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
});

// Crear una nueva tarea
app.post('/api/tasks', async (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).send("El título de la tarea es obligatorio");
  }

  try {
    const nuevaTarea = new Task({ title });
    await nuevaTarea.save();
    res.status(201).json(nuevaTarea);
  } catch (error) {
    console.error("Error al guardar la tarea:", error);
    res.status(500).send("Error al crear la tarea");
  }
});

// Marcar una tarea como completada
app.patch('/api/tasks/:id/complete', async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    task.completed = !task.completed; // Alternar estado completado
    await task.save();
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Error al completar la tarea' });
  }
});

// Eliminar una tarea
app.delete('/api/tasks/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.status(404).json({ error: 'Tarea no encontrada' });
    }
    res.status(204).send(); // No hay contenido
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la tarea' });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}/api/tasks`);
});
