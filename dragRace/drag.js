// let backgroundImg;

// let car1, car2, carGood;
// let roadPosition = 0;

// let car1Speed = 0;
// let car2Speed = 0;
// let carGoodSpeed = 0;
// let gameStarted = false;

// let countdown = 3;
// let countdownInterval;
// let carDistance = 200;

// let bgSpeed = 2;
// let isRoadMoving = false;
// const maxBgSpeed = 60;

// let lastSpeedIncreaseTime = 0;
// const speedIncreaseInterval = 500; // Increase speed every 500 milisecons 


// const maxDistance = 1000; // Maximum racing distance (in meters)
// let halfMaxDistance = maxDistance / 2;
// const raceTime = 30; // Time to reach the finish line (in seconds)
// let startTime; // To store the start time
// let endTime; // To store the end time

// let isGamePaused = false; // Variable to track if the game is paused

// function preload() {
//     backgroundImg = loadImage("./png/road.jpg");
// }

// function setup() {

//     const container = document.getElementById("container");
//     const canvas = createCanvas(windowWidth, windowHeight);
//     canvas.parent(container);

//     let carSpacing = 50; // Distance between the cars
//     const startPosition = windowHeight - 200;

//     let carScale;

//     if (windowWidth <= 600) {
//         carSpacing = 20;
//         carScale = 0.3; // Scale for small devices like mobile
//     } else {
//         carScale = 0.7; // Scale for larger screens
//     }

//     car1 = createSprite(
//         width / 2.5 - carSpacing,
//         startPosition
//     );
//     car1.addImage("car1", loadImage("./png/car1.png"));
//     car1.scale = carScale;

//     car2 = createSprite(
//         width / 1.65 + carSpacing,
//         startPosition
//     );
//     car2.addImage("car2", loadImage("./png/car2.png"));
//     car2.scale = carScale;

//     carGood = createSprite(width / 2, startPosition);
//     carGood.addImage("carGood", loadImage("./png/car.png"));
//     carGood.scale = carScale;

//     startGameModal()
// }


// function startRace() {
//     gameStarted = true;
//     car1Speed = random(0.2, 0.5);
//     car2Speed = random(0.2, 0.4);
//     carGoodSpeed = random(0.1, 0.2);
//     startTime = millis(); // Store the current time as the start time
// }


// function update() {
//     if (gameStarted) {
//         roadPosition += bgSpeed;
//         car1.position.y -= car1Speed ;
//         car2.position.y -= car2Speed ;
//         carGood.position.y -= carGoodSpeed ;

//         if (roadPosition <= -height) {
//             roadPosition = 0;
//         }



//         if (
//             millis() - lastSpeedIncreaseTime >= speedIncreaseInterval &&
//             bgSpeed < maxBgSpeed
//         ) {
//             bgSpeed += 2;
//             lastSpeedIncreaseTime = millis();
//             console.log(lastSpeedIncreaseTime,"lastSpeedIncreaseTime");
//             console.log(bgSpeed,"lastSpeedIncreaseTime");
//         }

// }
// }


// function endRace(won) {
//     gameStarted = false;

//     let modal = createDiv("");
//     modal.id("modal");

//     let resultText;
//     if (won) {
//         resultText = "Felicitări! Ai câștigat!";
//     } else {
//         resultText = "Ai pierdut!";
//     }

//     let distanceText = "Distanta parcursa: " + carGood.position.y.toFixed() + "m";
//     let timeText = "Timp scurs: " + (millis() - startTime) / 1000 + "s";

//     let text = createP(resultText + "\n" + distanceText + "\n" + timeText);
//     modal.child(text);

//     let restartButton = createButton("Restart Game");
//     restartButton.mousePressed(function () {
//         location.reload(); // Reload the page to restart the game
//     });
//     modal.child(restartButton);
// }

// function mousePressed() {
//     if (!gameStarted) {
//         let modal = select("#modal");
//         if (modal) {
//             let startButton = modal.child()[1];
//             if (
//                 mouseX > startButton.position().x &&
//                 mouseX < startButton.position().x + startButton.width &&
//                 mouseY > startButton.position().y &&
//                 mouseY < startButton.position().y + startButton.height
//             ) {
//                 startCountdown();
//             }
//         }
//     } else {
//         bgSpeed = min(bgSpeed + 5, maxBgSpeed);
//         carGoodSpeed += 0.1;
//         car2Speed += 0.1 * random(0.6, 0.8);
//         car1Speed += 0.1 * random(0.6, 0.8);
//     }
// }

