// Oppgåve 11 - Lag en while-løkke som skriver ut tallene fra 0 til 50.
console.log("Oppgåve 11")
let x = 0
while (x < 51) {
    console.log(x);
    x++;
}

// Oppgåve 12 - Lag en for-løkke som skriver ut tallene fra 0 til 50. Sammenlign denne løkken med løkken du skrev i forrige oppgave. 
console.log("Oppgåve 12")
for (let x = 0; x < 51; x++) {
    console.log(x)
}

// Oppgåve 13 - Lag en løkke som skriver ut alle tallene i 3-ganger’n opp til 999 (0, 3, 6, 9, 12, 15 osv.). 
console.log("Oppgåve 13")
x = 0;
let y = 0;
while (y < 999) {
    y = x*3;
    x++;
    console.log(y);        
}

// Oppgåve 14 - Lag en løkke som skriver ut alle partallene mellom 1 og 100. 
console.log("Oppgåve 14")
x = 1;
y = 0;

while (y < 100) {
    y = x*2;
    x++;
    console.log(y)
}

// Oppgåve 15 - Lag en løkke som summerer alle tallene fra 1 til 100, men som bare skriver ut summen i konsollen. 
console.log("Oppgåve 15")
let sum = 0;
for (let x = 0; x <=100; x ++) {
    sum = sum + x;    
}
console.log(sum);

// Oppgåve 16 - Lag en løkke som skriver ut følgende til konsollen: # ## ### ####
console.log("Oppgåve 16")
let tekst = "";
for (let x = 0; x < 4; x ++ ) {
    tekst += "#";
    console.log(tekst)
}

// Oppgåve 17 - Gjør om på koden du skrev i forrige oppgave, slik at den siste linjen inneholder 50 emneknagger (#). 

console.log("Oppgåve 17")
tekst = "";
for (let x = 0; x < 50; x ++ ) {
    tekst += "#";
    console.log(tekst)
}

// Oppgåve 18 - Lag en løkke som skriver ut alle tallene fra −20 til 20 bortsett fra −13 og 13.
console.log("Oppgåve 18")
x = -20;

while (x < 21) {
    if (x === 13 || x === -13) {
        x++
    } else {
        console.log(x)
        x++
    }    
}

// Oppgåve 19 - Lag en løkke som skriver ut alle versene i sangen «99 flasker med brus»:
/* 
99 flasker med brus på hylla, 99 flasker med brus.
Ta en ned og send den rundt, 98 flasker med brus på hylla.
98 flasker med brus på hylla, 98 flasker med brus.
Ta en ned og send den rundt, 97 flasker med brus på hylla.
97 flasker med brus på hylla, 97 flasker med brus.
Ta en ned og send den rundt, 96 flasker med brus på hylla.
...
Ingen flere flasker på hylla, ingen flasker igjen.
Gå i butikken og kjøp noen flere, 99 flasker med brus på hylla.
(Hint: Se på versene og se hva som endrer seg, og hva som er det samme.) */
console.log("Oppgåve 19")
let flasker = 99;

while (flasker > 0)  {
    console.log(flasker + " flasker med brus på hylla, " + flasker + " flasker med brus")
    flasker --
    console.log("Ta en ned og send den rundt, " + flasker + " flasker med brus på hylla")

    if (flasker === 0) {
        console.log("Ingen flere flasker på hylla, ingen flasker igjen.")
        console.log("Gå i butikken og kjøp noen flere, 99 flasker med brus på hylla.")
    }

}

//Oppgåve 20 - Utfordring: Lag en løkke som skriver ut tallene fra 1 til 100. Hvis et tall er delelig på 3, skal du i stedet for tallet skrive "Fizz", og hvis et tall er delelig på 5, skal du i stedet for tallet skrive "Buzz". Hvis et tall er delelig på både 3 og 5, skal du skrive "FizzBuzz". Husk at modulusoperatoren (%) lar oss undersøke om et tall er delelig på et annet.
console.log("Oppgåve 20")
x = 1;

while (x <= 100) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("FizzBuzz")
        x++
    } else if (x % 3 === 0) {
        console.log("Fizz")
        x++
    } else if (x % 5 === 0) {
        console.log("Buzz")
        x++
    } else {
        console.log(x)
        x++
    }

}