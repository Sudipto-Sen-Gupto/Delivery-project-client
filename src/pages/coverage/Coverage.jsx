import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

 



const Coverage = () => {

    const data=useLoaderData();
    const mapPosition= data.data
    // console.log(mapPosition);
    const position = [23.8103, 90.4125]

  




    return (
        <div>
            <div>

            </div>

            <div className='h-[800px] w-full'>
                <MapContainer center={position} zoom={8} scrollWheelZoom={false} className='h-[800px]'>
                    <TileLayer  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
               
                 {
                    mapPosition.map((center,index)=>{
                        
                         <Marker key={index} position={[center.latitude,center.longitude]}>
                    <Popup>{center.district} <br /> {center.covered_area.join(', ')}</Popup>
                  </Marker>
                    })
                 }
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;