import './SearchPopup.css';
import React from 'react';
import SubmitBar from '../../Content/SearchForm/SubmitBar/SubmitBar.js';
import history from './history.json';
import History from './History/History.js';

const SearchPopup = () => {

    return (
        <div 
            className="search-popup-content" 
            onClick={(event) => {
                event.nativeEvent.stopImmediatePropagation();
            }}
        >
            <div className="try-searching-for">
                Try searching for
            </div>
            {
                history.history.map( (element, index) => {
                    return (
                        <History
                            key={index}
                            text = {element}
                        >
                        </History>
                    );
                })
            }
            <SubmitBar></SubmitBar>
            <a className="report-inappropriate-predictions" href="/">
                Report inappropriate predictions
            </a>
        </div>
    );
}

export default SearchPopup;
