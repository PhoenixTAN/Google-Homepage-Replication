import React from 'react';
import google_apps_logo from '../../assets/icons/meun-icon.png';
import './Header.scss'

const Header = (props) => {
    return (
      <header className="flexbox">
        <a className="head-left" href="/">About</a>
        <a className="head-left" href="/">Store</a>
        <div className="empty-box"></div>
        <a className="head-right-links" href="/">Gmail</a>
        <a className="head-right-links" href="/">Images</a>
        <img alt="" 
             className="head-right-google-apps" 
             src={google_apps_logo}
             onClick={props.changeGoogleAppsHandler}
        >
        </img>
        <button 
          className="head-right-sign-in" 
          onClick={props.changeAccountProfileHandler}
        >
            Sign in
        </button>
      </header>
    );
}

export default Header;
