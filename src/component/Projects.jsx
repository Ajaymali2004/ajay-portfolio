import React from "react";
import photo1 from "/Rock_Bishop.png";
import photo2 from "/Prep-Tech.png";
const projects = [
  {
    title: "Rock Bishop",
    description: "A real-time chess platform with matchmaking & chess updates.",
    image: photo1,
    liveLink: "https://rock-bishop-ajay.netlify.app/",
    repoLink: "https://github.com/Ajaymali2004/Rock_bishop",
  },
  {
    title: "Prep-Tech",
    description: "An interview preparation platform with structured resources.",
    image: photo2, 
    liveLink: "https://prep-tech-frontend.vercel.app/",
    repoLink: "https://github.com/Ajaymali2004/Prep-Tech",
  },
];

const Projects = ({ theme, accentColor }) => {
  const cardBg = theme ? "bg-white shadow-md" : "bg-gray-800 shadow-lg";

  return (
    <div className={`pt-12 px-2 transition-all`}>
      <h1 className="text-5xl font-extrabold mb-8">
        My Projects
        <div
          className={`h-1 w-50 bg-gradient-to-r from-${accentColor} to-transparent mt-2`}
        ></div>
        <div
          className={`h-1 w-30 bg-gradient-to-r from-${accentColor} to-transparent mt-1`}
        ></div>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`relative group overflow-hidden rounded-2xl ${cardBg} transition-all shadow-lg`}
          >
            {/* Clickable Image */}
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                srcSet={`${project.mobileImage} 600w, ${project.image} 1024w`}
                sizes="(max-width: 600px) 600px, 1024px"
                src={project.image} // Default image
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-all duration-500 sm:rounded-2xl sm:rounded-b-none"
              />
            </a>

            {/* Hover Overlay (Bottom Half) - For larger screens */}
            <div
              className="absolute bottom-0 w-full h-1/2 bg-black/70 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 sm:block  text-center"
            >
              <h2 className="text-xl font-bold ">{project.title}</h2>
              <p className="text-center text-gray-300 px-4">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-3 flex gap-4 justify-center">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 border-2 border-${accentColor} text-${accentColor} rounded-lg hover:bg-${accentColor} hover:text-white transition-all`}
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 border-2 border-${accentColor} text-${accentColor} rounded-lg hover:bg-${accentColor} hover:text-white transition-all`}
                >
                  Live Demo
                </a>
              </div>
            </div>

            {/* Mobile Layout (Description and Buttons shown below the image) */}
            <div
              className={`sm:hidden block p-4 ${theme ? "bg-white" : "bg-black/70"} text-white rounded-b-2xl`}
            >
              <h2 className="text-xl font-bold text-center">{project.title}</h2>
              <p className="text-center text-gray-300 px-4">{project.description}</p>

              {/* Buttons */}
              <div className="mt-3 flex gap-4 justify-center">
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 border-2 border-${accentColor} text-${accentColor} rounded-lg hover:bg-${accentColor} hover:text-white transition-all`}
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 border-2 border-${accentColor} text-${accentColor} rounded-lg hover:bg-${accentColor} hover:text-white transition-all`}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
