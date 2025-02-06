import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaSun, FaMoon, FaPalette, FaBars, FaTimes } from "react-icons/fa";
import "./App.css";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import AboutMe from "./component/AboutMe";
import Projects from "./component/Projects";
import { bgColor, borderColor, textColor } from "./component/color";
import Contact from "./component/Contact";

function App() {
  const [theme, setTheme] = useState(false);
  const [isColorPlateVisible, setColorPlateVisible] = useState(false);
  useEffect(() => {
    if (isColorPlateVisible) {
      const timer = setTimeout(() => {
        setColorPlateVisible(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isColorPlateVisible]);

  const colors = ["green-400", "blue-600", "pink-500", "red-600", "orange-500"];
  const [accentColor, setAccentColor] = useState(colors[colors.length - 1]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  useEffect(() => {
    if (isSidebarOpen) {
      const timer = setTimeout(() => {
        setSidebarOpen(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isSidebarOpen]);
  const toggleTheme = () => setTheme((prevTheme) => !prevTheme);
  const changeColor = (color) => {
    setAccentColor(color);
    setColorPlateVisible(false);
  };
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  return (
    <Router>
      <div
        className={`App  ${
          theme
            ? "bg-gradient-to-r from-indigo-100 via-pink-200 to-yellow-200 text-black"
            : "bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white"
        }`}
      >
        <div
          className={`fixed z-500 top-0 left-0 h-full w-64 p-8 flex flex-col items-center border-r-4 ${
            borderColor[accentColor]
          } 
          transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 lg:block lg:bg-transparent
          ${
            theme
              ? "bg-gradient-to-r from-indigo-100 to-pink-200"
              : "bg-gradient-to-r from-gray-700 to-gray-900"
          }`}
        >
          <button
            className="absolute top-5 right-5 lg:hidden"
            onClick={toggleSidebar}
          >
            <FaTimes size={24} />
          </button>
          <Navbar theme={theme} accentColor={accentColor} />
        </div>
        <div
          className={`fixed top-0 left-0 right-0 flex items-center justify-between p-3 z-50 
  ${
    theme
      ? "bg-gradient-to-r from-indigo-100 via-pink-200 to-yellow-200 backdrop-blur-md"
      : "bg-gradient-to-r from-gray-700 via-gray-900 to-black backdrop-blur-sm"
  }`}
        >
          {/* Mobile Menu Button - Visible Only on Mobile */}
          <button
            className="lg:hidden p-2 rounded-full"
            onClick={toggleSidebar}
          >
            <FaBars size={24} />
          </button>

          {/* Icons Container - Positioned Right on All Screens */}
          <div className="flex gap-3 items-center ml-auto">
            {/* Theme Toggle Button */}
            <div
              className={`${textColor[accentColor]} cursor-pointer border-2 p-2 rounded-full`}
            >
              {theme ? (
                <FaSun className="text-xl" onClick={toggleTheme} />
              ) : (
                <FaMoon className="text-xl" onClick={toggleTheme} />
              )}
            </div>

            {/* Color Palette Button */}
            <div
              className={`${textColor[accentColor]} cursor-pointer border-2 p-2 rounded-full`}
              onClick={() => setColorPlateVisible(!isColorPlateVisible)}
            >
              <FaPalette className="text-xl" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`content lg:ml-64 min-h-screen p-6 sm:p-8 md:p-12`}>
          <Routes>
            <Route
              path="/"
              element={<Home theme={theme} accentColor={accentColor} />}
            />
            <Route
              path="/about"
              element={<AboutMe theme={theme} accentColor={accentColor} />}
            />
            <Route
              path="/projects"
              element={<Projects theme={theme} accentColor={accentColor} />}
            />
            <Route
              path="/contact"
              element={<Contact theme={theme} accentColor={accentColor} />}
            />
          </Routes>
        </div>

        {isColorPlateVisible && (
          <div
            className={`fixed top-16 right-5 ${
              borderColor[accentColor]
            } border-2 p-3 rounded-lg shadow-lg flex gap-2 ${
              theme
                ? "bg-gradient-to-r from-pink-200  to-yellow-200"
                : "bg-gray-900"
            }`}
          >
            {colors.map((color) => (
              <div
                key={color}
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer ${bgColor[color]}`}
                onClick={() => changeColor(color)}
              ></div>
            ))}
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
