import React from 'react';

const SkillSection = () => {
  const skills = [
    { name: 'React', percentage: 80 },
    { name: 'Node', percentage: 80 },
    { name: 'JavaScript', percentage: 80 },
    { name: 'MongoDB', percentage: 80 },
    { name: 'SQL', percentage: 80 },
    { name: 'AWS', percentage: 80 },
    { name: 'Angular', percentage: 80 },
    { name: 'DSA', percentage: 50 },
  ];

  return (
    <div className="p-4 text-white">
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <p className="font-semibold">{skill.name}</p>
          <div className="relative h-2 bg-gray-200 rounded-full">
            <div
              className="absolute left-0 top-0 bg-blue-500 h-full rounded-full"
              style={{ width: `${skill.percentage}%` }}
            ></div>
            <div className="absolute right-0 top-0 text-xs text-gray-700">
              {`${skill.percentage}%`}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillSection;
