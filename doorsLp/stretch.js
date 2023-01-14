const doors = [];
let state = "PICK";
let relveal = "REVEAL"
let pickedDoor;
let revealedDoor;
let remainingDoor;
let switchButton, stayButton, playAgain;
let outcomeP;
let resultsP;
let totalSwitchPlays = 0;
let totalStayPlays = 0;
let totalSwitchWins = 0;
let totalLose = 0;
let totalStayWins = 0;
let wrapper;

// let elt = document.querySelector('.door');

function startOver() {
    resetGame();
    for (let door of doors) {
        console.log(state, "- state doors")

        door.prize = "100$";
        door.html("Deschide usa");

        // door.style("background-color:grey; color:white");
        // door.style("background-color", "lightgrey");
        // console.log(door, "door");
        // console.log(doors, "doors");
    }

    const winner = random(doors);
    winner.prize = "1000$";
    playAgain.hide();
    outcomeP.html("");

    state = "PICK";
}


function generateDoors() {
    for (let i = 0; i < 3; i++) {
        doors[i] = createDiv("");
        doors[i].parent("#doors");
        doors[i].class('door');
        // doors[i].index = i;
        // doors[i].id("ttest" + i);
        doors[i].mousePressed(pickDoor);
    }
    doors[0].addClass("door_one");
    doors[1].addClass("door_two");
    doors[2].addClass("door_tree");

}

function generateButtons() {

    buttonsDiv = createDiv("");
    buttonsDiv.parent("#wrapping_doors");
    buttonsDiv.class("buttonDiv");

    // resultDiv = createDiv("");
    // resultDiv.parent("#wrapping_doors");
    // resultDiv.class("resultDiv");
   // resultsP = createDiv("");
    // resultsP.parent(resultDiv);

    statusDiv = createDiv("");
    statusDiv.parent("#wrapping_doors");
    statusDiv.class("statusDiv");
    outcomeP = createP("");
    outcomeP.parent(statusDiv);
}

function setup() {
    noCanvas();
    generateDoors();
    generateButtons();

    switchButton = createButton("Schimba usa");
    switchButton.class("switchButton");
    // switchButton.style("background-color", "orange");
    switchButton.mousePressed(playerSwitch);
    switchButton.parent(buttonsDiv)
    switchButton.hide();

    stayButton = createButton("Ramai la aceasta usa");
    stayButton.class("buttonStay");
    stayButton.mousePressed(playerStay);
    stayButton.parent(buttonsDiv)
    stayButton.hide();

    playAgain = createButton("Incepe din nou");
    playAgain.mousePressed(startOver);
    playAgain.class("playAgain");
    playAgain.parent(buttonsDiv)
    playAgain.hide();




    // console.log("resultsP", resultsP);

    // console.log("outcomeP", outcomeP);

    startOver();

    // pickedDoor.style("background-color:red; color:white");
}

function pickDoor() {
    if (state == "PICK") {
        state = "REVEAL";
        // this.style("background-color:blue; color:white");

        this.html("ai dat click pe aceasta usa");

        this.attribute("align", "center");
        pickedDoor = this;
        reveal();
        // winReveal();  
    }
    console.log(state, "- pick door state")

}


function reveal() {
    const options = [];
    for (let i = 0; i < doors.length; i++) {
        const door = doors[i];
        if (i !== pickedDoor.index && door.prize !== "1000$") {
            options.push(door);
            // console.log(door.prize, "test door.prize");
            // console.log(pickedDoor, "test pickedDoor");
        }

    }

    revealedDoor = random(options);
    revealedDoor.html(revealedDoor.prize);
    revealedDoor.addClass("revealDoor");
    revealedDoor.attribute("align", "center");
    revealedDoor.html("eu iti ofer aceasta usa");

    setTimeout(() => {
        // state = "PICK"
        stayButton.show();
        switchButton.show();
        switchButton.style("display:flex; align-items:center");
        console.log(state, "reveal door timeout")
        // revealedDoor.hide();
    }, 1000);


}

function resetGame() {
    if (state == "REVEAL") {
        state = "PICK"
        // revealedDoor.hide();
        revealedDoor.removeClass("revealDoor");
        pickedDoor.removeClass("winner_door");
        revealedDoor.style('display:flex');
        console.log(state, "- reset game state");
        pickedDoor.removeClass("loseDoors");
    }
}


function playerSwitch() {
    totalSwitchPlays++;

    let newPick;

    for (let i = 0; i < doors.length; i++) {
        let door = doors[i];
        if (door !== pickedDoor && door !== revealedDoor) {
            newPick = door;
            // console.log(newPick, "winner-prize door if winning and switch if not winning is current last click");
            break;
        }
        if (door == pickedDoor && door !== revealedDoor) {
            // console.log(pickedDoor, "pickedDoor after switch ");
        }
    }
    console.log(totalSwitchPlays, "total Switch Plays");
    pickedDoor = newPick;
    checkWin(true);
}

function playerStay() {
    totalStayPlays++;
    // console.log(totalStayPlays, "totalstayPlays");
    checkWin(false);
}

function checkWin(playerSwitch) {
    switchButton.hide();
    stayButton.hide();
    for (let door of doors) {
        door.html(door.prize);
        // door.style("background-color", "purple");
    }

    if (pickedDoor.prize == "1000$") {
        outcomeP.html("You Win!");
        // pickedDoor.style("background:green")
        pickedDoor.addClass("winner_door");
        // this.style("background-color:unset !important; color:white");
        // pickedDoor.style("background-image: url(./img/test.jpg)");
        outcomeP.class("winClass");
        if (playerSwitch) {
            totalSwitchWins++;

        } else {
            totalStayWins++;
            // console.log(totalStayWins, "totalStayWins");
        }
    } else {
        outcomeP.html("You lose!");
        totalLose++;

        // console.log(totalLose, "Total stay lose");
        outcomeP.addClass("loseClass");
        pickedDoor.addClass("loseDoors");
    }

    let switchRate = totalSwitchWins / totalSwitchPlays;
    let stayRate = totalStayWins / totalStayPlays;
    let loseRate = stayRate / totalLose;


    // resultsP.html(
    //     `<div>Total Switches: ${totalSwitchPlays}</div>
    //         <div>Switch Win Rate: ${nf(100 * switchRate, 2, 2)}%</div>
    //         <div>Total Stays: ${totalStayPlays}</div>
    //         <div>Stay Win Rate: ${nf(100 * stayRate, 2, 2)}%</div>
    //         <div>Lose Win Rate: ${nf(100 * loseRate, 2, 2)}%</div>
    //     `
    // );
    playAgain.show();
    playAgain.mousePressed(startOver);
    // console.log(state, "state5")
}

console.log(state, "- state START Document")