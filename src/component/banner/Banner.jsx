import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import  banner1 from '../../assets/banner/banner1.png'
import banner2 from '../../assets/banner/banner2.png'
import banner3 from '../../assets/banner/banner3.png'
import { LuCircleArrowOutUpRight } from 'react-icons/lu';

const Banner = () => {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} interval={2500}>
                <div className='relative'>
                    <img src={banner1} />
                   <div className='absolute  flex gap-3 items-center bottom-3 left-2 md:bottom-14 md:left-4'>
                    
                    <button className='btn '>Track Your Parcel</button> <LuCircleArrowOutUpRight />
                    <button className='btn btn-primary text-black'>Be a rider</button>
                   </div>
                </div>
                <div className='relative'>
                    <img src={banner2} />
                   <div className='absolute  flex gap-3 items-center bottom-4 left-2 md:bottom-14 md:left-4'>
                    
                    <button className='btn '>Track Your Parcel</button> <LuCircleArrowOutUpRight />
                    <button className='btn btn-primary text-black'>Be a rider</button>
                   </div>
                </div>
                <div className='relative'>
                    <img src={banner3} />
                    <div className='absolute  flex gap-3 items-center bottom-4 left-2 md:bottom-14 md:left-4'>
                    
                    <button className='btn '>Track Your Parcel</button> <LuCircleArrowOutUpRight />
                    <button className='btn btn-primary text-black'>Be a rider</button>
                   </div>
                    
                </div>
            </Carousel>
    );
};

export default Banner;