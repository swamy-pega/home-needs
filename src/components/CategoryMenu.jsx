import React from 'react'
import { ServicesList } from '../assets/assets'
import { Link } from 'react-router-dom'
const CategoryMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-2 text-gray-800' id='category'>
        
        <h1 className=' text-3xl font-medium'>Find by Category</h1>
        <p className='text-center text-m'> Browse through List of Handyman , schedule your appointment</p>
<div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'> 
{ServicesList.map( (item,index)=>
 (

<Link className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/Handayman/${item.category}`}>
<img className='w-20' src ={item.image} alit=''/>
<p className=''>{item.category}</p>
</Link>
)
)
}


</div>


    </div>
  )
}

export default CategoryMenu