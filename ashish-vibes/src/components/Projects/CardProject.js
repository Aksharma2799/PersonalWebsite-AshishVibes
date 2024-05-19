import React, { useState, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from 'react-toastify';

const CardProject = ({ course, likedCourses, setLikedCourses }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 25,
        speed: 400,
        scale: 1.05,
        startX :10,
        glare: true,
        "max-glare": 0.5,
      });
    }

    return () => {
      if (cardRef.current && cardRef.current.vanillaTilt) {
        cardRef.current.vanillaTilt.destroy();
      }
    };
  }, []);

  const clickHandler = () => {
    if (likedCourses.includes(course.id)) {
      setLikedCourses(prev => prev.filter(cid => cid !== course.id));
      toast.warning("Like removed");
    } else {
      setLikedCourses(prev => [...prev, course.id]);
      toast.success("Liked Successfully");
    }
  };

  return (
    <div ref={cardRef} className='CardsProject w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className='relative'>
        <img src={course.image.url} alt={course.image.alt} className='w-full h-auto' />
        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? 
              (<FcLike fontSize="1.75rem" />) : 
              (<FcLikePlaceholder fontSize="1.75rem" />)}
          </button>
        </div>
      </div>
      <div className='p-4'>
        <p className="text-white font-semibold text-lg leading-6">{course.title}</p>
        <p className='mt-2 text-white'>
          {course.description.length > 100 ? 
            (course.description.substr(0, 100)) + "..." : 
            (course.description)}
        </p>
      </div>
    </div>
  );
};

export default CardProject;
