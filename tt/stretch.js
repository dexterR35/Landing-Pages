

const doors = [];
let state = "PICK";
let pickedDoor;
let revealedDoor;
let remainingDoor;
let switchButton, stayButton, playAgain;
let outcomeP;
let resultsP;
let totalSwitchPlays = 0;
let totalStayPlays = 0;
let totalSwitchWins = 0;
// let totalLose = 0;
let totalStayWins = 0;
let wrapper;


function startOver() {
    for (let door of doors) {
        door.prize = "🐐";
        door.html("doors");
        door.style("background-color", "lightgrey");
       
    }
    const winner = random(doors);
    winner.prize = "🚂";
    playAgain.hide();
    outcomeP.html("");
    state = "PICK";
}



function setup() {
    noCanvas();

    for (let i = 0; i < 3; i++) {
        doors[i] = createDiv("");
        doors[i].parent("#doors");
        doors[i].class("door");
        doors[i].index = i;
        doors[i].mousePressed(pickDoor);
    }
    console.log(doors, "doors")



    buttonsDiv = createDiv("");
    buttonsDiv.parent("#test2");
    buttonsDiv.class("buttonDiv");


    
    resultDiv = createDiv("");
    resultDiv.parent("#test2");
    resultDiv.class("resultDiv");

    statusDiv = createDiv("");
    statusDiv.parent("#test2");
    statusDiv.class("statusDiv");


    
    switchButton = createButton("switch");
    switchButton.class("switchButton");
    switchButton.style("background-color", "orange");
    switchButton.mousePressed(playerSwitch);
    switchButton.parent(buttonsDiv)
    switchButton.hide();

    stayButton = createButton("stay");
    stayButton.class("buttonStay");
    stayButton.mousePressed(playerStay);
    stayButton.parent(buttonsDiv)
    stayButton.hide();

    playAgain = createButton("play again");
    playAgain.mousePressed(startOver);
    playAgain.class("playAgain");
    playAgain.parent(buttonsDiv)
    playAgain.hide();

    resultsP = createDiv("");
    resultsP.parent(resultDiv);

    console.log("results", resultsP);
    outcomeP = createP("");
    outcomeP.parent(statusDiv);
    console.log("results", outcomeP);

    startOver();
}

function pickDoor() {
    if (state == "PICK") {
        state = "REVEAL";
        this.style("background-color:blue; color:white");
        this.html("winner");
        pickedDoor = this;
        reveal();
        winReveal();
    }
}

function reveal() {
    const options = [];
    for (let i = 0; i < doors.length; i++) {
        const door = doors[i];
        if (i !== pickedDoor.index && door.prize !== "🚂") {
            options.push(door);
        }
    }

    revealedDoor = random(options);
    revealedDoor.html(revealedDoor.prize);
    revealedDoor.style("background-color", "green");
    revealedDoor.html("show");
    switchButton.show();
    stayButton.show();
    
}

function winReveal() {
    for (let i = 0; i < doors.length; i++) {
        const door = doors[i];
        if (i !== pickedDoor.index && door.prize !== "🐐") {
            console.log("pickedDoor", pickedDoor);
            pickedDoor.style("background-color", "red");
            pickedDoor.html("click");
        }
        
      
    }
   
}


function playerSwitch() {
    totalSwitchPlays++;
   
    let newPick;

    for (let i = 0; i < doors.length; i++) {
        let door = doors[i];
        if (door !== pickedDoor && door !== revealedDoor) {
            newPick = door;
            console.log(newPick, "winner-prize door if winning and switch if not winning is current last click");
            break;
        }
        if (door == pickedDoor && door !== revealedDoor) {
            console.log(pickedDoor, "pickedDoor after switch ");
            
        }

    }


    console.log(totalSwitchPlays, "total Switch Plays");
    pickedDoor = newPick;
    checkWin(true);
}

function playerStay() {
    totalStayPlays++;
   
    checkWin(false);
}

function checkWin(playerSwitch) {
    switchButton.hide();
    stayButton.hide();

    for (let door of doors) {
        door.html(door.prize);
        door.style("background-color", "#AAA");
    }

    if (pickedDoor.prize == "🚂") {
        outcomeP.html("You win!");
        pickedDoor.style("background-color", "green");
        outcomeP.class("winClass");
        if (playerSwitch) {
            totalSwitchWins++;
            
        } else {
            totalStayWins++;
         
        }
    } else {
        outcomeP.html("You lose!");
        outcomeP.class("loseClass");
        pickedDoor.style("background-color", "red");
    }

    let switchRate = totalSwitchWins / totalSwitchPlays;
    let stayRate = totalStayWins / totalStayPlays;

    resultsP.html(
        `<div>Total Switches: ${totalSwitchPlays}</div>
        <div>Switch Win Rate: ${nf(100 * switchRate, 2, 2)}</div>
        <div>Total Stays: ${totalStayPlays}</div>
        <div>Stay Win Rate: ${nf(100 * stayRate, 2, 2)}</div>`
    );

    playAgain.show();
}
