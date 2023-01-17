const doors = [];

let totalDoors = 3;

let state = 'PICK';
let pickedDoor;

let timeoutId;

let stats = {
  totalSwitchPlays: 0,
  totalStayPlays: 0,
  totalSwitchWins: 0,
  totalStayWins: 0,
};



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
    door.prize = '🐐';
    door.revealed = false;
    select('.door', door).html(door.index + 1);
    door.removeClass('revealed');
    door.removeClass('revealedNone');
    door.removeClass('picked');
    door.removeClass('won');
  }

  const winner = random(doors);
  winner.prize = '🚂';

  state = 'PICK';
  select('#instruction > p').html('Pick a Door!');
  select('#instruction > .choices').hide();
  select('#instruction > #play-again').hide();

}



function checkWin(hasSwitched) {
  for (const door of doors) {
    door.addClass('revealed');
    select('.content', door).html(door.prize);
  }

  if (pickedDoor.prize === '🚂') {
    pickedDoor.addClass('won');
    if (hasSwitched) {
      stats.totalSwitchWins++;
    } else {
      stats.totalStayWins++;
    }
    select('#instruction > p').html('You win!');
  } else {
    select('#instruction > p').html('You lose!');
  }

  select('#instruction > #play-again').show();

  storeItem('montey-hall-stats', stats);
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
    (door, i) => i !== pickedDoor.index && door.prize !== '🚂'
  );

  // The player got the right door!
  if (options.length === doors.length - 1) {
    // Randomly remove 1
    options.splice(floor(random(options.length)), 1);
  }

  for (const revealedDoor of options) {
    revealedDoor.addClass('revealed revealedNone');
    select('.content', revealedDoor).html(revealedDoor.prize);
  }

  const lastDoor = doors.find(
    (door) => !door.hasClass('revealed') && !door.hasClass('picked')
  );
  select('#instruction > p').html(
    `Do you want to switch to door #${lastDoor.index + 1}?`
  );
  select('#instruction > .choices').show();

}

function pickDoor() {
  if (state !== 'PICK') return;
  state = 'REVEAL';
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
    reset();
  });

}