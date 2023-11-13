import React from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'

const layout = () => {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/> 
    </>
  )
}

export default layout