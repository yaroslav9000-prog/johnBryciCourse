import "./todoList.css";
import { todo } from "../../model/todo";
import { useState } from "react";
import TodoContainer from "../todoContainer/todoContainer";
function TodoList(): JSX.Element {
    
    const [todos, setTodos] = useState<todo[]>(); 
    
    return (
        <div className="todoList">
			<input type="text" placeholder="input your task"/>
            <input type="date" />
            <input type="button" value={"submit"}/>
            <TodoContainer/>
        </div>
    );
}

export default TodoList;
