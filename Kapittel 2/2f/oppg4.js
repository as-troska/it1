let knapper = document.getElementsByTagName("button");
let grid = document.getElementById("konteiner");
let bokser = document.getElementsByTagName("div");

knapper[0].onclick = function () {
    // Nullstiller alle boksene
    for (let boks of bokser) {
        boks.style.display = "none";
        boks.style.gridArea = "";
        grid.style.gridTemplateAreas = "";
        grid.style.gap = 0;
    }

    // Skrur på boksene som trengs for dette designet
    bokser[0].style.display = "block";
    bokser[0].style.gridArea = "v";

    bokser[1].style.display = "block";
    bokser[1].style.gridArea = "h";

    // Setter grid-template-area
    grid.style.gridTemplateAreas = '"v v v v v . h h h h h h" "v v v v v . h h h h h h" "v v v v v . h h h h h h" "v v v v v . h h h h h h" "v v v v v . h h h h h h" "v v v v v . h h h h h h"';

}

knapper[1].onclick = function () {
    // Nullstiller alle boksene
    for (let boks of bokser) {
        boks.style.display = "none";
        boks.style.gridArea = "";
        grid.style.gridTemplateAreas = "";
        grid.style.gap = 0;
    }

    // Skrur på boksene som trengs for dette designet
    bokser[0].style.display = "block";
    bokser[0].style.gridArea = "t";

    bokser[1].style.display = "block";
    bokser[1].style.gridArea = "m";

    bokser[2].style.display = "block";
    bokser[2].style.gridArea = "b";

    /* Eg teiknar opp griden her, då det er enklare enn å gjere alt på ei line
    ". t t t t t t t t t t ."
    ". . . . . . . . . . . ."
    ". m m m m m m m m m m ."
    ". m m m m m m m m m m ."
    ". . . . . . . . . . . ."
    ". b b b b b b b b b b ."
    */

    // Setter grid-template-area
    grid.style.gridTemplateAreas = '". t t t t t t t t t t ." ". . . . . . . . . . . ." ". m m m m m m m m m m ." ". m m m m m m m m m m ." ". . . . . . . . . . . ." ". b b b b b b b b b b ."';
}

knapper[2].onclick = function () {
    // Nullstiller alle boksene
    for (let boks of bokser) {
        boks.style.display = "none";
        boks.style.gridArea = "";
        grid.style.gridTemplateAreas = "";
        grid.style.gap = 0;
    }

    // Skrur på boksene som trengs for dette designet
    bokser[0].style.display = "block";
    bokser[0].style.gridArea = "t";

    bokser[1].style.display = "block";
    bokser[1].style.gridArea = "b";

    /* Eg teiknar opp griden her, då det er enklare enn å gjere alt på ei line */
    let a = '". t t t t t t t t t t ." ';
    let b = '". t t t t t t t t t t ." ';
    let c = '". t t t t t t t t t t ." ';
    let d = '". . . . . . . . . . . ." ';
    let e = '". b b b b b b b b b b ." ';
    let f = '". b b b b b b b b b b ."';

    let gridString = a + b + c + d + e + f;

    // Setter grid-template-area
    grid.style.gridTemplateAreas = gridString;

}

knapper[3].onclick = function () {
    // Nullstiller alle boksene
    for (let boks of bokser) {
        boks.style.display = "none";
        boks.style.gridArea = "";
        grid.style.gridTemplateAreas = "";
        grid.style.gap = 0;
    }

    // Skrur på boksene som trengs for dette designet
    grid.style.gap = 20 + "px"; //Fra og med denne oppgaven bruker jeg gap i stedet for tomme ruter.

    bokser[0].style.display = "block";
    bokser[0].style.gridArea = "a";

    bokser[1].style.display = "block";
    bokser[1].style.gridArea = "b";

    bokser[2].style.display = "block";
    bokser[2].style.gridArea = "c";

    bokser[3].style.display = "block";
    bokser[3].style.gridArea = "d";

    bokser[4].style.display = "block";
    bokser[4].style.gridArea = "e";

    /* Eg teiknar opp griden her, då det er enklare enn å gjere alt på ei line */
    let a = '"a a a a a a a a a a b b" ';
    let b = '"a a a a a a a a a a b b" ';
    let c = '"a a a a a a a a a a b b" ';
    let d = '"c c d d d d d d d d e e" ';
    let e = '"c c d d d d d d d d e e" ';
    let f = '"c c d d d d d d d d e e"';

    let gridString = a + b + c + d + e + f;

    // Setter grid-template-area
    grid.style.gridTemplateAreas = gridString;

}

