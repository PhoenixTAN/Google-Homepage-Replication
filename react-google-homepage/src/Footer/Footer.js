import React from 'react';
import './Footer.css'

const Footer = () => {

    const settingClickHandler = () => {
      const settingPopup = document.getElementById("setting-floating-popup");
      settingPopup.style.display = "block";
    }

    return (
      <footer className="flexbox">
        <a href="/">Advertising</a>
        <a href="/">Business</a>
        <a href="/">How Search works</a>
        
        <div className="empty-box"></div>

        <a href="/">Privacy</a>
        <a href="/">Terms</a>
        
        <a href="/" onClick={settingClickHandler}>Settings</a>
        
      </footer>
    );
}

export default Footer;
