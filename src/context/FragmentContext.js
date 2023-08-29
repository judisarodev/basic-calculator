import React from "react";

const FragmentContext = React.createContext();

const FragmentProvider = ({children}) => {

    const fragments = {
        BTNS_GRID: 1,
        MEMORY_HISTORY: 2,
        EQUATIONS_HISTORY: 3
    }

    const [fragment, setFragment] = React.useState(fragments.BTNS_GRID);
    
    return(
        <FragmentContext.Provider value={{fragment, setFragment, fragments}}>
            {children}
        </FragmentContext.Provider>
    );
}

export { FragmentContext, FragmentProvider };