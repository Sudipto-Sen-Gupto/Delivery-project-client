import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../firebase/hook/useAxiosSecure';

const SuccesPayment = () => {
    const [searchParams]=useSearchParams();
    const sessionId=searchParams.get('session_id');
    const [paymentInfo,setPaymentInfo]=useState({});
    console.log(sessionId);
      const axiosSecure=useAxiosSecure();
    useEffect(()=>{
             if(sessionId){
                axiosSecure.patch(`/payment-success?session_id=${sessionId}`).then(res=>{
                console.log(res.data);
                setPaymentInfo({transactionId:res.data.transactionId,
                    trackingId:res.data.trackingId})
             })
             }
    },[axiosSecure,sessionId])
    return (
        <div>
            <h1 className='text-3xl'>Payment successfully done</h1>
            <p>Transaction id={paymentInfo.transactionId}</p>
            <p>Tracking id={paymentInfo.trackingId}</p>
        </div>
    );
};

export default SuccesPayment;