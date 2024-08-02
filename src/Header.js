import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">School Name</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about-us" className="hover:underline">About Us</Link></li>
            <li><Link to="/academics" className="hover:underline">Academics</Link></li>
            <li><Link to="/admissions" className="hover:underline">Admissions</Link></li>
            <li><Link to="/faculty" className="hover:underline">Faculty</Link></li>
            <li><Link to="/students" className="hover:underline">Students</Link></li>
            <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
            <li><Link to="/contact-us" className="hover:underline">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
