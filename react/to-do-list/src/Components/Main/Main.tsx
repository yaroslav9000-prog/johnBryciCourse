import "./Main.css";
import { Todo } from "../../model/Todo";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import { SyntheticEvent, useEffect, useState } from "react";
import { useLocalStorage } from "../../customHook/useLocalStorage";
import useForm from "react-hook-form";
import AddTask from "../AddTask/AddTask";

function Main(): JSX.Element {
    const someShit = JSON.parse(localStorage.getItem('shoppingList') || "{}");
    console.log(someShit);

    const [currentTodos, setCurrentTodos] = useState<Todo[]>(someShit);
    const [newTask, setNewTask] = useState("");
    const [newDate, setNewDate] = useState("");
    const handleListUpdate =(someTodos: Todo[])=>{
        
        localStorage.setItem('shoppingList', JSON.stringify(someTodos)); 
        setCurrentTodos(someTodos);       
    }
    


    useEffect(()=>{
        console.log(currentTodos);
    })

    const handleSubmit = (event: string, eventDate: string) =>{
       const newTodo = new Todo(currentTodos.length, event, eventDate, false);
       const newList = [...currentTodos, newTodo];
       handleListUpdate(newList);
    }

    return (
        <div className="Main">
			<header>
                <Header headerName="Grocery List"/>
            </header>
            <AddTask newTask={newTask} Submit={handleSubmit} SetNewTask={setNewTask} newDate={newDate} setNewDate={setNewDate}/>
            <main>
                <Content updateContent={handleListUpdate} myList={currentTodos}/>
            </main>
            <footer>
                <Footer tasks={currentTodos.length}/>
            </footer>
        </div>
    );
}

export default Main;
