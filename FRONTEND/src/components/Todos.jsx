// export function Todos({todos}) {
//     return <div>
//         {todos.map ((todo)=>{
//             return <div>
//                 <h1>{todo.title}</h1>
//                 <h2>{todo.description}</h2>
//                 <button>{todo.completed ? "✅ Completed" : "⏳ Mark as done"}</button>
//             </div>
//         })}
//     </div>
// }

export function Todos({ todos, onMarkCompleted }) {
  console.log('Todos component received:', todos);
  
  return (
    <div style={{backgroundColor: "#f3f4f6",}}>
      {todos.map((todo) => (
        <div 
          key={todo._id}
          style={{
            width: "1000px",
            border: "1px solid #d9d6d6ff",
            borderRadius: "8px",
            padding: "10px",
            margin: "10px 50px",
            backgroundColor: todo.completed ? "#b2e2b2ff" : "#eee8e8ff"
          }}
        >
          <h2 style={{ margin: "0", fontFamily: "sans-serif"}}>{todo.title}</h2>
          <p style={{fontFamily: "sans-serif"}}>{todo.description}</p>
          <button 
            style={{borderRadius: "8px", fontFamily: "sans-serif", cursor: "pointer"}}
            onClick={() => onMarkCompleted(todo._id)}
            disabled={todo.completed}
          >
            {todo.completed ? "✅ Completed" : "⏳ Mark as done"}
          </button>
        </div>
      ))}
    </div>
  );
}
