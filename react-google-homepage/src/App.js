import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js'
import Main from './Content/Container/Main.js';

import SettingPopup from './FloatingPopupBox/SettingPopup/SettingPopup.js';
import GoogleAppsPopup from './FloatingPopupBox/GoogleAppsPopup/GoogleAppsPopup.js';
import AccountPopup from './FloatingPopupBox/AccountPopup/AccountPopup.js';

class App extends Component {

  state = {
    settingPopupState: false,
    googleAppsPopupState: false,
    accountPopupState: false
  }

  changeSettingHandler = (event) => {
    const show = this.state.settingPopupState;
    this.setState({settingPopupState: !show});

    // double click the icon can clear the popup window
    event.nativeEvent.stopImmediatePropagation();

    const self = this;
    document.addEventListener("click", function removePopup() {
      self.setState({settingPopupState: false});
      document.removeEventListener("click", removePopup);
    });
  }

  changeGoogleAppsHandler = (event) => {
    const show = this.state.googleAppsPopupState;
    // close other popup
    if ( this.state.accountPopupState ) {
      this.setState({googleAppsPopupState: !show, accountPopupState: false});
    }
    else {
      this.setState({googleAppsPopupState: !show});
    }

    // double click the icon can clear the popup window
    event.nativeEvent.stopImmediatePropagation();
    
    // add event listener for the document
    // click the white area the clear the popup window
    const self = this;  // 这个有没有办法改一下
    document.addEventListener("click", function removePopup() {
      self.setState({googleAppsPopupState: false});
      document.removeEventListener("click", removePopup);
    });
    
  }

  changeAccountProfileHandler = (event) => {
    const show = this.state.accountPopupState;
    // close other popup window
    if ( this.state.googleAppsPopupState ) {
      this.setState({accountPopupState: !show, googleAppsPopupState: false});
    }
    else {
      this.setState({accountPopupState: !show});
    }
    
    // double click the icon can clear the popup window
    event.nativeEvent.stopImmediatePropagation();
    
    // add event listener for the document
    // click the white area the clear the popup window
    const self = this;
    document.addEventListener("click", function removePopup() {
      self.setState({accountPopupState: false});
      document.removeEventListener("click", removePopup);
    });
  }

  render() {
    console.log('App is rendering ...');
    return (
      <div className="App">
        <Header
          changeGoogleAppsHandler={this.changeGoogleAppsHandler}
          changeAccountProfileHandler={this.changeAccountProfileHandler}
        >
        </Header>
        <Main></Main>
        <Footer
          changeSettingHandler={this.changeSettingHandler}
        >
        </Footer>
        {this.state.settingPopupState ? <SettingPopup></SettingPopup> : null}
        {this.state.googleAppsPopupState ? <GoogleAppsPopup></GoogleAppsPopup> : null}
        {this.state.accountPopupState ? <AccountPopup></AccountPopup> : null}
      </div>
    );
  }
}

export default App;
