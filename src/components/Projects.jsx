import React from "react";
import Project from "./ui/Project.jsx";
import projectData from "../projects.js";

const Projects = () => {
  return (
    <article className="w-[50%] flex flex-col gap-2">
      {projectData.map((item,index)=>
        (
          <Project key={index} name={item.name} gitLink={item.gitLink} link={item.link} />
        ))}
    </article>
  );
};

export default Projects;
