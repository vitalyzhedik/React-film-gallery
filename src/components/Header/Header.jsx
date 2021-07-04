import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = (props) => {
  
  let textButton = 'Sign In/Sign Up';

  return (
    <header className="header">
      <div className="header-content">
        <NavLink className="header-content__home-link" to="/">
          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 254.182 254.182" styleName="enable-background:new 0 0 254.182 254.182;">
            <path d="M211.655,137.102c-4.143,0-7.5,3.358-7.5,7.5v77.064h-41.373v-77.064c0-4.142-3.357-7.5-7.5-7.5H98.903
            c-4.143,0-7.5,3.358-7.5,7.5v77.064H50.026v-77.064c0-4.142-3.357-7.5-7.5-7.5c-4.143,0-7.5,3.358-7.5,7.5v84.564
            c0,4.142,3.357,7.5,7.5,7.5h56.377h56.379h56.373c4.143,0,7.5-3.358,7.5-7.5v-84.564
            C219.155,140.46,215.797,137.102,211.655,137.102z M106.403,221.666v-69.564h41.379v69.564H106.403z"/>
            <path d="M251.985,139.298L132.389,19.712c-2.928-2.929-7.677-2.928-10.607,0L2.197,139.298c-2.929,2.929-2.929,7.678,0,10.606
            c2.93,2.929,7.678,2.929,10.607,0L127.086,35.622l114.293,114.283c1.464,1.464,3.384,2.196,5.303,2.196
            c1.919,0,3.839-0.732,5.304-2.197C254.914,146.976,254.914,142.227,251.985,139.298z"/>
          </svg>
        </NavLink>
        <p className="header-content__username">
        </p>
        {/* <button 
        type="button" 
        className="header-content__sign-button"
        onClick={onSignClick}
        >
          Sign In/Sign Up
      </button> */}
        <NavLink 
        to="/Registration"
        className="header-content__sign-button">
          {textButton}
      </NavLink>
      </div>
    </header >
  )
};

export default Header;
Header.displayName = "Header";