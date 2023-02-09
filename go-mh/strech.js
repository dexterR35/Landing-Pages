function retriveData() {
  let request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let codeText = this.responseText;
      console.log(codeText, "cod Brut");
      if (codeText.match(/A250/gi) || codeText.match(/A350/gi)) {
        console.log(codeText, "A>");
        console.log(gamesCode);
        largeCode = codeText;
        gamesCode = _games[0];
      } else if (codeText.match(/B250/gi) || codeText.match(/B350/gi)) {
        console.log(codeText, "B>");
        largeCode = codeText;
        gamesCode = _games[1];
        console.log(gamesCode);
      } else if (codeText.match(/C250/gi) || codeText.match(/C350/gi)) {
        console.log(codeText, "C>");
        largeCode = codeText;
        gamesCode = _games[2];
        console.log(gamesCode);
      } else if (codeText.match(/D250/gi) || codeText.match(/D350/gi)) {
        console.log(codeText, "D>");
        largeCode = codeText;
        gamesCode = _games[3];
        console.log(gamesCode);
      } else if (codeText.match(/E250/gi) || codeText.match(/E350/gi)) {
        largeCode = codeText;
        gamesCode = _games[4];
        console.log(gamesCode);
        console.log(codeText, "E>");
      } else if (codeText.match(/F250/gi) || codeText.match(/F350/gi)) {
        largeCode = codeText;
        gamesCode = _games[5];
        console.log(gamesCode);
        console.log(codeText, "F>");
      } else {
        console.log("Error no mached");
      }
    }
  };
  request.open(
    "GET",
    "https://casino-promo.netbet.ro/scripts/api/space/getcode.php"
  );
  request.send();
}
let privacy_terms =
  "Am citit și accept Termenii și Condițiile și Politica de Confidențialitate.";
let privacy_marketing =
  "Sunt de acord să primesc comunicări de marketing din partea NetBet.";
//   function insertCode() {
// // Get the form elements
// var form_input = document.querySelector("#inputForm");
// var email_code = document.querySelector(".input_n0");
// var _code = document.querySelector(".input_n4");
// var submitButton = document.querySelector(".btn_send");

// // Listen for button click event
// submitButton.addEventListener("click", function(event) {
//   event.preventDefault();

//   // Create an object to hold the form data
//   var data = {
//     email: email_code.value,
//     name: _code.value
//   };

//   // Create an AJAX request
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", "https://casino-promo.netbet.ro/scripts/api/space/setcode.php", true);
//   xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//   xhr.send(JSON.stringify(data));

//   // Handle the response
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         console.log("Form submitted successfully");
//       } else {
//         console.error("There was a problem submitting the form");
//       }
//     }
//   };
// });
//   }
//   insertCode() ;
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
let _games = [
  "Book of Dead",
  "Big Bass Bonanza",
  "Rich Wilde and the Tome of Madness",
  "Legacy of Dead",
  "Crown of Fire",
  "John Hunter and the Book of Tut",
];

let totalDoors = 3;
let totalInputs = 5;
let fallingStars = 3;
// let totalInstr = 3;
let state = "PICK";
let pickedDoor;
let revealedDoor;
let timeoutId;
let gamesCode;

let smallCode = "GOL";
let largeCode = "";

let delay0_5s = 500;
let delay1s = 1000;
let delay1_5s = 1500;
let delay2s = 2000;
let delay2_5s = 2500;
let delay3s = 3000;
let delay3_5s = 3500;
let delay4s = 4000;
let delay4_5s = 4500;
let delay5s = 5000;
// let clickSound;

let first_text =
  '<div class="first_text_t1">Bun venit pe netbet!</div><br/><div class="second_text_t1">Te provoc să iei sute de <br/> runde gratuite</div>';
let second_text =
  '<div class="first_text_t2">UȘILE ASCUND RUNDE GRATUITE</div><br/><div class="second_text_t2">UNA DINTRE ELE ASCUNDE<br/>PREMIUL CEL MARE</div><br/>';
// let third_text = '<div class="first_text_t3">AI ALES UȘA#</div><br/><div class="second_text_t3">TE AJUT ȘI ELIMIN O UȘĂ <br/> NECÂȘTIGĂTOARE!</div><br/>'
let four_text =
  '<div class="first_text_t4">AM ELIMINAT UȘA <br/> NECÂȘTIGĂTOARE</div>';
