import React, { useState } from "react";
import { MemoryButtonsGrid } from "./MemoryButtonsGrid";
import { Fragment } from "./Fragment";

const ButtonsContainer = () => {
    const [memoryValue, setMemoryValue] = useState();

    return(
        <>
            <MemoryButtonsGrid memoryValue={memoryValue} setMemoryValue={setMemoryValue}/>
            <Fragment memoryValue={memoryValue} setMemoryValue={setMemoryValue}/>
        </>
    );

}

export { ButtonsContainer }; 