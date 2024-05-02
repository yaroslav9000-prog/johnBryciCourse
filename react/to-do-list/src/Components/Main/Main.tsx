import "./Main.css";
import { Todo } from "../../model/Todo";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import { SyntheticEvent, useEffect, useState } from "react";
import { useLocalStorage } from "../../customHook/useLocalStorage";
import useForm from "react-hook-form";
import AddTask from "../AddTask/AddTask";
import SearchBar from "../SearchBar/SearchBar";
function Main(): JSX.Element {
    const someShit = JSON.parse(localStorage.getItem('shoppingList') || '');

    const newTodoList = [];
    for(let index = 0; index < someShit.length; index++){
        newTodoList.push(new Todo(someShit[index].id, someShit[index].text, someShit[index].date, someShit[index].done));
    }

    const [currentTodos, setCurrentTodos] = useState(newTodoList);
    const [newTask, setNewTask] = useState("");
    const [newDate, setNewDate] = useState("");
    const [search, setSearch] = useState("");
    const handleListUpdate =(someTodos: Todo[])=>{
        setCurrentTodos(someTodos);
               
    }
    

    useEffect(()=>{
        localStorage.setItem('shoppingList', JSON.stringify(currentTodos)); 
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
            <SearchBar search={search} setSearch={setSearch}/>
            <AddTask newTask={newTask} Submit={handleSubmit} SetNewTask={setNewTask} newDate={newDate} setNewDate={setNewDate}/>
            <main>
                <Content updateContent={handleListUpdate} myList={currentTodos.filter(item => (item.getTEXT.includes(search.toLowerCase())))}/>
            </main>
            <footer>
                <Footer tasks={currentTodos.length}/>
            </footer>
        </div>
    );
}

export default Main;