// let five_text = '<div class="first_text_t5">POȚI SCHIMBA UȘA</div><br/><div class="second_text_t5">cu UȘA </div>'
// function preload() {
//   clickSound = loadSound("./test.mp3");
// }

function resizeWin() {
  if (window.matchMedia("(max-width:450px)").matches) {
    select("#instruction").style("position", "absolute");
  } else {
    select("#instruction").style("position", "absolute");
  }
}

function startInstruction() {
  setTimeout(() => {
    select("#instruction").style("visibility", "visible");
  }, delay0_5s);
}

function startGame() {
  for (const door of doors) {
    let doorsIndex = door.index + 1;
    if (doorsIndex === 1) {
      doorsIndex = "A";
    } else if (doorsIndex === 2) {
      doorsIndex = "B";
    } else if (doorsIndex === 3) {
      doorsIndex = "C";
    }
    door.style("cursor","default");
    select(".letter-door", door).html(doorsIndex);
    select(".light_door", door).style("visibility", "hidden");
    select(".letter-door", door).removeClass("light");
 
  }
  // showDialog();
  state = "!PICK";

  select("#doors").addClass("doorNon-Active");

  select(".start_game").show();

  select("button#start_game").mousePressed(function () {
    resetDoor();
  });

  select("#instruction > p").html(first_text);
  select("#instruction > .choices").hide();
  select("#instruction > .p_continue").hide();
  select("#instruction > #play-again").hide();
  select("#instruction > .select_door").hide();
  // select("button#yes_select").hide();
}

function resetDoor() {
  for (const door of doors) {
    let doorsIndex = door.index + 1;
    if (doorsIndex === 1) {
      doorsIndex = "A";
    } else if (doorsIndex === 2) {
      doorsIndex = "B";
    } else if (doorsIndex === 3) {
      doorsIndex = "C";
    }

    door.show();
    door.prize = smallCode;
    door.revealed = false;
    select(".letter-door", door).html(doorsIndex);
    select(".letter-door", door).addClass("light");
    select(".letter-door", door).removeClass("open");
    select(".letter-door", door).removeClass("pause");
    select(".letter-door", door).removeClass("revealed");
    select(".letter-door", door).removeClass("rev_open");
    select(".letter-door", door).removeClass("stayClose");
    select(".light_door", door).style("visibility", "visible");
  
    door.removeClass("revealed");
    // door.removeClass('revealedNone');
    door.removeClass("picked");
    door.removeClass("won");
    door.removeClass("lose");
    door.removeClass("open");
    door.removeClass("stayClose");
    door.removeClass("rev_open");
    select(".content", door).html("");
    // select('#instr_text').show();
  }
  // closeDialog();
  // select('#doors').style("display","flex");
  select("#doors").removeClass("doorNon-Active");

  select(".start_game").hide();

  // select("#instruction > #play-again").hide();

  // select("button#play-again").hide();

  const winner = random(doors);
  winner.prize = largeCode;

  select("#instruction > p").html(second_text);

  select("#instruction > .select_door").show();

  setTimeout(() => {
    // select('#instruction > p').html("alege o usâ");
  }, delay2s);
  // setTimeout(() => {
  //   select('#instruction').hide();
  // }, delay4_5s);
}

function pickDoor() {

  
  if (state !== "PICK") return;
  state = "REVEAL";

  pickedDoor = random(doors);
  pickedDoor = this;
  pickedDoor.addClass("picked open");

  const userPickDoor = doors.find((door) => door.hasClass("picked"));

  userPickDoorIndex = userPickDoor.index + 1;
  if (userPickDoorIndex === 1) {
    userPickDoorIndex = "A";
  } else if (userPickDoorIndex === 2) {
    userPickDoorIndex = "B";
  } else if (userPickDoorIndex === 3) {
    userPickDoorIndex = "C";
  }

  select(".letter-door", pickedDoor).addClass("open");

  let third_text = `<div class="first_text_t3">AI ALES UȘA "${userPickDoorIndex}"</div><br/><div class="second_text_t3">TE AJUT ȘI ELIMIN O UȘĂ <br/> NECÂȘTIGĂTOARE!</div><br/>`;
  // select('#instr_text').hide();
  select("#yes_select").hide();

  setTimeout(() => {
    select("#instruction > p").html(third_text);

    select("#instruction").style("display", "flex");

    select("#instruction > .p_continue").show();
  }, delay1s);
}

