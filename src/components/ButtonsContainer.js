import React, { useState } from "react";
import { ButtonsGrid } from '../components/ButtonsGrid';
import { ModalHistory } from '../modals/ModalHistory';


const ButtonsContainer = () => {
    const [showModalHistory, setShowModalHistory] = useState(false);
    const [memoryValue, setMemoryValue] = useState ();

    return(
        <>
            <ButtonsGrid 
                showModalHistory={showModalHistory} 
                setShowModalHistory={setShowModalHistory} 
                memoryValue={memoryValue}
                setMemoryValue={setMemoryValue}
            />

            <ModalHistory 
                showModalHistory={showModalHistory} 
                setShowModalHistory={setShowModalHistory}
                memoryValue={memoryValue}
                setMemoryValue={setMemoryValue}
            />
        </>
    );
}

export { ButtonsContainer }; 