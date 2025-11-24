import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../firebase/hook/useAxiosSecure';
import Usehook from '../../firebase/hook/Usehook';
import { Fullscreen, SquarePen, Trash } from 'lucide-react';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const Myparcels = () => {
    const axiosSecure=useAxiosSecure();

    const {user}=Usehook();

    const {data:parcels=[],refetch}=useQuery({
        queryKey:['mypercels',user?.email],
        queryFn: async()=>{
           const res= await  axiosSecure(`/parcels?email=${user.email}`)
           return res.data;
        }
    })

    const handleDelete=(id)=>{
        console.log(id);

        const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});
swalWithBootstrapButtons.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "Yes, delete it!",
  cancelButtonText: "No, cancel!",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    
    axiosSecure.delete(`/parcels/${id}`).then(res=>{
        console.log(res.data);

        if(res.data.deletedCount){
            refetch();
             swalWithBootstrapButtons.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
        }
        
    }
    )
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire({
      title: "Cancelled",
      text: "Your imaginary file is safe :)",
      icon: "error"
    });
  }
});
    }
    return (
        <div >
           <h1> My parcels ={parcels.length}</h1>

            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Sender Name</th>
        <th>Parcel Name</th>
        <th>Cost</th>
        <th>Payment Status</th>
        <th>Delivery Status</th>
        <th >
             Action
        </th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

      {
        parcels.map((parcel,index)=> <tr key={parcel._id}>
        <th>{index+1}</th>
        <td>{parcel.senderName}</td>
        <td>{parcel.parcelName}</td>
        <td>{parcel.cost}</td>
        <td>{
            parcel.paymentStatus==='paid'?<span className='bg-green-600 text-black'>Already paid</span>
            : <Link to={`/adminLayout/payment/${parcel._id}`} className='btn btn-primary text-black'>Pay now</Link>}</td>

        <td>{parcel.deliveryStatus}</td>
        <td>
            <button className='btn hover:bg-primary'>  <SquarePen /></button>
            <button className='btn my-2 md:mx-3 hover:bg-primary'>    <Fullscreen /> </button>
            <button className='btn hover:bg-primary' onClick={()=>handleDelete(parcel._id)}>  <Trash /></button>
        </td>
      </tr>)
      }
     
     
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Myparcels;