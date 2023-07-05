// let backgroundImg;
// let car1, car2, carGood;
// let roadPosition = 0;
// let bgSpeed = 2;
// let car1Speed = 0;
// let car2Speed = 0;
// let carGoodSpeed = 0;
// let gameStarted = false;
// let countdown = 3;
// let countdownInterval;
// let carDistance = 200; // Distance between the two cars
// let isRoadMoving = false;

// let lastSpeedIncreaseTime = 0;
// const speedIncreaseInterval = 700; // Increase speed every 2 seconds
// const maxBgSpeed = 60; // Maximum background speed

// function preload() {
//     backgroundImg = loadImage("./png/road.jpg");
//     // car1 = loadImage('./png/car.png');
//     // car2 = loadImage('./png/car.png');
//     // carGood = loadImage('./png/car.png');
// }

// function setup() {
//     createCanvas(1200, windowHeight);
//     const carWidth = 50; // Width of each car
//     const carHeight = 30; // Height of each car
//     const carSpacing = 50; // Distance between the cars

//     car1 = createSprite(width / 2 - carSpacing - carWidth / 2, height, carWidth, carHeight);
//     car1.shapeColor = color(255, 0, 0);

//     car2 = createSprite(width / 2 + carSpacing + carWidth / 2, height, carWidth, carHeight);
//     car2.shapeColor = color(0, 255, 0);

//     carGood = createSprite(width / 2, height, carWidth, carHeight);
//     carGood.shapeColor = color(0, 0, 255);

//     startGameModal();
// }

// function startGameModal() {
//     let modal = createDiv('');
//     modal.id('modal');

//     let text = createP('Apasă butonul pentru a începe jocul!');

//     let startButton = createButton('Start Game');
//     startButton.mousePressed(startCountdown);

//     modal.child(text);
//     modal.child(startButton);
// }

// function startCountdown() {
//     let modal = select('#modal');
//     modal.style('display', 'none');

//     countdownText = createP('3');
//     countdownText.class('countdown-text');
//     countdownText.position(width / 2, height / 2);

//     let countdown = 3;
//     let countdownInterval = setInterval(function () {
//       countdown--;

//       if (countdown === 0) {
//         clearInterval(countdownInterval);
//         countdownText.html('Go!');
//         setTimeout(function () {
//           countdownText.remove();
//           startRace();
//         }, 1000);
//       } else {
//         countdownText.html(countdown);
//       }
//     }, 1000);
//   }

// function startRace() {
//     gameStarted = true;
//     car1Speed = Math.random() * (0.3 - 0.2) + 0.2;
//     car2Speed = Math.random() * (0.3 - 0.2) + 0.2;
//     carGoodSpeed = Math.random() * (0.2 - 0.1) + 0.1;
// }

// function update() {
//     if (gameStarted) {
//         roadPosition -= bgSpeed;
//         car1.position.y -= car1Speed;
//         car2.position.y -= car2Speed;
//         carGood.position.y -= carGoodSpeed;

//         if (roadPosition <= -height) {
//             roadPosition = 0;
//         }

//         if (car1.position.y <= 0 || car2.position.y <= 0 || carGood.position.y <= 0) {
//             endRace();
//         }
//         // Increase background speed every 2 seconds
//          if (millis() - lastSpeedIncreaseTime >= speedIncreaseInterval && bgSpeed < maxBgSpeed) {
//         bgSpeed += 2;
//         lastSpeedIncreaseTime = millis();
//       }

//     }

//     image(backgroundImg, 0, roadPosition + height, width, height);

// }

// function endRace() {
//     gameStarted = false;

//     if (
//         carGood.position.y < car1.position.y &&
//         carGood.position.y < car2.position.y
//     ) {
//         let modal = createDiv('');
//         modal.id('modal');

//         let text = createP('Felicitări! Ai câștigat!');

//         let nextButton = createButton('Mergi mai departe');
//         nextButton.mousePressed(restartGame);

//         modal.child(text);
//         modal.child(nextButton);
//     } else {
//         let modal = createDiv('');
//         modal.id('modal');

//         let text = createP('Ai pierdut!');

//         let restartButton = createButton('Restart Game');
//         restartButton.mousePressed(restartGame);

//         modal.child(text);
//         modal.child(restartButton);
//     }
// }

