

    const inputName = document.querySelector(".input_n1");
    const updateName = document.querySelector(".errorDiv_n1");
  
    const inputLastName = document.querySelector(".input_n2");
    const updateLastName = document.querySelector(".errorDiv_n2");
  
    const inputNumber = document.querySelector(".input_n3");
    const updateNumber = document.querySelector(".errorDiv_n3");
  
    const checkboxPrivacy = document.querySelector(".inp_privacy");
    const checkboxMarketing = document.querySelector(".inp_marketing");
  
    const emailInput = document.querySelector(".input_n0");
    const updateEmail = document.querySelector(".errorDiv_n0");
  
    const buttonHandler = document.querySelector(".btn_send");
  
    function checKPhoneCheckbox() {
      checkboxMarketing.disabled = true;
      checkboxPrivacy.disabled = true;
  
      inputNumber.addEventListener("input", function (event) {
        $(".errorDiv_n3").css("visibility", "visible");
        updateNumber.textContent = "introdu un telefon valid";
        updateNumber.classList.remove("success");
        updateNumber.classList.add("failure");
        if (this.value.length === 1 && this.value !== "7") {
          this.value = "";
          updateNumber.textContent = "numarul porneste de la 7";
          updateNumber.classList.remove("success");
          updateNumber.classList.add("failure");
        } else if (this.value.length > 0 && this.value[0] === "7") {
          this.value = "7" + this.value.substring(1);
          updateNumber.textContent = "maxim 9 cifre";
          updateNumber.classList.remove("succes");
          updateNumber.classList.add("failure");
          buttonHandler.disabled = true;
          buttonHandler.classList.add("disabled");
        }
        if (this.value.length >= 9) {
          this.value = this.value.slice(0, 9);
          updateNumber.textContent = "numar de telefon Valid";
          updateNumber.classList.add("success");
          updateNumber.classList.remove("failure");
          checkboxMarketing.disabled = false;
          setTimeout(() => {
            $(".errorDiv_n3").css("visibility", "hidden");
          }, 1500);
  
          if (this.value[0] == "0" && this.value[0] < "7") {
            // this.value = "";
            this.value = this.value.slice(0, 9);
            updateNumber.textContent = "numarul trebuie sa inceapa cu 7";
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
  
      emailInput.addEventListener("input", function (e) {
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
  console.log("222222222222");
    checKPhoneCheckbox();
