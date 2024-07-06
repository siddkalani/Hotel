import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'

function App() {

  return (
    <>
    <Header/>
    <Sidebar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
