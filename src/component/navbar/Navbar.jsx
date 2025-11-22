import React from 'react';
import Logo from '../Logo/Logo';
import { Link, NavLink } from 'react-router';
import './nav.css'
import { LuCircleArrowOutUpRight } from 'react-icons/lu';
import Usehook from '../../firebase/hook/Usehook';
import { toast } from 'react-toastify';
const Navbar = () => {
        
       const {user,logOut}=Usehook();
       const handleLogOut=()=>{
              logOut().then(data=>{
                toast("Log out successful")
              }).catch(err=>toast(err.message))
       }

    const list=<nav className='flex flex-col gap-5 md:flex-row '>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/services'}>Services</NavLink>
        <NavLink to={'/coverage'}>Coverage</NavLink>
        <NavLink to={'/sendparcel'}>Send a parcel</NavLink>
        <NavLink to={'/blog'}>Blog</NavLink>
        <NavLink to={'/adminlayout/myparcels'}>Myparcels</NavLink>
    </nav>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
            list
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><Logo></Logo></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {list}
    </ul>
  </div>
  <div className="navbar-end">
  {
    user?  <button className='btn' onClick={handleLogOut}>Log out</button>: <Link to={'/login'}> <button className='btn' >Log IN</button></Link>
  }
   <Link to={'/rider'}><button className='btn btn-primary text-black'>Be a ride</button>
   </Link><LuCircleArrowOutUpRight />
  </div>
</div>
        </div>
    );
};

export default Navbar;