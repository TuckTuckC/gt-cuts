import './App.css';
import { Route, Routes } from 'react-router-dom';

// Components
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
};

export default App;
