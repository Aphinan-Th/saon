import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout";
import Navbar from "./page/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        
        <Navbar><Layout /></Navbar>
      </Router>
    </div>
  );
}

export default App;
