// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const GarageOwner = () => {
//   const [user, setUser] = useState({
//     username: "",
//     garagename: "",
//     email: "",
//     phone: "",
//     garagelocation: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   // Handling the input values
//   const handleInput = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;

//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   // Handling the form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     navigate("/");
//   };

//   return (
//     <>
//       <section className="bg-gray-100 min-h-screen flex items-center justify-center">
//         <main className="bg-white shadow-xl rounded-lg p-8 w-full max-w-5xl transition-transform duration-500 ease-in-out transform hover:scale-105">
//           <h1 className="text-3xl font-extrabold text-center mb-6 text-indigo-600">Garage Owner Registration</h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//             <div className="flex items-center justify-center">
//               <img
//                 src="/assist/images/register.jpg"
//                 alt="A girl is trying to do registration"
//                 className="rounded-lg shadow-lg w-80 h-80 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
//               />
//             </div>

//             {/* Registration form */}
//             <div className="flex flex-col">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="username" className="block text-sm font-medium text-gray-700">Owner Name</label>
//                     <input
//                       type="text"
//                       name="username"
//                       placeholder="Garage Owner Name..."
//                       id="username"
//                       required
//                       autoComplete="off"
//                       value={user.username}
//                       onChange={handleInput}
//                       className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="garagename" className="block text-sm font-medium text-gray-700">Garage Name</label>
//                     <input
//                       type="text"
//                       name="garagename"
//                       placeholder="Garage Name"
//                       id="garagename"
//                       required
//                       autoComplete="off"
//                       value={user.garagename}
//                       onChange={handleInput}
//                       className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Enter your email"
//                       id="email"
//                       required
//                       autoComplete="off"
//                       value={user.email}
//                       onChange={handleInput}
//                       className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
//                     <input
//                       type="number"
//                       name="phone"
//                       placeholder="Phone"
//                       id="phone"
//                       required
//                       autoComplete="off"
//                       value={user.phone}
//                       onChange={handleInput}
//                       className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="garagelocation" className="block text-sm font-medium text-gray-700">Garage Location</label>
//                     <input
//                       type="text"
//                       name="garagelocation"
//                       placeholder="Garage Location.."
//                       id="garagelocation"
//                       required
//                       autoComplete="off"
//                       value={user.garagelocation}
//                       onChange={handleInput}
//                       className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                     <input
//                       type="password"
//                       name="password"
//                       placeholder="Password"
//                       id="password"
//                       required
//                       autoComplete="off"
//                       value={user.password}
//                       onChange={handleInput}
//                       className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
//                     />
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
//                 >
//                   Register Now
//                 </button>
//               </form>
//             </div>
//           </div>
//         </main>
//       </section>
//     </>
//   );
// };

// export default GarageOwner;


import { useState } from "react";
import { useNavigate } from "react-router-dom";


export const GarageOwner = () => {
  const [user, setUser] = useState({
    username: "",
    garagename: "",
    email: "",
    phone: "",
    garagelocation: "",
    password: "",
    photo: null, // Added state for photo
  });

  const navigate = useNavigate();

  // Handling the input values
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // Handling file input separately
  const handleFileInput = (e) => {
    setUser({
      ...user,
      photo: e.target.files[0], // Store the uploaded file
    });
  };

  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Form submission logic here, including the photo upload if needed
    console.log(user); // For debugging; you can remove this line later
    navigate("/garage-owner/form");
  };

  return (
    <>
      <section className="bg-gray-100 min-h-screen flex items-center justify-center">
        <main className="bg-white shadow-xl rounded-lg p-8 w-full max-w-5xl transition-transform duration-500 ease-in-out transform hover:scale-105">
          <h1 className="text-3xl font-extrabold text-center mb-6 text-indigo-600">
            Garage Owner Registration
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex items-center justify-center">
              <img
                src="/assist/images/register.jpg"
                alt="A girl is trying to do registration"
                className="rounded-lg shadow-lg w-full h-64 md:w-[90%] md:h-[90%] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </div>

            {/* Registration form */}
            <div className="flex flex-col">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700 transition-colors duration-200"
                    >
                      Owner Name
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Garage Owner Name..."
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="garagename"
                      className="block text-sm font-medium text-gray-700 transition-colors duration-200"
                    >
                      Garage Name
                    </label>
                    <input
                      type="text"
                      name="garagename"
                      placeholder="Garage Name"
                      id="garagename"
                      required
                      autoComplete="off"
                      value={user.garagename}
                      onChange={handleInput}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 transition-colors duration-200"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 transition-colors duration-200"
                    >
                      Phone
                    </label>
                    <input
                      type="number"
                      name="phone"
                      placeholder="Phone"
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label
                      htmlFor="garagelocation"
                      className="block text-sm font-medium text-gray-700 transition-colors duration-200"
                    >
                      Garage Location
                    </label>
                    <input
                      type="text"
                      name="garagelocation"
                      placeholder="Garage Location.."
                      id="garagelocation"
                      required
                      autoComplete="off"
                      value={user.garagelocation}
                      onChange={handleInput}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
                    />
                  </div>
                  <div className="relative">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 transition-colors duration-200"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
                    />
                  </div>
                </div>

                {/* File input for photo upload */}
                <div className="relative">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium text-gray-700 transition-colors duration-200"
                  >
                    Upload Your Photo
                  </label>
                  <input
                    type="file"
                    name="photo"
                    id="photo"
                    accept="image/*" // Accepts image files only
                    onChange={handleFileInput} // Call the new handler for file input
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white py-3 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
    
    </>
  );
};

