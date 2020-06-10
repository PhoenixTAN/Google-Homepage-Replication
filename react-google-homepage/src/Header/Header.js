import React from 'react';
import google_apps_logo from '../images/meun-icon.png';
import './Header.css'

const Header = () => {
    return (
      <header className="flexbox">
        <a className="head-left" href="/">About</a>
        <a className="head-left" href="/">Store</a>
        <div className="empty-box"></div>
        <a className="head-right-links" href="/">Gmail</a>
        <a className="head-right-links" href="/">Images</a>
        <img className="head-right-google-apps" 
              id="head-right-google-apps" 
              src={google_apps_logo}>
        </img>
        <button className="head-right-sign-in" id="sign-in">
            Sign in
        </button>
      </header>
    );
}

export default Header;
