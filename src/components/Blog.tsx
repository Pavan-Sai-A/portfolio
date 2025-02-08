"use client";
import React, { useEffect, useState } from "react";

const Blog = () => {
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBeforeDelete = 1500;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    const technologies = ["React.js", "Next.js", "TypeScript"];

    const currentWord = technologies[index];

    if (isDeleting) {
      if (text.length > 0) {
        setTimeout(() => {
          setText(text.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % technologies.length);
      }
    } else {
      if (text.length < currentWord.length) {
        setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, typingSpeed);
      } else {
        setTimeout(() => {
          setIsDeleting(true);
        }, delayBeforeDelete);
      }
    }
  }, [text, isDeleting, index]);
  return (
    <section
      className="flex flex-col items-center justify-center text-center py-20 px-6 sm:px-10 space-y-8  text-black dark:text-white transition-all duration-300"
      id="home"
    >
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
        Hi, I’m{" "}
        <span className="text-gray-800 dark:text-gray-200">Pavan Sai</span>
        {""}.
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-xl">
        A Web Developer specializing in{" "}
        <span className="font-semibold text-black dark:text-white">{text}</span>
        <span className="blink">|</span>
        <style jsx>{`
          .blink {
            display: inline-block;
            animation: blink-animation 0.8s steps(2, start) infinite;
          }
          @keyframes blink-animation {
            0% {
              opacity: 1;
            }
            50% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}</style>
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="px-6 py-3 text-lg font-medium bg-black text-white rounded-xl shadow-lg hover:bg-gray-800 transition-all dark:bg-white dark:text-black dark:hover:bg-gray-300"
        >
          Contact Me
        </button>
        <a
          href="https://drive.google.com/file/d/14ub8JANRWB-iP9VbBEkPDJVbCIV1esp1/view?usp=sharing"
          download="Pavan_Sai_Resume.pdf"
          className="px-6 py-3 text-lg font-medium border-2 border-black text-black rounded-xl hover:bg-black hover:text-white transition-all dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
        >
          Download CV
        </a>
      </div>
      <div className="flex gap-6 mt-4 text-2xl">
        <a
          href="https://linkedin.com/in/pavan-sai-ande"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <span className="icon-linkedin text-blue-600 dark:text-blue-400"></span>
        </a>
        <a
          href="https://github.com/Pavan-Sai-A"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <span className="icon-github text-black dark:text-white"></span>
        </a>
        <a
          href="mailto:pavan@example.com"
          className="transition-transform transform hover:scale-110"
        >
          <span className="icon-gmail text-red-600"></span>
        </a>
      </div>
      <div className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl border-t border-gray-300 dark:border-gray-700 pt-4">
        <p>
          <span className="font-semibold">2+ Years Experience</span> in Frontend
          Development
          <br />
          <span className="font-semibold">Expert in</span> React.js, TypeScript,
          and Tailwind CSS
          <br />
          Delivered High-Impact Projects for Top Brands
        </p>
      </div>
    </section>
  );
};

export default Blog;