function checkWin(hasSwitched) {
  for (let door of doors) {
    codeString = `<span class="content-l1">${largeCode.substring(
        1,
        4
      )}</span><span class="content-l2">runde</span><span class="content-l3">gratuite</span>`;
    door.prize = codeString;
    door.addClass("revealed");

    select(".letter-door", door).addClass("revealed");

    select(".content", door).html(door.prize);
  }

  select(".span_code_input").html(codeString);

  select(".span_game_input").html(gamesCode);

  select(".letter-door.open").addClass("rev_open");

  if (pickedDoor.prize === codeString) {
    pickedDoor.addClass("won");

    select("#instruction > p").html("Ai câstigat!");

    setTimeout(() => {
      // showDialog();
      select("#mask_modal").addClass("active");

      // select(".above-fold").style("height", "100vh");
    }, delay1_5s);
  } else {
    select("#instruction > p").html("Ai pierdut!");

    // select('#doors > .lose > .content').html(codeString);
  }

  $(".input_n4").attr({
    disabled: "",
    placeholder: largeCode,
  });

  // setTimeout(() => {
  //   select("#instruction > #play-again").show();
  // }, delay1_5s);
}

function chooseDoor(hasSwitched = false) {
  select("#instruction > .choices").hide();

  if (hasSwitched) {
    const newPick = doors.find(
      (door) => !door.hasClass("revealed") && !door.hasClass("picked")
    );
    console.log("newPick", newPick)
    newPick.addClass("picked");
    pickedDoor.removeClass("picked");
    pickedDoor = newPick;
    // stayDoorsRev.addClass("rev_open");
  } else {
    // const newPick2= doors.find(
    //   (door) => door.hasClass("picked ") && door.hasClass("open")
    // );
    // // stayDoorsRev.addClass("rev_open");
    // newPick2.addClass("testt");
  }
  const stayDoorsRev = doors.find((door) => door.hasClass("open"));
  stayDoorsRev.addClass("rev_open");
  console.log("stayDoorsRev1", stayDoorsRev)

  checkWin(hasSwitched);
}

function revealDoor() {
  const options = doors.filter(
    (door, i) => i !== pickedDoor.index && door.prize !== largeCode
  );

  // right door!
  if (options.length === doors.length - 1) {
    // Randomly remove 1
    options.splice(floor(random(options.length)), 1);
  }

  for (const revealedDoor of options) {
    revealedDoor.addClass("revealed");
    select(".content", revealedDoor).html(revealedDoor.prize);
  }

  const lastDoor = doors.find(
    (door) => !door.hasClass("revealed") && !door.hasClass("picked")
  );

  lastDoor.addClass("stayClose");

  console.log("lastDoor", lastDoor);
  // const stayDoorsRev = doors.find(
  //   (door) => !door.hasClass("revealed") && !door.hasClass("open")
  // );
  // console.log("stayDoorsRev2",stayDoorsRev)
  const switchDoor = doors.find((door) => door.hasClass("picked"));

  console.log("switchDoor", switchDoor);

  select("#instruction > p").html(four_text);

  select(".letter-door", lastDoor).addClass("pause stayClose");
  // select(".letter-door", lastDoor).addClass("stayClose");

  lastDoorIndex = lastDoor.index + 1;
  switchDoorIndex = switchDoor.index + 1;

  if (lastDoorIndex === 1) {
    lastDoorIndex = "A";
  } else if (lastDoorIndex === 2) {
    lastDoorIndex = "B";
  } else if (lastDoorIndex === 3) {
    lastDoorIndex = "C";
  }

  if (switchDoorIndex === 1) {
    switchDoorIndex = "A";
  } else if (switchDoorIndex === 2) {
    switchDoorIndex = "B";
  } else if (switchDoorIndex === 3) {
    switchDoorIndex = "C";
  }

  let five_text = `<div class="first_text_t5">POȚI SCHIMBA UȘA "${switchDoorIndex}"</div><div class="second_text_t5">cu UȘA "${lastDoorIndex}"</div> <br/><div class="third_text_t5">vrei sa schimbi?</div>`;

  retriveData();

  setTimeout(() => {
    select("#doors > .door-container.revealed").hide();
  }, delay2s);

  select("#instruction > .p_continue").hide();

  select("#instruction > p").html(five_text);

  select("#instruction > .choices").style("display","flex");

  setTimeout(() => {
    select("#instruction").style("display", "flex");
  }, delay2_5s);
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
    doors[i].parent("#doors");
    doors[i].class("door-container");
    doors[i].index = i;
    doors[i].mousePressed(pickDoor);

    const door = createDiv();
    door.class("door");
    door.parent(doors[i]);

    const letter_door = createDiv();
    letter_door.addClass("letter-door");
    letter_door.parent(doors[i]);

    const light = createDiv();
    light.class("light_door" + " " + "light_n_door" + i);
    light.parent(doors[i]);

    const bar_light = createDiv();
    bar_light.class("bar_light" + " " + "bar_n_light" + i);
    bar_light.parent(doors[i]);

    const content = createDiv();
    content.class("content");
    content.parent(doors[i]);

    const shadow_div = createDiv();
    shadow_div.class("shadow" + " " + "shadow_n_" + i);
    shadow_div.parent(doors[i]);
  }
}

