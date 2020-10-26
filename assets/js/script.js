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

function playerLoses() { //need to try do i and j loop so that each is taken away, however I'll need to work out how to put a variable in an element name
    for (var i = 0; i < 11; i++) {
        image = document.getElementById("front-tile-row-"+i+"-column-1-img");
        image.style.display = "none";
    }
}
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

if (numberofTileClicked = 1) {

for(var i = 0; i < (arrayOfGameBombState.length); i++) {
    if (arrayOfGameBombState[i] === 0) {
        if (numberOfBombs < 13) {
             arrayOfGameBombState[i] = arrayOfBombsOrNot[Math.floor(Math.random() * arrayOfBombsOrNot.length)]; 
             if (arrayOfGameBombState[i] = "B") {
                 numberOfBombs += 1;
             }
        } else {
            arrayOfGameBombState[i] = "NB";
        }
    }
} }