import React from "react";

const RowGridButtons = ({children}) => {

    const rowStyles = {
        display: 'flex',
        flexDirection: 'row',
        padding: '0px',
        justifyContent: 'space-around'
    }

    return(
        <div style={rowStyles}>
            {children}
        </div>
    );
}

export { RowGridButtons };