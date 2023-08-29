import React from "react";
import { MyModal } from './MyModal'; 
import { getArr } from "../managers/operationsManager";
import { ModalItem } from "./ModalItem";

const ModalEquationHistory = ({openModal}) => {
    return(
        <MyModal 
            showTextNoHistory={getArr().length === 1} 
            textNoHistory={"No hay historial de ecuaciones"} 
            body={<ModalEquationHistoryItem arr={getArr()}/>}
        />
    );
}

const ModalEquationHistoryItem = ({arr}) => {
    let key = 0; 
    return(
        <ul style={{padding: '0px', margin: '0px'}}>
            {arr.map((a) => {
                if(a.firstValue !== ''){
                    return(
                        <ModalItem key={++key}>
                            <li style={{listStyle: 'none'}} >
                                <p style={{fontSize: '15px', fontWeight: '100'}}><span>{a.firstValue}</span> <span>{a.operation}</span> <span>{a.secondValue}</span> =</p>
                                <p>{a.result}</p>
                            </li>
                        </ModalItem>
                    );
                }
            })}
        </ul>
    );
}

export { ModalEquationHistory };