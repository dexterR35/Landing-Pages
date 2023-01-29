function retriveData() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let codeText = this.responseText;
      console.log(codeText, "cod Brut");
      if (codeText.match(/A250/gi) || codeText.match(/A350/gi)) {
        console.log(codeText, "1");
        console.log(gamesCode);
        largeCode = codeText;
        gamesCode = _games[0];
      } else if (codeText.match(/B250/gi) || codeText.match(/B350/gi)) {
        console.log(codeText, "1");
        largeCode = codeText;
        gamesCode = _games[1];
        console.log(gamesCode);
      } else if (codeText.match(/C250/gi) || codeText.match(/C350/gi)) {
        console.log(codeText, "1");
        largeCode = codeText;
        gamesCode = _games[2];
        console.log(gamesCode);
      } else if (codeText.match(/D250/gi) || codeText.match(/D350/gi)) {
        console.log(codeText, "1");
        largeCode = codeText;
        gamesCode = _games[3];
        console.log(gamesCode);
      } else if (codeText.match(/E250/gi) || codeText.match(/E350/gi)) {

        largeCode = codeText;
        gamesCode = _games[4];
        console.log(gamesCode);
        console.log(codeText, "1");
      } else {
        console.log(" Error no mached");
      }
    }
    // if (codeText[1] <= 2) {
    //   console.log(codeText, "egal cu 250")
    // } else if (codeText[1] >= 3) {
    //   console.log(codeText, "egal cu 350")
    // }

    // let codeBonusString = codeText.substring(1, 4);
    // let codeBonusUpper = codeText;
    //  largeCode = codeText; 
  }

  request.open('GET', 'https://casino-promo.netbet.ro/scripts/api/space/getcode.php');
  request.send();
};


const doors = [];
const inputs = [];
const comets = [];
const instruction = [];
// let user_email;
// let user_name;
// let user_codeSmart;
// let user_phone;

// let text_one = "Esti sigur ca vrei sa primesti premiul din spatele acestei usi <br/> sau"
// let text_two = "eu pot sa elimin una dintre cele 3 usi"
// let text_tree = "si astefel sa faci o alta alegere intre cele 2 usi ramase cu promisiunea ca ambele ascund un premiu"
let _games = ["A-Gonzo", "B-Bonza", "C-Shining Crown", "D-loto69", "E-Slots"];
let totalDoors = 3;
let totalInputs = 5;
let fallingStars = 6;
let totalInstr = 3;
let state = 'PICK';
let pickedDoor;
let timeoutId;
let gamesCode;
let smallCode = "GOL";
let largeCode = "";
let delay1s = 1000;
let delay1_5s = 1500;
let delay2s = 2000;
let delay2_5s = 2500;
let clickSound;

// function preload() {
//   clickSound = loadSound("./test.mp3");

// }

function startGame() {
  for (const door of doors) {
    select('.light_door', door).style("visibility", "hidden");
  }

  state = '!PICK';

  select('#doors').addClass("doorNon-Active");
  select('.start_game').show();
  select('button#start_game').mousePressed(function () {
    resetDoor();
  });

  select('#instruction > p').html('bine ai venit la...');
  select('#instruction > .choices').hide();
  select('#instruction > .p_continue').hide();
  select('#instruction > #play-again').hide();
}

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

    door.show();
    door.prize = smallCode;
    door.revealed = false;
    select('.letter-door', door).html(doorsIndex);
    select('.letter-door', door).removeClass("open");
    select('.letter-door', door).removeClass("pause");
    select('.letter-door', door).removeClass("revealed");
    select('.letter-door', door).removeClass("rev_open");
    select('.light_door', door).style("visibility", "visible");
    door.removeClass('revealed');
    // door.removeClass('revealedNone');
    door.removeClass('picked');
    door.removeClass('won');
    door.removeClass('lose');
    door.removeClass('open');
    door.removeClass("rev_open");
    select('.content', door).html("");
    select('#instr_text').show();
  }
  // select('#doors').style("display","flex");
  select('#doors').removeClass("doorNon-Active");
  select('.start_game').hide();
  select('button#play-again').hide()
  const winner = random(doors);
  winner.prize = largeCode;

  state = 'PICK';

  select('#instruction > p').html('Alege o usă...!');

}

function checkWin(hasSwitched) {
  for (let door of doors) {
    codeString = largeCode.substring(1, 4) + " " + 'runde';
    door.prize = codeString;
    door.addClass('revealed');
    select('.letter-door', door).addClass("revealed");
    select('.content', door).html(door.prize);
  }

  select('.span_code_input').html(codeString + " " + 'gratuite');
  select('.span_game_input').html(gamesCode);
  select('.letter-door.open').addClass("rev_open");
  if (pickedDoor.prize === codeString) {
    pickedDoor.addClass('won');

    select('#instruction > p').html('Ai câstigat!');
    setTimeout(() => {
      select('#mask_modal').addClass('active');
    }, delay1_5s);
  } else {
    select('#instruction > p').html('Ai pierdut!');
    // select('#doors > .lose > .content').html(largeCode);
  }

  $(".input_n4").attr({
    disabled: "",
    placeholder: largeCode,
  });
  setTimeout(() => {
    select('#instruction > #play-again').show();
  }, delay1_5s);
}

