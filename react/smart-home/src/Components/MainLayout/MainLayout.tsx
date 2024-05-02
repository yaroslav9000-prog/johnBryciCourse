import "./MainLayout.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<header><Header/></header>
      <main><Main/></main>
      <footer><Footer/></footer>
        </div>
    );
}

export default MainLayout;
