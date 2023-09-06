const memoryCards = [
    {tab: "MC", description: "Elimina el elemento en memoria", key: 1}, 
    {tab: "MR", description: "Recupera el almacenado", key: 2}, 
    {tab: "M+", description: "Adiciona al elemento en memoria el valor en consola", key: 3}, 
    {tab: "M-", description: "Substrae al elemento en memoria el valor en consola", key: 4}, 
    {tab: "MS", description: "Almacena en memoria el valor en consola", key: 5}, 
    {tab: "Mv", description: "Muestra el menú de memoria, en donde se puede visualizar el valor almacenado y modificarlo", key: 6}
];

const delCards = [
    {tab: "C", description: "Restaura toda la consola y elimina el historial de eucaciones", key: 1}, 
    {tab: "CE", description: "Elimina el último elemento ingresado por consola", key: 2}
];

export function getMemoryCards(){
    return memoryCards;
}

export function getDelCards(){
    return delCards;
}