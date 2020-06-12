import React from 'react';
import './GoogleAppsPopup.css';
import './AppsIcon.css'
import {icons1, icons2} from './icons.js';
import Icon from './AppsIcon.js';


const GoogleAppsPopup = () => {
    
    return (
        <div className="google-apps-popup flexbox"
            onClick={(event)=>{event.nativeEvent.stopImmediatePropagation()}}
        >
            <div className="apps-icon-section flexbox">
                {                 
                    icons1.map( ({name, image}) => {
                        return (
                            <Icon
                                key={name}
                                name={name}
                                source={image}
                            >
                            </Icon>);
                    })
                }           
            </div>
            <hr/>
            <div className="apps-icon-section flexbox">
                {
                    icons2.map( ({name, image}) => {
                        return (
                            <Icon
                                key={name}
                                name={name}
                                source={image}
                            >
                            </Icon>);
                    })
                }
            </div>
            <a className="more-from-google" href="/">
                More from Google
            </a>
        </div>
    );
}

export default GoogleAppsPopup;
