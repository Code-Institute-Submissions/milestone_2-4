


let order = [];          // intialising an Array for sequences and declaring variables for different states of the game.
let playerOrder = []      
let flash;               
let turn;
let correct;         
let cpuTurn;
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

powerButton.addEventListener('click', (event) => {
    if (powerButton.checked == true) {
        power = true;
        console.log("Power is On")
    } else {
        power = false ;
        console.log("Power is off")
    }
})

startButton.addEventListener('click', (event) => {
    console.log("test start");
    
})

