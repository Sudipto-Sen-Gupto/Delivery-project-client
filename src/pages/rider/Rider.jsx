import React from 'react';
import rider from '../../assets/agent-pending.png'
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Usehook from '../../firebase/hook/Usehook';
import useAxiosSecure from '../../firebase/hook/useAxiosSecure';
import Swal from 'sweetalert2';
const Rider = () => {
         const {user}=Usehook(); 
         const axiosSecure= useAxiosSecure();         
        const state=useLoaderData();
       const stateData=state.data;
    //    console.log(stateData);

           //duplicate region solve by using Set() function
        const duplicateData=stateData.map(data=>data.region);
        const region=[...new Set(duplicateData)]
        // for react hook form    
       const formData=useForm();
       const {register,handleSubmit,control}=formData

       const riderRegion=useWatch({control,name:'riderRegion'})

       const getDistrict=(selectedRegion)=>{
                const matchingRegion=stateData.filter(matchReg=>matchReg.region===selectedRegion);
                  
                 const findDistrict=matchingRegion.map(fd=>fd.district);
                return findDistrict;
       }
         

       const handleRider=(data)=>{
                   console.log(data);

                   axiosSecure.post('/riders',data).then(res=>{
                    console.log(res.data);
                    if(res.data.insertedId){
                        Swal.fire({
                            title: "Your application has submitted , we will response soon",
                                icon: "success",
                                    draggable: true
                                      });
                    }
                   })

       }

    return (
        <div className='text-secondary p-10 space-y-5'>
            <h1 className='text-3xl font-bold'>
                Be a rider
            </h1>
            <p>
               Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal <br /> packages to business shipments — we deliver on time, every time.
            </p>

             <div className='flex flex-col-reverse md:flex-row gap-5 items-center'>
                

                 <form  onSubmit={handleSubmit(handleRider)} className='flex-1 space-y-5'>

                    <h1 className='text-3xl text-secondary font-bold'>Tell us about yourself.</h1>


                    <fieldset className="fieldset">

                    <label className="label text-secondary text-[18px] font-bold">Your name</label>
                               <input type="text" {...register('name')} defaultValue={user.displayName} className="input w-full" placeholder="Write your name" />
                        
                                </fieldset>
                    <fieldset className="fieldset">
                    <label className="label text-secondary text-[18px] font-bold">Driving License Number</label>
                               <input type="Number" {...register('drivingLicense')} className="input w-full" placeholder="Write driving license number" />
                        
                                </fieldset>
                    <fieldset className="fieldset">
                    <label className="label text-secondary text-[18px] font-bold" >Your Email</label>
                               <input type="email" className="input w-full" placeholder="Write your email"  {...register('email')} defaultValue={user.email}/>
                        
                                </fieldset>

                    <fieldset className="fieldset">
                    <label className="label text-secondary text-[18px] font-bold">Your Region</label>
                              <select defaultValue="Region" {...register('riderRegion')} className="select select-accent w-full">
                              <option disabled={true}>Select your region</option>


                              {
                                region.map((reg,index)=>{
                                      
                                 return  <option key={index}>{reg}</option>
                                })
                              }
                               
                              
                           </select>
                        
                                </fieldset>

                    <fieldset className="fieldset">
                    <label className="label text-secondary text-[18px] font-bold">Your District</label>
                              
                              <select defaultValue="District"  {...register('riderDistrict')} className="select select-accent w-full">
                        <option disabled={true}>Select your district</option>

                        {
                            getDistrict(riderRegion).map((dis,index)=>
                            {
                                 return  <option key={index}>{dis}</option>

                            })
                        }
                         
                   
                                </select>
                        
                                </fieldset>

                    <fieldset className="fieldset">
                        
                    <label className="label text-secondary text-[18px] font-bold">NID No</label>
                               <input type="number" {...register('NID_number')} className="input w-full" placeholder="Write your NID number" />
                        
                                </fieldset>

                    <fieldset className="fieldset">

                    <label className="label text-secondary text-[18px] font-bold">Phone Number</label>
                               <input type="number" {...register('phone_number')} className="input w-full" placeholder="Write your phone number" />
                        
                                </fieldset>

                    <fieldset className="fieldset">

                    <label className="label text-secondary text-[18px] font-bold">Bike brand model and year</label>
                               <input type="number" {...register('brandModel')} className="input w-full" placeholder="Write your bike model" />
                        
                                </fieldset>

                    <fieldset className="fieldset">

                    <label className="label text-secondary text-[18px] font-bold">Bike registration number</label>
                               <input type="number" {...register('registerNumber')} className="input w-full" placeholder="Write your bike registration number" />
                        
                                </fieldset>

                    <fieldset className="fieldset">

                    <label className="label text-secondary text-[18px] font-bold">Tell us about yourself</label>
                              <textarea  className="input w-full" {...register('yourself')} placeholder="Write about yourself" id=""></textarea>
                        
                                </fieldset>

                                <input type="submit" value="Submit" className='btn btn-primary text-black' />
                 </form>


                          <img src={rider} alt=""  className='flex-1'/>
             </div>

        </div>
    );
};

export default Rider;