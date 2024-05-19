import React, { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

const Filter = (props) => {
  const { filterData, category, setCategory } = props;
  const [showFilters, setShowFilters] = useState(false);

  function filterHandler(title) {
    setCategory(title);
    setShowFilters(false); // Close the filter menu after selection
  }

  function toggleFilters() {
    setShowFilters(!showFilters);
  }

  return (
    <div className="w-11/12 mx-auto py-4 flex justify-center relative">
      {/* Filter icon for small screens */}
      <div className="fixed right-7 top 1/4 transform -translate-y-1/2 md:hidden">
        <button onClick={toggleFilters} className="text-white text-xl relative group">
          <FaFilter />
        </button>
      </div>

      {/* Filter buttons */}
      <div className={`flex-wrap space-x-4 gap-y-4 ${showFilters ? 'flex' : 'hidden'} md:flex`}>
        {
          filterData.map((data) => (
            <button
              className={`nav-hover text-white font-semibold px-3 py-1 rounded-md text-sm font-medium
              ${category === data.title ? 
              "bg-red-600" : // Active button class
              "bg-opacity-40 border-transparent"}
              `}
              key={data.id}
              onClick={() => filterHandler(data.title)}
            >
              {data.title}
            </button>
          ))
        }
      </div>
    </div>
  );
}

export default Filter;
