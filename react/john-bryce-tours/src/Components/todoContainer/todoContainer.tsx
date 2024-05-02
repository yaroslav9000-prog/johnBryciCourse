import "./todoContainer.css";
import { todo } from "../../model/todo";
function TodoContainer(props: todo[]): JSX.Element {
    
    
    return (
        <div className="todoContainer">
			{props.map((item, index)=><div key={index}>{item.taskText}{item.taskDate}</div>)}
        </div>
    );
}

export default TodoContainer;
