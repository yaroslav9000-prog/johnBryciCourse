import { ArrowFunction } from "typescript";
import "./Square.css";
import { useState } from "react";
type SquareProp= {
    value: String;
    onSquareClick: () => any; 
}

function Square(props : SquareProp): JSX.Element {
    
    
    
    
    return (
        <button onClick={props.onSquareClick} className="Square">
			{props.value}
        </button>
    );
}

export default Square;
