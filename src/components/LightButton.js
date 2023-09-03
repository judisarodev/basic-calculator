import React from "react";
import { Button } from "./Button";

const buttonStyles = {
    standard: '#323232',
    hover: '#3B3B3B',
    active: '#2D3535'
}

const LightButton = ({value, click}) => 
    <Button colors={buttonStyles} click={click} value={value}/>


export { LightButton };