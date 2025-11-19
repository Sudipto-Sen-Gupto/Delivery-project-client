import React from 'react';
import liveTrack from '../../assets/live-tracking.png'
import safeDelivery from '../../assets/safe-delivery.png'
const Servicedata = () => {
    return (
        <div className='p-4  space-y-5'>
            <div className='flex justify-center items-center bg-white gap-10 p-4'>
                <img src={liveTrack} alt="" className='border-r-4 border-dotted px-4' />
                
                <div>
                    <h1 className='text-3xl font-bold'>Live Parcel Tracking</h1>
                    <p>Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.</p>
                </div>
            </div>
            <div className='flex justify-center items-center bg-white gap-10 p-4 '>
                <img src={safeDelivery} alt="" className='border-r-4 border-dotted px-4' />
                <div>
                    <h1 className='text-3xl font-bold'>100% Safe Delivery</h1>
                    <p>We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.</p>
                </div>
            </div>
            <div className='flex justify-center items-center bg-white gap-10 p-4'>
                <img src={liveTrack} alt="" className='border-r-4 border-dotted px-4' />
                <div>
                    <h1 className='text-3xl font-bold'>24/7 Call Center Support</h1>
                    <p>Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.</p>
                </div>
            </div>
        </div>
    );
};

export default Servicedata;