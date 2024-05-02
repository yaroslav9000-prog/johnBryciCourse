import "./MainRoute.css";
import {Route, Routes} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Page404 from "../../Pages/Page404/Page404";
import CarList from "../../Pages/CarList/CarList";
import AddCar from "../../Pages/AddCar/AddCar";
import RemoveCar from "../../Pages/RemoveCar/RemoveCar";
function MainRoute(): JSX.Element {
    return (
        <div className="MainRoute">
			<Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/CarList" element={<CarList/>}/>
                <Route path="/AddCar" element={<AddCar/>}/>
                <Route path="/RemoveCar" element={<RemoveCar/>}/>
                <Route path="/*" element={<Page404/>}/>
            </Routes>
        </div>
    );
}

export default MainRoute;
