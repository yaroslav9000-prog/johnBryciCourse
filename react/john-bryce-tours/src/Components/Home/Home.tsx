import "./Home.css";
import { useState } from "react";
type GreetProps = {
    name: string
}

function Home(props: GreetProps): JSX.Element {
    function handleClick():void{
        console.log("ahaha Petuh");

    }
    
    const [color, setColor] = useState("blue");

    return (
        <div className="Home">
			<h2>Home</h2>
            <button onClick={handleClick}>Click me</button>
            <p>Hello motherfucker. People been hitting you up in dm's read your post.{color}</p>
        </div>
        <button type="button" onClick={()=> setColor("red")}></button>
    );
}

export default Home;
