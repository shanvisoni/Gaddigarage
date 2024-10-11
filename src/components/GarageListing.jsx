import React from 'react';
import { useNavigate } from 'react-router-dom';

const garages = [
  {
    id: 1,
    name: 'Garage One',
    location: 'City One',
    services: ['Oil Change', 'Tire Rotation', 'Brake Repair'],
    price: '$50 - $150',
    imageUrl: '/assist/images/garage.png',
  },
  {
    id: 2,
    name: 'Garage Two',
    location: 'City Two',
    services: ['Engine Repair', 'Battery Replacement'],
    price: '$100 - $250',
    imageUrl: '/assist/images/garage.png',
  },
  {
    id: 1,
    name: 'Garage One',
    location: 'City One',
    services: ['Oil Change', 'Tire Rotation', 'Brake Repair'],
    price: '$50 - $150',
    imageUrl: '/assist/images/garage.png',
  },
  {
    id: 2,
    name: 'Garage Two',
    location: 'City Two',
    services: ['Engine Repair', 'Battery Replacement'],
    price: '$100 - $250',
    imageUrl: '/assist/images/garage.png',
  },
  {
    id: 1,
    name: 'Garage One',
    location: 'City One',
    services: ['Oil Change', 'Tire Rotation', 'Brake Repair'],
    price: '$50 - $150',
    imageUrl: '/assist/images/garage.png',
  },
  {
    id: 2,
    name: 'Garage Two',
    location: 'City Two',
    services: ['Engine Repair', 'Battery Replacement'],
    price: '$100 - $250',
    imageUrl: '/assist/images/garage.png',
  },
  // Add more garage data as needed
];

const GarageCard = ({ garage }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/garages/${garage.id}`);
  };

  return (
    <div
      className="w-full sm:w-[400px] md:w-[450px] lg:w-[500px] mx-auto rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 via-purple-50 to-purple-100 hover:bg-gradient-to-br hover:from-blue-100 hover:to-purple-200 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={garage.imageUrl}
        alt={garage.name}
        className="w-full h-36 object-cover"
      />
      <div className="p-5">
        <h3 className="text-2xl font-semibold text-blue-800 mb-2">{garage.name}</h3>
        <p className="text-gray-600">{garage.location}</p>
        <p className="text-gray-700 font-medium">{garage.price}</p>
        <ul className="mt-2 text-sm text-gray-600">
          {garage.services.slice(0, 2).map((service, index) => (
            <li key={index}>{service}</li>
          ))}
          {garage.services.length > 2 && (
            <li className="text-blue-600 font-semibold">Read more...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

const GarageListing = () => {
  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-wrap justify-center gap-8">
        {garages.map((garage) => (
          <GarageCard key={garage.id} garage={garage} />
        ))}
      </div>
    </div>
  );
};

export default GarageListing;









// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// // Sample data
// const garages = [
//   {
//     id: 1,
//     name: 'Garage One',
//     location: 'City One',
//     services: ['Oil Change', 'Tire Rotation', 'Brake Repair'],
//     price: '$50 - $150',
//     imageUrl: '/assist/images/garage.png',
//   },
//   {
//     id: 2,
//     name: 'Garage Two',
//     location: 'City Two',
//     services: ['Engine Repair', 'Battery Replacement'],
//     price: '$100 - $250',
//     imageUrl: '/assist/images/garage.png',
//   },
//   {
//     id: 1,
//     name: 'Garage One',
//     location: 'City One',
//     services: ['Oil Change', 'Tire Rotation', 'Brake Repair'],
//     price: '$50 - $150',
//     imageUrl: '/assist/images/garage.png',
//   },
//   {
//     id: 2,
//     name: 'Garage Two',
//     location: 'City Two',
//     services: ['Engine Repair', 'Battery Replacement'],
//     price: '$100 - $250',
//     imageUrl: '/assist/images/garage.png',
//   },
//   // Add more garage data as needed
// ];

// const GarageCard = ({ garage }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/garages/${garage.id}`);
//   };

//   return (
//     <div
//       className="max-w-xs rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 via-purple-50 to-purple-100 hover:bg-gradient-to-br hover:from-blue-100 hover:to-purple-200 hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
//       onClick={handleClick}
//     >
//       {/* Fixed height for image */}
//       <img
//         src={garage.imageUrl}
//         alt={garage.name}
//         className="w-full h-36 object-cover"
//       />
//       <div className="p-5">
//         <h3 className="text-2xl font-semibold text-blue-800 mb-2">{garage.name}</h3>
//         <p className="text-gray-600">{garage.location}</p>
//         <p className="text-gray-700 font-medium">{garage.price}</p>
//         <ul className="mt-2 text-sm text-gray-600">
//           {garage.services.slice(0, 2).map((service, index) => (
//             <li key={index}>{service}</li>
//           ))}
//           {garage.services.length > 2 && <li className="text-blue-600 font-semibold">Read more...</li>}
//         </ul>
//       </div>
//     </div>
//   );
// };

// const GarageListing = () => {
//   return (
//     <div className="container mx-auto py-10">
//       {/* <h1 className="text-4xl font-bold text-center text-blue-900 mb-10">
//         Registered Garages
//       </h1> */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
//         {garages.map((garage) => (
//           <GarageCard key={garage.id} garage={garage} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GarageListing;










