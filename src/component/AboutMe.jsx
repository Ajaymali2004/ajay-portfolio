import React, { useState, useEffect } from "react";
import { borderColor, fromColor, textColor } from "./color";

const AboutMe = ({ theme, accentColor }) => {
  const [progress, setProgress] = useState(
    Array(8).fill(0) // Initial progress at 0%
  );

  const skills = [
    { name: "C - C++", level: 95 },
    { name: "Python", level: 80 },
    { name: "Back-End (Node.js)", level: 85 },
    { name: "Front-End (React)", level: 75 },
    { name: "MongoDB", level: 80 },
    { name: "MySQL", level: 70 },
    { name: "DBMS", level: 70 },
    { name: "Git & GitHub", level: 60 },
  ];

  useEffect(() => {
    setTimeout(() => {
      setProgress(skills.map((skill) => skill.level));
    }, 500); // Start animation after 500ms delay
  }, []);

  return (
    <div className={`pt-10 ${theme ? "text-black" : "text-gray-300"}`}>
      {/* Section Title */}
      <h1 className="text-4xl font-extrabold inline-block relative">
        About Me
        <div
          className={`h-1 w-24 bg-gradient-to-r ${fromColor[accentColor]} to-transparent mt-2`}
        ></div>
        <div
          className={`h-1 w-16 bg-gradient-to-r ${fromColor[accentColor]} to-transparent mt-1`}
        ></div>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
        {/* Left Section */}
        <div>
          <h2 className="text-3xl font-bold leading-tight">
            I'm Ajay Mali, a{" "}
            <span className={`${textColor[accentColor]} font-extrabold`}>
              Full-stack Developer
            </span>
          </h2>
          <p className={"mt-4 leading-relaxed "}>
            Passionate about designing and building scalable applications, I
            specialize in React.js, Node.js, MongoDB, and SQL databases. Always
            eager to learn and innovate, I aim to create seamless and efficient
            software solutions.
          </p>

          {/* Personal Info */}
          <div className="mt-6 space-y-2 text-lg">
            <p>
              <strong>Website:</strong>{" "}
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/";
                }}
                className={`${textColor[accentColor]} hover:underline cursor-pointer`}
              >
                My Portfolio
              </a>
            </p>
            <p>
              <strong>Degree:</strong> B.Tech in CSE
            </p>
            <p>
              <strong>Address:</strong> 4A/F, Adipur - 370205, Gandhidham - kuchchh
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:ajays95372@gmail.com"
                className={`${textColor[accentColor]} hover:underline`}
              >
                ajays95372@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong> +91 93288 96574
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <a
              href="https://drive.google.com/file/d/1oR6qrHTZhxGfMKZu4XVXsnoca6R6AbJh/view"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className={`px-6 py-3 rounded-lg border-2 ${
                  borderColor[accentColor]
                } ${
                  textColor[accentColor]
                } font-semibold hover:scale-110 hover:cursor-pointer ${
                  theme ? "hover:text-black" : "hover:text-gray-300"
                } transition-all`}
              >
                My Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right Section - Skills Progress Bars */}
        <div>
          {skills.map((skill, index) => (
            <div key={index} className="mb-5">
              <p className={"text-lg mb-1 flex justify-between"}>
                {skill.name}
              </p>
              <div className="bg-gray-700 h-3 w-full rounded-full overflow-hidden">
                <div
                  className={`bg-${accentColor} h-full rounded-full transition-all duration-[2000ms] ease-in-out`}
                  style={{ width: `${progress[index]}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
