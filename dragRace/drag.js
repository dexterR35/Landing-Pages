let backgroundImg;

let car1, car2, carGood, startLine;
let carDistance;
let startPosition;
let carScale;
let roadPosition = 0;

let car1Speed = 0;
let car2Speed = 0;
let carGoodSpeed = 0;

let gameStarted = false;

let countdown = 3;
let countdownInterval;


let bgSpeed = 3;
let isRoadMoving = false;
let maxBgSpeed = 50;


let lastSpeedIncreaseTime = 0;
const speedIncreaseInterval = 80; // Increase speed every 500 milisecons 


// Maximum racing distance (in meters)
let maxDistance = 500;
let halfMaxDistance = maxDistance / 2;



const raceTime = 10; // Time to reach the finish line (in seconds)


let startTime; // To store the start time
let endTime; // To store the end time
let maxTime; //max time for loop

//Pause
let alerted = false; // Flag to track if alert has been shown
let isGamePaused = false; // Variable to track if the game is paused


let bgSpeedBefore;
let c1SpeedBefore;
let c2SpeedBefore;
let cgSpeedBefore;


// Preload bg Img
function preload() {
    backgroundImg = loadImage("./png/road.jpg");
    backgroundImgMobile = loadImage("./png/roadMobile.jpg");
}

// Setup the canvas and StartPosition For Cars and Preload

function setup() {
    let middleCanvas = height / 1.5;
    const container = document.getElementById("container");
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent(container);

    let carSpacing = 50; // Distance between the cars
    startPosition = height - 120; // Set the start position

    if (windowWidth <= 600) {
        carSpacing = 20;
        carScale = 0.3; // Scale for small devices like mobile
    } else {
        carSpacing = 100;
        carScale = 1; // Scale for larger screens
    }
    if (windowHeight > windowWidth) {
        linePosition = startPosition - 100;
        linePositionMiddle = startPosition - (startPosition - height / 102);
    } else {
        linePosition = startPosition - 250;
        linePositionMiddle = startPosition - 100;
    }

    startLine = createSprite(
        (width / 2) - (width * 0.045),
        linePosition
    );
    startLine.addImage("startLine", loadImage("./png/roadMobile-line-offset.png"));
    startLine.scale = windowWidth / 4000;


    middleLine = createSprite(
        (width / 2) - (width * 0.045),
        linePositionMiddle
    );
    middleLine.addImage("middleLine", loadImage("./png/roadMobile-check.png"));
    middleLine.scale = windowWidth / 4000;

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
    startGameModal();
    console.log(height, "height");
}

// Start the race and cars start speed
function startRace() {

    gameStarted = true;
    car1Speed = random(0.1, 0.2);
    car2Speed = random(0.1, 0.2);
    carGoodSpeed = random(0.1, 0.15);
    startTime = millis().toFixed(); // Store the current time as the start time
    console.log(carGoodSpeed, "carGoodSpeed");
}


// update the game Real time

function update() {
    // var maxDistance = height;
    // gameStarted = false; 
    if (gameStarted) {
        let middleCanvas = height / 1.5;
        roadPosition += bgSpeed;
        startLine.position.y += bgSpeed;
        middleLine.position.y += bgSpeed;
        car1.position.y -= car1Speed;
        car2.position.y -= car2Speed;
        carGood.position.y -= carGoodSpeed;

        if (roadPosition <= -maxDistance) {
            roadPosition = 0;
        }

        if (
            millis() - lastSpeedIncreaseTime >= speedIncreaseInterval &&
            bgSpeed < maxBgSpeed
        ) {
            bgSpeed += 2;
            lastSpeedIncreaseTime = millis();
        }
        // if((car1.position.y <= height / 2 || car2.position.y <= height / 2 || carGood.position.y <= height / 2) && (carGood.position.y >= (car1.position.y || car2.position.y))) {
        //     carGoodSpeed +=  0.1 * random(0.1, 0.15);
        //     console.log("carGoodSpeed mijloc update",carGoodSpeed);
        // }

        // Adjust the carGoodSpeed based on the time remaining
        if (car1.position.y <= height / 2 || car2.position.y <= height / 2 || carGood.position.y <= height / 2) {
            console.log("middle of canvas");
            if (!alerted) {
                alerted = true;
                maxBgSpeed = 5;
                car1Speed = 0;
                car2Speed = 0;
                carGoodSpeed = 0;
                createCustomAlert("One of the cars reached the half distance point!");
            }
        } else if (carGood.position.y <= 0) {
            endRace(true);
        }
        // Check if carGood reached or crossed maxDistance
        if (carGood.position.y <= startPosition - maxDistance) {
            endRace(true); // carGood won the race
        }
        // let car1vsGood = abs(carGood.position.y - car1.position.y);
        // if (car1vsGood > 40) {
        //     // carGoodSpeed += 1;
        // }
        // let car2vsGood = abs(carGood.position.y - car2.position.y);
        // if (car2vsGood > 30) {
        //     // carGoodSpeed += 2;
        // }


    }
}

