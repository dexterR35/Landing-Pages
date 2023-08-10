{block append name=js} {literal}
<script>
   console.log("<--Loaded--> Script Game Logic");
  function retriveData() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        let codeText = this.responseText;
        console.log(codeText, "codul");

        if (codeText.match(/A250/gi) || codeText.match(/A350/gi)) {
          largeCode = codeText;
          gamesCode = _games[0];
        } else if (codeText.match(/B250/gi) || codeText.match(/B350/gi)) {
          largeCode = codeText;
          gamesCode = _games[1];
        } else if (codeText.match(/C250/gi) || codeText.match(/C350/gi)) {
          largeCode = codeText;
          gamesCode = _games[2];
        } else if (codeText.match(/D250/gi) || codeText.match(/D350/gi)) {
          largeCode = codeText;
          gamesCode = _games[3];
        } else if (codeText.match(/E250/gi) || codeText.match(/E350/gi)) {
          largeCode = codeText;
          gamesCode = _games[4];
        } else if (codeText.match(/F250/gi) || codeText.match(/F350/gi)) {
          largeCode = codeText;
          gamesCode = _games[5];
        } else {
          console.log("Error no mached");
        }
      }
    };
    request.open(
      "GET",
      "https://casino-promo.netbet.ro/scripts/api/space/getcode1.php"
    );
    request.send();
  }
  // const doors = $("#_Sevens .seven").toArray();
  const symbolsSeven = [];
  // console.log(symbolsSeven, "doors");
  const inputs = [];
  const instruction = [];
  const lamps = [];
  let totalDoors = 3;
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
  let addClassAnimation = 600; // time add class to sevens prepare for animation
  let hasSwitchedDivs = false;
  let _games = [
    "HOT TO BURN",
    "JOHN HUNTER AND THE BOOK OF TUT",
    "NETBET BONANZA",
    "GATES OF OLYMPUS",
    "SWEET BONANZA",
    "BIG BASS HOLD AND SPINNER",
  ];

  const sevensLetter = [{ letter: "A" }, { letter: "B" }, { letter: "C" }];

  let first_text =
    '<div class="first_text_t1">Bun venit pe netbet!</div><br/><div class="second_text_t1">Te provoc să iei sute de <br/> runde gratuite</div>';
  let second_text =
    '<div class="first_text_t2">ȘEPTARII ASCUND RUNDE GRATUITE</div><br/><div class="second_text_t2">UNUL ASCUNDE <br/>PREMIUL CEL MARE</div>';
  let four_text =
    '<div class="first_text_t4">AM ELIMINAT UȘA NECÂȘTIGĂTOARE</div>';
  let privacy_terms =
    "Am citit și accept Termenii și Condițiile și Politica de Confidențialitate.";
  let privacy_marketing =
    "Sunt de acord să primesc comunicări de marketing din partea NetBet.";

  function startInstruction() {
    setTimeout(() => {
      $(".bubble_hidden").css("opacity", "1");
    }, 900);
    setTimeout(() => {
      $("._hide").css("opacity", "1");
    }, 800);
  }

  function startGame() {
    state = "!PICK";
    select("#_Sevens").addClass("doorNon-Active");
    select(".start_game").show();
    select("button#start_game").mousePressed(resetDoor);
    select("#instruction > p").html(first_text);
    select("#instruction > .choices").hide();
    select("#instruction > .p_continue").hide();
    // $("#instruction > #play-again").hide();
    select("#instruction > .select_door").hide();
    // select(".seven").addClass("_movefromBottom");
    // select("button#yes_select").hide();
  }

  // pick door and add classes

  // create doors
  function makeDoors() {
    // clear array
    for (let seven of symbolsSeven) {
      seven.remove();
    }
    symbolsSeven.splice(0, symbolsSeven.length);

    for (let i = 0; i < totalDoors; i++) {
      symbolsSeven[i] = createDiv();
      symbolsSeven[i].parent("#_Sevens");
      symbolsSeven[i].class("container-seven");
      symbolsSeven[i].index = i;
      symbolsSeven[i].mousePressed(pickDoor);

      const swirlTop = createDiv();
      swirlTop.class("swirl-top _hide swirls");
      swirlTop.parent(symbolsSeven[i]);

      const sevenElement = createDiv();
      sevenElement.class("seven _movefromBottom");
      sevenElement.mouseClicked(pickDoor); // If you want to handle the click event using p5.js
      sevenElement.parent(symbolsSeven[i]);

      const swirlBottom = createDiv();
      swirlBottom.class("swirl-bottom _hide swirls");
      swirlBottom.parent(symbolsSeven[i]);

      const letter = createDiv();
      letter.class("letter-seven _movefromBottom");
      letter.parent(symbolsSeven[i]);
      letter.html(sevensLetter[i].letter);

      const contentBonus = createDiv();
      contentBonus.class("content");
      contentBonus.parent(symbolsSeven[i]);

      const bonusText = createDiv();
      bonusText.class("bonusText");
      bonusText.parent(contentBonus);

      const lampIndex = lampIndices[i];

      // Use lampIndex as needed, for example:
      // console.log(`Door ${i + 1} is associated with Lamp ${lampIndex}`);

      // contentBonus.html(sevensLetter[i].letter);
    }
  }
  function getLampIndices() {
    const lamps = document.querySelectorAll(".lamp"); // Select all elements with class "lamp"
    const lampIndices = [];

    // console.log(lamps, "lamps");
    lamps.forEach((lamp, index) => {
      lampIndices.push(index + 1); // Adding 1 to convert from zero-based index to one-based index
    });

    return lampIndices;
  }

  const lampIndices = getLampIndices();
  // console.log(lampIndices, "test");

  function pickDoor() {
    if (state !== "PICK") return;
    state = "REVEAL";
    pickedDoor = random(symbolsSeven);
    // picked simbol
    pickedDoor = this;
    pickedDoor.addClass("picked lastOpen");
    // pickedDoor.setAttribute("open", "");
    // console.log(pickedDoor, "pickedDoor");
    // symbols for text for html

    pickDoorIndex = pickedDoor.index + 1;
    // Adăugați această linie pentru a adăuga clasa "lamp-selected" la lampa corespunzătoare
    const correspondingLampIndex = pickedDoor.index;
    const correspondingLamp = select(
      `.lamp:nth-child(${correspondingLampIndex + 1})`
    );
    correspondingLamp.addClass("lamp-selected");

    if (pickDoorIndex === 1) {
      pickDoorIndex = "A";
    } else if (pickDoorIndex === 2) {
      pickDoorIndex = "B";
    } else if (pickDoorIndex === 3) {
      pickDoorIndex = "C";
    }
    let third_text = `<div class="first_text_t3">AI ALES UN ȘEPTAR NOROCOS "${pickDoorIndex}"</div><br/><div class="second_text_t3">TE AJUT ȘI ELIMIN UN ȘEPTAR <br/> NECÂȘTIGĂTOR!</div>`;

    // add class to simbols and letters
    select(".letter-seven", pickedDoor).addClass("open");

    select(".seven", pickedDoor).addClass("_active");

    select("#yes_select").hide();

    // instructions and buttons show
    setTimeout(() => {
      select("#instruction").style("display", "flex");
      select("#instruction > p").html(third_text);
      select(".bubble").show();
      select("#instruction > .p_continue").show();
    }, delay0_5s);
  }

  function revealDoor() {
    //ranndom door open
    const options = symbolsSeven.filter(
      (seven, i) => i !== pickedDoor.index && seven.prize !== largeCode
    );

    // console.log(options, "options");
    // right door!
    if (options.length === symbolsSeven.length - 1) {
      // Randomly remove 1
      options.splice(floor(random(options.length)), 1);
    }
    // revealed random doors
    for (const revealedDoor of options) {
      revealedDoor.addClass("revealed _first -sel");
      // console.log(revealedDoor, "revealedDoor");
      // Check if the door already has the classes 'box_content' and 'box_seven'
      setTimeout(() => {
        select(".content", revealedDoor).addClass("box_content -anim");
        select(".seven", revealedDoor).addClass("box_seven -sev");
        select(".bonusText", revealedDoor).html(revealedDoor.prize);
      }, addClassAnimation);
      // revealedDoor\
    }

    //last door
    const lastDoor = symbolsSeven.find(
      (findClass) =>
        !findClass.hasClass("revealed") && !findClass.hasClass("picked")
    );
    // $("#yes_continue").click(switchDivs());

    lastDoor.addClass("remaining");
    // console.log(lastDoor, "lastDoor");
    // console.log(lastDoor2,"lastDoor2");

    const switchDoor = symbolsSeven.find((findClass) =>
      findClass.hasClass("picked")
    );
    // console.log(switchDoor, "switchDoor");

    select("#instruction > p").html(four_text);
    select(".letter-seven", lastDoor).addClass("pause stayClose");
 
    setTimeout(() => {
      select("._first").hide();
    }, delay2s);

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

    let five_text = `<div class="zero_text_t5">AI RĂMAS CU 2 ȘEPTARI CÂȘTIGĂTORI</div><div class="first_text_t5">POȚI SCHIMBA ȘEPTARUL TĂU</div><div class="second_text_t5"></div><div class="third_text_t5">vrei să schimbi?</div>`;
    // hide show random revealead door
    // setTimeout(() => {
    //   select("#_Sevens > .container-seven.revealed._first").hide();
    // }, delay3s);
    retriveData();
    // lastDoor.mousePressed(switchDivs);
    select("#instruction > .p_continue").hide();

    select("#instruction > p").html(five_text);
    // select(".content").removeClass("box-content");
    setTimeout(() => {
      select("#instruction > .choices").style("display", "flex");
      select("#instruction").style("display", "flex");
      select(".bubble").show();
    }, delay2_5s);
  }

  function chooseDoor(hasSwitched = false) {
    const lastDoor = symbolsSeven.find(
      (findClass) =>
        !findClass.hasClass("revealed") && !findClass.hasClass("picked")
    );

    const correspondingLampIndex = lastDoor.index;
    const correspondingLamp = select(
      `.lamp:nth-child(${correspondingLampIndex + 1})`
    );
    correspondingLamp.addClass("lamp-selected");
    setTimeout(() => {
      lastDoor.addClass("-sel");
    }, delay1_5s);
    select("#instruction > .choices").hide();
    const newPick = symbolsSeven.find(
      (findClass) =>
        !findClass.hasClass("revealed") && !findClass.hasClass("picked")
    );

    // click yes and revealed
    if (hasSwitched) {
      // select(".seven", lastDoor).addClass("-sev");
      newPick.addClass("picked");
      pickedDoor.removeClass("picked");
      // select(".seven", lastDoor).removeClass("-sev");
      pickedDoor = newPick;

      // const correspondingLampIndex = pickedDoor.index;
      // console.log(correspondingLampIndex, "correspondingLampIndex");
      //   const correspondingLamp = select(
      //     `.lamp:nth-child(${correspondingLampIndex})`
      //   );
      //   correspondingLamp.addClass("lamp_selected");
      setTimeout(() => {
        select(".content", newPick).addClass("box_content -anim");
        select(".seven", newPick).addClass("box_seven -sev");
      }, addClassAnimation);
    } else {
      setTimeout(() => {
        const newPick2 = symbolsSeven.find(
          (findClass) =>
            findClass.hasClass("picked") && !findClass.hasClass("_first")
        );
        select(".content", newPick2).addClass("box_content -anim");
        select(".seven", newPick2).addClass("box_seven -sev");
      }, addClassAnimation);
      // click no and revealed
      // setTimeout(() => {
    }

    checkWin(hasSwitched);
  }

  function checkWin(hasSwitched) {
    // revealedDoor.removeClass("box_content");
    const winPick = symbolsSeven.filter(
      (findClass) =>
        findClass.hasClass("picked") && !findClass.hasClass("_first")
    );

    // for (let seven of symbolsSeven) {
    // console.log(winPick, "newpick222222");

    let codeString = `<span class="content-l1">${largeCode.substring(
      1,
      4
    )}</span><span class="content-l2">runde</span><span class="content-l3">gratuite</span>`;
// display text code and game for forms
    select(".span_code_input").html(codeString);
    select(".span_game_input").html(gamesCode);

    for (let winDiv of winPick) {
      select(".seven", winDiv).addClass("_active");
      winDiv.prize = largeCode;
      if (winDiv.prize === largeCode) {
        setTimeout(() => {
          select(".bonusText", winDiv).html(codeString);
        }, addClassAnimation);
        winDiv.addClass("won");
        winDiv.removeClass("remaining");

        // console.log(winDiv, "winDiv");
        select("#instruction > p").html("Ai câstigat!");
        const lastOneOpen = symbolsSeven.find(
          (findClass) =>
            !findClass.hasClass("revealed") && !findClass.hasClass("won")
        );
        //   setTimeout(() => {
        //   select(".content", winDiv).addClass("box_content -anim");
        //   select(".seven", winDiv).addClass("box_seven -sev");
        // }, 700);
        // showDialog();
        // select("#mask_modal").addClass("active");
        // select(".above-fold").style("height", "100vh");

        setTimeout(() => {
        
          select("#mask_modal").addClass("active");
          select(".above-fold").style("height", "100vh");
        }, delay3s);
        showDialog();
        setTimeout(() => {
          lastOneOpen.addClass("-sel");
          // select(".content", lastOneOpen).addClass("box_content");
          // select(".seven", lastOneOpen).addClass("box_seven");

          select(".bonusText", lastOneOpen).html(smallCode);
        }, addClassAnimation);
        setTimeout(() => {
          select(".content", lastOneOpen).addClass("box_content -anim");
          select(".seven", lastOneOpen).addClass("box_seven -sev");
        }, delay1s);
        // console.log("time");
        // const correspondingLampIndex = winDiv.index;
        // const correspondingLamp = select(
        //   `.lamp:nth-child(${correspondingLampIndex})`
        // );
        // correspondingLamp.addClass("lamp_selected");
      } else {
        select("#instruction > p").html("Ai pierdut!");
        // select('#doors > .lose > .content').html(codeString);
      }
    }
    const lastDoor1 = symbolsSeven.find(
      (findClass) =>
        !findClass.hasClass("revealed") && !findClass.hasClass("picked")
    );
    // setTimeout(() => {
    //   lastDoor1.addClass("-sel");
    //   select(".seven", lastDoor1).addClass("-sev");
    // }, delay1_5s);
  }

  function resetDoor() {
    for (const seven of symbolsSeven) {
      let sevensIndex = seven.index + 1;
      if (sevensIndex === 1) {
        sevensIndex = "A";
      } else if (sevensIndex === 2) {
        sevensIndex = "B";
      } else if (sevensIndex === 3) {
        sevensIndex = "C";
      }

      seven.show();
      seven.prize = smallCode;

      seven.revealed = false;
      $(".letter-seven", seven).html(sevensIndex);
      // let test =  document.getElementsByClassName("letter-seven");
      // console.log("test");
      select(".letter-seven", seven).addClass("light");
      // $(".lamp", seven).attr("open", "");
      select(".seven", seven).removeClass("_movefromBottom");
      seven.removeClass("revealed");
      seven.removeClass("picked");
      seven.removeClass("won");
      seven.removeClass("lose");
      seven.removeClass("open");
      seven.removeClass("remaining");
      seven.removeClass("-sel");
      seven.removeClass("-sev");
      select(".content", seven).removeClass("box_content");
      select(".seven", seven).removeClass("box_seven");
    }
    // closeDialog();
    // select('#doors').style("display","flex");
    select("#_Sevens").removeClass("doorNon-Active");
    select(".start_game").hide();

    select("#instruction > p").html(second_text);
    select("#instruction > .select_door").show();
  }

  function setup() {
    noCanvas();
    startInstruction();
    makeDoors();
    startGame();
    // makeInput();
    $("#yes").on("click", function () {
      select(".seven", symbolsSeven).removeClass("_active");
      $("#instruction").hide();
      select(".bubble").hide();
      chooseDoor(true);
      setTimeout(() => {
        // alert("ai castigat" + largeCode);
        winConfetti();
      }, delay1_5s);
    });

    $("#no").on("click", function () {
      select(".seven", symbolsSeven).removeClass("_active");
      $("#instruction").hide();
      select(".bubble").hide();

      chooseDoor(false);

      setTimeout(() => {
        // alert("ai castigat");
        winConfetti();
      }, delay1_5s);
    });

    $("#yes_continue").on("click", function () {
      $("#instruction").hide();
      select(".bubble").hide();
      revealDoor();
    });

    $("#yes_select").on("click", function () {
      for (const seven of symbolsSeven) {
        $(seven).css("cursor", "pointer");
      }
      select(".bubble").hide();
      state = "PICK";
    });

    // startInstruction();
    // startGame();
  }
