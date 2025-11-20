import React from 'react';
import { useForm } from 'react-hook-form';
import Usehook from '../../firebase/hook/Usehook';
import { toast } from 'react-toastify';

const Register = () => {
      const {signUp}=Usehook();
    const {register,handleSubmit,formState:{ errors }}=useForm();

    const handleRegister=(data)=>{
        console.log(data);
        signUp(data.email,data.password).then(data=>{
          console.log(data);
          toast('Registration successfully done')
        }).catch(err=>toast(err));
    }
    return (
        <div>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">
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
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        </form>
      </div>
    </div>
        </div>
    );
};

export default Register;