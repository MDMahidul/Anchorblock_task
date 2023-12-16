import React from 'react';
import Navbar from '../Navbar/NavBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
      <div>
        <Navbar />
        <div className="max-w-screen-xl mx-auto px-4">
          <Outlet />
        </div>
      </div>
    );
};

export default Main;