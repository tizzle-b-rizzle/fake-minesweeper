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
             if (arrayOfGameBombState[i] == "B") {
                 numberOfBombs += 1;
             }
        } else {
            arrayOfGameBombState[i] = "NB";
        }
    }
} 

//#region set the bombs
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
    element = document.getElementById("back-tile-row-1-column-11-img").src = "assets/img/bob-omb-not-lit.jpg";
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
//#endregion
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
