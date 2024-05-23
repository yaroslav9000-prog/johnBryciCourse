import "./Content.css";
import { Todo } from "../../model/Todo";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import TaskItem from "../TaskItem/TaskItem";
import Button from '@mui/material/Button';
import AddTask from "../AddTask/AddTask";
type TodoList ={
    myList : Todo[]; 
    updateContent: (someObject: Todo[])=>void;
};
type FormFields = {
    taskName : string;
    taskDate: string;
}
function Content({myList, updateContent}: TodoList): JSX.Element {
    const {register, handleSubmit} = useForm<FormFields>();
    
    // const deleteTodos = (e: number)=>{
    //     const newTodos = myList.filter(todo=> todo.getID!==e );
    //     updateContent([...newTodos]);
    // }
    const handleCheck = (id: number)=>{
        myList.map(todo =>(id === todo.getID? todo.done = !todo.getDONE: todo))
        updateContent([...myList]);
    }
    const handleDelete = async (id: number) =>{
        const result = myList.filter(todo=>todo.getID!==id);
        //i need to refactor ids of list items
        const refResult = result.map((item, index)=> {
            item.setID = index;
            return item;
        })
        // updateContent([...refResult]);
        const deleteOptions: RequestInit = {
            method: "DELETE",
            mode: "cors",
            headers:{
                "Content-type": "application/json"
            }
        }
        const reqURL = `http://localhost:3500/tasks/${id}`;
        const finalResult = await fetch(reqURL, deleteOptions);
        updateContent(refResult); 
    }

    return (
        <div className="Content">
                      
            {myList.length?(
                myList.map((todo, index) =>(<TaskItem index={index} task={todo} handleCheck={()=>{handleCheck(todo.getID)}} handleDelete={()=>{handleDelete(todo.getID)}}/>))
            ):(<h3 style={{fontFamily: "Lobster", fontSize:"large"}}>Your List is empty</h3>)
        }
        </div>
    );
}
//<input type="checkbox" onChange={()=>handleCheck(todo.getID)} checked={todo.getDONE}/>
export default Content;
