import "./Heading.css";
import { NavLink } from "react-router-dom";
function Heading(): JSX.Element {
    return (
        <div className="Heading">
			<NavLink to="./"><h1>Find your vehicle</h1></NavLink>
            <ul >
                <NavLink to="./pages/private"><li>private</li></NavLink>
                <NavLink to="./pages/motorcycle"><li>motorcycle</li></NavLink>
                <NavLink to="./pages/truck"><li>truck</li></NavLink>
                <NavLink to=""><li>off</li></NavLink>
            </ul>
        </div>
    );
}

export default Heading;
