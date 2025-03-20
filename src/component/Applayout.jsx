import React from 'react'
import Header from './Page/Header'
import Footer from './Page/Footer'
import { Outlet } from 'react-router-dom'

function Applayout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer/>
    </>
  )
}

export default Applayout;