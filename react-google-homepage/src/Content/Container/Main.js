import React from 'react';
import './Main.css'
import SearchForm from '../SearchForm/SearchForm.js'
import googleLogo from './googlelogo.png';

const Main = (props) => {
    console.log('Main is rendering...');
    return (
        <main className="container">
            <img alt="google-logo" className="google-logo" src={googleLogo}></img>
            <SearchForm/>
        </main>
    );
}

export default React.memo(Main);
