import React from "react";
import './../styles/display.css';

const ConsoleDisplay = ({text}) => {

    const [consoleDisplay, setConsoleDisplay] = React.useState(0);

    return(
        <div className="display console-display">
            <p>{text}</p>
        </div>
    );
}

export { ConsoleDisplay }; 