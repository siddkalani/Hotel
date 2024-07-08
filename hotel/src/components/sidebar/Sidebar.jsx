import React, { useState } from 'react'
import { TfiClose } from "react-icons/tfi";
import {useSelector, useDispatch} from 'react-redux'
import { sidebarActions } from '../../store/slices/siderbarSlice';

const Sidebar = () => {
  const toggle = useSelector((store)=>store.sidebar)
  const dispatch = useDispatch()
  console.log(toggle.toggle)
  const handleToggle = () =>{
    dispatch(sidebarActions.toggleClose())
    console.log(toggle)
  }
  return (
    <>
      {toggle.toggle && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-20"
          onClick={handleToggle}
        ></div>
      )}
    <div className={`${toggle.toggle ? "sidebar h-full fixed left-0 z-[30]":"side-bar-close"}`}>
      <div className='side-nav'>
        <div onClick={handleToggle} className='cross'>
          <div className='bar'></div>
          <div className='bar'></div>
        </div>
        <div className='flex w-full pt-[8vh] p-sidebar'>
          <nav className='w-full flex flex-col'>
            <div className='pb-[1em]'><span className='eyebrow small'>Menu</span></div>
            <ul className='flex flex-col w-full'>
              <li className='flex w-full'>
                <a href="#" className='flex p-[0.25em 0] w-full '>
                  <div>
                    <span className='side-nav-link'>Stay</span>
                  </div>
                </a>
              </li>
              <li className='flex w-full'>
                <a href="#" className='flex p-[0.25em 0] w-full '>
                  <div>
                    <span className='side-nav-link'>Relax</span>
                  </div>
                </a>
              </li>
              <li className='flex w-full'>
                <a href="#" className='flex p-[0.25em 0] w-full '>
                  <div>
                    <span className='side-nav-link'>Dining</span>
                  </div>
                </a>
              </li>
              <li className='flex w-full'>
                <a href="#" className='flex p-[0.25em 0] w-full '>
                  <div>
                    <span className='side-nav-link'>Discover</span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className='flex w-full row-links-secondary'>
        <div className='border-custom'></div>
        </div>
        <div></div>
      </div>
    </div>
    </>
  )
}

export default Sidebar