</script>


<script>
     console.log("<--Loaded--> Script Input Logic");
  const inputName = document.querySelector(".input_n1");
  const updateName = document.querySelector(".errorDiv_n1");

  const inputLastName = document.querySelector(".input_n2");
  const updateLastName = document.querySelector(".errorDiv_n2");

  const inputNumber = document.querySelector(".input_n3");
  const updateNumber = document.querySelector(".errorDiv_n3");

  const checkboxPrivacy = document.querySelector(".inp_privacy");
  const checkboxMarketing = document.querySelector(".inp_marketing");

  const emailInputs = document.querySelector(".input_n0");
  const updateEmail = document.querySelector(".errorDiv_n0");

  const buttonHandler = document.querySelector(".btn_send");

  function checKPhoneCheckbox() {
    checkboxMarketing.disabled = true;
    checkboxPrivacy.disabled = true;

    inputNumber.addEventListener("input", function (event) {
      $(".errorDiv_n3").css("visibility", "visible");
      updateNumber.textContent = "Introdu un telefon valid";
      updateNumber.classList.remove("success");
      updateNumber.classList.add("failure");
      if (this.value.length === 1 && this.value !== "7") {
        this.value = "";
        updateNumber.textContent = "Numarul porneste de la 7";
        updateNumber.classList.remove("success");
        updateNumber.classList.add("failure");
      } else if (this.value.length > 0 && this.value[0] === "7") {
        this.value = "7" + this.value.substring(1);
        updateNumber.textContent = "Maxim 9 cifre";
        updateNumber.classList.remove("succes");
        updateNumber.classList.add("failure");
        buttonHandler.disabled = true;
        buttonHandler.classList.add("disabled");
      }
      if (this.value.length >= 9) {
        this.value = this.value.slice(0, 9);
        updateNumber.textContent = "Numar de telefon Valid";
        updateNumber.classList.add("success");
        updateNumber.classList.remove("failure");
        checkboxMarketing.disabled = false;
        setTimeout(() => {
          $(".errorDiv_n3").css("visibility", "hidden");
        }, 1500);

        if (this.value[0] == "0" && this.value[0] < "7") {
          // this.value = "";
          this.value = this.value.slice(0, 9);
          updateNumber.textContent = "Numarul trebuie sa inceapa cu 7";
          updateNumber.classList.remove("success");
          updateNumber.classList.add("failure");
          checkboxMarketing.disabled = true;
        }
      } else if (isNaN(this.value)) {
        alert("test");
        this.value = "";
      } else {
        checkboxMarketing.disabled = true;
        checkboxMarketing.checked = false;
        event.stopPropagation();
        event.stopImmediatePropagation();
        return false;
      }
    });

    emailInputs.addEventListener("input", function (e) {
      const inputTarget = e.target.value;
      if (inputTarget && /(^\w.*@\w+\.\w)/.test(inputTarget)) {
        updateEmail.textContent = "format corect, mergi mai departe";
        updateEmail.classList.add("success");
        updateEmail.classList.remove("failure");
        checkboxPrivacy.disabled = false;
        setTimeout(() => {
          $(".errorDiv_n0").css("visibility", "hidden");
        }, 1500);
      } else {
        $(".errorDiv_n0").css("visibility", "visible");
        updateEmail.textContent = "Introdu un mail valid";
        updateEmail.classList.remove("success");
        updateEmail.classList.add("failure");
        checkboxPrivacy.disabled = true;
        checkboxPrivacy.checked = false;
      }
    });

    inputName.addEventListener("input", function (event) {
      $(".errorDiv_n1").css("visibility", "visible");

      if (this.value.length === 0) {
        updateName.textContent = "Introdu un nume valid";
        updateName.classList.remove("success");
        updateName.classList.add("failure");
        checkboxPrivacy.disabled = true;
        checkboxPrivacy.checked = false;
      } else if (this.value.length === 1) {
        updateName.textContent = "nume prea scurt";
        updateName.classList.remove("success");
        updateName.classList.add("failure");
        checkboxPrivacy.disabled = true;
        checkboxPrivacy.checked = false;
      } else if (this.value.length <= 2) {
        updateName.textContent = "nume valid";
        updateName.classList.add("success");
        updateName.classList.remove("failure");

        checkboxPrivacy.disabled = false;
        setTimeout(() => {
          $(".errorDiv_n1").css("visibility", "hidden");
        }, 1500);
      } else if (this.value.length >= 3) {
        $(".errorDiv_n1").css("visibility", "hidden");
      }
    });

    inputLastName.addEventListener("input", function (event) {
      $(".errorDiv_n2").css("visibility", "visible");
      if (this.value.length === 0) {
        updateLastName.textContent = "Introdu un Prenume valid";
        updateLastName.classList.remove("success");
        updateLastName.classList.add("failure");
        checkboxPrivacy.disabled = true;
        checkboxPrivacy.checked = false;
      } else if (this.value.length === 1) {
        updateLastName.textContent = "Prenume prea scurt";
        updateLastName.classList.remove("success");
        updateLastName.classList.add("failure");
        checkboxPrivacy.disabled = true;
        checkboxPrivacy.checked = false;
      } else if (this.value.length <= 2) {
        updateLastName.textContent = "Prenume valid";
        updateLastName.classList.add("success");
        updateLastName.classList.remove("failure");
        checkboxPrivacy.disabled = false;
        setTimeout(() => {
          $(".errorDiv_n2").css("visibility", "hidden");
        }, 1500);
      } else if (this.value.length == "") {
        checkboxPrivacy.disabled = false;
      } else if (this.value.length >= 3) {
        $(".errorDiv_n2").css("visibility", "hidden");
      }
    });

    const checkbox2 = document.querySelectorAll(".input_check");
    for (let i = 0; i < checkbox2.length; i++) {
      checkbox2[i].addEventListener("input", function buttonHandler() {
        const buttonHandler = document.querySelector(".btn_send");
        let lenChecked = $(".input_check:checked").length;

        if (lenChecked === 2) {
          buttonHandler.disabled = false;
          buttonHandler.classList.remove("disabled");
        } else if (lenChecked <= 2) {
          buttonHandler.disabled = true;
          buttonHandler.classList.add("disabled");
        } else {
          buttonHandler.disabled = true;
          buttonHandler.classList.add("disabled");
          return;
        }
      });
    }
  }

  function setFocus(on) {
    let elementFocus = document.activeElement;
    if (on) {
      setTimeout(function () {
        elementFocus.parentNode.classList.add("focus");
      });
    } else {
      let boxR = document.querySelector(".input-box");
      boxR.classList.remove("focus");
      $("input").each(function () {
        let $input = $(this);
        let $parent = $input.closest(".input-box");
        if ($input.val()) {
          $parent.addClass("focus");
        } else {
          $(".box_n3").removeClass("focus");
          $parent.removeClass("focus");
        }
      });
    }
  }

  $(".input-input").attr({
    onfocus: "setFocus(true)",
    onblur: "setFocus(false)",
    required: "required",
    maxlength: "40",
  });

  checKPhoneCheckbox();
