import { Equation } from "../classes/Equation";

let pos = 0;
let arr = [new Equation()];

export function getPos() {
    return pos;
}

export function getArr() {
    return arr;
}

export function delArr() {
    pos = 0;
    arr = [new Equation];
}

export function getFirstValue(myPos = pos) {
    return arr[myPos].firstValue;
}

export function getSecondValue(myPos = pos) {
    return arr[myPos].secondValue;
}

export function getOperation(myPos = pos) {
    return arr[myPos].operation;
}

export function getResult(myPos = pos) {
    return arr[myPos].result;
}

function setFirstValue(value) {
    arr[pos].firstValue = value;
}

function setSecondValue(value) {
    arr[pos].secondValue = value;
}

function setOperation(value) {
    arr[pos].operation = value;
}

function isThereAPreviousPosition(){
    if(pos - 1 >= 0){
        return true;
    }else{
        return false; 
    }
}

export function saveValue(value, replace){
    if(getOperation()){
        setUpSecondValue(value, replace);
        return getSecondValue();
    }else{
        setUpFirstValue(value, replace);
        return getFirstValue(); 
    }
}

export function setUpFirstValue(value, replace) {
    let previousResult;

    if(isThereAPreviousPosition()){
        previousResult = getResult(pos-1);
    }

    if (!replace || (getFirstValue() === "0" && value !== ".") && previousResult !== value) {
        setFirstValue(getFirstValue() + value);
    }else{
        setFirstValue(value);
    } 
}

export function setUpSecondValue(value, replace) {
    if (replace || getSecondValue() === "0" && value !== ".") {
        setSecondValue(value);
    } else {
        setSecondValue(getSecondValue() + value);
    }
}


export function setUpOperation(value) {
    
    if(isThereAPreviousPosition() && isEmpty(getFirstValue())){
        setFirstValue(getResult(pos - 1));
    }
    
    if (!isEmpty(getSecondValue())) {
        setUpResult();
        setFirstValue(getResult(pos - 1));
    }
    
    if (isEmpty(getFirstValue()) && pos - 1 < 0) {
        setFirstValue("0");
    }

    if (value.includes("^")) {
        setOperation("^");
        setSecondValue(value.replace("^", ""));
        return true; 
    }
    
    setOperation(value);
}

export function setUpResult() {
    
    if (isEmpty(getSecondValue()) && !isEmpty(getOperation())) {
        setSecondValue(getFirstValue());
    }
    
    if (isEmpty(getSecondValue()) && isEmpty(getOperation()) && isThereAPreviousPosition()) {
        setFirstValue(getResult(pos -1));
        setOperation(getOperation(pos -1));
        setSecondValue(getSecondValue(pos - 1));
    }   
    
    arr[pos].operateEquation();
    arr.push(new Equation());
    pos += 1;
    console.log(arr);
}

export function isEmpty(text) {
    if (text.length === 0) {
        return true;
    } else {
        return false;
    }
}

export function valAbs(value) {
    value = Number(value);
    if (value >= 0) {
        return value + '';
    } else {
        return (-value) + '';
    }
}

export function changeSign(value) {
    let v = Number(value);
    v = -v;
    return v;
}