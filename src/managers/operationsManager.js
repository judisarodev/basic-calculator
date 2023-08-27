let pos = 0;

let arr = [returnEmptyEquation()];

export function delArr(){
    arr = [returnEmptyEquation()];
}

export function valAbs(value){
    value = Number(value);
    if(value >= 0){
        return value + ''; 
    }else{
        return (-value) + '';
    }
}

export function changeSign(value){
    value = Number(value);
    return -value + '';
}

export function getPos(){
    return pos; 
}

export function getArr(){
    return arr; 
}

export function getFirstValue(myPos = pos){
    return arr[myPos].firstValue; 
}

export function getSecondValue(myPos = pos){
    return arr[myPos].secondValue; 
}

export function getOperation(myPos = pos){
   return arr[myPos].operation; 
}

export function getResult(myPos = pos){
    return arr[myPos].result; 
}

export function setUpFirstValue(value, replace){
    if(replace || (arr[pos].firstValue === "0" && value !== ".")){
        arr[pos].firstValue = value;
    }else{
        arr[pos].firstValue = arr[pos].firstValue + value;
    }
}

export function setUpSecondValue(value, replace = false){
    if(replace || arr[pos].secondValue === "0"){
        arr[pos].secondValue = value;
    }else{
        arr[pos].secondValue = arr[pos].secondValue + value;
    }
}

export function isEmpty(text) {
    if(text.length === 0){
        return true; 
    }else{
        return false; 
    }
}

export function setUpOperation(value, replace = false){

    if(!isEmpty(arr[pos].secondValue) && !replace){
        setUpResult(arr);
        arr[pos].firstValue = arr[pos-1].result;
        arr[pos].operation = value  ;
    }

    if(isEmpty(arr[pos].firstValue) && pos-1 >= 0 && !replace){
        arr[pos].firstValue = arr[pos-1].result;
    }

    if(value.includes("^")){
        arr[pos].operation = "^";
        setUpSecondValue(value.replace("^",""), pos);
        return true; 
    }else{
        arr[pos].operation = value;
    }
}

export function setUpResult(){

    if(isEmpty(arr[pos].secondValue) && !isEmpty(arr[pos].operation)){
        arr[pos].secondValue = arr[pos].firstValue;
    }

    if(isEmpty(arr[pos].firstValue) && pos-1 >= 0){
        arr[pos].firstValue = arr[pos-1].result; 
    }

    const a = Number(arr[pos].firstValue);
    const b = Number(arr[pos].secondValue); 
    
    let result = 0; 

    switch(arr[pos].operation){
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = subtract(a, b);
            break;
        case "x":
            result = multiply(a, b);
            break;
        case "/":
            result = divide(a, b);
            break;
        case "^": 
            result = riseTo(a, b);
            break;
        default:
            result = a; 
    } 
    
    !Number.isInteger(result) ? arr[pos].result = result.toFixed(3).toString() : arr[pos].result = result.toString();

    arr.push(returnEmptyEquation());
    pos+=1; 
}

const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    const c = a -b;
    return c;
}

const multiply = (a, b) => {
    const c = a*b; 
    return c;
}

const divide = (a, b) => {
    const c = a/b;
    return c;
}

const percentage = (a, b) => {
    const c = a*(b/100);
    return c; 
}

const riseTo = (a, b) => {
    const c = Math.pow(a, b);
    return c;
}

const changeSimbol = (a) => {
    const c = a * (-1);
    return c; 
}

export function returnEmptyEquation(){
    return {
        firstValue: "", 
        secondValue: "", 
        operation: "",
        result: "", 
    }
}