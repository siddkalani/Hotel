import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { sidebarActions } from '../../store/slices/siderbarSlice';

const Header = () => {
  const dispatch = useDispatch()
  const handleOpen = () => {
    dispatch(sidebarActions.toggleOpen())
  }

  const [scrollState, setScrollState] = useState({
    isScrolling: false,
    isDarkMode: false
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && window.scrollY <= 100) {
        setScrollState({ isScrolling: true, isDarkMode: false });
      } else if (window.scrollY > 100) {
        setScrollState({ isScrolling: true, isDarkMode: true });
      } else {
        setScrollState({ isScrolling: false, isDarkMode: false });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        ${scrollState.isScrolling ? 'z-[2] fixed w-full p-mobile' : 'z-[2] fixed w-full lg:p-h p-mobile'}
        ${scrollState.isScrolling && !scrollState.isDarkMode ? 'backdrop-blur-md bg-opacity-70' : ''}
        ${scrollState.isDarkMode ? 'bg-[var(--color-light)]' : ''}
        transition-all duration-300
      `}
    >
      <div className='flex items-center bg-transparent justify-between w-full p-nav'>
        <nav className='flex items-center gap-nav'>
          <div className='cheeseburger' onClick={handleOpen}>
            <div class="cheeseburger-inner">
              <div class="bar bg-black"></div>
              <div class="bar bg-black"></div>
              <div class="bar bg-black"></div>
            </div>
          </div>
          <div className='lg:line hidden'></div>
          <ul className={`lg:flex hidden ${scrollState.isDarkMode ? 'text-[var(--color-dark)' : 'text-[var(--color-white)]'}`}>
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
            <img
              src="/images/symbols/logo.svg"
              className={`w-[7em] ${scrollState.isDarkMode ? 'invert' : 'filter-white'}`}
              alt=""
            />
          </picture>
        </div>
        <div>
          <div className={`btn h-[2em] lg:h-[var(--btn-height-small)] ${scrollState.isDarkMode ? 'bg-white text-black' : ''}`}>
            <div className='btn-content'>
              <span className='lg:flex hidden'>Book your stay</span>
              <span className='lg:hidden'>Book</span>
            </div>
          </div>
        </div>
      </div>
      <div className='border-bottom'></div>
    </header>
  )
}

export default Header