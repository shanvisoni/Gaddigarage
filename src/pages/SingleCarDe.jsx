// import React from 'react';
// import { useParams } from 'react-router-dom';

// // Sample data for car details (you can replace this with API data or static files)
// const carData = {
//   Tesla: {
//     models: ['Model S', 'Model 3', 'Model X', 'Model Y'],
//     description: 'Tesla is known for electric cars and innovative technology.',
//     imageUrl: '/assist/images/carss.png'
//   },
//   BMW: {
//     models: ['Series 3', 'Series 5', 'X5', 'i8'],
//     description: 'BMW produces luxury vehicles known for their performance and design.',
//     imageUrl: '/assist/images/carss.png'
//   },
//   Mercedes: {
//     models: ['C-Class', 'E-Class', 'S-Class', 'GLA'],
//     description: 'Mercedes is known for producing luxury cars with cutting-edge features.',
//     imageUrl: '/assist/images/carss.png'
//   },
//   Audi: {
//     models: ['A4', 'A6', 'Q5', 'R8'],
//     description: 'Audi produces high-performance cars with advanced technology.',
//     imageUrl: '/assist/images/carss.png'
//   },
//   Ford: {
//     models: ['Mustang', 'F-150', 'Explorer', 'Escape'],
//     description: 'Ford offers a wide range of vehicles, from trucks to sports cars.',
//     imageUrl: '/assist/images/carss.png'
//   },
// };

// const SingleCarDe = () => {
//   // Extract the carName from the URL
//   const { carName } = useParams();

//   // Get the car details based on the car name
//   const car = carData[carName];

//   if (!car) {
//     return <p>Car details not found.</p>;
//   }

//   return (
//     <div className="p-8">
//       {/* Car Header */}
//       <h1 className="text-3xl font-bold mb-4">{carName} Details</h1>

//       {/* Car Image */}
//       <img src={car.imageUrl} alt={`${carName}`} className="w-full h-auto mb-4 rounded-lg shadow-lg" />

//       {/* Car Description */}
//       <p className="text-lg mb-6">{car.description}</p>

//       {/* Car Models */}
//       <h2 className="text-2xl font-semibold mb-3">Available Models:</h2>
//       <ul className="list-disc pl-6">
//         {car.models.map((model, index) => (
//           <li key={index} className="text-lg">{model}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SingleCarDe;










import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'; // For animations

const carData = [
  {
    name: 'BMW',
    logoUrl: '/assist/images/carss.png',
    models: [
      {
        name: 'BMW X1',
        size: 'Compact SUV',
        price: '$35,000',
        description: 'A compact yet powerful SUV with luxury features.',
        imageUrl: '/path/to/bmw-x1.jpg',
      },
      {
        name: 'BMW X3',
        size: 'Mid-Size SUV',
        price: '$45,000',
        description: 'A versatile SUV with a great balance of comfort and power.',
        imageUrl: '/path/to/bmw-x3.jpg',
      },
    ],
  },
  {
    name: 'Audi',
    logoUrl: '/assist/images/carss.png',
    models: [
      {
        name: 'Audi Q5',
        size: 'Mid-Size SUV',
        price: '$50,000',
        description: 'An elegant SUV with advanced tech features.',
        imageUrl: '/assist/images/carss.png',
      },
    ],
  },
  {
    name: 'Tesla',
    logoUrl: '/assist/images/carss.png',
    models: [
      {
        name: 'Model S',
        size: 'Full-Size Sedan',
        price: '$94,990',
        description: 'A sleek electric sedan with top performance.',
        imageUrl: '/assist/images/Logo.jpg',
      },
      {
        name: 'Model 3',
        size: 'Compact Sedan',
        price: '$39,990',
        description: 'A compact electric sedan with impressive range.',
        imageUrl: '/assist/images/Logo.jpg',
      },
    ],
  },
];



const SingleCarDe = () => {
  const { carName } = useParams(); // Get the car name from the route
  const car = carData.find((car) => car.name === carName); // Find the car by name

  // Animation setup using Framer Motion
  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  useEffect(() => {
    window.scrollTo(0, 0); // Ensure the page scrolls to the top
  }, []);

  if (!car) {
    return <div>Car not found!</div>; // Fallback if car doesn't exist
  }

  return (
    <motion.div
      className="p-8 min-h-screen bg-gradient-to-r from-gray-800 via-gray-600 to-gray-400"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {/* Page Title */}
      <h1 className="text-5xl font-bold text-center text-white mb-10">
        {car.name}
      </h1>

      {/* Animated Car Image (rotating animation) */}
      <motion.div
        className="flex justify-center mb-12"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
      >
        <img
          src={car.logoUrl}
          alt={car.name}
          className="w-40 h-40 object-contain"
        />
      </motion.div>

      {/* Car Models Section */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-semibold mb-6">Available Models:</h2>

        {/* Car Models List */}
        <div className="grid grid-cols-3 gap-8">
          {car.models.map((model, index) => (
            <motion.div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Car Model Image */}
              <img
                src={model.imageUrl}
                alt={model.name}
                className="w-full h-40 object-cover mb-4"
              />
              {/* Car Model Name and Details */}
              <h3 className="text-xl font-semibold">{model.name}</h3>
              <p className="text-gray-600">Size: {model.size}</p>
              <p className="text-gray-600">Price: {model.price}</p>
              <p className="text-gray-600 mt-2">{model.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Car Image Flying Across Page */}
      <motion.div
        className="fixed bottom-0 left-0"
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
      >
        <img src={car.logoUrl} alt="Car Flying" className="w-20 h-20" />
      </motion.div>
    </motion.div>
  );
};

export default SingleCarDe;
