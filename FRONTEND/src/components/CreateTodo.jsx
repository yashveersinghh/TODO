import { useState } from "react";

export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input type="text" placeholder="Title" onChange={function(e){
            setTitle(e.target.value);
        }} /> <br />
        <input type="text" placeholder="Description" onChange={function(e){
            setDescription(e.target.value);
        }} /> <br />
        <button onClick={()=>{
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title,
                    description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res){
                    const json = await res.json();
                    console.log(json);
                    alert("Todo added");
                })
        }}>Add a todo</button>
    </div>
}