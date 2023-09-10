export class Equation {
    constructor(firstValue = "", secondValue = "", operation = "") {
        this._firstValue = firstValue;
        this._secondValue = secondValue;
        this._operation = operation;
    }

    get firstValue(){
        return this._firstValue;
    }

    get operation(){
        return this._operation;
    }

    get secondValue(){
        return this._secondValue;
    }

    get result(){
        return this._result; 
    }

    set firstValue(value){
        this._firstValue = value;
    }

    set secondValue(value){
        this._secondValue = value;
    }

    set operation(value){
        this._operation = value;
    }

    add (a, b) {
        const c = a + b;
        return c.toString();
    }

    subtract (a, b) {
        const c = a - b;
        return c.toString();
    }

    multiply (a, b) {
        const c = a * b;
        return c.toString();
    }

    divide (a, b) {
        if (b === 0) {
            alert("Error matemático, no puedes dividir un número entre cero");
            return "0";
        } else {
            const c = a / b;
            return c.toString();
        }
    }

    riseTo (a, b) {
        const c = Math.pow(a, b);
        return c.toString();
    }

    operateEquation() {
        const a = Number(this._firstValue);
        const b = Number(this.secondValue);

        switch (this._operation) {
            case "+":
                this._result = this.add(a, b);
                break;
            case "-":
                this._result = this.subtract(a, b);
                break;
            case "x":
                this._result = this.multiply(a, b);
                break;
            case "*":
                this._result = this.multiply(a, b);
                break;
            case "/":
                this._result = this.divide(a, b);
                break;
            case "^":
                this._result = this.riseTo(a, b);
                break;
            default:
                this._result = a;
        }

        if(isNaN(this._result)){
            alert("Error matemático, no has ingresado un número válido");
            this._result = '0';
        }

        if (!Number.isInteger(Number(this._result))) {
            const r = Number(this._result);
            this._result = Number(r.toFixed(3)).toString();
        }
    }
}