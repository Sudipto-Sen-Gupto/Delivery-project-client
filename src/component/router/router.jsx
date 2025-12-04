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
import PaymentHistory from '../../layout/adminLayout/PaymentHistory';
import Approveriders from '../../layout/adminLayout/Approveriders';
import UserManager from '../../layout/adminLayout/UserManager';
import Adminroute from '../privateroute/Adminroute';
import Assignriders from '../../layout/adminLayout/Assignriders';
import DeliveryTask from '../../layout/adminLayout/DeliveryTask';
import Riderroute from '../privateroute/Riderroute';
import Completedtask from '../../layout/adminLayout/Completedtask';
import Trackingparcel from '../../pages/trackingParcel/Trackingparcel';
import Admindashboard from '../../layout/adminLayout/Admindashboard';

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
       loader:()=>axios.get('/warehouses.json'),
      element:<Privateroute> <Rider></Rider> </Privateroute>
    },
    {
      path:'/sendparcel',
      loader:()=>axios.get('/warehouses.json'),
      element:<Privateroute> <Sendpercel></Sendpercel></Privateroute>
    },
    {
      path: '/parcel-track/:trackingId',
      Component: Trackingparcel
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
            children:[
              {
                    index:true,
                    Component:Admindashboard
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
                } ,
                {
                  path:'paymenthistory',
                  Component:PaymentHistory
                },

                // admin route
                {
                  path:'approveriders',
                  element:  <Adminroute><Approveriders></Approveriders></Adminroute>
                 
                },
                
                {
                  path:'assignriders',
                  element:<Adminroute> <Assignriders></Assignriders> </Adminroute>
                },
                {
                  path:'usermanager',
                 
                  element:<Adminroute>
                    <UserManager></UserManager>
                  </Adminroute>
                
                },

                //rider private route
              {
                path:'deliverytask',
                element: <Riderroute><DeliveryTask></DeliveryTask></Riderroute>
              },
              {
                path:'completedtask',
                element: <Riderroute><Completedtask></Completedtask> </Riderroute>
              }

         ]
          }
   
])