import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Lawncare from './Components/Lawncare/Lawncare';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="components">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lawncare" element={<Lawncare />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
