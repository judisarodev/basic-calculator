const memoryCards = [
    {tab: "MC", description: "Elimina el elemento en memoria"}, 
    {tab: "MR", description: "Recupera el elemento en memoria"}, 
    {tab: "M+", description: "Adiciona al elemento en memoria el valor en consola. Si te encuentras en el Menú de memoria, le adiciona una unidad"}, 
    {tab: "M-", description: "Substrae al elemento en memoria el valor en consola. Si te encuentras en el Menú de memoria, le substrae una unidad"}, 
    {tab: "MS", description: "Guarda en memoria el valor en consola"}, 
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