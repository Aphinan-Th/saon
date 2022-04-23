import React from 'react'
import "./register.css"
import { Input } from 'react-rainbow-components';
import { Button } from 'react-rainbow-components';

function LoginPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


    const onChangeUsername = (e) => {
        setEmail(e.target.value);
        console.log(e.target.value)
    }
    const onChangeFirstName = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value);
    }
    const onChangeLastname = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value);
    }
    const onChangeEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value);
    }
    const onChangePhoneNumber = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value);
    }
    const onChangeBankID = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value);
    }
    const onSubmit = (e) => {
        console.log(document.getElementById("input-component-1"));
        const onChangeUsername = (e) => {
        setEmail(e.target.value);
    }
    }
    // React.useEffect(() => {
    //     console.log("changed");
    // },[email,password]);

  return (
    <div className="container">
        <form className='form' onSubmit={onSubmit}>
            <h1 className='registerLabel'>Register</h1>
            <label className="myLabel">Username</label>
            <Input
                type="string"
                id="input-component-1"
                placeholder="Username.."
                onChange={onChangeUsername}
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            />
            <label className="myLabel">Firstname</label>
            <Input
                type="string"
                id="input-component-1"
                placeholder="Firstname."
                onChange={onChangeFirstName}
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            />
            <label className="myLabel">Lastname</label>
            <Input
                type="string"
                id="input-component-1"
                placeholder="Lastname"
                onChange={onChangeLastname}
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            />
            <label className="myLabel">Email</label>
            <Input
                type="email"
                id="input-component-1"
                placeholder="Email.."
                onChange={onChangeEmail}
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            />
            
            <label className="myLabel">
                Password : 
            </label>
            <Input
                type="password"
                id="input-component-1"
                placeholder="Password"
                onChange={onChangePassword}
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            />
            <label className="myLabel">Phone Number</label>
            <Input
                type="string"
                id="input-component-1"
                placeholder="Phone number"
                onChange={onChangePhoneNumber}
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            />

            <label className="myLabel">Bank</label>
            <Input
                type="string"
                id="input-component-1"
                placeholder="Bank ID"
                onChange={onChangeBankID}
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
            />
            <Button 
                label="Submit" 
                variant="outline-brand" 
                className="rainbow-m-around_medium" 
                id="submit-button"
                placeholder="submit"
                onClick={onSubmit}
            />

        </form>
        
    </div>
  )
}

export default LoginPage