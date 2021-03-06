import './SearchPopup.css';
import React from 'react';
import SubmitBar from '../../components/SubmitBar/SubmitBar.js';
import history from './history.json';
import History from '../../components/History/History.js';

const SearchPopup = (props) => {

    return (
        <div 
            className="search-popup-content" 
            style={props.borderTop}
            onClick={(event) => {
                event.nativeEvent.stopImmediatePropagation();
            }}
        >
            <div style={
                    {
                        borderTop: "1px solid #e8eaed",
                        margin: "0 20px 0 14px",
                        paddingBottom: "4px",
                    }
                }
            >
            </div>
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
