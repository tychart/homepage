import React from 'react';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg fixed w-full z-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <NavLink to='' className="text-2xl font-bold text-gray-800">
                        Tyler Chartrand
                    </NavLink>
                    <div className="hidden md:flex space-x-8">
                        <a href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                            Projects
                        </a>
                        <NavLink to="resume" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
                            Resume
                        </NavLink>
                        <a href="https://github.com/tychart" 
                           target="_blank" 
                           rel="noopener noreferrer"
                           className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300">
                            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                {/* GitHub SVG icon */}
                            </svg>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;