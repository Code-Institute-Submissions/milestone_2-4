


let order = [];          // intialising an Array for sequences and declaring variables for different states of the game.
let playerOrder = [] ;     
let flash;               
let turn;
let correct;         
let cpuTurn;
let breakId;
let difficult = false;  
let power = false;
let win ; 


const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topLeft");
const topRight = document.querySelector("#topRight");
const bottomLeft = document.querySelector("#bottomLeft");
const bottomRight = document.querySelector("#bottomRight");
const difficultyButton = document.querySelector("#difficulty");
const powerButton = document.querySelector("#power");
const startButton = document.querySelector("#start");

difficultyButton.addEventListener('click', (event) => {

     if(difficultyButton.checked == true) {
         difficult = true;
         console.log("difficult setting is on")
     } else {
         difficult = false;
         console.log("difficult setting is off")
     }
    
})

powerButton.addEventListener('click', (event) => {
    if (powerButton.checked == true) {
        power = true;
        console.log("Power is On")
        turnCounter.innerHTML = "-";
    } else {
        power = false ;
        console.log("Power is off")
        turnCounter.innerHTML = "";
        resetColor();
        clearInterval(breakId);
    }
});

startButton.addEventListener('click', (event) => {
    if(power || win ) {
        play();   // main play game function
    }
    
});


function play() {
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    breakId = 0;
    turn = 1 ;
    turnCounter.innerHTML = 1;
    correct = true;
    for (var i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() *4) + 1);    // create's an array of 20 random numbers between 1 and 4.
    }
    console.log(order)
    cpuTurn = true;

    breakId = setInterval(gameStage, 800);
}

function gameStage() {
    power = false;

    if (flash == turn){
        clearInterval(breakId);
        cpuTurn = false;
        resetColor();
        power = true;
    }

    if (cpuTurn) {
        resetColor();
        setTimeout(() => {
            if (order[flash] == 1) topLeftFlash();
            if (order[flash] == 2) topRightFlash();
            if (order[flash] == 3) bottomLeftFlash();
            if (order[flash] == 4) bottomRightFlash();
            flash ++;
        }, 200);
    }

}

function topLeftFlash() {
    topLeft.style.backgroundColor = "green";

}

function topRightFlash() {
    topRight.style.backgroundColor = "red";

}
function bottomLeftFlash() {
    bottomLeft.style.backgroundColor = "blue";

}
function bottomRightFlash() {
    bottomRight.style.backgroundColor = "yellow";
    
}

function resetColor() {
    topLeft.style.backgroundColor = "darkgreen";
    topRight.style.backgroundColor = "darkred";
    bottomLeft.style.backgroundColor = "darkblue";
    bottomRight.style.backgroundColor = "#CCCC00";

}

function flashAll() {
    topLeft.style.backgroundColor = "green";
    topRight.style.backgroundColor = "red";
    bottomLeft.style.backgroundColor = "blue";
    bottomRight.style.backgroundColor = "yellow";

}

topLeft.addEventListener('click', (event) => {
    console.log("test TL");
    if (power) {
        playerOrder.push(1);
        playerCheck();
        topLeftFlash();
        if(!win) {
            setTimeout(() => {
                resetColor();
            }, 300);
        }
    }
})

topRight.addEventListener('click', (event) => {
    console.log("test TR");
    if (power) {
        playerOrder.push(2);
        playerCheck();
        topRightFlash();
        if(!win) {
            setTimeout(() => {
                resetColor();
            }, 300);
        }
    }
})

bottomRight.addEventListener('click', (event) => {
    console.log("test BR");
    if (power) {
        playerOrder.push(4);
        playerCheck();
        bottomRightFlash();
        if(!win) {
            setTimeout(() => {
                resetColor();
            }, 300);
        }
    }
})
bottomLeft.addEventListener('click', (event) => {
    console.log("test BL");
    if (power) {
        playerOrder.push(3);
        playerCheck();
        bottomLeftFlash();
        if(!win) {
            setTimeout(() => {
                resetColor();
            }, 300);
        }
    }
})


function playerCheck() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length -1]) correct = false;

    if(playerOrder.length == 20 && correct){
        
    }
    if (correct == false){
       flashAll();
       turnCounter.innerHTML = "XXX";
       setTimeout(() => {
           turnCounter.innerHTML = turn;
           resetColor();

           if(difficult) {
               play();
           } else {
               cpuTurn = true;
               flash = 0;
               playerOrder = [];
               correct = true;
               breakId = setInterval(gameStage, 800);
           }
       }, 800);

    }

    if (turn == playerOrder.length && correct && !win) {
        turn++;
        playerOrder = [];
        cpuTurn = true;
        flash = 0 ;
        turnCounter.innerHTML = turn;
        breakId = setInterval(gameStage, 800);
    }
}

function victory() {
    flashAll();
    turnCounter.innerHTML = "WIN"
    power = false;
    win = true;
}



