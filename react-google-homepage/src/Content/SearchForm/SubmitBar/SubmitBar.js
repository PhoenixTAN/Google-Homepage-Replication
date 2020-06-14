import React from 'react';
import Input from '../Input/Input.js';
import './SubmitBar.css';

const SubmitBar = () => {

    return (
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

    );
}

export default SubmitBar;
