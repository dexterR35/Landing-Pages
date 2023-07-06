let backgroundImg;

let car1, car2, carGood;
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
const maxBgSpeed = 60;

let lastSpeedIncreaseTime = 0;
const speedIncreaseInterval = 700; // Increase speed every 2 seconds


const maxDistance = 1000; // Maximum racing distance (in meters)
let halfMaxDistance = maxDistance / 2;
const raceTime = 30; // Time to reach the finish line (in seconds)
let startTime; // To store the start time
let endTime; // To store the end time

let isGamePaused = false; // Variable to track if the game is paused

function preload() {
    backgroundImg = loadImage("./png/road.jpg");
}

function setup() {
    const container = document.getElementById("container");
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent(container);

    let carSpacing = 50; // Distance between the cars
    const startPosition = windowHeight - 200;

    let carScale;

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


function startRace() {
    gameStarted = true;
    car1Speed = random(0.2, 0.3);
    car2Speed = random(0.3, 0.4);
    carGoodSpeed = random(0.1, 0.2);
    startTime = millis(); // Store the current time as the start time
}


function update() {
    if (gameStarted) {
        roadPosition += bgSpeed;
        car1.position.y -= car1Speed - random(0.2, 0.3);
        car2.position.y -= car2Speed - random(0.2, 0.3);
        carGood.position.y -= carGoodSpeed - random(0.2, 0.3);

        if (roadPosition <= -height) {
            roadPosition = 0;
        }
        let carPosition = maxDistance - (carGood.position.y / height) * maxDistance;
        console.log("Car position: " + carPosition.toFixed(2) + "m");
        // Adjust the condition to make the race car be in the middle when it reaches the middle of maxDistance
        if (carGood.position.y <= halfMaxDistance + carGoodSpeed &&
            carGood.position.y >= halfMaxDistance - carGoodSpeed) {
            // carGoodSpeed = 0; // Stop the carGood when it reaches the middle
            alert("Congratulations! You reached the middle of the race.");
        } else if (carGood.position.y <= 0) {
            endRace(true);
        } else if (car1.position.y <= halfMaxDistance && car2.position.y <= halfMaxDistance) {
            carGoodSpeed += 0.02; // Adjust the speed increment as per your requirement
        } else if (car1.position.y <= 0 || car2.position.y <= 0) {
            endRace(false);
        }

        // Increase background speed every n seconds onclick
        if (
            millis() - lastSpeedIncreaseTime >= speedIncreaseInterval &&
            bgSpeed < maxBgSpeed
        ) {
            bgSpeed += 2;
            lastSpeedIncreaseTime = millis();
            console.log(lastSpeedIncreaseTime,"lastSpeedIncreaseTime");
            console.log(bgSpeed,"lastSpeedIncreaseTime");
        }


        // Calculate the maximum distance of the road based on the maxDistance variable
        let maxRoadDistance = maxDistance;
        let middleOfRoad = halfMaxDistance;

        // Calculate the distance covered by carGood
        let carGoodDistance = maxDistance - (carGood.position.y * maxDistance) / height;

        // Calculate the difference between the distance covered by carGood and the maximum distance
        // let distanceDifference = carGoodDistance - maxDistance;


        // Display the maximum road distance, carGood distance, and distance difference on the canvas
        fill(255);
        textSize(20);
        textAlign(LEFT);
        text("Max Road Distance: " + maxRoadDistance.toFixed() + "m", 20, 30);
        // text("CarGood Distance: " + carGoodDistance.toFixed(2) + "m", 20, 60);
        text(" carGood ,position at: " + carGood.position.y.toFixed() + "m", 20, 60);
        // text("Distance Difference: " + distanceDifference.toFixed(2) + "m", 20, 90);
        text("middle of road: " + middleOfRoad.toFixed() + "m", 20, 90);
        // console.log(carGood.position.y, "carGood.position.y.toFixed(2");
    }
}


function endRace(won) {
    gameStarted = false;

    let modal = createDiv("");
    modal.id("modal");

    let resultText;
    if (won) {
        resultText = "Felicitări! Ai câștigat!";
    } else {
        resultText = "Ai pierdut!";
    }

    let distanceText = "Distanta parcursa: " + carGood.position.y.toFixed() + "m";
    let timeText = "Timp scurs: " + (millis() - startTime) / 1000 + "s";

    let text = createP(resultText + "\n" + distanceText + "\n" + timeText);
    modal.child(text);

    let restartButton = createButton("Restart Game");
    restartButton.mousePressed(function () {
        location.reload(); // Reload the page to restart the game
    });
    modal.child(restartButton);
}

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
        carGoodSpeed += 0.1;
        car2Speed += 0.1 * random(0.6, 0.8);
        car1Speed += 0.1 * random(0.6, 0.8);
    }
}

function startGameModal() {
    let modal = createDiv("");
    modal.id("modal");

    let text = createP("Apasă butonul pentru a începe jocul!");
    let startButton = createButton("Start Game");
    startButton.mousePressed(startCountdown);
    modal.child(text);
    modal.child(startButton);
}

function startCountdown() {
    let modal = select("#modal");
    modal.style("display", "none");

    countdownText = createP("3");
    countdownText.class("countdown-text");
    countdownText.position(width / 2, height / 2);

    countdownInterval = setInterval(function () {
        countdown--;

        if (countdown === 0) {
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

function draw() {
    let normalizedPosition = roadPosition % height;
    if (normalizedPosition > 0) {
        normalizedPosition -= height;
    }

    image(backgroundImg, 0, normalizedPosition, width, height);
    image(backgroundImg, 0, normalizedPosition + height, width, height);
 // Check if carGood reached half of maxDistance

    update();
}





// backgroundImg: Stores the image for the game background.
// roadPosition: Represents the vertical position of the road background image.
// car1Speed, car2Speed, carGoodSpeed: Store the speeds of the cars.
// gameStarted: Indicates whether the game has started or not.
// countdown: Stores the current countdown value.
// countdownInterval: Stores the interval ID for the countdown.
// carDistance: Represents the initial distance between the cars.
// bgSpeed: Stores the current speed of the background scrolling.
// isRoadMoving: Indicates whether the road is moving or not.
// maxBgSpeed: Represents the maximum speed of the background scrolling.
// lastSpeedIncreaseTime: Stores the timestamp of the last speed increase.
// speedIncreaseInterval: Specifies the interval for increasing the background speed.
// maxDistance: Represents the maximum racing distance in meters.
// halfMaxDistance: Stores half of the maximum racing distance.
// raceTime: Specifies the time in seconds to reach the finish line.
// startTime: Stores the start time of the race.
// endTime: Stores the end time of the race.
// Functions:

// preload(): Preloads the background image.
// startRace(): Starts the race by setting the speeds for the cars and storing the start time.
// update(): Updates the positions of the cars and the background. It also handles conditions for reaching the middle of the race and ending the race.
// endRace(won): Ends the race by displaying a modal with the result (won or lost), distance traveled, and time taken. Provides a button to restart the game.
// mousePressed(): Handles mouse press events. If the game hasn't started, it checks if the start button was clicked. If the game has started, it increases the speed of the cars and the background.
// startGameModal(): Displays a modal at the beginning of the game with a start button.
// startCountdown(): Starts the countdown before the race begins. After the countdown, the race is started.
// draw(): The draw() function is a special function in p5.js that is called continuously. It draws the background, updates the game, and handles the scrolling of the road.
// Please note that there may be some dependencies and code that is not provided, such as CSS styles or HTML structure. This code snippet assumes that the necessary p5.js library is already included in the HTML file.