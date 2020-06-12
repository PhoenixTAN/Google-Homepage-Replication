import React from 'react';
import './AccountPopup.css';
import profilePng from './account-icons/profile.png';
import AccountInfo from './AccountInfo/AccountInfo';

const AccoutPopup = () => {

    return (
        <div 
            className="account-popup-content" 
            onClick={(event)=>{event.nativeEvent.stopImmediatePropagation()}}
        >
        <div className="profile flexbox">
            <div className="portrait">    
                <img alt="" src={profilePng}/>
                <div className="change-profile-cam flexbox">
                    <a href="/">
                        <svg height="26" viewBox="0 0 24 24" width="18">
                            <path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 14H4V7h16v12zM12 9c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
            <div className="account-name">谭梓琦</div>
            <div className="email">tanziqi1756@outlook.com</div>
            <a className="manage-account" href="/">Manage your Google Account</a>
        </div>

        <span className="line-seperator"></span>

        <div  className="other-accounts" >
            <AccountInfo
                name={"Ziqi Tan"}
                email={"ziqi1756@bu.edu"}
            >
            </AccountInfo>
            <a className="add-another-account flexbox" href="/">
                <svg className="add-account-icon" height="20" viewBox="0 0 24 24" width="20">
                    <path d="M9 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 7c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4zm6 5H3v-.99C3.2 16.29 6.3 15 9 15s5.8 1.29 6 2v1zm3-4v-3h-3V9h3V6h2v3h3v2h-3v3h-2z"></path>
                </svg>
                <div>Add another account</div>
            </a>
        </div>

        <span className="line-seperator"></span>

        <a className="sign-out" href="/">
            Sign out
        </a>

        <span className="line-seperator"></span>

        <footer className="flexbox">
            <a href="/">Privacy Policy</a>
            <span>•</span>
            <a href="/">Terms of Service</a>
        </footer>
        
    </div>
    );
}

export default AccoutPopup;
