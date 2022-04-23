import './App.css';
// import Register from './login/Register'
// import Register from './login/Register'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './page/navbar'
import Layout from './layout'
// import Firstpage from './indexPage/Firstpage';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar>
          <Layout />
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
