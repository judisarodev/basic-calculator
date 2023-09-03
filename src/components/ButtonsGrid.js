import React, {useEffect} from "react";
import { ConsoleContext } from '../context/ConsoleContext'; 
import * as arr from "../managers/operationsManager";
import { LightButton } from "./LightButton";
import { AccentButton } from "./AccentButton";
import { DarkButton } from "./DarkButton";
import { RowGridButtons} from "./RowGridButtons";

const ButtonsGrid = () => {

    const { myConsole, setMyConsole, setMyTopConsole } = React.useContext(ConsoleContext);

    useEffect(() => {
        window.addEventListener('keyup', handleKey);
        return () =>{
            window.removeEventListener('keyup', handleKey);
        }
    }, []);

    function isValidOperator(value){
        if(value === '+' || value === '-' || value === '*' || value === '/' || value === '^-1' || value === '^2' || value === '^0.5'){
            return true;
        }else{
            return false; 
        }
    }

    function handleKey(e){
        if(Number(e.key)){
            setUpValues(e.key, false);
        }else if(e.keyCode === 8){
            onDel();
        }else if(e.keyCode === 13){
            onEquals();
        }else if(isValidOperator(e.key)){
            onOperation(e.key);
        }
    }

    function setUpValues(value, replace) {
        if(arr.getOperation()){
            arr.setUpSecondValue(value, replace);
            setMyConsole(arr.getSecondValue()); 
        }else{
            arr.setUpFirstValue(value, replace);
            setMyConsole(arr.getFirstValue()); 
        }
    }

    function onNumber(e){
        const value = e.target.textContent;
        setUpValues(value, false);
    }
    
    function onOperation(e){
        let value = e;
     
        if(typeof e !== 'string'){
            value = e.target.textContent;
        }

        const isExpo = arr.setUpOperation(value); 
        
        setMyTopConsole(arr.getFirstValue() + value);
        setMyConsole(arr.getFirstValue());

        if(isExpo){
            onEquals(); 
            console.log(arr.getArr());
            arr.setUpFirstValue(arr.getResult(arr.getPos()-1, true));
        }
        
    }

    function onEquals(){
        arr.setUpResult();
        const prevPos = arr.getPos() -1; 
        setMyTopConsole(arr.getFirstValue(prevPos) + arr.getOperation(prevPos) + arr.getSecondValue(prevPos) + "=");
        setMyConsole(arr.getResult(prevPos));
    }

    function onDel(){
        if(arr.isEmpty(arr.getOperation())){
            arr.setUpFirstValue(arr.getFirstValue().slice(0, -1), true);
            setMyConsole(arr.getFirstValue());
        }else{
            arr.setUpSecondValue(arr.getSecondValue().slice(0, -1), true);
            setMyConsole(arr.getSecondValue());
        }
    }

    function onC(){
        arr.delArr();   
        setMyConsole("");
        setMyTopConsole("");
    }

    function onCE(){
        setUpValues("", true);
    }

    function onChangeSign(){
        const value = arr.changeSign(myConsole);
        setUpValues(value, true);
    }

    function getValAbs(){
        const value = arr.valAbs(myConsole);
        setUpValues(value, true);
    }

    return(
        <>
             <RowGridButtons>
                <DarkButton value={"| x |"} click={getValAbs}/>
                <DarkButton value={"CE"} click={onCE}/>
                <DarkButton value={"C"} click={onC}/>
                <DarkButton value={"Del"} click={onDel}/>
            </RowGridButtons>
            
            <RowGridButtons>
                <DarkButton value={"^-1"} click={onOperation}/>
                <DarkButton value={"^2"} click={onOperation}/>
                <DarkButton value={"^0.5"} click={onOperation}/>
                <DarkButton value={"/"} click={onOperation}/>
            </RowGridButtons>

            <RowGridButtons>
                <LightButton value={"7"} click={onNumber}/>
                <LightButton value={"8"} click={onNumber}/>
                <LightButton value={"9"} click={onNumber}/>
                <DarkButton value={"x"} click={onOperation}/>
            </RowGridButtons>

            <RowGridButtons>
                <LightButton value={"4"} click={onNumber}/>
                <LightButton value={"5"} click={onNumber}/>
                <LightButton value={"6"} click={onNumber}/>
                <DarkButton value={"-"} click={onOperation}/>
            </RowGridButtons>

            <RowGridButtons>
                <LightButton value={"1"} click={onNumber}/>
                <LightButton value={"2"} click={onNumber}/>
                <LightButton value={"3"} click={onNumber}/>
                <DarkButton value={"+"} click={onOperation}/>
            </RowGridButtons>

            <RowGridButtons>
                <DarkButton value={"+/-"} onClickButton={onChangeSign}/>
                <LightButton value={"0"} onClickButton={onNumber}/>
                <LightButton value={"."} onClickButton={onNumber}/>
                <AccentButton value={"="} onClickButton={onEquals}/>
            </RowGridButtons>
        </>
    );
}

export { ButtonsGrid};