const doors = [];
const inputs = [];

let user_email;
let user_name;
let user_codeSmart;
let user_phone
let totalDoors = 3;
let totalInputs = 5;
let state = 'PICK';
let pickedDoor;
let timeoutId;
let smallCode = "250 runde"
let largeCode = "350 runde"

let stats = {
  totalSwitchPlays: 0,
  totalStayPlays: 0,
  totalSwitchWins: 0,
  totalStayWins: 0,
};


// var xhrObject = new XMLHttpRequest();
// console.log(xhrObject, "test")
// xhrObject.onreadystatechange = function () {
//   if (xhrObject.readyState === 4) {
//     if (xhrObject.status === 200 || xhrObject.status === 304) {
//       // Success! Do stuff with data.
//       // console.log(xhrObject.responseText); 
//       // let dataCode = xhrObject.responseText
//       // console.log(dataCode,"dataCode")
//       let dataCode = xhrObject.responseText
//       console.log(dataCode, "dataCode")
//     }
//   }

// };

// xhrObject.open(
//   "GET",
//   "https://casino-promo.netbet.ro/scripts/api/space/getcode.php",
//   true
// );
// xhrObject.send();




// function clickDoors() {

//   let doorsClick = document.querySelectorAll(".door-container");

// doorsClick.forEach(function(doorS) {
//   doorS.addEventListener("click", function(s) {
//     // Code to open the door goes here
//     // The 'this' keyword refers to the button that was clicked
//     console.log("Opening door:", this);

//   });

// });
// }

function clearStats() {
  stats = {
    totalSwitchPlays: 0,
    totalStayPlays: 0,
    totalSwitchWins: 0,
    totalStayWins: 0,
  };
  clearStorage();
}

function resetDoor() {
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
      select('#instruction > p').html('Ai pierdutt!');
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
  this.style("background-color", "grey");
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
    // let div1 = createDiv('this is the child');
    doors[i] = createDiv();
    doors[i].parent('#doors');
    doors[i].class('door-container');
    // if (totalDoors > 10) {
    //   doors[i].addClass('small');
    // }
    // clickDoors();
    doors[i].index = i;
    doors[i].mousePressed(pickDoor);

    const door = createDiv();
    door.class('door');
    door.parent(doors[i]);



    const light = createDiv();
    light.class('light_door' + " " + 'light_n_door' + doors[i].index);
    light.parent(doors[i]);


    const bar_light = createDiv();
    bar_light.class('bar_light' + " " + 'bar_n_light' + doors[i].index);
    bar_light.parent(doors[i]);

    const content = createDiv();
    content.class('content');
    content.parent(doors[i]);
  }
}

function makeInput() {
  console.log(inputAttr,"input")
  for (let j = 0; j < totalInputs; j++) {
  inputs[j] = createDiv();
  inputs[j].parent("#inputForm");
  inputs[j].class("input-box");
  inputs[j].index = j;

  let make_input = createInput();
  
  make_input.class('input-label' + " " + 'input_n' + inputs[j].index);
  make_input.parent(inputs[j]);

    // inputFor.remove();

    // inputAttr.setAttribute("onfocus","setFocus(true)");
    // inputAttr.setAttribute("onBlur","setFocus(false)");
    // inputAttr.setAttribute('required', ''); 

  // var inputAttr = document.querySelectorAll(".input-label")[0];
  // console.log("inputAttr",inputAttr)
  // make_input.setAttribute("style", "background-color: blue;"); 
 
}
// in.addClass("class", "democlass");


var inputAttr = document.querySelectorAll(".input-label");

    // inputAttr.setAttribute("onfocus","setFocus(true)");
console.log(inputAttr,"input")
  



  // const createInput = createInput("type");
  // createInput.class("input-label");
  // createInput.parent("input-label");

  }


function setup() {
  noCanvas();
  stats = getItem('montey-hall-stats') || stats;
  // updateStats();
  makeDoors();
  makeInput();
  resetDoor();

  select('button#yes').mousePressed(function () {
    chooseDoor(true);
  });

  select('button#no').mousePressed(function () {
    chooseDoor(false);
  });

  select('button#play-again').mousePressed(function () {
    setTimeout(() => {
      resetDoor();
    }, 1000);
  });

}

console.log(inputs,"inputs")