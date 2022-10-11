import './App.css';
import { Route, Routes } from 'react-router-dom';

// Components
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="components">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      </div>
    </div>
  );
};

export default App;
