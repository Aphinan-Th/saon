import React from 'react'
import "./login.css"
import { Input } from 'react-rainbow-components';
import { Button } from 'react-rainbow-components';

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
        console.log("submit");
    }
    React.useEffect(() => {
        console.log("submit");
    },[email,password]);

    const onClickregister = () => {
        console.log("registered")
    }

  return (
    <div className="container">
        <form className='form' onSubmit={onSubmit}>
            <h1>Login</h1>
            <label className="myLabel">Email</label>
            <Input
                type="email"
                placeholder="Email.."
                onChange={onChangeEmail}
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            />
            
            <label className="myLabel">
                Password
            </label>
           
            <input 
                id = "myInputer"
                label="Input Paassword"
                placeholder="Password"
                type="password"
                className="rainbow-p-around_medium"
            />
            
            <Button 
                label="log in" 
                variant="outline-brand" 
                className="rainbow-m-around_medium" 
                id="submit-button"
                placeholder="submit"
                onClick={onSubmit}
            />
            <textPath className = "myactionLabel"onClick={onClickregister}>Register</textPath>
        </form>
        
    </div>
  )
}

export default LoginPage