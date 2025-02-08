import React from "react";
import "@/styles/common/slider.scss";

interface SliderProps {
  icons: { icon: string; label: string }[];
  reverse?: boolean; // Change type to boolean
}

const Slider: React.FC<SliderProps> = ({ icons, reverse = false }) => {
  return (
    <div className="slider relative w-[95vw] m-auto overflow-hidden bg-white dark:bg-black box-border">
      {/* Gradient overlays for smooth edge fading */}
      <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-white dark:from-black to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-white dark:from-black to-transparent z-10"></div>

      <div
        className={`${reverse ? "slides-track-reverse" : "slides-track"} flex 
        `}
      >
        {icons.concat(icons).map((icon, index) => (
          <div
            className="slide flex items-center justify-center shrink-0 px-4 py-2 transition-transform transform hover:scale-105"
            key={`${index + 1}`}
          >
            <span
              className={`mr-3 text-4xl bg-contain bg-no-repeat bg-center icon-${icon.icon}`}
            ></span>
            <p className="text-black dark:text-white text-lg font-semibold capitalize">
              {icon.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
