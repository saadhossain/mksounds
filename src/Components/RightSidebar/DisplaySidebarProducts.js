import React from 'react';

const DisplaySidebarProducts = ({product}) => {
    const {name, order, picture, price, review} = product
    return (
        <div className='flex gap-1 mt-3'>
            {/* Product Image */}
            <img src={picture} alt={name} className='w-16 h-16 bg-[#D2D2D2] rounded-full p-2'/>
            {/* product name and Price */}
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-base'>{name}</h4>
                    <p className='text-xs'>{review} Review and {order} Order</p>
                </div>
                <p>Price ${price}</p>
            </div>
        </div>
    );
};

export default DisplaySidebarProducts;