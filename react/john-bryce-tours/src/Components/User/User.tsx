import "./User.css";
import { useState } from "react";
type AuthUser = {
    name: string,
    email: string
}
function User(): JSX.Element {
    // const[user, setUser] = useState<AuthUser | null /*here i specified what user can be.*/>(null/*Here i pass an initial argument for the state. */);
    const[user, setUser] = useState <AuthUser>({} as AuthUser)
    const handleLogin = ()=>{
        setUser({
            name: "Yaroslav",
            email: 'yarosyar@icloud.com',
        })
    };
    const handleLogout = ()=>{
        setUser({} as AuthUser);
    };


    return (
        <div className="User">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>The user is {user?.name}</div>
            <div>The email is {user?.email}</div>
        </div>
    );
}

export default User;
