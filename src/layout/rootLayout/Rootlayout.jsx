import React, { Suspense } from 'react';
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/footer/Footer';
import { Outlet } from 'react-router';

const Rootlayout = () => {
    return (
        <div className='max-w-7xl mx-auto bg-gray-100'>
            <header> 
                  <Navbar></Navbar>
                  </header>

            <main className='mt-4'>
                 <Suspense fallback={<p>data is loading</p>}> 
                      <Outlet></Outlet>
                 </Suspense>
            </main>

            <footer>
                    <Footer></Footer>
            </footer>
        </div>
    );
};

export default Rootlayout;