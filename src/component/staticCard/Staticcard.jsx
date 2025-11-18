import React from 'react';
import delivery from '../../assets/bookingIcon.png'
const Staticcard = () => {
    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-4 m-4 text-secondary'>
           <div className="card bg-base-100  shadow-lg p-4 ">
            <div><img src={delivery} alt="" /></div>
  <div className="card-body">
    <h2 className="card-title">Booking Pick & Drop</h2>
    <p>From personal packages to business shipments — we deliver on time, every time.</p>
    <div className="card-actions justify-end">
     
    </div>
  </div> 
</div> 

      <div className="card bg-base-100  shadow-lg p-4">
            <div><img src={delivery} alt="" /></div>
  <div className="card-body">
    <h2 className="card-title">Cash On Delivery</h2>
    <p>From personal packages to business shipments — we deliver on time, every time.</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div> 


    <div className="card bg-base-100  shadow-lg p-4">
            <div><img src={delivery} alt="" /></div>
  <div className="card-body">
    <h2 className="card-title">Delivery Hub</h2>
    <p>From personal packages to business shipments — we deliver on time, every time.</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div> 

 <div className="card bg-base-100  shadow-lg p-4">
            <div><img src={delivery} alt="" /></div>
  <div className="card-body">
    <h2 className="card-title">Booking SME & Corporate</h2>
    <p>From personal packages to business shipments — we deliver on time, every time.</p>
    <div className="card-actions justify-end">
     
    </div>
  </div>
</div> 

        </div>
    );
};

export default Staticcard;