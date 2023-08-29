const memoryCards = [
    {tab: "MC", description: "Elimina el elemento en memoria"}, 
    {tab: "MR", description: "Recupera el elemento en memoria"}, 
    {tab: "M+", description: "Adiciona al elemento en memoria el valor en consola. Si te encuentras en el Menú de memoria, le adiciona una unidad"}, 
    {tab: "M-", description: "Substrae al elemento en memoria el valor en consola. Si te encuentras en el Menú de memoria, le adiciona una unidad"}, 
    {tab: "MS", description: "Guarda en memoria el valor en consola"}, 
    {tab: "Mv", description: "Muestra el menú de memoria"}
];

const delCards = [
    {tab: "C", description: "Restaura la consola"}, 
    {tab: "CE", description: "Restaura la consola y elimina el historial de ecuaciones"}
];

const singOperatorsCards = [
    {tab: "| X |", description: "Obtiene el valor absoluto del elemento en consola"}, 
    {tab: "+/-", description: "Cambia el signo del valor en consola"}
];

export function getMemoryCards(){
    return memoryCards;
}

export function getDelCards(){
    return delCards;
}

export function getSingOperatorsCards(){
    return singOperatorsCards;
}

export function splitArray(arr){
    const descriptions = []; 
    const tabs = []; 

    arr.map((item) => {
        descriptions.push(item.description);
    });

    arr.map((item) => {
        tabs.push(item.tab);
    });

    return {tabs, descriptions}; 
}