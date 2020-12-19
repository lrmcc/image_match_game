let gridColors = [];
let gridNumbers = []
var gridAssignments;

function setGrid(){
    gridColors = ["red", "yellow", "green", "blue", "orange","purple", "pink", "brown"];
    gridNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    gridAssignments = {1: "black",2: "black",3: "black",4: "black",5: "black",6: "black",7: "black",8: "black",
    9: "black",10: "black",11: "black",12: "black",13: "black",14: "black",15: "black",16: "black"};
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function setColor(num1, num2, clr){
    document.getElementById("grid-item-" + num1).style.backgroundColor = clr;
    document.getElementById("grid-item-" + num2).style.backgroundColor = clr;
    console.log(num1 + " and " + num2 + " set to " + clr);
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
        setColor(num1, num2, clr);
        console.log("gridColors: " + gridColors);
    }
}

