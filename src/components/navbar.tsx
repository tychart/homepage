import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

interface props {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

const Navbar = ({ darkMode, setDarkMode }: props) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log(`Toggleing Dark Mode, New Val: ${darkMode}`);
  };

  return (
    <nav className="fixed z-10 w-full bg-gray-50 shadow-lg dark:bg-gray-800">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-4">
          <NavLink
            to=""
            className="rounded-xl p-2 text-2xl font-bold text-gray-800 transition-colors duration-300 hover:bg-gray-200 hover:text-blue-600 dark:text-gray-100 dark:hover:bg-gray-600 dark:hover:text-blue-200"
          >
            Tyler Chartrand
          </NavLink>
          <div className="hidden space-x-8 md:flex">
            <NavLink
              to={{ pathname: "/", hash: "#projects" }}
              className="rounded-xl p-2 text-gray-600 transition-colors duration-300 hover:bg-gray-200 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-blue-200"
            >
              Projects
            </NavLink>
            <NavLink
              to="resume"
              className="rounded-xl p-2 text-gray-600 transition-colors duration-300 hover:bg-gray-200 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-blue-200"
            >
              Resume
            </NavLink>
            <a
              href="https://github.com/tychart"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl p-2 text-gray-600 transition-colors duration-300 hover:bg-gray-200 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-blue-200"
            >
              <i className="bx bx-git-repo-forked"></i>
              {" GitHub"}
            </a>
            <a>
              <button
                onClick={toggleDarkMode}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-500 text-neutral-600 shadow-lg transition-colors hover:bg-amber-600 lg:top-4 lg:right-4 lg:h-10 lg:w-10"
              >
                <i
                  className={`bx bx-${darkMode ? "sun" : "moon"} text-lg lg:text-xl`}
                ></i>
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
