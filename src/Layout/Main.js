import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../Components/LeftSidebar/LeftSidebar';
import RightSidebar from '../Components/RightSidebar/RightSidebar';

const Main = () => {
    return (
        <div className='flex w-[1440px] mx-auto'>
            <LeftSidebar/>
            <Outlet></Outlet>
            <RightSidebar/>
        </div>
    );
};

export default Main;