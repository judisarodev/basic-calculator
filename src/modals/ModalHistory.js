import React, {useEffect, useState} from "react";
import { MemoryButton } from "../components/MemoryButton";
import * as memory from '../managers/memoryManager';
import { MyModal } from "./MyModal";
import { ModalItem } from "./ModalItem";

const ModalHistory = ({memoryValue, setMemoryValue, showModalHistory, setShowModalHistory}) => {

    const [enoughtSize, setEnoughtSize] = useState(true);

    const size = {
        isEnought: true
    }

    const handleResize = () => {
        if(window.innerWidth > 580 && window.innerHeight > 580){
            size.isEnought = true;  
            setEnoughtSize(true);
        }else if(size.isEnought === true){
            size.isEnought = false;  
            setEnoughtSize(false);
            alert("Tu dispositivo no tiene las especificaciones necesarias");
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize); 
        }
    }, []);

    return(
        <MyModal openModal={showModalHistory && enoughtSize}
                textNoHistory={"No hay un valor en memoria"}
                showTextNoHistory={typeof memoryValue === 'undefined'}
                body={
                    <ModalHistoryItem memoryValue={memoryValue} 
                    setMemoryValue={setMemoryValue} 
                    setShowModalHistory={setShowModalHistory} 
                    textNoHistory={!memoryValue}/>}
                    show={setShowModalHistory}
        />
    );
}

const ModalHistoryItem = ({memoryValue, setMemoryValue, setShowModalHistory}) => {

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