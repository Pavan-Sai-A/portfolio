"use client";
import React, { useEffect, useState } from "react";

const sections = [
  "home",
  "about",
  "project",
  "skills",
  "experience",
  "contact",
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let mostVisibleSection = activeSection;
        let maxVisibility = 0;

        for (const entry of entries) {
          const { target, isIntersecting, intersectionRatio } = entry;

          if (isIntersecting && intersectionRatio > maxVisibility) {
            maxVisibility = intersectionRatio;
            mostVisibleSection = target.id;
          }
        }

        if (mostVisibleSection !== activeSection) {
          setActiveSection(mostVisibleSection);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0.4, 0.6] } // Adjusted threshold for better accuracy
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";
      let maxVisibility = 0;

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const visibility =
            Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

          if (visibility > maxVisibility) {
            maxVisibility = visibility;
            currentSection = id;
          }
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [activeSection]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
  };

  return (
    <header className="fixed top-3 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-full bg-black dark:bg-white border border-gray-500 dark:border-gray-300 backdrop-blur-md shadow-md transition-all w-full max-w-[100%] sm:max-w-lg md:max-w-lg lg:max-w-xl flex flex-wrap justify-center items-center">
      <nav className="flex flex-wrap justify-center items-center space-x-2 sm:space-x-4">
        <ul className="flex flex-wrap justify-center items-center space-x-1 sm:space-x-2 text-xs sm:text-sm">
          {sections.map((section) => (
            <li key={section}>
              <button
                onClick={() => scrollToSection(section)}
                aria-current={activeSection === section ? "page" : undefined}
                className={`capitalize px-2 py-1 font-medium rounded-lg transition-all duration-300
                  ${
                    activeSection === section
                      ? "bg-white dark:bg-black text-black dark:text-white shadow"
                      : "text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black"
                  }`}
              >
                {section}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={toggleDarkMode}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
              className="capitalize px-2 py-1 font-medium rounded-lg transition-all duration-300
    text-gray-300 dark:text-gray-600 hover:text-white dark:hover:text-black"
            >
              {darkMode ? (
                <span className="icon-sun-o"></span>
              ) : (
                <span className="icon-moon-o"></span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
