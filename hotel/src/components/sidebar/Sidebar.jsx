import React, { useState } from 'react';
import { TfiClose } from "react-icons/tfi";
import { useSelector, useDispatch } from 'react-redux';
import { sidebarActions } from '../../store/slices/siderbarSlice';
import { IoStarSharp } from "react-icons/io5";
import { useEffect } from 'react';
import SideNav from './SideNav';

const ShortLinks = () => (
  <>
  <div className='short-links-container'>
    <div className='short-links-column'>
      <div className='column-title'><span className='eyebrow small'>stay</span></div>
      <ul className='short-links-list'>
        {["Garden villa", "Pool Studio", "Pool villa", "Master Pool Villa"].map((item, index) => (
          <li className='short-link-item' key={index}><a className='short-link' href="#"><span>{item}</span></a></li>
        ))}
      </ul>
    </div>
    <div className='short-links-column'>
      <div className='column-title'><span className='eyebrow small'>discover</span></div>
      <ul className='short-links-list'>
        {["Secret Waterfall", "Dolphins of Lovina", "Diving and Snorkeling"].map((item, index) => (
          <li className='short-link-item' key={index}><a className='short-link' href="#"><span>{item}</span></a></li>
        ))}
      </ul>
    </div>
  </div>
  </>
);

const FooterSidebar = () => (
  <div className='footer-sidebar'>
    <div className='border-custom'></div>
    <div className='star-container'>
      <picture className='star-picture'>
        {Array(6).fill().map((_, index) => (
          <IoStarSharp key={index} color='orange' />
        ))}
      </picture>
    </div>
  </div>
);

const Sidebar = () => {
  const toggle = useSelector((store) => store.sidebar);
  const dispatch = useDispatch();
  
  const handleToggle = () => {
    dispatch(sidebarActions.toggleClose());
  };


  return (
    <>
      {toggle.toggle && (
        <div
          className="overlay"
          onClick={handleToggle}
        ></div>
      )}
      <div className={`${toggle.toggle ? "sidebar" : "sidebar closed"}`}>
        <div className='side-nav h-full flex flex-col overflow-y-auto overflow-x-hidden fixed bg-[var(--color-light)] lg:w-[37%] w-screen'>
          <div className='cross flex-custom-center cursor-pointer absolute' onClick={handleToggle}>
            <div className='cross-btn relative'>
              <div className='cross-bar'></div>
              <div className='cross-bar'></div>
            </div>
          </div>
          <SideNav handleToggle={handleToggle} />
          <ShortLinks />
          {/* <FooterSidebar /> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
