export function Todos({todos}) {
    return <div>
        {todos.map ((todo)=>{
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button>{todo.complete == true ? "completed" : "Mark as read"}</button>
            </div>
        })}
    </div>
}