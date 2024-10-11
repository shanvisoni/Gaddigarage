

// // import React, { useState, useEffect } from 'react';
// // import { NavLink } from 'react-router-dom';

// // const Cars = () => {
// //   const carList = ['Tesla', 'BMW', 'Mercedes', 'Audi', 'Ford'];
// //   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
// //   const [isLeaving, setIsLeaving] = useState(false);

// //    const handleMouseEnter = () => {
// //     setIsDropdownOpen(true);
// //     setIsLeaving(false); // Reset the leaving state
// //   };

// //   // Function to handle mouse leave
// //   const handleMouseLeave = () => {
// //     setIsLeaving(true);
// //   };


// //   useEffect(() => {
// //     if (isLeaving) {
// //       const timer = setTimeout(() => {
// //         setIsDropdownOpen(false);
// //       }, 200); // Adjust the delay time as needed (300ms here)
// //       return () => clearTimeout(timer); // Cleanup on unmount or when isLeaving changes
// //     }
// //   }, [isLeaving]);

// //   return (
// //     <div 
// //       className="relative inline-block"
// //       onMouseEnter={handleMouseEnter}
// //       onMouseLeave={handleMouseLeave}
// //     >
// //       <span className="cursor-pointer ml-20 text-2xl font-semibold transition duration-200 hover:text-blue-500">Cars</span>

// //       {isDropdownOpen && (
// //         <div className="absolute mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10 transition-transform transform duration-300 ease-in-out">
// //           <ul>
// //             {carList.map((car, index) => (
// //               <li key={index} className="px-4 py-2 hover:bg-gray-200 transition duration-200 ease-in-out">
// //                 <NavLink to={`/cars/${car}`} className="block cursor-pointer">
// //                   {car}
// //                 </NavLink>
// //               </li>
// //             ))}
// //           </ul>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default Cars;









// import React, { useState, useEffect } from 'react';
// import { NavLink } from 'react-router-dom';

// const Cars = () => {
//   const carList = [
//     { name: 'Tesla', logoUrl: '/assist/images/BMW.jpg' },
//     { name: 'BMW', logoUrl: '/assist/images/BMW.jpg' },
//     { name: 'Mercedes', logoUrl: '/assist/images/carss.png' },
//     { name: 'Audi', logoUrl: '/assist/images/carss.png' },
//     { name: 'Ford', logoUrl: '/assist/images/carss.png' },
//     { name: 'Tesla', logoUrl: '/assist/images/BMW.jpg' },
//     { name: 'BMW', logoUrl: '/assist/images/BMW.jpg' },
//     { name: 'Mercedes', logoUrl: '/assist/images/carss.png' },
//     { name: 'Audi', logoUrl: '/assist/images/carss.png' },
//     { name: 'Ford', logoUrl: '/assist/images/carss.png' },
//     { name: 'Tesla', logoUrl: '/assist/images/BMW.jpg' },
//     { name: 'BMW', logoUrl: '/assist/images/BMW.jpg' },
//     { name: 'Mercedes', logoUrl: '/assist/images/carss.png' },
//     { name: 'Audi', logoUrl: '/assist/images/carss.png' },
//     { name: 'Ford', logoUrl: '/assist/images/carss.png' },
//     { name: 'Tesla', logoUrl: '/assist/images/BMW.jpg' },
//     { name: 'BMW', logoUrl: '/assist/images/BMW.jpg' },
//     { name: 'Mercedes', logoUrl: '/assist/images/carss.png' },
//     { name: 'Audi', logoUrl: '/assist/images/carss.png' },
//     { name: 'Ford', logoUrl: '/assist/images/carss.png' },
//   ];

//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isLeaving, setIsLeaving] = useState(false);

//   const handleMouseEnter = () => {
//     setIsDropdownOpen(true);
//     setIsLeaving(false); // Reset the leaving state
//   };

//   const handleMouseLeave = () => {
//     setIsLeaving(true);
//   };

//   useEffect(() => {
//     if (isLeaving) {
//       const timer = setTimeout(() => {
//         setIsDropdownOpen(false);
//       }, 200); // Adjust the delay time as needed
//       return () => clearTimeout(timer); // Cleanup on unmount or when isLeaving changes
//     }
//   }, [isLeaving]);

//   return (
//     <div 
//       className="relative inline-block"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <span className="cursor-pointer ml-20 text-2xl font-semibold transition duration-200 hover:text-blue-500">Cars</span>

