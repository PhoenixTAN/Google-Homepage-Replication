import React from 'react';
import './GoogleAppsPopup.css';
import './AppsIcon.css'
// import icons from './icons.json';
// import Icon from './AppsIcon.js';

import account_icon from "./apps-icons/account-icon.png";
import search_icon from "./apps-icons/search-icon.png";
import maps_icon from "./apps-icons/maps-icon.png";
import youtube_icon from "./apps-icons/youtube-icon.png";
import play_icon from "./apps-icons/play-icon.png";
import news_icon from "./apps-icons/news-icon.png";
import gmail_icon from "./apps-icons/gmail-icon.png";
import contacts_icon from "./apps-icons/contacts-icon.png";
import drive_icon from "./apps-icons/drive-icon.png";
import calendar_icon from "./apps-icons/calendar-icon.png";
import translate_icon from "./apps-icons/translate-icon.png";
import photo_icon from "./apps-icons/photo-icon.png";
import shopping_icon from "./apps-icons/shopping-icon.png";
import duo_icon from "./apps-icons/duo-icon.png";
import meet_icon from "./apps-icons/meet-icon.png";

import finance_icon from "./apps-icons/finance-icon.png";
import docs_icon from "./apps-icons/docs-icon.png";
import sheet_icon from "./apps-icons/sheet-icon.png";
import slide_icon from "./apps-icons/slides-icon.png";
import books_icon from "./apps-icons/books-icon.png";
import blogger_icon from "./apps-icons/blogger-icon.png";
import hangouts_icon from "./apps-icons/hangouts-icon.png";
import keep_icon from "./apps-icons/keep-icon.png";
import jamboard_icon from "./apps-icons/jamboard-icon.png";
import earth_icon from "./apps-icons/earth-icon.png";
import collections_icon from "./apps-icons/collections-icon.png";
import arts_icon from "./apps-icons/arts-icon.png";
   

const GoogleAppsPopup = () => {
    
    // console.log(icons);
    // const appsIcons1 = icons.icons1;
    // const appsIcons2 = icons.icons2;

    return (
        <div className="google-apps-popup flexbox">
            <div className="apps-icon-section flexbox">
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={account_icon}></img>
                    <span className="app-icon-name">Account</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={search_icon}></img>
                    <span className="app-icon-name">Search</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={maps_icon}></img>
                    <span className="app-icon-name">Maps</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={youtube_icon}></img>
                    <span className="app-icon-name">Youtube</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={play_icon}></img>
                    <span className="app-icon-name">Play</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={news_icon}></img>
                    <span className="app-icon-name">News</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={gmail_icon}></img>
                    <span className="app-icon-name">Gmail</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={contacts_icon}></img>
                    <span className="app-icon-name">Contacts</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={drive_icon}></img>
                    <span className="app-icon-name">Drive</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={calendar_icon}></img>
                    <span className="app-icon-name">Calendar</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={translate_icon}></img>
                    <span className="app-icon-name">translate</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={photo_icon}></img>
                    <span className="app-icon-name">Photo</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={shopping_icon}></img>
                    <span className="app-icon-name">Shopping</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={duo_icon}></img>
                    <span className="app-icon-name">Duo</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={meet_icon}></img>
                    <span className="app-icon-name">Meet</span>
                </a>
            </div>
            <hr/>
            <div className="apps-icon-section flexbox">
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={finance_icon}></img>
                    <span className="app-icon-name">Finance</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={docs_icon}></img>
                    <span className="app-icon-name">Docs</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={sheet_icon}></img>
                    <span className="app-icon-name">Sheet</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={slide_icon}></img>
                    <span className="app-icon-name">Slide</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={books_icon}></img>
                    <span className="app-icon-name">Books</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={blogger_icon}></img>
                    <span className="app-icon-name">Blogger</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={hangouts_icon}></img>
                    <span className="app-icon-name">Hangouts</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={keep_icon}></img>
                    <span className="app-icon-name">Keep</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={jamboard_icon}></img>
                    <span className="app-icon-name">Jamboard</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={earth_icon}></img>
                    <span className="app-icon-name">Earth</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={collections_icon}></img>
                    <span className="app-icon-name">Collections</span>
                </a>
                <a className="app-icon" href="/">
                    <img className="app-icon-image" src={arts_icon}></img>
                    <span className="app-icon-name">Arts and Culture</span>
                </a>
            </div>
            <a className="more-from-google" href="/">
                More from Google
            </a>
        </div>
    );
}

export default GoogleAppsPopup;
