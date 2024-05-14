import React from "react";
import Filter from "../Projects/Filter";
import { apiUrl, filterData } from "../../Data";
import { useState, useEffect } from "react";
import Spinner from "../Projects/Spinner";
import { toast } from "react-toastify";
import ProjectsNavbar from "../Projects/ProjectsNav";
import Cards from "../Projects/Cards";

const Projects = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      ///output ->
      setCourses(output.data);
    } catch (error) {
      toast.error("Network me koi dikkat hai");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
      <div>
        <ProjectsNavbar />
      </div>
      <div className="bg-transparent">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <div
          className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]"
        >
          {loading ? (
            <Spinner />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
