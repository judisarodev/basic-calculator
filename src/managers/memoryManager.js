export function save(value){
    return Number(value); 
}

export function clear(){
    return undefined; 
}

export function add(memory, value){
    memory = Number(memory);
    let a = 1; 
    return memory += Number(value);
}

export function substract(memory, value){
    memory = Number(memory);
    return memory -= Number(value); 
}

export function negative(memory){
    memory = Number(memory);
    return memory*(-1); 
}