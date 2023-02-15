const doors = [];
const inputs = [];
const comets = [];
const instruction = [];

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
let four_text =
    '<div class="first_text_t4">AM ELIMINAT UȘA <br/> NECÂȘTIGĂTOARE</div>';
let privacy_terms =
    "Am citit și accept Termenii și Condițiile și Politica de Confidențialitate.";
let privacy_marketing =
    "Sunt de acord să primesc comunicări de marketing din partea NetBet.";

// function resizeWin() {
//   if (window.matchMedia("(max-width:450px)").matches) {
//     select("#instruction").style("position", "fixed");
//   } else {
//     select("#instruction").style("position", "fixed");
//   }
// }
function retriveData() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let codeText = this.responseText;

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
        "https://casino-promo.netbet.ro/scripts/api/space/getcode.php"
    );
    request.send();
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
        door.style("cursor", "default");
        select(".letter-door", door).html(doorsIndex);
        select(".light_door", door).style("visibility", "hidden");
        select(".letter-door", door).removeClass("light");
    }
    // showDialog();
    state = "!PICK";

    select("#doors").addClass("doorNon-Active");
    // select(".door-container").style("cursor","default");
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
        door.removeClass("rev_open");
        door.removeClass("stayClose");
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
            showDialog();
            select("#mask_modal").addClass("active");

        }, delay3s);
    } else {
        select("#instruction > p").html("Ai pierdut!");

        // select('#doors > .lose > .content').html(codeString);
    }

    $(".input_n4").attr({
        disabled: "",
        placeholder: largeCode,
        name: "bonuscode",
        id: "bonuscode",
    });
    // sendData();
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
        newPick.addClass("picked");
        pickedDoor.removeClass("picked");
        pickedDoor = newPick;
        // stayDoorsRev.addClass("rev_open");
    } else {
        // // stayDoorsRev.addClass("rev_open");
        // const newPick2 = doors.find(
        //   (door) => !door.hasClass("revealed") && !door.hasClass("won")
        // );
        // console.log(newPick2);
    }
    const stayDoorsRev = doors.find((door) => door.hasClass("open"));
    stayDoorsRev.addClass("rev_open");
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
    // const stayDoorsRev = doors.find(
    //   (door) => !door.hasClass("revealed") && !door.hasClass("open")
    // );

    const switchDoor = doors.find((door) => door.hasClass("picked"));

    select("#instruction > p").html(four_text);
    // select(".letter-door", stayDoorsRev).addClass("pause");
    select(".letter-door", lastDoor).addClass("pause stayClose");

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

    let five_text = `<div class="first_text_t5">POȚI SCHIMBA UȘA "${switchDoorIndex}"</div><div class="second_text_t5">cu UȘA "${lastDoorIndex}"</div> <br/><div class="third_text_t5">vrei să schimbi?</div>`;

    retriveData();
  

    setTimeout(() => {
        select("#doors > .door-container.revealed").hide();
    }, delay2s);

    select("#instruction > .p_continue").hide();

    select("#instruction > p").html(five_text);

    select("#instruction > .choices").show();

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

function checKPhoneCheckbox() {
    const inputNumber = document.querySelector(".input_n3");
    inputNumber.addEventListener("input", function (event) {
        if (this.value.length === 1 && this.value !== "7") {
            this.value = "";
        } else if (this.value.length > 1 && this.value[0] !== "7") {
            this.value = "" + this.value.substring(1);
        }

        if (this.value.length >= 9) {
            this.value = this.value.slice(0, 9);
        } else if (isNaN(this.value)) {
            this.value = "";
        } else {
            event.stopPropagation();
            event.stopImmediatePropagation();
            return false;
        }
    });

    $(".input_check").click(function () {
        let lenChecked = $(".input_check:checked").length;
        if (inputNumber.value.length >= 9 && lenChecked >= 2) {
            $(".btn_send").removeAttr("disabled");
            $(".btn_send").removeClass("disabled");
        } else {
            $(".btn_send").addClass("disabled");
            $(".btn_send").prop("disabled", true);
        }
    });
}

