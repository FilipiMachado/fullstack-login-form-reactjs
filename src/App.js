import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css';

import Home from './pages/Home/Home'
import Register from './pages/Register/Register'
import Login from './pages/Login/Login'

function App() {
  return (
    // Routes
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