// function restartGame() {
//     gameStarted = false;
//     countdown = 3;
//     roadPosition = 0;
//     car1Speed = 0;
//     car2Speed = 0;
//     carGoodSpeed = 0;
//     car1.position.y = height;
//     car2.position.y = height;
//     carGood.position.y = height;

//     let modal = select('#modal');
//     modal.remove();

//     startGameModal();
// }

// function mousePressed() {
//     if (!gameStarted) {
//         let modal = select('#modal');
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
//         car2Speed += 0.1 * (Math.random() * (0.8 - 0.6) + 0.6);
//         car1Speed += 0.1 * (Math.random() * (0.8 - 0.6) + 0.6);
//     }
// }

// function draw() {
//     // background(0);
//     // image(backgroundImg, 0, roadPosition, width, height);
//     // image(backgroundImg, 0, roadPosition - height, width, height);

//   // Update road position based on speed

//   // Calculate the normalized position of the road image
//   let normalizedPosition = roadPosition % height;
//   if (normalizedPosition > 0) {
//     normalizedPosition -= height;
//   }

//   // Draw the background image twice for smooth looping
//   image(backgroundImg, 0, normalizedPosition, width, height);
//   image(backgroundImg, 0, normalizedPosition + height, width, height);
//     update();
// }
let backgroundImg;
let car1, car2, carGood;
let roadPosition = 0;
let bgSpeed = 2;
let car1Speed = 0;
let car2Speed = 0;
let carGoodSpeed = 0;
let gameStarted = false;
let countdown = 3;
let countdownInterval;
let carDistance = 200; // Distance between the two cars
let isRoadMoving = false;

let lastSpeedIncreaseTime = 0;
const speedIncreaseInterval = 2000; // Increase speed every 2 seconds
const maxBgSpeed = 60; // Maximum background speed

function preload() {
  backgroundImg = loadImage("./png/road.jpg");
}

function setup() {
  createCanvas(1200, windowHeight);
  const carWidth = 50; // Width of each car
  const carHeight = 30; // Height of each car
  const carSpacing = 50; // Distance between the cars

  car1 = createSprite(
    width / 2.5 - carSpacing - carWidth / 2,
    height,
    carWidth,
    carHeight
  );
  car1.addImage(loadImage("./png/car1.png"));

  car2 = createSprite(
    width / 1.5 + carSpacing + carWidth / 2,
    height,
    carWidth,
    carHeight
  );
  car2.addImage(loadImage("./png/car2.png"));

  carGood = createSprite(width / 2, height, carWidth, carHeight);
  carGood.addImage(loadImage("./png/car.png"));

  startGameModal();
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

function startRace() {
  gameStarted = true;
  car1Speed = random(0.2, 0.3);
  car2Speed = random(0.3, 0.4);
  carGoodSpeed = random(0.1, 0.2);
}

function update() {
  if (gameStarted) {
    roadPosition += bgSpeed;
    car1.position.y -= car1Speed;
    car2.position.y -= car2Speed;
    carGood.position.y -= carGoodSpeed;

    if (roadPosition <= -height) {
      roadPosition = 0;
    }

    if (carGood.position.y <= 0) {
      endRace(true);
    } else if (car1.position.y <= height / 2 && car2.position.y <= height / 2) {
      carGoodSpeed += 0.02; // Adjust the speed increment as per your requirement
    } else if (car1.position.y <= 0 || car2.position.y <= 0) {
      endRace(false);
    }

    // Increase background speed every 2 seconds
    if (
      millis() - lastSpeedIncreaseTime >= speedIncreaseInterval &&
      bgSpeed < maxBgSpeed
    ) {
      bgSpeed += 2;
      lastSpeedIncreaseTime = millis();
    }
  }

  image(backgroundImg, 0, roadPosition + height, width, height);
}

function endRace(won) {
  gameStarted = false;

  let modal = createDiv("");
  modal.id("modal");

  let text;
  if (won) {
    text = createP("Felicitări! Ai câștigat!");
  } else {
    text = createP("Ai pierdut!");
  }

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

function draw() {
  let normalizedPosition = roadPosition % height;
  if (normalizedPosition > 0) {
    normalizedPosition -= height;
  }

  image(backgroundImg, 0, normalizedPosition, width, height);
  image(backgroundImg, 0, normalizedPosition + height, width, height);

  update();
}