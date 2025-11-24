import React from 'react';
import { createBrowserRouter } from 'react-router';
import Rootlayout from '../../layout/rootLayout/Rootlayout';
import Homepage from '../../pages/homepage/Homepage';
import axios from 'axios';
import Coverage from '../../pages/coverage/Coverage';
import Authlayout from '../../layout/authlayout/Authlayout';
import Login from '../../Auth/login/Login';
import Register from '../../Auth/register/Register';
import Privateroute from '../privateroute/Privateroute';
import Rider from '../../pages/rider/Rider';
import Sendpercel from '../../pages/sendParcel/Sendpercel';
import Adminlayout from '../../layout/adminLayout/Adminlayout';
import Homeadmin from '../../layout/adminLayout/Homeadmin';
import Myparcels from '../../layout/adminLayout/Myparcels';
import Payment from '../../layout/adminLayout/Payment';
import SuccesPayment from '../../layout/adminLayout/SuccesPayment';
import CancelPayment from '../../layout/adminLayout/CancelPayment';

export const router = createBrowserRouter([{
        
    path:'/',
    
    Component:Rootlayout,
    hydrateFallbackElement:<p>data load</p>,
    children:[{
        index:true,
        loader:()=>axios.get('/data.json'),
        Component:Homepage
    },
    {
        path:'/coverage',
        loader:()=>axios.get('/warehouses.json'),
        Component:Coverage
    },
    {
      path:'/rider',
      element:<Privateroute> <Rider></Rider>      </Privateroute>
    },
    {
      path:'/sendparcel',
      loader:()=>axios.get('/warehouses.json'),
      element:<Privateroute> <Sendpercel></Sendpercel></Privateroute>
    }
]
},
          {
                  path:'/',
                  Component:Authlayout,
                  children:[{
                    path:'/login',
                    Component:Login
                  },
                  {
                    path:'/register',
                    Component:Register,
                    
                  }
                ]
          },

          {
            path:'/adminlayout',
            element:<Privateroute> <Adminlayout></Adminlayout> </Privateroute>
            ,
            children:[{
              index:true,
              Component:Homeadmin
            },
          {
            path:'myparcels',
            Component:Myparcels
          },
                {
                  path:'payment/:parcelId',
                  Component:Payment
                } 
                 ,{
                         path:'payment-success',
                         Component:SuccesPayment
                }  ,
                {
                  path:'payment-cancelled',
                  Component:CancelPayment
                }   
         ]
          }
   
])