//ESERCIZIO 1

function uguaglianza(a, b) {
    if (a === b){
    return true;

    
    }else {
        return false;
    }
 }
 
console.log(uguaglianza (8, 4));*/


//ESERCIZIO 2

function fizzBuzz(N) {
    for (let i = 1; i <= N; i++) {
        if (i % 15===0) {
            console.log ("fizzbuzz");
        } else if (i % 3===0) {
            console.log ("fizz");
        } else if (i % 5===0) {
            console.log ("buzz");
         } else {
                console.log (i)
            }

            }
        }
    
console.log(fizzBuzz (30));*/


//ESERCIZIO 3:

function somma (a,b) {
    somma=a+b; 
    return somma;
}

console.log (somma (10,5));

function sottrazione (a,b) {
    sottrazione=a-b;
    return sottrazione;
}

console.log (sottrazione (10,5));

function moltiplicazione (a,b) {
    moltiplicazione=a * b;
    return moltiplicazione;
}

console.log (moltiplicazione (10,5));

function divisione (a,b) {
    divisione=a/b;
    return divisione;
}

console.log (divisione (10,5));*/



//ARRAY:

//ciclo for

let frutti = ["mela", "banana", "kiwi", "arancia", "pera"];

for (let i=0; i<frutti.length; i++) {
    console.log(frutti[i]);
}

//metodo push

let bevande = ["acqua", "birra", "tisana", "sprite"];

bevande.push("caffè");
console.log(bevande);

//metodo pop

let alimenti = ["pizza", "tiramisù", "lasagne"];

alimenti.pop();
console.log(alimenti);

let lastElement=alimenti.pop ();
console.log(lastElement);

console.log(alimenti);

//metodo shift

let colori= ["rosa","blu", "verde"];
let lastElement=colori.shift ();
console.log(colori);

//metodo reverse

let numeri=[1, 2, 3, 4, 5];
console.log(numeri);

numeri.reverse();
console.log(numeri);

//metodo splice

let città=["milano", "cagliari", "mantova"];
città.splice(0, 1, "Parigi" , "Roma");
console.log(città);

//metodo unshift

let animali=["gatto", "cane", "coniglio"];
console.log(animali);

animali.unshift("elefante");
console.log(animali);






