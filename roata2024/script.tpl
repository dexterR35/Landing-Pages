{literal}
<script>
  console.log("start main script");

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      // console.log(randomIndex, "randomIndex");
      currentIndex--;
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const _boxContainer = $("._boxContainer");
  const _pinImg = $("._pin img");
  const mainBox = $("#mainbox");
  let buttonPressed = false;
  let buttonClicked = false;
  let containerAppended = false;
  let prizePool = "200";

  // console.log(buttonPressed, "start");

  function updateTextBody(text, subtext) {
    $("._tText").text(text);
    $("._tText_s").text(subtext);
  }

  function spin() {
    if (buttonPressed) {
      return;
    }

    buttonPressed = true;
    // console.log(buttonPressed, "spin");

    wheel.play();

    let SelectedItem = "";
    let prizes = shuffle([2845, 2484, 2845]); // only 400 prize from bgwheel >  360deg >2484->200   2773>400
    let Result = [prizes[0]];
    // console.log(Result);
    if (prizes.includes(Result[0])) SelectedItem = prizePool;

    _boxContainer.css("transition", "all ease 5s");
    _boxContainer.css("transform", "rotate(" + Result[0] + "deg)");

    setTimeout(function () {
      _pinImg.addClass("animate");
      buttonPressed = true;
    }, 100);
    setTimeout(function () {
      you_win.play();
    }, 4500);
    setTimeout(function () {
      _pinImg.removeClass("animate");
    }, 5000);

    setTimeout(function () {
      winningLarge.play();

      showModal("scenario1");

      // set initial rotation of the wheel after complete animation
      _boxContainer.css("transition", "all ease 5s");
      _boxContainer.css("transform", "rotate(" + Result[0] + "deg)");
    }, 5500);
  }

  function showModal(scenario) {
    startConfetti();
    let buttonsConfig = {};
    if (scenario === "scenario1" || scenario === "scenario2") {
      if (buttonClicked) {
        return;
      }
      buttonClicked = false;
      if (scenario === "scenario2") {
        buttonsConfig = {
          handleBtnClick: function () {
            stopConfetti();
            window.location.href = "{/literal}{$link}{literal}";
          },
        };
      } else {
        buttonsConfig = {
          handleBtnClick: function () {
            $("body").addClass("sc2");
            $(".wrapp-all").css("backdrop-filter", "unset");

            bonusWin.play();
            $("#customModal").fadeOut("fast", function () {
              $(this).remove();
              stopConfetti();
            });

            setTimeout(function () {
              $("._hR").fadeOut("fast", function () {
                $(this).remove();
                bonusWin.play();
                setTimeout(addNewDivContainer, 650);
              });
              $("._hH").fadeOut("fast");
            }, 1000);
          },
        };
      }
    }
    let imgForModal = `
  <img class="modalImg" src="{/literal}{$asset}/png/elements/support_text3.webp{literal}"/>
`;
    let contentOfferLines =
      scenario === "scenario1"
        ? `
          <div class="m_line1">ai câștigat</div>
          <div class="m_line2">${prizePool} rotiri</div>
          <div class="m_line3">gratuite</div>
       `
        : scenario === "scenario2"
        ? `
      <div class="m_line1">
      <div>ÎNREGISTREAZĂ-TE ACUM</div>
      <div>ȘI PROFITĂ DE PREMIUL TĂU!</div>
    </div>
    <div class="flexScenario">
        <div class="offerPart1 _of">
          <div class="badge" data-label="Fără Depunere">
            <div class="c_badge">
              <div>Fără</div>
              <div>Depunere</div>
              <div></div>
            </div>
          </div>

          ${imgForModal}
          <div class="m_line2">
            <div>ROTIRI</div>
            <div>gratis</div>
            <div>${prizePool}</div>
          </div>
        </div>
        <div class="offerPart2 _of">
          ${imgForModal}
          <div class="m_line2">
            <div>bonus DE</div>
            <div>BUN VENIT</div>
            <div>1500 RON</div>
            <div>${prizePool} Rotiri</div>
          </div>
        </div>
    </div>`
        : "";

    let modalContent = `
       <div class="modal-dialog" >
        ${scenario !== "scenario2" ? imgForModal : ""}
         <div class="modal-content ${scenario}">
            <div class="modal-body" id="modalContent">
              <div class="modal-title" id="modalTitle">Felicitări!</div>
              <div class="content-offer ${scenario}">
              ${contentOfferLines}
              </div >
            </div>
          </div>
        
       </div>
       <div class="modal-footer" id="modalFooter"></div>`;

    let modal = $("<div>", {
      class: `modalNB ${scenario}`,
      id: "customModal",
      style: "display: flex;",
      role: "dialog",
      "aria-labelledby": "modalTitle",
      "aria-describedby": "modalContent",
    })
      .html(modalContent)
      .appendTo(".hero")
      .fadeIn("fast");

    for (let buttonLabel in buttonsConfig) {
      if (buttonsConfig.hasOwnProperty(buttonLabel)) {
        $("<button>", {
          class: "_btn btnNew btn-primary",
          text: scenario === "scenario1" ? "continuă" : "Înregistrează-te",
          click: buttonsConfig[buttonLabel],
          disabled: buttonClicked,
        }).appendTo("#modalFooter");
        // console.log(buttonPressed, "btncfg");
      }
    }
    modal.focus();
  }

  $(document).ready(function () {
    $("#_terms").hide();
    $("#_open").click(function () {
      $(".terms_modal").slideDown(function () {
        $("body").addClass("modal-open");
        $(".terms_body").animate({ scrollTop: 0 }, "fast");
      });
    });

    $(".terms_header h2 , ._close").click(function () {
      $(".terms_modal").slideUp(function () {
        $("body").removeClass("modal-open");
      });
    });

    $("body").removeClass("sc2");
    // $("#headerId").load("./header.html");

    $(".clipPath").each(function (index) {
      let rotationAngle = -14 + index * 36;
      // console.log(rotationAngle, "rotationAngle");
      _boxContainer.css("transform", "rotate(144deg)");
      $(this).css("transform", "rotate(" + rotationAngle + "deg)");
    });
    updateTextBody("ÎNVÂRTE ROATA ȘI IA-NE", "rundele gratuite");
  });
</script>
{/literal}
