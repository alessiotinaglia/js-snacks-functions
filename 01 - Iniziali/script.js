/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function oneLetter(myArrey){        
    const newArrey = [];
    for (let i = 0; i < myArrey.length; i++){
        newArrey.push(myArrey[i].charAt(0));
    }

    return newArrey;    
}

// Invoca la funzione qui e stampa il risultato in console

const arrayFinale = oneLetter(names);
console.log(arrayFinale);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]