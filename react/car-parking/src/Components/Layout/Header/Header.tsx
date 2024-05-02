import "./Header.css";
import { NavLink } from "react-router-dom";
function Header(): JSX.Element {
    return (
        <div className="Header">
			<h1><NavLink to={"/"}>Car parking</NavLink></h1>
            <ul>
                <NavLink to={"/"}><li>Home</li></NavLink>
                <NavLink to={"/CarList"}><li>Car list</li></NavLink>
                <NavLink to={"/AddCar"}><li>Add car</li></NavLink>
                <NavLink to={"/RemoveCar"}><li>Remove car</li></NavLink>
            </ul>
        </div>
    );
}

export default Header;
