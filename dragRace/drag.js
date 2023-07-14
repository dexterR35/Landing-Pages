let backgroundImg;
//cars
let car1, car2, carGood, startLine;
let carDistance;
let startPosition;
let carScale;
let roadPosition = 0;
let car1Speed = 0;
let car2Speed = 0;
let carGoodSpeed = 0;
//start game
let gameStarted = false;
//count
let countdown = 3;
let countdownInterval;
//bg speed
let bgSpeed = 3;
let isRoadMoving = false;
let maxBgSpeed;
//last speed for bg increment
let lastSpeedIncreaseTime = 0;
const speedIncreaseInterval = 80; // Increase speed every 500 milisecons
//max distance meters
let maxDistance = 600;
let halfMaxDistance = maxDistance / 2;
//race time
const raceTime = 10; // Time to reach the finish line (in seconds)
let startTime; // To store the start time
let endTime; // To store the end time
let maxTime; //max time for loop
//Pause
let alerted = false; // Flag to track if alert has been shown
let alertedSecond = false; // Flag to track if alert has been shown
let isGamePaused = false; // Variable to track if the game is paused
// speed before continue
let bgSpeedBefore;
let c1SpeedBefore;
let c2SpeedBefore;
let cgSpeedBefore;

let closestCar,
    distanceRemainingFull,
    distanceRemainingCar1Full,
    distanceRemainingCar2Full;
//modal
let modal;
let modalText;
let modalButton;

let linePosition, linePositionFinish
const duration = 2000;


// Preload bg Img
function preload() {
    backgroundImg = loadImage("./png/road_large.jpg");
    backgroundImgMobile = loadImage("./png/roadMobile.jpg");
}

// Setup the canvas and StartPosition For Cars and Preload

function setup() {
    const container = document.getElementById("container");
    const canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent(container);

    let carSpacing = 50; // Distance between the cars

    switch (true) {
        case (windowWidth >= 1900):
            console.log(windowWidth, "windowWidth >= 1500");
            startPosition = height - 190;
            carSpacing = 0;
            carScale = 0.75;
            linePosition = startPosition - 310;
            linePositionFinish = startPosition - 3000;
            break;
        case (windowWidth <= 1500 && windowWidth > 1200):
            console.log(windowWidth, "windowWidth <= 1500");
            startPosition = height - 160;
            carSpacing = 0;
            carScale = 0.7;
            linePosition = startPosition - 240;
            linePositionFinish = startPosition - 3000;
            break;
        case (windowWidth <= 1200 && windowWidth > 768):
            console.log(windowWidth, "windowWidth <= 1200");
            startPosition = height - 140;
            carSpacing = 0;
            carScale = 0.6;
            linePosition = startPosition - 210;
            linePositionFinish = startPosition - 3000;
            break;
        case (windowWidth <= 768 && windowWidth >= 480):
            console.log(windowWidth, "windowWidth <= 768");
            startPosition = height - 110;
            carSpacing = 0;
            carScale = 0.4;
            linePosition = startPosition - 150;
            linePositionFinish = startPosition - 3000;
            break;
        case (windowWidth <= 480):
            console.log(windowWidth, "windowWidth <= 480");
            startPosition = height - 100;
            carSpacing = 20;
            carScale = 0.3;
            linePosition = startPosition - 110;
            linePositionFinish = startPosition - 3000;
            break;
        default:
            startPosition = height - 170;
            carSpacing = 0;
            carScale = 0.7;
            linePosition = startPosition - 250;
            linePositionFinish = startPosition - 3000;
            console.log("Default case position");
            break;
    }

    if (windowWidth <= 600) {
        startLine = createSprite(width / 2.2, linePosition);
        startLine.scale = windowWidth / 2000;
        finishLine = createSprite(width / 2.2, linePositionFinish);
        finishLine.scale = windowWidth / 2000;
        bgSpeed = 35;

    } else {
        startLine = createSprite(width / 2.13, linePosition);
        startLine.scale = windowWidth / 3000;
        finishLine = createSprite(width / 2.13, linePositionFinish);
        finishLine.scale = windowWidth / 3000;
        bgSpeed = 75;
    }
    
    startLine.addImage("startLine", loadImage("./png/roadStart.png"));
    finishLine.addImage("finishLine", loadImage("./png/roadSosire.png"));



    car1 = createSprite(width / 2.5 - carSpacing, startPosition);
    car1.addImage("car1", loadImage("./png/car1.png"));
    car1.scale = carScale;

    car2 = createSprite(width / 1.65 + carSpacing, startPosition);
    car2.addImage("car2", loadImage("./png/car2.png"));
    car2.scale = carScale;

    carGood = createSprite(width / 2, startPosition);
    carGood.addImage("carGood", loadImage("./png/car.png"));
    carGood.scale = carScale;

    createModal();
    startGameModal();

    console.log(height, "height");
}

