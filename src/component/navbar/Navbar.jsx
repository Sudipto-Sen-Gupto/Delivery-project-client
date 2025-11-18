import React from 'react';
import Logo from '../Logo/Logo';
import { NavLink } from 'react-router';
import './nav.css'
import { LuCircleArrowOutUpRight } from 'react-icons/lu';
const Navbar = () => {

    const list=<nav className='flex flex-col gap-5 md:flex-row '>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/services'}>Services</NavLink>
        <NavLink to={'/coverage'}>Coverage</NavLink>
        <NavLink to={'/pricing'}>Pricing</NavLink>
        <NavLink to={'/blog'}>Blog</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
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
   <button className='btn'>Log IN</button>
   <button className='btn btn-primary'>Register</button>
   <LuCircleArrowOutUpRight />
  </div>
</div>
        </div>
    );
};

export default Navbar;