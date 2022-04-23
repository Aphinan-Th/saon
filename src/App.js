import './App.css';
// import Register from './login/Register'
// import Register from './login/Register'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './page/navbar'
import Layout from './layout'
import React from "react";
import * as firebase from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getStorage, connectStorageEmulator } from "firebase/storage";
import axios from "axios";
// import { BrowserRouter as Routers } from "react-router-dom";
// import Provider from "./providers";
// import "react-toastify/dist/ReactToastify.css";
import { Chart as ChartJS, registerables } from "chart.js";
// import { errorNotification } from "./functions/notification";
// import { getErrorMessage } from "./functions/errorHandle";
// import Firstpage from './indexPage/Firstpage';



////////// AXIOS CONFIG //////////
if (window.location.hostname === "localhost")
    axios.defaults.baseURL = "http://localhost:5001/saon-f8bae/asia-southeast1/apiV1";
else axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    // async (error) => {
    //     const errSwal = async (title) =>
    //         await errorNotification(title, getErrorMessage(error));

    //     // Ignore the error
    //     if (error?.response?.data?.code === "auth/lineUid-not-found") return;

    //     switch (error.response.status) {
    //         case 403:
    //             await errSwal("มีปัญหาเกี่ยวกับบัญชีผู้ใช้");
    //             break;
    //         case 400:
    //             await errSwal("การร้องขอผิดพลาด");
    //             break;
    //         case 500:
    //             await errSwal("เกิดปัญหาเกี่ยวกับเซิร์ฟเวอร์");
    //             break;
    //         default:
    //             await errSwal("เกิดข้อผิดพลาดเกี่ยวกับการเชื่อมต่อ");
    //             break;
    //     }

    //     return Promise.reject(error);
    // }
);
////////// //////////// //////////

////////// FIREBASE CONFIG //////////
const firebaseConfig = {
    apiKey: "AIzaSyAltDJLbh9AVDLmh20rHK9d3afvf5N4Vtk",
    authDomain: "saon-f2324.firebaseapp.com",
    projectId: "saon-f2324",
    storageBucket: "saon-f2324.appspot.com",
    messagingSenderId: "565977444645",
    appId: "1:565977444645:web:a5721183144833ce206acc"
  };
  

if (!firebase.getApps().length) firebase.initializeApp(firebaseConfig);
else firebase.getApps(); // if already initialized, use that one

if (window.location.hostname === "localhost") {
    const authInstance = getAuth();
    connectAuthEmulator(authInstance, "http://localhost:9099");
    const storageInstance = getStorage();
    connectStorageEmulator(storageInstance, "localhost", 9199);
}
////// //////////////// //////////

// ChartJS.register(...registerables);

function App() {
  
    return (
      <div className="App">
        <Router>
          <Navbar>
              <p>sdfsdfsdf</p>
            <Layout />
          </Navbar>
        </Router>
      </div>
    );
  }
  
  export default App;