knapper[4].onclick = function () {
    // Nullstiller alle boksene
    for (let boks of bokser) {
        boks.style.display = "none";
        boks.style.gridArea = "";
        grid.style.gridTemplateAreas = "";
        grid.style.gap = 0;
    }

    // Skrur på boksene som trengs for dette designet
    grid.style.gap = 20 + "px"; //Fra og med denne oppgaven bruker jeg gap i stedet for tomme ruter.

    bokser[0].style.display = "block";
    bokser[0].style.gridArea = "a";

    bokser[1].style.display = "block";
    bokser[1].style.gridArea = "b";

    bokser[2].style.display = "block";
    bokser[2].style.gridArea = "c";

    bokser[3].style.display = "block";
    bokser[3].style.gridArea = "d";

    /* Eg teiknar opp griden her, då det er enklare enn å gjere alt på ei line */
    let a = '"a a a a a a a a a a a a" ';
    let b = '"a a a a a a a a a a a a" ';
    let c = '"b b c c c c c c c c c c" ';
    let d = '"b b c c c c c c c c c c" ';
    let e = '"d d d d d d d d d d d d" ';
    let f = '"d d d d d d d d d d d d"';

    let gridString = a + b + c + d + e + f;

    // Setter grid-template-area
    grid.style.gridTemplateAreas = gridString;

}

knapper[5].onclick = function () {
    // Nullstiller alle boksene
    for (let boks of bokser) {
        boks.style.display = "none";
        boks.style.gridArea = "";
        grid.style.gridTemplateAreas = "";
        grid.style.gap = 0;
    }

    // Skrur på boksene som trengs for dette designet
    grid.style.gap = 20 + "px"; //Fra og med denne oppgaven bruker jeg gap i stedet for tomme ruter.

    bokser[0].style.display = "block";
    bokser[0].style.gridArea = "a";

    bokser[1].style.display = "block";
    bokser[1].style.gridArea = "b";

    /* Eg teiknar opp griden her, då det er enklare enn å gjere alt på ei line */
    let a = '"a a a b b b b b b b b b" ';
    let b = '"a a a b b b b b b b b b" ';
    let c = '"a a a b b b b b b b b b"';
    let d = '"a a a b b b b b b b b b" ';
    let e = '"a a a b b b b b b b b b" ';
    let f = '"a a a b b b b b b b b b"';

    let gridString = a + b + c + d + e + f;

    // Setter grid-template-area
    grid.style.gridTemplateAreas = gridString;
}

knapper[6].onclick = function () {
    // Nullstiller alle boksene
    for (let boks of bokser) {
        boks.style.display = "none";
        boks.style.gridArea = "";
        grid.style.gridTemplateAreas = "";
        grid.style.gap = 0;
    }

    // Skrur på boksene som trengs for dette designet
    grid.style.gap = 20 + "px"; //Fra og med denne oppgaven bruker jeg gap i stedet for tomme ruter.

    bokser[0].style.display = "block";
    bokser[0].style.gridArea = "a";

    bokser[1].style.display = "block";
    bokser[1].style.gridArea = "b";

    bokser[2].style.display = "block";
    bokser[2].style.gridArea = "c";

    bokser[3].style.display = "block";
    bokser[3].style.gridArea = "d";

    bokser[4].style.display = "block";
    bokser[4].style.gridArea = "e";

    /* Eg teiknar opp griden her, då det er enklare enn å gjere alt på ei line */
    let a = '". . . . . . . . . . . ." ';
    let b = '". . . . . . . . . . . ." ';
    let c = '"a a a a . b b b . c c c " ';
    let d = '"a a a a . b b b . c c c" ';
    let e = '"a a a a . d d d . e e e" ';
    let f = '"a a a a . d d d . e e e"';

    let gridString = a + b + c + d + e + f;

    // Setter grid-template-area
    grid.style.gridTemplateAreas = gridString;
}

