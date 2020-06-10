import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer class="flexbox">
        <a class="footer-link" href="/">Advertising</a>
        <a class="footer-link" href="/">Business</a>
        <a class="footer-link" href="/">How Search works</a>
        
        <div class="empty-box"></div>

        <a class="footer-link" href="/">Privacy</a>
        <a class="footer-link" href="/">Terms</a>
        <a class="footer-link" id="setting" href="/">Settings</a>
      </footer>
    );
}

export default Footer;
