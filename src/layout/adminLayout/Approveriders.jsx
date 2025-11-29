import { useQuery } from '@tanstack/react-query';
import React, { useRef } from 'react';
import useAxiosSecure from '../../firebase/hook/useAxiosSecure';
import { Eye, Trash2, UserMinus, UserRoundCheck } from 'lucide-react';
import Swal from 'sweetalert2';

const Approveriders = () => {
          
    const axiosSecure=useAxiosSecure();
   
    const modal=useRef();

    const {refetch,data:riders=[]}=useQuery({
        queryKey:['riders','pending'],
        queryFn: async()=>{
                const riderDetail=await axiosSecure.get('/riders')
                return riderDetail.data
        }
    })


       const updateRider=(rider,status)=>{

                         console.log(rider._id);

        const updateInfo={status:status,email:rider.email}

        axiosSecure.patch(`/riders/${rider._id}`,updateInfo).then(res=>{
               
            refetch()
            if(res.data.modifiedCount)
            {
                   Swal.fire({
                       title: `${status}`,
                         icon: `${status==='Approved'?"success":"error"}`,
                             draggable: true
                      });
            }
            

        })
       }
    
    const handleAccept=(rider)=>{
        updateRider(rider,'Approved')
    }

     const handleReject=(rider)=>{
        updateRider(rider,'Decline')
     } 

     const handleView=()=>{
                modal.current.showModal();
     }

    return (
        <div className='text-5xl font-bold p-10'>
           <h1>Approval request : {riders.length}</h1>

           <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>District</th>
        <th>Application Status</th>
        <th>Work Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
            riders.map((rider,index)=>{
                 
             return   <tr key={index}>
        
        <th>{index+1}</th>
        <td>{rider.name}</td>
        <td>{rider.email}</td>
        <td>{rider.riderDistrict}</td>
        <td >
            <p className=  {`${ rider.status==='Approved'?'text-green-600':rider.status==="Decline"?'text-red-600':'text-yellow-400'}`}>
              {
                rider.status
              }
            </p>
            </td>

            <td>
              {
                rider.workStatus
              }
            </td>
        <td>
            <button className='btn' onClick={handleView}>  <Eye /></button>
            <button onClick={()=>handleAccept(rider)} className='btn'> <UserRoundCheck /></button>
            <button className='btn' onClick={()=>handleReject(rider)}> <UserMinus /></button>
            <button className='btn'>  <Trash2 /></button>
        </td>
      </tr>
      
            })
        }
      
      
    </tbody>
  </table>
</div>
                   {/* Open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button> */}
<dialog id="my_modal_5" ref={modal} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
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

export default Approveriders;