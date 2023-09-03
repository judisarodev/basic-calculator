import React from "react";
import { Button } from "./Button";

const buttonStyles = {
    standard: '#3B3B3B',
    hover: '#323232',
    active: '#222B2A'
}

const DarkButton = ({value, click}) => 
    <Button colors={buttonStyles} click={click} value={value}/>


export { DarkButton };