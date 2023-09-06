import React from "react";
import { MemoryButtonEnabled } from "./MemoryButtonEnabled";
import { MemoryButtonDisabled } from "./MemoryButtonDisabled";

const  buttonStyles =  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderRadius: '5px',
    fontSize: '13px',
    height: '30px',
    width: '50px',
    border: '0px',
    backgroundColor : '#1A212B'
}

const MemoryButton = ({click, text, isActive = true}) => {
    return(<>
        {isActive && <MemoryButtonEnabled click={click} text={text} buttonStyles={buttonStyles}/>}
        {!isActive && <MemoryButtonDisabled click={click} text={text}  buttonStyles={buttonStyles}/>}
    </>);
};

export { MemoryButton }; 