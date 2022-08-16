        //Eksempel på kode som fanger opp trykk på alle rader
        // let rader = document.getElementsByTagName("tr");

        // for (let rad of rader) {
        //     rad.onclick = function klikkPaaRad(evt) {
        //         console.log(evt.target.dataset.fnr)
        //     }
        // }

        //Flytt gjerne arrayet over i en egen fil, så slipper dere at den står i veien

        let bunn = document.getElementById("bunn");


        function tegnTabell() {
            let tabell = document.createElement("table");

            let tableHead = document.createElement("thead");

            let colHeads = ["Fornavn", "Etternavn", "Telefonnummer", "Epost", "Gateadresse", "Posntummer", "Postadresse"]

            for (let header of colHeads) {
                let celle = document.createElement("th")
                celle.innerHTML = header;
                tableHead.appendChild(celle);
            }

            tabell.appendChild(tableHead)

            // Skriver fra array

            for(let x of folk) {
                let rad = document.createElement("tr");

                let fornavn = document.createElement("td");
                fornavn.innerHTML = x.name.first;
                rad.appendChild(fornavn)

                let etternavn = document.createElement("td");
                etternavn.innerHTML = x.name.last;
                rad.appendChild(etternavn)

                let mobil = document.createElement("td");
                mobil.innerHTML = x.cell;
                rad.appendChild(mobil)

                tabell.appendChild(rad)
            }

            bunn.appendChild(tabell)
        }

        tegnTabell()