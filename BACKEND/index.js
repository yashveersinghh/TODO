const express = require ('express');
const { createTodo, updateTodo } = require('/types.js');
const app = express();

app.use(express.json());

app.post("/todo",(req,res)=>{
    const createTask = req.body;
    const parseTask = createTodo.safeParse(createTask);
    if(!parseTask.success){
        res.status(411).json({
            msg:"You sent the wrong input!"
        })
        return;
    }
    //mongo
})
app.get("/todos",(req,res)=>{

})
app.put("/completed",(req,res)=>{
    const updateTask = req.bpdy;
    const parseTask = updateTodo.safeParse(updateTask);
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});