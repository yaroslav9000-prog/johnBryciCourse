import "./Main.css";
import MainRoute from "../../Routes/MainRoute/MainRoute";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function Main(): JSX.Element {
    return (
        <div className="Main">
			<header>
                <Header/>
            </header>
            <main>
                <MainRoute/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Main;
