var arrayOfBombsOrNot = 
[
    "B", "B", "B", "B", "B", "B", "B", "B", "B", "B",
    "B", "B", "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB", 
    "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB", 
    "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB",
    "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB",
    "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB",
    "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB",
    "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB",
    "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB",
    "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB", "NB"
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
var numberOfBombs = 0;
for(var i = 0; i < (arrayOfGameBombState.length - 1); i++) { //do if else for each tile
    if (arrayOfGameBombState[i] === 0) {
        if (numberOfBombs < 13) {
             arrayOfGameBombState[i] = arrayOfBombsOrNot[Math.floor(Math.random() * (arrayOfBombsOrNot.length -1))]; 
             if (arrayOfGameBombState[i] = "B") {
                 numberOfBombs += 1;
             }
        } else {
            arrayOfGameBombState[i] = "NB";
        }
    }
} 

function playerLoses() { //need to try do i and j loop so that each is taken away, however I'll need to work out how to put a variable in an element name
    for (var i = 1; i < 11; i++)  { //change i and j to row and column
        for (var j = 1; j < 11; j++) {
        image = document.getElementById("front-tile-row-" + i +"-column-" + j + "-img")
        image.style.visibility = "hidden";
        image.style.display = "none";
        console.log(image)
        console.log("i= ", i)
        console.log("j= ", j)
    }}
}
function clickTile(a) {
    switch (a) { 
        case 1:
            image = document.getElementById("front-tile-row-1-column-1-img");
            image.style.display = "none";
            break;
    }

}











//TO DO:
//under the i function do if and else to generate each image of the tile
//For the case where it's NB you need to call another function which calculates the number
//in the switch do if nb then [code you've already got], if bomb then playerLoses()
