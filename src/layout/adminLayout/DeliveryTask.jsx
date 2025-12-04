import {  useQuery } from '@tanstack/react-query';
import React from 'react';
import Usehook from '../../firebase/hook/Usehook';
import useAxiosSecure from '../../firebase/hook/useAxiosSecure';
import Swal from 'sweetalert2';

const DeliveryTask = () => {

    const {user}=Usehook();
    const axiosSecure= useAxiosSecure();
    const {data: parcels=[],refetch}=useQuery({

        queryKey:['parcels',user?.email,'Driver_assigned'],
        queryFn:async()=>{
            const res=await axiosSecure.get(`/parcels/rider?email=${user.email}&deliveryStatus=Driver_assigned`)
             console.log(res.data);
            return res.data;
        }
    })

    const handleAcceptDelivery=(parcel,status)=>{

        const updateInfo={
          deliveryStatus:status,
          riderId:parcel.RiderId,
          trackingId:parcel.trackingId
        }
            
        let message=`Your product summary.${status.split('_').join(' ')}`

                 axiosSecure.patch(`/parcels/${parcel._id}/status`,updateInfo).then(res=>{
                         refetch()
                          if(res.data.modifiedCount){
                            Swal.fire({
                                title: message,
                                icon: "success",
                                  draggable: true,
                                  timer:1500
                                    });
                          }
                 })

    }
    return (
        <div>
                The rider number= {parcels.length}

                <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Rider Name</th>
        <th>Rider Email</th>
        <th className='text-center'>Action</th>
        <th>Other Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        parcels.map((parcel,index)=>{
            return <tr key={parcel.RiderId}>
        <th>{index+1}</th>
        <td>{parcel.RiderName}</td>
        <td>{parcel.RiderEmail}</td>
        <td className='flex justify-center'>

          {
            parcel.deliveryStatus==='Driver_assigned' ? 
              <>
              <button className='btn btn-primary text-black' onClick={()=>handleAcceptDelivery(parcel,'Delivery On the Way')}> Accept</button>

              <button className='btn btn-neutral mx-2'>Reject</button>
              </> : <span className='text-green-600'>Accepted</span>
          }

        </td>
              <td>
                <button className='btn btn-primary text-black' onClick={()=>handleAcceptDelivery(parcel,'parcel_as_picking')}>Marked as picked up</button>

                <button className='btn btn-accent ' onClick={()=>handleAcceptDelivery(parcel,'parcel_delivered')}>Marked as delivered</button>
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

export default DeliveryTask;