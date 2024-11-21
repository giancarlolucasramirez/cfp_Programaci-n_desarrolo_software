const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");


const app = express();
const port = 4321;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB
// URI
const mongoURI = "mongodb+srv://admin:admin2024@cluster0.k2htd.mongodb.net/taskManager?retryWrites=true&w=majority&appName=Cluster0";

// Conectar a MongoDB
mongoose.connect(mongoURI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error de conexión a MongoDB:', err));
  

// Esquema de tarea
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false }
});

// Modelo de tarea
const Task = mongoose.model('Task', taskSchema);

// Endpoints
app.get('/', (req, res) => {
  res.send('Bienvenido al API de gestor de tareas');
});

// Obtener todas las tareas
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Crear nueva tarea
app.post('/tasks', async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'El título es obligatorio' });

  const task = new Task({ title });
  try {
    await task.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Actualizar tarea
app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  if (!title) return res.status(400).json({ error: 'El título es obligatorio' });

  try {
    const task = await Task.findByIdAndUpdate(id, { title }, { new: true });
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Eliminar tarea
app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndDelete(id);
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json({ message: 'Tarea eliminada exitosamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Marcar como completada
app.patch('/tasks/:id/complete', async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findByIdAndUpdate(id, { completed: true }, { new: true });
    if (!task) return res.status(404).json({ error: 'Tarea no encontrada' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Iniciar servidor
app.listen(4321, () => {
  console.log('Servidor escuchado en https://4322-idx-cfpprogramaci-ndesarrolosoftwaregit-1731941233207.cluster-vyr53kd25jc2yvngldrwyq6zc4.cloudworkstations.dev');
});

