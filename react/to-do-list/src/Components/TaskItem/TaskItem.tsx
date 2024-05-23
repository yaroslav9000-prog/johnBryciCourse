import "./TaskItem.css";
import { Todo } from "../../model/Todo";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
type TaskItemProps = {
    handleCheck : (value: number)=>void;
    handleDelete : (value: number) => void;
    task : Todo;
    index : number;
}
function TaskItem({handleCheck, handleDelete, task, index}: TaskItemProps): JSX.Element {
    return (
        <div className="TaskItem">
			<Card className="Task" variant="outlined" key={index}><Checkbox size={"large"}  onChange={()=>handleCheck(task.getID)} checked={task.getDONE}/><span className="textSpan" style={{textDecoration: task.getDONE? "line-through": "none"}}>{task.getTEXT}</span>
                <span className="dateSpan">{task.getDate}</span><Button variant="contained" color='error' onClick={()=>{handleDelete(task.getID)}}>Delete</Button></Card>
        </div>
    );
}

export default TaskItem;
