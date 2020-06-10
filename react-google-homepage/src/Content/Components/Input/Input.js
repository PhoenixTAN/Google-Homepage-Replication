import React, {Component} from 'react';
import classes from './Input.module.css'

class Input extends Component {
    render() {
        return (
            <input 
                className={classes[this.props.class]}
                type={this.props.type}
                value={this.props.value}
            >
            </input>
        );
    }
}

export default Input;
