import logo from './logo.svg';
import './App.css';
import "./indexPage/Firstpage";
import Firstpage from './indexPage/Firstpage';
import Assign from './page/assign';
import test from './page/test';
import History from './page/history';


function App() {
  return (
    <div className="App">
      {/* <Firstpage></Firstpage> */}
      <Assign></Assign>
      {/* <History></History> */}
    </div>
  );
}

export default App;
