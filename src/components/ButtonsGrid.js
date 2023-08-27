import React, {memo, useEffect, useState} from "react";
import '../styles/buttons.css'
import { Button } from "./Button";
import { ConsoleContext } from '../context/ConsoleContext'; 
import {setUpFirstValue, 
        setUpSecondValue, 
        setUpOperation, 
        setUpResult, 
        getPos, 
        isEmpty, 
        getFirstValue, 
        getSecondValue, 
        getOperation, 
        getResult,
        getArr, 
        delArr,
        changeSign, 
        valAbs} from "../managers/operationsManager";
import * as memory from '../managers/memoryManager';
import { MemoryButton } from "./MemoryButton";

const ButtonsGrid = ({showModalHistory, setShowModalHistory, memoryValue, setMemoryValue}) => {

    const { myConsole, setMyConsole, setMyTopConsole } = React.useContext(ConsoleContext);

    function setUpValues(value, replace) {
        if(getOperation()){
            setUpSecondValue(value, replace);
            setMyConsole(getSecondValue()); 
        }else{
            setUpFirstValue(value, replace);
            setMyConsole(getFirstValue()); 
        }
    }

    function onNumber(e){
        const value = e.target.textContent;
        setUpValues(value, false);
    }
    
    function onOperation(e){
        const value = e.target.textContent;

        const isExpo = setUpOperation(value); 
        
        setMyTopConsole(getFirstValue() + value);
        setMyConsole(getFirstValue());

        if(isExpo){
            onEquals(); 
            console.log(getArr());
            setUpFirstValue(getResult(getPos()-1, true));
        }
        
    }

    function onEquals(){
        setUpResult();
        const prevPos = getPos() -1; 
        setMyTopConsole(getFirstValue(prevPos) + getOperation(prevPos) + getSecondValue(prevPos) + "=");
        setMyConsole(getResult(prevPos));
    }

    function onDel(){
        if(isEmpty(getOperation())){
            setUpFirstValue(getFirstValue().slice(0, -1), true);
            setMyConsole(getFirstValue());
        }else{
            setUpSecondValue(getSecondValue().slice(0, -1), true);
            setMyConsole(getSecondValue());
        }
    }

    function onC(){
        setUpFirstValue("", true);
        setUpSecondValue("", true);
        setUpOperation("", true);
        setMyConsole("");
        setMyTopConsole("");
    }

    function onCE(){
        delArr();    
    }

    function onChangeSign(){
        const value = changeSign(myConsole);
        setUpValues(value, true);
    }

    function getValAbs(){
        const value = valAbs(myConsole);
        setUpValues(value, true);
    }

    function checkMemoryValue(){
        if (typeof memoryValue === "undefined") {
            return 2;
        }else{
            return 1; 
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
        console.log(memoryValue);
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
        setShowModalHistory(!showModalHistory);
    }

    return(
        <div>
            <div className="row col-style">
                <div className="col">
                    <MemoryButton click={onMC} text={"MC"} status={checkMemoryValue()}/>
                </div>
                <div className="col">
                    <MemoryButton click={onMR} text={"MR"} status={checkMemoryValue()}/>
                </div>
                <div className="col">
                    <MemoryButton click={onMPlus} text={"M+"} /> 
                </div>
                <div className="col">
                    <MemoryButton click={onMMinus} text={"M-"} />
                </div>
                <div className="col">
                    <MemoryButton click={onMS} text={"MS"}/>
                </div>
                <div className="col">
                    <MemoryButton click={onMH} text={"Mv"} status={checkMemoryValue()}/>
                </div>
            </div>

            <div className="row">
                <Button value={"|x|"} isDark={true} onClickButton={getValAbs}/>
                <Button value={"CE"} isDark={true} onClickButton={onCE}/>
                <Button value={"C"} isDark={true} onClickButton={onC}/>
                <Button value={"Del"} isDark={true} onClickButton={onDel}/>
            </div>

            <div className="row">
                <Button value={"^-1"} isDark={true} onClickButton={onOperation}/>
                <Button value={"^2"} isDark={true} onClickButton={onOperation}/>
                <Button value={"^0.5"} isDark={true} onClickButton={onOperation}/>
                <Button value={"/"} isDark={true} onClickButton={onOperation}/>
            </div>

            <div className="row">
                <Button value={"7"} isDark={false} onClickButton={onNumber}/>
                <Button value={"8"} isDark={false} onClickButton={onNumber}/>
                <Button value={"9"} isDark={false} onClickButton={onNumber}/>
                <Button value={"x"} isDark={true} onClickButton={onOperation}/>
            </div>

            <div className="row">
                <Button value={"4"} isDark={false} onClickButton={onNumber}/>
                <Button value={"5"} isDark={false} onClickButton={onNumber}/>
                <Button value={"6"} isDark={false} onClickButton={onNumber}/>
                <Button value={"-"} isDark={true} onClickButton={onOperation}/>
            </div>

            <div className="row">
                <Button value={"1"} isDark={false} onClickButton={onNumber}/>
                <Button value={"2"} isDark={false} onClickButton={onNumber}/>
                <Button value={"3"} isDark={false} onClickButton={onNumber}/>
                <Button value={"+"} isDark={true} onClickButton={onOperation}/>
            </div>

            <div className="row">
                <Button value={"+/-"} isDark={false} onClickButton={onChangeSign}/>
                <Button value={"0"} isDark={false} onClickButton={onNumber}/>
                <Button value={"."} isDark={false} onClickButton={onNumber}/>
                <Button value={"="} onClickButton={onEquals}/>
            </div>

        </div>
    );
}

export { ButtonsGrid};