import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { sidebarActions } from '../../store/slices/siderbarSlice';

const Header = () => {
  const dispatch = useDispatch()
  const [activeItem, setActiveItem] = useState('Stay')
  
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
              <div class={`${scrollState.isDarkMode ? "bar bg-black" : "bar"}`}></div>
              <div class={`${scrollState.isDarkMode ? "bar bg-black" : "bar"}`}></div>
              <div class={`${scrollState.isDarkMode ? "bar bg-black" : "bar"}`}></div>
            </div>
          </div>
          <div className={`lg:line hidden ${scrollState.isDarkMode ? 'bg-[var(--color-border-active)]' : 'bg-[var(--color-border-active-light)]'}`}></div>
          {/* will be mapped from data */}
          <ul className={`lg:flex hidden ${scrollState.isDarkMode ? 'text-[var(--color-dark)]' : 'text-[var(--color-white)]'}`}>
            {['Stay', 'Dining', 'Relax', 'Discover'].map((item, index) => (
              <li key={index} className='nav-a'>
                <a href='#' className='flex-custom-center relative overflow-hidden group'>
                  <span className='nav-span inline-block transition-all duration-300 ease-in-out transform group-hover:-translate-y-full group-hover:opacity-0'>
                    {item}
                  </span>
                  <span className='nav-span absolute top-full left-0 w-full transition-all duration-300 ease-in-out transform group-hover:-translate-y-full'>
                    {item}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className='logo'>
          <picture>
            <img
              src="/images/symbols/logo.svg"
              className={`w-[7em] ${!scrollState.isDarkMode && 'filter-white'}`}
              alt=""
            />
          </picture>
        </div>
        <div>
          <div className={`btn h-[2em] lg:h-[var(--btn-height-small)] ${scrollState.isDarkMode ? 'bg-[var(--color-butterflygreen-900)] text-white' : ''}`}>
            <div className='btn-content'>
              <span className='lg:flex hidden text-white'>Book your stay</span>
              <span className='lg:hidden text-white'>Book</span>
            </div>
          </div>
        </div>
      </div>
      <div className={`${scrollState.isDarkMode ? 'bg-[var(--color-border)] border-bottom' : 'border-bottom'}`}></div>
    </header>
  )
}

export default Header