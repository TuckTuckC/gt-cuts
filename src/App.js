import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Services from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="components">
          <Home />
          <Services />
          <About />
      </div>
    </div>
  );
};

export default App;
