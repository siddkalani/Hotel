import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/sidebar/Sidebar'

function App() {

  return (
    <div className='w-screen h-screen bg-red-200'>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
