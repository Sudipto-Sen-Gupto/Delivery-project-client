import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../firebase/hook/useAxiosSecure';
import Usehook from '../../firebase/hook/Usehook';
import { useParams } from 'react-router';


const Payment = () => {
    const {parcelId}=useParams();
    const axiosSecure=useAxiosSecure();
    const {user}=Usehook();
const {data:payment,isLoading}=useQuery({
    queryKey:['payment',parcelId],
    queryFn:async()=>{
          const paymentData=await axiosSecure.get(`/parcels/${parcelId}`)
          return paymentData.data
    }
}) 
// console.log(payment.cost);
const handleTaka=async()=>{
    const parcelInfo={
        parcelId:payment._id,
        cost:payment.cost,
        senderEmail:payment.senderEmail,
        parcelName:payment.parcelName
    }

    const payBill=await axiosSecure.post('/create-checkout-session',parcelInfo)
    console.log(payBill.data);
    window.location.href=payBill.data.url;
}
      if(isLoading){
        return <div className='mx-auto'>
            <span className="loading loading-spinner text-accent"></span>
        </div>
      }

    return (
        <div>
            <h1>Payment ${payment.cost} for product: {payment.parcelName}</h1>
            <button className='btn btn-primary text-black' onClick={handleTaka}>Pay</button>
        </div>
    );
};

export default Payment;