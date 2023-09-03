const memoryCards = [
    {tab: "MC", description: "Elimina el elemento en memoria"}, 
    {tab: "MR", description: "Recupera el almacenado"}, 
    {tab: "M+", description: "Adiciona al elemento en memoria el valor en consola"}, 
    {tab: "M-", description: "Substrae al elemento en memoria el valor en consola"}, 
    {tab: "MS", description: "Almacena en memoria el valor en consola"}, 
    {tab: "Mv", description: "Muestra el menú de memoria, en donde se puede visualizar el valor almacenado y modificarlo"}
];

const delCards = [
    {tab: "C", description: "Restaura toda la consola y elimina el historial de eucaciones"}, 
    {tab: "CE", description: "Elimina el último elemento ingresado por consola"}
];

export function getMemoryCards(){
    return memoryCards;
}

export function getDelCards(){
    return delCards;
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