import React, { useState } from "react";

const Button = ({colors, click, value}) => {

    const [active, setActive] = useState(false);

    const buttonStyles = {
        backgroundColor: active? colors.standard : colors.active,
        ':hover': {
            backgroundColor: colors.hover,
        },
        border: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '51px',
        width: 'auto',
        borderRadius: '5px',
        margin: '1px', 
        fontSize: '15px'
    }

    const activate = () =>{
        setActive(true)
    }

    const deactivate = () =>{
        setActive(false)
    }

    return (
        <button className="col button equals-button" 
                onClick={click} 
                style={buttonStyles}
                onMouseDown={activate}
                onMouseUp={deactivate}
        >{value}</button>);
}

export { Button };