import React, {Component} from 'react';
import './SearchForm.css'
import SearchIcon from './SearchIcon/SearchIcon.js';
import MicrophoneIcon from './MicrophoneIcon/MicrophoneIcon.js'
import SubmitBar from './SubmitBar/SubmitBar.js';

import SearchPopup from '../../FloatingPopupBox/SearchPopup/SearchPopup.js';

class SearchForm extends Component {

    state = {
        showPopup: false
    }

    /**
     * if onFocus, then show the popup
     */
    searchTextOnFocusHandler = () => {
        console.log('onFocus');
        
        this.setState({showPopup: true});

        const self = this;
        document.addEventListener("click", function removePopup() {
            self.setState({showPopup: false});
            document.removeEventListener("click", removePopup);
        });
    }

    /**
     * 
     * @param {*} event onClick event
     * Function: stop the event bubbling
     */
    searchTextOnClickHandler = (event) => {
        console.log('onClick');
        event.nativeEvent.stopImmediatePropagation();
    }

    render() {

        return (
            <form className="search-form">
                <div className="search-bar-wrap flexbox">
                    <SearchIcon/>
                    <input
                        className="searchText"
                        type="text"
                        onFocus={this.searchTextOnFocusHandler}
                        onClick={this.searchTextOnClickHandler}
                    > 
                    </input>
                    <MicrophoneIcon/>
                    {this.state.showPopup && <SearchPopup/>}
                </div>
                <SubmitBar/>
            </form>
        );
    }
}

export default SearchForm;
