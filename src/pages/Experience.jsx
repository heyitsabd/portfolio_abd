import React from "react";

const experiences = [
  {
    title: "Software Developer Intern",
    type: "Internship",
    duration: "Jan 2024 - Jun 2024",
    location: "Remote",
    company: "Zarif Quest International Pvt. Ltd.",
    companyLink: "https://www.dariff.com/",
    description: "Initially focused on learning and development, then moved on to working on Dariff.com, the company’s website, as a frontend developer. Made the website fully responsive and added new pages to enhance its functionality and user experience."
  },
  {
    title: "Software Developer",
    type: "Full-time",
    duration: "Jul 2024 - Present",
    location: "Remote",
    company: "Zarif Quest International Pvt. Ltd.",
    companyLink: "https://www.dariff.com/",
    description: "Worked as a full-stack developer on a gaming app, utilizing ReactJS, Redux, and Firebase for a responsive UI and real-time backend. Also, developed APIs for DREMS, a school management app, using Spring to enhance backend functionality."
  }
];

function Experience() {
  return (
    <section className="py-20 px-6 w-full min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-6">Experience</h2>
      <div className="w-full max-w-5xl">
        {experiences.map((exp, index) => (
          <div key={index} className="p-6 bg-gray-800 rounded-xl shadow-lg w-full border border-gray-700 mb-6 hover:shadow-2xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">{exp.title}</h3>
            <h4 className="text-xl font-medium text-gray-300">
              <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {exp.company}
              </a>
            </h4>
            <p className="text-gray-400 text-sm">{exp.type} | {exp.duration} | {exp.location}</p>
            <p className="mt-3 text-gray-300">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
