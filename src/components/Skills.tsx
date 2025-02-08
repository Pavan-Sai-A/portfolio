import React from "react";
import "../styles/components/skills.scss";
import Slider from "./common/Slider";

const Skills = () => {
  const iconGroups = [
    { icon: "react", label: "React" },
    { icon: "sass", label: "sass" },
    { icon: "bootstrap", label: "Boot Strap" },
    { icon: "css3", label: "Css3" },
    { icon: "typescript", label: "Type Script" },
  ];
  const iconGroup2 = [
    { icon: "redux", label: "Redux" },
    { icon: "next-dot-js", label: "Next Js" },
    { icon: "webpack", label: "Webpack" },
    { icon: "graphql", label: "Graphql" },
    { icon: "html5", label: "Html5" },
  ];
  const iconGroup3 = [
    { icon: "npm", label: "npm" },
    { icon: "javascript", label: "Javascript" },
    { icon: "sonarlint", label: "Sonarlint" },
    { icon: "tailwindcss", label: "Tailwind" },
    { icon: "github", label: "Git Hub" },
  ];

  return (
    <section
      id="skills"
      className="py-20  text-black  dark:text-white transition-all duration-300"
    >
      <div className="text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold mb-6">Skills & Technologies</h2>

        {/* Skills Sliders */}
        <div className="mt-10 space-y-8">
          <Slider icons={iconGroups} />
          <Slider icons={iconGroup2} reverse={true} />
          <Slider icons={iconGroup3} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
