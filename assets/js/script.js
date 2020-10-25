//add function from test
//assign each tile the bomb or not state (maybe do in switch>)
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
var arrayOfGameBombState =
[
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0
]
var numberOfTilesClicked = 0; 
var numberOfBombs = 0;

function clickTile(a) {
    if (numberOfTilesClicked == 0) {
         numberofTilesClicked += 1;
         arrayOfGameBombState[a] = NB;
    }
    switch (a) { //probably make the switch its own function so I can just call it
        case 1:
            image = document.getElementById("front-tile-row-1-column-1-img");
            image.style.display = "none";
            break;
    }
}

