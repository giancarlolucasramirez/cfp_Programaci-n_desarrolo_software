const express = require('express');
const mongoose = require('mongoose');
const bodyParsee = require('body-parse');
const cors = require('cors');

const app = express()
const port = 3000

//middleward 
app.use(bodyParsee.jzon())
app.use(cors())

//MongoDB

const mongoURI= 'mongodb+srv://giancarlolucas48:NtdYT5KG4FFUQ3v3@cluster0.k2htd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoURI,{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> console.log('conectado a MongoAtlas'))
.catch(err => console.log('error en la conexion de MongoDB'))


const taskSchema = new mongoose.Schema({
    title: {type:String, require: true},
    completed: {type:Boolean, default:false}
});

//modelo de tarea 

const Task = mongoose.model('Task',taskSchema);

// endpoints

// obtener las tareas 
app.get('tasks',async(req,res)=>{
    try{
        const tasks = await Task.find();
        res.json(tasks)
    }catch(err){
        res.status(500).json({error: err.message})
    }
})


// crear nueva tarea

app.post('/tasks',async(req,res)=>{
    const {title} = req.body
    if(!title)return res.status(400).json({error: 'El titulo es obligatorio'})
        const task = new Task({title})
    try{
        await task.save()
        res.status(201).json(task)
    }catch(err){
        res.status(500).json({error: err.message})
    }
})

//actualizar tarea
app.put('/tasks/:id', async(req,res)=>{
    const {id} = req.params
    const {title}  = req.body
    if(!title) return res.status(400).json({error: 'El titulo es obligatorio'})

try{
    const task = await Task.findByIdAndUpdate(id,{title},{new:true})
    if (!task) return res.status(404).json({errora: 'tarea no encontrada'})
    res.json(task)
}catch(err){
    res.status(500).json({error: err.message})
}
})


// eliminar tarea
app.delete('/tasks/:id',async(req,res) =>{
    const{id} = req.params
    try{
        const task = await Task.findByIdAndDelete(id)
        if(!task)return  res.status(404).json({errora: 'tarea eliminada'})
    }catch(err){
        res.status(500).json({error: err.message})
    }
})
