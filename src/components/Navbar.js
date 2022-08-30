import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import iconFAMUN from "../Data/iconFAMUN.png";


function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#black' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars-menu'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className='famun-nav'><a href='https://famun.com.br/'style={{textDecoration:"none"}}><h1 className='famun'>FAMUN</h1></a></div>   
        <div><Link>
                < img className='image-famun2' src={iconFAMUN} />
              </Link></div>
        </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar} style={{color:"black"}}>
              <div className='nav-top-items'>
              <Link to='#' className='menu-bars-close'>
                <AiIcons.AiOutlineClose/>
              </Link>
              <Link>
                < img className='image-famun' src={iconFAMUN} />
              </Link>
              <div><h1 className='nav-title'>FAMUN</h1></div>
            </div>
            
            
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
