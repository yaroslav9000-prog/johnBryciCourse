import "./Main.css";
import { Todo } from "../../model/Todo";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import { SyntheticEvent, useEffect, useState } from "react";
import { useLocalStorage } from "../../customHook/useLocalStorage";
import AddTask from "../AddTask/AddTask";

function Main(): JSX.Element {
    const {setItem, getItem} = useLocalStorage("currentTodos");

    const [currentTodos, setCurrentTodos] = useState<Todo[]>([
        new Todo(0, "Walk Rikki", "21-8-2024", false),
        new Todo(1, "Make my Bed", "9-4-2024", false),
        new Todo(2, "Go to work", "8-4-2024", false)
    ]);
    const [newTask, setNewTask] = useState("");
    const [newDate, setNewDate] = useState("");
    const handleListUpdate =(someTodos: Todo[])=>{
        setCurrentTodos(someTodos);
        
    }
    
    useEffect(()=>{
        console.log(currentTodos);
    })

    const handleSubmit = (event: any) =>{
        preventDe
        console.log(event);
    }

    return (
        <div className="Main">
			<header>
                <Header headerName="Some task list"/>
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
