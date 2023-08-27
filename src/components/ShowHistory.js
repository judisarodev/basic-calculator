import React, { useState } from "react";
import './../styles/menu.css';
import { ModalEquationHistory } from "../modals/ModalEquationHistory";
const ShowHistory = () => {
    const [showEquations, setShowEquations] = useState(false); 

    const toggle = () => {
        setShowEquations(!showEquations);
    }
    
    return(
        <div>
            <p className="menu-text" onClick={toggle}>Historial</p>
            <ModalEquationHistory 
                openModal={showEquations} 
                body={"body"} 
                show={toggle}/>
        </div>
    );
}
export { ShowHistory };