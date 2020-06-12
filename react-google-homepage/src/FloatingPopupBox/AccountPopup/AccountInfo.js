import React, {Component} from 'react';
import namePng from './account-icons/ziqi.png';

class AccountInfo extends Component {
    // 这个用functional component怎么解决
    // hook什么时候re-render
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            signInRemovePopupStyle: {display: "none"},
            arrowStyle: {transform: "none"}
        }
    }

    accountRef = React.createRef(null);

    accountClickHandler = () => {
        if ( this.state.show ) {
            this.accountRef.current.style.backgroundColor = "#fff";
            this.accountRef.current.addEventListener("mouseover", this.addBackgroundToAccount);
            this.accountRef.current.addEventListener("mouseout", this.removeBackgroundToAccount);
            this.setState({
                show: false,
                signInRemovePopupStyle: {display: "none"},
                arrowStyle: {transform: "none"}
            });
        }
        else {
            console.log('Here');
            this.accountRef.current.style.backgroundColor = "#f7f8f8";
            this.accountRef.current.removeEventListener("mouseover", this.addBackgroundToAccount);
            this.accountRef.current.removeEventListener("mouseout", this.removeBackgroundToAccount);
            this.setState({
                show: true,
                signInRemovePopupStyle: {display: "flex"},
                arrowStyle: {transform: "rotate(0.5turn)"}
            });
        }
    }

    addBackgroundToAccount = () => {
        this.accountRef.current.style.backgroundColor = "#f7f8f8";
    }

    removeBackgroundToAccount = () => {
        this.accountRef.current.style.backgroundColor = "#fff";
    }
    render() {
        // console.log("AccountInfo rendering...");
        return (
            <div className="account flexbox" ref={this.accountRef} onClick={this.accountClickHandler}>
                <img alt="" src={namePng}/>
                <div className="account-info">
                    <div className="first-row flexbox">
                        <div>{this.props.name}</div>
                        <div>Signed out</div>
                    </div>
                    <div className="second-row flexbox">
                        <span>{this.props.email}</span>
                        <div className="arrow" style={this.state.arrowStyle}>
                            <svg height="20" viewBox="0 0 20 20" width="20">
                                <path d="M0 0h20v20H0V0z" fill="none"></path>
                                <path d="M6.18 7L10 10.82 13.82 7 15 8.17l-5 5-5-5z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="third-row" style={this.state.signInRemovePopupStyle}>
                        <a href="/">
                            Sign in
                        </a>
                        <button>
                            Remove
                        </button>
                    </div>       
                </div>
            </div>
        );
    }
    
}

export default AccountInfo;
