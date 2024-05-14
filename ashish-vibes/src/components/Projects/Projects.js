import React, { useState, useEffect } from "react";
import ProjectsData from "../../Data";
import "../Projects/Project.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(ProjectsData);
  }, []);

  return (
    <>
      <div className="flex justify-center p-11">
        <div className="text-white text-4xl font-semibold">Projects</div>
        <div className="underLine flex flex-col mt-11"></div>
      </div>
      {/* Project Data */}
      <div>
        
      </div>
    </>
  );
};

export default Projects;
