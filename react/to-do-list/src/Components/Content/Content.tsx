import "./Content.css";
import { Todo } from "../../model/Todo";
import { ChangeEvent, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
type TodoList ={
    myList : Todo[]; 
    updateContent: (someObject: Todo)=>void;
};
type FormFields = {
    taskName : string;
    taskDate: string;
}
function Content({myList, updateContent}: TodoList): JSX.Element {
    const {register, handleSubmit} = useForm<FormFields>();
    

    const onSubmit:SubmitHandler<FormFields> = (data) =>{
        console.log('Form submitted', data);
        updateContent(new Todo(data.taskName, data.taskDate, false));
    }

    return (
        <div className="Content">
			<h1>Some Content</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("taskName")} id="taskName" type="text" />
            <input {...register("taskDate")} id="taskDate" type="date" />
            <input type="submit" value={"submit"}/>
            </form>
            {myList.map((item, index)=>(<div key={index} className="Task"><span className="taskName">{item.getTEXT}</span><span className="taskDate">{item.getDate}</span></div>))}
        </div>
    );
}

export default Content;
