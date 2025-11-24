import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router';
import useAxiosSecure from '../../firebase/hook/useAxiosSecure';

const SuccesPayment = () => {
    const [searchParams]=useSearchParams();
    const sessionId=searchParams.get('session_id');
    console.log(sessionId);
      const axiosSecure=useAxiosSecure();
    useEffect(()=>{
             if(sessionId){
                axiosSecure.patch(`/payment-success?session_id=${sessionId}`).then(res=>{
                console.log(res.data);
             })
             }
    },[axiosSecure,sessionId])
    return (
        <div>
            <h1 className='text-3xl'>Payment successfully done</h1>
        </div>
    );
};

export default SuccesPayment;