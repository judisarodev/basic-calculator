import React, {useEffect, useState} from "react";
import { MemoryButton } from "../components/MemoryButton";
import * as memory from '../managers/memoryManager';
import { MyModal } from "./MyModal";
import { ModalItem } from "./ModalItem";

const ModalHistory = ({memoryValue, setMemoryValue}) => {
    return(
        <MyModal
                textNoHistory={"No hay un valor en memoria"}
                showTextNoHistory={typeof memoryValue === 'undefined'}
                body={
                    <ModalHistoryItem 
                        memoryValue={memoryValue} 
                        setMemoryValue={setMemoryValue} 
                    />
                }
        />
    );
}

const ModalHistoryItem = ({memoryValue, setMemoryValue}) => {

    const [onElement, setOnElement] = useState(false);

    const onMc = () => {
        setMemoryValue(memory.clear());
    }

    const onMPlus = () => {
        setMemoryValue(memory.add(memoryValue, 1));
    }

    const onMMinus = () => {
        setMemoryValue(memory.substract(memoryValue, 1));
    }

    const handleOnMouseEnter = () => {
        setOnElement(true);
    }
    
    
    const handleOnMouseLeave = () => {
        setOnElement(false);
    }

    return (
        <ModalItem>
            <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                <p style={{textAlign: 'right', paddingRight: '5px'}}>{memoryValue}</p>
                {onElement && <div className="container-memory-buttons-modal">
                    <MemoryButton text={"MC"} status={3} click={onMc}/> 
                    <MemoryButton text={"M+"} status={3} click={onMPlus} /> 
                    <MemoryButton text={"M-"} status={3} click={onMMinus} />
                </div>}
            </div>
        </ModalItem>
    );
}

export { ModalHistory }; 