// function startGameModal() {
//     let modal = createDiv("");
//     modal.id("modal");

//     let text = createP("Apasă butonul pentru a începe jocul!");
//     let startButton = createButton("Start Game");
//     startButton.mousePressed(startCountdown);
//     modal.child(text);
//     modal.child(startButton);
// }

// function startCountdown() {
//     let modal = select("#modal");
//     modal.style("display", "none");

//     countdownText = createP("3");
//     countdownText.class("countdown-text");
//     countdownText.position(width / 2, height / 2);

//     countdownInterval = setInterval(function () {
//         countdown--;

//         if (countdown === 0) {
//             clearInterval(countdownInterval);
//             countdownText.html("Go!");
//             setTimeout(function () {
//                 countdownText.remove();
//                 startRace();
//             }, 1000);
//         } else {
//             countdownText.html(countdown);
//         }
//     }, 1000);
// }

// function draw() {
//     let normalizedPosition = roadPosition % height;
//     if (normalizedPosition > 0) {
//         normalizedPosition -= height;
//     }

//     image(backgroundImg, 0, normalizedPosition, width, height);
//     image(backgroundImg, 0, normalizedPosition + height, width, height);
//  // Check if carGood reached half of maxDistance

//     update();
// }



/*The code you provided appears to be a part of a JavaScript p5.js sketch that creates a simple racing game. Here's a breakdown of the main components and functionality of the code:

1. Variables:
- `backgroundImg`: Stores the reference to the background image.
- `car1`, `car2`, `carGood`: Sprite objects representing the cars in the game.
- `roadPosition`: The current position of the road.
- `car1Speed`, `car2Speed`, `carGoodSpeed`: The speed of each car.
- `gameStarted`: Boolean flag indicating whether the game has started.
- `countdown`: The countdown value for the game start.
- `countdownInterval`: Interval reference for the countdown.
- `carDistance`: Distance between the cars.
- `bgSpeed`: Speed of the background scrolling.
- `isRoadMoving`: Boolean flag indicating whether the road is moving.
- `maxBgSpeed`: The maximum speed of the background scrolling.
- `lastSpeedIncreaseTime`: The time when the background speed was last increased.
- `speedIncreaseInterval`: Interval duration for increasing the background speed.
- `maxDistance`: Maximum racing distance in meters.
- `halfMaxDistance`: Half of the maximum racing distance.
- `raceTime`: Time to reach the finish line in seconds.
- `startTime`: Stores the start time of the race.
- `endTime`: Stores the end time of the race.
- `isGamePaused`: Boolean flag indicating whether the game is paused.

2. `preload()` function:
- Loads the background image.

3. `setup()` function:
- Sets up the canvas and initializes car sprites.
- Calls the `startGameModal()` function.

4. `startRace()` function:
- Sets the gameStarted flag to true.
- Assigns random speeds to the cars.
- Stores the start time of the race.

5. `update()` function:
- Updates the game state.
- Moves the road, cars, and checks for race conditions.
- Increases the background speed at regular intervals.
- Calculates and displays various race-related information.

6. `endRace(won)` function:
- Ends the race and displays the race result in a modal.
- If the player won, shows a victory message; otherwise, shows a loss message.
- Displays the distance covered by the player and the time taken.

7. `mousePressed()` function:
- Handles mouse clicks during the game.
- If the game is not started, checks if the start button is clicked and starts the countdown.
- If the game is started, increases the speeds of cars and background scrolling.

8. `startGameModal()` function:
- Creates a modal to start the game.
- Displays a message and a start button.

9. `startCountdown()` function:
- Starts the countdown before the game begins.
- Updates the countdown text and starts the race when the countdown ends.

10. `draw()` function:
- The main game loop that runs continuously.
- Displays the background image and updates the game state.

Please note that this code snippet may be incomplete and might require additional code to function properly within a p5.js sketch.*/




let backgroundImg;

let car1, car2, carGood;
let startPosition;
let carScale;
let roadPosition = 0;

let car1Speed = 0;
let car2Speed = 0;
let carGoodSpeed = 0;

let gameStarted = false;

let countdown = 3;
let countdownInterval;
let carDistance = 200;

let bgSpeed = 2;
let isRoadMoving = false;

let maxBgSpeed = 60;

let lastSpeedIncreaseTime = 0;
const speedIncreaseInterval = 80; // Increase speed every 500 milisecons 


const maxDistance = 250; // Maximum racing distance (in meters)
let halfMaxDistance = maxDistance / 2;



const raceTime = 30; // Time to reach the finish line (in seconds)

