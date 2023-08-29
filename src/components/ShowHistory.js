import React, { useState } from "react";
import './../styles/menu.css';
import { FragmentContext } from "../context/FragmentContext";

const ShowHistory = () => {

    const { setFragment, fragments } = React.useContext(FragmentContext);

    const toggle = () => {
        setFragment(fragments.EQUATIONS_HISTORY);
    }
    
    return(
        <div style={{padding: '5px'}}>
            <p className='text-size-sm'>Calculadora Básica</p>
            <p className="menu-text" onClick={toggle}>Historial</p>
        </div>
    );
}
export { ShowHistory };