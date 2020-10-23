//to do the bomb check, give a second array a random variable from the the first array so the second array is the order, then use
//secondArray[a-1] to determine if it's a bomb or not
/*
Steps needed:
1. Once user clicks, the code check to see if it's the first tile clicked
2. If yes, the code makes sure THAT tile isn't a bomb, and sets the rest to randomly be bombs or not using the arrayOfBombsOrNot and
random number. The non-bombs need a function to determine the number of the tile
everytime a value is assigned to a tile, that value is removed from the arrayOfBombsOrNot
3. If not, the game checks to see if the tile is a bomb or not. If yes, game over, if not then the tile just goes
*/
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

