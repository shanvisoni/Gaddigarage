

import React from 'react';

const ProblemInput = () => {
  return (
    <div className="my-4 p-4 bg-gray-100 rounded shadow-lg mr-20 transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
      <h2 className="text-2xl mb-4">Problem in your car</h2>
      <div className="relative">
        <input 
          type="text" 
          placeholder="Describe your problem " // Placeholder is kept blank for floating effect
          className="border border-gray-300 p-2 w-full rounded transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {/* <label className="absolute left-3 text-gray-500 transition-all duration-300 transform origin-top-left scale-75 -translate-y-4 pointer-events-none">Describe your problem</label> */}
      </div>
    </div>
  );
};

export default ProblemInput;
