import React from 'react';
import Usehook from './Usehook';
import useAxiosSecure from './useAxiosSecure';
import {  useQuery } from '@tanstack/react-query';

const useRole = () => {
        
          const {user}=Usehook();
          const axiosSecure=useAxiosSecure();

          const {isLoading,data:personRole='user'}=useQuery({
            queryKey:['Role',user?.email],
              enabled: !!user?.email,  
            queryFn:async()=>{
                const userRole= await axiosSecure.get(`/userdetail/${user.email}/role`);
                return userRole.data.role;
            }
          })
    return ( {personRole,isLoading}   );
};

export default useRole;