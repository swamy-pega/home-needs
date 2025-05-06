//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { Routes,Route } from 'react-router-dom'
//import './App.css'
import Home from './pages/Home'
import Handyman from './pages/Handyman'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'

function App() {
  

  return (
    
   
     <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
  <Route path='/Home' element= {<Home/>}/>
  <Route path='/Handyman' element={<Handyman/>}/>
  <Route path='/Handyman/:Category' elenent={<Handyman/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/my-profile' eleement={<MyProfile/>}/>
  <Route path='/my-appointments' element={<MyAppointments/>}/>
  <Route path='/appointment/:HandymanId' element={<Appointment/>}/>

</Routes>
      
     </div>
  )
}

export default App
