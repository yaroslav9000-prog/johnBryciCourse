import "./Board.css";
type ClickFun = {
    handleClick: (letter: string)=>void;
}

function Board(props: ClickFun): JSX.Element {
    const alpha = Array.from(Array(26)).map((e, i)=> i + 97);
    const alphabet = alpha.map((x)=> String.fromCharCode(x));
    
    return (
        <div className="Board">
			{alphabet.map((item,index)=>(<button onClick={()=>{props.handleClick(item)}} key={index} className="btn">{item}</button>))}
        </div>
    );
}

export default Board;
