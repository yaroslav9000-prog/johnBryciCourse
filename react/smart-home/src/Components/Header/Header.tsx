import "./Header.css";
import { NavLink } from "react-router-dom";
function Header(): JSX.Element {
    return (
        <div className="Header">
			<h1>Smart Home</h1>
            <ul>
                <li>Server data</li>
                <li>Present Components</li>
                <li>Save data</li>
                <li>Send to controller</li>
            </ul>
        </div>
    );
}

export default Header;
