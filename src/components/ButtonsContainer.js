import React, { useState } from "react";
import { ButtonsGrid } from '../components/ButtonsGrid';
import { ModalHistory } from '../modals/ModalHistory';
import { ModalEquationHistory } from "../modals/ModalEquationHistory";
import { FragmentContext } from "../context/FragmentContext";

const ButtonsContainer = () => {
    const [showModalHistory, setShowModalHistory] = useState(false);
    const [memoryValue, setMemoryValue] = useState ();

    const { fragment, fragments } = React.useContext(FragmentContext);

    if(fragment === fragments.BTNS_GRID){
        return(
            <ButtonsGrid 
                showModalHistory={showModalHistory} 
                setShowModalHistory={setShowModalHistory} 
                memoryValue={memoryValue}
                setMemoryValue={setMemoryValue}
            />
        );
    }else if(fragment === fragments.MEMORY_HISTORY){
        return(
            <ModalHistory 
                showModalHistory={showModalHistory} 
                setShowModalHistory={setShowModalHistory}
                memoryValue={memoryValue}
                setMemoryValue={setMemoryValue}
            />
        );
    }else if(fragment === fragments.EQUATIONS_HISTORY){
        return(
            <ModalEquationHistory 
                openModal={true} 
                show={true}/>
        );
    }
}

export { ButtonsContainer }; 