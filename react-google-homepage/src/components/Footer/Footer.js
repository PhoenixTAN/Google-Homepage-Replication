import React, {Component} from 'react';
import './Footer.css'

class Footer extends Component {

  render() {
    return (
      <footer className="flexbox">
        <a href="/">Advertising</a>
        <a href="/">Business</a>
        <a href="/">How Search works</a>
        
        <div className="empty-box"></div>

        <a href="/">Privacy</a>
        <a href="/">Terms</a>
        
        <span onClick={this.props.changeSettingHandler}>Settings</span>
        
      </footer>
    );
  }
    
}

export default Footer;
