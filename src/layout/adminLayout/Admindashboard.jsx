import React from 'react';
import useRole from '../../firebase/hook/useRole';
import Homeadmin from './Homeadmin';
import Homerider from './Homerider';
import Homeuser from './Homeuser';
import { Atom } from 'react-loading-indicators';

const Admindashboard = () => {
        
    const {isLoading,personRole}=useRole();

     if(isLoading){
        <Atom color="#d01754" size="large" text="Data is loading" textColor="" />
     }

     if(personRole==='admin'){
        return <Homeadmin></Homeadmin>
     }

     else if(personRole==='rider'){
        return <Homerider></Homerider>
     }

     else{
        return <Homeuser></Homeuser>
     }
           
    
};

export default Admindashboard;