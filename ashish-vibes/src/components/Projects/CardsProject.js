import React, { useState } from 'react';
import CardProject from './CardProject';

const CardsProject = ({ courses, category }) => {
  const [likedCourses, setLikedCourses] = useState([]);

  const getCourses = () => {
    if (!courses) return [];
    if (category === "All") return Object.values(courses).flat();
    return courses[category] || [];
  };

  const coursesToDisplay = getCourses();

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {coursesToDisplay.length > 0 ? (
        coursesToDisplay.map(course => (
          <CardProject
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          />
        ))
      ) : (
        <p>No courses available</p>
      )}
    </div>
  );
};

export default CardsProject;
