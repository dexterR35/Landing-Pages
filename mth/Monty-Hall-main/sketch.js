const doors = [];
const inputs = [];
const comets = [];

// let user_email;
// let user_name;
// let user_codeSmart;
// let user_phone
let totalDoors = 3;
let totalInputs = 5;
let fallingStars = 3;
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

// function changeInputType(oldObject, oType) {
//   var newObject = document.createElement("input");
//   newObject.type = oType;
//   if (oldObject.size) newObject.size = oldObject.size;
//   if (oldObject.value) newObject.value = oldObject.value;
//   if (oldObject.name) newObject.name = oldObject.name;
//   if (oldObject.id) newObject.id = oldObject.id;
//   if (oldObject.className) newObject.className = oldObject.className;
//   oldObject.parentNode.replaceChild(newObject, oldObject);
//   return newObject;
// }


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
    select('.door', door).html("A");
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
  for (let j = 0; j < totalInputs; j++) {
    inputs[j] = createDiv();
    inputs[j].parent("#inputForm");
    inputs[j].class("input-box" + " " + 'box_n' + j);
    inputs[j].index = j;

    let make_input = createInput();
    make_input.class('input-input' + " " + 'input_n' + inputs[j].index);
    make_input.parent(inputs[j]);

  }


  input_name = "nume";
  input_email = "email";
  input_lastName = "prenume"
  input_phone = "telefon";
  input_bonusCode = "cod Bonus"

  privacy_terms = "Am citit și accept Termenii și Condițiile și Politica de Confidențialitate."
  privacy_marketing = "Sunt de acord să primesc comunicări de marketing din partea NetBet."


  $(".box_n0").prepend(`<label class="input-label">${input_email}</label>`);
  $(".box_n1").prepend(`<label class="input-label">${input_name}</label>`);
  $(".box_n2").prepend(`<label class="input-label">${input_lastName}</label>`);
  $(".box_n3").prepend(`<label class="input-label">${input_phone}</label>`);
  $(".box_n4").prepend(`<label class="input-label">${input_bonusCode}</label>`);

  $("#inputForm").append(`<div class="privOne">
        <input type="checkbox" id="privacy-check" name="privacy-check">
        <label for="privacy-check" class="privacy-text">${privacy_terms}</label>
        </div>
        <div class="privTwo">
        <input type="checkbox" id="marketing-check" name="marketing-check">
        <label for="marketing-check" class="privacy-text">${privacy_marketing}</label>
        </div>
        <button type="button" class="btnNew btn-primary btn_send pull-right">trimite</button>
    <div class="clear"></div>`);

  $(".input-input").attr({
    onfocus: "setFocus(true)",
    onblur: "setFocus(false)",
    required: "",
  });

  $(".input_n0").attr({
    type: "email"
  });

  $(".input_n3").attr({
    type: "number"
  });
  $(".box_n4").addClass("error");
  $(".input_n4").attr({
    disabled: "",placeholder:"runde"
  });

}

let number = c ;
let letter = String.fromCharCode(number);
console.log(letter); // Output: "A"
function setFocus(on) {
  var element = document.activeElement;
  if (on) {
    setTimeout(function () {
      element.parentNode.classList.add("focus");
    });
  } else {
    let box = document.querySelector(".input-box");
    box.classList.remove("focus");
    $("input").each(function () {
      var $input = $(this);
      var $parent = $input.closest(".input-box");
      if ($input.val()) $parent.addClass("focus");
      else $parent.removeClass("focus");
    });
  }
}


// Click function for show the Modal

$(".btn-showModal").on("click", function(){
  $(".mask").addClass("active");
});

// Function for close the Modal

function closeModal(){
  $(".mask").removeClass("active");
}

// Call the closeModal function on the clicks/keyboard

$(".close-modal, .mask").on("click", function(){
  closeModal();
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});

function setStars(){
  for (let k = 0; k < fallingStars; k++) {
    comets[k] = createDiv();
    comets[k].parent("#comets");
    comets[k].class("cometsFall");
    comets[k].index = k;
  }


}

function setup() {
  noCanvas();
  stats = getItem('montey-hall-stats') || stats;
  // updateStats();
  makeDoors();
  makeInput();
  resetDoor();
  setStars();

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

console.log(inputs, "inputs")