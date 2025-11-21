import React from 'react';
import { useForm } from 'react-hook-form';
import Usehook from '../../firebase/hook/Usehook';
import { toast } from 'react-toastify';
import Googlelog from '../googlelog/Googlelog';
import { Link, useLocation, useNavigate } from 'react-router';

const Login = () => {
    
   const location=useLocation();
   console.log(location);
   const navigate=useNavigate();
           
    const {register,handleSubmit,formState:{errors},getValues}=useForm();

    const {userSignIn,resetPass}=Usehook();
     
    
    const handleLogin=(data)=>{
        console.log(data);
        userSignIn(data.email,data.password).then(data=>{
          toast("Log in successfully")
          
          navigate(location?.state || '/')
        }).catch(err=>toast(err.message)) 
    }

    const handleReset=()=>{
      const email=getValues('email');
      if(!email){
        toast("Please insert an email")
      }
      resetPass(email).then(res=>{
        toast("Check your email")
      }).catch(err=>toast(err.message))
    }
    return (
        <div>
             <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className='text-center '>
                    <h1 className='text-3xl font-bold '>Welcome to log in page </h1>
                    <p>Log In</p>
                </div>
      <div className="card-body">
        <form onSubmit={handleSubmit(handleLogin)}>
            <fieldset className="fieldset">

               

                {/* email section */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" {...register('email',{required:true})} />
             
             {
                errors.email?.type==='required' && <p className='text-red-600'>Email is required.</p>
             } 

          {/* password section */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" {...register('password',{required:true,minLength:6,pattern: /^[A-Za-z]+$/i})}/>
          {
            errors.password?.type==='required' && <p className='text-red-600'>Password is required</p>
          }
          {
            errors.password?.type==='minLength' && <p className='bg-red-600'>You password should be minimum 6 character</p>
          }
          {
            errors.password?.type==='pattern' && <p className='text-red-600'>Your password should contains at least one uppercase letter one lowercase letter one special character and one number</p>
          }
          <div><a className="link link-hover" onClick={handleReset} >Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p>New in ZAP delivery app? <Link to={'/register'} state={location.state} className='text-blue-300 underline'>register</Link></p>
        </fieldset>
        
        </form>
        <Googlelog></Googlelog>
      </div>
    </div>
        </div>
    );
};

export default Login;