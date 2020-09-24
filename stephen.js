


let order = [];          // intialising an Array for sequences and declaring variables for different states of the game.
let playerOrder = []      
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
        resetBreak(breakId);
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
    for (var i = 0 ; i < 20; i++) {
        order.push(Math.floor(Math.random() *4) + 1);    // create's an array of 20 random numbers between 1 and 4.
    }
    console.log(order)
    cpuTurn = True;

    breakId = setInterval(gameStage, 800);
}

function gameStage() {
    power = false;

    if (flash == turn){
        resetBreak(breakId);
        cpuTurn = false;
        resetColor();
        power = true;
    }

    if (cpuTurn) {
        resetColor();
        setTimeout(() => {
            if (order[flash] == 1) topLeft();
            if (order[flash] == 2) topRight();
            if (order[flash] == 3) bottomLeft();
            if (order[flash] == 4) bottomRight();
            flash ++;
        }, 200);
    }

}

function topLeft() {

}

function topRight() {

}
function bottomLeft() {

}
function bottomRight() {
    
}






topLeft.addEventListener('click', (event) => {
    console.log("test TL");
})

topRight.addEventListener('click', (event) => {
    console.log("test TR");
})

bottomRight.addEventListener('click', (event) => {
    console.log("test BR");
})
bottomLeft.addEventListener('click', (event) => {
    console.log("test BL");
})



