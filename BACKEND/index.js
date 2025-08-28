const express = require ('express');
require('dotenv').config();
const { createTodo, updateTodo } = require('./types.js');
const todo = require('./db');
const cors = require("cors");

const app = express();

app.use(cors({
    origin: "https://localhost:5173"
}));
app.use(express.json());

app.post("/todo", async(req,res)=>{
    const createTask = req.body;
    const parseTask = createTodo.safeParse(createTask);
    if(!parseTask.success){
        res.status(411).json({
            msg:"You sent the wrong input!"
        })
        return;
    }
    await todo.create({
        title: createTask.title,
        description: createTask.description,
        completed: false
    })
    res.json({
        msg: "Todo created successfully!",
    })
})
app.get("/todos",async(req,res)=>{
    const todos = await todo.find({});
    res.json({
        todos
    })
})
app.put("/completed",async(req,res)=>{
    const updateTask = req.body;
    const parseTask = updateTodo.safeParse(updateTask);
    if(!parseTask.success){
        res.status(411).json({
            msg:"You sent the wrong input!"
        })
        return;
    }
    const todo = await todo.update({ 
        _id: req.body.id 
    }, { 
        completed: true 
    });
    res.json({
        msg: "Todo marked as completed!"
    })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});