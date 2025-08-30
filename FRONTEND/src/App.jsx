import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import { useEffect, useState } from "react";


function App() {
  const [todos, setTodos] = useState([]);
  
  const fetchTodos = ()=> {
    fetch("http://localhost:3000/todos")
    .then(async function(res){
      const json = await res.json();
      setTodos(json.todos);
    })};

  const markAsCompleted = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/completed`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log('Update response:', result);
      
      fetchTodos();
    } catch (error) {
      console.error('Error marking todo as completed:', error);
    }
  };

    useEffect(()=>{
      fetchTodos();
    },[]);

  return (
    <div>
      <CreateTodo onTodoAdded={fetchTodos}></CreateTodo>
      <Todos todos={todos} onMarkCompleted={markAsCompleted}></Todos>
    </div>
  )
}

export default App
