const doors = [];
const inputs = [];
const comets = [];

// let user_email;
// let user_name;
// let user_codeSmart;
// let user_phone;



let totalDoors = 3;
let totalInputs = 5;
let fallingStars = 6;
let state = 'PICK';
let pickedDoor;
let timeoutId;
let smallCode = 200;
let largeCode = [];


let delay1s = 1000;
let delay1_5s = 1500;
let delay2s = 2000;
let delay2_5s = 2500;



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
// console.log(xhrObject)

// xhrObject.open(
//   "GET",
//   "https://casino-promo.netbet.ro/scripts/api/space/getcode.php",
//   true
// );
// xhrObject.send();
// xhrObject.onreadystatechange = function (test) {
//   if (xhrObject.readyState === 4) {
//     if (xhrObject.status === 200 || xhrObject.status === 304) {
//       // Success! Do stuff with data.
//       // console.log(xhrObject.responseText); 
//       // let dataCode = xhrObject.responseText
//       // console.log(dataCode,"dataCode")
//       let largeCode = xhrObject.responseText
//       console.log(largeCode, "dataCode")
//     }
//   }

//   console.log(xhrObject, "test")
// };

window.onload = function () {
  // console.log(request,"start")
  function retriveData() {
    let request = new XMLHttpRequest();
    // console.log(request,"new requerst status")
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        // console.log(this.responseText);
        // select('.content').html(this.responseText);
        let codeText = this.responseText;
        console.log(codeText, "codes");
        if (codeText.match(/A250/gi) || codeText.match(/A350/gi) || codeText.match(/B250/gi) || codeText.match(/B350/gi) || codeText.match(/C250/gi) ||
          codeText.match(/C350/gi) || codeText.match(/D250/gi) || codeText.match(/D350/gi) || codeText.match(/E250/gi) || codeText.match(/E350/gi)) {
          // console.log(codeText[1] == 2, "codess")
          if (codeText[1] <= 2) {
            console.log(codeText, "egal 250")
          } else if (codeText[1] >= 3) {
            console.log(codeText, "egal 350")
          }
          $(".input_n4").attr({
            disabled: "",
            placeholder: codeText,
          });

          let codeBonusString = codeText.substring(1, 4);
          largeCode = codeText.substring(1, 4) + " " + 'runde <br/> gratuite';
          console.log(codeBonusString);
          $("#inputForm").prepend(`<div class="BonusCodeText">felicitări ai câștigat <br/> <span style="visibility:hidden"> - </span> <b> ${codeBonusString} runde gratuite</b></div>`);
        } else {
          let match_a = "no matched";
          console.log(match_a, "no mached")
        }
      }
    };
    request.open('GET', 'https://casino-promo.netbet.ro/scripts/api/space/getcode.php');
    request.send();
  }
  retriveData();
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

function getLetter(num) {
  var letter = String.fromCharCode(num + 64);
  return letter;
}

console.log(getLetter(1));
console.log(getLetter(2));
console.log(getLetter(3));

function resetDoor() {

  for (const door of doors) {
    let doorsIndex = door.index + 1;

    if (doorsIndex === 1) {
      doorsIndex = "A"
    } else if (doorsIndex === 2) {
      doorsIndex = "B"
    } else if (doorsIndex === 3) {
      doorsIndex = "C"
    }
    // door.show();
    door.prize = smallCode;
    door.revealed = false;
    select('.letter-door', door).html(doorsIndex);
    select('.letter-door', door).removeClass("open");
    select('.letter-door', door).removeClass("pause");
    select('.letter-door', door).removeClass("revealed");
    door.removeClass('revealed');
    door.removeClass('revealedNone');
    door.removeClass('picked');
    door.removeClass('won');
    door.removeClass('lose');
    door.removeClass('open');
    door.removeClass('switch1');
    door.removeClass('switch2');
    door.removeClass('switch3');
    // door.style("background-color:unset");
    select('.content', door).html("");

  }
  // $(".door-container").removeClass("open switch1 switch2 switch3");
  // $(".door-container").removeClass("switch);

  const winner = random(doors);
  winner.prize = largeCode;

  state = 'PICK';
  select('#instruction > p').html('Alege o usă...!');
  select('#instruction > .choices').hide();
  select('#instruction > #play-again').hide();

}


