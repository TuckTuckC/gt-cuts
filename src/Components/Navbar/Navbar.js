import React from 'react';

import logo from '../../images/Logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging, faPaperPlane, faFolderClosed, faInfo } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

import './Navbar.css';

function Navigation() {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        <li className='nav-list'>
          <a className="nav-link" href="/">
            <img src={logo} className='nav-icon' alt="logo" />
            <span className='link-text'>GT Streamlined</span>
          </a>
        </li>
        <li className='nav-list'>
          <a className='nav-link' href="/">
            <FontAwesomeIcon className='nav-icon' icon={faInfo} />
            <span className='link-text'>About</span>
          </a>
        </li>
        <li className='nav-list'>
          <a className="nav-link" href="/">
            <FontAwesomeIcon className='nav-icon' icon={faFolderClosed} />
            <span className='link-text'>Portfolio</span>
          </a>
        </li>
        <li className='nav-list'>
          <a className="nav-link" href="/">
            <FontAwesomeIcon className='nav-icon' icon={faPersonDigging} />
            <span className='link-text'>Services</span>
          </a>
        </li>
        <li className='nav-list'>
          <a className="nav-link" href="/">
            <FontAwesomeIcon className='nav-icon' icon={faPaperPlane} />
            <span className='link-text'>Contact</span>
          </a>
        </li>
      </ul>
    </nav>


  );
};

export default Navigation;