import "./AddTask.css";
// import {useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';
type Inputs = {
    taskText: string;
    taskDate : string;
}
type Props = {
    Submit: (event: string, eventDate: string)=> void;
    SetNewTask: (event: any)=> void;
    newTask : string;
    newDate: string;
    setNewDate: (event: any) => void;
}
function AddTask({Submit, SetNewTask, newTask, newDate, setNewDate}: Props): JSX.Element {
    // const {register, handleSubmit}= useForm({
    //     shouldUseNativeValidation: true,
    // });

    
    return (
        
			<form className="AddTask">
            <TextField  sx={{height: "3em"}} variant="standard" placeholder="Add Task" onChange={(e)=>{SetNewTask(e.target.value)}} required/>

            <input type="date" style={{height: "2em"}} onChange={(e)=>{setNewDate(e.target.value)}} required/><br />

            <Button variant="outlined" onClick={()=>{Submit(newTask, newDate)}} color="success" endIcon={<SendIcon/>}>Add</Button>
            </form>
        
    );
}

export default AddTask;
