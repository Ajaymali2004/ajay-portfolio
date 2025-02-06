import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/profile.jpg"; // Ensure this image exists in your project
import { bgColor, borderColor, textColor } from "./color";

export default function Home({ theme, accentColor }) {
  const navigate = useNavigate();
  const roles = ["Web Developer...", "Problem Solver..."];
  const [currentRole, setCurrentRole] = useState("");
  const fonts = [
    "font-sans",
    "font-serif",
    "font-mono",
    "font-extrabold",
    "italic",
    "font-bold",
    "font-thin",
    "font-medium",
    "font-merriweather", 
    "font-roboto",
    "font-poppins",
    "font-montserrat",
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [fontIndex, setFontIndex] = useState(0);

  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentRole((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setCurrentRole("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1000);
    }
  }, [charIndex, roleIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`flex flex-col md:flex-row items-center px-4 pt-2 justify-center mt-3 `}
    >
      <div className="text-center md:text-left md:w-1/2 py-10">
        <h1
          className={`text-4xl font-bold ${
            theme ? "text-black" : "text-white"
          }`}
        >
          Hello, my name is{" "}
          <span className={`${textColor[accentColor]}  ${fonts[fontIndex]}`}>
            Ajay Mali
          </span>
        </h1>
        <h2
          className={`text-3xl font-mono mt-4 h-12 ${textColor[accentColor]} `}
        >
          I'm a {currentRole}
        </h2>
        <p
          className={`mt-8 text-lg ${
            theme ? "text-black" : "text-white"
          } max-w-lg`}
        >
          I'm a 3rd-year Computer Science student at IIIT Surat, passionate
          about web development, problem-solving, and building scalable
          applications.
        </p>
        <button
          className={`mt-6 px-6 py-3 ${bgColor[accentColor]} text-white font-semibold rounded-full hover:cursor-pointer hover:scale-110 transition`}
          onClick={() => navigate("/about")}
        >
          More About Me
        </button>
      </div>
      <div className="mt-4 md:mt-0 md:w-1/2 flex justify-center">
        <div className="relative p-15">
          <div
            className={`absolute top-0 left-0 w-[20%] h-[20%] border-t-6 border-l-6 ${borderColor[accentColor]}`}
          ></div>
          <div
            className={`absolute bottom-0 right-0 w-[20%] h-[20%] border-b-6 border-r-6 ${borderColor[accentColor]}`}
          ></div>
          <img
            src={profilePic}
            alt="Ajay Mali"
            className="w-[400px] h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
