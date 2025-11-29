import React from 'react';
import Usehook from '../../firebase/hook/Usehook';

import Errorpage from '../../pages/erropage/Errorpage';
import useRole from '../../firebase/hook/useRole';

const Adminroute = ({children}) => {

      const {load}=Usehook();
      const {personRole,isLoading}= useRole();

      if(load || isLoading){
        return <div className='mx-auto'><span className="loading loading-bars loading-xl"></span></div>
      }

      if(personRole !=='admin'){
        return  <Errorpage></Errorpage>
      }

    return children;
};

export default Adminroute;