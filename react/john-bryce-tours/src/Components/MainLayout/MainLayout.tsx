import "./MainLayout.css";
import NavBar from "../NavBar/NavBar";
import TodoList from "../todoList/todoList";
function MainLayout(): JSX.Element {
    return (
        <div className="MainLayout">
			<header>
            <NavBar></NavBar>
            </header>
            <main>
                <TodoList/>
            </main>
        </div>
    );
}

export default MainLayout;
