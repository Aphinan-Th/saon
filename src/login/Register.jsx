import React from 'react'
import "./register.css"
import { Input } from 'react-rainbow-components';
import { Button } from 'react-rainbow-components';
import '../index.js'
import { initializeApp } from "firebase/app";
import { initializeStore } from "firebase/store";


function LoginPage() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");


    const onChangeUsername = (e) => {
        setEmail(e.target.value);
    }
    const onChangeFirstName = (e) => {
        setEmail(e.target.value);
    }
    const onChangeLastname = (e) => {
        setEmail(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const onChangePhoneNumber = (e) => {
        setPassword(e.target.value);
    }
    const onChangeBankID = (e) => {
        setEmail(e.target.value);
    }
    const onSubmit = (e) => {
        console.log("submit");
        const onChangeUsername = (e) => {
        setEmail(e.target.value);
    }
    }
    React.useEffect(() => {
        console.log("submit");
    },[email,password]);
    <ul id="userList"> 

    </ul>

  return (
    <div className="container">
        <form className='form' onSubmit={onSubmit}>
            <h1 className='registerLabel'>Register</h1>
            <label className="myLabel">Username</label>
            <Input
                type="string"
                class = "mynewInput"
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
  // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAltDJLbh9AVDLmh20rHK9d3afvf5N4Vtk",
    authDomain: "saon-f2324.firebaseapp.com",
    projectId: "saon-f2324",
    storageBucket: "saon-f2324.appspot.com",
    messagingSenderId: "565977444645",
    appId: "1:565977444645:web:a5721183144833ce206acc"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
  
  const db = firebase.fierstore(); // เชื่อมต่อไปที่fierstore
  
  <script src="register.js"></script>
  db.collection('user').get().then(user => {
    console.log(user);
  })
  
  db.collection('user').get().then(user => {
      console.log(user);
  })
}

export default LoginPage