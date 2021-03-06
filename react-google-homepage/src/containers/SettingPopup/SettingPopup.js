import React from 'react';
import './SettingPopup.css';

const SettingPopup = () => {
    return (
        <div className="setting-floating-popup" 
            onClick={(event)=>{event.nativeEvent.stopImmediatePropagation()}} 
        >
            <a href="/">Search settings</a>
            <a href="/">Advanced search</a>
            <a href="/">Your data in Search</a>
            <a href="/">History</a>
            <a href="/">Search help</a>
            <a href="/">Send feedback</a>
        </div>
    );
}

export default SettingPopup;
