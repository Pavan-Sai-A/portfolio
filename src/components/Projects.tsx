import React from "react";

const Project = () => {
  return (
    <section
      className="py-20 px-6 text-center  text-black  dark:text-white transition-all duration-300"
      id="project"
    >
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <p className="text-lg mx-auto mb-12 max-w-2xl">
        Here are some of the projects I’ve worked on, showcasing my skills in
        creating scalable, responsive, and high-performance web applications.
      </p>

      <div className="flex flex-col gap-8 items-center">
        {/* Project Card */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full max-w-2xl  cursor-pointer bg-black text-white dark:bg-white dark:text-black shadow-lg rounded-xl p-6 hover:shadow-2xl transform transition-all duration-500 hover:scale-105"
          >
            <h3 className="text-2xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <ul className="mt-4 text-left space-y-2">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  ✅ {feature}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-semibold">
              Technologies: {project.technologies}
            </p>
            <button className="mt-6 w-full px-6 py-3 bg-white text-black dark:bg-black dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all">
              View More
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Mpower WWA Revamp",
    description:
      "Revamped the dashboard with interactive features and Power BI integration, enabling real-time analytics for meetings and site visits.",
    features: [
      "Enhanced usability with interactive dashboards and offline-first functionality using RxDB.",
      "Improved global state management with Zustand.",
      "Redesigned Profile and Dealer Visit modules for responsiveness and better UX.",
    ],
    technologies:
      "React.js, TypeScript, SCSS, RxDB, Tanstack Query, Zustand, Fullcalendar",
  },
  {
    title: "Pidilite Industries",
    description:
      "Developed scalable web applications to streamline internal and external processes, increasing productivity by 15%.",
    features: [
      "Integrated geolocation modules for real-time tracking of sales executives and task validation.",
      "Digitized loyalty programs, reducing manual errors and accelerating reward claim processing by 35%.",
      "Improved CRM operations with streamlined lead management and Salesforce-integrated quotation generation.",
    ],
    technologies: "React.js, Material UI",
  },
  {
    title: "Sing in Chinese",
    description:
      "Developed a dynamic admin panel to manage user progress, content, and teacher-specific functionalities.",
    features: [
      "Designed responsive web interfaces using React.js and Tailwind CSS for engaging user experiences.",
      "Built a CMS to manage lessons, topics, and multimedia resources, streamlining content updates.",
      "Integrated Google Analytics to track user behavior and optimize app performance.",
    ],
    technologies: "React.js, REST APIs, Tailwind CSS",
  },
];

export default Project;