</script>


<script>
     console.log("<--Loaded--> API");
   console.log("<--Loaded--> Script Send Data");
  const form_q = document.querySelector("#inputForm");
    const emailInput = document.querySelector(".input_n0");
    // Event listener for form submission
    form_q.addEventListener("submit", function (event) {
      event.preventDefault();

      // Retrieve email input value
      let emailValue = emailInput.value;

      // Function to handle errors
      function handleError(errorMessage) {
        $("#emailError").text(errorMessage).css({
          display: "flex",
          "justify-content": "center"
      
       
        });
      }

      // Check if email already exists
      let checkEmailXhr = new XMLHttpRequest();
      checkEmailXhr.onreadystatechange = function () {
        if (checkEmailXhr.readyState === 4) {
          if (checkEmailXhr.status === 200) {
            let emailResponse = checkEmailXhr.responseText;
            // console.log(emailResponse, "emailResponse");

            // Check the response for the existence of the email
            if (emailResponse === "exists") {
              handleError("Adresa de e-mail este deja folosită.");
            } else {
              // Email does not exist, proceed to setcode1.php
              let setCodeXhr = new XMLHttpRequest();
              setCodeXhr.open(
                "POST",
                "https://casino-promo.netbet.ro/scripts/api/space/setcode1.php"
              );
              setCodeXhr.setRequestHeader("Accept", "application/json");
              setCodeXhr.setRequestHeader("Content-Type", "application/json");

              let details_send = `{"email": "${emailValue}", "code": "${largeCode}"}`;
              // console.log(details_send, "details1");

              setCodeXhr.onreadystatechange = function () {
                if (setCodeXhr.readyState === 4) {
                  if (setCodeXhr.status === 200) {
                    let response = setCodeXhr.responseText.trim();
                    // console.log(response, "responsetest");
                    // console.log(response, "cod status22222");
                    if (response === "Status: preregister exists") {
                      handleError(" Adresa de email este deja asociată unui cont de utilizator");
                      $(".btn_send").removeAttr("disabled");
                      // $(".btn_send").removeClass("disabled");
                    } else if (response === "Status: account exists") {
                      handleError(" Adresa de email este deja asociată unui cont de utilizator");
                      $(".btn_send").removeAttr("disabled");
                      // $(".btn_send").removeClass("disabled");
                    } else if (response === "ERROR1: missing parameter error!") {
                      alert(" missing parameter error!");
                      $(".btn_send").removeAttr("disabled");
                      $(".btn_send").removeClass("disabled");
                    } else if (response === "ERROR2: email format error!") {
                      alert("ERROR2: email format error!");
                      $(".btn_send").removeAttr("disabled");
                      $(".btn_send").removeClass("disabled");
                    } else if (response === "ERROR3: invalid code!") {
                      alert("ERROR3: invalid code!");
                    } else if (response === "ERROR4: code too long!") {
                      alert("ERROR4: code too long!");
                      $(".btn_send").removeAttr("disabled");
                      $(".btn_send").removeClass("disabled");
                    } else if (response === "ERROR5: suspicious of mass requests!") {
                      alert("ERROR5: suspicious of mass requests!");
                    } else {

                      largeCode = response.slice(8);
      
                      var registrationVersion = "https://api.netbet.ro/auth/";
                      var registrationRedirectionUrl1 = `{/literal}{$link}{literal}&bonuscode=${largeCode}`;

                      var data = $("#inputForm").serialize();
                      // console.log("data serialize", data);
                      data = data.replace("&is_read_privacy=1", "");

                      axios({
                          method: "get",
                          url: "/api/data/?" +
                            data +
                            "&idaffiliation={$idaffiliation}&website_id=0&promotion_type=Welcome&language={$lang}&country={$countryCode}&product_id={$productNo}&referrer={$referrer}",
                        })
                        .then(function (response) {
                          setPrefilledRegistrationData(
                            registrationVersion,
                            registrationRedirectionUrl1,
                            "inputForm"
                          );
                        })
                        .catch(function (error) {
                          console.error(error);
                          handleError("Request failed");
                        });
                    }
                  } else {
                    console.error("Error:", setCodeXhr.status);
                    handleError(
                      "Request failed with status: " + setCodeXhr.status
                    );
                  }
                }
              };

              setCodeXhr.send(details_send);
              $(".btn_send").addClass("disabled");
              $(".btn_send").prop("disabled", true);
            }
          } else {
            console.error("Error:", checkEmailXhr.status);
            handleError("Request failed with status: " + checkEmailXhr.status);
          }
        }
      };

      checkEmailXhr.open(
        "POST",
        "https://casino-promo.netbet.ro/scripts/api/space/checkcode1.php"
      );
      checkEmailXhr.setRequestHeader("Content-Type", "application/json");

      let emailCheckData = `{"email": "${emailValue}"}`;

      checkEmailXhr.send(emailCheckData);
    });
  
  // console.log("DONE1222");
  console.log("good");
  // var registrationVersion = "https://api.netbet.ro/auth/";
  // var registrationRedirectionUrl1 = "{/literal}{$link}{literal}";

  function setPrefilledRegistrationData(
    registrationVersion,
    registrationRedirectionUrl,
    formId
  ) {
    var form = $("#inputForm");
    if (form.length > 0) {
      var formData = form.serializeArray();
      var data = {};
      data.website = "casino";
      data.lang = "ro";
      data.country = "{$countryCode}";
      data.device = "desktop";
      $.each(formData, function (key, val) {
        data[val.name] = val.value;
      });

      delete data.is_read_privacy;
      delete data.mkt;

      $.ajax({
        url: registrationVersion + "setPrefilledRegistrationData",
        method: "POST",
        data: data,
        xhrFields: {
          withCredentials: true,
        },
        crossDomain: true,
        success: function () {
          location.href = registrationRedirectionUrl;
        },
      });
    }
  }

