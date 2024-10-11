import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";

function GarageExperience() {
    const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const [imageUrl, setImageUrl] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [experience, setExperience] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
      setVideoUrl(''); // Clear the video URL if an image is selected
    }
  
  };

  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoUrl(URL.createObjectURL(file));
      setImageUrl(''); // Clear the image URL if a video is selected
    }
  };

  const handleExperienceChange = (e) => {
    setExperience(e.target.value);
  };

  const onSubmit = async (data) => {
    // Handle form submission and upload to server
    console.log(data);
    navigate('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex h-screen justify-center items-center"
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-2xl p-8 bg-white rounded shadow-md"
      >
        <h1 className="text-4xl font-bold mb-6 text-center">
          Upload Previous Work
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full h-full"
        >
          {/* Image Upload */}
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <label className="block text-gray-700 text-lg font-bold mb-2">
              Image Upload:
            </label>
            <input
              type="file"
              accept="image/*"
              {...register('image')}
              onChange={handleImageChange}
              className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Preview"
                className="w-full h-64 object-cover rounded mt-4"
              />
            )}
          </motion.div>

          {/* Video Upload */}
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <label className="block text-gray-700 text-lg font-bold mb-2">
              Video Upload:
            </label>
            <input
              type="file"
              accept="video/*"
              {...register('video')}
              onChange={handleVideoChange}
              className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {videoUrl && (
              <video
                width="600"
                controls
                className="w-full h-64 object-cover rounded mt-4"
              >
                <source src={videoUrl} type="video/mp4" />
              </video>
            )}
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mb-8"
          >
            <label className="block text-gray-700 text-lg font-bold mb-2">
              Share Your Experience:
            </label>
            <textarea
              {...register('experience')}
              value={experience}
              onChange={handleExperienceChange}
              className="w-full px-4 py-2 text-gray-700 border border-gray-300 rounded focus:outline-none focus:ring              -2 focus:ring-blue-500"
            />
          </motion.div>

          <motion.button
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Upload
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default GarageExperience;
