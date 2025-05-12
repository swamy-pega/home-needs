import React from 'react'
import Header from '../components/Header'
import CategoryMenu from '../components/CategoryMenu'
import TopHandyManList from '../components/TopHandyManList'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
   <Header/>
<CategoryMenu/>
<TopHandyManList/>
<Banner/>
<Footer/>
    </div>
  )
}

export default Home