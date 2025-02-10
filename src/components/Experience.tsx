"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <section id="experience" className="pt-20 w-full bg-white dark:bg-black">
      {/* Section Title */}
      <h2 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 text-center">
        Experience & Education
      </h2>
      <div className="w-20 h-1 bg-gray-900 dark:bg-gray-100 mx-auto mt-3 rounded-full"></div>

      {/* Timeline */}
      <div className="mt-10">
        <VerticalTimeline lineColor="#4b5563">
          {" "}
          {/* Tailwind Gray-600 */}
          {/* Experience 1 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jan 2023 - Jan 2025"
            contentStyle={{
              background: "#f3f4f6",
              color: "#1f2937",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #f3f4f6",
            }}
            dateClassName="text-gray-600 dark:text-gray-400"
            iconStyle={{
              background: "#000",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
            }}
            icon={<span className="icon-briefcase text-white"></span>}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-800">
              Associate Software Engineer
            </h3>
            <h4 className="text-md text-gray-600 dark:text-gray-700">
              Brainvire Infotech
            </h4>
            <p className="text-gray-700 dark:text-gray-600">
              User Experience, Visual Design
            </p>
          </VerticalTimelineElement>
          {/* Experience 2 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2022 - Dec 2022"
            contentStyle={{
              background: "#f3f4f6",
              color: "#1f2937",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #f3f4f6",
            }}
            dateClassName="text-gray-600 dark:text-gray-400"
            iconStyle={{
              background: "#000",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
            }}
            icon={<span className="icon-briefcase text-white"></span>}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-800">
              Apprentice
            </h3>
            <h4 className="text-md text-gray-600 dark:text-gray-700">
              NxtWave
            </h4>
            <p className="text-gray-700 dark:text-gray-600">
              Full Stack Developer
            </p>
          </VerticalTimelineElement>
          {/* Internship */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="April 2020"
            contentStyle={{
              background: "#1f2937",
              color: "#f3f4f6",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #1f2937",
            }}
            dateClassName="text-gray-400 dark:text-gray-300"
            iconStyle={{
              background: "#222",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
            }}
            icon={<span className="icon-study text-white"></span>}
          >
            <h3 className="text-xl font-semibold text-gray-100">
              NPHSAT Systems Pvt Ltd
            </h3>
            <h4 className="text-md text-gray-300">Internship Trainee</h4>
            <p className="text-gray-400">Small Satellite Design</p>
          </VerticalTimelineElement>
          {/* Education */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="2017 - 2021"
            contentStyle={{
              background: "#1f2937",
              color: "#f3f4f6",
            }}
            contentArrowStyle={{
              borderRight: "7px solid #1f2937",
            }}
            dateClassName="text-gray-400 dark:text-gray-300"
            iconStyle={{
              background: "#222",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "24px",
            }}
            icon={<span className="icon-study text-white"></span>}
          >
            <h3 className="text-xl font-semibold text-gray-100">
              Andhra Loyola Institute Of Engineering and Technology
            </h3>
            <h4 className="text-md text-gray-300">B-Tech</h4>
            <p className="text-gray-400">
              Electronics and Communication Engineering
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experience;
