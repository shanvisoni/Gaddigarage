import React,{useState} from 'react';
import { motion } from 'framer-motion'; // For animations
import { useNavigate } from "react-router-dom";


const Garageform = () => {

    const navigate = useNavigate(); // React Router's hook to navigate between pages
    const [formData, setFormData] = useState({
      garageName: '',
      garagePhoto: null,
      servicesOffered: '',
      pricing: '',
      operatingHours: '',
      typesOfVehiclesServiced: '',
      description: '',
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform any form validation or processing here
      // For example, you can check if the form data is valid
      if (!formData.garageName || !formData.servicesOffered) {
        alert('Please fill in all required fields');
        return;
      }
      console.log(formData);
      navigate('/garage-owner/experience');
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFormData((prevFormData) => ({ ...prevFormData, garagePhoto: file }));
    };  


    return (
        <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/assist/images/carss.png')" }}>
        <div className="bg-white bg-opacity-80 rounded-lg shadow-lg p-8 max-w-2xl w-full">
          <h1 className="text-3xl font-bold text-center mb-6">Register Your Garage</h1>
          <form onSubmit={handleSubmit}>
            {/* Garage Name */}
            <motion.div className="mb-4" whileHover={{ scale: 1.05 }}>
              <label className="block text-gray-700">Garage Name</label>
              <input
                type="text"
                name="garageName"
                value={formData.garageName}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </motion.div>
  
            {/* Garage Photo Upload */}
            <motion.div className="mb-4" whileHover={{ scale: 1.05 }}>
              <label className="block text-gray-700">Garage Photo Upload</label>
              <input
                type="file"
                name="garagePhoto"
                onChange={handleFileChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </motion.div>
  
            {/* Services Offered */}
            <motion.div className="mb-4" whileHover={{ scale: 1.05 }}>
              <label className="block text-gray-700">Services Offered</label>
              <textarea
                name="servicesOffered"
                value={formData.servicesOffered}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </motion.div>
  
            {/* Pricing */}
            <motion.div className="mb-4" whileHover={{ scale: 1.05 }}>
              <label className="block text-gray-700">Pricing</label>
              <input
                type="text"
                name="pricing"
                value={formData.pricing}
                onChange={handleInputChange}
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </motion.div>
  
            {/* Operating Hours */}
            <motion.div className="mb-4" whileHover={{ scale: 1.05 }}>
              <label className="block text-gray-700">Operating Hours</label>
              <input
                type="text"
                name="operatingHours"
                value={formData.operatingHours}
                onChange={handleInputChange}/>
                </motion.div>
                    {/* Submit Button */}
                    <motion.button 
                        type="submit" 
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200" 
                        whileHover={{ scale: 1.1 }}
                    >
                        Register Garage
                    </motion.button>
                </form>
            </div>
        </div>
    );
};

export default Garageform;
