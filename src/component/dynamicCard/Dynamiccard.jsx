import React from 'react';


const Dynamiccard = ({datum}) => {
   
  
    return (
       <div className="card bg-base-100  shadow-lg rounded-3xl px-6 py-10 hover:bg-primary">
        <div><img src={datum.logo} className='mx-auto' alt="" /></div>
  <div className="card-body">
    <h2 className="card-title mx-auto">{datum.title}</h2>
    <p>{datum.description}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
    );
};

export default Dynamiccard;