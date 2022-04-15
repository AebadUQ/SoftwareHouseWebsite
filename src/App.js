import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Homepage from './pages/HomePage/Homepage';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
