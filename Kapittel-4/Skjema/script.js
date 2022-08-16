let inpFornavn = document.querySelector("#fornavn");
let inpEtternavn = document.querySelector("#etternavn");
let inpFodt = document.querySelector("#fodt");
let btnLeggTil = document.querySelector("#leggTil");
let btnLagre = document.querySelector("#lagre")
let utskrift = document.querySelector("#utskrift");

// Her skal vi legge inn dataene fra skjemaet. Vi lager denne som en array som skal fylles med objekter.
let personer = [];

// Her skal vi lagre alt når nettleseren lukkes
// let lagring = window.localStorage;

// Dette er en anonym funksjon som kjører når en trykker knappen.
btnLeggTil.onclick = function () {
    //Først henter vi ut hva som står i skjemaet    
    let fnavn = inpFornavn.value;
    let enavn = inpEtternavn.value;
    let dato = new Date(inpFodt.value);

    dato = dato.toLocaleDateString("no-nb")

    //Så behandler vi dataene og lager et objekt.
    let person = {
        fornavn: fnavn,
        etternavn: enavn,
        fodt: dato
    }

    //Og legger det til i arrayet vårt.
    personer.push(person)

    //Til slutt skriver vi ut til utskriftsfeltet. Dette er ikke akkurat en elegant utskrift, så den bør forbedres.
    utskrift.innerHTML += "Fornavn: " + fnavn + "<br>";
    utskrift.innerHTML += "Etternavn: " + enavn + "<br>";
    utskrift.innerHTML += "Fødselsdato: " + dato + "<br><br>";
}

// btnLagre.onclick = function () {
//     lagring.setItem("personer", JSON.stringify(personer))
// }



function leggTil(fornavn, etternavn, dato) {
    console.log(fornavn, etternavn, dato);
    
};

