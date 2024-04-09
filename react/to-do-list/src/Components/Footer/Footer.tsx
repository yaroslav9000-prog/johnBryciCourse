import "./Footer.css";
type TaskAmount = {
    tasks : number
}
function Footer({tasks}: TaskAmount): JSX.Element {
    return (
        <div className="Footer">
			<h4>all rights reserved to Yaroslav &#169; &#8482; {tasks === 1? ("You have " +tasks + "task"):("You have " + tasks + " tasks")}</h4>
        </div>
    );
}

export default Footer;
