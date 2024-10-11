import React, { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Problems=()=>{
    const problemList = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
 const[isLeaving,setIsLeaving]=useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
    setIsLeaving(false);
  };

  const handleMouseLeave = () => {
    setIsLeaving(true);
  };
  useEffect(()=>{
    if(isLeaving){
  const timer=setTimeout(() => {
      setIsDropdownOpen(false);
  }, 200);
  return()=> clearTimeout(timer)
    }
    },[isLeaving]);
    return(
        <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="cursor-pointer ml-20 text-2xl font-semibold transition duration-200 hover:text-blue-500">Problems With vehicle</span>

      {isDropdownOpen && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10 transition-transform transform duration-300 ease-in-out">
          <ul>
            {problemList.map((problem, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-200 transition duration-200 ease-in-out">
                <NavLink to={`/cars/${problem}`} className="block cursor-pointer">
                  {problem}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
    )
}
export default Problems;