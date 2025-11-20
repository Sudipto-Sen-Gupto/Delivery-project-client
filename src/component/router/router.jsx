import React from 'react';
import { createBrowserRouter } from 'react-router';
import Rootlayout from '../../layout/rootLayout/Rootlayout';
import Homepage from '../../pages/homepage/Homepage';
import axios from 'axios';
import Coverage from '../../pages/coverage/Coverage';
import Authlayout from '../../layout/authlayout/Authlayout';
import Login from '../../Auth/login/Login';
import Register from '../../Auth/register/Register';

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
                    Component:Register
                  }
                ]
          }
   
])