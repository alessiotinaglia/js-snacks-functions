/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function contaVocali(stringa){
    const vocali = "aeiou";
    let contatore = 0;

// Invoca la funzione qui e stampa il risultato in console

for (let i = 0; i < stringa.length; i++){
    if (vocali.includes(stringa[i])){
        contatore++;
    }
}
return contatore;
}

console.log(contaVocali(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)