// function makeInstruction() {
//   for (let g = 0; g < totalInstr; g++) {
//     instruction[g] = createDiv();
//     instruction[g].parent("instr_text");
//     instruction[g].index = g;
//     instruction[g].class("instr-container" + " " + 'instr_n_' + g);
//   }
//   select('#instr_text > .instr_n_0').html(text_one);
//   select('#instr_text > .instr_n_1').html(text_two);
//   select('#instr_text > .instr_n_2').html(text_tree);
// }

// function makeInput() {
//   for (let j = 0; j < totalInputs; j++) {
//     inputs[j] = createDiv();
//     inputs[j].parent("#inputForm");
//     inputs[j].index = j;
//     inputs[j].class("input-box" + " " + "box_n" + j);

//     let make_input = createInput();
//     make_input.class("input-input" + " " + "input_n" + j);
//     make_input.parent(inputs[j]);

//   }
//   console.log(inputs[3], "testtt")



//   privacy_terms =
//     "Am citit și accept Termenii și Condițiile și Politica de Confidențialitate.";
//   privacy_marketing =
//     "Sunt de acord să primesc comunicări de marketing din partea NetBet.";

//   $(".box_n0").prepend(`<label class="input-label">email</label>`);
//   $(".box_n1").prepend(`<label class="input-label">nume</label>`);
//   $(".box_n2").prepend(
//     `<label class="input-label">prenume</label>`
//   );
//   $(".box_n3").prepend(`<label class="input-label">telefon</label>
//   <div class="phone-group" id="phone_group">
//     <div class="phone-prefix">
//       <div class="flag">
//       <div class="blue"></div>
//       <div class="yellow"></div>
//       <div class="red"></div>
//     </div>
//   <div class="phone-prefix-content">+40</div>
// </div>
//   </div>`);
//   // make_input[3].parent("#inputForm");


//   $(".box_n4").prepend(
//     `<label class="input-label">cod Bonus</label>`
//   );

//   $("#inputForm").append(`<div class="privOne">
//         <input type="checkbox" id="privacy-check" name="privacy-check" class="input_check">
//         <label for="privacy-check" class="privacy-text">${privacy_terms}</label>
//         </div>
//         <div class="privTwo">
//         <input type="checkbox" id="marketing-check" name="marketing-check" class="input_check">
//         <label for="marketing-check" class="privacy-text">${privacy_marketing}</label>
//         </div>
//      <a href="https://casino.netbet.ro/"><button type="submit" class="btnNew btn-primary btn_send disabled" disabled >Înregistrează-te</button></a>
//     <div class="clear"></div>`);

//   $("#inputForm").prepend(
//     ` <div class="BonusCodeText">
//       <div class="line-one">felicitări</div>
//       <div class="line-two">UȘA TA ASCUNDEA <span class="span_code_input"></span></div>
//       <div class="line-three">la jocul <span class="span_game_input"></span></div>
//     </div>`
//   );

//   $(".input-input").attr({
//     onfocus: "setFocus(true)",
//     onblur: "setFocus(false)",
//     required: "",
//   });
//   //  <a href="https://marianiordache.ro+${input_bonusCode}"><button type="button" class="btnNew btn-primary btn_send disabled" disabled>Înregistrează-te</button></a>
//   $(".input_n0").attr({
//     type: "email",
//   });

//   $(".input_n3").attr({
//     type: "number",
//   });

