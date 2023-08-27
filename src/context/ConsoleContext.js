import React, { memo } from "react";

export const ConsoleContext = React.createContext(); 

const ConsoleProvider = ({children}) => {
    
    const [myConsole, setMyConsole] = React.useState("0");
    const [myTopConsole, setMyTopConsole] = React.useState("");

    return(
        <ConsoleContext.Provider value={{myConsole, myTopConsole, setMyConsole, setMyTopConsole}}>
            {children}
        </ConsoleContext.Provider>
    );
}

export { ConsoleProvider }; 