let utskrift = document.getElementById("utskrift");

// Oppgave 1 - Lag en array med tallene 0, 1, 2, 3, 4, 6, 7, 8, 9 og 10 og gi den et passende navn.
let tall = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Oppgave 2 - Skriv ut alle partallene fra arrayen i konsollen.

console.log(tall[2], tall[4], tall[6], tall[8], tall[10])

/* Oppgave 3 Lag arrayen let tall = [2, 4, 6, 8];.
Bruk metodene vi har sett på, og gjør om arrayen tall til [4, 6].
Legg til tallet 5 mellom tallene 4 og 6, slik at arrayen nå inneholder [4, 5, 6].
Gjør om arrayen slik at den inneholder [3, 4, 5, 6, 7].
Gjør om arrayen slik at den inneholder ["tre", 4, "fem", 6, "syv"]. */

tall = [2, 4, 6, 8];

tall.splice(0, 1);
tall.pop()
tall.splice(1, 0, 5)
tall.unshift(3)
tall.push(7)

console.log(tall)

tall[0] = "tre";
tall[2] = "fem";
tall[4] = "syv";

console.log(tall)

/*Oppgave 4 - Ta igjen utgangspunkt i arrayen du laget i forrige oppgave.
Hva tror du skjer hvis du skriver tall.indexOf(10) eller tall.lastIndexOf(10)?
Prøv ut begge variantene og se hva du får. Hvordan tolker du resultatet?
Ta en titt på dokumentasjonen for indexOf. Ser du hvorfor metoden returnerer den verdien du fikk? */

//Begge retunerer -1, fordi 10 ikke finnes i arrayet. Fra MDN: Return value - The first index of the element in the array; -1 if not found


/* Oppgave 5 - Lag en array med 20 forskjellige tall. Velg noen negative og noen positive tall.
Bruk programmet ovenfor for å finne den største verdien i arrayen. Sjekk at du finner riktig tall. 
Skriv et program som finner den minste verdien i arrayen. Sjekk at du finner riktig tall.
Skriv et program som finner variasjonsbredden for verdiene i arrayen. Variasjonsbredde er forskjellen mellom den største og den minste verdien i et datasett. 
Skriv et program som finner gjennomsnittet av verdiene i arrayen. */

let oppg5 = [1, 65, 8632, 2332, -2352645, 1233, 6753, -3543421, 345634653245, 43, 5232, -334213, -1, -2, 6543242323, 23, 2790974, -23420000000, 85, 1000];

let storst = oppg5[0];

for (let i = 0; i < oppg5.length; i++) {
    if (oppg5[i] > storst) {
        storst = oppg5[i];
    }
}
console.log("Størst: " + storst);

let minst = oppg5[0];

for (let i = 0; i < oppg5.length; i++) {
    if (oppg5[i] < minst) {
        minst = oppg5[i];
    }
}

console.log("Minst: " + minst);

let variasjonsbredde = storst - minst;

console.log("Variasjonsbredde: " + variasjonsbredde)

let gjennomsnittet = 0;

for (x of oppg5) {
    gjennomsnittet = gjennomsnittet + x;
}

console.log("Gjennomsnitt: " + gjennomsnittet / oppg5.length)


// Oppgave 6 - Gjenta oppgave 5 ovenfor, men denne gangen skal du lage funksjoner som får en array som parameter. Du skal altså lage funksjoner som finner minste og største verdi, variasjonsbredden og gjennomsnittet. Husk at én funksjon kan bruke andre funksjoner.

function finnStorst(liste) {
    let storst = liste[0];

    for (let i = 0; i < liste.length; i++) {
        if (liste[i] > storst) {
            storst = liste[i];
        }
    }

    return storst;

}

function finnMinst(liste) {
    let minst = liste[0];

    for (let i = 0; i < liste.length; i++) {
        if (liste[i] < minst) {
            minst = liste[i];
        }
    }

    return minst;

}

function finnVariasjonsbredde(liste) {
    let bredde = finnStorst(liste) - finnMinst(liste);
    return bredde;

}

function finnGjennomsnitt(liste) {
    let gjennomsnittet = 0;

    for (x of liste) {
        gjennomsnittet = gjennomsnittet + x;
    }

    return gjennomsnittet / liste.length

}

// Oppgave 9 -Lag en todimensjonal array som inneholder en gangetabell. Du skal kunne angi faktorer som indekser og få ut produktet av dem som verdi. Det vil for eksempel bety at gangetabell[3][7] skal inneholde verdien 21.

let gangetabell = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,1,2,3,4,5,6,7,8,9,10],
    [0,2,4,6,8,10,12,14,16,18,20],
    [0,3,6,9,12,15,18,21,24,27,30],
    [0,4,8,12,16,20,24,28,32,36,40]
]

console.log(gangetabell[4][7])


/* Oppgave 10 Lag sorterte versjoner av følgende arrayer:
let array1 = [2, 1, 7, 5];
let array2 = ["melon", "eple", "appelsin", "ananas", "pære"];
let array3 = [2, 10, 104, 17, 82, 109]; */

let array1 = [2, 1, 7, 5];
let array2 = ["melon", "eple", "appelsin", "ananas", "pære"];
let array3 = [2, 10, 104, 17, 82, 109];

array1.sort();
array2.sort();
array3.sort(function sammenlignFunksjon(a, b) {
    console.log(a + " - " + b + " = " + (a - b));
    return a - b;
  });
console.log(array1);
console.log(array2);
console.log(array3);


/* Lag en «omvendt» versjon av sammenligningsfunksjonene du laget i oppgave 10, slik at arrayene blir sortert i omvendt rekkefølge. 
Klarer du å skrive om funksjonen slik at den kan sortere tekstene i 10b i omvendt rekkefølge? */

array3.sort(function sammenlignFunksjon(a, b) {
    return b-a;
  });

console.log(array3)


