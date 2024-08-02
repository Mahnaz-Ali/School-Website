// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './HomePage';
import AboutUs from './AboutUs';
import Academics from './Academics';
import Admissions from './Admissions';
import Faculty from './Faculty';
import Students from './Students';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <nav className="bg-blue-600 text-white py-4 shadow-md">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <div className="text-2xl font-bold">
              <Link to="/">Springdale Public School</Link>
            </div>
            <div className="md:hidden">
              <button
                className="text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
              <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link to="/about-us" className="hover:text-gray-300">About Us</Link></li>
              <li><Link to="/academics" className="hover:text-gray-300">Academics</Link></li>
              <li><Link to="/admissions" className="hover:text-gray-300">Admissions</Link></li>
              <li><Link to="/faculty" className="hover:text-gray-300">Faculty</Link></li>
              <li><Link to="/students" className="hover:text-gray-300">Students</Link></li>
              <li><Link to="/gallery" className="hover:text-gray-300">Gallery</Link></li>
              <li><Link to="/contact-us" className="hover:text-gray-300">Contact Us</Link></li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/students" element={<Students />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Springdale Public School. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
