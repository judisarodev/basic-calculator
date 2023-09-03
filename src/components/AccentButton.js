import React from "react";
import { Button } from "./Button";

const buttonStyles = {
    standard: '#4CC2FF',
    hover: '#66B2E8',
    active: '#4CC2FF'
}

const AccentButton = ({value, click}) => 
    <Button colors={buttonStyles} click={click} value={value}/>


export { AccentButton };