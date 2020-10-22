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
]

function test() {
    for(var i = 0; i < (arrayOfGameBombState.length); i++) {
        if (arrayOfGameBombState[i] === 0) {
            arrayOfGameBombState[i] = arrayOfBombsOrNot[Math.floor(Math.random() * arrayOfBombsOrNot.length)]
        } console.log(arrayOfGameBombState)
    }
}
