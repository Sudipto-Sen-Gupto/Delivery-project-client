import React from 'react';
import Usehook from '../../firebase/hook/Usehook';
import useAxiosSecure from '../../firebase/hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Completedtask = () => {

    const {user}=Usehook();
    const axiosSecure= useAxiosSecure();
    const {data: parcels=[],refetch}=useQuery({

        queryKey:['parcels',user?.email,'Driver_assigned'],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/parcels/rider?email=${user.email}&deliveryStatus=parcel_delivered`)
             console.log(res.data);
            return res.data;
        }
    })

       const productCost=(parcel)=>{
               
                //  (8% of delivery charge)
                if(parcel.senderDistrict===parcel.receiverDistrict){
                      
                    const myTaskCost= parcel.cost * .8 ;
                    return myTaskCost;
                }

                else{
                    //(6% of delivery charge)
                    const myTaskCost=parcel.cost*.6;
                    return myTaskCost;
                }
             
       }

    return (
        <div>
            <h1>Complete deliveries : {parcels.length}</h1>

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>My Email</th>
        <th>Delivery amount</th>
        <th>My amount</th>
        <th>Withdraw money</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        parcels.map((parcel,index)=>{
            return  <tr key={parcel._id}>
        <th>{index+1}</th>
        <td>{parcel.RiderName}</td>
        <td>{parcel.RiderEmail}</td>
        <td>{parcel.cost}</td>
        <td>
            {
                productCost(parcel)
            }
        </td>
        <td>
            <button className='btn btn-primary text-black'>Cash out</button>
        </td>
      </tr>
        })
      }
      
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Completedtask;