import React, {Component} from 'react';
import './SearchForm.css'
import SearchIcon from './SearchIcon/SearchIcon.js';
import MicrophoneIcon from './MicrophoneIcon/MicrophoneIcon.js'
import SubmitBar from './SubmitBar/SubmitBar.js';

import SearchPopup from '../../FloatingPopupBox/SearchPopup/SearchPopup.js';

class SearchForm extends Component {

    state = {
        showPopup: false,
        showShadow: false
    }

    /**
     * if onFocus, then show the popup
     */
    searchTextOnFocusHandler = () => {
        console.log('onFocus');
        
        // TODO: change CSS style
        this.setState({showPopup: true});

        const self = this;
        document.addEventListener("click", function removePopup() {
            // TODO: change CSS style
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

    searchBarMouseoverListener = () => {
        this.setState({showShadow: true});
    }

    searchBarMouseoutListener = () => {
        this.setState({showShadow: false});
    }

    render() {
        const searchBoxShadow = {
            boxShadow: "none",
            borderRadius: "24px",
            borderBottom: "1px solid #dfe1e5"
        }

        const borderTop = {
            borderTop: "none"
        }

        if ( this.state.showPopup ) {
            searchBoxShadow.boxShadow = "0 2px 6px 0 rgba(32,33,36,0.28)";
            // 0 4px 6px 0 rgba(32,33,36,0.28) google bar
            // 0 1px 6px 0 rgba(32,33,36,0.28) vallina bar
            // 0 4px 6px 0 rgba(32,33,36,0.28) google search popup
            // 0 3px 3px 1px rgba(60,64,67,.30) vallina search popup
            // 第一个往右偏移
            // 第二个往下偏移
            // 第三个模糊处理
            // 第四个阴影面积
            searchBoxShadow.borderRadius = "24px 24px 0 0";
            searchBoxShadow.borderBottom ="none";
        }

        if ( !this.state.showPopup && this.state.showShadow ) {
            searchBoxShadow.boxShadow = "0 2px 6px 0 rgba(32,33,36,0.28)";
        }

        return (
            <form className="search-form">
                {/* 怎么改style */}
                <div className="search-bar-wrap flexbox" 
                    style={searchBoxShadow}
                    onMouseOver={this.searchBarMouseoverListener}
                    onMouseOut={this.searchBarMouseoutListener}
                >
                    <SearchIcon/>
                    <input
                        className="searchText"
                        type="text"
                        onFocus={this.searchTextOnFocusHandler}
                        onClick={this.searchTextOnClickHandler}
                    > 
                    </input>
                    <MicrophoneIcon/>
                    {this.state.showPopup && 
                        <SearchPopup
                            borderTop={borderTop}
                        >
                        </SearchPopup>
                    }
                </div>
                <SubmitBar/>
            </form>
        );
    }
}

export default SearchForm;
