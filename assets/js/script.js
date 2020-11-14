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
    0, 0, 0, 0, 0, 0, 0, 0, 0, "B"
]
var numberOfBombs = 0;
for(var i = 0; i < (arrayOfGameBombState.length - 1); i++) { //do if else for each tile
    if (arrayOfGameBombState[i] === 0) {
        if (numberOfBombs < 13) {
             arrayOfGameBombState[i] = arrayOfBombsOrNot[Math.floor(Math.random() * (arrayOfBombsOrNot.length -1))]; 
             if (arrayOfGameBombState[i] == "B") {
                 numberOfBombs += 1;
             }
        } else {
            arrayOfGameBombState[i] = "NB";
        }
    }
} 

//#region set the bombs
function setTheBombs() {
if (arrayOfGameBombState[0] == "B") {
    element = document.getElementById("back-tile-row-1-column-1-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState1 = 0;
    if (arrayOfGameBombState[1] =="B") {
        bombState1 += 1;
    }
    if (arrayOfGameBombState[11] =="B") {
        bombState1 += 1;
    }
    if (arrayOfGameBombState[12] =="B") {
        bombState1 += 1;
    }
    element = document.getElementById("back-tile-row-1-column-1-img").src = "assets/img/" + bombState1 +".png";
}
if (arrayOfGameBombState[1] == "B") {
    element = document.getElementById("back-tile-row-1-column-2-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState2 = 0;
    if (arrayOfGameBombState[0] =="B") {
        bombState2 += 1;
    }
    if (arrayOfGameBombState[2] =="B") {
        bombState2 += 1;
    }
    if (arrayOfGameBombState[10] =="B") {
        bombState2 += 1;
    }
    if (arrayOfGameBombState[11] =="B") {
        bombState2 += 1;
    }
    if (arrayOfGameBombState[12] =="B") {
        bombState2 += 1;
    }
    element = document.getElementById("back-tile-row-1-column-2-img").src = "assets/img/" + bombState2 +".png";
}
if (arrayOfGameBombState[2] == "B") {
    element = document.getElementById("back-tile-row-1-column-3-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState3 = 0;
    if (arrayOfGameBombState[1] =="B") {
        bombState3 += 1;
    }
    if (arrayOfGameBombState[3] =="B") {
        bombState3 += 1;
    }
    if (arrayOfGameBombState[11] =="B") {
        bombState3 += 1;
    }
    if (arrayOfGameBombState[12] =="B") {
        bombState3 += 1;
    }
    if (arrayOfGameBombState[13] =="B") {
        bombState3 += 1;
    }
    element = document.getElementById("back-tile-row-1-column-3-img").src = "assets/img/" + bombState3 +".png";
}
if (arrayOfGameBombState[3] == "B") {
    element = document.getElementById("back-tile-row-1-column-4-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState4 = 0;
    if (arrayOfGameBombState[2] =="B") {
        bombState4 += 1;
    }
    if (arrayOfGameBombState[4] =="B") {
        bombState4 += 1;
    }
    if (arrayOfGameBombState[12] =="B") {
        bombState4 += 1;
    }
    if (arrayOfGameBombState[13] =="B") {
        bombState4 += 1;
    }
    if (arrayOfGameBombState[14] =="B") {
        bombState4 += 1;
    }
    element = document.getElementById("back-tile-row-1-column-4-img").src = "assets/img/" + bombState4 +".png";
}
if (arrayOfGameBombState[4] == "B") {
    element = document.getElementById("back-tile-row-1-column-5-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState5 = 0;
    if (arrayOfGameBombState[3] =="B") {
        bombState5 += 1;
    }
    if (arrayOfGameBombState[5] =="B") {
        bombState5 += 1;
    }
    if (arrayOfGameBombState[13] =="B") {
        bombState5 += 1;
    }
    if (arrayOfGameBombState[14] =="B") {
        bombState5 += 1;
    }
    if (arrayOfGameBombState[15] =="B") {
        bombState5 += 1;
    }
    element = document.getElementById("back-tile-row-1-column-5-img").src = "assets/img/" + bombState5 +".png";
}
if (arrayOfGameBombState[5] == "B") {
    element = document.getElementById("back-tile-row-1-column-6-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState6 = 0;
    if (arrayOfGameBombState[4] =="B") {
        bombState6 += 1;
    }
    if (arrayOfGameBombState[6] =="B") {
        bombState6 += 1;
    }
    if (arrayOfGameBombState[14] =="B") {
        bombState6 += 1;
    }
    if (arrayOfGameBombState[15] =="B") {
        bombState6 += 1;
    }
    if (arrayOfGameBombState[16] =="B") {
        bombState6 += 1;
    }
    element = document.getElementById("back-tile-row-1-column-6-img").src = "assets/img/" + bombState6 +".png";
}
if (arrayOfGameBombState[6] == "B") {
    element = document.getElementById("back-tile-row-1-column-7-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState7 = 0;
    if (arrayOfGameBombState[5] =="B") {
        bombState7 += 1;
    }
    if (arrayOfGameBombState[7] =="B") {
        bombState7 += 1;
    }
    if (arrayOfGameBombState[15] =="B") {
        bombState7 += 1;
    }
    if (arrayOfGameBombState[16] =="B") {
        bombState7 += 1;
    }
    if (arrayOfGameBombState[17] =="B") {
        bombState7 += 1;
    }
    element = document.getElementById("back-tile-row-1-column-7-img").src = "assets/img/" + bombState7 +".png";
}
if (arrayOfGameBombState[7] == "B") {
    element = document.getElementById("back-tile-row-1-column-8-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState8 = 0;
    if (arrayOfGameBombState[6] =="B") {
        bombState8 += 1;
    }
    if (arrayOfGameBombState[8] =="B") {
        bombState8 += 1;
    }
    if (arrayOfGameBombState[16] =="B") {
        bombState8 += 1;
    }
    if (arrayOfGameBombState[17] =="B") {
        bombState8 += 1;
    }
    if (arrayOfGameBombState[18] =="B") {
        bombState8 += 1;
    }
    element = document.getElementById("back-tile-row-1-column-8-img").src = "assets/img/" + bombState8 +".png";
}
if (arrayOfGameBombState[8] == "B") {
    element = document.getElementById("back-tile-row-1-column-9-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState9 = 0;
    if (arrayOfGameBombState[7] =="B") {
        bombState9 += 1;
    }
    if (arrayOfGameBombState[9] =="B") {
        bombState9 += 1;
    }
    if (arrayOfGameBombState[17] =="B") {
        bombState9 += 1;
    }
    if (arrayOfGameBombState[18] =="B") {
        bombState9 += 1;
    }
    if (arrayOfGameBombState[19] =="B") {
        bombState9 += 1;
    }
    element = document.getElementById("back-tile-row-1-column-9-img").src = "assets/img/" + bombState9 +".png";
}
if (arrayOfGameBombState[9] == "B") {
    element = document.getElementById("back-tile-row-1-column-10-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState10 = 0;
    if (arrayOfGameBombState[7] =="B") {
        bombState10 += 1;
    }
    if (arrayOfGameBombState[9] =="B") {
        bombState10 += 1;
    }
    if (arrayOfGameBombState[17] =="B") {
        bombState10 += 1;
    }
    if (arrayOfGameBombState[18] =="B") {
        bombState10 += 1;
    }
    if (arrayOfGameBombState[19] =="B") {
        bombState10 += 1;
    }
    element = document.getElementById("back-tile-row-1-column-10-img").src = "assets/img/" + bombState10 +".png";
}
if (arrayOfGameBombState[10] == "B") {
    element = document.getElementById("back-tile-row-2-column-1-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState11 = 0;
    if (arrayOfGameBombState[0] =="B") {
        bombState11 += 1;
    }
    if (arrayOfGameBombState[1] =="B") {
        bombState11 += 1;
    }
    if (arrayOfGameBombState[11] =="B") {
        bombState11 += 1;
    }
    if (arrayOfGameBombState[20] =="B") {
        bombState11 += 1;
    }
    if (arrayOfGameBombState[21] =="B") {
        bombState11 += 1;
    }
    element = document.getElementById("back-tile-row-2-column-1-img").src = "assets/img/" + bombState11 +".png";
}
if (arrayOfGameBombState[11] == "B") {
    element = document.getElementById("back-tile-row-2-column-2-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState12 = 0;
    if (arrayOfGameBombState[0] == "B") {
        bombState12 += 1;
    }
    if (arrayOfGameBombState[1] == "B") {
        bombState12 += 1;
    }
    if (arrayOfGameBombState[2] == "B") {
        bombState12 += 1;
    }
    if (arrayOfGameBombState[10] == "B") {
        bombState12 += 1;
    }
    if (arrayOfGameBombState[12] == "B") {
        bombState12 += 1;
    }
    if (arrayOfGameBombState[20] == "B") {
        bombState12 += 1;
    }
    if (arrayOfGameBombState[21] == "B") {
        bombState12 += 1;
    }
    if (arrayOfGameBombState[22] == "B") {
        bombState12 += 1;
    }
    element = document.getElementById("back-tile-row-2-column-2-img").src = "assets/img/" + bombState12  + ".png";
}
if (arrayOfGameBombState[12] == "B") {
    element = document.getElementById("back-tile-row-2-column-3-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState13 = 0;
    if (arrayOfGameBombState[1] == "B") {
        bombState13 += 1;
    }
    if (arrayOfGameBombState[2] == "B") {
        bombState13 += 1;
    }
    if (arrayOfGameBombState[3] == "B") {
        bombState13 += 1;
    }
    if (arrayOfGameBombState[11] == "B") {
        bombState13 += 1;
    }
    if (arrayOfGameBombState[13] == "B") {
        bombState13 += 1;
    }
    if (arrayOfGameBombState[21] == "B") {
        bombState13 += 1;
    }
    if (arrayOfGameBombState[22] == "B") {
        bombState13 += 1;
    }
    if (arrayOfGameBombState[23] == "B") {
        bombState13 += 1;
    }
    element = document.getElementById("back-tile-row-2-column-3-img").src = "assets/img/" + bombState13  + ".png";
}
if (arrayOfGameBombState[13] == "B") {
    element = document.getElementById("back-tile-row-2-column-4-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState14 = 0;
    if (arrayOfGameBombState[2] == "B") {
        bombState14 += 1;
    }
    if (arrayOfGameBombState[3] == "B") {
        bombState14 += 1;
    }
    if (arrayOfGameBombState[4] == "B") {
        bombState14 += 1;
    }
    if (arrayOfGameBombState[12] == "B") {
        bombState14 += 1;
    }
    if (arrayOfGameBombState[14] == "B") {
        bombState14 += 1;
    }
    if (arrayOfGameBombState[22] == "B") {
        bombState14 += 1;
    }
    if (arrayOfGameBombState[23] == "B") {
        bombState14 += 1;
    }
    if (arrayOfGameBombState[24] == "B") {
        bombState14 += 1;
    }
    element = document.getElementById("back-tile-row-2-column-4-img").src = "assets/img/" + bombState14  + ".png";
}
if (arrayOfGameBombState[14] == "B") {
    element = document.getElementById("back-tile-row-2-column-5-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState15 = 0;
    if (arrayOfGameBombState[3] == "B") {
        bombState15 += 1;
    }
    if (arrayOfGameBombState[4] == "B") {
        bombState15 += 1;
    }
    if (arrayOfGameBombState[5] == "B") {
        bombState15 += 1;
    }
    if (arrayOfGameBombState[13] == "B") {
        bombState15 += 1;
    }
    if (arrayOfGameBombState[15] == "B") {
        bombState15 += 1;
    }
    if (arrayOfGameBombState[23] == "B") {
        bombState15 += 1;
    }
    if (arrayOfGameBombState[24] == "B") {
        bombState15 += 1;
    }
    if (arrayOfGameBombState[25] == "B") {
        bombState15 += 1;
    }
    element = document.getElementById("back-tile-row-2-column-5-img").src = "assets/img/" + bombState15  + ".png";
}
if (arrayOfGameBombState[15] == "B") {
    element = document.getElementById("back-tile-row-2-column-6-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState16 = 0;
    if (arrayOfGameBombState[4] == "B") {
        bombState16 += 1;
    }
    if (arrayOfGameBombState[5] == "B") {
        bombState16 += 1;
    }
    if (arrayOfGameBombState[6] == "B") {
        bombState16 += 1;
    }
    if (arrayOfGameBombState[14] == "B") {
        bombState16 += 1;
    }
    if (arrayOfGameBombState[16] == "B") {
        bombState16 += 1;
    }
    if (arrayOfGameBombState[24] == "B") {
        bombState16 += 1;
    }
    if (arrayOfGameBombState[25] == "B") {
        bombState16 += 1;
    }
    if (arrayOfGameBombState[26] == "B") {
        bombState16 += 1;
    }
    element = document.getElementById("back-tile-row-2-column-6-img").src = "assets/img/" + bombState16  + ".png";
}
if (arrayOfGameBombState[16] == "B") {
    element = document.getElementById("back-tile-row-2-column-7-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState17 = 0;
    if (arrayOfGameBombState[5] == "B") {
        bombState17 += 1;
    }
    if (arrayOfGameBombState[6] == "B") {
        bombState17 += 1;
    }
    if (arrayOfGameBombState[7] == "B") {
        bombState17 += 1;
    }
    if (arrayOfGameBombState[15] == "B") {
        bombState17 += 1;
    }
    if (arrayOfGameBombState[17] == "B") {
        bombState17 += 1;
    }
    if (arrayOfGameBombState[25] == "B") {
        bombState17 += 1;
    }
    if (arrayOfGameBombState[26] == "B") {
        bombState17 += 1;
    }
    if (arrayOfGameBombState[27] == "B") {
        bombState17 += 1;
    }
    element = document.getElementById("back-tile-row-2-column-7-img").src = "assets/img/" + bombState17  + ".png";
}
if (arrayOfGameBombState[17] == "B") {
    element = document.getElementById("back-tile-row-2-column-8-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState18 = 0;
    if (arrayOfGameBombState[6] == "B") {
        bombState18 += 1;
    }
    if (arrayOfGameBombState[7] == "B") {
        bombState18 += 1;
    }
    if (arrayOfGameBombState[8] == "B") {
        bombState18 += 1;
    }
    if (arrayOfGameBombState[16] == "B") {
        bombState18 += 1;
    }
    if (arrayOfGameBombState[18] == "B") {
        bombState18 += 1;
    }
    if (arrayOfGameBombState[26] == "B") {
        bombState18 += 1;
    }
    if (arrayOfGameBombState[27] == "B") {
        bombState18 += 1;
    }
    if (arrayOfGameBombState[28] == "B") {
        bombState18 += 1;
    }
    element = document.getElementById("back-tile-row-2-column-8-img").src = "assets/img/" + bombState18  + ".png";
}
if (arrayOfGameBombState[18] == "B") {
    element = document.getElementById("back-tile-row-2-column-9-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState19 = 0;
    if (arrayOfGameBombState[7] == "B") {
        bombState19 += 1;
    }
    if (arrayOfGameBombState[8] == "B") {
        bombState19 += 1;
    }
    if (arrayOfGameBombState[9] == "B") {
        bombState19 += 1;
    }
    if (arrayOfGameBombState[17] == "B") {
        bombState19 += 1;
    }
    if (arrayOfGameBombState[19] == "B") {
        bombState19 += 1;
    }
    if (arrayOfGameBombState[27] == "B") {
        bombState19 += 1;
    }
    if (arrayOfGameBombState[28] == "B") {
        bombState19 += 1;
    }
    if (arrayOfGameBombState[29] == "B") {
        bombState19 += 1;
    }
    element = document.getElementById("back-tile-row-2-column-9-img").src = "assets/img/" + bombState19  + ".png";
}
if (arrayOfGameBombState[19] == "B") {
    element = document.getElementById("back-tile-row-2-column-10-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState20 = 0;
    if (arrayOfGameBombState[8] == "B") {
        bombState20 += 1;
    }
    if (arrayOfGameBombState[9] == "B") {
        bombState20 += 1;
    }
    if (arrayOfGameBombState[19] == "B") {
        bombState20 += 1;
    }
    if (arrayOfGameBombState[28] == "B") {
        bombState20 += 1;
    }
    if (arrayOfGameBombState[29] == "B") {
        bombState20 += 1;
    }
    element = document.getElementById("back-tile-row-2-column-10-img").src = "assets/img/" + bombState20  + ".png";
}
if (arrayOfGameBombState[20] == "B") {
    element = document.getElementById("back-tile-row-3-column-1-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState21 = 0;
    if (arrayOfGameBombState[10] == "B") {
        bombState21 += 1;
    }
    if (arrayOfGameBombState[11] == "B") {
        bombState21 += 1;
    }
    if (arrayOfGameBombState[21] == "B") {
        bombState21 += 1;
    }
    if (arrayOfGameBombState[30] == "B") {
        bombState21 += 1;
    }
    if (arrayOfGameBombState[31] == "B") {
        bombState21 += 1;
    }
    element = document.getElementById("back-tile-row-3-column-1-img").src = "assets/img/" + bombState21  + ".png";
}
if (arrayOfGameBombState[21] == "B") {
    element = document.getElementById("back-tile-row-3-column-2-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState22 = 0;
    if (arrayOfGameBombState[10] == "B") {
        bombState22 += 1;
    }
    if (arrayOfGameBombState[11] == "B") {
        bombState22 += 1;
    }
    if (arrayOfGameBombState[12] == "B") {
        bombState22 += 1;
    }
    if (arrayOfGameBombState[20] == "B") {
        bombState22 += 1;
    }
    if (arrayOfGameBombState[22] == "B") {
        bombState22 += 1;
    }
    if (arrayOfGameBombState[30] == "B") {
        bombState22 += 1;
    }
    if (arrayOfGameBombState[31] == "B") {
        bombState22 += 1;
    }
    if (arrayOfGameBombState[32] == "B") {
        bombState22 += 1;
    }
    element = document.getElementById("back-tile-row-3-column-2-img").src = "assets/img/" + bombState22  + ".png";
}
if (arrayOfGameBombState[22] == "B") {
    element = document.getElementById("back-tile-row-3-column-3-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState23 = 0;
    if (arrayOfGameBombState[11] == "B") {
        bombState23 += 1;
    }
    if (arrayOfGameBombState[12] == "B") {
        bombState23 += 1;
    }
    if (arrayOfGameBombState[13] == "B") {
        bombState23 += 1;
    }
    if (arrayOfGameBombState[21] == "B") {
        bombState23 += 1;
    }
    if (arrayOfGameBombState[23] == "B") {
        bombState23 += 1;
    }
    if (arrayOfGameBombState[31] == "B") {
        bombState23 += 1;
    }
    if (arrayOfGameBombState[32] == "B") {
        bombState23 += 1;
    }
    if (arrayOfGameBombState[33] == "B") {
        bombState23 += 1;
    }
    element = document.getElementById("back-tile-row-3-column-3-img").src = "assets/img/" + bombState23  + ".png";
}
if (arrayOfGameBombState[23] == "B") {
    element = document.getElementById("back-tile-row-3-column-4-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState24 = 0;
    if (arrayOfGameBombState[12] == "B") {
        bombState24 += 1;
    }
    if (arrayOfGameBombState[13] == "B") {
        bombState24 += 1;
    }
    if (arrayOfGameBombState[14] == "B") {
        bombState24 += 1;
    }
    if (arrayOfGameBombState[22] == "B") {
        bombState24 += 1;
    }
    if (arrayOfGameBombState[24] == "B") {
        bombState24 += 1;
    }
    if (arrayOfGameBombState[32] == "B") {
        bombState24 += 1;
    }
    if (arrayOfGameBombState[33] == "B") {
        bombState24 += 1;
    }
    if (arrayOfGameBombState[34] == "B") {
        bombState24 += 1;
    }
    element = document.getElementById("back-tile-row-3-column-4-img").src = "assets/img/" + bombState24  + ".png";
}
if (arrayOfGameBombState[24] == "B") {
    element = document.getElementById("back-tile-row-3-column-5-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState25 = 0;
    if (arrayOfGameBombState[13] == "B") {
        bombState25 += 1;
    }
    if (arrayOfGameBombState[14] == "B") {
        bombState25 += 1;
    }
    if (arrayOfGameBombState[15] == "B") {
        bombState25 += 1;
    }
    if (arrayOfGameBombState[23] == "B") {
        bombState25 += 1;
    }
    if (arrayOfGameBombState[25] == "B") {
        bombState25 += 1;
    }
    if (arrayOfGameBombState[33] == "B") {
        bombState25 += 1;
    }
    if (arrayOfGameBombState[34] == "B") {
        bombState25 += 1;
    }
    if (arrayOfGameBombState[35] == "B") {
        bombState25 += 1;
    }
    element = document.getElementById("back-tile-row-3-column-5-img").src = "assets/img/" + bombState25  + ".png";
}
if (arrayOfGameBombState[25] == "B") {
    element = document.getElementById("back-tile-row-3-column-6-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState26 = 0;
    if (arrayOfGameBombState[14] == "B") {
        bombState26 += 1;
    }
    if (arrayOfGameBombState[15] == "B") {
        bombState26 += 1;
    }
    if (arrayOfGameBombState[16] == "B") {
        bombState26 += 1;
    }
    if (arrayOfGameBombState[24] == "B") {
        bombState26 += 1;
    }
    if (arrayOfGameBombState[26] == "B") {
        bombState26 += 1;
    }
    if (arrayOfGameBombState[34] == "B") {
        bombState26 += 1;
    }
    if (arrayOfGameBombState[35] == "B") {
        bombState26 += 1;
    }
    if (arrayOfGameBombState[36] == "B") {
        bombState26 += 1;
    }
    element = document.getElementById("back-tile-row-3-column-6-img").src = "assets/img/" + bombState26  + ".png";
}
if (arrayOfGameBombState[26] == "B") {
    element = document.getElementById("back-tile-row-3-column-7-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState27 = 0;
    if (arrayOfGameBombState[15] == "B") {
        bombState27 += 1;
    }
    if (arrayOfGameBombState[16] == "B") {
        bombState27 += 1;
    }
    if (arrayOfGameBombState[17] == "B") {
        bombState27 += 1;
    }
    if (arrayOfGameBombState[25] == "B") {
        bombState27 += 1;
    }
    if (arrayOfGameBombState[27] == "B") {
        bombState27 += 1;
    }
    if (arrayOfGameBombState[35] == "B") {
        bombState27 += 1;
    }
    if (arrayOfGameBombState[36] == "B") {
        bombState27 += 1;
    }
    if (arrayOfGameBombState[37] == "B") {
        bombState27 += 1;
    }
    element = document.getElementById("back-tile-row-3-column-7-img").src = "assets/img/" + bombState27  + ".png";
}
if (arrayOfGameBombState[27] == "B") {
    element = document.getElementById("back-tile-row-3-column-8-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState28 = 0;
    if (arrayOfGameBombState[16] == "B") {
        bombState28 += 1;
    }
    if (arrayOfGameBombState[17] == "B") {
        bombState28 += 1;
    }
    if (arrayOfGameBombState[18] == "B") {
        bombState28 += 1;
    }
    if (arrayOfGameBombState[26] == "B") {
        bombState28 += 1;
    }
    if (arrayOfGameBombState[28] == "B") {
        bombState28 += 1;
    }
    if (arrayOfGameBombState[36] == "B") {
        bombState28 += 1;
    }
    if (arrayOfGameBombState[37] == "B") {
        bombState28 += 1;
    }
    if (arrayOfGameBombState[38] == "B") {
        bombState28 += 1;
    }
    element = document.getElementById("back-tile-row-3-column-8-img").src = "assets/img/" + bombState28  + ".png";
}
if (arrayOfGameBombState[28] == "B") {
    element = document.getElementById("back-tile-row-3-column-9-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState29 = 0;
    if (arrayOfGameBombState[17] == "B") {
        bombState29 += 1;
    }
    if (arrayOfGameBombState[18] == "B") {
        bombState29 += 1;
    }
    if (arrayOfGameBombState[19] == "B") {
        bombState29 += 1;
    }
    if (arrayOfGameBombState[27] == "B") {
        bombState29 += 1;
    }
    if (arrayOfGameBombState[29] == "B") {
        bombState29 += 1;
    }
    if (arrayOfGameBombState[37] == "B") {
        bombState29 += 1;
    }
    if (arrayOfGameBombState[38] == "B") {
        bombState29 += 1;
    }
    if (arrayOfGameBombState[39] == "B") {
        bombState29 += 1;
    }
    element = document.getElementById("back-tile-row-3-column-9-img").src = "assets/img/" + bombState29  + ".png";
}
if (arrayOfGameBombState[29] == "B") {
    element = document.getElementById("back-tile-row-3-column-10-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState30 = 0;
    if (arrayOfGameBombState[18] == "B") {
        bombState30 += 1;
    }
    if (arrayOfGameBombState[19] == "B") {
        bombState30 += 1;
    }
    if (arrayOfGameBombState[28] == "B") {
        bombState30 += 1;
    }
    if (arrayOfGameBombState[38] == "B") {
        bombState30 += 1;
    }
    if (arrayOfGameBombState[39] == "B") {
        bombState30 += 1;
    }
    element = document.getElementById("back-tile-row-3-column-10-img").src = "assets/img/" + bombState30  + ".png";
}
if (arrayOfGameBombState[30] == "B") {
    element = document.getElementById("back-tile-row-4-column-1-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState31 = 0;
    if (arrayOfGameBombState[20] == "B") {
        bombState31 += 1;
    }
    if (arrayOfGameBombState[21] == "B") {
        bombState31 += 1;
    }
    if (arrayOfGameBombState[31] == "B") {
        bombState31 += 1;
    }
    if (arrayOfGameBombState[40] == "B") {
        bombState31 += 1;
    }
    if (arrayOfGameBombState[41] == "B") {
        bombState31 += 1;
    }
    element = document.getElementById("back-tile-row-4-column-1-img").src = "assets/img/" + bombState31  + ".png";
}
if (arrayOfGameBombState[31] == "B") {
    element = document.getElementById("back-tile-row-4-column-2-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState32 = 0;
    if (arrayOfGameBombState[20] == "B") {
        bombState32 += 1;
    }
    if (arrayOfGameBombState[21] == "B") {
        bombState32 += 1;
    }
    if (arrayOfGameBombState[22] == "B") {
        bombState32 += 1;
    }
    if (arrayOfGameBombState[30] == "B") {
        bombState32 += 1;
    }
    if (arrayOfGameBombState[32] == "B") {
        bombState32 += 1;
    }
    if (arrayOfGameBombState[40] == "B") {
        bombState32 += 1;
    }
    if (arrayOfGameBombState[41] == "B") {
        bombState32 += 1;
    }
    if (arrayOfGameBombState[42] == "B") {
        bombState32 += 1;
    }
    element = document.getElementById("back-tile-row-4-column-2-img").src = "assets/img/" + bombState32  + ".png";
}
if (arrayOfGameBombState[32] == "B") {
    element = document.getElementById("back-tile-row-4-column-3-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState33 = 0;
    if (arrayOfGameBombState[21] == "B") {
        bombState33 += 1;
    }
    if (arrayOfGameBombState[22] == "B") {
        bombState33 += 1;
    }
    if (arrayOfGameBombState[23] == "B") {
        bombState33 += 1;
    }
    if (arrayOfGameBombState[31] == "B") {
        bombState33 += 1;
    }
    if (arrayOfGameBombState[33] == "B") {
        bombState33 += 1;
    }
    if (arrayOfGameBombState[41] == "B") {
        bombState33 += 1;
    }
    if (arrayOfGameBombState[42] == "B") {
        bombState33 += 1;
    }
    if (arrayOfGameBombState[43] == "B") {
        bombState33 += 1;
    }
    element = document.getElementById("back-tile-row-4-column-3-img").src = "assets/img/" + bombState33  + ".png";
}
if (arrayOfGameBombState[33] == "B") {
    element = document.getElementById("back-tile-row-4-column-4-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState34 = 0;
    if (arrayOfGameBombState[22] == "B") {
        bombState34 += 1;
    }
    if (arrayOfGameBombState[23] == "B") {
        bombState34 += 1;
    }
    if (arrayOfGameBombState[24] == "B") {
        bombState34 += 1;
    }
    if (arrayOfGameBombState[32] == "B") {
        bombState34 += 1;
    }
    if (arrayOfGameBombState[34] == "B") {
        bombState34 += 1;
    }
    if (arrayOfGameBombState[42] == "B") {
        bombState34 += 1;
    }
    if (arrayOfGameBombState[43] == "B") {
        bombState34 += 1;
    }
    if (arrayOfGameBombState[44] == "B") {
        bombState34 += 1;
    }
    element = document.getElementById("back-tile-row-4-column-4-img").src = "assets/img/" + bombState34  + ".png";
}
if (arrayOfGameBombState[34] == "B") {
    element = document.getElementById("back-tile-row-4-column-5-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState35 = 0;
    if (arrayOfGameBombState[23] == "B") {
        bombState35 += 1;
    }
    if (arrayOfGameBombState[24] == "B") {
        bombState35 += 1;
    }
    if (arrayOfGameBombState[25] == "B") {
        bombState35 += 1;
    }
    if (arrayOfGameBombState[33] == "B") {
        bombState35 += 1;
    }
    if (arrayOfGameBombState[35] == "B") {
        bombState35 += 1;
    }
    if (arrayOfGameBombState[43] == "B") {
        bombState35 += 1;
    }
    if (arrayOfGameBombState[44] == "B") {
        bombState35 += 1;
    }
    if (arrayOfGameBombState[45] == "B") {
        bombState35 += 1;
    }
    element = document.getElementById("back-tile-row-4-column-5-img").src = "assets/img/" + bombState35  + ".png";
}
if (arrayOfGameBombState[35] == "B") {
    element = document.getElementById("back-tile-row-4-column-6-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState36 = 0;
    if (arrayOfGameBombState[24] == "B") {
        bombState36 += 1;
    }
    if (arrayOfGameBombState[25] == "B") {
        bombState36 += 1;
    }
    if (arrayOfGameBombState[26] == "B") {
        bombState36 += 1;
    }
    if (arrayOfGameBombState[34] == "B") {
        bombState36 += 1;
    }
    if (arrayOfGameBombState[36] == "B") {
        bombState36 += 1;
    }
    if (arrayOfGameBombState[43] == "B") {
        bombState36 += 1;
    }
    if (arrayOfGameBombState[44] == "B") {
        bombState36 += 1;
    }
    if (arrayOfGameBombState[45] == "B") {
        bombState36 += 1;
    }
    element = document.getElementById("back-tile-row-4-column-6-img").src = "assets/img/" + bombState36  + ".png";
}
if (arrayOfGameBombState[36] == "B") {
    element = document.getElementById("back-tile-row-4-column-7-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState37 = 0;
    if (arrayOfGameBombState[25] == "B") {
        bombState37 += 1;
    }
    if (arrayOfGameBombState[26] == "B") {
        bombState37 += 1;
    }
    if (arrayOfGameBombState[27] == "B") {
        bombState37 += 1;
    }
    if (arrayOfGameBombState[35] == "B") {
        bombState37 += 1;
    }
    if (arrayOfGameBombState[37] == "B") {
        bombState37 += 1;
    }
    if (arrayOfGameBombState[44] == "B") {
        bombState37 += 1;
    }
    if (arrayOfGameBombState[45] == "B") {
        bombState37 += 1;
    }
    if (arrayOfGameBombState[46] == "B") {
        bombState37 += 1;
    }
    element = document.getElementById("back-tile-row-4-column-7-img").src = "assets/img/" + bombState37  + ".png"; }

if (arrayOfGameBombState[37] == "B") {
    element = document.getElementById("back-tile-row-4-column-8-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState38 = 0;
    if (arrayOfGameBombState[26] == "B") {
        bombState38 += 1;
    }
    if (arrayOfGameBombState[27] == "B") {
        bombState38 += 1;
    }
    if (arrayOfGameBombState[28] == "B") {
        bombState38 += 1;
    }
    if (arrayOfGameBombState[36] == "B") {
        bombState38 += 1;
    }
    if (arrayOfGameBombState[38] == "B") {
        bombState38 += 1;
    }
    if (arrayOfGameBombState[45] == "B") {
        bombState38 += 1;
    }
    if (arrayOfGameBombState[46] == "B") {
        bombState38 += 1;
    }
    if (arrayOfGameBombState[47] == "B") {
        bombState38 += 1;
    }
    element = document.getElementById("back-tile-row-4-column-8-img").src = "assets/img/" + bombState38  + ".png";
}
if (arrayOfGameBombState[38] == "B") {
    element = document.getElementById("back-tile-row-4-column-9-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState39 = 0;
    if (arrayOfGameBombState[27] == "B") {
        bombState39 += 1;
    }
    if (arrayOfGameBombState[28] == "B") {
        bombState39 += 1;
    }
    if (arrayOfGameBombState[29] == "B") {
        bombState39 += 1;
    }
    if (arrayOfGameBombState[37] == "B") {
        bombState39 += 1;
    }
    if (arrayOfGameBombState[39] == "B") {
        bombState39 += 1;
    }
    if (arrayOfGameBombState[46] == "B") {
        bombState39 += 1;
    }
    if (arrayOfGameBombState[47] == "B") {
        bombState39 += 1;
    }
    if (arrayOfGameBombState[48] == "B") {
        bombState39 += 1;
    }
    element = document.getElementById("back-tile-row-4-column-9-img").src = "assets/img/" + bombState39  + ".png";
}
if (arrayOfGameBombState[39] == "B") {
    element = document.getElementById("back-tile-row-4-column-10-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState40 = 0;
    if (arrayOfGameBombState[28] == "B") {
        bombState40 += 1;
    }
    if (arrayOfGameBombState[29] == "B") {
        bombState40 += 1;
    }
    if (arrayOfGameBombState[38] == "B") {
        bombState40 += 1;
    }
    if (arrayOfGameBombState[48] == "B") {
        bombState40 += 1;
    }
    if (arrayOfGameBombState[49] == "B") {
        bombState40 += 1;
    }
    element = document.getElementById("back-tile-row-4-column-10-img").src = "assets/img/" + bombState40  + ".png";
}
if (arrayOfGameBombState[40] == "B") {
    element = document.getElementById("back-tile-row-5-column-1-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState41 = 0;
    if (arrayOfGameBombState[30] == "B") {
        bombState41 += 1;
    }
    if (arrayOfGameBombState[31] == "B") {
        bombState41 += 1;
    }
    if (arrayOfGameBombState[41] == "B") {
        bombState41 += 1;
    }
    if (arrayOfGameBombState[50] == "B") {
        bombState41 += 1;
    }
    if (arrayOfGameBombState[51] == "B") {
        bombState41 += 1;
    }
    element = document.getElementById("back-tile-row-5-column-1-img").src = "assets/img/" + bombState41  + ".png";
}
if (arrayOfGameBombState[41] == "B") {
    element = document.getElementById("back-tile-row-5-column-2-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState42 = 0;
    if (arrayOfGameBombState[30] == "B") {
        bombState42 += 1;
    }
    if (arrayOfGameBombState[31] == "B") {
        bombState42 += 1;
    }
    if (arrayOfGameBombState[32] == "B") {
        bombState42 += 1;
    }
    if (arrayOfGameBombState[40] == "B") {
        bombState42 += 1;
    }
    if (arrayOfGameBombState[42] == "B") {
        bombState42 += 1;
    }
    if (arrayOfGameBombState[50] == "B") {
        bombState42 += 1;
    }
    if (arrayOfGameBombState[51] == "B") {
        bombState42 += 1;
    }
    if (arrayOfGameBombState[52] == "B") {
        bombState42 += 1;
    }
    element = document.getElementById("back-tile-row-5-column-2-img").src = "assets/img/" + bombState42  + ".png";
}
if (arrayOfGameBombState[42] == "B") {
    element = document.getElementById("back-tile-row-5-column-3-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState43 = 0;
    if (arrayOfGameBombState[31] == "B") {
        bombState43 += 1;
    }
    if (arrayOfGameBombState[32] == "B") {
        bombState43 += 1;
    }
    if (arrayOfGameBombState[33] == "B") {
        bombState43 += 1;
    }
    if (arrayOfGameBombState[41] == "B") {
        bombState43 += 1;
    }
    if (arrayOfGameBombState[43] == "B") {
        bombState43 += 1;
    }
    if (arrayOfGameBombState[51] == "B") {
        bombState43 += 1;
    }
    if (arrayOfGameBombState[52] == "B") {
        bombState43 += 1;
    }
    if (arrayOfGameBombState[53] == "B") {
        bombState43 += 1;
    }
    element = document.getElementById("back-tile-row-5-column-3-img").src = "assets/img/" + bombState43  + ".png";
}
if (arrayOfGameBombState[43] == "B") {
    element = document.getElementById("back-tile-row-5-column-4-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState44 = 0;
    if (arrayOfGameBombState[32] == "B") {
        bombState44 += 1;
    }
    if (arrayOfGameBombState[33] == "B") {
        bombState44 += 1;
    }
    if (arrayOfGameBombState[34] == "B") {
        bombState44 += 1;
    }
    if (arrayOfGameBombState[42] == "B") {
        bombState44 += 1;
    }
    if (arrayOfGameBombState[44] == "B") {
        bombState44 += 1;
    }
    if (arrayOfGameBombState[52] == "B") {
        bombState44 += 1;
    }
    if (arrayOfGameBombState[53] == "B") {
        bombState44 += 1;
    }
    if (arrayOfGameBombState[54] == "B") {
        bombState44 += 1;
    }
    element = document.getElementById("back-tile-row-5-column-4-img").src = "assets/img/" + bombState44  + ".png";
}
if (arrayOfGameBombState[44] == "B") {
    element = document.getElementById("back-tile-row-5-column-5-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState45 = 0;
    if (arrayOfGameBombState[33] == "B") {
        bombState45 += 1;
    }
    if (arrayOfGameBombState[34] == "B") {
        bombState45 += 1;
    }
    if (arrayOfGameBombState[35] == "B") {
        bombState45 += 1;
    }
    if (arrayOfGameBombState[43] == "B") {
        bombState45 += 1;
    }
    if (arrayOfGameBombState[45] == "B") {
        bombState45 += 1;
    }
    if (arrayOfGameBombState[53] == "B") {
        bombState45 += 1;
    }
    if (arrayOfGameBombState[54] == "B") {
        bombState45 += 1;
    }
    if (arrayOfGameBombState[55] == "B") {
        bombState45 += 1;
    }
    element = document.getElementById("back-tile-row-5-column-5-img").src = "assets/img/" + bombState45  + ".png";
}
if (arrayOfGameBombState[45] == "B") {
    element = document.getElementById("back-tile-row-5-column-6-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState46 = 0;
    if (arrayOfGameBombState[34] == "B") {
        bombState46 += 1;
    }
    if (arrayOfGameBombState[35] == "B") {
        bombState46 += 1;
    }
    if (arrayOfGameBombState[36] == "B") {
        bombState46 += 1;
    }
    if (arrayOfGameBombState[44] == "B") {
        bombState46 += 1;
    }
    if (arrayOfGameBombState[46] == "B") {
        bombState46 += 1;
    }
    if (arrayOfGameBombState[54] == "B") {
        bombState46 += 1;
    }
    if (arrayOfGameBombState[55] == "B") {
        bombState46 += 1;
    }
    if (arrayOfGameBombState[56] == "B") {
        bombState46 += 1;
    }
    element = document.getElementById("back-tile-row-5-column-6-img").src = "assets/img/" + bombState46  + ".png";
}
if (arrayOfGameBombState[46] == "B") {
    element = document.getElementById("back-tile-row-5-column-7-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState47 = 0;
    if (arrayOfGameBombState[35] == "B") {
        bombState47 += 1;
    }
    if (arrayOfGameBombState[36] == "B") {
        bombState47 += 1;
    }
    if (arrayOfGameBombState[37] == "B") {
        bombState47 += 1;
    }
    if (arrayOfGameBombState[45] == "B") {
        bombState47 += 1;
    }
    if (arrayOfGameBombState[47] == "B") {
        bombState47 += 1;
    }
    if (arrayOfGameBombState[55] == "B") {
        bombState47 += 1;
    }
    if (arrayOfGameBombState[56] == "B") {
        bombState47 += 1;
    }
    if (arrayOfGameBombState[57] == "B") {
        bombState47 += 1;
    }
    element = document.getElementById("back-tile-row-5-column-7-img").src = "assets/img/" + bombState47  + ".png";
}
if (arrayOfGameBombState[47] == "B") {
    element = document.getElementById("back-tile-row-5-column-8-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState48 = 0;
    if (arrayOfGameBombState[36] == "B") {
        bombState48 += 1;
    }
    if (arrayOfGameBombState[37] == "B") {
        bombState48 += 1;
    }
    if (arrayOfGameBombState[38] == "B") {
        bombState48 += 1;
    }
    if (arrayOfGameBombState[46] == "B") {
        bombState48 += 1;
    }
    if (arrayOfGameBombState[48] == "B") {
        bombState48 += 1;
    }
    if (arrayOfGameBombState[56] == "B") {
        bombState48 += 1;
    }
    if (arrayOfGameBombState[57] == "B") {
        bombState48 += 1;
    }
    if (arrayOfGameBombState[58] == "B") {
        bombState48 += 1;
    }
    element = document.getElementById("back-tile-row-5-column-8-img").src = "assets/img/" + bombState48  + ".png";
}
if (arrayOfGameBombState[48] == "B") {
    element = document.getElementById("back-tile-row-5-column-9-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState49 = 0;
    if (arrayOfGameBombState[37] == "B") {
        bombState49 += 1;
    }
    if (arrayOfGameBombState[38] == "B") {
        bombState49 += 1;
    }
    if (arrayOfGameBombState[39] == "B") {
        bombState49 += 1;
    }
    if (arrayOfGameBombState[47] == "B") {
        bombState49 += 1;
    }
    if (arrayOfGameBombState[49] == "B") {
        bombState49 += 1;
    }
    if (arrayOfGameBombState[57] == "B") {
        bombState49 += 1;
    }
    if (arrayOfGameBombState[58] == "B") {
        bombState49 += 1;
    }
    if (arrayOfGameBombState[59] == "B") {
        bombState49 += 1;
    }
    element = document.getElementById("back-tile-row-5-column-9-img").src = "assets/img/" + bombState49  + ".png";
}
if (arrayOfGameBombState[49] == "B") {
    element = document.getElementById("back-tile-row-5-column-10-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState50 = 0;
    if (arrayOfGameBombState[38] == "B") {
        bombState50 += 1;
    }
    if (arrayOfGameBombState[39] == "B") {
        bombState50 += 1;
    }
    if (arrayOfGameBombState[48] == "B") {
        bombState50 += 1;
    }
    if (arrayOfGameBombState[58] == "B") {
        bombState50 += 1;
    }
    if (arrayOfGameBombState[59] == "B") {
        bombState50 += 1;
    }
    element = document.getElementById("back-tile-row-5-column-10-img").src = "assets/img/" + bombState50  + ".png";
}
if (arrayOfGameBombState[50] == "B") {
    element = document.getElementById("back-tile-row-6-column-1-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState51 = 0;
    if (arrayOfGameBombState[40] == "B") {
        bombState51 += 1;
    }
    if (arrayOfGameBombState[41] == "B") {
        bombState51 += 1;
    }
    if (arrayOfGameBombState[51] == "B") {
        bombState51 += 1;
    }
    if (arrayOfGameBombState[60] == "B") {
        bombState51 += 1;
    }
    if (arrayOfGameBombState[61] == "B") {
        bombState51 += 1;
    }
    element = document.getElementById("back-tile-row-6-column-1-img").src = "assets/img/" + bombState51  + ".png";
}
if (arrayOfGameBombState[51] == "B") {
    element = document.getElementById("back-tile-row-6-column-2-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState52 = 0;
    if (arrayOfGameBombState[40] == "B") {
        bombState52 += 1;
    }
    if (arrayOfGameBombState[41] == "B") {
        bombState52 += 1;
    }
    if (arrayOfGameBombState[42] == "B") {
        bombState52 += 1;
    }
    if (arrayOfGameBombState[50] == "B") {
        bombState52 += 1;
    }
    if (arrayOfGameBombState[52] == "B") {
        bombState52 += 1;
    }
    if (arrayOfGameBombState[60] == "B") {
        bombState52 += 1;
    }
    if (arrayOfGameBombState[61] == "B") {
        bombState52 += 1;
    }
    if (arrayOfGameBombState[62] == "B") {
        bombState52 += 1;
    }
    element = document.getElementById("back-tile-row-6-column-2-img").src = "assets/img/" + bombState52  + ".png";
}
if (arrayOfGameBombState[52] == "B") {
    element = document.getElementById("back-tile-row-6-column-3-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState53 = 0;
    if (arrayOfGameBombState[41] == "B") {
        bombState53 += 1;
    }
    if (arrayOfGameBombState[42] == "B") {
        bombState53 += 1;
    }
    if (arrayOfGameBombState[43] == "B") {
        bombState53 += 1;
    }
    if (arrayOfGameBombState[51] == "B") {
        bombState53 += 1;
    }
    if (arrayOfGameBombState[53] == "B") {
        bombState53 += 1;
    }
    if (arrayOfGameBombState[61] == "B") {
        bombState53 += 1;
    }
    if (arrayOfGameBombState[62] == "B") {
        bombState53 += 1;
    }
    if (arrayOfGameBombState[63] == "B") {
        bombState53 += 1;
    }
    element = document.getElementById("back-tile-row-6-column-3-img").src = "assets/img/" + bombState53  + ".png";
}
if (arrayOfGameBombState[53] == "B") {
    element = document.getElementById("back-tile-row-6-column-4-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState54 = 0;
    if (arrayOfGameBombState[42] == "B") {
        bombState54 += 1;
    }
    if (arrayOfGameBombState[43] == "B") {
        bombState54 += 1;
    }
    if (arrayOfGameBombState[44] == "B") {
        bombState54 += 1;
    }
    if (arrayOfGameBombState[52] == "B") {
        bombState54 += 1;
    }
    if (arrayOfGameBombState[54] == "B") {
        bombState54 += 1;
    }
    if (arrayOfGameBombState[62] == "B") {
        bombState54 += 1;
    }
    if (arrayOfGameBombState[63] == "B") {
        bombState54 += 1;
    }
    if (arrayOfGameBombState[64] == "B") {
        bombState54 += 1;
    }
    element = document.getElementById("back-tile-row-6-column-4-img").src = "assets/img/" + bombState54  + ".png";
}
if (arrayOfGameBombState[54] == "B") {
    element = document.getElementById("back-tile-row-6-column-5-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState55 = 0;
    if (arrayOfGameBombState[43] == "B") {
        bombState55 += 1;
    }
    if (arrayOfGameBombState[44] == "B") {
        bombState55 += 1;
    }
    if (arrayOfGameBombState[45] == "B") {
        bombState55 += 1;
    }
    if (arrayOfGameBombState[53] == "B") {
        bombState55 += 1;
    }
    if (arrayOfGameBombState[55] == "B") {
        bombState55 += 1;
    }
    if (arrayOfGameBombState[63] == "B") {
        bombState55 += 1;
    }
    if (arrayOfGameBombState[64] == "B") {
        bombState55 += 1;
    }
    if (arrayOfGameBombState[65] == "B") {
        bombState55 += 1;
    }
    element = document.getElementById("back-tile-row-6-column-5-img").src = "assets/img/" + bombState55  + ".png";
}
if (arrayOfGameBombState[55] == "B") {
    element = document.getElementById("back-tile-row-6-column-6-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState56 = 0;
    if (arrayOfGameBombState[44] == "B") {
        bombState56+= 1;
    }
    if (arrayOfGameBombState[45] == "B") {
        bombState56 += 1;
    }
    if (arrayOfGameBombState[46] == "B") {
        bombState56 += 1;
    }
    if (arrayOfGameBombState[54] == "B") {
        bombState56 += 1;
    }
    if (arrayOfGameBombState[56] == "B") {
        bombState56 += 1;
    }
    if (arrayOfGameBombState[64] == "B") {
        bombState56 += 1;
    }
    if (arrayOfGameBombState[65] == "B") {
        bombState56 += 1;
    }
    if (arrayOfGameBombState[66] == "B") {
        bombState56 += 1;
    }
    element = document.getElementById("back-tile-row-6-column-6-img").src = "assets/img/" + bombState56  + ".png";
}
if (arrayOfGameBombState[56] == "B") {
    element = document.getElementById("back-tile-row-6-column-7-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState57 = 0;
    if (arrayOfGameBombState[45] == "B") {
        bombState57+= 1;
    }
    if (arrayOfGameBombState[46] == "B") {
        bombState57 += 1;
    }
    if (arrayOfGameBombState[47] == "B") {
        bombState57 += 1;
    }
    if (arrayOfGameBombState[55] == "B") {
        bombState57 += 1;
    }
    if (arrayOfGameBombState[57] == "B") {
        bombState57 += 1;
    }
    if (arrayOfGameBombState[65] == "B") {
        bombState57 += 1;
    }
    if (arrayOfGameBombState[66] == "B") {
        bombState57 += 1;
    }
    if (arrayOfGameBombState[67] == "B") {
        bombState57 += 1;
    }
    element = document.getElementById("back-tile-row-6-column-7-img").src = "assets/img/" + bombState57  + ".png";
}
if (arrayOfGameBombState[57] == "B") {
    element = document.getElementById("back-tile-row-6-column-8-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState58 = 0;
    if (arrayOfGameBombState[46] == "B") {
        bombState58+= 1;
    }
    if (arrayOfGameBombState[47] == "B") {
        bombState58 += 1;
    }
    if (arrayOfGameBombState[48] == "B") {
        bombState58 += 1;
    }
    if (arrayOfGameBombState[56] == "B") {
        bombState58 += 1;
    }
    if (arrayOfGameBombState[58] == "B") {
        bombState58 += 1;
    }
    if (arrayOfGameBombState[66] == "B") {
        bombState58 += 1;
    }
    if (arrayOfGameBombState[67] == "B") {
        bombState58 += 1;
    }
    if (arrayOfGameBombState[68] == "B") {
        bombState58 += 1;
    }
    element = document.getElementById("back-tile-row-6-column-8-img").src = "assets/img/" + bombState58  + ".png";
}
if (arrayOfGameBombState[58] == "B") {
    element = document.getElementById("back-tile-row-6-column-9-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState59 = 0;
    if (arrayOfGameBombState[47] == "B") {
        bombState59+= 1;
    }
    if (arrayOfGameBombState[48] == "B") {
        bombState59 += 1;
    }
    if (arrayOfGameBombState[49] == "B") {
        bombState59 += 1;
    }
    if (arrayOfGameBombState[57] == "B") {
        bombState59 += 1;
    }
    if (arrayOfGameBombState[58] == "B") {
        bombState59 += 1;
    }
    if (arrayOfGameBombState[67] == "B") {
        bombState59 += 1;
    }
    if (arrayOfGameBombState[68] == "B") {
        bombState59 += 1;
    }
    if (arrayOfGameBombState[69] == "B") {
        bombState59 += 1;
    }
    element = document.getElementById("back-tile-row-6-column-9-img").src = "assets/img/" + bombState59  + ".png";
}
if (arrayOfGameBombState[59] == "B") {
    element = document.getElementById("back-tile-row-6-column-10-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState60 = 0;
    if (arrayOfGameBombState[48] == "B") {
        bombState60+= 1;
    }
    if (arrayOfGameBombState[49] == "B") {
        bombState60 += 1;
    }
    if (arrayOfGameBombState[58] == "B") {
        bombState60 += 1;
    }
    if (arrayOfGameBombState[68] == "B") {
        bombState60 += 1;
    }
    if (arrayOfGameBombState[69] == "B") {
        bombState60 += 1;
    }
    element = document.getElementById("back-tile-row-6-column-10-img").src = "assets/img/" + bombState60  + ".png";
}
if (arrayOfGameBombState[60] == "B") {
    element = document.getElementById("back-tile-row-7-column-1-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState61 = 0;
    if (arrayOfGameBombState[50] == "B") {
        bombState61+= 1;
    }
    if (arrayOfGameBombState[51] == "B") {
        bombState61 += 1;
    }
    if (arrayOfGameBombState[61] == "B") {
        bombState61 += 1;
    }
    if (arrayOfGameBombState[70] == "B") {
        bombState61 += 1;
    }
    if (arrayOfGameBombState[71] == "B") {
        bombState61 += 1;
    }
    element = document.getElementById("back-tile-row-7-column-1-img").src = "assets/img/" + bombState61  + ".png";
}
if (arrayOfGameBombState[61] == "B") {
    element = document.getElementById("back-tile-row-7-column-2-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState62 = 0;
    if (arrayOfGameBombState[50] == "B") {
        bombState62+= 1;
    }
    if (arrayOfGameBombState[51] == "B") {
        bombState62 += 1;
    }
    if (arrayOfGameBombState[52] == "B") {
        bombState62 += 1;
    }
    if (arrayOfGameBombState[60] == "B") {
        bombState62 += 1;
    }
    if (arrayOfGameBombState[62] == "B") {
        bombState62 += 1;
    }
    if (arrayOfGameBombState[70] == "B") {
        bombState62 += 1;
    }
    if (arrayOfGameBombState[71] == "B") {
        bombState62 += 1;
    }
    if (arrayOfGameBombState[72] == "B") {
        bombState62 += 1;
    }
    element = document.getElementById("back-tile-row-7-column-2-img").src = "assets/img/" + bombState62  + ".png";
}
if (arrayOfGameBombState[62] == "B") {
    element = document.getElementById("back-tile-row-7-column-3-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState63 = 0;
    if (arrayOfGameBombState[51] == "B") {
        bombState63+= 1;
    }
    if (arrayOfGameBombState[52] == "B") {
        bombState63 += 1;
    }
    if (arrayOfGameBombState[53] == "B") {
        bombState63 += 1;
    }
    if (arrayOfGameBombState[61] == "B") {
        bombState63 += 1;
    }
    if (arrayOfGameBombState[63] == "B") {
        bombState63 += 1;
    }
    if (arrayOfGameBombState[71] == "B") {
        bombState63 += 1;
    }
    if (arrayOfGameBombState[72] == "B") {
        bombState63 += 1;
    }
    if (arrayOfGameBombState[73] == "B") {
        bombState63 += 1;
    }
    element = document.getElementById("back-tile-row-7-column-3-img").src = "assets/img/" + bombState63  + ".png";
}
if (arrayOfGameBombState[63] == "B") {
    element = document.getElementById("back-tile-row-7-column-4-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState64 = 0;
    if (arrayOfGameBombState[52] == "B") {
        bombState64+= 1;
    }
    if (arrayOfGameBombState[53] == "B") {
        bombState64 += 1;
    }
    if (arrayOfGameBombState[54] == "B") {
        bombState64 += 1;
    }
    if (arrayOfGameBombState[62] == "B") {
        bombState64 += 1;
    }
    if (arrayOfGameBombState[64] == "B") {
        bombState64 += 1;
    }
    if (arrayOfGameBombState[72] == "B") {
        bombState64 += 1;
    }
    if (arrayOfGameBombState[73] == "B") {
        bombState64 += 1;
    }
    if (arrayOfGameBombState[74] == "B") {
        bombState64 += 1;
    }
    element = document.getElementById("back-tile-row-7-column-4-img").src = "assets/img/" + bombState64  + ".png";
}
if (arrayOfGameBombState[64] == "B") {
    element = document.getElementById("back-tile-row-7-column-5-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState65 = 0;
    if (arrayOfGameBombState[53] == "B") {
        bombState65+= 1;
    }
    if (arrayOfGameBombState[54] == "B") {
        bombState65 += 1;
    }
    if (arrayOfGameBombState[55] == "B") {
        bombState65 += 1;
    }
    if (arrayOfGameBombState[63] == "B") {
        bombState65 += 1;
    }
    if (arrayOfGameBombState[65] == "B") {
        bombState65 += 1;
    }
    if (arrayOfGameBombState[73] == "B") {
        bombState65 += 1;
    }
    if (arrayOfGameBombState[74] == "B") {
        bombState65 += 1;
    }
    if (arrayOfGameBombState[75] == "B") {
        bombState65 += 1;
    }
    element = document.getElementById("back-tile-row-7-column-5-img").src = "assets/img/" + bombState65 + ".png";
}
if (arrayOfGameBombState[65] == "B") {
    element = document.getElementById("back-tile-row-7-column-6-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState66 = 0;
    if (arrayOfGameBombState[54] == "B") {
        bombState66+= 1;
    }
    if (arrayOfGameBombState[55] == "B") {
        bombState66 += 1;
    }
    if (arrayOfGameBombState[56] == "B") {
        bombState66 += 1;
    }
    if (arrayOfGameBombState[64] == "B") {
        bombState66 += 1;
    }
    if (arrayOfGameBombState[66] == "B") {
        bombState66 += 1;
    }
    if (arrayOfGameBombState[74] == "B") {
        bombState66 += 1;
    }
    if (arrayOfGameBombState[75] == "B") {
        bombState66 += 1;
    }
    if (arrayOfGameBombState[76] == "B") {
        bombState66 += 1;
    }
    element = document.getElementById("back-tile-row-7-column-6-img").src = "assets/img/" + bombState66 + ".png";
}
if (arrayOfGameBombState[66] == "B") {
    element = document.getElementById("back-tile-row-7-column-7-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState67 = 0;
    if (arrayOfGameBombState[55] == "B") {
        bombState67+= 1;
    }
    if (arrayOfGameBombState[56] == "B") {
        bombState67 += 1;
    }
    if (arrayOfGameBombState[57] == "B") {
        bombState67 += 1;
    }
    if (arrayOfGameBombState[65] == "B") {
        bombState67 += 1;
    }
    if (arrayOfGameBombState[67] == "B") {
        bombState67 += 1;
    }
    if (arrayOfGameBombState[75] == "B") {
        bombState67 += 1;
    }
    if (arrayOfGameBombState[76] == "B") {
        bombState67 += 1;
    }
    if (arrayOfGameBombState[77] == "B") {
        bombState67 += 1;
    }
    element = document.getElementById("back-tile-row-7-column-7-img").src = "assets/img/" + bombState67 + ".png";
}
if (arrayOfGameBombState[67] == "B") {
    element = document.getElementById("back-tile-row-7-column-8-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState68 = 0;
    if (arrayOfGameBombState[56] == "B") {
        bombState68+= 1;
    }
    if (arrayOfGameBombState[57] == "B") {
        bombState68 += 1;
    }
    if (arrayOfGameBombState[58] == "B") {
        bombState68 += 1;
    }
    if (arrayOfGameBombState[66] == "B") {
        bombState68 += 1;
    }
    if (arrayOfGameBombState[68] == "B") {
        bombState68 += 1;
    }
    if (arrayOfGameBombState[76] == "B") {
        bombState68 += 1;
    }
    if (arrayOfGameBombState[77] == "B") {
        bombState68 += 1;
    }
    if (arrayOfGameBombState[78] == "B") {
        bombState68 += 1;
    }
    element = document.getElementById("back-tile-row-7-column-8-img").src = "assets/img/" + bombState68 + ".png";
}
if (arrayOfGameBombState[68] == "B") {
    element = document.getElementById("back-tile-row-7-column-9-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState69 = 0;
    if (arrayOfGameBombState[57] == "B") {
        bombState69+= 1;
    }
    if (arrayOfGameBombState[58] == "B") {
        bombState69 += 1;
    }
    if (arrayOfGameBombState[59] == "B") {
        bombState69 += 1;
    }
    if (arrayOfGameBombState[67] == "B") {
        bombState69 += 1;
    }
    if (arrayOfGameBombState[69] == "B") {
        bombState69 += 1;
    }
    if (arrayOfGameBombState[77] == "B") {
        bombState69 += 1;
    }
    if (arrayOfGameBombState[78] == "B") {
        bombState69 += 1;
    }
    if (arrayOfGameBombState[79] == "B") {
        bombState69 += 1;
    }
    element = document.getElementById("back-tile-row-7-column-9-img").src = "assets/img/" + bombState69 + ".png";
}
if (arrayOfGameBombState[69] == "B") {
    element = document.getElementById("back-tile-row-7-column-10-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState70 = 0;
    if (arrayOfGameBombState[58] == "B") {
        bombState70+= 1;
    }
    if (arrayOfGameBombState[59] == "B") {
        bombState70 += 1;
    }
    if (arrayOfGameBombState[68] == "B") {
        bombState70 += 1;
    }
    if (arrayOfGameBombState[78] == "B") {
        bombState70 += 1;
    }
    if (arrayOfGameBombState[79] == "B") {
        bombState70 += 1;
    }
    element = document.getElementById("back-tile-row-7-column-10-img").src = "assets/img/" + bombState70 + ".png";
}
if (arrayOfGameBombState[70] == "B") {
    element = document.getElementById("back-tile-row-8-column-1-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState71 = 0;
    if (arrayOfGameBombState[60] == "B") {
        bombState71 += 1;
    }
    if (arrayOfGameBombState[61] == "B") {
        bombState71 += 1;
    }
    if (arrayOfGameBombState[71] == "B") {
        bombState71 += 1;
    }
    if (arrayOfGameBombState[80] == "B") {
        bombState71 += 1;
    }
    if (arrayOfGameBombState[81] == "B") {
        bombState71 += 1;
    }
    element = document.getElementById("back-tile-row-8-column-1-img").src = "assets/img/" + bombState71 + ".png";
}
if (arrayOfGameBombState[71] == "B") {
    element = document.getElementById("back-tile-row-8-column-2-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState72 = 0;
    if (arrayOfGameBombState[60] == "B") {
        bombState72+= 1;
    }
    if (arrayOfGameBombState[61] == "B") {
        bombState72 += 1;
    }
    if (arrayOfGameBombState[62] == "B") {
        bombState72 += 1;
    }
    if (arrayOfGameBombState[70] == "B") {
        bombState72 += 1;
    }
    if (arrayOfGameBombState[72] == "B") {
        bombState72 += 1;
    }
    if (arrayOfGameBombState[80] == "B") {
        bombState72 += 1;
    }
    if (arrayOfGameBombState[81] == "B") {
        bombState72 += 1;
    }
    if (arrayOfGameBombState[82] == "B") {
        bombState72 += 1;
    }
    element = document.getElementById("back-tile-row-8-column-2-img").src = "assets/img/" + bombState72 + ".png";
}
if (arrayOfGameBombState[72] == "B") {
    element = document.getElementById("back-tile-row-8-column-3-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState73 = 0;
    if (arrayOfGameBombState[61] == "B") {
        bombState73+= 1;
    }
    if (arrayOfGameBombState[62] == "B") {
        bombState73 += 1;
    }
    if (arrayOfGameBombState[63] == "B") {
        bombState73 += 1;
    }
    if (arrayOfGameBombState[71] == "B") {
        bombState73 += 1;
    }
    if (arrayOfGameBombState[73] == "B") {
        bombState73 += 1;
    }
    if (arrayOfGameBombState[81] == "B") {
        bombState73 += 1;
    }
    if (arrayOfGameBombState[82] == "B") {
        bombState73 += 1;
    }
    if (arrayOfGameBombState[83] == "B") {
        bombState73 += 1;
    }
    element = document.getElementById("back-tile-row-8-column-3-img").src = "assets/img/" + bombState73 + ".png";
}
if (arrayOfGameBombState[73] == "B") {
    element = document.getElementById("back-tile-row-8-column-4-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState74 = 0;
    if (arrayOfGameBombState[62] == "B") {
        bombState74+= 1;
    }
    if (arrayOfGameBombState[63] == "B") {
        bombState74 += 1;
    }
    if (arrayOfGameBombState[64] == "B") {
        bombState74 += 1;
    }
    if (arrayOfGameBombState[72] == "B") {
        bombState74 += 1;
    }
    if (arrayOfGameBombState[74] == "B") {
        bombState74 += 1;
    }
    if (arrayOfGameBombState[82] == "B") {
        bombState74 += 1;
    }
    if (arrayOfGameBombState[83] == "B") {
        bombState74 += 1;
    }
    if (arrayOfGameBombState[84] == "B") {
        bombState74 += 1;
    }
    element = document.getElementById("back-tile-row-8-column-4-img").src = "assets/img/" + bombState74 + ".png";
}
if (arrayOfGameBombState[74] == "B") {
    element = document.getElementById("back-tile-row-8-column-5-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState75 = 0;
    if (arrayOfGameBombState[63] == "B") {
        bombState75+= 1;
    }
    if (arrayOfGameBombState[64] == "B") {
        bombState75 += 1;
    }
    if (arrayOfGameBombState[65] == "B") {
        bombState75 += 1;
    }
    if (arrayOfGameBombState[73] == "B") {
        bombState75 += 1;
    }
    if (arrayOfGameBombState[75] == "B") {
        bombState75 += 1;
    }
    if (arrayOfGameBombState[83] == "B") {
        bombState75 += 1;
    }
    if (arrayOfGameBombState[84] == "B") {
        bombState75 += 1;
    }
    if (arrayOfGameBombState[85] == "B") {
        bombState75 += 1;
    }
    element = document.getElementById("back-tile-row-8-column-5-img").src = "assets/img/" + bombState75 + ".png";
}
if (arrayOfGameBombState[75] == "B") {
    element = document.getElementById("back-tile-row-8-column-6-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState76 = 0;
    if (arrayOfGameBombState[64] == "B") {
        bombState76+= 1;
    }
    if (arrayOfGameBombState[65] == "B") {
        bombState76 += 1;
    }
    if (arrayOfGameBombState[66] == "B") {
        bombState76 += 1;
    }
    if (arrayOfGameBombState[74] == "B") {
        bombState76 += 1;
    }
    if (arrayOfGameBombState[76] == "B") {
        bombState76 += 1;
    }
    if (arrayOfGameBombState[84] == "B") {
        bombState76 += 1;
    }
    if (arrayOfGameBombState[85] == "B") {
        bombState76 += 1;
    }
    if (arrayOfGameBombState[86] == "B") {
        bombState76 += 1;
    }
    element = document.getElementById("back-tile-row-8-column-6-img").src = "assets/img/" + bombState76 + ".png";
}
if (arrayOfGameBombState[76] == "B") {
    element = document.getElementById("back-tile-row-8-column-7-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState77 = 0;
    if (arrayOfGameBombState[65] == "B") {
        bombState77 += 1;
    }
    if (arrayOfGameBombState[66] == "B") {
        bombState77 += 1;
    }
    if (arrayOfGameBombState[67] == "B") {
        bombState77 += 1;
    }
    if (arrayOfGameBombState[75] == "B") {
        bombState77 += 1;
    }
    if (arrayOfGameBombState[77] == "B") {
        bombState77 += 1;
    }
    if (arrayOfGameBombState[85] == "B") {
        bombState77 += 1;
    }
    if (arrayOfGameBombState[86] == "B") {
        bombState77 += 1;
    }
    if (arrayOfGameBombState[87] == "B") {
        bombState77 += 1;
    }
    element = document.getElementById("back-tile-row-8-column-7-img").src = "assets/img/" + bombState77 + ".png";
}
if (arrayOfGameBombState[77] == "B") {
    element = document.getElementById("back-tile-row-8-column-8-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState78 = 0;
    if (arrayOfGameBombState[66] == "B") {
        bombState78 += 1;
    }
    if (arrayOfGameBombState[67] == "B") {
        bombState78 += 1;
    }
    if (arrayOfGameBombState[68] == "B") {
        bombState78 += 1;
    }
    if (arrayOfGameBombState[76] == "B") {
        bombState78 += 1;
    }
    if (arrayOfGameBombState[78] == "B") {
        bombState78 += 1;
    }
    if (arrayOfGameBombState[86] == "B") {
        bombState78 += 1;
    }
    if (arrayOfGameBombState[87] == "B") {
        bombState78 += 1;
    }
    if (arrayOfGameBombState[88] == "B") {
        bombState78 += 1;
    }
    element = document.getElementById("back-tile-row-8-column-8-img").src = "assets/img/" + bombState78 + ".png";
}
if (arrayOfGameBombState[78] == "B") {
    element = document.getElementById("back-tile-row-8-column-9-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState79 = 0;
    if (arrayOfGameBombState[67] == "B") {
        bombState79 += 1;
    }
    if (arrayOfGameBombState[68] == "B") {
        bombState79 += 1;
    }
    if (arrayOfGameBombState[69] == "B") {
        bombState79 += 1;
    }
    if (arrayOfGameBombState[77] == "B") {
        bombState79 += 1;
    }
    if (arrayOfGameBombState[79] == "B") {
        bombState79 += 1;
    }
    if (arrayOfGameBombState[87] == "B") {
        bombState79 += 1;
    }
    if (arrayOfGameBombState[88] == "B") {
        bombState79 += 1;
    }
    if (arrayOfGameBombState[89] == "B") {
        bombState79 += 1;
    }
    element = document.getElementById("back-tile-row-8-column-9-img").src = "assets/img/" + bombState79 + ".png";
}
if (arrayOfGameBombState[79] == "B") {
    element = document.getElementById("back-tile-row-8-column-10-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState80 = 0;
    if (arrayOfGameBombState[68] == "B") {
        bombState80 += 1;
    }
    if (arrayOfGameBombState[69] == "B") {
        bombState80 += 1;
    }
    if (arrayOfGameBombState[78] == "B") {
        bombState80 += 1;
    }
    if (arrayOfGameBombState[88] == "B") {
        bombState80 += 1;
    }
    if (arrayOfGameBombState[89] == "B") {
        bombState80 += 1;
    }
    element = document.getElementById("back-tile-row-8-column-10-img").src = "assets/img/" + bombState80 + ".png";
}
if (arrayOfGameBombState[80] == "B") {
    element = document.getElementById("back-tile-row-9-column-1-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState81 = 0;
    if (arrayOfGameBombState[70] == "B") {
        bombState81 += 1;
    }
    if (arrayOfGameBombState[71] == "B") {
        bombState81 += 1;
    }
    if (arrayOfGameBombState[81] == "B") {
        bombState81 += 1;
    }
    if (arrayOfGameBombState[90] == "B") {
        bombState81 += 1;
    }
    if (arrayOfGameBombState[91] == "B") {
        bombState81 += 1;
    }
    element = document.getElementById("back-tile-row-9-column-1-img").src = "assets/img/" + bombState81 + ".png";
}
if (arrayOfGameBombState[81] == "B") {
    element = document.getElementById("back-tile-row-9-column-2-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState82 = 0;
    if (arrayOfGameBombState[70] == "B") {
        bombState82 += 1;
    }
    if (arrayOfGameBombState[71] == "B") {
        bombState82 += 1;
    }
    if (arrayOfGameBombState[72] == "B") {
        bombState82 += 1;
    }
    if (arrayOfGameBombState[80] == "B") {
        bombState82 += 1;
    }
    if (arrayOfGameBombState[82] == "B") {
        bombState82 += 1;
    }
    if (arrayOfGameBombState[90] == "B") {
        bombState82 += 1;
    }
    if (arrayOfGameBombState[91] == "B") {
        bombState82 += 1;
    }
    if (arrayOfGameBombState[92] == "B") {
        bombState82 += 1;
    }
    element = document.getElementById("back-tile-row-9-column-2-img").src = "assets/img/" + bombState82 + ".png";
}
if (arrayOfGameBombState[82] == "B") {
    element = document.getElementById("back-tile-row-9-column-3-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState83 = 0;
    if (arrayOfGameBombState[71] == "B") {
        bombState83 += 1;
    }
    if (arrayOfGameBombState[72] == "B") {
        bombState83 += 1;
    }
    if (arrayOfGameBombState[73] == "B") {
        bombState83 += 1;
    }
    if (arrayOfGameBombState[81] == "B") {
        bombState83 += 1;
    }
    if (arrayOfGameBombState[83] == "B") {
        bombState83 += 1;
    }
    if (arrayOfGameBombState[91] == "B") {
        bombState83 += 1;
    }
    if (arrayOfGameBombState[92] == "B") {
        bombState83 += 1;
    }
    if (arrayOfGameBombState[93] == "B") {
        bombState83 += 1;
    }
    element = document.getElementById("back-tile-row-9-column-3-img").src = "assets/img/" + bombState83 + ".png";
}
if (arrayOfGameBombState[83] == "B") {
    element = document.getElementById("back-tile-row-9-column-4-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState84 = 0;
    if (arrayOfGameBombState[72] == "B") {
        bombState84 += 1;
    }
    if (arrayOfGameBombState[73] == "B") {
        bombState84 += 1;
    }
    if (arrayOfGameBombState[74] == "B") {
        bombState84 += 1;
    }
    if (arrayOfGameBombState[82] == "B") {
        bombState84 += 1;
    }
    if (arrayOfGameBombState[84] == "B") {
        bombState84 += 1;
    }
    if (arrayOfGameBombState[92] == "B") {
        bombState84 += 1;
    }
    if (arrayOfGameBombState[93] == "B") {
        bombState84 += 1;
    }
    if (arrayOfGameBombState[94] == "B") {
        bombState84 += 1;
    }
    element = document.getElementById("back-tile-row-9-column-4-img").src = "assets/img/" + bombState84 + ".png";
}
if (arrayOfGameBombState[84] == "B") {
    element = document.getElementById("back-tile-row-9-column-5-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState85 = 0;
    if (arrayOfGameBombState[73] == "B") {
        bombState85 += 1;
    }
    if (arrayOfGameBombState[74] == "B") {
        bombState85 += 1;
    }
    if (arrayOfGameBombState[75] == "B") {
        bombState85 += 1;
    }
    if (arrayOfGameBombState[83] == "B") {
        bombState85 += 1;
    }
    if (arrayOfGameBombState[85] == "B") {
        bombState85 += 1;
    }
    if (arrayOfGameBombState[93] == "B") {
        bombState85 += 1;
    }
    if (arrayOfGameBombState[94] == "B") {
        bombState85 += 1;
    }
    if (arrayOfGameBombState[95] == "B") {
        bombState85 += 1;
    }
    element = document.getElementById("back-tile-row-9-column-5-img").src = "assets/img/" + bombState85 + ".png";
}
if (arrayOfGameBombState[85] == "B") {
    element = document.getElementById("back-tile-row-9-column-6-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState86 = 0;
    if (arrayOfGameBombState[74] == "B") {
        bombState86 += 1;
    }
    if (arrayOfGameBombState[75] == "B") {
        bombState86 += 1;
    }
    if (arrayOfGameBombState[76] == "B") {
        bombState86 += 1;
    }
    if (arrayOfGameBombState[84] == "B") {
        bombState86 += 1;
    }
    if (arrayOfGameBombState[86] == "B") {
        bombState86 += 1;
    }
    if (arrayOfGameBombState[94] == "B") {
        bombState86 += 1;
    }
    if (arrayOfGameBombState[95] == "B") {
        bombState86 += 1;
    }
    if (arrayOfGameBombState[96] == "B") {
        bombState86 += 1;
    }
    element = document.getElementById("back-tile-row-9-column-6-img").src = "assets/img/" + bombState86 + ".png";
}
if (arrayOfGameBombState[86] == "B") {
    element = document.getElementById("back-tile-row-9-column-7-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState87 = 0;
    if (arrayOfGameBombState[75] == "B") {
        bombState87 += 1;
    }
    if (arrayOfGameBombState[76] == "B") {
        bombState87 += 1;
    }
    if (arrayOfGameBombState[77] == "B") {
        bombState87 += 1;
    }
    if (arrayOfGameBombState[84] == "B") {
        bombState87 += 1;
    }
    if (arrayOfGameBombState[86] == "B") {
        bombState87 += 1;
    }
    if (arrayOfGameBombState[95] == "B") {
        bombState87 += 1;
    }
    if (arrayOfGameBombState[96] == "B") {
        bombState87 += 1;
    }
    if (arrayOfGameBombState[97] == "B") {
        bombState87 += 1;
    }
    element = document.getElementById("back-tile-row-9-column-7-img").src = "assets/img/" + bombState87 + ".png";
}
if (arrayOfGameBombState[87] == "B") {
    element = document.getElementById("back-tile-row-9-column-8-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState88 = 0;
    if (arrayOfGameBombState[76] == "B") {
        bombState88 += 1;
    }
    if (arrayOfGameBombState[77] == "B") {
        bombState88 += 1;
    }
    if (arrayOfGameBombState[78] == "B") {
        bombState88 += 1;
    }
    if (arrayOfGameBombState[86] == "B") {
        bombState88 += 1;
    }
    if (arrayOfGameBombState[88] == "B") {
        bombState88 += 1;
    }
    if (arrayOfGameBombState[96] == "B") {
        bombState88 += 1;
    }
    if (arrayOfGameBombState[97] == "B") {
        bombState88 += 1;
    }
    if (arrayOfGameBombState[98] == "B") {
        bombState88 += 1;
    }
    element = document.getElementById("back-tile-row-9-column-8-img").src = "assets/img/" + bombState88 + ".png";
}
if (arrayOfGameBombState[88] == "B") {
    element = document.getElementById("back-tile-row-9-column-9-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState89 = 0;
    if (arrayOfGameBombState[77] == "B") {
        bombState89 += 1;
    }
    if (arrayOfGameBombState[78] == "B") {
        bombState89 += 1;
    }
    if (arrayOfGameBombState[79] == "B") {
        bombState89 += 1;
    }
    if (arrayOfGameBombState[87] == "B") {
        bombState89 += 1;
    }
    if (arrayOfGameBombState[89] == "B") {
        bombState89 += 1;
    }
    if (arrayOfGameBombState[97] == "B") {
        bombState89 += 1;
    }
    if (arrayOfGameBombState[98] == "B") {
        bombState89 += 1;
    }
    if (arrayOfGameBombState[99] == "B") {
        bombState89 += 1;
    }
    element = document.getElementById("back-tile-row-9-column-9-img").src = "assets/img/" + bombState89 + ".png";
}
if (arrayOfGameBombState[89] == "B") {
    element = document.getElementById("back-tile-row-9-column-10-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState90 = 0;
    if (arrayOfGameBombState[78] == "B") {
        bombState90 += 1;
    }
    if (arrayOfGameBombState[79] == "B") {
        bombState90 += 1;
    }
    if (arrayOfGameBombState[88] == "B") {
        bombState90 += 1;
    }
    if (arrayOfGameBombState[98] == "B") {
        bombState90 += 1;
    }
    if (arrayOfGameBombState[99] == "B") {
        bombState90 += 1;
    }
    element = document.getElementById("back-tile-row-9-column-10-img").src = "assets/img/" + bombState90 + ".png";
}
if (arrayOfGameBombState[90] == "B") {
    element = document.getElementById("back-tile-row-10-column-1-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState91 = 0;
    if (arrayOfGameBombState[80] == "B") {
        bombState91 += 1;
    }
    if (arrayOfGameBombState[81] == "B") {
        bombState91 += 1;
    }
    if (arrayOfGameBombState[91] == "B") {
        bombState91 += 1;
    }
    element = document.getElementById("back-tile-row-10-column-1-img").src = "assets/img/" + bombState91 + ".png";
}
if (arrayOfGameBombState[91] == "B") {
    element = document.getElementById("back-tile-row-10-column-2-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState92 = 0;
    if (arrayOfGameBombState[80] == "B") {
        bombState92 += 1;
    }
    if (arrayOfGameBombState[81] == "B") {
        bombState92 += 1;
    }
    if (arrayOfGameBombState[82] == "B") {
        bombState92 += 1;
    }
    if (arrayOfGameBombState[90] == "B") {
        bombState92 += 1;
    }
    if (arrayOfGameBombState[92] == "B") {
        bombState92 += 1;
    }
    element = document.getElementById("back-tile-row-10-column-2-img").src = "assets/img/" + bombState92 + ".png";
}
if (arrayOfGameBombState[92] == "B") {
    element = document.getElementById("back-tile-row-10-column-3-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState93 = 0;
    if (arrayOfGameBombState[81] == "B") {
        bombState93 += 1;
    }
    if (arrayOfGameBombState[82] == "B") {
        bombState93 += 1;
    }
    if (arrayOfGameBombState[83] == "B") {
        bombState93 += 1;
    }
    if (arrayOfGameBombState[91] == "B") {
        bombState93 += 1;
    }
    if (arrayOfGameBombState[93] == "B") {
        bombState93 += 1;
    }
    element = document.getElementById("back-tile-row-10-column-3-img").src = "assets/img/" + bombState93 + ".png";
}
if (arrayOfGameBombState[93] == "B") {
    element = document.getElementById("back-tile-row-10-column-4-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState94 = 0;
    if (arrayOfGameBombState[82] == "B") {
        bombState94 += 1;
    }
    if (arrayOfGameBombState[83] == "B") {
        bombState94 += 1;
    }
    if (arrayOfGameBombState[84] == "B") {
        bombState94 += 1;
    }
    if (arrayOfGameBombState[92] == "B") {
        bombState94 += 1;
    }
    if (arrayOfGameBombState[94] == "B") {
        bombState94 += 1;
    }
    element = document.getElementById("back-tile-row-10-column-4-img").src = "assets/img/" + bombState94 + ".png";
}
if (arrayOfGameBombState[94] == "B") {
    element = document.getElementById("back-tile-row-10-column-5-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState95 = 0;
    if (arrayOfGameBombState[83] == "B") {
        bombState95 += 1;
    }
    if (arrayOfGameBombState[84] == "B") {
        bombState95 += 1;
    }
    if (arrayOfGameBombState[85] == "B") {
        bombState95 += 1;
    }
    if (arrayOfGameBombState[93] == "B") {
        bombState95 += 1;
    }
    if (arrayOfGameBombState[95] == "B") {
        bombState95 += 1;
    }
    element = document.getElementById("back-tile-row-10-column-5-img").src = "assets/img/" + bombState95 + ".png";
}
if (arrayOfGameBombState[95] == "B") {
    element = document.getElementById("back-tile-row-10-column-6-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState96 = 0;
    if (arrayOfGameBombState[84] == "B") {
        bombState96 += 1;
    }
    if (arrayOfGameBombState[85] == "B") {
        bombState96 += 1;
    }
    if (arrayOfGameBombState[86] == "B") {
        bombState96 += 1;
    }
    if (arrayOfGameBombState[94] == "B") {
        bombState96 += 1;
    }
    if (arrayOfGameBombState[96] == "B") {
        bombState96 += 1;
    }
    element = document.getElementById("back-tile-row-10-column-6-img").src = "assets/img/" + bombState96 + ".png";
}
if (arrayOfGameBombState[96] == "B") {
    element = document.getElementById("back-tile-row-10-column-7-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState97 = 0;
    if (arrayOfGameBombState[85] == "B") {
        bombState97 += 1;
    }
    if (arrayOfGameBombState[86] == "B") {
        bombState97 += 1;
    }
    if (arrayOfGameBombState[87] == "B") {
        bombState97 += 1;
    }
    if (arrayOfGameBombState[95] == "B") {
        bombState97 += 1;
    }
    if (arrayOfGameBombState[97] == "B") {
        bombState97 += 1;
    }
    element = document.getElementById("back-tile-row-10-column-7-img").src = "assets/img/" + bombState97 + ".png";
}
if (arrayOfGameBombState[97] == "B") {
    element = document.getElementById("back-tile-row-10-column-8-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState98 = 0;
    if (arrayOfGameBombState[86] == "B") {
        bombState98 += 1;
    }
    if (arrayOfGameBombState[87] == "B") {
        bombState98 += 1;
    }
    if (arrayOfGameBombState[88] == "B") {
        bombState98 += 1;
    }
    if (arrayOfGameBombState[96] == "B") {
        bombState98 += 1;
    }
    if (arrayOfGameBombState[98] == "B") {
        bombState98 += 1;
    }
    element = document.getElementById("back-tile-row-10-column-8-img").src = "assets/img/" + bombState98 + ".png";
}
if (arrayOfGameBombState[98] == "B") {
    element = document.getElementById("back-tile-row-10-column-9-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState99 = 0;
    if (arrayOfGameBombState[87] == "B") {
        bombState99 += 1;
    }
    if (arrayOfGameBombState[88] == "B") {
        bombState99 += 1;
    }
    if (arrayOfGameBombState[89] == "B") {
        bombState99 += 1;
    }
    if (arrayOfGameBombState[97] == "B") {
        bombState99 += 1;
    }
    if (arrayOfGameBombState[99] == "B") {
        bombState99 += 1;
    }
    element = document.getElementById("back-tile-row-10-column-9-img").src = "assets/img/" + bombState99 + ".png";
}
if (arrayOfGameBombState[99] == "B") {
    element = document.getElementById("back-tile-row-10-column-10-img").src = "assets/img/bob-omb-not-lit.jpg";
} else {
    var bombState100 = 0;
    if (arrayOfGameBombState[88] == "B") {
        bombState100 += 1;
    }
    if (arrayOfGameBombState[89] == "B") {
        bombState100 += 1;
    }
    if (arrayOfGameBombState[98] == "B") {
        bombState100 += 1;
    }
    element = document.getElementById("back-tile-row-10-column-10-img").src = "assets/img/" + bombState100 + ".png";
} }
//#endregion
function playerLoses() { 
        for (var i = 1; i < 11; i++)  { 
            for (var j = 1; j < 11; j++) {
            imageFront = document.getElementById("front-tile-row-" + i +"-column-" + j + "-img");
            imageBack = document.getElementById("back-tile-row-" + i +"-column-" + j + "-img");
            imageBack.src = "assets/img/bob-omb-lit.jpg";
            imageFront.style.visibility="hidden";
            imageFront.style.display="none";
            message = document.getElementById("the-message").innerHTML = "You lose!";
            message = document.getElementById("the-message").style.fontSize = "3.5vw";
            message = document.getElementById("the-message").style.paddingLeft = "11.5vw";
        }}
    
    }
function testButton() {
    for (var i = 1; i < 11; i++)  { 
        for (var j = 1; j < 11; j++) {
            imageFront = document.getElementById("front-tile-row-" + i +"-column-" + j + "-img");
            imageFront.style.visibility="hidden";
            imageFront.style.display="none";    }}
}
var firstClick = 0;
function clickTile(a) {
    if (firstClick == 0 ) {
        message = document.getElementById("the-message").innerHTML = "Oh shit, it's actually Minesweeper!";
        message = document.getElementById("the-message").style.fontSize="2.2vw";
        message = document.getElementById("the-message").style.paddingLeft="7.5vw";
        message = document.getElementById("the-message").style.paddingTop="0.2vw";
        message = document.getElementById("the-message").style.color="red";
        message = document.getElementById("the-message").style.fontFamily = "'VT323', monospace";
        arrayOfGameBombState[a - 1] = "NB";
        setTheBombs();
        firstClick += 1;
        clickTile(a);
    }
    else {
        switch (a) { 
            case 1:
                if (arrayOfGameBombState[0] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-1-column-1-img");
                image.style.display = "none";
                break;
                }
            case 2:
                if (arrayOfGameBombState[1] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-1-column-2-img");
                image.style.display = "none";
                break;
                }
            case 3:
                if (arrayOfGameBombState[2] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-1-column-3-img");
                image.style.display = "none";
                break;
                }
            case 4:
                if (arrayOfGameBombState[3] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-1-column-4-img");
                image.style.display = "none";
                break;
                }
            case 5:
                if (arrayOfGameBombState[4] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-1-column-5-img");
                image.style.display = "none";
                break;
                }
            case 6:
                if (arrayOfGameBombState[5] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-1-column-6-img");
                image.style.display = "none";
                break;
                }
            case 7:
                if (arrayOfGameBombState[6] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-1-column-7-img");
                image.style.display = "none";
                break;
                }
            case 8:
                if (arrayOfGameBombState[7] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-1-column-8-img");
                image.style.display = "none";
                break;
                }
            case 9:
                if (arrayOfGameBombState[8] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-1-column-9-img");
                image.style.display = "none";
                break;
                }
            case 10:
                if (arrayOfGameBombState[9] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-1-column-10-img");
                image.style.display = "none";
                break;
                }
            case 11:
                if (arrayOfGameBombState[10] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-2-column-1-img");
                image.style.display = "none";
                break;
                }
            case 12:
                if (arrayOfGameBombState[11] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-2-column-2-img");
                image.style.display = "none";
                break;
                }
            case 13:
                if (arrayOfGameBombState[12] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-2-column-3-img");
                image.style.display = "none";
                break;
                }
            case 14:
                if (arrayOfGameBombState[13] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-2-column-4-img");
                image.style.display = "none";
                break;
                }
            case 15:
                if (arrayOfGameBombState[14] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-2-column-5-img");
                image.style.display = "none";
                break;
                }
            case 16:
                if (arrayOfGameBombState[15] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-2-column-6-img");
                image.style.display = "none";
                break;
                }
            case 17:
                if (arrayOfGameBombState[16] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-2-column-7-img");
                image.style.display = "none";
                break;
                }
            case 18:
                if (arrayOfGameBombState[17] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-2-column-8-img");
                image.style.display = "none";
                break;
                }
            case 19:
                if (arrayOfGameBombState[18] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-2-column-9-img");
                image.style.display = "none";
                break;
                }
            case 20:
                if (arrayOfGameBombState[19] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-2-column-10-img");
                image.style.display = "none";
                break;
                }
            case 21:
                if (arrayOfGameBombState[20] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-3-column-1-img");
                image.style.display = "none";
                break;
                }
            case 22:
                if (arrayOfGameBombState[21] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-3-column-2-img");
                image.style.display = "none";
                break;
                }
            case 23:
                if (arrayOfGameBombState[22] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-3-column-3-img");
                image.style.display = "none";
                break;
                }
            case 24:
                if (arrayOfGameBombState[23] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-3-column-4-img");
                image.style.display = "none";
                break;
                }
            case 25:
                if (arrayOfGameBombState[24] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-3-column-5-img");
                image.style.display = "none";
                break;
                }
            case 26:
                if (arrayOfGameBombState[25] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-3-column-6-img");
                image.style.display = "none";
                break;
                }
            case 27:
                if (arrayOfGameBombState[26] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-3-column-7-img");
                image.style.display = "none";
                break;
                }
            case 28:
                if (arrayOfGameBombState[27] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-3-column-8-img");
                image.style.display = "none";
                break;
                }
            case 29:
                if (arrayOfGameBombState[28] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-3-column-9-img");
                image.style.display = "none";
                break;
                }
            case 30:
                if (arrayOfGameBombState[29] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-3-column-10-img");
                image.style.display = "none";
                break;
                }
            case 31:
                if (arrayOfGameBombState[30] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-4-column-1-img");
                image.style.display = "none";
                break;
                }
            case 32:
                if (arrayOfGameBombState[31] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-4-column-2-img");
                image.style.display = "none";
                break;
                }
            case 33:
                if (arrayOfGameBombState[32] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-4-column-3-img");
                image.style.display = "none";
                break;
                }
            case 34:
                if (arrayOfGameBombState[33] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-4-column-4-img");
                image.style.display = "none";
                break;
                }
            case 35:
                if (arrayOfGameBombState[34] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-4-column-5-img");
                image.style.display = "none";
                break;
                }
            case 36:
                if (arrayOfGameBombState[35] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-4-column-6-img");
                image.style.display = "none";
                break;
                }
            case 37:
                if (arrayOfGameBombState[36] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-4-column-7-img");
                image.style.display = "none";
                break;
                }
            case 38:
                if (arrayOfGameBombState[37] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-4-column-8-img");
                image.style.display = "none";
                break;
                }
            case 39:
                if (arrayOfGameBombState[38] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-4-column-9-img");
                image.style.display = "none";
                break;
                }
            case 40:
                if (arrayOfGameBombState[39] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-4-column-10-img");
                image.style.display = "none";
                break;
                }
            case 41:
                if (arrayOfGameBombState[40] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-5-column-1-img");
                image.style.display = "none";
                break;
                }
            case 42:
                if (arrayOfGameBombState[41] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-5-column-2-img");
                image.style.display = "none";
                break;
                }
            case 43:
                if (arrayOfGameBombState[42] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-5-column-3-img");
                image.style.display = "none";
                break;
                }
            case 44:
                if (arrayOfGameBombState[43] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-5-column-4-img");
                image.style.display = "none";
                break;
                }
            case 45:
                if (arrayOfGameBombState[44] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-5-column-5-img");
                image.style.display = "none";
                break;
                }
            case 46:
                if (arrayOfGameBombState[45] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-5-column-6-img");
                image.style.display = "none";
                break;
                }
            case 47:
                if (arrayOfGameBombState[46] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-5-column-7-img");
                image.style.display = "none";
                break;
                }
            case 48:
                if (arrayOfGameBombState[47] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-5-column-8-img");
                image.style.display = "none";
                break;
                }
            case 49:
                if (arrayOfGameBombState[48] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-5-column-9-img");
                image.style.display = "none";
                break;
                }
            case 50:
                if (arrayOfGameBombState[49] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-5-column-10-img");
                image.style.display = "none";
                break;
                }
            case 51:
                if (arrayOfGameBombState[50] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-6-column-1-img");
                image.style.display = "none";
                break;
                }
            case 52:
                if (arrayOfGameBombState[51] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-6-column-2-img");
                image.style.display = "none";
                break;
                }
            case 53:
                if (arrayOfGameBombState[52] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-6-column-3-img");
                image.style.display = "none";
                break;
                }
            case 54:
                if (arrayOfGameBombState[53] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-6-column-4-img");
                image.style.display = "none";
                break;
                }
            case 55:
                if (arrayOfGameBombState[54] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-6-column-5-img");
                image.style.display = "none";
                break;
                }
            case 56:
                if (arrayOfGameBombState[55] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-6-column-6-img");
                image.style.display = "none";
                break;
                }
            case 57:
                if (arrayOfGameBombState[56] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-6-column-7-img");
                image.style.display = "none";
                break;
                }
            case 58:
                if (arrayOfGameBombState[57] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-6-column-8-img");
                image.style.display = "none";
                break;
                }
            case 59:
                if (arrayOfGameBombState[58] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-6-column-9-img");
                image.style.display = "none";
                break;
                }
            case 60:
                if (arrayOfGameBombState[59] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-6-column-10-img");
                image.style.display = "none";
                break;
                }
            case 61:
                if (arrayOfGameBombState[60] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-7-column-1-img");
                image.style.display = "none";
                break;
                }
            case 62:
                if (arrayOfGameBombState[61] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-7-column-2-img");
                image.style.display = "none";
                break;
                }
            case 63:
                if (arrayOfGameBombState[62] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-7-column-3-img");
                image.style.display = "none";
                break;
                }
            case 64:
                if (arrayOfGameBombState[63] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-7-column-4-img");
                image.style.display = "none";
                break;
                }
            case 65:
                if (arrayOfGameBombState[64] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-7-column-5-img");
                image.style.display = "none";
                break;
                }
            case 66:
                if (arrayOfGameBombState[65] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-7-column-6-img");
                image.style.display = "none";
                break;
                }
            case 67:
                if (arrayOfGameBombState[66] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-7-column-7-img");
                image.style.display = "none";
                break;
                }
            case 68:
                if (arrayOfGameBombState[67] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-7-column-8-img");
                image.style.display = "none";
                break;
                }
            case 69:
                if (arrayOfGameBombState[68] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-7-column-9-img");
                image.style.display = "none";
                break;
                }
            case 70:
                if (arrayOfGameBombState[69] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-7-column-10-img");
                image.style.display = "none";
                break;
                }
            case 71:
                if (arrayOfGameBombState[70] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-8-column-1-img");
                image.style.display = "none";
                break;
                }
            case 72:
                if (arrayOfGameBombState[71] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-8-column-2-img");
                image.style.display = "none";
                break;
                }
            case 73:
                if (arrayOfGameBombState[72] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-8-column-3-img");
                image.style.display = "none";
                break;
                }
            case 74:
                if (arrayOfGameBombState[73] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-8-column-4-img");
                image.style.display = "none";
                break;
                }
            case 75:
                if (arrayOfGameBombState[74] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-8-column-5-img");
                image.style.display = "none";
                break;
                }
            case 76:
                if (arrayOfGameBombState[75] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-8-column-6-img");
                image.style.display = "none";
                break;
                }
            case 77:
                if (arrayOfGameBombState[76] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-8-column-7-img");
                image.style.display = "none";
                break;
                }
            case 78:
                if (arrayOfGameBombState[77] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-8-column-8-img");
                image.style.display = "none";
                break;
                }
            case 79:
                if (arrayOfGameBombState[78] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-8-column-9-img");
                image.style.display = "none";
                break;
                }
            case 80:
                if (arrayOfGameBombState[79] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-8-column-10-img");
                image.style.display = "none";
                break;
                }
            case 81:
                if (arrayOfGameBombState[80] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-9-column-1-img");
                image.style.display = "none";
                break;
                }
            case 82:
                if (arrayOfGameBombState[81] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-9-column-2-img");
                image.style.display = "none";
                break;
                }
            case 83:
                if (arrayOfGameBombState[82] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-9-column-3-img");
                image.style.display = "none";
                break;
                }
            case 84:
                if (arrayOfGameBombState[83] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-9-column-4-img");
                image.style.display = "none";
                break;
                }
            case 85:
                if (arrayOfGameBombState[84] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-9-column-5-img");
                image.style.display = "none";
                break;
                }
            case 86:
                if (arrayOfGameBombState[85] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-9-column-6-img");
                image.style.display = "none";
                break;
                }
            case 87:
                if (arrayOfGameBombState[86] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-9-column-7-img");
                image.style.display = "none";
                break;
                }
            case 88:
                if (arrayOfGameBombState[87] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-9-column-8-img");
                image.style.display = "none";
                break;
                }
            case 89:
                if (arrayOfGameBombState[88] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-9-column-9-img");
                image.style.display = "none";
                break;
                }
            case 90:
                if (arrayOfGameBombState[89] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-9-column-10-img");
                image.style.display = "none";
                break;
                }
            case 91:
                if (arrayOfGameBombState[90] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-10-column-1-img");
                image.style.display = "none";
                break;
                }
            case 92:
                if (arrayOfGameBombState[91] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-10-column-2-img");
                image.style.display = "none";
                break;
                }
            case 93:
                if (arrayOfGameBombState[92] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-10-column-3-img");
                image.style.display = "none";
                break;
                }
            case 94:
                if (arrayOfGameBombState[93] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-10-column-4-img");
                image.style.display = "none";
                break;
                }
            case 95:
                if (arrayOfGameBombState[94] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-10-column-5-img");
                image.style.display = "none";
                break;
                }
            case 96:
                if (arrayOfGameBombState[95] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-10-column-6-img");
                image.style.display = "none";
                break;
                }
            case 97:
                if (arrayOfGameBombState[96] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-10-column-7-img");
                image.style.display = "none";
                break;
                }
            case 98:
                if (arrayOfGameBombState[97] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-10-column-8-img");
                image.style.display = "none";
                break;
                }
            case 99:
                if (arrayOfGameBombState[98] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-10-column-9-img");
                image.style.display = "none";
                break;
                }
            case 100:
                if (arrayOfGameBombState[99] == "B") {
                    playerLoses();
                }
                else {
                image = document.getElementById("front-tile-row-10-column-10-img");
                image.style.display = "none";
                break;
                }
                
    }
    } 
    }