function chooseDoor(hasSwitched = false) {
  select('#instruction > .choices').hide();

  if (hasSwitched) {
    const newPick = doors.find(
      (door) => !door.hasClass('revealed') && !door.hasClass('picked')
    );
    newPick.addClass('picked');
    pickedDoor.removeClass('picked');
    pickedDoor = newPick;
    // stayDoorsRev.addClass("rev_open");
  } else {
    // stayDoorsRev.addClass("rev_open");
  }
  const stayDoorsRev = doors.find(
    (door) => door.hasClass('open')
  );
  stayDoorsRev.addClass("rev_open");
  checkWin(hasSwitched);
}

function revealDoor() {
  select('#instruction > .p_continue').hide();
  select('#instruction > p').html('ti am deschis o usa');

  const options = doors.filter(
    (door, i) => i !== pickedDoor.index && door.prize !== largeCode
  );

  // right door!
  if (options.length === doors.length - 1) {
    console.log(options.length === doors.length - 1, "test")
    // Randomly remove 1
    options.splice(floor(random(options.length)), 1);
  }

  for (const revealedDoor of options) {
    revealedDoor.addClass('revealed');
    select('.content', revealedDoor).html(revealedDoor.prize);
  }

  const lastDoor = doors.find(
    (door) => !door.hasClass('revealed') && !door.hasClass('picked')
  );
  const stayDoorsRev = doors.find(
    (door) => !door.hasClass('revealed') && !door.hasClass('open')
  );

  select('.letter-door', stayDoorsRev).addClass("pause");
  lastDoorIndex = lastDoor.index + 1;
  if (lastDoorIndex === 1) {
    lastDoorIndex = "A"
  } else if (lastDoorIndex === 2) {
    lastDoorIndex = "B"
  } else if (lastDoorIndex === 3) {
    lastDoorIndex = "C"
  }
  retriveData();
  setTimeout(() => {
    select('#doors > .door-container.revealed').hide();
    select('#instruction > p').html(
      `Vrei sa schimbi cu usă #${lastDoorIndex}?`
    );
    select('#instruction > .choices').show();
  }, delay2s);

}

function pickDoor() {

  if (state !== 'PICK') return;
  state = 'REVEAL';

  pickedDoor = random(doors);
  pickedDoor = this;
  pickedDoor.addClass('picked open');
  select('.letter-door', pickedDoor).addClass("open");

  select('#instr_text').hide();

  select('#instruction > p').html('tu ai ales o usa <br/> eu pot elimina una dintre <br/> cele 2 usi ramase');
  select('#instruction > .p_continue').show();
  setTimeout(() => {

  }, delay1s);

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

    const shadow_div = createDiv();
    shadow_div.class('shadow' + " " + 'shadow_n_' + doors[i].index);
    shadow_div.parent(doors[i]);

  }

}

function makeInstruction() {
  for (let g = 0; g < totalInstr; g++) {
    instruction[g] = createDiv();
    instruction[g].parent("instr_text");
    instruction[g].index = g;
    instruction[g].class("instr-container" + " " + 'instr_n_' + g);
  }
  // select('#instr_text > .instr_n_0').html(text_one);
  // select('#instr_text > .instr_n_1').html(text_two);
  // select('#instr_text > .instr_n_2').html(text_tree);
}

function makeInput() {


  for (let j = 0; j < totalInputs; j++) {
    inputs[j] = createDiv();
    inputs[j].parent("#inputForm");
    inputs[j].index = j;
    inputs[j].class("input-box" + " " + 'box_n' + j);

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
        <input type="checkbox" id="privacy-check" name="privacy-check" class="input_check">
        <label for="privacy-check" class="privacy-text">${privacy_terms}</label>
        </div>
        <div class="privTwo">
        <input type="checkbox" id="marketing-check" name="marketing-check" class="input_check">
        <label for="marketing-check" class="privacy-text">${privacy_marketing}</label>
        </div>
       <button type="button" class="btnNew btn-primary btn_send disabled" disabled >Înregistrează-te</button>
    <div class="clear"></div>`);
  $("#inputForm").prepend(`<div class="BonusCodeText"> <span class="line-one">felicitări</span> <hr><span class="line-two"> ai câștigat <b><span class="span_code_input"> </span></b> <br/> la jocul <b><span class="span_game_input"></span></b></span></div>`);

  $(".input-input").attr({
    onfocus: "setFocus(true)",
    onblur: "setFocus(false)",
    required: "",
  });
  //  <a href="https://marianiordache.ro+${input_bonusCode}"><button type="button" class="btnNew btn-primary btn_send disabled" disabled>Înregistrează-te</button></a>
  $(".input_n0").attr({
    type: "email"
  });

  $(".input_n3").attr({
    type: "number"
  });

  $(".box_n4").addClass("error");

  $(".input_check").click(function () {
    let lenChecked = $(".input_check:checked").length;
    if (lenChecked >= 2) {
      $(".btn_send").removeAttr("disabled");
      $(".btn_send").removeClass("disabled");

    } else {
      $(".btn_send").addClass("disabled");
      $(".btn_send").prop("disabled", true);
    }
  });
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


$(".btn-showModal").on("click", function () {
  $(".mask").addClass("active");
});


function closeModal() {
  $(".mask").removeClass("active");
}


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
  makeDoors();
  setStars();
  makeInput();
  startGame();
  makeInstruction();
  select('button#yes').mousePressed(function () {
    chooseDoor(true);
  });
  select('button#no').mousePressed(function () {
    chooseDoor(false);
  });
  select('button#yes_continue').mousePressed(function () {
    revealDoor();
  });
  select('button#play-again').mousePressed(function () {
    setTimeout(() => {
      resetDoor();
    }, delay1s);
  });
}