import React from "react";

import { ButtonsGrid } from '../components/ButtonsGrid';
import { ModalHistory } from '../modals/ModalHistory';
import { ModalEquationHistory } from "../modals/ModalEquationHistory";
import { FragmentContext } from "../context/FragmentContext";

const Fragment = ({memoryValue, setMemoryValue}) => {

    const { fragment, fragments } = React.useContext(FragmentContext);

    switch(fragment){
        case fragments.BTNS_GRID:
            return(          
                <ButtonsGrid memoryValue={memoryValue}/>
            );
        case fragments.MEMORY_HISTORY:
            return(
                <ModalHistory 
                    memoryValue={memoryValue}
                    setMemoryValue={setMemoryValue}
                />
            );
        case fragments.EQUATIONS_HISTORY:
            return(
                <ModalEquationHistory 
                openModal={true} 
                show={true}/>
            );
    }
}

export { Fragment }; 