import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-8  text-black  dark:text-white transition-all duration-300"
    >
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-extrabold">About Me</h2>
        <div className="w-16 h-1 bg-black dark:bg-white mx-auto rounded-full"></div>

        <p className="text-xl md:text-2xl leading-relaxed">
          I am a <span className="font-bold">Frontend Developer</span> with
          <span className="font-bold"> 2.1 years of experience</span>
          specializing in building responsive, high-performance web applications
          using
          <span className="font-semibold">
            {" "}
            React.js, Next.js, TypeScript, and Tailwind CSS.
          </span>
          Passionate about UI/UX design, I focus on creating seamless user
          experiences while optimizing web performance.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          With hands-on experience in
          <span className="font-semibold">
            {" "}
            state management (Redux, Zustand),
          </span>
          real-time data handling (<span className="font-semibold">RxDB</span>),
          and API optimization (
          <span className="font-semibold">Tanstack Query</span>), I have
          successfully contributed to projects that enhanced user engagement and
          streamlined business processes.
        </p>

        <p className="text-lg md:text-xl leading-relaxed">
          I thrive in <span className="font-semibold">Agile environments</span>,
          collaborating with cross-functional teams to develop scalable and
          maintainable solutions. Always eager to learn and adapt to the latest
          front-end technologies, I am committed to writing clean, efficient,
          and reusable code to build innovative digital experiences.
          <span className="text-3xl"> 🚀</span>
        </p>
      </div>
    </section>
  );
};

export default About;
