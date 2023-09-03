import React from "react";

import { ButtonsGrid } from '../components/ButtonsGrid';
import { ModalHistory } from '../modals/ModalHistory';
import { ModalEquationHistory } from "../modals/ModalEquationHistory";
import { FragmentContext } from "../context/FragmentContext";

const Fragment = ({memoryValue, setMemoryValue}) => {

    const { fragment, fragments } = React.useContext(FragmentContext);
    const [showModalHistory, setShowModalHistory] = React.useState(false);

    switch(fragment){
        case fragments.BTNS_GRID:
            return(          
                <ButtonsGrid 
                    showModalHistory={showModalHistory} 
                    setShowModalHistory={setShowModalHistory} 
                    memoryValue={memoryValue}
                    setMemoryValue={setMemoryValue}
                />
            );
        case fragments.EQUATIONS_HISTORY:
            return(
                <ModalHistory 
                    showModalHistory={showModalHistory} 
                    setShowModalHistory={setShowModalHistory}
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