let startTime; // To store the start time

let endTime; // To store the end time


//Pause
let alerted = false; // Flag to track if alert has been shown
let isGamePaused = false; // Variable to track if the game is paused


// Preload bg Img
function preload() {
    backgroundImg = loadImage("./png/road.jpg");
}

// Setup the canvas and StartPosition For Cars and Preload

function setup() {
    const container = document.getElementById("container");
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent(container);

    let carSpacing = 50; // Distance between the cars
    startPosition = windowHeight - 200; // Set the start position

    if (windowWidth <= 600) {
        carSpacing = 20;
        carScale = 0.3; // Scale for small devices like mobile
    } else {
        carScale = 0.7; // Scale for larger screens
    }

    car1 = createSprite(
        width / 2.5 - carSpacing,
        startPosition
    );
    car1.addImage("car1", loadImage("./png/car1.png"));
    car1.scale = carScale;

    car2 = createSprite(
        width / 1.65 + carSpacing,
        startPosition
    );
    car2.addImage("car2", loadImage("./png/car2.png"));
    car2.scale = carScale;

    carGood = createSprite(width / 2, startPosition);
    carGood.addImage("carGood", loadImage("./png/car.png"));
    carGood.scale = carScale;

    startGameModal()
}

// Start the race and cars start speed
function startRace() {
    gameStarted = true;
    car1Speed = random(0.5, 0.9);
    car2Speed = random(0.4, 0.9);
    carGoodSpeed = random(0.02, 0.1);
    startTime = millis(); // Store the current time as the start time
}

// update the game Real time
function update() {
    if (gameStarted) {
        roadPosition += bgSpeed;
        car1.position.y -= car1Speed;
        car2.position.y -= car2Speed;
        carGood.position.y -= carGoodSpeed;

        if (roadPosition <= -height) {
            roadPosition = 0;
        }

        if (
            millis() - lastSpeedIncreaseTime >= speedIncreaseInterval &&
            bgSpeed < maxBgSpeed
        ) {
            bgSpeed += 2;
            lastSpeedIncreaseTime = millis();
        }

        // Check if carGood/car1/car2 reached or crossed the half distance
        if (car1.position.y <= startPosition - halfMaxDistance || car2.position.y <= startPosition - halfMaxDistance) 
        {         
            if (!alerted) {
                 distanceRemaining = 0;
                alerted = true;
                maxBgSpeed = 5;
                car1Speed = 0;
                car2Speed = 0;
                carGoodSpeed = 0;
                // carGoodSpeed += 1;
                createCustomAlert("One of the cars reached the half distance point!");
       
            }
        } else if (carGood.position.y <= 0) {
            endRace(true);
        }
        else if (car1.position.y <= startPosition - halfMaxDistance || car2.position.y <= startPosition - halfMaxDistance) {
            carGoodSpeed += 3; // Adjust the speed increment as per your requirement
      
        }
        console.log("carGoodSpeed",carGoodSpeed);
        console.log("startPosition",startPosition);

        // Check if carGood reached or crossed maxDistance
        if (carGood.position.y <= startPosition - maxDistance) {
            endRace(true); // carGood won the race
        }

        // console.log("carGoodSpeedDisplay");
    }
}

// End Race win and text
function endRace(won) {
    gameStarted = false;

    let modal = createDiv("");
    modal.id("modal");

    let resultText;
    if (won) {
        resultText = "Congratulations! You won!";
    } else {
        resultText = "You lost!";
    }

    let distanceText = "Distance traveled: " + (startPosition - carGood.position.y) + "m";
    let timeText = "Time elapsed: " + (millis() - startTime) / 1000 + "s";

    let text = createP(resultText + "\n" + distanceText + "\n" + timeText);
    modal.child(text);

    let restartButton = createButton("Restart Game");
    restartButton.mousePressed(function () {
        location.reload(); // Reload the page to restart the game
    });
    modal.child(restartButton);
}
// Mouse Pressed for start game and cars speed

function mousePressed() {
    if (!gameStarted) {
        let modal = select("#modal");
        if (modal) {
            let startButton = modal.child()[1];
            if (
                mouseX > startButton.position().x &&
                mouseX < startButton.position().x + startButton.width &&
                mouseY > startButton.position().y &&
                mouseY < startButton.position().y + startButton.height
            ) {
                startCountdown();
            }
        }
    } else {
        bgSpeed = min(bgSpeed + 5, maxBgSpeed);
        carGoodSpeed += 0.018;
        car2Speed += 0.011 * random(0.2, 0.8);
        car1Speed += 0.015 * random(0.2, 0.9);
    }
}