function makeInput() {
    for (let j = 0; j < totalInputs; j++) {
        inputs[j] = createDiv();
        inputs[j].parent("#inputForm");
        inputs[j].index = j;
        inputs[j].class("input-box" + " " + "box_n" + j);

        let make_input = createInput();
        make_input.class("input-input" + " " + "input_n" + j);
        make_input.parent(inputs[j]);
    }

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
     <button type="submit" class="btnNew btn-primary btn_send disabled" disabled id="btn-sendData">Înregistrează-te</button>
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
        maxlength: "40",
    });

    $(".input_n0").attr({
        type: "email",
        id: "email",
        name: "email",
        oninvalid: "this.setCustomValidity('Introdu adresa de email')",
        title: "Introdu adresa de email",
        oninput: "this.setCustomValidity('')",
    });
    $(".input_n1").attr({
        type: "text",
        id: "fname",
        name: "fname",
        oninvalid: "this.setCustomValidity('Introdu Numele')",
        title: "Introdu Numele",
        oninput: "this.setCustomValidity('')",
    });
    $(".input_n2").attr({
        type: "text",
        id: "lname",
        name: "lname",
        oninvalid: "this.setCustomValidity('Introdu Prenumele')",
        title: "Introdu Prenumele",
        oninput: "this.setCustomValidity('')",
    });

    $(".input_n3").attr({
        type: "number",
        name: "phone",
        id: "phone",
        oninvalid: "this.setCustomValidity('Introdu Numarul de Telefon')",
        title: "Introdu Numarul de Telefon",
        oninput: "this.setCustomValidity('')",
    });

    $(".box_n4").addClass("error");

  
    checKPhoneCheckbox();
    const form_q = document.querySelector("#inputForm");
    const emailInput = document.querySelector(".input_n0");

    form_q.addEventListener("submit", function (event) {
        event.preventDefault();

        let emailValue = emailInput.value;
        let xhr = new XMLHttpRequest();
        xhr.open(
            "POST",
            "https://casino-promo.netbet.ro/scripts/api/space/setcode.php"
        );
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");

        let promise = new Promise(function (resolve, reject) {
            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.responseText);
                } else if (xhr.readyState === 4) {
                    reject(xhr.status);
                }
            };
        });

        let details_send =
            `{"email": "` + emailValue + `","code": "` + largeCode + `"}`;
        var registrationVersion = "https://api.netbet.ro/auth/";
        var registrationRedirectionUrl1 = `{/literal}{$link}{literal}&bonuscode=${largeCode}`;

        xhr.send(details_send);

        promise
            .then(function (response) {
                var data = $("#inputForm").serialize();

                data.replace("&is_read_privacy=1", "");
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
                            "#inputForm"
                        );
                    })
                    .catch(function (error) {

                        console.log(error);
                        console.log("fail");
                    });

            })
            .catch(function (error) {
                console.error("Error:", error);
            });
    });
}

var registrationVersion = "https://api.netbet.ro/auth/";
var registrationRedirectionUrl1 = "{/literal}{$link}{literal}";


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
        validateEmail();
    }
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const reGx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = reGx.test(String(email).toLowerCase());

    const emailError = document.getElementById("emailError");
    if (isValid) {
        $("#emailError").css("display", "none")
    } else {
        $("#emailError").css({
            "display": "flex",
            "justify-content": "center",
            "font-size": "1em",
            "margin-bottom": "-3px",
            "margin=top": "0px"
        })
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


        if (Date.now() < end) {
            return requestAnimationFrame(frame);
        }
    })();
}

function setup() {

    noCanvas();
    startInstruction();
    makeDoors();
    startGame();
    makeInput();
    setStars();
    select("button#yes").mousePressed(function () {
        select("#instruction").hide();
        setTimeout(() => {
            chooseDoor(true);
        }, delay1s);
        setTimeout(() => {
            winConfetti();
        }, delay1_5s);
    });
    select("button#no").mousePressed(function () {
        select("#instruction").hide();
        setTimeout(() => {
            chooseDoor(false);
        }, delay1s);
        setTimeout(() => {
            winConfetti();
        }, delay1_5s);
    });
    select("button#yes_continue").mousePressed(function () {
        select("#instruction").hide();
        setTimeout(() => {
            revealDoor();
        }, delay1s);
    });

    select("button#yes_select").mousePressed(function () {
        for (const door of doors) {
            door.style("cursor", "pointer");
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