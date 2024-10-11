// Layout.jsx
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar'; // Adjust the path as needed

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
