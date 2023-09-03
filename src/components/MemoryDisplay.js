import React from "react";
import './../styles/display.css';

const MemoryDisplay = ({text}) => {
    
    return(
        <div className="display memory-display">
            <p>{text}</p>
        </div>
    );
}

export { MemoryDisplay };