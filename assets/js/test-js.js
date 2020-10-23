var numberOfBombs = 0;
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
]

function test() { //fix
    for(var i = 0; i < (arrayOfGameBombState.length); i++) {
        if (arrayOfGameBombState[i] === 0) {
            if (numberOfBombs < 13) {
                 arrayOfGameBombState[i] = arrayOfBombsOrNot[Math.floor(Math.random() * arrayOfBombsOrNot.length)] 
                 if (arrayOfGameBombState[i] = "B") {
                     numberOfBombs += 1;
                 }
            } else {
                arrayOfGameBombState[i] = "NB";
            }
        } else arrayOfGameBombState[i] = arrayOfGameBombState[i];
    }
}
