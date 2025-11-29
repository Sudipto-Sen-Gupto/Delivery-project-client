import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosSecure from '../../firebase/hook/useAxiosSecure';
import { toast } from 'react-toastify';
import { ShieldOff, ShieldUser } from 'lucide-react';
import Swal from 'sweetalert2';

const UserManager = () => {

   const [search,setSearch]=useState('');
    const axiosSecure=useAxiosSecure();

    const {refetch,data:userInfo=[]}=useQuery({
        queryKey:['userDetail',search],
        queryFn:async()=>{
            const res= await  axiosSecure.get(`/userdetail?searchtext=${search}`)
            return res.data;
        }
    })

    const handleMakeAdmin=(userRole)=>{
        const roleInfo= {role:'admin'};
        axiosSecure.patch(`/userdetail/${userRole._id}/role`,roleInfo ).then(res=>{
            console.log(res.data);
            refetch()
            if(res.data.modifiedCount){
                Swal.fire({
  title: `${userRole.displayName} is admin`,
  icon: "success",
  draggable: true
});
            }
        })
    }


    const handleCancelUser=(userRole)=>{
        const roleInfo= {role:'user'};
        axiosSecure.patch(`/userdetail/${userRole._id}/role`,roleInfo ).then(res=>{
            console.log(res.data);
            refetch()
            if(res.data.modifiedCount){
                Swal.fire({
  title: `${userRole.displayName} is refused for admin`,
  icon: "success",
  draggable: true
});
            }
        })
    }
    return (
        <div className='p-5'>
           <h1 className='text-3xl font-bold'> User information count ={userInfo.length}</h1>
            
            <p> {search} </p>
                
            <label class="input my-5">
  <svg class="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" onChange={(e)=>setSearch(e.target.value)} required placeholder="Search" />
</label>


           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Name</th>
        <th>Email</th>
        <th>Create At</th>
        <th>Admin actions</th>
        <th>Other actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        userInfo.map((info,index)=>{
            return  <tr key={index}>
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={info.photoURL}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{info.displayName}</div>
              
            </div>
          </div>
        </td>
        <td>
          {info.email}
          <br />
          <span className="badge badge-ghost badge-sm">{info.role}</span>
        </td>
        <td>{info.createdAt}</td>
        <th>
          {
            info.role==='admin'? <button className='btn' onClick={()=>handleCancelUser(info)} > <ShieldOff /></button>:
            <button onClick={()=>handleMakeAdmin(info)}> <ShieldUser /> </button>
          }
        </th>
      </tr>
            
        })
     }
      
      
      
    </tbody>
    {/* foot */}
    
  </table>
</div>
        </div>
    );
};

export default UserManager;