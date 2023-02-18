import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSidebar from '../Components/LeftSidebar/LeftSidebar';

const ContactUsLayout = () => {
    return (
        <div className='flex w-[1440px] mx-auto'>
            <LeftSidebar/>
            <Outlet className='w-[1170px]'></Outlet>
        </div>
    );
};

export default ContactUsLayout;