knapper[7].onclick = function () {
    // Nullstiller alle boksene
    for (let boks of bokser) {
        boks.style.display = "none";
        boks.style.gridArea = "";
        grid.style.gridTemplateAreas = "";
        grid.style.gap = 0;
    }

    // Skrur på boksene som trengs for dette designet
    grid.style.gap = 20 + "px"; //Fra og med denne oppgaven bruker jeg gap i stedet for tomme ruter.

    bokser[0].style.display = "block";
    bokser[0].style.gridArea = "a";

    bokser[1].style.display = "block";
    bokser[1].style.gridArea = "b";

    bokser[2].style.display = "block";
    bokser[2].style.gridArea = "c";

    bokser[3].style.display = "block";
    bokser[3].style.gridArea = "d";

    bokser[4].style.display = "block";
    bokser[4].style.gridArea = "e";

    bokser[5].style.display = "block";
    bokser[5].style.gridArea = "f";

    /* Eg teiknar opp griden her, då det er enklare enn å gjere alt på ei line */
    let a = '"a a a a a . b b b c c c" ';
    let b = '"a a a a a . b b b c c c" ';
    let c = '"a a a a a . . . . . . ." ';
    let d = '". . . . . . d d d e e e" ';
    let e = '"f f f f f . d d d e e e" ';
    let f = '"f f f f f . d d d e e e"';

    let gridString = a + b + c + d + e + f;

    // Setter grid-template-area
    grid.style.gridTemplateAreas = gridString;
}

knapper[8].onclick = function () {
    // Nullstiller alle boksene
    for (let boks of bokser) {
        boks.style.display = "none";
        boks.style.gridArea = "";
        grid.style.gridTemplateAreas = "";
        grid.style.gap = 0;
    }

    // Skrur på boksene som trengs for dette designet
    grid.style.gap = 20 + "px"; //Fra og med denne oppgaven bruker jeg gap i stedet for tomme ruter.

    bokser[0].style.display = "block";
    bokser[0].style.gridArea = "a";

    bokser[1].style.display = "block";
    bokser[1].style.gridArea = "b";

    bokser[2].style.display = "block";
    bokser[2].style.gridArea = "c";

    bokser[3].style.display = "block";
    bokser[3].style.gridArea = "d";

    bokser[4].style.display = "block";
    bokser[4].style.gridArea = "e";

    bokser[5].style.display = "block";
    bokser[5].style.gridArea = "f";

    bokser[6].style.display = "block";
    bokser[6].style.gridArea = "g";

    bokser[7].style.display = "block";
    bokser[7].style.gridArea = "h";

    bokser[8].style.display = "block";
    bokser[8].style.gridArea = "i";

    /* Eg teiknar opp griden her, då det er enklare enn å gjere alt på ei line */
    let a = '"a a b b c c d d d d d d" ';
    let b = '"a a b b c c d d d d d d" ';
    let c = '"a a . . . . . . . . . ." ';
    let d = '"a a e e e e f f f g g g" ';
    let e = '"h h e e e e . . . g g g" ';
    let f = '"h h e e e e i i i g g g"';

    let gridString = a + b + c + d + e + f;

    // Setter grid-template-area
    grid.style.gridTemplateAreas = gridString;
}