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
import axios, { AxiosResponse } from "axios";
import {item, jsonObject} from "../../model/dbObject";
import {apiRequest} from "../../apiRequests/apiRequests";

function Main(): JSX.Element {
    const API_URL = "http://localhost:3500/tasks"

    const newTodoList : Todo[]= [];
    // for(let index = 0; index < someShit.length; index++){
    //     newTodoList.push(new Todo(someShit[index].id, someShit[index].text, someShit[index].date, someShit[index].done));
    // }

    const [currentTodos, setCurrentTodos] = useState<Todo[]>(newTodoList);
    const [newTask, setNewTask] = useState("");
    const [newDate, setNewDate] = useState("");
    const [search, setSearch] = useState("");
    const [fetchError, setFetchError] = useState(null);

    const handleListUpdate =(someTodos: Todo[])=>{
        setCurrentTodos(someTodos);       
    }
    
    

    useEffect(()=>{
        const fetchTasks = async ()=>{
            try{
                const response= await fetch(API_URL);
                if(!response.ok) throw Error("Did not recieve expected data");
                const myTasks = await response.json();
                console.log(myTasks);
                setCurrentTodos(convertJsonObjects(myTasks));
                console.log(myTasks);
               
            }catch(err: any){
                console.log(err)
                setFetchError(err);       
            }
        }
        fetchTasks();   

    }, [])

    const convertJsonObjects = (someShit: item[]) =>{
        for(let index = 0; index < someShit.length; index++){
        newTodoList.push(new Todo(someShit[index].id, someShit[index].text, someShit[index].date, someShit[index].done));
    }
    return [...newTodoList];
    }

    const handleSubmit = async (event: string, eventDate: string) =>{
       const newTodo = new Todo(currentTodos.length + 1, event, eventDate, false);
       
       ///////////////////////////////////////////////////////////////////
       const postOptions: RequestInit = {
        method: "POST",
        mode: "cors",
        headers:{"Content-type":"application/json"},
        body: JSON.stringify(newTodo)
    }
    const result = await apiRequest(API_URL, postOptions);
    handleListUpdate([...currentTodos, newTodo]);
    // if(result) setFetchError(result);
    }

    

    return (
        <div className="Main">
			<header>
                <Header headerName="Grocery List"/>
            </header>
            <SearchBar search={search} setSearch={setSearch}/>
            <AddTask newTask={newTask} Submit={handleSubmit} SetNewTask={setNewTask} newDate={newDate} setNewDate={setNewDate}/>
            <main>
                {fetchError && <p style={{color: "red"}}>{`${fetchError}`}</p>}
                {!fetchError &&<Content updateContent={handleListUpdate} myList={currentTodos.filter(item => (item.getTEXT.includes(search.toLowerCase())))}/>}
            </main>
            <footer>
                <Footer tasks={currentTodos.length}/>
            </footer>
        </div>
    );
}

export default Main;
