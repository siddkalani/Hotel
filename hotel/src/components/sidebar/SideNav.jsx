import React from 'react'

const SideNav = () => {
  return (
    <div className='side-nav-content'>
      <nav className='nav-menu'>
        <div className='menu-title'><span className='eyebrow small'>Menu</span></div>
        <ul className='menu-list'>
          {["Stay", "Relax", "Dining", "Discover"].map((item, index) => (
            <li className='menu-item' key={index}>
              <a href="#" className='menu-link'>
                <span className='side-nav-link'>{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
};

export default SideNav