//   const inputNumber = document.querySelector(".input_n3");
//   inputNumber.addEventListener("input", function (event) {
//     if (this.value < "7") {
//       this.value = "";
//     }
//   });

//   const input_max = document.querySelector(".input_n3");
//   input_max.addEventListener("input", function (events) {
//     if (this.value.length >= 9) {
//       return (this.value = this.value.slice(0, 9));
//     } else if (isNaN(this.value)) {
//       this.value = "";
//     } else {
//       events.stopPropagation();
//       events.stopImmediatePropagation();
//       return false;
//     }
//   });

//   $(".box_n4").addClass("error");

//   $(".input_check").click(function () {
//     let lenChecked = $(".input_check:checked").length;
//     if (lenChecked >= 2) {
//       $(".btn_send").removeAttr("disabled");
//       $(".btn_send").removeClass("disabled");
//     } else {
//       $(".btn_send").addClass("disabled");
//       $(".btn_send").prop("disabled", true);
//     }
//   });
// }

 



function makeInput() {

  for (let j = 0; j < totalInputs; j++) {
    inputs[j] = createDiv();
    inputs[j].parent("#inputForm");
    inputs[j].index = j;
    inputs[j].class("input-box" + " " + "box_n" + j);

    let make_input = createInput();
    make_input.class("input-input" + " " + "input_n" + j);
    make_input.parent(inputs[j]);
    // make_input = j;
    // console.log(inputs, "fassssssfas")
    // let test = j
    // if ( test === 3) {
    //   // test.hide()
    //   select("#inputForm > .box_n3 > .input_n3").hide();
    //   console.log(test , "fasfas")
    // }
    
  }
//<input value="" type="number" class="input-input input_n3" onfocus="setFocus(true)" onblur="setFocus(false)" required="required"></input>
  $(".box_n0").prepend(`<label class="input-label">email</label>`);
  $(".box_n1").prepend(`<label class="input-label">nume</label>`);
  $(".box_n2").prepend(`<label class="input-label">prenume</label>`);
  $(".box_n3").append(`<label class="input-label">telefon</label>
<div class="phone-group">
  
  <div class="phone-prefix">
    <div class="flag">
    <div class="blue"></div>
    <div class="yellow"></div>
    <div class="red"></div>
  </div>
<div class="phone-prefix-content">+40</div>
</div>

</div>`);
  $(".box_n4").prepend(`<label class="input-label">cod bonus</label>`);

  $("#inputForm").append(`<div class="privOne">
      <input type="checkbox" id="privacy-check" name="privacy-check" class="input_check">
      <label for="privacy-check" class="privacy-text">${privacy_terms}</label>
      </div>
      <div class="privTwo">
      <input type="checkbox" id="marketing-check" name="marketing-check" class="input_check">
      <label for="marketing-check" class="privacy-text">${privacy_marketing}</label>
      </div>
   <a href="#"><button type="button" class="btnNew btn-primary btn_send disabled" disabled id="btn-sendData">Înregistrează-te</button></a>
  <div class="clear"></div>`);

  $("#inputForm").prepend(
    ` <div class="BonusCodeText">
    <div class="line-one">felicitări</div>
    <div class="line-two">UȘA TA ASCUNDEA <span class="span_code_input"></span></div>
    <div class="line-three">la jocul <span class="span_game_input"></span></div>
  </div>`
  );

  $(".input-input").attr({
    onfocus: "setFocus(true)",
    onblur: "setFocus(false)",
    required: "",
  });
  //  <a href="https://marianiordache.ro+${input_bonusCode}"><button type="button" class="btnNew btn-primary btn_send disabled" disabled>Înregistrează-te</button></a>
  $(".input_n0").attr({
    type: "email",
  });

  $(".input_n3").attr({
    type: "number",
  });

  const inputNumber = document.querySelector(".input_n3");
  inputNumber.addEventListener("input", function (event) {
    if (this.value.length === 1 && this.value !== "7") {
      this.value = "";
    } else if (this.value.length > 1 && this.value[0] !== "7") {
      this.value = "" + this.value.substring(1);
    }
  });

  const input_max = document.querySelector(".input_n3");
  input_max.addEventListener("input", function (events) {
    if (this.value.length >= 9) {
      return (this.value = this.value.slice(0, 9));
    } else if (isNaN(this.value)) {
      this.value = "";
    } else {
      events.stopPropagation();
      events.stopImmediatePropagation();
      return false;
    }
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

  $("#btn-sendData").one("click", function () {
    var emailInput = document.querySelector(".input_n0");
    var email = emailInput.value;
    console.log(emailInput, "test");
    console.log(email, "test2");
    let details_send =
      `{"email": "` + email + `","code": "` + largeCode + `"}`;
    console.log(details_send, "test3");

    postData(
        "https://casino-promo.netbet.ro/scripts/api/space/setcode.php",
        details_send
      )
      .then(function (data) {
        console.log(data);
      })
      .catch(function (error) {
        console.error(error);
      });
  });
}

function postData(url, data) {
  return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.responseText);
      } else if (xhr.readyState === 4) {
        reject(xhr.status);
      }
    };

    xhr.send(data);
  });
}
// console.log(codes_grab, "= code sent");

