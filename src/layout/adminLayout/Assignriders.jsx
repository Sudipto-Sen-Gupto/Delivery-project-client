import { useQuery } from '@tanstack/react-query';
import React, { useRef, useState } from 'react';
import useAxiosSecure from '../../firebase/hook/useAxiosSecure';
import Swal from 'sweetalert2';

const Assignriders = () => {
          
      const riderAssignModal=useRef();

    const axiosSecure=useAxiosSecure();
    const {data: parcels=[]}=useQuery({
        queryKey:['parcel','pending-pickup'],
        queryFn:async()=>{
             
            const res=await  axiosSecure('/parcels?deliveryStatus=pending-pickup')

            return res.data;
        }
    })


    const [selectedParcel,setSelectedParcel]=useState(null);      
     
         const {data:riders=[],refetch:parcelsRefetch}=useQuery({
            queryKey:['riders',selectedParcel?.receiverDistrict],
            enabled:!!selectedParcel,
            queryFn:async()=>{
               const res= await axiosSecure.get(`/riders?status=Approved&district=${selectedParcel?.receiverDistrict}&workStatus=available`);
                 return res.data
            }
         })

        const  handleRiderModal=(parcel)=>{
            //  console.log(parcel.receiverDistrict);
             setSelectedParcel(parcel)
            //  console.log(`/riders?status=Approved&district=${selectedParcel.receiverDistrict}&workStatus=available`);
            riderAssignModal.current.showModal();
        }


        const handleRiderAssign=(rider)=>{
            const updateRiderInfo={
                Rider_name:rider.name,
                Rider_email:rider.email,
                Rider_id:rider._id,
                Parcel_id:selectedParcel._id
            }
                 
            console.log(updateRiderInfo);
            axiosSecure.patch(`/parcels/${selectedParcel._id}`,updateRiderInfo).then(res=>{
                if(res.data.modifiedCount){
                     
                    
                     riderAssignModal.current.close();
                          parcelsRefetch();
                    Swal.fire({
                      title: "Drag me!",
                       icon: "success",
                           draggable: true
});
                }
            })
        }
    return (
        <div className='p-5'>
            <h1 className='text-3xl font-bold'>Assign riders ={parcels.length}</h1>


            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Parcel Name</th>
        <th>Tracking  Id</th>
        <th>Cost</th>
        <th>Order Date</th>
        <th>Receiver District</th>
        <th>Customer Email</th>
        <th>Payment Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {

        parcels.map((parcel,index)=>{
           return      <tr key={parcel._id}>
        <th>{index+1}</th>
        <td>{parcel.parcelName}</td>
        <td>{parcel.trackingId}</td>
        <td>{parcel.cost}</td>
        <td> {parcel.createdAt}</td>
        <td>{parcel.receiverDistrict}</td>
        <td>{parcel.receiverEmail}</td>
        <td>{parcel.paymentStatus}</td>
        <td>
            <button className='btn btn-primary text-black' onClick={()=>handleRiderModal(parcel)}>Assign Rider</button>
        </td>
      </tr>

        })
      }
     
      
     
    </tbody>
  </table>
</div>
                 

         {/* modal */}
{/* 
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}

<dialog ref={riderAssignModal} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Available riders {riders.length}</h3>
           
         <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>Serial no</th>
        <th>Rider Name</th>
        <th>Rider Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        riders.map((rider,index)=>{
            return  <tr key={rider._id}>
        <th>{index+1}</th>
        <td>{rider.name}</td>
        <td>{rider.email}</td>
        <td className='btn btn-primary text-black' onClick={()=>handleRiderAssign(rider)}>Assign</td>
      </tr>
      
        })
      }
      
      
    </tbody>
  </table>
</div>

    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

        </div>
    );
};

export default Assignriders;