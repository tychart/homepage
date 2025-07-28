import React from 'react';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';

import Navbar from './components/navbar';

import Home from './pages/home/home';
import Resume from './pages/resume/resume';
import Projects from './pages/home/projects';


const App = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/resume' element={<Resume />} />
          </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  );
};


  const Footer = () => (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; 2025 Tyler Chartrand. All rights reserved.</p>
      </div>
    </footer>
  );

  
  export default App;