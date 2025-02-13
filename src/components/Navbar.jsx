import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full top-0 shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-xl font-bold">Abdullah Ahmad</Link>
        <div className="flex space-x-4">
        <Link to="/experience" className="hover:text-blue-400">Experience</Link>
          <Link to="/projects" className="hover:text-blue-400">Projects</Link>
          <Link to="/skills" className="hover:text-blue-400">Skills</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
          
        </div>
      </div>
    </nav>
  );
}

export default Navbar;