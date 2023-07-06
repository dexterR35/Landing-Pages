let roadImage;
let roadPosition = 0;
let roadSpeed = 5;
let car1Y = 0;
let car2Y = 0;
let car3Y = 0;
let carDistance = 200; // Distance between the two cars
let isRoadMoving = false;



function preload() {
  roadImage = loadImage('./png/road.png');
  car1 = loadImage('./png/car.png');
  car2 = loadImage('./png/car.png');
  car3 = loadImage('./png/car.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  car1Y = height / 2;
  car2Y = car1Y + carDistance;
  car3Y = car1Y + carDistance / 2;
}
function draw() {
   background(0);

  // Move the road if it's set to move
  if (isRoadMoving) {
    roadPosition += roadSpeed; // Change to plus sign (+) for reverse movement
  }

  // Wrap the road texture around when it goes offscreen
  if (roadPosition > roadImage.height) { // Change to greater than (>) for reverse movement
    roadPosition = 0;
  }

  // Draw the road
  image(roadImage, 0, roadPosition, width, height);
  image(roadImage, 0, roadPosition - roadImage.height, width, height); // Subtract roadImage.height for reverse movement

  // Draw the cars
  image(car1, width / 3 - carDistance / 3, height / 2.5, 150, 350);

  fill(0, 0, 255);
  image(car2,width / 2.5 + carDistance / 3, car2Y, 150, 350);
  image(car3, width / 2 + carDistance / 1, height / 2, 150, 350);



  
  }

function startRoad() {
  isRoadMoving = true;
}

function increaseSpeed() {
  roadSpeed += 5;
}
function slowspeed() {
    roadSpeed -= 5;
  }
document.getElementById('startButton').addEventListener('click', startRoad);
document.getElementById('speedButton').addEventListener('click', increaseSpeed);
document.getElementById('slowButton').addEventListener('click', slowspeed);
