import axios from 'axios';
import React, { useEffect } from 'react';
import Usehook from './Usehook';
import { useNavigate } from 'react-router';

const axiosSecure=axios.create({
    baseURL:'http://localhost:5000'
})
const useAxiosSecure = () => {
   const{user,logOut}=Usehook();
   const navigate= useNavigate()
    useEffect(()=>{
       const reqInterceptors= axiosSecure.interceptors.request.use(function(config){
           
            config.headers.Authorization=`bearer ${user.accessToken}`
            return config
        })
           
          
        const resInterceptor=axiosSecure.interceptors.response.use((response)=>{
                  
                
                return response ;

        },(error)=>{
            console.log(error);
             if(error.status===401 || error.status===403){
                   logOut().then(()=>{
                          navigate('/login')
                   })
             }
              return Promise.reject(error);

        })
         

        return ()=>{
            axiosSecure.interceptors.request.eject(reqInterceptors),

              axiosSecure.interceptors.response.eject(resInterceptor)
        }
    },[user,logOut])

    return axiosSecure;
};

export default useAxiosSecure;