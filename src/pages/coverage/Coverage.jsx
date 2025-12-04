import React, { useRef } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useLoaderData } from 'react-router';

 



const Coverage = () => {

    const data=useLoaderData();
    const mapPosition= data.data
    // console.log(mapPosition);
    const position = [23.8103, 90.4125]

    const mapRef=useRef(null); 

  const handleSearch=(e)=>{
                
              e.preventDefault();
             const location=e.target.location.value;
             console.log(location); 
             
             const searchDistrict= mapPosition.filter(map=>map.district.toLowerCase().includes(location.toLowerCase()))

             console.log(searchDistrict);

             if(searchDistrict){
                const districtPosition=[searchDistrict[0].latitude,searchDistrict[0].longitude];

                console.log(districtPosition);

                mapRef.current.flyTo(districtPosition,14)
             }
  }




    return (
        <div className='p-5'>
               <h1>Coverage area for deliver products.</h1>
            <div className='my-5'>
                    {/* search field */}

                   <form onSubmit={handleSearch}>
                        
                         <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" name='location' className="grow" placeholder="Search" />
  
</label>
                      
                   </form>
            </div>

            <div className='h-[800px] w-full'>
                <MapContainer center={position}
                 ref={mapRef}
                zoom={8} scrollWheelZoom={false} className='h-[800px]'>
                    <TileLayer  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
               
                 {
                    mapPosition.map((center,index)=>{
                        
                      return   <Marker key={index} position={[center.latitude,center.longitude]}>
                    <Popup>
                        {center.district} <br /> {center.covered_area.join(', ')}
                       
                        </Popup>
                  </Marker>
                    })
                 }
                </MapContainer>
            </div>
        </div>
    );
};

export default Coverage;