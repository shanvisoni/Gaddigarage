import React from 'react';
// import Navbar from './components/Navbar';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import UserSelection from './pages/UserSelection';
import AboutServices from './pages/About_Services'; // Import your component
import AboutWork from './pages/About_Work';
import Contact from './pages/Contact';
import Register from './pages/UserRegister';
import GarageOwner from './pages/GarageOwner/GarageOwner';
import Garageform from './pages/GarageOwner/Garageform';
import GarageExperience from './pages/GarageOwner/GarageExperience';
import SingleGarage from './pages/SingleGarage';
import SingleCarDe from './pages/SingleCarDe';

function App() {
  return (
   
<>

      {/* <Navbar /> */}
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="/" element={  <UserSelection/>} />
          <Route path="/About_Services" element={<AboutServices />} />
          <Route path="/About_Work" element={<AboutWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user-register" element={<Register />} />
          <Route path="/garage-owner" element={<GarageOwner />} /> 
     {/* <Route path="/garage-owner/form" element={<Garageform />} /> */}
          <Route path="/garages/:id" element={<SingleGarage />} />
          <Route path="/cars/:carName" element={<SingleCarDe />} />
          </Route>
          {/* Add more routes as needed */}
        </Routes>
        <Routes>
        <Route path="/garage-owner/form" element={<Garageform />} />
        <Route path="/garage-owner/experience" element={<GarageExperience />} />
        </Routes>
       
        
    </>
 
  );
}

export default App;
