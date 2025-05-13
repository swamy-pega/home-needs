import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Appcontext } from '../context/Appcontext'
import ReleatedHandyman from '../components/ReleatedHandyman'

const Appointment = () => {

const {HandymanId}=useParams();

const {Category}=useParams();
const {HandymanList}=useContext(Appcontext)
//console.log("==Id---"+HandymanId+" "+HandymanList.length) 
//const []

const [handymanInfo,setHandymanInfo]=useState(null)
const [timeSlots,setTimeSlots]=useState([]);
const [slotIndex, setSlotIndex]=useState(0);
const [slotTime, setSlotTime]=useState('');

//console.log("==slotIndex---"+slotIndex+" " )
const dayOfWeek=['SUN','MON','TUE','WED','THR','FRI','SAT'];

const getAvailableSlots= async() => {
    setTimeSlots([]);
    let today=new Date();
    for(let i=0;i<7;i++ )
        {
        //getting date with index
        let currentDate=new Date(today);
        currentDate.setDate(today.getDate()+i)
       // console.log("curdate"+currentDate);

        //set time with index
        let endTime= new Date();
        endTime.setDate(today.getDate()+i);
        endTime.setHours(19,0,0,0)
       // console.log("endTime "+endTime);
        //setting hours
        if(today.getDate()=== currentDate.getDate())
        {
            currentDate.setHours (currentDate.getHours()>10 ? currentDate.getHours()+1:10)

        //endTime.setHours(10,0,0,0)
            //console.log("cur get hours "+currentDate.getHours()+"end time"+endTime);
            currentDate.setMinutes (currentDate.getMinutes()>30 ? 30:0)
        }
        else
        {
            currentDate.setHours(10);
            currentDate.setMinutes(0);
        }
        //console.log("cur get hours "+currentDate+"end time"+endTime);
let timeSlots=[]
        while(currentDate<endTime)
        {
            let formattedTime=currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})
            //console.log('formatted time'+formattedTime);

            //add slot to arry
            timeSlots.push ( {
                dateTime:new Date(currentDate),
                time:formattedTime
            })
            //incremnet the timeslot every 30 mins
            currentDate.setMinutes(currentDate.getMinutes()+30)

        }
        //console.log("timeSlots "+timeSlots.length);
        if(timeSlots.length==0)
        {
            timeSlots.push ( {
                dateTime:new Date(currentDate),
                time:''
            })

        }
        setTimeSlots(prev => ([...prev,timeSlots]) )

    }


}

const fetchHandymanInfo=async()=>
{
    const handymanInfo=HandymanList.find(handyman => handyman.id === HandymanId)
   setHandymanInfo(handymanInfo)
   // console.log(" handmay info "+handymanInfo.name)

}

useEffect( ()=>{fetchHandymanInfo()},[HandymanList,HandymanId]);
useEffect ( ()=>{getAvailableSlots()},[handymanInfo]);
useEffect ( ()=>{console.log(timeSlots)},[timeSlots]);

return handymanInfo &&(
    <div>
 <div className='flex flex-col sm:flex-row gap-4 '>
    {/*--handy man details */}
  
    <div className='w-44'>
<img  className='bg-primary rounded-lg sm:max w-full'src={handymanInfo.image} alt=""/>

    </div>
    <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white flex-col gap-2 sm:mx-0 mt-0'>
        <p > {handymanInfo.name}</p>
        <p> {handymanInfo.category}</p>
        <p> {handymanInfo.Description}</p>
        <p className='text-gray-900'> Appointment Fee: {handymanInfo.Fee}</p>
        <p className='text-yellow-500'> {handymanInfo.Rating}</p>
    </div>
    </div>

   {/*--display time slots  */}  
   <div>
    <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-600'>
  <p>Time slots</p>

    <div className='flex gap-3 items-center w-full mt-4 overflow-x-scroll '>
       
    {timeSlots.length && timeSlots.map( (item,index) =>(
        
<div key={index} onClick={()=> setSlotIndex(index)} className= {`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ?'bg-primary text-white border border-gray-200' :'border border-gray-200'}` }>
<p> {item[0] && dayOfWeek[item[0].dateTime.getDay()]}</p>
<p> {item[0] && item[0].dateTime.getDate()}</p>

     </div>
     ))
   
    }
 </div> 
  {/*--starttime slot 9 am etc  */}  
 <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr] items-center gap-3 w-auto mt-4'>
{timeSlots.length && timeSlots[slotIndex].map( (item,index)=>(
  item.time==="" ? <p className='text-sm'> No Time slots available </p> :
        <p className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime && slotTime!='' ? 'bg-primary text-white' :'bg-green-200 text-gray-900 border-gray-300' }`} key={(index)}
    onClick={()=>setSlotTime(item.time)}> {item.time.toLowerCase()}</p>

))}
 </div>
 <button className='bg-primary text-white text-sm rounded-full py-4 px-14 my-6'> Book an appointment </button>
 </div> 
 {/*--end time slots  */}  
 <div> <ReleatedHandyman HandymanId={HandymanId} Category={handymanInfo.category}/></div>
 </div>
 </div>
 )
}

export default Appointment