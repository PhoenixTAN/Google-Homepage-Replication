import React from 'react';
import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js'
import Main from './Content/Container/Main.js';
import SearchForm from './Content/SearchForm/SearchForm.js'
import googleLogo from './images/googlelogo.png';
import SettingPopup from './FloatingPopupBox/SettingPopup/SettingPopup.js';
import GoogleAppsPopup from './FloatingPopupBox/GoogleAppsPopup/GoogleAppsPopup.js';
import AccountPopup from './FloatingPopupBox/AccountPopup/AccountPopup.js';


const App = () => {

  console.log('App is rendering...');
  return (
    <div className="App">
      <Header/>
      <Main>
        <img alt="google-logo" className="google-logo" src={googleLogo}></img>
        <SearchForm/>
      </Main>

      <Footer/>

      <SettingPopup></SettingPopup>

      <GoogleAppsPopup></GoogleAppsPopup>
      <AccountPopup></AccountPopup>
    </div>
  );
}

export default App;
