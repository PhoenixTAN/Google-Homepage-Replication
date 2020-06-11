import React, {Component} from 'react';
import './SettingPopup.css';

class SettingPopup extends Component {
    /*state = {
        show: false
    }

    componentDidMount() {
        document.addEventListener('click', event => {
            this.setState({
                show: false
            })
        });
        console.log('SettingPopup did mount...');
    }*/

    render() {
        return (
            <div className="setting-floating-popup" id="setting-floating-popup">
                <a href="/">Search settings</a>
                <a href="/">Advanced search</a>
                <a href="/">Your data in Search</a>
                <a href="/">History</a>
                <a href="/">Search help</a>
                <a href="/">Send feedback</a>
            </div>   
        );
    }
}

export default React.memo(SettingPopup);
