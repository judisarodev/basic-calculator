let pos = 0;

let arr = [returnEmptyEquation()];

export function delArr(){
    pos = 0; 
    arr = [returnEmptyEquation()];
}

export function delLastItemArr(){
    arr.pop();
    pos -= 1;
    arr = [...arr, returnEmptyEquation()];
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
    if(myPos >= 0){
        return arr[myPos].firstValue; 
    }else{
        return '0';
    }
    
}

export function getSecondValue(myPos = pos){
    if(myPos >= 0){
        return arr[myPos].secondValue; 
    }else{
        return '0';
    }
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
    if(replace || arr[pos].secondValue === "0"  && value !== "." ){
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
    
        if(isEmpty(arr[pos].firstValue) && pos-1 < 0){
            arr[pos].firstValue = '0';
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
        case "*":
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
    
    if(!Number.isInteger(Number(result))){    
        result = Number(result);
        arr[pos].result = result.toFixed(3).toString();
    }else{
        arr[pos].result = result;
    }

    if(pos-1 >= 0){
        if(arr[pos].firstValue === arr[pos-1].firstValue &&
            arr[pos].secondValue === arr[pos-1].secondValue &&
            arr[pos].result === arr[pos-1].result){
            arr.pop();
            pos-=1; 
        }
    }

    arr.push(returnEmptyEquation());
    pos+=1; 
}


const add = (a, b) => {
    const c = a + b;
    return c.toString();
}

const subtract = (a, b) => {
    const c = a -b;
    return c.toString();
}

const multiply = (a, b) => {
    const c = a*b; 
    return c.toString();
}

const divide = (a, b) => {
    const c = a/b;
    return c.toString();
}

const riseTo = (a, b) => {
    const c = Math.pow(a, b);
    return c.toString();
}

const changeSimbol = (a) => {
    const c = a * (-1);
    return c.toString(); 
}

export function returnEmptyEquation(){
    return {
        firstValue: "", 
        secondValue: "", 
        operation: "",
        result: "", 
    }
}