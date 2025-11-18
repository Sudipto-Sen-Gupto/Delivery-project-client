import React from 'react';
import { createBrowserRouter } from 'react-router';
import Rootlayout from '../../layout/rootLayout/Rootlayout';
import Homepage from '../../pages/homepage/Homepage';

export const router = createBrowserRouter([{
        
    path:'/',
    Component:Rootlayout,
    hydrateFallbackElement:<p>data load</p>,
    children:[{
        index:true,
        Component:Homepage
    }]
}])