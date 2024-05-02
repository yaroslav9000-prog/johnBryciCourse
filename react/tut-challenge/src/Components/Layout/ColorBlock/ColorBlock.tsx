import { ChangeEvent, SyntheticEvent, useState } from "react";
import "./ColorBlock.css";

function ColorBlock(): JSX.Element {
    const [color, setColor] = useState<String>('');
    const handleColorChange = (event: ChangeEvent<HTMLInputElement>) : any=>{
        setColor(event.target.value);
    }
    return (
        <div className="ColorBlock">
			<div className="colorFill" style={{backgroundColor : `${color}`}}></div>
            <input type="text" onChange={handleColorChange}/>
            <p>{"Current color is: " + color}</p>
        </div>
    );
}

// ColorBlock.defaultProps = {
//     color : "azure"
// } 
// thats how i should declare default props in reacts when no props provided from the user.

export default ColorBlock;
