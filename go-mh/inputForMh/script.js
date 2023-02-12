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





const inputNumber = document.querySelector(".input_n3");
const updateNumber = document.querySelector(".errorDiv_n3");

const checkboxPrivacy = document.querySelector(".inp_privacy");
const checkboxMarketing = document.querySelector(".inp_marketing");

const emailInput = document.querySelector('.input_n0');
const updateEmail = document.querySelector('.errorDiv_n0');
const buttonHandler = document.querySelector(".btn_send");




// console.log(largeCode,"test");

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
            console.log(this.value,"test1")
            updateNumber.textContent = 'numarul porneste de la 7';
            updateNumber.classList.remove('success');
            updateNumber.classList.add('failure');
        } else if (this.value.length > 0 && this.value[0] === "7") {
            this.value = "7" + this.value.substring(1);
            console.log(this.value,"test2")
            updateNumber.textContent = 'maxim 9 cifre';
            updateNumber.classList.remove('succes');
            updateNumber.classList.add('failure');
            buttonHandler.disabled = true;
            buttonHandler.classList.add("disabled");
        }
        if (this.value.length >= 9) {
            console.log(this.value,"test3")
            this.value = this.value.slice(0, 9);
            console.log(this.value,"test4")
            updateNumber.textContent = 'numar de telefon Valid';
            updateNumber.classList.add('success');
            updateNumber.classList.remove('failure');
            checkboxMarketing.disabled = false;
            setTimeout(() => {
                select(".errorDiv_n3").style("visibility","hidden");
            }, 1500);
            // buttonHandler.disabled = false;
            // buttonHandler.classList.remove("disabled");
            if (this.value[0] == "0" && this.value[0] < "7") {
                console.log(this.value,"test5")
                // this.value = "";
                this.value = this.value.slice(0, 9);
                console.log(this.value,"test6")
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
         
            setTimeout(() => {
                select(".errorDiv_n0").style("visibility","hidden");
            }, 1500);
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


    var nextStep = document.querySelector('.btn_send');

    nextStep.addEventListener('click', function (e) {
      e.preventDefault();
      // Hide first view
      document.getElementById('inputForm').style.display = 'none';
  
      // Show thank you message element
      document.getElementById('thank_you').style.display = 'flex';
    });

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
 

}