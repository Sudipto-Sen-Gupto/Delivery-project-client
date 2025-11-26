import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Usehook from '../../firebase/hook/Usehook';
import useAxiosSecure from '../../firebase/hook/useAxiosSecure';

const PaymentHistory = () => {
    const{user}=Usehook();
    const axiosSecure=useAxiosSecure();
    const {data:paymentHistory=[]}=useQuery({
        queryKey:['history',user.email],
        queryFn:async()=>{
          const history=await  axiosSecure.get(`/payment?email=${user.email}`)

          return history.data;
        }
    });
    
    return (
        <div>
            <h1 className='text-3xl font-bold'>Myself payment list ={paymentHistory.length}</h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Parcel Name</th>
        <th>Paid Time</th>
        <th>Transaction ID</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        paymentHistory.map((payment,index)=>{
                  
          return  <tr key={payment._id}>
        <th>{index+1}</th>
        <td>{payment.parcelName}</td>
        <td>{payment.paidAt}</td>
        <td>{payment.transactionId}</td>
        <td>{payment.amount}</td>
      </tr>
        })
      }
      
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default PaymentHistory;