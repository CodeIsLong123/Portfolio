import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidenav from './components/Sidenav';
import FrontPage from './components/FrontPage';
import Contact from './components/Contact';
import Calendar  from './components/Calendar';
import './styles/App.css';
import './styles/Frontpage.css';


// Assuming you'll create these components later
import About from './components/About';


function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidenav />
      
        <div className="main-content">
          
          <Routes>
            <Route path="/" element={<FrontPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/calendar" element={<Calendar />}/>
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;