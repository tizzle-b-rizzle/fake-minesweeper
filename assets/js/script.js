var startOfGame = false;
var arrayOfBombsOrNot = 
[
    B, B, B, B, B, B, B, B, B, B,
    B, B, NB, NB, NB, NB, NB, NB, NB, NB,
    NB, NB, NB, NB, NB, NB, NB, NB, NB, NB,
    NB, NB, NB, NB, NB, NB, NB, NB, NB, NB,
    NB, NB, NB, NB, NB, NB, NB, NB, NB, NB,
    NB, NB, NB, NB, NB, NB, NB, NB, NB, NB,
    NB, NB, NB, NB, NB, NB, NB, NB, NB, NB,
    NB, NB, NB, NB, NB, NB, NB, NB, NB, NB,
    NB, NB, NB, NB, NB, NB, NB, NB, NB, NB,
    NB, NB, NB, NB, NB, NB, NB, NB, NB
]

function test(a) {
    if (startOfGame != true) {
        startofGame = true; //need to add here the function that generates the mines
    } 
    switch (a) { //probably make the switch its own function so I can just call it
        case 1:
            image = document.getElementById("front-tile-row-1-column-1-img");
            image.style.display = "none";
            break;
    }
}