//modal with start game button 

function startGameModal() {
    let modal = createDiv("");
    modal.id("modal");

    let text = createP("Apasă butonul pentru a începe jocul!");
    let startButton = createButton("Start Game");
    startButton.mousePressed(startCountdown);
    modal.child(text);
    modal.child(startButton);
}


// Create the pop-up  with a text and a continue button

function createCustomAlert(message) {
    const alertDiv = document.createElement("div");
    alertDiv.id = "customAlert";
    alertDiv.style.position = "fixed";
    alertDiv.style.top = "50%";
    alertDiv.style.left = "50%";
    alertDiv.style.transform = "translate(-50%, -50%)";
    alertDiv.style.backgroundColor = "white";
    alertDiv.style.padding = "20px";
    alertDiv.style.border = "1px solid black";
    alertDiv.style.zIndex = "9999";

    const messageText = document.createElement("p");
    messageText.textContent = message;
    alertDiv.appendChild(messageText);

    const continueButton = document.createElement("button");
    continueButton.textContent = "Continue";
    continueButton.addEventListener("click", continueRace);
    alertDiv.appendChild(continueButton);

    document.body.appendChild(alertDiv);
    bgSpeed = 5;

}
// Remove the pop-up element from the document
function removeCustomAlert() {
    const alertDiv = document.getElementById("customAlert");
    if (alertDiv) {
        document.body.removeChild(alertDiv);

    }
}
// Rfter pause continue the race
function continueRace() {
  
    removeCustomAlert();
    bgSpeed = min(bgSpeed + 5, maxBgSpeed);
    draw();

}
// Start CountDown
function startCountdown() {
    let modal = select("#modal");
    modal.style("display", "none");

    countdownText = createP("3");
    countdownText.class("countdown-text");
    countdownText.position(width / 2, height / 2);

    countdownInterval = setInterval(function () {
        countdown--;

        if (countdown === 2) {
            clearInterval(countdownInterval);
            countdownText.html("Go!");
            setTimeout(function () {
                countdownText.remove();
                startRace();
            }, 1000);
        } else {
            countdownText.html(countdown);
        }
    }, 1000);
}




//Draw the things
function draw() {
    let normalizedPosition = roadPosition % height;

    if (normalizedPosition > 0) {
        normalizedPosition -= height;
    }

    image(backgroundImg, 0, normalizedPosition, width, height);
    image(backgroundImg, 0, normalizedPosition + height, width, height);

    // Calculate the distance remaining from carGood to the end of the race
    let distanceRemainingFull = maxDistance - (startPosition - carGood.position.y);
    let distanceRemaining = halfMaxDistance - (startPosition - carGood.position.y);
    let distanceRemainingCar1 = halfMaxDistance - (startPosition - car1.position.y);
    let distanceRemainingCar2 = halfMaxDistance - (startPosition - car2.position.y);
    let distanceRemainingCar1Full = maxDistance - (startPosition - car1.position.y);
    let distanceRemainingCar2Full = maxDistance - (startPosition - car2.position.y);

    // Calculate the speed of each car
    let carGoodSpeedDisplay = carGoodSpeed * 100; // Convert carGoodSpeed to a displayable value
    let car1SpeedDisplay = car1Speed * 100; // Convert car1Speed to a displayable value
    let car2SpeedDisplay = car2Speed * 100; // Convert car2Speed to a displayable value
        // Display the maximum distance, half distance, and distance remaining on the canvas
    textSize(20);
    fill(255);
    textAlign(CENTER);
    text("Max Distance: " + maxDistance + "m", width / 2, 30);
    text("Half Distance: " + halfMaxDistance + "m", width / 2, 50);
    text("Distance Remaining full:car good " + distanceRemainingFull.toFixed() + "m", width / 2, 90);
    text("Distance Remaining half:car good " + distanceRemaining.toFixed() + "m", width / 2, 70);
    text("Distance Remaining:car1 " + distanceRemainingCar1.toFixed() + "m", width / 2, 110);
    text("Distance Remaining:car2 " + distanceRemainingCar2.toFixed() + "m", width / 2, 130);

    text(distanceRemainingFull.toFixed() + "m", carGood.position.x, carGood.position.y + 160);
    text(distanceRemainingCar1Full.toFixed() + "m", car1.position.x - 10, car1.position.y + 160);
    text(distanceRemainingCar2Full.toFixed() + "m", car2.position.x + 10, car2.position.y + 160);

    update();
}