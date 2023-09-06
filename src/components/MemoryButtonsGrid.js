import React from "react";
import * as memory from '../managers/memoryManager';
import { MemoryButton } from "./MemoryButton";
import { FragmentContext } from "../context/FragmentContext";
import { ConsoleContext } from "../context/ConsoleContext";
import { RowGridButtons } from "./RowGridButtons";

const MemoryButtonsGrid = ({memoryValue, setMemoryValue}) => {

    const { setFragment, fragments } = React.useContext(FragmentContext);
    
    const { myConsole, setMyConsole } = React.useContext(ConsoleContext);

    function checkMemoryValue(){
        if (typeof memoryValue === "undefined") {
            return false;
        }else{
            return true; 
        }
    }

    function onMS(){
        setMemoryValue(memory.save(myConsole));
    }

    function onMPlus(){
        if(typeof memoryValue !== "undefined"){
            setMemoryValue(memory.add(memoryValue, myConsole));    
        }else{
            setMemoryValue(memory.save(myConsole));
        }
    }

    function onMMinus(){
        if(typeof memoryValue !== "undefined"){
            setMemoryValue(memory.substract(memoryValue, myConsole));
        }else{
            setMemoryValue(memory.negative(myConsole));
        }
    }

    function onMC(){
        setMemoryValue(memory.clear());
    }

    function onMR(){
        setMyConsole(memoryValue);
    }

    function onMH(){
        if(typeof memoryValue !== 'undefined'){
            setFragment(fragments.MEMORY_HISTORY);
        }
    }

    return(
        <RowGridButtons>
            <MemoryButton click={onMC} text={"MC"} isActive={checkMemoryValue()}/>
            <MemoryButton click={onMR} text={"MR"} isActive={checkMemoryValue()}/>
            <MemoryButton click={onMPlus} text={"M+"}/> 
            <MemoryButton click={onMMinus} text={"M-"} />
            <MemoryButton click={onMS} text={"MS"}/>
            <MemoryButton click={onMH} text={"Mv"} isActive={checkMemoryValue()}/>
        </RowGridButtons>
    );
}

export { MemoryButtonsGrid }; 