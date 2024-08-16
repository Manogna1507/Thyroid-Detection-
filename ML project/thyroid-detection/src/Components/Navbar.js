import React, { useState, useEffect } from 'react';
import { Link , useLocation} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const user = true;
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const location = useLocation();

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
  }, []);

  useEffect(() => {
    window.addEventListener('resize', showButton);
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/home' className='navbar-logo' onClick={closeMobileMenu}>
            Thyroid Detection
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/symptoms' className='nav-links' onClick={closeMobileMenu}>
                Symptoms
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/tests' className='nav-links' onClick={closeMobileMenu}>
                Tests
              </Link>
            </li>
            <li>
              <Link to='/register' className='nav-links' onClick={closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
          </div>
      </nav>
    </>
  );
}

export default Navbar;
