import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const MainPageLayout = () => {
  return (
    <div className='pt-5 px-5 '>
      <Navbar />      
      <Outlet />
    </div>
  );
}

export default MainPageLayout;
