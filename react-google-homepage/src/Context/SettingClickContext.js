import React, {useState} from 'react';

export const SettingClickContext = React.createContext({
    isClicked: false,
    changeClickedStatus: () => {}
});

const SettingClickContextProvider = props => {
    console.log('SettingClickContextProvider rendering...');
    const [clicked, setIsClicked] = useState(true);
    
    const clickedHandler = () => {
        setIsClicked(false);
    }

    return (
        <SettingClickContext.Provider
            value={{isClicked: clicked, changeClickedStatus: clickedHandler}}
        >
            {props.children}
        </SettingClickContext.Provider>
    );

}

export default SettingClickContextProvider;
