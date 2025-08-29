import { useState } from "react";

export function CreateTodo({ onTodoAdded }){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "97.5vh",
        backgroundColor: "#f3f4f6",
      }}
      >
        <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          width: "350px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "25px", fontFamily: "sans-serif" }}>My Todo App</h1>
            <input 
                type="text" 
                placeholder="Title" onChange={function(e){
                setTitle(e.target.value);
            }}
            style={{
            width: "80%",
            padding: "10px",
            marginBottom: "10px",
            marginLeft: "14px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }} /> <br />
            <input 
                type="text"
                placeholder="Description" 
                onChange={function(e){
                setDescription(e.target.value);
            }}
            style={{
            width: "80%",
            padding: "10px",
            marginBottom: "10px",
            marginLeft: "14px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            outline: "none",
          }} /> <br />
            <button onClick={()=>{
                fetch("http://localhost:3000/todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title,
                        description
                    }),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                .then(async (res) => {
                if (res.ok) {
                const json = await res.json();
                console.log(json);
                setTitle("");            
                setDescription("");
                onTodoAdded();
                alert("Todo added successfully!");
                } else {
                alert("Failed to add todo");
                }
        })
        .catch((err) => {
            console.error(err);
            alert("Something went wrong");
        });
            }}
            style={{
            width: "86%",
            padding: "10px",
            marginLeft: "14px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "bold",
          }}>Add a todo</button>
    </div>
</div>
}