// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-xl font-bold">Logo</div>
//         <ul className="flex space-x-6">
//           <li className="text-white">
//             <div className="group inline-block relative">
//               <button className="text-white focus:outline-none">About</button>
//               <ul className="absolute hidden text-gray-700 group-hover:block bg-white shadow-md">
//                 <li><a href="#how-it-works" className="block px-4 py-2">How it works</a></li>
//                 <li><a href="#services" className="block px-4 py-2">Services</a></li>
//               </ul>
//             </div>
//           </li>
//           <li><a href="#contact" className="text-white">Contact</a></li>
//           <li><a href="#register" className="text-white">Register</a></li>
//           <li><a href="#login" className="text-white">Login/Signup</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from 'react';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Left side (Logo and About, Contact links) */}
//         <div className="flex items-center space-x-6">
//           <div className="text-white text-xl font-bold">Logo</div>
//           <ul className="flex space-x-6">
//             <li className="text-white">
//               <div className="group inline-block relative">
//                 <button className="text-white focus:outline-none">About</button>
//                 <ul className="absolute hidden text-gray-700 group-hover:block bg-white shadow-md">
//                   <li><a href="#how-it-works" className="block px-4 py-2">How it works</a></li>
//                   <li><a href="#services" className="block px-4 py-2">Services</a></li>
//                 </ul>
//               </div>
//             </li>
//             <li><a href="#contact" className="text-white">Contact</a></li>
//             <li><a href="#contact" className="text-white">Become a garage Owner</a></li>
//           </ul>
//         </div>

//         {/* Right side (Register and Login/Signup links) */}
//         <ul className="flex space-x-6">
//           <li><a href="#register" className="text-white">Register</a></li>
//           <li><a href="#login" className="text-white">Login/Signup</a></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;









import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side (Logo and About, Contact links) */}
        <div className="flex items-center space-x-20">

        <NavLink 
  to="/admin-page" 
  className="block w-16 h-16 overflow-hidden transition-transform transform hover:scale-110 duration-300 ease-in-out"
>
  <img 
    src="assist/images/Logo.jpg" 
    alt="Logo" 
    className="w-full h-full object-contain"
  />
</NavLink>

          <ul className="flex space-x-4">
            <li className="text-white">
              <div className="group inline-block relative">
                <button className="text-white focus:outline-none">About</button>
                <ul className="absolute hidden text-gray-700 group-hover:block bg-white shadow-md">
                  <li><NavLink to="/About_Services" className="block px-4 py-2">How it works</NavLink></li>
                  <li><NavLink to="/About_Work" className="block px-4 py-2">Services</NavLink></li>
                </ul>
              </div>
            </li>
            <li><NavLink to="/contact" className="text-white ml-10">Contact</NavLink></li>
            <li><NavLink to="/garage-owner" className="text-white ml-10">Become a Garage Owner</NavLink></li>
          </ul>
        </div>

        {/* Right side (Register and Login/Signup links) */}
        <ul className="flex space-x-5">
          <li><NavLink to="/user-register" className="text-white">Register</NavLink></li>
          <li><NavLink to="#login" className="text-white ml-10">Login/Signup</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
