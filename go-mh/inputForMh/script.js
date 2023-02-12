let privacy_terms =
    "Am citit și accept Termenii și Condițiile și Politica de Confidențialitate.";
let privacy_marketing =
    "Sunt de acord să primesc comunicări de marketing din partea NetBet.";


$(".input-input").attr({
    onfocus: "setFocus(true)",
    onblur: "setFocus(false)",
    required: "required",
    maxlength: "40",
});




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

// const emailInput = document.querySelector(".input_n0");
// const emailError = document.querySelector(".errorDiv_n0");


// const numberInput = document.querySelector('.number-input');
// const numberUpdate = document.querySelector('.errorDiv_n3');

// numberInput.addEventListener('input', inputHandler.bind(null, 'number'));
// emailInput.addEventListener('input', inputHandler.bind(null, 'email'));

// function inputHandler(type, e) {
//     let input = e.target.value;
//     let updateElement;

//     switch (type) {
//         case 'email':
//             updateElement = emailUpdate;
//             if (input && /(^\w.*@\w+.\w)/.test(input)) {
//                 updateElement.textContent = 'Valid Email!';
//                 updateElement.classList.add('success');
//                 updateElement.classList.remove('failure');
//             } else {
//                 updateElement.textContent = 'Keep Going...';
//                 updateElement.classList.remove('success');
//                 updateElement.classList.add('failure');
//             }
//             break;
//         case 'number':
//             updateElement = numberUpdate;
//             if (input && !isNaN(input) && input >= 0 && input <= 100) {
//                 updateElement.textContent = 'Valid Number!';
//                 updateElement.classList.add('success');
//                 updateElement.classList.remove('failure');
//             } else {
//                 updateElement.textContent = 'Keep Going...';
//                 updateElement.classList.remove('success');
//                 updateElement.classList.add('failure');
//             }
//             break;
//     }
// };

const inputNumber = document.querySelector(".input_n3");
const updateNumber = document.querySelector(".errorDiv_n3");

const checkboxPrivacy = document.querySelector(".inp_privacy");
const checkboxMarketing = document.querySelector(".inp_marketing");

const emailInput = document.querySelector('.input_n0');
const updateEmail = document.querySelector('.errorDiv_n0');
const buttonHandler = document.querySelector(".btn_send");
function checKPhoneCheckbox() {
    checkboxMarketing.disabled = true;
    checkboxPrivacy.disabled = true;
    inputNumber.addEventListener("input", function (event) {
        $(".errorDiv_n3").css("visibility", "visible");
        updateNumber.textContent = 'introdu un telefon valid';
        updateNumber.classList.remove('success');
        updateNumber.classList.add('failure');
        if (this.value.length === 1 && this.value !== "7") {
            this.value = "";
            updateNumber.textContent = 'numarul porneste de la 7';
            updateNumber.classList.remove('success');
            updateNumber.classList.add('failure');
        } else if (this.value.length > 0 && this.value[0] === "7") {
            this.value = "7" + this.value.substring(1);
            updateNumber.textContent = 'maxim 9 cifre';
            updateNumber.classList.remove('succes');
            updateNumber.classList.add('failure');
            buttonHandler.disabled = true;
            buttonHandler.classList.add("disabled");
        }
        if (this.value.length >= 9) {
            this.value = this.value.slice(0, 9);
            updateNumber.textContent = 'numar de telefon Valid';
            updateNumber.classList.add('success');
            updateNumber.classList.remove('failure');
            checkboxMarketing.disabled = false;
            // buttonHandler.disabled = false;
            // buttonHandler.classList.remove("disabled");
            if (this.value[0] === "0" && this.value[0] < "7") {
                // this.value = "";
                this.value = this.value.slice(1, 10);
                updateNumber.textContent = 'numarul trebuie sa inceapa cu 7';
                updateNumber.classList.remove('success');
                updateNumber.classList.add('failure');
                checkboxMarketing.disabled = true;
                // buttonHandler.disabled = true;
                // buttonHandler.classList.add("disabled");
            }
        } else if (isNaN(this.value)) {
            alert("test")
            this.value = "";
        } else {
            checkboxMarketing.disabled = true;
            checkboxMarketing.checked = false;
            event.stopPropagation();
            event.stopImmediatePropagation();
            return false;
        }

    });



    emailInput.addEventListener('input', function (e) {
   
        const inputTarget = e.target.value;
        if (inputTarget && /(^\w.*@\w+\.\w)/.test(inputTarget)) {
            updateEmail.textContent = 'format corect, mergi mai departe';
            updateEmail.classList.add('success');
            updateEmail.classList.remove('failure');
            checkboxPrivacy.disabled = false;
            // setTimeout(() => {
            //     select(".errorDiv_n0").style("visibility","hidden");
            // }, 1500);
        } else {
            $(".errorDiv_n0").css("visibility", "visible");
            updateEmail.textContent = "Introdu un mail valid";
            updateEmail.classList.remove('success');
            updateEmail.classList.add('failure');
            checkboxPrivacy.disabled = true;
            checkboxPrivacy.checked = false;
       
            
        }
    });







    const checkbox2 = document.querySelectorAll(".input_check");


    for (let i = 0; i < checkbox2.length; i++) {
        // checkbox2[i].disabled =true;
        checkbox2[i].addEventListener("input", function buttonHandler() {

            const buttonHandler = document.querySelector(".btn_send");
            let lenChecked = $(".input_check:checked").length;

            if (lenChecked === 2) {
                buttonHandler.disabled = false;
                buttonHandler.classList.remove("disabled");
            } else if (lenChecked <= 2) {
                buttonHandler.disabled = true;
                buttonHandler.classList.add("disabled");
            }
             else {
                buttonHandler.disabled = true;
                buttonHandler.classList.add("disabled");
                return
            }
        });
    }

}

// function checkboxHandler(inputValue) {
//     const checkbox = document.querySelector(".input_check");

//     if (inputValue) {
//       checkbox.checked = true;
//     } else {
//       checkbox.checked = false;
//     }
//   }
//   function checkInputs() {

//         $(".btn_send").addClass("test");
//         return;


//   }
//   let buttons = document.querySelector(".btn_send");

//   checkInputs()


//   buttonHandler()

//   $(".input_check").click(function () {
//     buttonHandler();
//   });

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






function setup() {
    checKPhoneCheckbox();
    // makeInput();
    // validateInputNumberEmail();
    // checKPhoneCheckbox()
    // checKPhoneCheckbox()
}