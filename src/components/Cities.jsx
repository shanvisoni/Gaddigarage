// import React, { useState } from 'react';

// const Cities = () => {
//   // List of cars for the dropdown
//   const carList = ['Tesla', 'BMW', 'Mercedes', 'Audi', 'Ford'];

//   // State to handle dropdown visibility
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Function to handle mouse hover
//   const handleMouseEnter = () => {
//     setIsDropdownOpen(true);
//   };

//   // Function to handle mouse leave
//   const handleMouseLeave = () => {
//     setIsDropdownOpen(false);
//   };

//   return (
//     <div 
//       className="relative inline-block"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* Cars Text */}
//       <span className="cursor-pointer text-2xl font-semibold">Cities</span>

//       {/* Dropdown menu */}
//       {isDropdownOpen && (
//         <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
//           <ul>
//             {carList.map((car, index) => (
//               <li
//                 key={index}
//                 className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//                 onClick={() => alert(`You clicked on ${Cities}`)} // Handle click event for each car
//               >
//                 {car}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cities;


// import React, { useState } from 'react';

// const Cities = () => {
//   // List of cities for the dropdown
//   const cityList = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

//   // State to handle dropdown visibility
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Function to handle mouse hover
//   const handleMouseEnter = () => {
//     setIsDropdownOpen(true);
//   };

//   // Function to handle mouse leave
//   const handleMouseLeave = () => {
//     setIsDropdownOpen(false);
//   };

//   return (
//     <div 
//       className="relative inline-block"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       {/* Cities Text */}
//       <span className="cursor-pointer text-2xl font-semibold transition duration-200 hover:text-blue-500">Cities</span>

//       {/* Dropdown menu */}
//       {isDropdownOpen && (
//         <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10 transition-transform transform duration-300 ease-in-out">
//           <ul>
//             {cityList.map((city, index) => (
//               <li
//                 key={index}
//                 className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition duration-200 ease-in-out"
//                 onClick={() => alert(`You clicked on ${city}`)} // Handle click event for each city
//               >
//                 {city}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cities;




import React, { useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Cities = () => {
  const cityList = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLeaving, setIsLeaving]=useState(false);
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

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="cursor-pointer text-2xl font-semibold transition duration-200 hover:text-blue-500">Cities</span>

      {isDropdownOpen && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10 transition-transform transform duration-300 ease-in-out">
          <ul>
            {cityList.map((city, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-200 transition duration-200 ease-in-out">
                <NavLink to={`/cities/${city}`} className="block cursor-pointer">
                  {city}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cities;
