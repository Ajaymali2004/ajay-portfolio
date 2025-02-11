import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { borderColor, textColor } from "./color";

export default function Navbar({ accentColor, theme, toggleSidebar }) {
  const location = useLocation();
  const navigate = useNavigate();
  const navItems = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
  ];

  return (
    <>
      <div
        className="logo text-3xl font-bold mb-8 mt-8 font-serif text-center relative p-2 cursor-pointer"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/ajay-portfolio/";
          toggleSidebar();
        }}
      >
        <div
          className={`absolute top-0 right-0 w-[30%] h-[40%] border-t-2 border-r-2 ${borderColor[accentColor]}`}
        ></div>
        <div
          className={`absolute bottom-0 left-0 w-[30%] h-[40%] border-b-2 border-l-2 ${borderColor[accentColor]}`}
        ></div>
        <span className={textColor[accentColor]}>A</span>jay Mali
      </div>

      <div className="nav-container flex-grow flex items-center">
        <nav>
          <ul className="nav list-none p-0 m-0">
            {navItems.map((item) => (
              <li key={item.path}>
                <button
                  className={`text-xl flex items-center p-3 space-x-3 transition-all duration-300 ease-in-out w-full text-left hover:text-2xl cursor-pointer
                    ${
                      location.pathname === item.path
                        ? textColor[accentColor]
                        : theme
                        ? "text-black"
                        : "text-white"
                    }`}
                  onClick={() => {
                    navigate(item.path);
                    setTimeout(() => {
                      toggleSidebar();
                    }, 300);
                  }}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </button>
              </li>
            ))}
            {/* Email */}
            <li>
              <a
                href="mailto:ajays95372@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xl flex items-center p-3 space-x-3 transition-all duration-300 ease-in-out w-full text-left
                  ${theme ? "text-black" : "text-white"}`}
              >
                <FaEnvelope />
                <span className="ml-2">Mail</span>
              </a>
            </li>
            {/* Instagram */}
            <li>
              <a
                href="https://www.instagram.com/ajayyy.solanki/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xl flex items-center p-3 space-x-3 transition-all duration-300 ease-in-out w-full text-left
                  ${theme ? "text-black" : "text-white"}`}
              >
                <FaInstagram />
                <span className="ml-2">Instagram</span>
              </a>
            </li>
            {/* LinkedIn */}
            <li>
              <a
                href="https://www.linkedin.com/in/ajay-mali22/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-xl flex items-center p-3 space-x-3 transition-all duration-300 ease-in-out w-full text-left
                  ${theme ? "text-black" : "text-white"}`}
              >
                <FaLinkedin />
                <span className="ml-2">LinkedIn</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