export default GarageOwner;













// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export const GarageOwner = () => {
//   const [user, setUser] = useState({
//     username: "",
//     garagename: "",
//     email: "",
//     phone: "",
//     garagelocation: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   // Handling the input values
//   const handleInput = (e) => {
//     let name = e.target.name;
//     let value = e.target.value;

//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   // Handling the form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     navigate("/");
//   };

//   return (
//     <>
//       <section className="bg-gray-100 min-h-screen flex items-center justify-center overflow-hidden">
//         <main className="bg-white shadow-xl rounded-lg p-8 w-full max-w-5xl transition-transform duration-500 ease-in-out transform hover:scale-105">
//           <h1 className="text-3xl font-extrabold text-center mb-6 text-indigo-600">
//             Garage Owner Registration
//           </h1>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
//             {/* Adjust image width to be larger */}
//             <div className="flex items-center justify-center">
//               <img
//                 src="/assist/images/register.jpg"
//                 alt="A girl is trying to do registration"
//                 className="rounded-lg shadow-lg w-full h-80 object-cover transition-transform duration-300 ease-in-out hover:scale-110 md:w-96 md:h-[26rem]"
//               />
//             </div>

//             {/* Registration form */}
//             <div className="flex flex-col w-full">
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <div>
//                     <label
//                       htmlFor="username"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Owner Name
//                     </label>
//                     <input
//                       type="text"
//                       name="username"
//                       placeholder="Garage Owner Name..."
//                       id="username"
//                       required
//                       autoComplete="off"
//                       value={user.username}
//                       onChange={handleInput}
//                       className="mt-1 block w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="garagename"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Garage Name
//                     </label>
//                     <input
//                       type="text"
//                       name="garagename"
//                       placeholder="Garage Name"
//                       id="garagename"
//                       required
//                       autoComplete="off"
//                       value={user.garagename}
//                       onChange={handleInput}
//                       className="mt-1 block w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       placeholder="Enter your email"
//                       id="email"
//                       required
//                       autoComplete="off"
//                       value={user.email}
//                       onChange={handleInput}
//                       className="mt-1 block w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="phone"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Phone
//                     </label>
//                     <input
//                       type="number"
//                       name="phone"
//                       placeholder="Phone"
//                       id="phone"
//                       required
//                       autoComplete="off"
//                       value={user.phone}
//                       onChange={handleInput}
//                       className="mt-1 block w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <div>
//                     <label
//                       htmlFor="garagelocation"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Garage Location
//                     </label>
//                     <input
//                       type="text"
//                       name="garagelocation"
//                       placeholder="Garage Location.."
//                       id="garagelocation"
//                       required
//                       autoComplete="off"
//                       value={user.garagelocation}
//                       onChange={handleInput}
//                       className="mt-1 block w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
//                     />
//                   </div>
//                   <div>
//                     <label
//                       htmlFor="password"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       name="password"
//                       placeholder="Password"
//                       id="password"
//                       required
//                       autoComplete="off"
//                       value={user.password}
//                       onChange={handleInput}
//                       className="mt-1 block w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out hover:border-indigo-400"
//                     />
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full bg-indigo-500 text-white py-4 rounded-md hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105"
//                 >
//                   Register Now
//                 </button>
//               </form>
//             </div>
//           </div>
//         </main>
//       </section>
//     </>
//   );
// };

// export default GarageOwner;
