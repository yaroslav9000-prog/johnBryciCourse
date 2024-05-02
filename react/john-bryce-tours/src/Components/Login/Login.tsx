import "./Login.css";
import {SubmitHandler, useForm} from "react-hook-form";

// to use forms, install : npm install react-hook-form
// use form site

//userName: String, userPassword: String
type formInputs = {
    userName : String,
    userPassword: String
}
function Login(): JSX.Element {
    const {register, handleSubmit, watch, formState:{errors}}=useForm<formInputs>();
    
    const onSubmit: SubmitHandler<formInputs> = (data)=>{
        console.log(data);
    }
    console.log(watch("userName")) // watch the user name 
    return (
        <div className="Login">
			<h2>Login form</h2>
            <hr/>
            <form >
                <input type="text" /><br />
                <input type="password" /><br />
                <input type="submit" value={"submit"}/>
            </form>
        </div>
        
    );
}

export default Login;
