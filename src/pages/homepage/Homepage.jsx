import React from 'react';
import Banner from '../../component/banner/Banner';
import Staticcard from '../../component/staticCard/Staticcard';
import { useLoaderData } from 'react-router';
import Dynamiccard from '../../component/dynamicCard/Dynamiccard';
import Brands from '../../component/brands/Brands';

const Homepage = () => {
    const data=useLoaderData();
    const info=data.data
    return (
        <div>
           <Banner></Banner>
           <Staticcard></Staticcard>

           <div className='bg-secondary px-5 py-10 '>
            <div className='text-white text-center my-4'><h1 className='text-3xl font-bold'>Our services</h1>
             <p>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.</p>
            </div>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-3 p-4 '>
                {
                info.map(datum=>  <Dynamiccard key={datum.title} datum={datum}></Dynamiccard>)
            }
            </div>
           </div>
          
          <Brands></Brands>
        </div>
    );
};

export default Homepage;