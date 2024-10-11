import React from 'react';
import { useParams } from 'react-router-dom';

const garages = [
  {
    id: 1,
    name: 'Garage One',
    location: 'City One',
    services: ['Oil Change', 'Tire Rotation', 'Brake Repair'],
    price: '$50 - $150',
    description: 'Detailed description about Garage One services.',
    imageUrl: '/assist/images/garage.png',
  },
  {
    id: 2,
    name: 'Garage Two',
    location: 'City Two',
    services: ['Engine Repair', 'Battery Replacement'],
    price: '$100 - $250',
    description: 'Detailed description about Garage Two services.',
    imageUrl: '/assist/images/garage.png',
  },
  // Add more garage data as needed
];

const SingleGarage = () => {
  const { id } = useParams();
  const garage = garages.find((g) => g.id === parseInt(id));

  if (!garage) return <div>Garage not found</div>;

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col md:flex-row">
        <img
          src={garage.imageUrl}
          alt={garage.name}
          className="w-full md:w-1/2 h-auto object-cover rounded-lg"
        />
        <div className="md:ml-10 mt-5 md:mt-0">
          <h1 className="text-4xl font-bold text-gray-800">{garage.name}</h1>
          <p className="text-gray-600">{garage.location}</p>
          <p className="text-gray-600">{garage.price}</p>
          <p className="mt-5 text-gray-700">{garage.description}</p>
          <ul className="mt-5">
            {garage.services.map((service, index) => (
              <li key={index} className="text-gray-700">
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleGarage;
