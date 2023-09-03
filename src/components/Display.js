import React from "react";
import { MemoryDisplay } from './MemoryDisplay';
import { ConsoleDisplay } from './ConsoleDisplay';
import { ConsoleContext } from './../context/ConsoleContext'

const Display = () => {

    const { myTopConsole, myConsole } = React.useContext(ConsoleContext); 

    return(
        <>
            <MemoryDisplay text={myTopConsole}/>
            <ConsoleDisplay text={myConsole}/>
        </>
    );
}   

export { Display };