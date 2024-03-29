import { useState } from "react";
import Square from "../Square/Square";
import "./Board.css";

function Board(): JSX.Element {
    const [squares, setSquares] = useState<String[]>(Array(9).fill(''));
    //Above this line i declared a state for my Board component, it's initial state is
    // empty array with 9 empty spaces.
    const [xIsNext, setXNext] = useState(true);
    function handleClick(i : number):any{
        //this function is passed down to square component with argument of id 
        //we copy current array, update the array at passed index and update and set new state. 
        //in order to stop changing existing i need to check if value exists at specific position.
        //if does exist stop updating state.
        const nextSquares = squares.slice();
        if(nextSquares[i] || calculateWinner(squares)){
            return;
        }else{
        nextSquares[i] = xIsNext? "X": "O";
        setSquares(nextSquares);
        setXNext(!xIsNext);
        }
    }
    
    const calculateWinner = (squares: String[]) :String =>{
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let i:number = 0; i < lines.length; i++){
            const [a, b, c] = lines[i];
            if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
                return squares[a];
            }
        }
        return '';
    }
    const winner = calculateWinner(squares);
    let status;
    if(winner){
        status = 'Winner is :' + winner;
    }else{
        status = 'Next player: ' + (xIsNext? 'X': 'O');
    }
    return (
        
        <div className="Board">
            <div className='status' >{status}</div>
            <div className="row">
                <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
            </div>
            <div className="row">
                <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
            </div>
            <div className="row">
                <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
            </div>

        </div>
    );
    
}

export default Board;
