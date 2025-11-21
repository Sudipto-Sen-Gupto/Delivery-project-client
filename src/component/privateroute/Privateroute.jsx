import React from 'react';
import Usehook from '../../firebase/hook/Usehook';
import { Navigate, useLocation } from 'react-router';

const Privateroute = ({children}) => {
    const location=useLocation();
    console.log(location);
      const {user,load}=Usehook();
    if(load){
        return <div className='flex justify-center items-center'> <span class="loading loading-bars loading-xl"></span></div>
    }
       
    if(user){
        return children;
    }
    
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
   
};

export default Privateroute;