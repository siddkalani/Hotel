import React from 'react'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { sidebarActions } from '../../store/slices/siderbarSlice';

const Header = () => {

  const dispatch = useDispatch()
  const handleOpen = () => {
    dispatch(sidebarActions.toggleOpen())
  }
  return (
    <header className='z-[2] fixed w-full p-h '>
      <div className='flex items-center bg-transparent justify-between w-full p-nav'>
        <nav className='flex items-center gap-nav '>
          <div className='cheeseburger' onClick={handleOpen}>
            <div class="cheeseburger-inner">
              <div class="bar"></div>
              <div class="bar"></div>
              <div class="bar"></div>
            </div>
          </div>
          <div className='line'></div>
          <ul className='flex text-[var(--color-white)]'>
            <li className='nav-a'>
              <a href='#' className='flex-custom-center'>
                <span className='nav-span'>Stay</span>
              </a>
            </li>
            <li className='nav-a'>
              <a href='#' className='flex-custom-center'>
                <span className='nav-span'>Dining</span>
              </a>
            </li>
            <li className='nav-a'>
              <a href='#' className='flex-custom-center'>
                <span className='nav-span'>Relax</span>
              </a>
            </li>
            <li className='nav-a'>
              <a href='#' className='flex-custom-center'>
                <span className='nav-span'>Discover</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className='logo'>
          <picture>
            <img src="/images/symbols/logo.svg" className='w-[7em] filter-white' alt="" />
          </picture>
        </div>
        <div>
          <div className='btn'>
            <div className='btn-content'>
              <span>Book your stay</span>
              <span className='hidden'>Book</span>
            </div>
          </div>
        </div>
      </div>
      <div className='border-bottom'></div>
    </header>
  )
}

export default Header