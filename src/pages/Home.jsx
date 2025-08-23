import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Sale from '../components/Sale'
import Icone from '../components/Icone'
import Offers from '../components/Offers'
import Footer from '../components/Footer'
import NewArrivals from '../components/NewArrivals'


function Home() {
  return (
    <>
    <Navbar/>
    <Header/>
    <Banner/>
    <Icone/>
    <Sale/>
    <NewArrivals/>
    <Offers/>
    <Footer/>
    </>
  )
}

export default Home