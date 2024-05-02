import { useState } from "react";
import "./Car.css";


function Car(): JSX.Element {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");

    return (
        <div className="Car">
            <h1>{brand}</h1>
            <p>It is a {color} {model} from {year}</p>
            <button type="button" onClick={()=>setColor("purple")}>Change Color</button>
        </div>
    );
}

export default Car;
