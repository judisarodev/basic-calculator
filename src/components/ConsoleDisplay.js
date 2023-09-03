import React from "react";
import './../styles/display.css';

const ConsoleDisplay = ({text}) => {

    return(
        <div className="display console-display">
            <p>{text}</p>
        </div>
    );
}

export { ConsoleDisplay }; 