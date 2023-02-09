const inputs = [];
let totalInputs = 5;

let privacy_terms =
    "Am citit și accept Termenii și Condițiile și Politica de Confidențialitate.";
let privacy_marketing =
    "Sunt de acord să primesc comunicări de marketing din partea NetBet.";

function makeInput() {
    for (let j = 0; j < totalInputs; j++) {
        inputs[j] = createDiv();
        inputs[j].parent("#inputForm");
        inputs[j].index = j;
        inputs[j].class("input-box" + " " + "box_n" + j);

        let make_input = createInput();
        make_input.class("input-input" + " " + "input_n" + j);
        make_input.parent(inputs[j]);

        let errorDiv = createDiv();
        errorDiv.class("errorDiv" + " " + "errorDiv_n" + j);
        errorDiv.parent(inputs[j])
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
    // $(".box_n0").append(`<div class="updateError"></div>`);
    // const inputNumber = document.querySelector(".input_n3");
    // inputNumber.addEventListener("input", function (event) {
    //   if (this.value.length === 1 && this.value !== "7") {
    //     this.value = "";
    //   } else if (this.value.length > 1 && this.value[0] !== "7") {
    //     this.value = "" + this.value.substring(1);
    //   }
    // });

    // const input_max = document.querySelector(".input_n3");
    // input_max.addEventListener("input", function (events) {
    //   if (this.value.length >= 9) {
    //     return (this.value = this.value.slice(0, 9));
    //   } else if (isNaN(this.value)) {
    //     this.value = "";
    //   } else {
    //     events.stopPropagation();
    //     events.stopImmediatePropagation();
    //     return false;
    //   }
    // });

    // $(".input_check").click(function () {
    //   let lenChecked = $(".input_check:checked").length;
    //   if (lenChecked >= 2) {
    //     $(".btn_send").removeAttr("disabled");
    //     $(".btn_send").removeClass("disabled");
    //   } else {
    //     $(".btn_send").addClass("disabled");
    //     $(".btn_send").prop("disabled", true);
    //   }
    // });


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

    }
}

//   function validateEmail() {
//     const email = document.getElementById("email").value;
//     const reGx =
//       /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     const isValid = reGx.test(String(email).toLowerCase());

//     const emailError = document.getElementById("emailError");
//     if (isValid) {
//       $("#emailError").css("display", "none");
//     } else {
//       $("#emailError").css({
//         display: "flex",
//         "justify-content": "center",
//         "font-size": "1em",
//         "margin-bottom": "-3px",
//         "margin=top": "0px",
//       });
//     }
//   }

const emailInput = document.querySelector(".input_n0");
const emailError = document.querySelector(".errorDiv_n0");


const numberInput = document.querySelector('.number-input');
const numberUpdate = document.querySelector('.errorDiv_n3');

numberInput.addEventListener('input', inputHandler.bind(null, 'number'));
emailInput.addEventListener('input', inputHandler.bind(null, 'email'));

function inputHandler(type, e) {
    let input = e.target.value;
    let updateElement;

    switch (type) {
        case 'email':
            updateElement = emailUpdate;
            if (input && /(^\w.*@\w+.\w)/.test(input)) {
                updateElement.textContent = 'Valid Email!';
                updateElement.classList.add('success');
                updateElement.classList.remove('failure');
            } else {
                updateElement.textContent = 'Keep Going...';
                updateElement.classList.remove('success');
                updateElement.classList.add('failure');
            }
            break;
        case 'number':
            updateElement = numberUpdate;
            if (input && !isNaN(input) && input >= 0 && input <= 100) {
                updateElement.textContent = 'Valid Number!';
                updateElement.classList.add('success');
                updateElement.classList.remove('failure');
            } else {
                updateElement.textContent = 'Keep Going...';
                updateElement.classList.remove('success');
                updateElement.classList.add('failure');
            }
            break;
    }
};

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
        if (inputNumber.value.length == 9 && lenChecked == 2) {
            $(".btn_send").removeAttr("disabled");
            $(".btn_send").removeClass("disabled");
        } else if (inputNumber.value.length < 9 && lenChecked == 2) {
            $(".input_check").prop("checked", false);
            $(".btn_send").addClass("disabled");
            $(".btn_send").prop("disabled", true);
        } else {
            $(".btn_send").addClass("disabled");
            $(".btn_send").prop("disabled", true);
        }
    });
}

function setup() {
    makeInput();
    checKPhoneCheckbox()
}