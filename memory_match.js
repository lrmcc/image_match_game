let gridColors = [];
let gridNumbers = []
let cardsShowing = [];
let gridAssignments;

function setGrid(){
    gridColors = ["red", "yellow", "green", "blue", "orange","purple", "pink", "brown"];
    gridNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    gridAssignments = {"grid-item-1": "black", "grid-item-2": "black", 
    "grid-item-3": "black", "grid-item-4": "black", "grid-item-5": "black",
    "grid-item-6": "black", "grid-item-7": "black", "grid-item-8": "black", 
    "grid-item-9": "black", "grid-item-10": "black", "grid-item-11": "black",
    "grid-item-12": "black", "grid-item-13": "black", "grid-item-14": "black",
    "grid-item-15": "black","grid-item-16": "black"};
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
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

function setBlack(num1ID, num2ID){
    document.getElementById(num1ID).style.backgroundColor = "black";
    document.getElementById(num2ID).style.backgroundColor ="black";
    console.log(num1 + " and " + num2 + " set to black");
}

function removeNumber(num){
    let index = gridNumbers.indexOf(num);
    if (index > -1) {
        gridNumbers.splice(index, 1);
    }
}

function startGame(){
    setGrid();
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

function showColor(item){
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
    let card1Color =  document.getElementById(cardsShowing[0]).style.backgroundColor;
    let card2Color = document.getElementById(cardsShowing[1]).style.backgroundColor;
    console.log(card1Color);
    console.log(card2Color);
    if (card1Color == card2Color){
        console.log("Match!!");
        //set opacity
        //disable onclick
    }else{
        console.log("no match");
        //set black
    }
    cardsShowing = [];
}
    
