import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js'
import Main from './containers/Main/Main.js';
import SettingPopup from './containers/SettingPopup/SettingPopup.js';
import GoogleAppsPopup from './containers/GoogleAppsPopup/GoogleAppsPopup.js';
import AccountPopup from './containers/AccountPopup/AccountPopup.js';

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

    document.addEventListener("click", (function removePopup() {
      this.setState({settingPopupState: false});
      document.removeEventListener("click", removePopup);
    }.bind(this)));
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
    document.addEventListener("click", (function removePopup() {
      this.setState({googleAppsPopupState: false});
      document.removeEventListener("click", removePopup);
    }.bind(this)));
    
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
    document.addEventListener("click", (function removePopup() {
      this.setState({accountPopupState: false});
      document.removeEventListener("click", removePopup);
    }.bind(this)));
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
        <Main/>
        <Footer
          changeSettingHandler={this.changeSettingHandler}
        >
        </Footer>
        {this.state.settingPopupState && <SettingPopup/>}
        {this.state.googleAppsPopupState && <GoogleAppsPopup/> }
        {this.state.accountPopupState && <AccountPopup/>}
      </div>
    );
  }
}

export default App;
