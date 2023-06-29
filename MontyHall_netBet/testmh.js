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

function retriveData() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let codeText = this.responseText;
            console.log(codeText);
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

let _games = [
    "Game of Gladiators Uprising",
    "Dice and Roll",
    "Versailles Gold",
    "Candy Island Princess",
    "Fire Joker",
    "Shining Crown",
];

retriveData();

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
            // buttonHandler.disabled = false;
            // buttonHandler.classList.remove("disabled");
            if (this.value[0] == "0" && this.value[0] < "7") {
                // this.value = "";
                this.value = this.value.slice(0, 9);

                updateNumber.textContent = "numarul trebuie sa inceapa cu 7";
                updateNumber.classList.remove("success");
                updateNumber.classList.add("failure");
                checkboxMarketing.disabled = true;
                // buttonHandler.disabled = true;
                // buttonHandler.classList.add("disabled");
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
        // const inputTarget = event.target.value;
        if (this.value.length === 0) {
            updateName.textContent = "Introdu un nume valid";
            updateName.classList.remove("success");
            updateName.classList.add("failure");
            checkboxPrivacy.disabled = true;
            checkboxPrivacy.checked = false;
        } else if (this.value.length === 1) {
            // $(".errorDiv_n1").css("visibility", "visible");
            updateName.textContent = "nume prea scurt";
            updateName.classList.remove("success");
            updateName.classList.add("failure");
            checkboxPrivacy.disabled = true;
            checkboxPrivacy.checked = false;
        } else if (this.value.length <= 2) {
            // $(".errorDiv_n1").css("visibility", "visible");
            updateName.textContent = "nume valid";
            updateName.classList.add("success");
            updateName.classList.remove("failure");
            // checkboxPrivacy.disabled = false;
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
            setTimeout(() => {
                $(".errorDiv_n2").css("visibility", "hidden");
            }, 1500);
        } else if (this.value.length >= 3) {
            $(".errorDiv_n2").css("visibility", "hidden");
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
            } else {
                buttonHandler.disabled = true;
                buttonHandler.classList.add("disabled");
                return;
            }
        });
    }
}
const form_q = document.querySelector("#inputForm");
// const emailInput = document.querySelector(".input_n0");

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
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject(xhr.status);
                }
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

            console.log(response, "response");
            // Check if the response contains "OK"
            if (response.includes("OK")) {
                console.log(response.includes("OK"), "response.includes");
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
            } else {
                $("#emailError").text("Adresa de e-mail este deja folosită.")
                    .css({
                        display: "flex",
                        "justify-content": "center",
                        "font-size": "1em",
                        "margin-bottom": "-3px",
                        "margin-top": "0px",
                    });
                // Handle the case when the response is not "OK"
                console.log(response, "Response is not OK");
            }
        })
        .catch(function (error) {
            console.error("Error:", error);
            $("#emailError").text("Adresa de e-mail este deja folosită.")
                .css({
                    display: "flex",
                    "justify-content": "center",
                    "font-size": "1em",
                    "margin-bottom": "-3px",
                    "margin-top": "0px",
                });
        });
});


console.log("goodss");

// var registrationVersion = "https://api.netbet.ro/auth/";
// var registrationRedirectionUrl1 = "{/literal}{$link}{literal}";

// function setPrefilledRegistrationData(
//     registrationVersion,
//     registrationRedirectionUrl,
//     formId
// ) {
//     var form = $("#inputForm");
//     if (form.length > 0) {
//         var formData = form.serializeArray();
//         var data = {};
//         data.website = "casino";
//         data.lang = "ro";
//         data.country = "{$countryCode}";
//         data.device = "desktop";
//         $.each(formData, function (key, val) {
//             data[val.name] = val.value;
//         });

//         delete data.is_read_privacy;
//         delete data.mkt;

//         $.ajax({
//             url: registrationVersion + "setPrefilledRegistrationData",
//             method: "POST",
//             data: data,
//             xhrFields: {
//                 withCredentials: true,
//             },
//             crossDomain: true,
//             success: function () {
//                 location.href = registrationRedirectionUrl;
//             },
//         });
//     }
// }

function displayBtn() {
    select("#mask_modal").addClass("active");
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


function setup() {

    checKPhoneCheckbox();
    displayBtn()
}
//   