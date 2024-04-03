import "./Display.css";
const Head = (
    <div key="Head" style={{width: "50px", height: "50px", borderRadius: "100%", 
    border:"10px solid black",
    position: "absolute",
    top: "50px",
    right: "-30px"
    }}>

    </div>
);
const Body = (
    <div key="Body" style={{
        width:"10px",
        height: "100px",
        background: "black",
        position: "absolute",
        top: "120px",
        right: 0
    }}></div>
);
const rightArm = (
    <div key="rightArm" style={{
        width: "100px",
        height: "10px",
        background: "black",
        position: "absolute",
        top: "150px",
        right: "-100px",
        rotate: "-30deg",
        transformOrigin: "left bottom",
    }}
    ></div>
)
const leftArm = (
    <div key="leftArm" style={{
        width:"100px",
        height: "10px",
        background: "black",
        position: "absolute",
        rotate: "30deg",
        top: "150px",
        right: "10px",
        bottom: "10px",
        transformOrigin: "right bottom"
    }}
    ></div>
)
const rightLeg = (
    <div key="rightLeg" style={{
        width:"100px",
        height: "10px",
        background: "black",
        position: "absolute",
        rotate: "60deg",
        top: "295px",
        right:"-40px",
        bottom: "10px",
        transformOrigin: "right bottom"
    }}
    ></div>
)
const leftLeg = (
    <div key="leftLeg" style={{
        width:"100px",
        height: "10px",
        background: "black",
        position: "absolute",
        rotate: "120deg",
        top: "295px",
        right:"60px",
        bottom: "10px",
        transformOrigin: "right bottom"
    }}
    ></div>
)
const bodyParts = [Head, Body, rightArm, leftArm, rightArm, leftArm];
type Guesses= {
    numberOfGuesses: number;
}
function Display(props: Guesses): JSX.Element {
    return (
        <div className="Display" style={{position: "relative"}}>
            {bodyParts.splice(0, props.numberOfGuesses)}
			<div style={{height: "50px", width: "10px", background: "black", position: "absolute", top: 0, right: 0}}></div>
			<div style={{height: "10px", width: "200px", background: "black", marginLeft: "120px"}}></div>
            <div style={{height: "400px", width: "10px", background:"black", marginLeft:"120px"}}></div>
            <div style={{height: "10px", width: "250px", background: "black"}}></div>
        </div>
    );
}

export default Display;