function setFocus(on) {
  let element = document.activeElement;
  if (on) {
    setTimeout(function () {
      element.parentNode.classList.add("focus");
    });
  } else {
    let box = document.querySelector(".input-box");
    box.classList.remove("focus");
    $("input").each(function () {
      let $input = $(this);
      let $parent = $input.closest(".input-box");
      if ($input.val()) $parent.addClass("focus");
      else $parent.removeClass("focus");
    });
  }
}

// $(".btn-showModal").on("click", function () {
//   $(".mask").addClass("active");
// });

// function closeModal() {
//   $(".mask").removeClass("active");
// }

// $(".close-modal, .mask").on("click", function () {
//   closeModal();
// });

// $(document).keyup(function (e) {
//   if (e.keyCode == 27) {
//     closeModal();
//   }
// });

function setStars() {
  for (let k = 0; k < fallingStars; k++) {
    comets[k] = createDiv();
    comets[k].parent("#comets");
    comets[k].class("cometsFall");
    comets[k].index = k;
  }
}

// function showDialog() {
//   const scrollY =
//     document.documentElement.style.getPropertyValue("--scroll-y");
//   const body = document.body;
//   body.style.position = "fixed";
//   body.style.width = "100%";
//   body.style.top = `-${scrollY}`;
// }
// function closeDialog() {
//   const body = document.body;
//   const scrollY = body.style.top;
//   body.style.position = "";
//   body.style.top = "";
//   body.style.width = "100%";
//   window.scrollTo(0, parseInt(scrollY || "0") * -1);
// }
// window.addEventListener("scroll", () => {
//   document.documentElement.style.setProperty(
//     "--scroll-y",
//     `${window.scrollY}px`
//   );
// });

// do this for 5 seconds
// do this for 5 seconds
var colorsConfetti = ['#DC0000', '#ff4c16', "#002b7f", "#fff"];

function winConfetti() {
  var duration = 3 * 1000;
  var end = Date.now() + duration;
  (function frame() {
    // launch a few confetti from the left edge
    confetti({
      particleCount: 3,
      angle: 120,
      spread: 130,
      origin: {
        x: 1,
        y: 0.6
      },
      zIndex: 200,
      colors: colorsConfetti
    });
    // and launch a few from the right edge
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 130,
      origin: {
        y: 0.6,
        x: 0
      },
      zIndex: 200,
      colors: colorsConfetti

    });

    // keep going until we are out of time
    if (Date.now() < end) {
      return requestAnimationFrame(frame);
    }

  })();

}



function setup() {
  winConfetti();
  startInstruction();
  noCanvas();
  makeDoors();
  startGame();
  // makeInstruction();
  makeInput();
  setStars();
  resizeWin();
  select("button#yes").mousePressed(function () {
    select("#instruction").hide();
    setTimeout(() => {
      chooseDoor(true);

    }, delay1s);
  });
  select("button#no").mousePressed(function () {
    select("#instruction").hide();
    setTimeout(() => {
      chooseDoor(false);

    }, delay1s);
  });
  select("button#yes_continue").mousePressed(function () {

    winConfetti()
    select("#instruction").hide();
    setTimeout(() => {
      revealDoor();

    }, delay1s);
  });

  select("button#yes_select").mousePressed(function () {
    for (const door of doors) {
      door.style("cursor","pointer");
    }
    select("#instruction").hide();
    state = "PICK";
  });

  // select("button#play-again").mousePressed(function () {
  //   setTimeout(() => {
  //     resetDoor();
  //   }, delay1s);
  // });
}