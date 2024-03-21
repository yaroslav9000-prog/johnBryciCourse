import "./toDoList.css";
import React ,{useState} from "react";
type item  ={
    id: number;
    text: string;
    completed: boolean;
}

function ToDoList(): JSX.Element {
    const [todos, setTodos] = useState<item[]>([
        {id: 1, text: "learning typescript with George", completed: false},
        {id: 3, text: "Build up to do list app", completed: false}
    ]);
    const [input, setInput] = useState<string>("");
    const handleToggle = (id: number)=>{
        setTodos(
            todos.map(todo=>{
                if(todo.id === id){
                    return {...todo, completed: !todo.completed};
                }
                return todo;
    }))
            
    }
    const handleClick = ()=>{
        const newTodo: item={id: Date.now(), text: input, completed: false};
        setTodos([...todos, newTodo]);
    }
    
    return (
        <div className="toDoList">
			<h1>To Do List</h1>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id} onClick={()=>{handleToggle(todo.id)} } style={{textDecoration: todo.completed ? "line-through" : "none"}}>{todo.text}</li>
                ))}
            </ul>
            <input type="text" placeholder="enter your task" onChange={(e)=> setInput(e.currentTarget.value)}/>
            <button onClick={handleClick}>add</button>
        </div>
    );
}

export default ToDoList;
