import React, { useState } from "react";
import { FragmentContext } from "../context/FragmentContext";
import './../styles/menu.css';

const ShowHistory = () => {
    
    const { setFragment, fragments } = React.useContext(FragmentContext);
    
    const toggle = () => {
        setFragment(fragments.EQUATIONS_HISTORY);
    }
    
    return(
        <div style={{padding: '10px 10px 20px 0px'}}>
            <p className="menu-text" onClick={toggle}>Historial</p>
        </div>
    );
}
export { ShowHistory };