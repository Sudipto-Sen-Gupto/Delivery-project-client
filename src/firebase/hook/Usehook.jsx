import React, { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';

const Usehook = () => {

     const contextHook=useContext(AuthContext)
     return contextHook;

   
};

export default Usehook;