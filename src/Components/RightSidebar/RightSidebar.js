import React, { useEffect, useState } from 'react';
import topbanner from '../../assests/right-sidebar-top.png';
import DisplaySidebarProducts from './DisplaySidebarProducts';
const RightSidebar = () => {

    const [products, setProducts] = useState([])
    // console.log(products)
    useEffect(()=> {
        fetch('https://api.hiring.masterkey.tech/api/v1/product/get')
        .then(res => res.json())
        .then(data => setProducts(data.products))
    },[])
    return (
        <div className='w-[370px] mt-28'>
            {/* Top Banner Section */}
            <div className='relative'>
                <img src={topbanner} alt='Summer headphone offer' />
                <div className='absolute top-5 left-5 text-white'>
                    <h4 className='text-2xl'>Summer Headphones from<br /> top brands</h4>
                    <button className='mt-20 text-xl font-semibold'>Buy Now</button>
                </div>
            </div>
            {/* Daily Deals section */}
            <div className='p-4 mt-24'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-xl font-semibold'>Daily Deals</h3>
                    <button>View All</button>
                </div>
                {
                    products.map(product => <DisplaySidebarProducts product={product} key={product._id} />)
                }
            </div>
        </div>
    );
};

export default RightSidebar;