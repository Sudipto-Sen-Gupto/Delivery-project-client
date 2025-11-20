import React, { Suspense } from 'react';
import Logo from '../../component/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from '../../assets/authImage.png'
const Authlayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Logo></Logo>
            <div className='flex '> 
               <div className='flex-1'>
                 <Suspense fallback={<p>Data loading</p>} >
                <Outlet ></Outlet>
            </Suspense>
               </div>
            <div className='flex-1'>
                <img src={authImage} alt="" />
            </div>
            </div>
        </div>
    );
};

export default Authlayout;