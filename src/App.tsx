import React, { useEffect, useState } from "react";

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";

import Home from "./pages/home/home";
import Resume from "./pages/resume/resume";
import Projects from "./pages/home/projects";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="relative isolate min-h-screen bg-neutral-100 transition-colors duration-300 dark:bg-gray-900">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-30 dark:hidden"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
        <div
          className="absolute inset-0 dark:hidden"
          style={{
            backgroundImage:
              "radial-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            backgroundPosition: "10px 10px",
          }}
        ></div>
      </div>
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

const Footer = () => (
  <footer className="bg-gray-800 py-8 text-white">
    <div className="mx-auto max-w-6xl px-4 text-center">
      <p>&copy; 2025 Tyler Chartrand. All rights reserved.</p>
    </div>
  </footer>
);

export default App;
