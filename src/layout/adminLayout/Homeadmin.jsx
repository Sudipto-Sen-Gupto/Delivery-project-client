import { useQuery } from '@tanstack/react-query';

import React from 'react';
import useAxiosSecure from '../../firebase/hook/useAxiosSecure';

import { Legend, Pie, PieChart, Tooltip } from 'recharts';



const Homeadmin = () => {


       
       const axiosSecure=useAxiosSecure();

  const  {data:deliveryProgress=[]}=useQuery({
           
           queryKey:['deliveryStatus'],
           queryFn:async()=>{
                const res= await axiosSecure.get('/parcel/deliverystatus/state');
                console.log(res.data);
                 return res.data;
           }
  })     
   
  const pieChartData=(data)=>{
         return data.map(item=>{
         return { name:item.status,value:item.count }
         })
  }

    return (
        <div>
          <h1>Delivery progression : {deliveryProgress.length}</h1>
         <div className="stats shadow">
  

  {
    deliveryProgress.map((progress,index)=>{
              
      return <div className="stat place-items-center" key={index}>
    <div className="stat-title">{progress._id}</div>
    <div className="stat-value">{progress.count}</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
    })
  }

 
</div>
              <div className='w-full h-[500px]'>
            
             <PieChart width={400} height={400}>
      <Pie
        activeShape={{
          fill: 'red',
        }}
        data={pieChartData(deliveryProgress)}
        dataKey="value"
         nameKey="name"
        isAnimationActive={true}
      />
      <Tooltip defaultIndex={2} />
      <Legend></Legend>
    </PieChart>
    

  </div>

        </div>
    );
};

export default Homeadmin;