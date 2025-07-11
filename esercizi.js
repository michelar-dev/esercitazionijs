//ESERCIZIO 1:

let v = 8;

if (v <18){
    console.log ("insufficente");
}

else if (v >= 18 && v < 21){
    console.log ("sufficente");
}

else if (v >= 21 && v < 24){
    console.log ("buono");
}

else if (v >= 24 && v < 27){
    console.log ("distinto");
}

else if (v >= 27 && v <= 30){
    console.log ("ottimo");
}

else if (v === 30){
    console.log ("eccellente");
}

else{
    console.log ("Valore non valido");
}


//ESERCIZIO 2:
// SALVO IL VALORE DEL PROMPT DENTRO LA VARIABILE CHIAMATA TEMPERATURA

let temperatura = prompt ("Inserisci la temperatura");
temperatura = Number (temperatura);

if (temperatura <20) {
    console.log ("Non ci sono più le mezze stagioni");
}


else if (temperatura >=30){
    console.log ("lu mare, lu sole e lu ientu");
}

else if (temperatura <30){
    console.log ("Mi dia una peroni sudata");
}

else if (temperatura <0){
    console.log ("Non è tanto il freddo quanto l'umidità");
}

else if (temperatura <10){
    console.log ("Copriti...ancora ti raffreddi")
} 




//ESERCIZIO 3:


let tabellina = 2

for (let i =1; i<= 10; i++){
    console.log (tabellina * i)
} 




//ESERCIZIO 4:



let contadispari=0
let somma=0 
f
for (let i = 0; i<20; i++){
    console.log (i)
    if (i % 2 == 0){        
         
        console.log (i)
    
     } else { 
         somma=somma + i
         contadispari ++
     }
 }   

console.log("La media dei numeri dispari è: " + somma / contadispari)



//ESERCIZIO 5:


let bevanda = prompt("Inserisci il numero della tua bevanda: \n1) Acqua \n2) CocaCola \n3) Birra \n4) Vino")

switch (bevanda){
    case "1":
          console.log("E' stata selezionata l'acqua")
          break;
    case "2":
        console.log("E' stata selezionata la cocacola")
          break;
     case "3":
          console.log("E' stata selezionata la birra")
          break;
      case "4":
          console.log("Eccoti servita il vino")
          break;

      default:
         console.log("Scelta non valida")
          break;
          }

  if( bevanda == "1"){
       console.log ("Eccoti servita l'acqua")
          } else if(bevanda == "2"){
        console.log("Eccoti servita la cocacola")
          } else if(bevanda == "3"){
       console.log("Eccoti servita la birra")
         } else if(bevanda == "4"){
        console.log("Eccoti servito il vino")
  } else {
        console.log("Scelta non valida")
  }




// ESERCIZIO CONDIZIONATORE:



let temperaturaUtente = prompt ("Inserisci temperatura utente")

let temperaturaAttuale = prompt ("Inserisci temperatura attuale")
console.log ("Valore temperatura utente è " ,temperaturaUtente)
console.log ("Valore temperatura attuale è " ,temperaturaAttuale)


if (temperaturaAttuale > temperaturaUtente ) {
    console.log ("la temperatura attuale è piu alta")
    console.log ("la temperatura attuale è :" ,temperaturaAttuale)
    
    while (temperaturaAttuale != temperaturaUtente) {
        temperaturaAttuale--
        console.log ("stiamo abbassando la temperatura")
    }
    console.log ("la temperatura adesso è " ,temperaturaAttuale)
} else {
    console.log ("la temperatura attuale è :" ,temperaturaAttuale)
    
    
    while (temperaturaAttuale != temperaturaUtente) {
        temperaturaAttuale++
        console.log ("Stiamo aumentando la temperatura attuale")
    }
    console.log ("la temperatura adesso è " ,temperaturaAttuale)
}



// ESERCIZIO DEI DADI:


let tiri: 3
let punteggio= 0

for(let i=0; i < tiri; let i++){
    punteggio = punteggio + Math.floor (Math.random()* (7-1 ) +1 )
    }
console.log ("il giocatore ha fatto: ${punteggio} + punti")