function createModal() {
    // createCanvas(400, 400);
    modal = createDiv("");
    modal.id("modal");
    modalText = createP("");
    modalButton = createButton("");
    // modalButton.mousePressed(startCountdown);
    modal.child(modalText);
    modal.child(modalButton);
}

function startGameModal() {
    const text =
    `Felicitări, ai fost un copilot excelent și ai câștigat cursa!` +
    "<br />" +
    `Înregistrează-te pe NetBet Sport și profită de ofertă:` +
   "<br />" +
    `Primești 100 RON Freebet la primul tău pariu pierdut`;
    const buttonStart = "Start Game";
    openModal(text, buttonStart, startCountdown);
}

function continueModal() {
    if (!alerted) {
        alerted = true;
        const text = `Sunt primul pilot din Europa care concurează cu o Tesla Model 3 Performance în competițiile de viteză în coastă.`;
        const buttonContinue = "Continue";
        openModal(text, buttonContinue, continueGame);
    }
}

function continueSecondModal() {
    if (!alertedSecond) {
        alertedSecond = true;
        const text = `.Sunt campion la categoria electrice în 2022 la Campionatul Național de Viteză în Coastă.`;
        const buttonContinue = "Continue";
        openModal(text, buttonContinue, continueGame);
    }
}

// Set the modal content
function openModal(text, buttonLabel, buttonAction, link) {
    modalText.html(text);
    modalButton.html(buttonLabel);
    modalButton.mousePressed(buttonAction);
    modal.style("display", "flex");
}
// continue CountDown

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
    car1Speed = random(0.2, 0.4);
    car2Speed = random(0.2, 0.4);
    // carGoodSpeed = 2;
    carGoodSpeed = random(0.1, 0.2);
    // carGoodSpeed = 1;
    startTime = millis().toFixed(); // Store the current time as the start time
    console.log(carGoodSpeed, "carGoodSpeed");
}

function update() {
    if (gameStarted) {
        closestCar = Math.max(
            distanceRemainingFull.toFixed(),
            distanceRemainingCar1Full.toFixed(),
            distanceRemainingCar2Full.toFixed()
        );
        // console.log(closestCar, "cc")
        // console.log(closestCar,"closestCar");

        if (roadPosition <= -maxDistance) {
            roadPosition = 0;
        } else if (
            millis() - lastSpeedIncreaseTime >= speedIncreaseInterval &&
            bgSpeed < maxBgSpeed
        ) {
            bgSpeed += 1;
            // console.log(bgSpeed,"bg from start")
            lastSpeedIncreaseTime = millis();
        }
        // if (halfMaxDistance - closestCar >= 0) {
        //     middleLine.position.y = height / 2 - (halfMaxDistance - closestCar) * (bgSpeed);
        //     // console.log(middleLine.position.y, "test");
        //     // console.log(middleLine.position.y,"testtt")
        // }
        if (maxDistance - closestCar >= 0) {
            finishLine.position.y = height / 2 - (maxDistance - closestCar) * 10;
        }

        if (
            car1.position.y <= startPosition - (halfMaxDistance - 120) ||
            car2.position.y <= startPosition - (halfMaxDistance - 120) ||
            carGood.position.y <= startPosition - (halfMaxDistance - 120)
        ) {
            bgSpeedBefore = bgSpeed;
            c1SpeedBefore = car1Speed;
            c2SpeedBefore = car2Speed;
            cgSpeedBefore = carGoodSpeed;
            if (!alerted) {
                bgSpeed = 0;
                car1Speed = 0;
                car2Speed = 0;
                carGoodSpeed = 0;
                gameStarted = false;
                continueModal();
            }
        }
        if (
            car1.position.y <= startPosition - (halfMaxDistance + 100) ||
            car2.position.y <= startPosition - (halfMaxDistance + 100) ||
            carGood.position.y <= startPosition - (halfMaxDistance + 100)
        ) {
            bgSpeedBefore = bgSpeed;
            c1SpeedBefore = car1Speed;
            c2SpeedBefore = car2Speed;
            cgSpeedBefore = carGoodSpeed;
            if (!alertedSecond) {
                bgSpeed = 0;
                car1Speed = 0;
                car2Speed = 0;
                carGoodSpeed = 0;
                gameStarted = false;
                continueSecondModal();
            }
        }


        if (startPosition - car1.position.y > 170 || startPosition - car2.position.y > 170) {
            carGoodSpeed += 0.0015;
            console.log("1", carGoodSpeed);
        }

        if (windowWidth >= 1200) {
            if (carGood.position.y <= startPosition - (maxDistance - 50)) {
                endRace(true); // carGood won the race
            }
        } else {
            if (carGood.position.y <= startPosition - maxDistance) {
                endRace(true); // carGood won the race
            }
        }
    }

}

