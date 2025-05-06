import React from 'react'
import { images } from '../assets/assets.js'
//import avatar_default from '../assets/avatar_default.png'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
        {/* left side box  */}
<div className='md: w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
    <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold'> Book appointment with Truseted Handymen</p>
    <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'> 
<img className='w-5' src ={images.avatar_default} alit=''/>
<img  className='w-5'src ={images.avatar_women} alit=''/>
<p> Browse through  our list of handyman scheudle your appointment</p>
</div>

 <a href='' className='flex items-center gap-2 bg-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 '> Book Appointment </a>
     </div>


   {/* right side box  */}
   <div> 


   </div>
    </div>
  )
}

export default Header