// End Race win and text
function endRace(won) {
    gameStarted = false;
    let resultText;
    if (won) {
        resultText = "Congratulations! You won!";
    } else {
        resultText = "You lost!";
    }
    let distanceText = "Distance traveled: " + (startPosition - carGood.position.y).toFixed() + "m";
    let timeText = "Time elapsed: " + (millis() - startTime) / 1000 + "s";
    let text = resultText + "\n" + distanceText + "\n" + timeText;
    createCustomAlert(text, restartGame);
}

// Restart the game
function restartGame() {
    location.reload();
}

// Mouse Pressed for start game and cars speed
function mousePressed() {
    if (!gameStarted || !createCustomAlert) {
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
        // bgSpeed = min(bgSpeed + 5, maxBgSpeed);
        let car1vsGood = abs(carGood.position.y - car2.position.y);
        if (car1vsGood < 50) {
            carGoodSpeed += 0.01;
            car1Speed += 0.02;
            car2Speed += 0.02;
            // console.log("1",car1Speed);
        } else {
            carGoodSpeed += 0.03;
            car1Speed += 0.01;
            car2Speed += 0.01;
            console.log("< 50", carGoodSpeed);
            // console.log("carGoodSpeed fata de car1",carGoodSpeed);
        }
        if (car1vsGood > 50) {
            carGoodSpeed += 0.02;
            car1Speed += 0.01;
            car2Speed += 0.01;
            console.log("> 50", carGoodSpeed);

        } else {
            carGoodSpeed += 0.01;
            car1Speed += 0.02;
            car2Speed += 0.02;
            // console.log("3",carGoodSpeed);
        }
        // if((car1.position.y <= height / 2 || car2.position.y <= height / 2 || car1.position.y <= height / 2) && (carGood.position.y >= (car1.position.y || car2.position.y))) {
        //     carGoodSpeed +=  0.2 * random(0.2, 0.3);
        //     console.log("carGoodSpeed mijloc",carGoodSpeed);
        // }
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
    alertDiv.classList.add("custom-alert");
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
    continueButton.addEventListener("click", function () {
        removeCustomAlert();
    });

    const startButton = document.createElement("button");
    startButton.textContent = "Start";
    startButton.addEventListener("click", startButton);
    alertDiv.appendChild(continueButton, startButton);

    document.body.appendChild(alertDiv);
    bgSpeed = 5;
}

function removeCustomAlert() {
    const alertDiv = document.getElementById("customAlert");
    if (alertDiv) {
        document.body.removeChild(alertDiv);

    }
    bgSpeed = 45;
}


// Start CountDown
function startCountdown() {
    let modal = select("#modal");
    modal.style("display", "none");

    countdownText = createP("3");
    countdownText.class("countdown-text");
    countdownText.position(width / 3.35, height / 3);

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

    if (windowWidth <= 600) {
        image(backgroundImgMobile, 0, normalizedPosition, width, height);
        image(backgroundImgMobile, 0, normalizedPosition + height, width, height);
    } else {
        image(backgroundImg, 0, normalizedPosition, width, height);
        image(backgroundImg, 0, normalizedPosition + height, width, height);
    }

    renderTextElements();
    update();
}

function renderTextElements() {

    // Calculate the distance remaining from carGood to the end of the race
    let distanceRemainingFull = maxDistance - (startPosition - carGood.position.y);
    let distanceRemainingCar1Full = maxDistance - (startPosition - car1.position.y);
    let distanceRemainingCar2Full = maxDistance - (startPosition - car2.position.y);
    // let carDistance1 = abs(car1.position.y - carGood.position.y);
    // let carDistance2 = abs(car2.position.y - carGood.position.y);


    // Display the maximum distance, half distance, and distance remaining on the canvas

    let textAlignM;
    var containerWidth = 180; // Set the width of the container
    var containerHeight = 60; // Set the height of the container
    var containerX = width / 2 - containerWidth / 2; // Calculate the x-coordinate of the container
    var containerY = height / 25; // Set the y-coordinate of the container

    // Draw the container
    textSize(16);
    rect(containerX, containerY, containerWidth, containerHeight);
    textAlign(CENTER);
    fill(0); // Set the fill color to black
    text("Max Distance: " + maxDistance + "m", width / 2, containerY + 20);
    text("Half Distance: " + halfMaxDistance + "m", width / 2, containerY + 35);
    text("dominic in m: " + distanceRemainingFull.toFixed() + "m", width / 2, containerY + 50);

    if (windowWidth <= 600) {
        textAlignM = 100;
    } else {
        textAlignM = 160
    }
    fill(255)
    text(distanceRemainingFull.toFixed() + "m", carGood.position.x, carGood.position.y + textAlignM);
    text(distanceRemainingCar1Full.toFixed() + "m", car1.position.x - 10, car1.position.y + textAlignM);
    text(distanceRemainingCar2Full.toFixed() + "m", car2.position.x + 10, car2.position.y + textAlignM);
}