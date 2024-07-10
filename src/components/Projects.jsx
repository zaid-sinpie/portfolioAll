import React from "react";
import Project from "./ui/Project.jsx";
import projectData from "../projects.js";

const Projects = () => {
  return (
    <article className="w-[50%] flex flex-col gap-2 bg-highlightBg border border-activeColor px-2 py-1">
      <h2 className="text-xl font-bold text-actionColor">Projects</h2>
      {projectData.map((item, index) => (
        <Project
          key={index}
          name={item.name}
          gitLink={item.gitLink}
          link={item.link}
        />
      ))}
    </article>
  );
};

export default Projects;
