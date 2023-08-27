import React, { useState } from "react";
import '../styles/memoryButtons.css';

const MemoryButton = ({click, text, status = 1}) => {
    return(
        <div onClick={click}>
            {status === 1 && <div className="memory-button enabled"><p>{text}</p></div>}
            {status === 2 &&<div className="memory-button disabled"><p>{text}</p></div>}
            {status === 3 && <div className="memory-button memory-button-modal"><p>{text}</p></div>}
        </div>
    );
    
}

export { MemoryButton }; 