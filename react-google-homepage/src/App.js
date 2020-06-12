import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js'
import Main from './Content/Container/Main.js';
import SearchForm from './Content/SearchForm/SearchForm.js'
import googleLogo from './images/googlelogo.png';
import SettingPopup from './FloatingPopupBox/SettingPopup/SettingPopup.js';
import GoogleAppsPopup from './FloatingPopupBox/GoogleAppsPopup/GoogleAppsPopup.js';
import AccountPopup from './FloatingPopupBox/AccountPopup/AccountPopup.js';

class App extends Component {

  state = {
      settingPopupState: false
  }

  changeSettingHandler = () => {
    console.log("onClick!");
    const show = this.state.settingPopupState;
    this.setState({settingPopupState: !show});
  }

  render() {
    console.log('App is rendering ...');
    console.log(this.state.settingPopupState);
    return (
      <div className="App">
        <Header/>
        <Main>
          <img alt="google-logo" className="google-logo" src={googleLogo}></img>
          <SearchForm/>
        </Main>
        <button onClick={this.changeSettingHandler}>Show Setting Popup</button>
        <Footer
          changeSettingHandler={this.changeSettingHandler}
        >
        </Footer>
        {this.state.settingPopupState ? <SettingPopup></SettingPopup> : null}
        <GoogleAppsPopup></GoogleAppsPopup>
        <AccountPopup></AccountPopup>
      </div>
    );
  }
}

export default App;
