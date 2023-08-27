import React from "react";
import './../styles/display.css';

const MemoryDisplay = ({text}) => {

    const [memoryDisplay, setMemoryDisplay] = React.useState(1);
    
    return(
        <div className="display memory-display">
            <p>{text}</p>
        </div>
    );
}

export { MemoryDisplay };