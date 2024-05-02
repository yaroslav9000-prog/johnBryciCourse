import "./LoggedIn.css";
import {useState} from 'react'
function LoggedIn(): JSX.Element {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () =>{
        setIsLoggedIn(true);
    };
    const handleLogout = ()=>{
        setIsLoggedIn(false);
    };
    
    return (
        <div className="LoggedIn">
			<button onClick={handleLogin}>Log in</button>
            <button onClick={handleLogout}>Log out</button>
            <div>User is {isLoggedIn ? 'logged in': 'logged out'}</div>
        </div>
    );
}

export default LoggedIn;
