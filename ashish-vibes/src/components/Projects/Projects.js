import React, { useState, useEffect } from "react";
import { apiUrl, filterData } from "../../Data";
import { toast } from "react-toastify";
import NavbarProject from "./NavbarProject";
import Filter from "./Filter";
import Spinner from "./Spinner";
import CardsProject from "./CardsProject";

const Projects = () => {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");

  const fetchData = async () => {
    setLoading(true);
    try {
      setCourses(apiUrl.data);
    } catch (error) {
      toast.error("Network me koi dikkat hai");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-transparent">
    
      <NavbarProject />
      <div className="bg-transparent">
        <Filter filterData={filterData} category={category} setCategory={setCategory} />
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (
            <Spinner />
          ) : (
            <CardsProject courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
};



export default Projects;
