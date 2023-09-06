import React from "react";

const textSyles = {
    color: 'gray',
    alignSelf: 'center'
}

const myStytes = {
    pointerEvents: 'none'
}

const MemoryButtonDisabled = ({click, text, buttonStyles}) => {
    return(
        <button 
            style={{...buttonStyles, ...myStytes}} 
            onClick={click}
        ><p style={textSyles}>{text}</p>
        </button>
    );
}

export { MemoryButtonDisabled };