</script>

<script>
  
  function showDialog() {
    const scrollY =
      document.documentElement.style.getPropertyValue("--scroll-y");
    const body = document.body;
    body.style.position = "fixed";
    body.style.width = "100%";
    body.style.top = `-${scrollY}`;
  }
  // function closeDialog() {
  //   const body = document.body;
  //   const scrollY = body.style.top;
  //   body.style.position = "";
  //   body.style.top = "";
  //   body.style.width = "100%";
  //   window.scrollTo(0, parseInt(scrollY || "0") * -1);
  // }
  window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty(
      "--scroll-y",
      `${window.scrollY}px`
    );
  });

  let colorsConfetti = ["#fff", "#ff4c16", "#002b7f", "#DC0000"];

  function winConfetti() {
    let duration = 4 * 1000;
    let end = Date.now() + duration;
    (function frame() {
      // launch a few confetti from the left edge
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 120,
        origin: {
          x: 1,
          y: 0.6,
        },
        zIndex: 300,
        colors: colorsConfetti,
      });
      // and launch a few from the right edge
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 120,
        origin: {
          y: 0.6,
          x: 0,
        },
        zIndex: 300,
        colors: colorsConfetti,
      });

      // keep going until we are out of time
      if (Date.now() < end) {
        return requestAnimationFrame(frame);
      }
    })();
  }

</script>
{/literal} {/block}
