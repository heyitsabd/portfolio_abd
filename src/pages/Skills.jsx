import React from "react";

const skills = {
  frontend: ["React.js", "React Native", "JavaScript", "TypeScript", "HTML", "CSS", "Redux"],
  backend: ["Spring Boot"],
  cloud: ["Docker", "Firebase"],
  others: ["Git", "OOPs", "Client Management"]
};

function Skills() {
  return (
    <section className="py-20 px-6 w-full min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-6">Skills</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 w-full max-w-7xl">
        {Object.keys(skills).map((category, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-xl shadow-lg w-full border border-gray-700 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold capitalize text-green-400 mb-3">{category}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills[category].map((skill, i) => (
                <span key={i} className="bg-green-600 text-white text-sm px-3 py-1 rounded-full shadow-md hover:bg-green-500 transition-colors duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;