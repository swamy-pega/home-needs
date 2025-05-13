import React, { useContext } from 'react'

//import {HandymanList} from '../assets/assets.js'
import { useNavigate } from 'react-router-dom'
import  { Appcontext} from '../context/Appcontext'
const TopHandyManList = () => {

  const navigate=useNavigate()
  const {HandymanList}=useContext(Appcontext)
  //console.log("handymanlist"+HandymanList);
  return (

<div className='flex flex-col items-center gap-4 my-4 text-gray-900 md:mx-10'>

<h1 className='text-3xl font-medium'>Top Handyman List</h1>
<p className='sm:w-1/3 text-center text-sm' >Here are the top handyman list</p>
<div className='w-50% grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
{HandymanList.slice(0,10).map( (items,index)=>
(
    <div className='border grid grid-cols-[1fr] border-blue-200 rounded-xl p-4 overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' 
    key={index}
    onClick={()=>navigate(`/Appointment/${items.id}/${items.category}`)}>
<img className='bg-blue-5 w-44 'src={items.image} alt=""/>
<div className='p-4'> 
    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
        <p className='w-2 h-2 rounded-full bg-green-500'> </p><p>Avaialable </p> </div>
    </div>
    <div>
        <p className='text-gray-900 text-lg font-medium'> {items.name}</p>
        <p className='text-gray-900 text-sm'> {items.category}</p>
        <p className='text-yellow-400 text-lg font-medium'>  {items.Rating}</p>
    </div>
    </div>

))}

</div>
<button onClick={ ()=>navigate(`/Handyman`)} className='bg-blue-100 text-gray-600 px-12 rounded-full py-3 mt-2'> more</button>
      
</div>
  )
}

export default TopHandyManList