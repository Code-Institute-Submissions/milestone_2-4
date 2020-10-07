


let order = [];          // intialising an Array for sequences and declaring variables for different states of the game.
let playerOrder = [];
let flash;
let turn;
let correct;
let cpuTurn;
let breakId;
let difficult = false;
let power = false;
let win;


const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topLeft");
const topRight = document.querySelector("#topRight");
const bottomLeft = document.querySelector("#bottomLeft");
const bottomRight = document.querySelector("#bottomRight");
const difficultyButton = document.querySelector("#difficulty");
const powerButton = document.querySelector("#power");
const startButton = document.querySelector("#start");

difficultyButton.addEventListener('click', (event) => {                //event listener to check if the difficulty settings has been checked.

    if (difficultyButton.checked == true) {
        difficult = true;

    } else {
        difficult = false;

    }

});

powerButton.addEventListener('click', (event) => {                // event listener to check if the power button has been enabled. 
    if (powerButton.checked == true) {
        power = true;
        turnCounter.innerHTML = "-";
    } else {
        power = false;
        turnCounter.innerHTML = "";
        resetColor();
        clearInterval(breakId);
    }
});

startButton.addEventListener('click', (event) => {              // event listener to start the game via the start button. 
    if (power || win) {
        play();   // main play game function
    }

});


function play() {
    win = false;
    order = [];
    playerOrder = [];                    // initialising the values of the variables to make sure they are correct at the start of the game.
    flash = 0;
    breakId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    correct = true;
    for (var i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) + 1);    // create's an array of 20 random numbers between 1 and 4.
    }
    console.log(order);
    cpuTurn = true;

    breakId = setInterval(gameStage, 800);        // sets the time between each stage of the game. Could lower the number to increase the dificulty. 
}

function gameStage() {
    power = false;

    if (flash == turn) {
        clearInterval(breakId);
        cpuTurn = false;
        resetColor();                     // makes sures are colors are set to defauly settings and none of them are lit.
        power = true;
    }

    if (cpuTurn) {
        resetColor();
        setTimeout(() => {
            if (order[flash] == 1) topLeftFlash();              // Create the a flash on a color - selection will be determined from what is contained in the array.
            if (order[flash] == 2) topRightFlash();
            if (order[flash] == 3) bottomLeftFlash();
            if (order[flash] == 4) bottomRightFlash();
            flash++;
        }, 200);
    }

}

function topLeftFlash() {
    topLeft.style.backgroundColor = "green";          // flashes top left green function.       

}

function topRightFlash() {
    topRight.style.backgroundColor = "red";                // flashes top right red function.

}
function bottomLeftFlash() {
    bottomLeft.style.backgroundColor = "blue";                 // flashes bottom left blue function .

}
function bottomRightFlash() {
    bottomRight.style.backgroundColor = "yellow";              //flashes bottom right yellow function.

}

function resetColor() {
    topLeft.style.backgroundColor = "darkgreen";
    topRight.style.backgroundColor = "darkred";                    // resets the colors to be sure they are not stuck lit.
    bottomLeft.style.backgroundColor = "darkblue";
    bottomRight.style.backgroundColor = "#CCCC00";

}

function flashAll() {
    topLeft.style.backgroundColor = "green";
    topRight.style.backgroundColor = "red";                   // flashes all selections - used for when incorrect selction is made and for a win.
    bottomLeft.style.backgroundColor = "blue";
    bottomRight.style.backgroundColor = "yellow";

}

topLeft.addEventListener('click', (event) => {                        // event listener used on  player selection with check if correct function for topleft.

    if (power) {
        playerOrder.push(1);
        playerCheck();
        topLeftFlash();
        if (!win) {
            setTimeout(() => {
                resetColor();
            }, 300);
        }
    }
});

topRight.addEventListener('click', (event) => {                     // event listener used on  player selection with check if correct function for topRight.

    if (power) {
        playerOrder.push(2);
        playerCheck();
        topRightFlash();
        if (!win) {
            setTimeout(() => {
                resetColor();
            }, 300);
        }
    }
});

bottomRight.addEventListener('click', (event) => {                  // event listener used on  player selection with check if correct function for bottomRight.

    if (power) {
        playerOrder.push(4);
        playerCheck();
        bottomRightFlash();
        if (!win) {
            setTimeout(() => {
                resetColor();
            }, 300);
        }
    }
});
bottomLeft.addEventListener('click', (event) => {               // event listener used on  player selection with check if correct function for bottomleft

    if (power) {
        playerOrder.push(3);
        playerCheck();
        bottomLeftFlash();
        if (!win) {
            setTimeout(() => {
                resetColor();
            }, 300);
        }
    }
});


function playerCheck() {
    if (playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]) correct = false;       // function to check users input selection and compare to array values. 

    if (playerOrder.length == 20 && correct) {
        victory();
    }
    if (correct == false) {
        flashAll();
        turnCounter.innerHTML = "XXX";
        setTimeout(() => {
            turnCounter.innerHTML = turn;
            resetColor();

            if (difficult) {
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
        flash = 0;
        turnCounter.innerHTML = turn;
        breakId = setInterval(gameStage, 800);
    }
}

function victory() {
    flashAll();
    turnCounter.innerHTML = "WIN";                    // Victory function to show that user has won the game. 
    power = false;
    win = true;
}



