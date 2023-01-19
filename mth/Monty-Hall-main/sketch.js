

const doors = [];

let totalDoors = 3;
let state = 'PICK';
let pickedDoor;
let timeoutId;
let smallCode = "250Runde"
let largeCode = "550Runde"

let stats = {
  totalSwitchPlays: 0,
  totalStayPlays: 0,
  totalSwitchWins: 0,
  totalStayWins: 0,
};
function clickDoors() {

  let doorsClick = document.querySelectorAll(".door-container");

doorsClick.forEach(function(doorS) {
  doorS.addEventListener("click", function(s) {
    // Code to open the door goes here
    // The 'this' keyword refers to the button that was clicked
    console.log("Opening door:", this);
 
  });

});
}


function clearStats() {
  stats = {
    totalSwitchPlays: 0,
    totalStayPlays: 0,
    totalSwitchWins: 0,
    totalStayWins: 0,
  };
  clearStorage();
}

function reset() {
  for (const door of doors) {
    door.prize = smallCode;
    door.revealed = false;
    select('.door', door).html(door.index + 1);
    door.removeClass('revealed');
    door.removeClass('revealedNone');
    door.removeClass('picked');
    door.removeClass('won');
    door.style("background-color:unset");
    select('.content', door).html("");
  }

  const winner = random(doors);
  winner.prize = largeCode;
  state = 'PICK';
  select('#instruction > p').html('Alege o usă!');
  select('#instruction > .choices').hide();
  select('#instruction > #play-again').hide();
}



function checkWin(hasSwitched) {
  for (const door of doors) {
    door.addClass('revealed');
    select('.content', door).html(door.prize);
  }
  setTimeout(() => {
  if (pickedDoor.prize === largeCode) {
    pickedDoor.addClass('won');
    if (hasSwitched) {
      stats.totalSwitchWins++;
    } else {
      stats.totalStayWins++;
    }
    select('#instruction > p').html('Ai câstigat!');
  } else {
    select('#instruction > p').html('Ai pierdut!');
  }

  select('#instruction > #play-again').show();
  storeItem('montey-hall-stats', stats);
}, 1000);
}

function chooseDoor(hasSwitched = false) {
  select('#instruction > .choices').hide();

  if (hasSwitched) {
    stats.totalSwitchPlays++;
    const newPick = doors.find(
      (door) => !door.hasClass('revealed') && !door.hasClass('picked')
    );
    newPick.addClass('picked');
    pickedDoor.removeClass('picked');
    pickedDoor = newPick;
  } else {
    stats.totalStayPlays++;
  }

  checkWin(hasSwitched);
  
}

function revealDoor() {
  const options = doors.filter(
    (door, i) => i !== pickedDoor.index && door.prize !== largeCode
  );
  setTimeout(() => {
  // The player got the right door!
  if (options.length === doors.length - 1) {
    // Randomly remove 1
    options.splice(floor(random(options.length)), 1);
  }


    for (const revealedDoor of options) {
      revealedDoor.addClass('revealed revealedNone');
      select('.content', revealedDoor).html(revealedDoor.prize);
    }
  }, 1000);

  setTimeout(() => {
  const lastDoor = doors.find(
    (door) => !door.hasClass('revealed') && !door.hasClass('picked')
  );
  select('#instruction > p').html(
    `Vrei sa schimbi cu usa nr #${lastDoor.index + 1}?`
  );
  let doorIndex = lastDoor.index + 1;

  lastDoor.addClass("switch" + doorIndex);
  console.log(doorIndex)
  // select('#instruction > p').addClass("tests");
  select('#instruction > .choices').show();
}, 1000);
}

function pickDoor() {

  if (state !== 'PICK') return;
  state = 'REVEAL';
  this.style("background-color","grey");
  // pickedDoor = random(doors);
  pickedDoor = this;
  pickedDoor.addClass('picked');
  revealDoor();

  
}

function makeDoors() {
  // clear array
  for (let door of doors) {
    door.remove();
  }
  doors.splice(0, doors.length);
  console.log(doors);

  for (let i = 0; i < totalDoors; i++) {
    doors[i] = createDiv();
    doors[i].parent('#doors');
    doors[i].class('door-container');
    if (totalDoors > 10) {
      doors[i].addClass('small');
    }
    clickDoors()
    doors[i].index = i;
    doors[i].mousePressed(pickDoor);

    const door = createDiv();
    door.class('door');
    door.parent(doors[i]);

    const content = createDiv();
    content.class('content');
    content.parent(doors[i]);
  }
}

function setup() {
  noCanvas();
  stats = getItem('montey-hall-stats') || stats;
  // updateStats();
  makeDoors();
  reset();

  select('button#yes').mousePressed(function () {
    chooseDoor(true);
  });

  select('button#no').mousePressed(function () {
    chooseDoor(false);
  });

  select('button#play-again').mousePressed(function () {
    setTimeout(() => {
    reset();
  }, 1000);
  });

}


