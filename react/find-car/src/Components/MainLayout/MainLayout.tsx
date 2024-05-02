import "./MainLayout.css";
import Heading from "../Heading/Heading";
import {BrowserRouter, Routes, Route} from "react-router-dom";
function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<Heading/>
        </div>
    );
}

export default MainLayout;
