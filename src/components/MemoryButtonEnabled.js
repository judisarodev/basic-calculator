import React, { useState } from "react";

const MemoryButtonEnabled = ({text, click, buttonStyles}) => {

    const [isHovered, setIsHovered] = useState(false);

    const myStytes = {
        backgroundColor: isHovered ? '#2F3535' : 'transparent'
    }

    const handleHoverActivation = () => {
        setIsHovered(true);
    }

    const handleHoverDiactivation = () => {
        setIsHovered(false);
    }

    return(
        <button 
        style={{...buttonStyles, ...myStytes}} 
        onClick={click}
        onMouseEnter={handleHoverActivation}
        onMouseLeave={handleHoverDiactivation}
        ><p style={{alignSelf:'center'}}>{text}</p></button>
    );
};

export { MemoryButtonEnabled };