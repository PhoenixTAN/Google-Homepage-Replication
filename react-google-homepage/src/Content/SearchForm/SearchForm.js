import React, {Component} from 'react';
import './SearchForm.css'
import SearchIcon from './SearchIcon/SearchIcon.js';
import Input from './Input/Input.js';
import MicrophoneIcon from './MicrophoneIcon/MicrophoneIcon.js'

class SearchForm extends Component {

    render() {
        return (
            <form className="search-form">
                <div className="search-bar-wrap flexbox">
                    <SearchIcon/>
                    <Input
                        class="searchText"
                        type="text"
                    > 
                    </Input>
                    <MicrophoneIcon/>
                </div>
                <div className="submitbar-wrap flexbox"> 
                    <Input
                        class="google-search-btn" 
                        type="submit" 
                        value="Google Search"
                    >
                    </Input>    
                    <Input
                        class="lucky-btn" 
                        type="submit" 
                        value="I'm Feeling Lucky"
                    >
                    </Input>
                </div>
            </form>
        );
    }
}

export default SearchForm;
