import React, {useContext} from 'react';
import './Footer.css'
import {SettingClickContext} from '../Context/SettingClickContext.js'

const Footer = () => {
    const settingContext = useContext(SettingClickContext);
    console.log('Footer rendering...');
    let status = settingContext.isClicked;
    const settingClickHandler = () => {
      console.log('Setting onClick Handler');
      settingContext.isClicked = !settingContext.isClicked;
      status = settingContext.isClicked;
    }

    return (
      <footer className="flexbox">
        <a href="/">Advertising</a>
        <a href="/">Business</a>
        <a href="/">How Search works</a>
        
        <div className="empty-box"></div>

        <a href="/">Privacy</a>
        <a href="/">Terms</a>
        <SettingClickContext.Provider
          value={{isClicked: status}}
        >
          <a href="/" onClick={settingClickHandler}>Settings</a>
        </SettingClickContext.Provider>
      </footer>
    );
}

export default Footer;
