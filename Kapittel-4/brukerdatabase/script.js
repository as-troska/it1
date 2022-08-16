let bunn = document.getElementById("bunn");
let fnavn = document.getElementById("fnavn");
let enavn = document.getElementById("enavn");
let fodt = document.getElementById("fd");
let bruker = document.getElementById("brukernavn");
let brukerid = document.getElementById("brukerid");
let adresse = document.getElementById("adresse");
let brukerBilde = document.getElementById("brukerBilde");
let neste = document.getElementById("neste");
let forrige = document.getElementById("forrige")

let sortfname = false;
let sortename = false;
let sortuname = false;

function tegnTabell() {
    bunn.innerHTML = "";

    let tabell = document.createElement("table");

    let tabellHode = document.createElement("thead");

    let overskrifter = ["Fornavn", "Etternavn", "Brukernavn", "Epost", "Telefonnummer"]

    for (let x of overskrifter) {
        let overskrift = document.createElement("th");
        overskrift.innerHTML = x;
        overskrift.onclick = sorter;
        tabellHode.appendChild(overskrift);

    }

    tabell.appendChild(tabellHode)

    let tabellKropp = document.createElement("tbody");

    for (let i = 0; i < folk.length; i++) {
        let rad = document.createElement("tr");

        let fornavn = document.createElement("td");
        fornavn.innerHTML = folk[i].name.first;
        rad.appendChild(fornavn);

        let etternavn = document.createElement("td");
        etternavn.innerHTML = folk[i].name.last;
        rad.appendChild(etternavn);

        let brukernavn = document.createElement("td");
        brukernavn.innerHTML = folk[i].login.username;
        rad.appendChild(brukernavn);

        let epost = document.createElement("td");
        epost.innerHTML = folk[i].email;
        rad.appendChild(epost);

        let telefon = document.createElement("td");
        telefon.innerHTML = folk[i].phone;
        rad.appendChild(telefon);

        rad.dataset.index = i;

        rad.addEventListener("click", tegnBrukerinfo)

        tabellKropp.appendChild(rad);
    }

    tabell.appendChild(tabellKropp);

    bunn.appendChild(tabell);
}

function tegnBrukerinfo(evt) {
    let index = Number(evt.target.parentElement.dataset.index);
    let person = folk[index];

    topp.dataset.index = index;

    let dob = new Date(person.dob.date);

    dob = dob.toLocaleDateString();

    let adressen = person.location.street.name + " " + person.location.street.number + ", " + person.location.postcode + " " + person.location.city;

    brukerBilde.src = person.picture.large;

    fnavn.innerHTML = person.name.first;
    enavn.innerHTML = person.name.last;
    fodt.innerHTML = dob;
    adresse.innerHTML = adressen;
    bruker.innerHTML = person.login.username;
    brukerid.innerHTML = person.login.uuid;



}

function sorter(evt) {
    let felt = evt.target.innerHTML;
    
    switch (felt) {
        case "Fornavn":
            if (sortfname === false) {
                function sammenlignFornavn(a, b) {
                    if (a.name.first > b.name.first) {
                        return 1;
                    } else if (a.name.first < b.name.first) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
                folk.sort(sammenlignFornavn)
                tegnTabell();
                sortfname = true;
                sortename = false;
            } else if (sortfname === true) {
                function sammenlignFornavn(a, b) {
                    if (a.name.first > b.name.first) {
                        return -1;
                    } else if (a.name.first < b.name.first) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
                folk.sort(sammenlignFornavn)
                tegnTabell();
                sortfname = false;
                sortename = false;
            }
            break
        case "Etternavn":
            if (sortename === false) {
                function sammenlignEtternavn(a, b) {
                    if (a.name.last > b.name.last) {
                        return 1;
                    } else if (a.name.last < b.name.last) {
                        return -1;
                    } else {
                        return 0;
                    }
                }
                folk.sort(sammenlignEtternavn)
                tegnTabell();
                sortename = true;
                sortfname = false;
            } else if (sortename === true) {
                function sammenlignEtternavn(a, b) {
                    if (a.name.last > b.name.last) {
                        return -1;
                    } else if (a.name.last < b.name.last) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
                folk.sort(sammenlignEtternavn)
                tegnTabell();
                sortename = false;
                sortfname = false;
            }
            break
        case "Brukernavn":
            function sammenlignBrukernavn(a, b) {
                if (a.login.username > b.login.username) {
                    return 1;
                } else if (a.login.username < b.login.username) {
                    return -1;
                } else {
                    return 0;
                }
            }
            folk.sort(sammenlignBrukernavn)
            tegnTabell();
            break

        default:
            break
    }
}

tegnTabell();