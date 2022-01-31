import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import {Routes,Route} from "react-router-dom";
import Nav from "./composant/Nav";

function App() {
  return (

    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/404' element={<Notfound/>} />
      </Routes>
      
    </div>
  );
}

export default App;