function continueGame() {
    // alerted = false;

    gameStarted = true;
    bgSpeed = bgSpeedBefore;
    car1Speed = c1SpeedBefore;
    car2Speed = c2SpeedBefore;
    carGoodSpeed = cgSpeedBefore;


    modal.style("display", "none");
}
// End Race win and text
function endRace(won) {
    gameStarted = false;
    let resultText;
    if (won) {
        resultText =
            "Felicitări, ai fost un copilot excelent și ai câștigat cursa!";
        // finishLine.y = height-maxDistance-150;
    } else {
        resultText = "You lost!";
    }
    const text = resultText;
    
    const buttonLabel = "Inregistreaza-te";
    openModal(text, buttonLabel, redirectBtn);
}

// redirect
function redirectBtn() {
    const link = "{/literal}{$link}&bonuscode=dominic{literal}"; // Replace "{$link}" with the actual link you want to use
    // const buttonText = "Redirect"; // Replace "Redirect" with the desired button text
    // const buttonElement = document.createElement("a");
    // buttonElement.href = link;
    // buttonElement.textContent = buttonText;
    // document.body.appendChild(buttonElement);
    window.location.href = link;
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
        increaseSpeed();
        if (
            (car1.position.y <= height / 2 ||
                car2.position.y <= height / 2 ||
                car1.position.y <= height / 2) &&
            carGood.position.y >= (car1.position.y || car2.position.y)
        ) {
            carGoodSpeed += 0.1 * random(0.1, 0.15);
            // console.log("carGoodSpeed mijloc",carGoodSpeed);
        }
        // bgSpeedBefore = bgSpeed;
    }
}


function increaseSpeed() {
    let car1vsGood = startPosition - car1.position.y;
    let car2vsGood = startPosition - car2.position.y;
    if (car1vsGood > 100 || car2vsGood > 100) {
        carGoodSpeed += 0.0030;
        // console.log("1", car2vsGood);
    } else {
        // console.log(carGoodSpeed, "nu");
        carGoodSpeed += 0.0025;
        car1Speed += 0.0055;
        car2Speed += 0.0055;

    }
}



function renderTextElements() {
    // km/h
    distanceRemainingFull = startPosition - carGood.position.y - 0;
    let kilometersCarGood = distanceRemainingFull / 2;
    distanceRemainingCar1Full = startPosition - car1.position.y - 0;
    let kilometersCar1 = distanceRemainingCar1Full / 2;
    distanceRemainingCar2Full = startPosition - car2.position.y - 0;
    let kilometersCar2 = distanceRemainingCar2Full / 2;
    distanceTraveled = startPosition - carGood.position.y;
    // text
    let textAlignM;
    var containerWidth = width; // Set the width of the container
    var containerHeight = 50; // Set the height of the container
    var containerX = width / 2 - containerWidth / 2; // Calculate the x-coordinate of the container
    var containerY = height - 50; // Set the y-coordinate of the container

    // Draw the container

    // rect(containerX, containerY, containerWidth, containerHeight);
    textAlign(CENTER);
    // fill(0); // Set the fill color to black
    // text("Apasa click pentru a creste viteza masinii", width / 2, height - 20);
    if (windowWidth <= 600) {
        textSize(14);
        textAlignM = 80;
    } else {
        textSize(19);
        textAlignM = 195;
    }
    //draw km
    fill(255);
    text(
        kilometersCarGood.toFixed() + "km/h",
        carGood.position.x,
        carGood.position.y + textAlignM
    );
    text(
        kilometersCar1.toFixed() + "km/h",
        car1.position.x - 10,
        car1.position.y + textAlignM
    );
    text(
        kilometersCar2.toFixed() + "km/h",
        car2.position.x + 10,
        car2.position.y + textAlignM
    );

}

//Draw the things
function draw() {
    renderTextElements();
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
    if (gameStarted) {
        roadPosition += bgSpeed;
        startLine.position.y += bgSpeed;
        // middleLine.position.y += bgSpeed;
        finishLine.position.y += bgSpeed;
        car1.position.y -= car1Speed;
        car2.position.y -= car2Speed;
        carGood.position.y -= carGoodSpeed;
    }
    update();
    renderTextElements();
}