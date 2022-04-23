import React from 'react'
import "./index.css"
import { Input } from 'react-rainbow-components';
import { Button } from 'react-rainbow-components';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        console.log(e.target.value)
    }
    const onEmailSubmit = (e) => {
        console.log(document.getElementById("myEmail").value);
    }

    const onPasswordSubmit = (e)=> {
        console.log(document.getElementById("myInputer").value)
    }

    // React.useEffect(() => {
    //     console.log("submit");
    // },[email,password]);

    const onClickregister = () => {
        console.log("registered")
    }

    const navigate = useNavigate();
    

  return (
    <div className="container-log">
        <form className='form-log'>
            <h1>Login</h1>
            <label className="myLabel-log">Email</label>
            <Input
                onEmailSubmit = {onEmailSubmit}
                id = "myEmail"
                type="email"
                placeholder="Email.."
                onChange={onChangeEmail}
            />
            
            <label className="myLabel-log">
                Password
            </label>
           
            <Input 
               type="password"
               id="input-component-1"
               placeholder="Password"
               onChange={onChangePassword}
            //    className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            />
                
            
            <Button 
                label="log in" 
                variant="outline-brand" 
                className="rainbow-m-around_medium" 
                id="submit-button"
                placeholder="submit"
                onClick={() => navigate("/home")}
            />
            <textPath className = "myactionLabel-log"onClick={() => navigate("/register")}>Register</textPath>
        </form>
        
    </div>
  )
}

export default LoginPage