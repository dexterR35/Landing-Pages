
let backgroundImg;
let car1, car2, car3;
let roadPosition = 0;
let bgSpeed = 1;
let car1Speed = 0;
let car2Speed = 0;
let car3Speed = 0;
let gameStarted = false;
let countdown = 3;
let countdownInterval;
let carDistance = 200; // Distance between the two cars
let isRoadMoving = false;

function preload() {
  backgroundImg = loadImage("./png/road.png");
//   car1 = loadImage('./png/car.png');
//   car2 = loadImage('./png/car.png');
//   car3 = loadImage('./png/car.png');
}

function setup() {
  createCanvas(800, 400);
//   createCanvas(windowWidth, windowHeight);
  car1 = createSprite(width, height / 2, 50, 30);
  car1.shapeColor = color(255, 0, 0);

  car2 = createSprite(width, height / 2 - 50, 50, 30);
  car2.shapeColor = color(0, 255, 0);

  car3 = createSprite(width, height / 2 + 50, 50, 30);
  car3.shapeColor = color(0, 0, 255);

//   car1 = createSprite(width / 2, height, 50, 30);
//   car1.shapeColor = color(255, 0, 0);

//   car2 = createSprite(width / 2 + 50, height, 50, 30);
//   car2.shapeColor = color(0, 255, 0);

//   car3 = createSprite(width / 2 - 50, height, 50, 30);
//   car3.shapeColor = color(0, 0, 255);

  startGameModal();
}

function startGameModal() {
  let modal = createDiv('');
  modal.id('modal');

  let text = createP('Apasă butonul pentru a începe jocul!');

  let startButton = createButton('Start Game');
  startButton.mousePressed(startCountdown);

  modal.child(text);
  modal.child(startButton);
}

function startCountdown() {
  let modal = select('#modal');
  modal.style('display', 'none');

  countdownInterval = setInterval(function () {
    countdown--;

    if (countdown === 0) {
      clearInterval(countdownInterval);
      startRace();
    }
  }, 1000);
}

function startRace() {
  gameStarted = true;
  car1Speed = 0.2;
  car2Speed = 0.3;
  car3Speed = 0.1;
}

function update() {
  if (gameStarted) {
    roadPosition -= bgSpeed;
    car1.position.x -= 0.2;
    car2.position.x -= 0.3;
    car3.position.x -= car3Speed;

    if (roadPosition <= -backgroundImg.width) {
      roadPosition = 0;
    }

    if (roadPosition >= width) {
      endRace();
    }
  }

  drawSprites();
}

function endRace() {
  gameStarted = false;

  if (car3.position.x < car1.position.x && car3.position.x < car2.position.x) {
    let modal = createDiv('');
    modal.id('modal');

    let text = createP('Felicitări! Ai câștigat!');

    let nextButton = createButton('Mergi mai departe');
    nextButton.mousePressed(restartGame);

    modal.child(text);
    modal.child(nextButton);
  } else {
    let modal = createDiv('');
    modal.id('modal');

    let text = createP('Ai pierdut!');

    let restartButton = createButton('Restart Game');
    restartButton.mousePressed(restartGame);

    modal.child(text);
    modal.child(restartButton);
  }
}

function restartGame() {
  gameStarted = false;
  countdown = 3;
  roadPosition = 0;
  car3Speed = 0;
  car1.position.x = width;
  car2.position.x = width;
  car3.position.x = width;

  let modal = select('#modal');
  modal.remove();

  startGameModal();
}

function mousePressed() {
  if (!gameStarted) {
    let modal = select('#modal');
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
    bgSpeed = min(bgSpeed + 5, 50);
    car3Speed += 0.1;
  }
}

function draw() {
  background(0);
  image(backgroundImg, roadPosition, 0, backgroundImg.width, height);
  image(backgroundImg, roadPosition + backgroundImg.width, 0, backgroundImg.width, height);
  update();
}


// function draw() {
    

//     if (windowWidth > windowHeight) {
//         // Large devices: Horizontal orientation
//         image(backgroundImg, 0, roadPosition, width, backgroundImg.height);
//         image(backgroundImg, 0, roadPosition + backgroundImg.height, width, backgroundImg.height);
//         // image(backgroundImg, roadPosition, 0, backgroundImg.width, height);
//         // image(backgroundImg, roadPosition + backgroundImg.width, 0, backgroundImg.width, height);
//       } else {
//         // Small devices: Vertical orientation
//         image(backgroundImg, 0, roadPosition, width, backgroundImg.height);
//         image(backgroundImg, 0, roadPosition + backgroundImg.height, width, backgroundImg.height);
//       }
//       update();
// }