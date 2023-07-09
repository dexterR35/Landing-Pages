

let backgroundImg;

let car1, car2, carGood;
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
let maxDistance = 600;
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

    const container = document.getElementById("container");
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent(container);

    let carSpacing = 50; // Distance between the cars
    startPosition = windowHeight - 120; // Set the start position

    if (windowWidth <= 600) {
        carSpacing = 20;
        carScale = 0.3; // Scale for small devices like mobile
    } else {
        carSpacing = 100;
        carScale = 1; // Scale for larger screens
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
    console.log(car1.position.y, "position.y");
    console.log(car2.position.y, "position.y");
    console.log(carGood.position.y, "position.y");
    console.log(startPosition, "startPosition");
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
        if((car1.position.y <= height / 2 || car2.position.y <= height / 2 || carGood.position.y <= height / 2) && (carGood.position.y >= (car1.position.y || car2.position.y))) {
            carGoodSpeed +=  0.1 * random(0.1, 0.15);
            console.log("carGoodSpeed mijloc update",carGoodSpeed);
        }

        // Adjust the carGoodSpeed based on the time remaining
        if (car1.position.y <= height / 2 || car2.position.y <= height / 2 || carGood.position.y <= height / 2) {
            console.log("middle of canvas");
            if (!alerted) {
                bgSpeedBefore = maxBgSpeed;
                c1SpeedBefore = car1Speed;
                c2SpeedBefore = car2Speed;
                cgSpeedBefore = carGoodSpeed;

                console.log(maxBgSpeed, "max");
                alerted = true;
                // distanceRemaining = 0;

                maxBgSpeed = 5;
                car1Speed = 0;
                car2Speed = 0;
                carGoodSpeed = 0;
                // carGoodSpeed += 1;
                createCustomAlert("One of the cars reached the half distance point!");

            }
            // carGoodSpeed = random(0.4, 0.6); // Adjust the speed increment as per your requirement
        } else if (carGood.position.y <= 0) {
            endRace(true);
        }

        // console.log(car2Speed,"car2Speed1");
        // Check if carGood reached or crossed maxDistance
        if (carGood.position.y <= startPosition - maxDistance) {
            endRace(true); // carGood won the race
        }
        // car2 vs carGood
        let car1vsGood = abs(carGood.position.y - car1.position.y);
        if (car1vsGood > 40) {
            // carGoodSpeed += 0.3 * random(0.2, 0.3);
        }
     
        let car2vsGood = abs(carGood.position.y - car2.position.y);
        if (car2vsGood > 30) {
            // carGoodSpeed += 0.3 * random(0.2, 0.3);
        }

 
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
        // carGoodSpeed += 0.1 * random(0.15, 0.2);
    //   carGoodSpeed2;
     
        let car1vsGood = abs(carGood.position.y - car2.position.y);

        if (car1vsGood > 50) {
            car1Speed += 0.1 * random(0.1, 0.2);
            car2Speed += 0.1 * random(0.1, 0.2);
            // carGoodSpeed +=  0.1 * random(0.1, 0.15);
            if(car1vsGood = 20) {
                carGoodSpeed +=  0.2 * random(0.5, 0.9);
                console.log("carGoodSpeed",car2Speed);
            }
        } else {
            carGoodSpeed +=  0.03 * random(0.1, 0.15);
            console.log("carGoodSpeed fata de car1",carGoodSpeed);
        } 
    
        if((car1.position.y <= height / 2 || car2.position.y <= height / 2 || car1.position.y <= height / 2) && (carGood.position.y >= (car1.position.y || car2.position.y))) {
            carGoodSpeed +=  0.3 * random(0.1, 0.25);
            console.log("carGoodSpeed mijloc",carGoodSpeed);
        }
    }
}

//modal with start game button 

function startGameModal() {
    // let text = "Apasă butonul pentru a începe jocul!";
    // createCustomAlert(text, startCountdown);
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

    const startButton = document.createElement("button");
    startButton.textContent = "Start";
    startButton.addEventListener("click", startButton);
    alertDiv.appendChild(continueButton, startButton);

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
  createCustomAlert("One of the cars reached the half distance point!");
    //  distanceRemaining = 0;
    //  bgSpeedBefore = maxBgSpeed;
    maxBgSpeed = bgSpeedBefore;
    car1Speed = c1SpeedBefore;
    car2Speed = c2SpeedBefore;
    carGoodSpeed = cgSpeedBefore;
    // carGoodSpeed += 1;
  
    removeCustomAlert();
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


    if (windowWidth <= 600) {
        image(backgroundImgMobile, 0, normalizedPosition, width, height);
        image(backgroundImgMobile, 0, normalizedPosition + height, width, height);
    } else {
        image(backgroundImg, 0, normalizedPosition, width, height);
        image(backgroundImg, 0, normalizedPosition + height, width, height);

    }
    // Calculate the distance remaining from carGood to the end of the race
    let distanceRemainingFull = maxDistance - (startPosition - carGood.position.y);
    let distanceRemainingCar1Full = maxDistance - (startPosition - car1.position.y);
    let distanceRemainingCar2Full = maxDistance - (startPosition - car2.position.y);
    let carDistance1 = abs(car1.position.y - carGood.position.y);
    let carDistance2 = abs(car2.position.y - carGood.position.y);
    let textAlignM;

    // Display the maximum distance, half distance, and distance remaining on the canvas
    textSize(20);
    var containerWidth = 500; // Set the width of the container
    var containerHeight = 200; // Set the height of the container
    var containerX = width / 2 - containerWidth / 2; // Calculate the x-coordinate of the container
    var containerY = height / 1.15; // Set the y-coordinate of the container
    
    // Draw the container
  
    rect(containerX, containerY, containerWidth, containerHeight);
    textAlign(CENTER);
    fill(0); // Set the fill color to black
    text("Max Distance: " + maxDistance + "m", width / 2, containerY + 30);
    text("Half Distance: " + halfMaxDistance + "m", width / 2, containerY + 50);
    text("dominic in m: " + distanceRemainingFull.toFixed() + "m", width / 2, containerY + 70);

    if (windowWidth <= 600) {
        textAlignM = 100;
    } else {
        textAlignM = 160
    }
    fill(255)
    text(distanceRemainingFull.toFixed() + "m", carGood.position.x, carGood.position.y + textAlignM);
    text(distanceRemainingCar1Full.toFixed() + "m", car1.position.x - 10, car1.position.y + textAlignM);
    text(distanceRemainingCar2Full.toFixed() + "m", car2.position.x + 10, car2.position.y + textAlignM);

    update();
}


