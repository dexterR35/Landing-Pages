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
let maxBgSpeed = 35;


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



let modal;
let modalText;
let modalButton;



// Preload bg Img
function preload() {
    backgroundImg = loadImage("./png/road.jpg");
    backgroundImgMobile = loadImage("./png/roadMobile.jpg");
    halfDistanceImg = loadImage("./png/roadMobile-check.png");
    halfDistanceImgScale = windowWidth / 4000;
}

// Setup the canvas and StartPosition For Cars and Preload

function setup() {
    let middleCanvas = height / 1.5;
    const container = document.getElementById("container");
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent(container);

    let carSpacing = 50; // Distance between the cars
    startPosition = height - 80; // Set the start position

    if (windowWidth <= 600) {
        carSpacing = 20;
        carScale = 0.3; // Scale for small devices like mobile
    } else {
        carSpacing = 100;
        carScale = 1; // Scale for larger screens
    }
    if (windowHeight > windowWidth) {
        linePosition = startPosition - 110;
        linePositionMiddle = startPosition - 200;
    } else {
        linePosition = startPosition - 150;
        linePositionMiddle = startPosition - 150;
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

    createModal()
    startGameModal();

    console.log(height, "height");
}

function createModal() {
    // createCanvas(400, 400);
    modal = createDiv("");
    modal.id("modal");
    modalText = createP("");
    modalButton = createButton("");
    modalButton.mousePressed(startCountdown);
    modal.child(modalText);
    modal.child(modalButton);
}

function startGameModal() {
    const text = "Click the Start Game button to begin!";
    const buttonStart = "Start Game";
    openModal(text, buttonStart, startCountdown);
  }
  function continueModal() {
    const text = "Cars have reached the half distance! Click the Continue button to proceed.";
    const buttonContinue = "Continue";
    openModal(text, buttonContinue, continueGame);
  }

  function openModal(text, buttonLabel, buttonAction) {
    // Set the modal content
    modalText.html(text);
    modalButton.html(buttonLabel);
    modalButton.mousePressed(buttonAction);
  
    // Display the modal
    modal.style("display", "flex");
  }
  function continueGame() {
    
    // Close the modal
    modal.style("display", "none");
  
    // Implement the logic for what should happen after clicking the Continue button
    // For example, you can resume the game or perform any other desired action
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
let isImageInMiddle = false;
function update() {
    // var maxDistance = height;
    // gameStarted = false; 
    if (gameStarted) {
        // let middleCanvas = height / 1.5;
        roadPosition += bgSpeed;
        startLine.position.y += bgSpeed;
        middleLine.position.y += bgSpeed;
        car1.position.y -= car1Speed;
        car2.position.y -= car2Speed;
        carGood.position.y -= carGoodSpeed;

        if (roadPosition <= -maxDistance) {
            roadPosition = 0;
        }
        // Check if cars have reached the middle of the canvas
        // Check if the car has reached 800m
        else if (
            millis() - lastSpeedIncreaseTime >= speedIncreaseInterval &&
            bgSpeed < maxBgSpeed
        ) {
            bgSpeed += 1.4;
            lastSpeedIncreaseTime = millis();
        }
        // if((car1.position.y <= height / 2 || car2.position.y <= height / 2 || carGood.position.y <= height / 2) && (carGood.position.y >= (car1.position.y || car2.position.y))) {
        //     carGoodSpeed +=  0.1 * random(0.1, 0.15);
        //     console.log("carGoodSpeed mijloc update",carGoodSpeed);
        // }
        // console.log(startPosition - carGood.position.y);
        if (startPosition - carGood.position.y >= (maxDistance - 100)) {
            console.log("test");
            middleLine.visible = true; // Display the middleLine image
        }


 
        // Adjust the carGoodSpeed based on the time remaining
        if (car1.position.y <= startPosition - halfMaxDistance || car2.position.y <= startPosition - halfMaxDistance || carGood.position.y <= startPosition - halfMaxDistance) {
            
           isImageInMiddle = true;
    bgSpeed = maxBgSpeed; // Setați viteza bgSpeed
            if (!alerted) {
                alerted = true;
                maxBgSpeed = 5;
                car1Speed = 0;
                car2Speed = 0;
                carGoodSpeed = 0;
                continueModal();
            }
            console.log("middle of canvas");
        }
        // if (isHalfDistanceReached) {
        //     // Atribuiți viteza bgSpeed imaginii
        //     halfDistanceImgSpeed = bgSpeed;
        //   }
        // Check if carGood reached or crossed maxDistance
        if (carGood.position.y <= startPosition - maxDistance) {
            endRace(true); // carGood won the race
        }
    }
    // frameRate(60);
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
    
    const distanceTraveled = startPosition - carGood.position.y;
    const distanceText = "Distance traveled: " + distanceTraveled.toFixed() + "m";
    
    const timeElapsed = (millis() - startTime) / 1000;
    const timeText = "Time elapsed: " + timeElapsed.toFixed(2) + "s";
    
    const text = resultText + "\n" + distanceText + "\n" + timeText;
    const buttonLabel = "Restart";
    
    openModal(text, buttonLabel, restartGame);
}

// Restart the game
function restartGame() {
    // Reload the page to restart the game
    window.location.reload();
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
        // bgSpeed = min(bgSpeed + 5, maxBgSpeed);
        let car1vsGood = startPosition - carGood.position.y;
        let car2vsGood = startPosition - car1.position.y;
        if (car1vsGood < 150) {
            console.log(startPosition - carGood.position.y);
            console.log(car1vsGood, "car");
            carGoodSpeed += 0.0125;
            car1Speed += 0.0090;
            car2Speed += 0.0090;
            console.log("1", car2vsGood);
        } else {
            carGoodSpeed += 0.0130;
            car1Speed += 0.0090;
            car2Speed += 0.0090;
            console.log("< car1", carGoodSpeed);
            // console.log("carGoodSpeed fata de car1",carGoodSpeed);
        }
        // if((car1.position.y <= height / 2 || car2.position.y <= height / 2 || car1.position.y <= height / 2) && (carGood.position.y >= (car1.position.y || car2.position.y))) {
        //     carGoodSpeed +=  0.2 * random(0.2, 0.3);
        //     console.log("carGoodSpeed mijloc",carGoodSpeed);
        // }
        bgSpeedBefore = bgSpeed;
    }
}

//modal with start game button 






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
 // Verificați dacă imaginea este în mijloc
 if (isImageInMiddle) {
    // Afișați imaginea în mijloc
    image(
      halfDistanceImg,
      width / 2 - halfDistanceImg.width * halfDistanceImgScale / 2,
      height / 2 - halfDistanceImg.height * halfDistanceImgScale / 2,
      halfDistanceImg.width * halfDistanceImgScale,
      halfDistanceImg.height * halfDistanceImgScale
    );
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