function checkWin(hasSwitched) {

  for (const door of doors) {
    door.addClass('revealed');
    select('.letter-door',door).addClass("revealed");
    select('.content', door).html(door.prize);
  }


  if (pickedDoor.prize === largeCode) {
    pickedDoor.addClass('won');
    if (hasSwitched) {
      stats.totalSwitchWins++;
    } else {
      stats.totalStayWins++;
    }
    select('#instruction > p').html('Ai câstigat!');
    setTimeout(() => {
      select('#mask_modal').addClass('active');
    }, delay1_5s);
  } else {
    pickedDoor.addClass('lose');
    select('#instruction > p').html('Ai pierdut!');
    // select('#doors > .lose > .content').html(largeCode);
  }
  setTimeout(() => {
    select('#instruction > #play-again').show();
  }, delay1_5s);
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
    (door, i) => i !== pickedDoor.index && door.prize !== largeCode
  );
console.log(options,"options")
  // The player got the right door!
  if (options.length === doors.length - 1) {
    // Randomly remove 1
    options.splice(floor(random(options.length)), 1);
  }


  for (const revealedDoor of options) {
    revealedDoor.addClass('revealed');

    select('.content', revealedDoor).html(revealedDoor.prize);
    select('.letter-door',revealedDoor).addClass("revealed");
 
    // select('.letter-door',recentDoorRev).addClass("revealed");
    console.log(revealedDoor);
    console.log(revealedDoor.prize,"prize");
    
  }
 

  const lastDoor = doors.find(
    (door) => !door.hasClass('revealed') && !door.hasClass('picked')
  );
  // console.log(lastDoor, "lastDoor for pick");

  const recentDoorRev = doors.find(
    (door) => door.hasClass('revealed') && !door.hasClass('open') 
  );
  const stayDoorsRev = doors.find(
    (door) => !door.hasClass('revealed') && !door.hasClass('open') 
  );
  select('.letter-door',stayDoorsRev).addClass("pause");
  lastDoorIndex = lastDoor.index + 1;
  if (lastDoorIndex === 1) {
    lastDoorIndex = "A"
  } else if (lastDoorIndex === 2) {
    lastDoorIndex = "B"
  } else if (lastDoorIndex === 3) {
    lastDoorIndex = "C"
  }
 
 
  setTimeout(() => {
    select('#instruction > p').html(
      `Vrei sa schimbi cu usă #${lastDoorIndex}?`
    );
    // let doorIndex = lastDoor.index + 1;
    // lastDoor.addClass("switch" + doorIndex);
    // console.log(doorIndex, "door index");
    // console.log(recentDoorRev, "door revealed");
    // select('#instruction > p').addClass("tests");
    select('#instruction > .choices').show();
    // select('#doors > .door-container.revealed').hide();
  }, delay2s)
}

function pickDoor() {

  if (state !== 'PICK') return;
  state = 'REVEAL';
  // this.style("background-color", "grey");
  // this.addClass("test");
  pickedDoor = random(doors);
  pickedDoor = this;
  pickedDoor.addClass('picked open');
  select('.letter-door',pickedDoor).addClass("open");
  setTimeout(() => {
    
    select('#instruction > p').html('eu iți ofer această usă');
    // select('#doors > .door-container.open').html('ai ales aceasta usa');
    revealDoor();
  }, delay1s)

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
    doors[i].index = i;
    doors[i].mousePressed(pickDoor);

    const door = createDiv();
    door.class('door');
    door.parent(doors[i]);

    const letter_door = createDiv();
    letter_door.addClass('letter-door');
    letter_door.parent(doors[i]);

    const light = createDiv();
    light.class('light_door' + " " + 'light_n_door' + doors[i].index);
    light.parent(doors[i]);


    const bar_light = createDiv();
    bar_light.class('bar_light' + " " + 'bar_n_light' + doors[i].index);
    bar_light.parent(doors[i]);

    const content = createDiv();
    content.class('content');
    content.parent(doors[i]);


    // const shadow_div = createDiv();
    // shadow_div.class('shadow' + " " + 'shadow_n_' + doors[i].index);
    // shadow_div.parent(doors[i]);

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
        <button type="button" class="btnNew btn-primary btn_send pull-right">Înregistrează-te</button>
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

}



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

$(".btn-showModal").on("click", function () {
  $(".mask").addClass("active");
});

// Function for close the Modal

function closeModal() {
  $(".mask").removeClass("active");
}

// Call the closeModal function on the clicks/keyboard

$(".close-modal, .mask").on("click", function () {
  closeModal();
});

$(document).keyup(function (e) {
  if (e.keyCode == 27) {
    closeModal();
  }
});

function setStars() {
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
    }, delay1s);
  });
 
}

console.log(inputs, "inputs")