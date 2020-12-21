let gridColors = [];
let gridNumbers = []
let cardsShowing = [];
let gridAssignments;
let gameRunning = 0;
let score = 0;

function startGame(){
    resetGrid();
    resetGame();
    gameRunning = 1;
    for(let i = 0; i < 8; i++){
        console.log("----------------");
        let num1 = gridNumbers[Math.floor(Math.random() * gridNumbers.length)];
        removeNumber(num1);
        let num2 = gridNumbers[Math.floor(Math.random() * gridNumbers.length)];
        removeNumber(num2);
        console.log("gridNumbers: " + gridNumbers);
        let clr = gridColors.pop();
        console.log("clr: " + clr);
        assignColor(num1, num2, clr);
        console.log("gridColors: " + gridColors);
    }
    console.log(gridAssignments)
    runGame();
}

function resetGrid(){
    gridColors = ["red", "yellow", "green", "blue", "orange","purple", "pink", "brown"];
    gridNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    gridAssignments = {"grid-item-1": "black", "grid-item-2": "black", 
    "grid-item-3": "black", "grid-item-4": "black", "grid-item-5": "black",
    "grid-item-6": "black", "grid-item-7": "black", "grid-item-8": "black", 
    "grid-item-9": "black", "grid-item-10": "black", "grid-item-11": "black",
    "grid-item-12": "black", "grid-item-13": "black", "grid-item-14": "black",
    "grid-item-15": "black","grid-item-16": "black"};
}

function resetGame(){
    console.log("resetting game");
    let scoreDisplay = document.getElementById("game-score");
    scoreDisplay.innerText = "Score: 0";
    resetCards();
}

function resetCards(){
    for (const [key, value] of Object.entries(gridAssignments)) {
        console.log("key: " + key);
        console.log("value: " + value);
        let card = document.getElementById(key);
        card.style.backgroundColor = value;
        card.setAttribute("onclick", "showColor(this)");
        //card.onclick = "showColor(this)";  .removeAttribute("class");

    }
}

function removeNumber(num){
    let index = gridNumbers.indexOf(num);
    if (index > -1) {
        gridNumbers.splice(index, 1);
    }
}

function assignColor(num1, num2, clr){
    num1ID = "grid-item-" + num1;
    console.log("num1ID: " + num1ID);
    num2ID = "grid-item-" + num2;
    console.log("num2ID: " + num2ID);
    console.log("clr: " + clr);
    gridAssignments[num1ID] = clr;
    gridAssignments[num2ID] = clr;
    console.log(gridAssignments[num1ID]);
    console.log(gridAssignments[num2ID]);
}

function runGame(){
    console.log("game running");
    if (cardsShowing.length == 2){
        checkCards();
    }
}

function setBlack(){
    let card1 = document.getElementById(cardsShowing[0]);
    let card2 = document.getElementById(cardsShowing[1]);
    card1.style.backgroundColor = "black";
    card2.style.backgroundColor ="black";
    cardsShowing = [];
}

function showColor(item){
    if (gameRunning == 0) {return null;}
    let itemID =  item.id;
    console.log(itemID);
    let itemColor = gridAssignments[itemID];
    console.log(itemColor);
    document.getElementById(itemID).style.backgroundColor = itemColor;
    cardsShowing.push(itemID);
    runGame();
}

function runGame(){
    console.log("game running");
    if (cardsShowing.length == 2){
        checkCards();
    }
}

function checkCards() {
    let card1 = document.getElementById(cardsShowing[0]);
    let card2 = document.getElementById(cardsShowing[1]);
    let card1Color = card1.style.backgroundColor;
    let card2Color = card2.style.backgroundColor;
    console.log(card1Color);
    console.log(card2Color);
    if (card1Color == card2Color){
        console.log("Match!!");
        card1.removeAttribute("onclick");
        card2.removeAttribute("onclick");
        card1.style.opacity = 0.5;
        card2.style.opacity = 0.5;
        updateScore();
        cardsShowing = [];
    }else{
        console.log("no match");
        setTimeout(setBlack, 1000);
    }
}
    
function updateScore(){
    score++;
    console.log("score: " + score);
    let scoreDisplay = document.getElementById("game-score");
    scoreDisplay.innerText = "Score: " + score;
    checkWin();
}

function checkWin(){
    if (score == 8) {
        gameRunning = 0;
        alert("You WIN!!!");
    }
}