import React from 'react';
import { FaFacebookF, FaPinterestP, FaTwitter } from 'react-icons/fa';
import robert from '../assests/team-member-1.png';
import micelle from '../assests/team-member-2.png';
import paul from '../assests/team-member-3.png';

const Contact = () => {
    return (
        <div className='w-[1170px] mt-28 relative'>
            <h1 className='text-5xl font-semibold font-shantell text-center'>Meet The Team</h1>
            {/* Team Section Container */}
            <div className='bg-[#FDDD3A] px-20 h-[200px] my-10'>
            </div>
            <div className='w-[1170px] bg-[#F8F8F8] flex justify-between absolute top-[200px] px-10'>
                {/* Team Member */}
                <div className='text-gray-800 text-center'>
                    <img src={robert} alt='Robert' className='absolute -top-[240px] h-60' />
                    <div className='mt-20'>
                        <h2 className='uppercase text-2xl font-semibold'>Robert mcgrath</h2>
                        <h4>Founter</h4>
                        <hr className='border-2 border-[#FDDD3A] w-28' />
                        <div className='flex w-60 justify-between my-5'>
                            <a href="#"><FaFacebookF className='w-6 h-6' /></a>
                            <a href="#"><FaTwitter className='w-6 h-6' /></a>
                            <a href="#"><FaPinterestP className='w-6 h-6' /></a>
                        </div>
                    </div>
                </div>
                <div className='text-gray-800 text-center'>
                    <img src={micelle} alt='Robert' className='absolute -top-[240px] h-60'/>
                    <div className='mt-20'>
                        <h2 className='uppercase text-2xl font-semibold'>michelle mager</h2>
                        <h4 className='text-2xl'>Marketing Head</h4>
                        <hr className='border-2 border-[#FDDD3A] w-28' />
                        <div className='flex w-60 justify-between my-5'>
                            <a href="#"><FaFacebookF className='w-6 h-6' /></a>
                            <a href="#"><FaTwitter className='w-6 h-6' /></a>
                            <a href="#"><FaPinterestP className='w-6 h-6' /></a>
                        </div>
                    </div>
                </div>
                <div className='text-gray-800 text-center'>
                    <img src={paul} alt='Robert' className='absolute -top-[240px] h-60'/>
                    <div className='mt-20'>
                        <h2 className='uppercase text-2xl font-semibold'>paul carter</h2>
                        <h4 className='text-2xl'>Support Manager</h4>
                        <hr className='border-2 border-[#FDDD3A] w-28' />
                        <div className='flex w-60 justify-between my-5'>
                            <a href="#"><FaFacebookF className='w-6 h-6' /></a>
                            <a href="#"><FaTwitter className='w-6 h-6' /></a>
                            <a href="#"><FaPinterestP className='w-6 h-6' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;