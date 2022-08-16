let utskrift = document.getElementById("utskrift");

// Angir en temperatur i fahrenheit som skal gjøres om til celsius
let tempFahrenheit = 45;

// Gjør om fahrenheit-temperaturen til grader celsius
let tempCelsius = (tempFahrenheit - 32) * (5 / 9);

// Skriver resultatet til nettsiden
utskrift.innerHTML += (tempFahrenheit + " fahrenheit tilsvarer " + tempCelsius + " grader celsius.");

//En omvendt kalkulator
// Se gjennom programmet ovenfor. Skriv det om slik at du i stedet kan gjøre om fra celsius til fahrenheit. Finn ut hva 0 grader celsius tilsvarer i fahrenheit. Hvor mange grader fahrenheit skal til før du vil si at det er en varm sommerdag?

// Prøv også å bytte ut document.write() med console.log(). Du kan åpne konsollen i nettleseren og få utskrifter fra CodePen-programmet ovenfor, eller du kan gjøre det i en egen fil på din maskin.

let antall = 7;

utskrift.innerHTML += "<br><br>"+antall;
