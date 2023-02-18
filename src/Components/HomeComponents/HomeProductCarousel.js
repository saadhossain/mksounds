import React, { useEffect, useRef, useState } from "react";
import { BsFillStarFill } from 'react-icons/bs';
import { GoPlus } from 'react-icons/go';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import blue from '../../assests/blue-color.png';
import green from '../../assests/green-color.png';
import purple from '../../assests/purple-color.png';
import ratingIcon from '../../assests/rating-icon.png';
import sky from '../../assests/sky-color.png';
import heart from '../../assests/heart.png'

import '../../index.css';

const HomeProductCarousel = () => {
    //Set the data to the state
    const [products, setProducts] = useState([])
    console.log(products)
    //Fetch data from the backend server
    useEffect(() => {
        fetch('https://api.hiring.masterkey.tech/api/v1/product/get')
            .then(res => res.json())
            .then(data => setProducts(data.products))
    }, [])
    //Set navigation
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    //Combined Sliders
    const slider1Ref = useRef(null);
    const slider2Ref = useRef(null);
    useEffect(() => {
        setNav1(slider1Ref.current);
        setNav2(slider2Ref.current);
    }, []);
    //Settings for carousel
    const settings1 = {
        asNavFor: nav2,
        ref: slider1Ref
    };
    //Settings for carousel
    const settings2 = {
        asNavFor: nav1,
        ref: slider2Ref,
        slidesToShow: 3,
        swipeToSlide: true,
        focusOnSelect: true
    };
    console.log(products)

    return (
        <div className="mt-20">
            <Slider {...settings1}>
                {
                    products.map(product => <div className="bg-white p-3 product-card-top">
                        <div className="flex">
                            <img src={product.picture} alt={product.name} className='top-product-image' />
                            <div className="w-[350px]">
                                <h4 className="text-xl">{product.name}</h4>
                                <div className="">
                                    <div className="flex items-center gap-2 text-[#756B6B]">
                                        <div className="text-[#FCC419] flex gap-1">
                                            <BsFillStarFill />
                                            <BsFillStarFill />
                                            <BsFillStarFill />
                                            <BsFillStarFill />
                                            <BsFillStarFill />
                                        </div>
                                        <p>({product.review}+ Review)</p>
                                    </div>
                                    <p>Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs </p>
                                    <p>Price ${product.price}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <p>Color:</p>
                                            <img src={green} alt='Green' className="w-5 h-5" />
                                            <img src={sky} alt='sky' className="w-5 h-5" />
                                            <img src={blue} alt='blue' className="w-5 h-5" />
                                            <img src={purple} alt='purple' className="w-5 h-5" />
                                        </div>
                                        <div className="flex gap-2 text-2xl bg-[#F5F4F4] quantity-box p-1">
                                            <span className="bg-[#D9D9D9] rounded-full px-2" >-</span>
                                            <p>1</p>
                                            <span className="bg-[#D9D9D9] rounded-full px-2" >+</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center mt-2">
                                        <img src={heart}  alt='Wishlist' className="border border-[#39FF00] p-2 rounded-lg"/>
                                        <button className="border border-[#39FF00] py-3 px-4 rounded-lg">Add To Cart</button>
                                        <button className="text-black bg-[#39FF00] py-3 px-4 rounded-lg">Buy Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </Slider>
            <Slider {...settings2} className='my-5'>
                {
                    products.map(product => <div className="w-48 bg-white p-3 product-card">
                        <img src={product.picture} alt={product.name} className='w-52 h-32' />
                        <h4 className="text-xl">{product.name}</h4>
                        <p>Price ${product.price}</p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2 text-[#1AF300]">
                                <img src={ratingIcon} alt='Rating Icon' />
                                <p>{product.ratting}</p>
                            </div>
                            <button className="bg-[#1AF300] rounded-full p-2 text-white"><GoPlus /></button>
                        </div>
                    </div>)
                }
            </Slider>
        </div>
    );
};

export default HomeProductCarousel;
