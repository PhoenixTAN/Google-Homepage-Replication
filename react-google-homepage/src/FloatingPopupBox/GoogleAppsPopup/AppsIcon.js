import React from 'react';

const AppsIcon = (props) => {
    return (
        <a className="app-icon" href="/">
            <img alt="" className="app-icon-image" src={props.source}></img>
            <span className="app-icon-name">{props.name}</span>
        </a>
    );
}

export default AppsIcon;