//       {isDropdownOpen && (
//         <div className="absolute mt-2 w-[800px] bg-white border border-gray-300 rounded-lg shadow-lg z-10 transition-transform transform duration-300 ease-in-out">
//           <ul className="grid grid-cols-3 gap-4 p-4">
//             {carList.map((car, index) => (
//               <li key={index} className="flex items-center px-4 py-2 hover:bg-gray-200 transition duration-200 ease-in-out">
//                 {/* Car logo */}
//                 <NavLink to={`/cars/${car.name}`} className="block flex-shrink-0">
//                   <img src={car.logoUrl} alt={`${car.name} logo`} className="w-10 h-10 mr-3" />
//                 </NavLink>
//                 {/* Car name */}
//                 <NavLink to={`/cars/${car.name}`} className="block text-lg font-semibold">
//                   {car.name}
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cars;















import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './cars.css';

const Cars = () => {
  const carList = [
    { name: 'Tesla', logoUrl: '/assist/images/BMW.jpg' },
    { name: 'BMW', logoUrl: '/assist/images/BMW.jpg' },
    { name: 'Mercedes', logoUrl: '/assist/images/carss.png' },
    { name: 'Audi', logoUrl: '/assist/images/carss.png' },
    { name: 'Ford', logoUrl: '/assist/images/carss.png' },
    { name: 'Tesla', logoUrl: '/assist/images/BMW.jpg' },
    { name: 'BMW', logoUrl: '/assist/images/BMW.jpg' },
    { name: 'Mercedes', logoUrl: '/assist/images/carss.png' },
    { name: 'Audi', logoUrl: '/assist/images/carss.png' },
    { name: 'Ford', logoUrl: '/assist/images/carss.png' },
    { name: 'Tesla', logoUrl: '/assist/images/BMW.jpg' },
    { name: 'BMW', logoUrl: '/assist/images/BMW.jpg' },
    { name: 'Mercedes', logoUrl: '/assist/images/carss.png' },
    { name: 'Audi', logoUrl: '/assist/images/carss.png' },
    { name: 'Ford', logoUrl: '/assist/images/carss.png' },
    { name: 'Tesla', logoUrl: '/assist/images/BMW.jpg' },
    { name: 'BMW', logoUrl: '/assist/images/BMW.jpg' },
    { name: 'Mercedes', logoUrl: '/assist/images/carss.png' },
    { name: 'Audi', logoUrl: '/assist/images/carss.png' },
    { name: 'Ford', logoUrl: '/assist/images/carss.png' },
    // Add more cars as needed...
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);

  // Filtered car list based on search term
  const filteredCars = carList.filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
    setIsLeaving(false);
  };

  const handleMouseLeave = () => {
    setIsLeaving(true);
  };

  useEffect(() => {
    if (isLeaving) {
      const timer = setTimeout(() => {
        setIsDropdownOpen(false);
      }, 100); // Adjust the delay time as needed
      return () => clearTimeout(timer); // Cleanup on unmount or when isLeaving changes
    }
  }, [isLeaving]);

  return (
    <div
  className="relative inline-block"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <span className="cursor-pointer ml-20 text-2xl font-semibold transition duration-200 hover:text-blue-500">
    Cars
  </span>

  {isDropdownOpen && (
    <div className="absolute mt-2 w-[500px] bg-white border border-gray-300 rounded-lg shadow-lg z-10 transition-transform transform duration-300 ease-in-out">
      
      {/* Search Bar */}
      <div className="p-4">
        <input
          type="text"
          placeholder="Search cars..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
        />
      </div>
      
      {/* Car List with Scrolling and Hidden Scrollbar */}
      <div className="h-[300px] overflow-y-auto overflow-x-hidden scrollbar-hide">
        <ul className="grid grid-cols-3 gap-4 p-4">
          {filteredCars.map((car, index) => (
            <li key={index} className="flex flex-col items-center text-center px-4 py-2 hover:bg-gray-200 transition duration-200 ease-in-out">
              
              {/* Rotating Car Logo */}
              <NavLink to={`/cars/${car.name}`} className="block flex-shrink-0">
                <motion.img
                  src={car.logoUrl}
                  alt={`${car.name} logo`}
                  className="w-10 h-10 mb-2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, loop: Infinity, ease: "linear" }}
                />
              </NavLink>
              
              {/* Car Name */}
              <NavLink to={`/cars/${car.name}`} className="block text-lg font-semibold break-words w-full">
                {car.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )}
</div>

  
  );
};

export default Cars;
