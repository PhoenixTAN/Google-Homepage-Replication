import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="flexbox">
        <a className="footer-link" href="/">Advertising</a>
        <a className="footer-link" href="/">Business</a>
        <a className="footer-link" href="/">How Search works</a>
        
        <div className="empty-box"></div>

        <a className="footer-link" href="/">Privacy</a>
        <a className="footer-link" href="/">Terms</a>
        <a className="footer-link" id="setting" href="/">Settings</a>
      </footer>
    );
}

export default Footer;
