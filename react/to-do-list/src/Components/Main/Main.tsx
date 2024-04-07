import "./Main.css";
import { Todo } from "../../model/Todo";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import { useEffect, useState } from "react";
function Main(): JSX.Element {
    const storedTodos = JSON.parse(localStorage.getItem('todos') || '');

    const [currentList, setCurrentList] = useState<Todo[]>(storedTodos);
    
    
    const handleListUpdate =(someObject: Todo)=>{
        setCurrentList([...currentList, someObject]);
    
    }
    
    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(currentList));
    },[currentList])

    return (
        <div className="Main">
			<header>
                <Header/>
            </header>
            <main>
                <Content updateContent={handleListUpdate} myList={currentList}/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default Main;
