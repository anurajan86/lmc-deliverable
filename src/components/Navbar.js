import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdFingerprint } from 'react-icons/md';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return {
    //   window.removeEventListener('resize', showButton)
    }
  }, []);


  return (
    <>
      <IconContext.Provider value={{ color: '#7DE446' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <TiWeatherPartlySunny className='navbar-icon' />
              LMC Deliverable
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/about'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/projects'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Projects
                </Link>
              </li>
              <li className='nav-btn'>
                {button ? (
                  <Link to='/learn-more' className='btn-link'>
                    <Button buttonStyle='btn--outline'>Learn More</Button>
                  </Link>
                ) : (
                  <Link to='/learn-more' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={closeMobileMenu}
                    >
                      Learn More
                    </Button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;