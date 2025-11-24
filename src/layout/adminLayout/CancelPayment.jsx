import React from 'react';
import { Link } from 'react-router';

const CancelPayment = () => {
    return (
        <div>
             <h1 className='text-3xl'>😒😥Payment Cancelled😪😖</h1>
             <Link to={'/adminlayout/myparcels'} className='btn btn-primary text-black'>Try Again Please</Link>
        </div>
    );
};

export default CancelPayment;