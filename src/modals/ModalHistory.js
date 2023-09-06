import React, {useState} from "react";
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
            <div style={{height: '65px', display: 'flex', flexDirection: 'column', gap: '3px', padding: '3px'}} onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
                <p style={{textAlign: 'right', paddingRight: '5px'}}>{memoryValue}</p>
                {onElement && <div style={{display: 'flex', gap: '3px', alignSelf:'end'}}>
                    <MemoryButton text={"MC"} click={onMc}/> 
                    <MemoryButton text={"+1"} click={onMPlus} /> 
                    <MemoryButton text={"-1"} click={onMMinus} />
                </div>}
            </div>
        </ModalItem>
    );
}

export { ModalHistory }; 