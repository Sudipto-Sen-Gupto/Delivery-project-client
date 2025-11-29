import React from 'react';
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/footer/Footer';
import error from '../../assets/App-Error.png'
import { Link } from 'react-router';
const Errorpage = () => {
    return (
        <div className='max-w-7xl mx-auto mt-40'>
                   
                <div className='flex justify-center items-center'>
                    <img src={error} alt="" />
                    <Link to={'/'} className='btn btn-primary text-black'>Go to  Home page</Link>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default Errorpage;