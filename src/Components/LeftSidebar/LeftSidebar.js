import React from 'react';
import { AiFillCreditCard, AiOutlineHeart } from 'react-icons/ai';
import { BsCart3, BsFillChatLeftFill, BsGearWideConnected } from 'react-icons/bs';
import { FaHistory, FaUserTie } from 'react-icons/fa';
import { GrHomeRounded } from 'react-icons/gr';
import { MdExplore } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import logo from '../../assests/logo.png';
import '../../index.css';

const LeftSidebar = () => {
    return (
        <div className='w-[270px] p-5'>
            {/* Company logo */}
            <div className='flex items-center gap-1 mb-16'>
                <img src={logo} alt='MK Sounds' />
                <h3 className='text-2xl font-semibold font-poppins'>MK Sounds</h3>
            </div>
            {/* Navigation Menu */}
            <div className='flex flex-col gap-11'>

                <NavLink to='/' className='flex items-center gap-11 text-2xl font-semibold'>
                    <GrHomeRounded className='w-6 h-6' />
                    Home
                </NavLink>
                <NavLink to='/' className='flex items-center gap-11 text-2xl font-semibold'>
                    <MdExplore className='w-6 h-6' />
                    Explore
                </NavLink>
                <NavLink to='/' className='flex items-center gap-11 text-2xl font-semibold'>
                    <AiOutlineHeart className='w-6 h-6' />
                    Saved
                </NavLink>
                <NavLink to='/' className='flex items-center gap-11 text-2xl font-semibold'>
                    <BsCart3 className='w-6 h-6' />
                    Cart
                </NavLink>
                <NavLink to='/' className='flex items-center gap-11 text-2xl font-semibold'>
                    <AiFillCreditCard className='w-6 h-6' />
                    Selling
                </NavLink>
                <NavLink to='/' className='flex items-center gap-11 text-2xl font-semibold'>
                    <FaUserTie className='w-6 h-6' />
                    Profile
                </NavLink>
                <NavLink to='/' className='flex items-center gap-11 text-2xl font-semibold'>
                    <FaHistory className='w-6 h-6' />
                    History
                </NavLink>
                <NavLink to='/contact' className='flex items-center gap-11 text-2xl font-semibold'>
                    <BsFillChatLeftFill className='w-6 h-6' />
                    Contact Us
                </NavLink>
                <NavLink to='/' className='flex items-center gap-11 text-2xl font-semibold'>
                    <BsGearWideConnected className='w-6 h-6' />
                    Setting
                </NavLink>
            </div>
            {/* Help Section */}
            <div className='help-section mt-12 text-center'>
                <h1 className='text-3xl pt-14 font-bold text-white'>Need Help</h1>
                <h4 className='text-xl font-semibold text-white p-4'>Lorem Ipsum is simply dummy text of the
                </h4>
                <button className='bg-[#21D111] py-2 px-3 text-white font-semibold text-xl rounded'>Customer Service</button>
            </div>
        </div>
    );
};
export default LeftSidebar;