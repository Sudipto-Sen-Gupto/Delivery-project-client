import React from 'react';
import { useForm } from 'react-hook-form';
import Usehook from '../../firebase/hook/Usehook';
import { toast } from 'react-toastify';
import Googlelog from '../googlelog/Googlelog';
import { Link, useLocation, useNavigate } from 'react-router';
import axios from 'axios';

const Register = () => {
 
    const location=useLocation();
    const navigate=useNavigate()      
      const {signUp,updateUserProfile}=Usehook();
    const {register,handleSubmit,formState:{ errors }}=useForm();

    const handleRegister=(data)=>{
        console.log(data.photo[0]);
        const imageFile=data.photo[0];

        signUp(data.email,data.password).then(datum=>{
             
          const formData=new FormData();
          formData.append('image',imageFile)

          const image_url_api= `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgApi}`

          axios.post(image_url_api,formData).then(res=>
          {
            console.log(res.data.data.url);
            const detail={
              displayName:data.name,
              photoURL:res.data.data.url
            }

            updateUserProfile(detail).then(res=>{
              toast("update successfully")
              navigate(location.state || '/')
            }).catch(err=>toast(err.message))
          }
          )

          console.log(datum);
          toast('Registration successfully done')

        }).catch(err=>toast(err));
    }
    return (
        <div>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className='text-center space-y-4'>
                    <h1 className='text-3xl font-bold '>Welcome to our ZAP delivery Website. </h1>
                    <p>Register</p>
                </div>
      <div className="card-body">
        <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">
               {/* fullname */}
                <label className="label">Fullname</label>
          <input type="text" className="input" placeholder="Write your name" {...register('name',{required:true})} />
            
            {/* photo */}
          <label className="label">Photo</label>
          <input type="file" className="file-input file-input-neutral" {...register('photo',{required:true})} />
                {/* email section */}
          <label className="label">Email</label>
          <input type="email" {...register('email',{required:true})} className="input" placeholder="Email" />
           
           {errors.email?.type==='required' && <p className='text-red-600'>
            Email is required</p>}
          {/* password section */}
          <label className="label">Password</label>
          <input type="password" {...register('password',{required:true,minLength:6,pattern:/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/})} className="input" placeholder="Password" />
          {
            errors.password?.type==='required' && <p className='text-red-600'>Password is required</p>
          }
          {
            errors.password?.type==='minLength' && <p className='text-red-700'>Minimum 6 character must be needed </p>
          }

          {
            errors.password?.type==='pattern' && <p className='text-red-600'>At least one uppercase letter one lowercase letter one special character and one number</p>
          }
         
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>Already have an account? <Link className='text-blue-400 underline' to={'/login'} state={location.state}>Login</Link></p>
       
        </form>
         <Googlelog></Googlelog>
      </div>
    </div>
        </div>
    );
};

export default Register;