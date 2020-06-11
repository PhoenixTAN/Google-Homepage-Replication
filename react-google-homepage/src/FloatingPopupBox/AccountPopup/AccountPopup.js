import React from 'react';
import './AccountPopup.css';
import profilePng from './account-icons/profile.png';
import namePng from './account-icons/ziqi.png';

const AccoutPopup = () => {
    return (

        <div className="account-popup-content" id="account-profile">
        <div className="profile flexbox">
            <div className="portrait">    
                <img src={profilePng}/>
                
                <div className="change-profile-cam flexbox">
                    
                    <a href="/">
                        <svg enable-background="new 0 0 24 24" height="26" viewBox="0 0 24 24" width="18">
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

        <div className="other-accounts">
            <div className="account flexbox" id="account">
                <img src={namePng}/>
                <div className="account-info">
                    <div className="first-row flexbox">
                        <div>Ziqi Tan</div>
                        <div>Signed out</div>
                    </div>
                    <div className="second-row flexbox">
                        <span>ziqi1756@bu.edu</span>
                        <div className="arrow" id="arrow-popup">
                            <svg height="20" viewBox="0 0 20 20" width="20">
                                <path d="M0 0h20v20H0V0z" fill="none"></path>
                                <path d="M6.18 7L10 10.82 13.82 7 15 8.17l-5 5-5-5z"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="third-row" id="sign-in-remove-popup">
                        <a href="/">
                            Sign in
                        </a>
                        <button>
                            Remove
                        </button>
                    </div>       
                </div>
            </div>

            <a className="add-another-account flexbox">
                <svg className="add-account-icon" enable-background="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20">
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
