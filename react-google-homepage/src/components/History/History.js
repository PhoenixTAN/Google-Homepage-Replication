import './History.css';
import React from 'react';
import SearchIcon from '../SearchIcon/SearchIcon.js';

const History = (props) => {

    return (
        <div className="search-history">
            <SearchIcon></SearchIcon>
            <a href="/">
                {props.text}
            </a>
        </div>
    );
}

export default History;
