import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router';

const Sendpercel = () => {
     
    const data=useLoaderData();
    // console.log(data.data);
    const districtDetail=data.data;
    const duplicateRegion=districtDetail.map(dR=>dR.region);
    // console.log(duplicateRegion);
    const region=[...new Set(duplicateRegion)];
    console.log(region);
    const{register,handleSubmit,watch,formState:{errors}}=useForm();
     
    const senderRegion=watch('senderRegion')
    const districtRegion=(selectedRegion)=>{
        const regionFilter=districtDetail.filter(db=>db.region===selectedRegion);
        const district=regionFilter.map(regFi=>regFi.district);
        return district
    }

    const handleParcel=(data)=>{
         console.log(data);
    }
    return (
        <div className='my-8 text-secondary bg-white px-12 py-6 '>

            {/* text */}
            
            <form onSubmit={handleSubmit(handleParcel)}>
                 <div><h1 className='text-3xl font-bold'>Send a parcel</h1>
             <p className='text-2xl font-bold my-3'>Enter your parcel detail</p>

             <label className='label'>
                <input type="radio" {...register('filetype')} id='' value='document' defaultChecked/>Document
             </label>
               
               <label className='label'> <input type="radio" {...register('filetype')} id="" value={'non-document'} className='ml-5' />Non-document</label>
             
              <br />
             <div className='space-x-5 my-5 grid grid-cols-1  gap-4 md:grid-cols-2 '>
                  <fieldset className="fieldset">
          <label className="label text-[24px] font-bold" >Parcel Name</label>
          <input type="text" {...register('parcelName')} className="input w-full" placeholder="Write percel name" />
          
        </fieldset>
         <fieldset className="fieldset">
          <label className="label text-[24px] font-bold">Parcel Weight (kg)</label>
          <input type="number" {...register('parcelWeight')} className="input w-full" placeholder="Write percel weight" />
          
        </fieldset>
             </div>
             </div>
                
                  
             {/* two colum*/}

             <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>

                {/* sender info */}
                <div>
                         
                           <h1 className='text-2xl font-bold'>Sender Details</h1>
                            <fieldset className="fieldset">
          <label className="label text-[20px] font-bold">Sender Name</label>
          <input type="text" {...register('senderName')} className="input  w-full" placeholder="Write your name" />
          
        </fieldset>

        <fieldset className="fieldset">
          <label className="label text-[20px] font-bold">Address</label>
          <input type="text" {...register('address')} className="input  w-full" placeholder="Write your address" />
          
        </fieldset>

         <fieldset className="fieldset">
          <label className="label text-[20px] font-bold">Contact phone no</label>
          <input type="number" {...register('senderPhoneNumber')} className="input  w-full" placeholder="Write your number" />
          
        </fieldset>

        <fieldset className="fieldset">
           <legend className="fieldset-legend  text-[20px] font-bold text-secondary">Sender Region</legend>
  <select defaultValue="Pick a browser" {...register('senderRegion')} className="select w-full">
    <option disabled={true}>Select your Region</option>

    {
        region.map((reg,index)=> <option key={index} >{reg}</option>)
    }
   
    
  </select>
          
        </fieldset>


         <fieldset className="fieldset">
           <legend className="fieldset-legend  text-[20px] font-bold text-secondary">Sender District</legend>
  <select defaultValue="Pick a browser" {...register('senderDistrict')} className="select w-full">
    <option disabled={true}>Select your District</option>

    {
       districtRegion(senderRegion).map((reg,index)=> <option key={index} >{reg}</option>)
    }
   
    
  </select>
          
        </fieldset>

       

        <fieldset className="fieldset">
          <label className="label text-[20px] font-bold">Pick instruction</label>

          <textarea name="" {...register('sendInstruction')} id="" className="input w-full" cols={12} rows={12} placeholder='pick up instruction'></textarea>
          
        </fieldset>

                </div>

                {/* receiver info */}
                <div>
                    <h1 className='text-3xl font-bold'>Receiver Information</h1>
                      <fieldset className="fieldset">
          <label className="label text-[20px] font-bold">Receiver Name</label>
          <input type="text" {...register('receiverName')} className="input  w-full" placeholder="Write your name" />
          
        </fieldset>

        <fieldset className="fieldset">
          <label className="label text-[20px] font-bold">Receiver Address</label>
          <input type="text" {...register('receiverAddress')} className="input  w-full" placeholder="Write your address" />
          
        </fieldset>

        <fieldset className="fieldset">
          <label className="label text-[20px] font-bold">Receiver Contact no</label>
          <input type="number" {...register('receiverPhoneNumber')} className="input  w-full" placeholder="Write your address" />
          
        </fieldset>

         <fieldset className="fieldset">
           <legend className="fieldset-legend  text-[20px] font-bold">Receiver District</legend>
  <select defaultValue="Pick a browser" {...register('receiverDistrict')} className="select w-full">
    <option disabled={true}>Select your city</option>

    {
        region.map((reg,index)=> <option key={index}>{reg}</option>)
    }
   
   
  </select>
          
        </fieldset>

        <fieldset className="fieldset">
          <label className="label text-[20px] font-bold">Delivery  instruction</label>

          <textarea name="" {...register(' deliveryInstruction')} id="" className="input w-full" cols={12} rows={12} placeholder='pick up instruction'></textarea>
          
        </fieldset>
                </div>
             </div>
             <input type="submit" value="Send a percel" className='btn btn-primary text-black'/>
            </form>

        </div>
    );
};

export default Sendpercel;