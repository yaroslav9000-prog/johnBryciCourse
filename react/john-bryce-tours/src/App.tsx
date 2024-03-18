import Person from './Components/Person/Person';
import NavBar from './Components/NavBar/NavBar';
import PersonList from "./Components/PersonList/PersonList";
import Status from "./Components/Status/Status";
import SomeChildren from './Components/SomeChildren/SomeChildren';
function App() {
  const title = 'Welcome to the new blog.';
  const likes = 50;
  const myURL = "https://www.cryptocompare.com/";
  // const person = {name: 'pizdaRulu', hobby: "learning React"};
  // can't render to screen object types as well as boolean types.
    
  return (
    <div className="App">
      
      
      <NavBar/>
      <div className="content">
        <Status status={'error'}></Status>
      
      </div>

    </div>
  );
}

export default App;
