import React from "react";

const projects = [
  { title: "GlobalEdge Professional Services", description: "A responsive web app for consultancy, recruitment, and digital marketing.", skills: ["React.js", "Tailwind CSS", "Firebase"], link: "https://globaledge-a6340.web.app/" },
  { title: "Gaming Web App", description: "Implemented number evaluation logic for a lottery system.", skills: ["React.js", "TypeScript", "Firebase"], link: "https://www.kbombaysattamatka.com/" },
  { title: "DREMS", description: "Backend development for an academic management system.", skills: ["Spring Boot"], link: "Under testing" },
  { title: "Dariff Web App", description: "Handling frontend and backend challenges for company web app.", skills: ["React.js", "TypeScript", "Firebase"], link: "https://www.dariff.com/" }
];

function Projects() {
  return (
    <section className="py-20 px-6 w-full min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg w-full">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-gray-400 mt-2">{project.description}</p>
            <div className="mt-3 flex flex-wrap">
              {project.skills.map((skill, i) => (
                <span key={i} className="bg-blue-500 text-sm px-2 py-1 rounded mr-2 mb-2">{skill}</span>
              ))}
            </div>
            {project.link !== "Under testing" ? (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 mt-3 inline-block hover:underline">View Project</a>
            ) : (
              <span className="text-gray-500 mt-3 inline-block">Under Testing</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
