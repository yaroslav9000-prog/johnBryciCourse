import "./RegisterForm.css";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
    username: string,
    password: string,
    checkPassword: number,

}
function RegisterForm(): JSX.Element {
    const {register,
         handleSubmit, 
         formState: {errors}} = useForm<Inputs>();
    
    return (
        <form action="" className="RegisterForm">
            <input type="text"  placeholder="username"/>
            
            <input type="password" placeholder="password" />
            <input type="password" placeholder="make sure you can repeat your password"/>
            <input type="tel" placeholder=""/>
            <input type="email" required/>
        </form>
    );
}

export default RegisterForm;
