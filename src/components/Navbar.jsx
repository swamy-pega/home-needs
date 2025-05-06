import React from 'react'
//import {images} from '../assets/assets'

//import { NavLink } from 'react-router-dom'

import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex items center justify-between text-5m py-5 mb-5 border-b border-b-gray-400'>
      
     
      <div className='flex whitespace-nowrap'>
    <svg width="33" height="32" viewBox="0 0 24 24" fill="#4a7dff">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    </svg>
    <h1 className=''>Home Needs</h1>
</div>
      <ul className='hidden md:flex items-start gap-5 font-medium'> 
      <NavLink to='/Home'>
                <li className='py-1 '> Home </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                </NavLink>
                <NavLink to='/Handyman'>
                <li className='py-1 '> Search </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
                </NavLink> 
                <NavLink to ='/contact'>
                <li className='py-1 '> Contact </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/> 
               </NavLink> 
                <NavLink to ='/about'>
                <li className='py-1 '> About </li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/> 
                </NavLink>
               
        </ul>
       
       <div className='hidden md:flex items-start gap-5 font-medium'><button> Create Account</button></div>

    </div>
  )
}
 
export default Navbar