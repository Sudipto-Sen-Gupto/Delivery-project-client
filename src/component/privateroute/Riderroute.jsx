import React from 'react';
import Usehook from '../../firebase/hook/Usehook';
import useRole from '../../firebase/hook/useRole';
import Errorpage from '../../pages/erropage/Errorpage';

const Riderroute = ({children}) => {
    const {load}=Usehook();
    const{isLoading,personRole}=useRole();
    
   if(isLoading || load){
      <span className="loading loading-dots loading-xl"></span>
   }

   if(personRole !=='rider'){
       return   <Errorpage></Errorpage>
   }

   return children;

};

export default Riderroute;