{block name="add_char"}

<div id="comets"></div>
<div id="satelit"></div>

<div class="wrapper-all">
  <div id="instruction" style="z-index: 120; visibility: hidden">
    <!-- <div id="instr_text"></div> -->
    <p></p>
    <div class="start_game" style="z-index: 10">
      <button id="start_game" class="btnNew btn_startGame pulse_btn">
        Începe jocul
      </button>
    </div>
    <div class="select_door" style="z-index: 10">
      <button id="yes_select" class="btnNew btn_continue pulse_btn">
        alege o ușă...
      </button>
    </div>
    <div class="p_continue" style="z-index: 10">
      <button id="yes_continue" class="btnNew btn_continue pulse_btn">
        OK! MAI DEPARTE
      </button>
    </div>
    <div class="choices">
      <button id="yes" class="btnNew btn_choices btn_yes pulse_btn">Da</button>
      <button id="no" class="btnNew btn_choices btn_no pulse_btn">NU</button>
    </div>
    <button id="play-again" class="btnNew" style="display: none">
      Joacă din Nou
    </button>
  </div>
  <main id="app" class="app-main">
    <div id="doors"></div>
  </main>
</div>
<div class="mask" role="dialog" id="mask_modal"></div>
<div class="modal-input" role="alert">
  <div class="container-input">
    <form id="inputForm" method="post">
      <h2 class="h2-input">ÎNREGISTREAZĂ-TE ȘI REVENDICĂ PREMIUL</h2>
      <h4 id="emailError" style="display: none; color: red">
        Format incorect, introdu o adresă de email validă.
      </h4>
    </form>
  </div>
  <button class="close-modal" role="button" style="display: none">X</button>
</div>
{/block} {block name="offer_css"}

<style>
  @media (orientation: landscape) and (min-width: 992px) {
    .char {
      top: unset;
      position: unset;
      left: unset;
      z-index: unset;
      height: unset;
    }
  }

  .game-box,
  .steps {
    pointer-events: none !important;
  }

  .offer {
    display: none;
  }

  .cta-button {
    display: none !important;
  }

  button {
    cursor: pointer;
    font-family: "Play", sans-serif;
  }

  header {
    height: 4.11em !important;
  }

  /* .wrapper-all h1 {
    width: 100vw;
  } */
  header .bottom {
    display: none !important;
  }
  .banner > img {
    pointer-events: none;
  }

  .container-hero {
    height: 86vh;
    max-width: 1200px;
    min-width: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0 auto;
  }

  .cta-button.mobile {
    display: none;
  }

  .promo-text {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .splash-screen {
    z-index: 250;
  }

  .char {
    z-index: 2;
  }
  .input-box.box_n4.error {
      display:none;
  }
  .char.onmobile {
    display: none;
  }

  footer {
    opacity: 1 !important;
  }

  .promo-text > .inner > span {
    color: #ffd101 !important;
  }

  .cta-button {
    font-size: 1.9vh !important;
    padding: 0 1.5em;
    margin-top: 0.2em;
    margin-bottom: 0.5em;
    text-align: center;
    display: flex;
    justify-content: center;
    box-shadow: inset 0px 0px 18px 2px rgb(245 86 60 / 56%),
      0px 0px 18px 5px rgb(170 39 0 / 35%);
  }

  header {
    z-index: 200;
  }

  .promo-text {
    position: relative;
  }

  .swiper-slide {
    margin-right: 1px !important;
  }

  .promo-text {
    text-transform: uppercase;
  }

  .steps {
    z-index: 199 !important;
  }

  .steps .separator {
    margin-right: 15px;
  }

  .promo-text,
  .below-fold {
    z-index: 140;
  }

  @font-face {
    font-family: "CROWDEN";
    font-weight: normal;
    font-style: normal;
    src: url("{$asset}/fonts/CROWDEN-Regular.ttf") format("truetype");
  }

  :root {
    /* --orange: #f89e4f; */
    --button_color: #ff4c16;
    --modal-input: #333743;
    --modal-inputBg: #dbdbdb;

    --bg-white: #fff;
    --color-white: #fff;

    --border-input: #dadce0;
    --border-inputFocus: #1adae8;
    --border-error: #ff4c16;
    --border-active: #0abaff;
    /* --red: #f16164; */

    --h1-title: #ff4c16;

    --color-focusText: #333743;

    --neon-text-color: rgb(234, 238, 20);
    --neon-border-color: #08f;

    --transition-mask: 0.5s ease-out;
    --transition-input: ease 250ms;

    --letter_door: azure;
    --letter_pause: azure;

    --bg-doorInside: url({$asset}/img/INSIDE_V8.png);
    --bg-desktop: url({$asset}/bg-desktop.jpg);
    --bg-openDoor: url({$asset}/img/door_open2.png);

    --iFrame-doorLeft: url({$asset}/img/door_left2.png);
    --iFrame-doorCenter: url({$asset}/img/door_center3.png);
    --iFrame-doorRight: url({$asset}/img/door_right2.png);

    --img-speachBubble: url({$asset}/img/speachBubble.png);
    --img-astronaut: url({$asset}/img/astronaut2.png);
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body {
    background-color: #fff;
  }

  .letter-door {
    font-family: "CROWDEN" !important;
  }
  .input_n4 {
    display: none !important;
  }
  .copy-message {
    position: absolute;
    color: #a5a5a5;
    top: 14px;
    right: 12px;
  }
  .box_n4.error {
    cursor: pointer;
  }
  /* 
  body::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: var(--bg-desktop);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    z-index: -1;
    animation: f-universe 30s infinite alternate linear 0.5s;
  } */

  .wrapper-all {
    width: 100%;
    max-width: 1200px;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 1fr;
    place-content: center;
    place-items: center;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .wrapper-all:not(.input_n4) {
    -webkit-user-select: text !important;
    -ms-user-select: text !important;
    user-select: text !important;
  }
  @keyframes f-universe {
    0% {
      transform: translateX(0px) scale(1) rotate(0deg);
    }

    100% {
      transform: translateX(-100px) scale(1.2) rotate(0deg);
    }
  }

  .pulse_btn {
    animation: pulse_btn 1500ms ease infinite;
  }
  @keyframes pulse_btn {
    0% {
      box-shadow: 0 0 0 4px #ffffff;
    }
    100% {
      box-shadow: 0 0 0 7px #ffffff00;
    }
  }

  .app-main {
    width: 100%;
    max-width: 1200px;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    color: white;
    z-index: 100;
    position: fixed;
  }

  #doors {
    display: flex;
    gap: 2em;
    position: relative;
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s ease;
  }

  #doors.doorNon-Active {
    opacity: 0.9;
  }

  .door-container {
    width: 27vh;
    position: relative;
    background-size: 61%;
    z-index: 10;
    cursor: pointer;
  }

  .shadow {
    cursor: default !important;
  }

  .door-container,
  .door-container:before,
  .door-container::after {
    height: 50vh;
    max-height: 50vh;
    background-position: center bottom;
    background-repeat: no-repeat;
  }

  .door-container.open::before {
    transition: var(--transition-mask);
    background-position: 0% bottom;
  }

  .letter-door {
    position: absolute;
    bottom: 18px;
    left: 0;
    width: 100%;
    /* transform: translate(0px, -0.5em); */
    display: flex;
    justify-content: center;
    align-items: flex-end;
    /* cursor: pointer; */
    z-index: 2;
    font-size: 3.7vh;
    color: rgb(20, 89, 116);
    /* text-shadow: 0 0 0 transparent, 0 0 1px #dcf1ff, 0 0 20px rgb(0 195 255 / 50%), 0 0 4px #c2e3d5, 0 0 4px #ddfff9, 0 0 10px #2fb6bf94, 0 0 3px #29d0d9a9, 0 0 4px #168cad, 0 0 41px #12617e; */
  }

  .letter-door.light {
    text-shadow: 0 0 0 transparent, 0 0 1px #dcf1ff,
      0 0 20px rgb(0 195 255 / 50%), 0 0 4px #c2e3d5, 0 0 4px #ddfff9,
      0 0 10px #2fb6bf94, 0 0 3px #29d0d9a9, 0 0 4px #168cad, 0 0 41px #12617e;
  }

  .letter-door.open {
    transition: var(--transition-mask);
    transform: translate(-0.45em, -2.6em);
    font-size: 6.6vh;
    color: var(--letter_door);
  }

  .letter-door.pause {
    transition: var(--transition-mask);
    transform: translate(0em, -2.6em);
    font-size: 6.6vh;
    color: var(--letter_pause);
  }

  .letter-door.pause.revealed {
    /* display: none; */
    transform: translate(0em, -2.6em);
  }

  .letter-door.revealed {
    transition: var(--transition-mask);
    transform: translate(0em, -2.6em);
  }

  .letter-door.revealed.rev_open {
    opacity: 1;
  }

  .door-container.revealed::before {
    transition: var(--transition-mask);
    background-position: -250% bottom;
    cursor: default;
  }

  .door-container.revealedNone {
    display: none;
  }

  .door-container.revealed {
    animation: hidden-door 0.65s 1.1s linear forwards;
  }

  .door-container.revealed.won,
  .door-container.rev_open,
  .door-container.stayClose.revealed {
    animation: unset;
  }

  /*for yes switch button*/
  /* .door-container.stayClose.revealed .letter-door.stayClose {
opacity: 1;
} */
  .door-container.stayClose.revealed.won .letter-door.stayClose {
    display: none;
    opacity: 0;
    /* background-color: red; */
  }

  /* .door-container.open.rev_open.revealed .letter-door.light.open.revealed {
  transform: translate(0em, -2.6em);
} */

  /*for no switch button*/
  /* .door-container.stayClose.picked.revealed.won .letter-door.light.pause.won.stayClose.revealed {
  opacity: 0;
} */
  .door-container.picked.revealed.won .letter-door.rev_open {
    display: none;
    transform: translate(0em, -2.6em);
    opacity: 0;
    /* background-color: blue; */
  }

  /* .door-container.picked.open .rev_open.revealed.won {
  background-position: -250% bottom;
} */

  @keyframes hidden-door {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  .door-container.open.revealed.rev_open::before {
    transition: var(--transition-mask);
    background-position: center bottom;
  }

  .door-container.stayClose.revealed::before {
    transition: var(--transition-mask);
    background-position: center bottom;
  }

  /* .door-container.open.revealed::before {
  transition: var(--transition-mask);
  background-position: -100% center;
} */
  .door-container.open.revealed.rev_open.won::before {
    transition: var(--transition-mask);
    background-position: -250% bottom;
  }

  .door-container.stayClose.picked.revealed.won::before {
    transition: var(--transition-mask);
    background-position: -250% bottom;
  }

  .door-container::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background-image: var(--bg-openDoor);
    background-size: 75.5%;
    background-position: center bottom;
    z-index: 0;
    clip-path: polygon(
      8% 88%,
      9% 10%,
      3% 0%,
      100% 0%,
      97% 0%,
      97% 87%,
      97% 100%,
      100% 100%,
      77% 100%,
      38% 100%,
      6% 100%,
      6% 90%
    );
  }

  .door-container::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background-size: contain;
    z-index: 0;
  }

  .door-container:nth-child(1)::after {
    background-image: var(--iFrame-doorLeft);
  }

  .door-container:nth-child(2)::after {
    background-image: var(--iFrame-doorCenter);
  }

  .door-container:nth-child(3)::after {
    background-image: var(--iFrame-doorRight);
  }

  .door {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    /* cursor: pointer; */
    z-index: -2;
    font-size: 2rem;
    color: rgb(20, 89, 116);
    text-shadow: 0 0 0 transparent, 0 0 1px #0099ff,
      0 0 20px rgb(0 195 255 / 50%), 0 0 4px #c2e3d5, 0 0 4px #61ddab,
      0 0 10px #0bd2e07e, 0 0 3px #29d0d9a9, 0 0 4px #0082a7, 0 0 41px #12547e;
  }

  .door::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 76%;
    background-position: center bottom;
    z-index: -1;
    background-image: var(--bg-doorInside);
  }

  .door-container.picked {
    transform: scale(1.04);
    transition: var(--transition-input);
  }

  .content {
    position: absolute;
    padding: 2em;
    top: 3.8vh;
    left: -0.35vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    font-size: 3.4vh;
    /* line-height: 0.8; */
    z-index: -1;
    color: rgb(8, 28, 83);
    text-transform: uppercase;
    font-weight: bold;
    text-shadow: 0 0 0 transparent, 0 0 1px #e1dcff,
      0 0 20px rgb(133 253 255 / 96%), 0 0 4px #e8fbff, 0 0 4px #ccf1ff,
      0 0 10px #5de7f0a3, 0 0 3px #5ee5eca9, 0 0 4px #79e3ff, 0 0 41px #d8e5ea;
  }

  .content-l1 {
    font-size: 1.5em;
    margin-bottom: -0.3em;
  }

  .content-l2 {
    font-size: 0.75em;
  }

  .content-l3 {
    margin-top: -0.3em;
    font-size: 0.52em;
  }

  .BonusCodeText .line-two .content-l1,
  .BonusCodeText .line-two .content-l2,
  .BonusCodeText .line-two .content-l3 {
    margin-right: 5px;
    margin-bottom: unset;
    font-size: unset;
    /* margin: unset; */
  }

  .content::after {
    position: absolute;
    content: "";
    width: 60%;
    height: 30%;
    /* background-color: red; */
    border-radius: 1em;
    left: 50%;
    top: 51%;
    transform: translate(-50%, -50%);
    z-index: -1;
    background: rgba(255, 255, 255, 0.149);
    border-radius: 25px;
    filter: blur(2px);
    opacity: 0.9;
    backdrop-filter: blur(1px);
    box-shadow: rgb(0 0 0 / 20%) 0px 12px 46px, rgb(0 0 0 / 20%) 0px 12px 22px,
      inset rgb(255 255 255 / 10%) 0px -10px 20px -5px,
      inset rgb(255 255 255 / 50%) 0px -1px 1px -1px;
  }

  .shadow {
    width: 24vh;
    height: 60%;
    position: relative;
    display: flex;
    border-radius: 2px;
    z-index: -1;
    justify-content: flex-end;
    background-color: rgba(12, 12, 12, 0.493);
    background: #1b1b1b;
    background: linear-gradient(to bottom, #0000009d 0%, #1b1b1b6e 70%);
    filter: blur(5px);
    perspective: 1000px;
    perspective-origin: 3d;
  }

  .shadow_n_0 {
    transform: skewX(-45deg) translateX(-14vh) translateY(-1vh);
  }

  .shadow_n_1 {
    transform: skewX(-5deg) translateX(0px) translateY(-1vh);
  }

  .shadow_n_2 {
    transform: skewX(45deg) translateX(17vh) translateY(-1vh);
  }

  .light_door {
    position: absolute;
    top: 1%;
    left: 3%;
    width: 29vh;
    height: 45vh;
    z-index: 10;
    animation: blink 3s infinite alternate linear;
  }

  .light_door::after {
    content: "MM";
    position: absolute;
    color: #e8d5cba8;
    transform: perspective(0.9em) rotateX(32deg) translateY(100%);
    filter: blur(7px);
    z-index: 11;
    top: -1%;
    left: 28%;
    width: 30%;
    height: 4%;
    background: rgba(255, 255, 255, 0.9) !important;
    font-size: 3rem;
    display: flex;
    justify-content: center;
  }

  .light_n_door0 {
    left: -5%;
    animation-delay: 1s;
  }

  .light_n_door1 {
    animation-delay: 2s;
  }

  .light_n_door2 {
    left: 14%;
    animation-delay: 4s;
  }

  .bar_light {
    position: absolute;
    top: 15.5%;
    left: 9%;
    width: 5px;
    height: 74%;
    background-color: #ffffffd9;
    color: #d4eaff;
    z-index: 20;
    animation: buzz 0.09s infinite alternate;
    transform: rotate(0.2deg);
    box-shadow: inset 0px 0px 19px 9px rgb(240, 240, 240),
      10px 0px 19px 5px rgba(245, 94, 24, 0.57);
  }

  @keyframes buzz {
    70% {
      opacity: 0.8;
    }
  }

  .bar_n_light1 {
    left: 7%;
  }

  .bar_n_light1::after {
    content: "";
    position: absolute;
    background-color: #ffffffd9;
    color: #d4eaff;
    left: 22.7vh;
    top: 0.2vh;
    width: 5px;
    height: 99%;
    z-index: 20;
    transform: rotate(-180deg);
    box-shadow: inset 0px 0px 19px 9px rgb(240, 240, 240),
      10px 0px 19px 5px rgba(245, 94, 24, 0.57);
  }

  .bar_n_light2 {
    right: 8.5%;
    left: unset !important;
    transform: rotate(-180.1deg);
  }

  @keyframes blink {
    40% {
      opacity: 1;
    }

    42% {
      opacity: 0.8;
    }

    43% {
      opacity: 1;
    }

    45% {
      opacity: 0.2;
    }

    46% {
      opacity: 1;
    }
  }

  #instruction {
    margin: 2rem 0;
    background-image: var(--img-speachBubble);
    width: 57vh;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center;
    position: fixed;
    left: 24%;
    top: -26%;
    background-size: contain;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    /* z-index: 104; */
  }

  #instruction::after {
    content: "";
    position: absolute;
    top: 37vh;
    left: -63%;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: var(--img-astronaut);
    background-repeat: no-repeat;
    background-position: left;
    background-size: 70%;
  }

  #instr_text {
    width: 50%;
    text-align: center;
  }

  #instruction > p {
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.8vh;
    margin: 2em auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    height: 100px;
  }

  #instruction > .choices,
  #instruction > p,
  #instruction > #play-again,
  #instruction > .start_game,
  .p_continue,
  .select_door {
    transform: translateX(18px) translateY(-10px);
  }

  #instruction > .choices {
    text-align: center;
  }

  #instruction > #play-again,
  #instruction > .choices {
    z-index: 40;
  }

  #instruction > .choices > button:last-child {
    margin-left: 1rem;
    z-index: 20;
  }

  /* text instruction */
  /* text instruction */

  .first_text_t1,
  .first_text_t3,
  .first_text_t5,
  .second_text_t5 {
    font-size: 1.8em;
  }

  .second_text_t1,
  .second_text_t2,
  .second_text_t3 {
    font-size: 1.5em;
  }

  .first_text_t2 {
    margin-top: 5px;
  }

  .first_text_t2,
  .third_text_t5 {
    font-size: 1.3em;
  }

  .door {
    position: relative;
  }

  .sign {
    position: relative;
    background: none;
    color: #303030;
    font-size: 5rem;
    display: inline-block;
  }

  .container-input {
    width: 100%;
    padding: 1em;
  }

  .h2-input {
    color: #000000 !important;
    text-transform: uppercase;
    font-weight: bold;
    margin: 10px 0 12px auto;
    text-align: center;
    font-size: 1.1em;
  }

  .h3-input {
    color: black;
  }

  .BonusCodeText {
    color: black;
    text-align: center;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    font-size: 1.6em;
    flex-direction: column;
    font-weight: bold;
    margin: auto;
    max-width: 21em;
  }
  .BonusCodeText,
  .h2-input {
    user-select: none;
  }
  .span_code_input,
  .span_game_input {
    color: var(--button_color);
  }

  .BonusCodeText .line-one {
    font-size: 1.1em;
    padding: 0 0 3px 0;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  /* .BonusCodeText .line-two {

  } */
  .BonusCodeText .line-three {
    font-size: 1.1em;
  }

  #inputForm {
    width: 35em;
    max-width: 600px;
    padding: 0.5em 1em;
    margin: 0 auto;
  }

  @media screen and (max-width: 650px) {
    #inputForm {
      width: 100%;
    }
  }

  .input-box.active-grey .input-input {
    border: 1px solid #dadce0;
  }

  .input-box.active-grey .input-label {
    color: #80868b;
    top: -8px;
    background: #fff;
    font-size: 11px;
  }

  .input-box.active-grey .input-label svg {
    position: relative;
    width: 11px;
    height: 11px;
    top: 2px;
  }

  .input-box {
    position: relative;
    margin: 20px 0;
  }

  .input-box .input-label {
    position: absolute;
    color: azure;
    font-size: 0.9em;
    font-weight: 400;
    max-width: calc(100% - (2 * 8px));
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform: capitalize;
    left: 8px;
    top: 17px;
    padding: 0 8px;
    user-select: none;
    pointer-events: none;
  }

  .input-box .input-label,
  .input-box.active-grey .input-label,
  .input-box .input-input,
  .input-box .input-input:focus,
  .input-box.error .input-label,
  .input-box.focus .input-label,
  .input-box.active .input-label {
    transition: var(--transition-input);
  }

  .input-box .input-input {
    height: auto;
    width: 100%;
    border-radius: 7px;
    color: azure;
    border: 1px solid var(--border-input);
    padding: 13px 15px;
    font-size: 1.1em;
    font-weight: bold;
  }

  .input-box .input-input:focus {
    outline: none;
    border: 1px solid var(--border-inputFocus);
  }

  .input-box.error .input-label {
    color: var(--color-focusText);
    top: -14px;
    font-size: 12px;
    font-weight: bold;
    /* z-index: -1; */
  }

  .input-box.error .input-input {
    border: 1px solid var(--border-error);
    background: var(--color-focusText);
  }

  .input-box.focus .input-label,
  .input-box.active .input-label {
    color: var(--color-focusText);
    top: -14px;
    /* background: var(--bg-white); */
    font-size: 12px;
    z-index: -1;
    font-weight: bold;
  }

  .input_n3 {
    position: relative;
    overflow: hidden;
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
  }

  .input-box.box_n3 {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row-reverse;
  }

  .input_n4 {
    color: var(--color-white) !important;
  }

  /* .input-box.box_n3 .input-label {
    padding: 0 40px;
  } */
  /* .input-input.input_n3 {
    padding: 13px 10px 13px 20%;
  } */
  .input-box.active .input-input {
    border: 2px solid var(--border-active);
  }

  .input-input::placeholder {
    font-size: 1.1em;
    text-transform: uppercase;
    color: azure;
    font-weight: bold;
  }

  .phone-group {
    display: flex;
    position: relative;
    /* overflow: hidden; */
  }

  .phone-prefix {
    display: flex;
    width: 6em;
    position: relative;
    align-items: center;
    justify-content: center;
    height: 46px;
    min-height: 46px;
    color: #000000;
    z-index: 12;
  }

  .phone-prefix::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    /* border-radius: 1.25em; */
    border: 1px solid var(--modal-input);
    width: 100%;
    height: 100%;
    background-color: var(--modal-inputBg);
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
  }

  .phone-prefix-content {
    position: relative;
    z-index: 1;
    font-size: 1.3em;
  }

  .phone-number {
    flex: 1;
    margin-bottom: 0;
    position: relative;
  }

  .flag {
    width: 1.5em;
    height: 0.9em;
    margin-left: 0.5em;
    display: flex;
    position: relative;
    z-index: 1;
    bottom: -1px;
    margin-right: 0.5em;
  }

  .flag div {
    height: 100%;
    flex: 1;
  }

  .flag .blue {
    background-color: #002b7f;
  }

  .flag .yellow {
    background-color: #fcd116;
  }

  .flag .red {
    background-color: #ce1126;
  }

  input[type="text"],
  input[type="number"],
  input[type="email"] {
    color: white;
    background-color: var(--modal-input);
  }

  .privOne,
  .privTwo {
    color: grey;
  }

  .privOne {
    margin: 12px 0 0;
  }

  .privTwo {
    margin: 0 0 20px;
  }

  .btnNew:active {
    transform: scale(0.9);
  }

  .btnNew {
    height: 40px;
    line-height: 20px;
    min-width: 88px;
    padding: 8px 16px;
    font-size: 14px;
    text-transform: uppercase;
    font-weight: bold;
    white-space: normal;
    letter-spacing: 0.5px;
    color: white;
    background-color: var(--button_color);
    border-radius: 0.3em;
    border: none;
    outline: none;
    box-shadow: 4px 5px 5px rgb(10 10 10 / 36%);
    cursor: pointer;
    user-select: none;
    font-weight: bold;
    position: relative;
    margin-bottom: 10px;
    top: -6px;
  }

  .btnNew:focus {
    outline: none;
  }

  .btnNew:hover {
    box-shadow: 0 1px 1px 0 rgba(245, 102, 20, 0.45),
      0 1px 3px 1px rgba(248, 108, 28, 0.3);
    transition: var(--transition-input);
    opacity: 0.9;
  }

  .btn_send {
    float: right;
  }

  .btn_send.disabled {
    float: right;
    background-color: grey;
  }

  .clear {
    clear: both;
  }

  .close-modal {
    position: absolute;
    top: 0;
    right: 0;
    width: 35px;
    height: 30px;
    color: azure;
    background: transparent;
    /* cursor: pointer; */
    border: 0;
  }

  .mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(52, 73, 94, 0.8);
    z-index: 50;
    visibility: hidden;
    opacity: 0;
    transition: var(--transition-mask);
  }

  .modal-input {
    position: fixed;
    border-radius: 10px;
    width: 38em;
    max-width: 38em;
    /* width: fit-content; */
    height: fit-content;
    background-color: var(--modal-inputBg);
    z-index: 100;
    visibility: hidden;
    opacity: 0;
    transition: var(--transition-mask);
    transform: translateY(45px);
  }

  .mask {
    z-index: -44;
  }

  .mask.active {
    visibility: visible;
    opacity: 1;
    display: block;
    z-index: 240;
    pointer-events: none;
  }

  /* .modal-input.active *:not(#inputForm) {
  pointer-events: none;
} */

  .modal-input {
    display: none !important;
  }

  .active + .modal-input {
    visibility: visible;
    opacity: 1;
    /* transform: translateY(0); */
    display: block !important;
    z-index: 255;
  }

  /*commets*/

  #comets {
    position: absolute;
    top: -10em;
    width: 100vw;
    text-align: left;
    height: 100%;
    min-height: 95vh;
  }

  #comets .cometsFall {
    display: inline-block;
    width: 250px;
    height: 150px;
    position: absolute;
    border-radius: 5% 40% 70%;
    box-shadow: inset 0px 0px 1px #294b67;
    border: 1px solid #333;
    z-index: 1;
    background-color: #fff;
    opacity: 0.7;
  }

  #comets .cometsFall:nth-child(1) {
    left: 30vw;
    height: 73px;
    width: 3px;
    background-color: #fff;
    -webkit-animation: falling 12s 0s infinite;
    -webkit-animation-timing-function: ease-in;
  }

  #comets .cometsFall:nth-child(3) {
    -webkit-animation: falling2 8s 3s infinite;
    left: 30vw;
    height: 40px;
    width: 4px;
    background-color: #fff;
  }

  #comets .cometsFall:nth-child(2) {
    height: 70px;
    width: 3px;
    -webkit-animation: falling3 10s 5s infinite;
    left: 10vw;
    background-color: #fff;
  }

  /* #comets .cometsFall:nth-child(4) {
    -webkit-animation: falling2 5s 1.5s infinite;
    left: -10vw;
    height: 73px;
    width: 3px;
    background-color: #fff;
  } */

  /* #comets .cometsFall:nth-child(5) {
    -webkit-animation: falling 5s 2s infinite;
    left: 60vw;
    height: 60px;
    width: 4px;
    background-color: #fff;
  }

  #comets .cometsFall:nth-child(6) {
    -webkit-animation: falling3 5s 2s infinite;
    left: 90vw;
    height: 60px;
    width: 4px;
    background-color: #fff;
  } */

  @-webkit-keyframes falling {
    0% {
      -webkit-transform: translate3d(100px, 0px, 0px) rotate(160deg);
    }

    3% {
      -webkit-transform: translate3d(450px, 900px, 0) rotate(160deg);
      opacity: 0;
    }

    100% {
      -webkit-transform: translate3d(450px, 900px, 0) rotate(160deg);
      opacity: 0;
    }
  }

  @-webkit-keyframes falling2 {
    0% {
      -webkit-transform: translate3d(100px, 0, 0) rotate(-150deg);
    }

    15% {
      -webkit-transform: translate3d(-100px, 580px, 0) rotate(-150deg);
      opacity: 0;
    }

    100% {
      -webkit-transform: translate3d(-100px, 680px, 0) rotate(-150deg);
      opacity: 0;
    }
  }

  @-webkit-keyframes falling3 {
    0% {
      -webkit-transform: translate3d(0, 0, 0) rotate(150deg);
    }

    10% {
      -webkit-transform: translate3d(430px, 640px, 0) rotate(150deg);
      opacity: 0;
    }

    100% {
      -webkit-transform: translate3d(430px, 640px, 0) rotate(150deg);
      opacity: 0;
    }
  }

  #satelit {
    animation-iteration-count: infinite;
    animation-fill-mode: forwards;
    animation-timing-function: linear;
    animation-name: test-satelite;
    animation-duration: 40s;
    animation-delay: 3s;
    background-image: url({$asset}/img/coding-train2.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 220px;
    height: 100px;
    color: white;
    position: fixed;
    opacity: 0;
    z-index: 0;
    user-select: none;
    pointer-events: none;
    z-index: 104;
  }

  @keyframes test-satelite {
    0% {
      transform: translateY(30em) translateX(-100em);
      opacity: 1;
    }
    100% {
      opacity: 1;
      transform: perspective(498px) translateY(7em) translateX(90em);
    }
  }

  @media screen and (orientation: portrait) and (max-width: 450px) {
    #doors {
      gap: 4px;
    }
    #satelit {
      display: none;
    }
    .shadow {
      display: none;
    }

    .door-container {
      width: 120px;
    }

    .door-container,
    .door-container:before,
    .door-container::after {
      height: 220px;
      max-height: 240px;
      /* background-position: center bottom;
  background-repeat: no-repeat; */
    }

    .active + .modal-input {
      position: absolute;
    }

    .modal-input {
      width: 95%;
      height: fit-content;
      transform: translateY(5px);
      -webkit-transform: translateY(5px);
    }

    .h2-input {
      font-size: 1.15em;
      color: #000000 !important;
    }

    .BonusCodeText {
      flex-direction: column;
      /* line-height: 0.5; */
      font-size: 1.3em;
      max-width: 21em;
      margin: auto;
    }

    .BonusCodeText b {
      margin: 2px 0;
      line-height: unset;
      padding: 2px;
      text-shadow: 0.5px 1.5px black;
    }

    .BonusCodeText .line-one {
      font-size: 1.2em;
      padding: 7px 0;
    }

    .BonusCodeText .line-two .span_code_input .content-l3 {
      margin: 0;
    }

    #instruction > .choices,
    #instruction > p,
    #instruction > #play-again,
    #instruction > .start_game,
    .p_continue,
    .select_door {
      transform: translateX(33px) translateY(0px);
      -webkit-transform: translateX(33px) translateY(0px);
    }

    #instruction {
      width: 97%;
      left: 2.5%;
      top: 38vh;
      height: 30vh;
      position: fixed !important;
    }

    #instruction > p {
      font-size: 0.85em;
      max-height: 65px;
      height: 65px;
    }

    #instruction::after {
      background-size: 30%;
      left: 0vh;
      top: 0vh;
    }

    .btnNew {
      height: 33px;
      line-height: 18px;
      min-width: 85px;
      padding: 8px 20px;
      font-size: 12px;
    }

    /* .light_door {
      left: 7%;
    } */
    .light_door::after {
      content: "IB";
      transform: perspective(1.5em) rotateX(27deg);
      -webkit-transform: perspective(1.5em) rotateX(27deg);
      filter: blur(7px);
      z-index: 11;
      top: 1%;
      color: white;
      left: 28%;
      width: 33%;
      height: 4%;
    }

    .letter-door.pause.revealed.stayClose {
      transform: translate(2px, -1.75em);
      font-size: 3em;
    }

    .letter-door.pause.stayClose {
      transform: translate(2px, -1.75em);
      font-size: 3em;
    }

    .letter-door.open {
      transform: translate(-0.35em, -1.75em);
      font-size: 3em;
    }

    .letter-door {
      font-size: 2.5vh;
      transform: translate(0px, 0.7em);
    }

    .letter-door.rev_open {
      transform: translate(0.05em, -1.75em);
    }

    .bar_light {
      width: 3px;
    }

    .bar_n_light2 {
      right: 8%;
    }

    .bar_n_light1::after {
      left: 101px;
      width: 3px;
    }

    .phone-prefix {
      height: 5.7vh !important;
      min-height: 5.7vh !important;
    }

    .input-box {
      margin: 30px 0;
    }

    .input-box .input-label {
      font-size: 1em;
      /* top: 1.5vh; */
      line-height: 1.1;
    }

    /* .input-input.input_n3 {
      padding: 13px 0px 13px 23%;
    } */
    .privOne label,
    .privTwo label {
      font-size: 0.82em;
    }

    .privTwo {
      margin: 0px 0 12px;
    }

    .privTwo,
    .privOne {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 5px;
    }

    .content {
      font-size: 1.7em;
      top: 1.8vh;
    }

    .content::after {
      left: 51%;
      top: 50%;
      border-radius: 8px;
    }
  }

  @media screen and (orientation: portrait) {
    body::after {
      /* background-image: url({$asset}/bg-mobileM.png); */
      background-position: center;
      /* background-repeat: no-repeat; */
      background-size: cover;
    }

    .separator-mobile {
      display: none;
    }

    .app-main {
      margin-left: 0;
      top: 13vh;
      position: fixed;
      max-width: 600px;
    }

    #doors {
      position: relative;
      /* top: -9vh; */
    }

    .wrapper-all {
      position: relative;
      /* top: -4vh; */
    }

    .light_door {
      width: 100%;
      height: 100%;
    }

    #inputForm {
      padding: 0.2em 0em 0.5em 0em;
    }

    footer .terms-toggle {
      font-size: 1.8em;
      width: fit-content;
      padding: 0.3em 1em !important;
    }

    .steps {
      font-size: 20px;
    }

    .promo-text .inner {
      font-size: 0.9em;
    }
  }
  @media (orientation: portrait) and (min-aspect-ratio: 500 / 736) and (min-width: 500px) {
    .container-hero {
      max-width: 600px;
    }
    .app-main {
      transform: scale(0.8);
      -webkit-transform: scale(0.8);
    }
    #instruction {
      transform: scale(0.6);
      -webkit-transform: scale(0.6);
      left: 15%;
      top: -16%;
    }
    .btnNew:not(.btn_send) {
      top: 1vh;
      transform: scale(1.4);
    }
    .steps .step {
      width: 33%;
    }
    .above-fold {
      height: 97vh;
    }
  }

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1332px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
    .container-hero {
      max-width: 600px;
    }
    .app-main {
      transform: scale(0.8);
      -webkit-transform: scale(0.8);
    }
    #instruction {
      transform: scale(0.6);
      -webkit-transform: scale(0.6);
      left: 15%;
      top: -16%;
    }
    .btnNew {
      top: 3em;
      transform: scale(1.4);
    }
    .steps .step {
      width: 33%;
    }
    .above-fold {
      height: 97vh;
    }
  }
</style>

{/block} {block append name=js} {literal}

<script>

  let codeText = "";
  console.log(codeText,"codetext outside");
  function retriveData() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         codeText = this.responseText;
        console.log(codeText,"codul")
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
  console.log(codeText,"codetext outside2");
  const doors = [];
  const inputs = [];
  const comets = [];
  const instruction = [];

  let _games = [
    "Game of Gladiators Uprising",
    "Dice and Roll",
    "Versailles Gold",
    "Candy Island Princess",
    "Fire Joker",
    "Shining Crown",
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
        select(".above-fold").style("height", "100vh");
      }, delay3s);
    } else {
      select("#instruction > p").html("Ai pierdut!");

      // select('#doors > .lose > .content').html(codeString);
    }
    $(".input_n4").attr({
      placeholder: largeCode,
      name: "bonuscode",
      id: "bonuscode",
      disabled: "",
    });
    $(".box_n4").prepend(
      `<div id="copy-message" class="copy-message" style="display: none;">Codul este copiat!</div> <div class="input-codeBonus input-input copydivText">${largeCode}</div>`
    );
    // sendData();
    // setTimeout(() => {
    //   select("#instruction > #play-again").show();
    // }, delay1_5s);
    const divCopyText = document.querySelector(".copydivText");

    divCopyText.addEventListener("click", () => {
      const range_text = document.createRange();
      range_text.selectNode(divCopyText);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range_text);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();

      // Show the copy message
      const copyMessage = document.getElementById("copy-message");
      copyMessage.style.display = "block";

      // Hide the copy message after 3 seconds
      setTimeout(() => {
        copyMessage.style.display = "none";
      }, 1500);
    });
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
    // sendData();

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
    checKPhoneCheckbox();
   
    const form_q = document.querySelector("#inputForm");
    const emailInput = document.querySelector(".input_n0");
    // Event listener for form submission
    form_q.addEventListener("submit", function (event) {
      event.preventDefault();

      // Retrieve email input value
      let emailValue = emailInput.value;

      // form_q.querySelector('button[type="submit"]').disabled = true;
      // Function to handle errors
      function handleError(errorMessage) {
        $("#emailError").text(errorMessage).css({
          display: "flex",
          "justify-content": "center",
          "font-size": "1em",
          "margin-bottom": "30px",
          "margin-top": "0px",
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
                    console.log(response,"responsetest");
                    // console.log(response, "cod status22222");
                    if (response === "Status: preregister exists") {
                      handleError(" Adresa de email este deja asociată unui cont de utilizator");
                      $(".btn_send").removeAttr("disabled");
                       $(".btn_send").removeClass("disabled");
                    } else if (response === "Status: account exists") {
                      handleError(" Adresa de email este deja asociată unui cont de utilizator");
                      $(".btn_send").removeAttr("disabled");
                       $(".btn_send").removeClass("disabled");
                    } 
                    else if (response === "ERROR1: missing parameter error!") {
                      alert(" missing parameter error!");
                      $(".btn_send").removeAttr("disabled");
                       $(".btn_send").removeClass("disabled");
                    }
                    else if (response === "ERROR2: email format error!") {
                      alert("ERROR2: email format error!");
                      $(".btn_send").removeAttr("disabled");
                      $(".btn_send").removeClass("disabled");
                    }
                    else if (response === "ERROR3: invalid code!") {
                      alert("ERROR3: invalid code!");
                    }
                    else if (response === "ERROR4: code too long!") {
                      alert("ERROR4: code too long!");
                      $(".btn_send").removeAttr("disabled");
                       $(".btn_send").removeClass("disabled");
                    }
                    else if (response === "ERROR5: suspicious of mass requests!") {
                      alert("ERROR5: suspicious of mass requests!");
                    }                   
                    else {
                      largeCode = response.slice(8);
                      var registrationVersion = "https://api.netbet.ro/auth/";
                      var registrationRedirectionUrl1 = `{/literal}{$link}{literal}&bonuscode=${largeCode}`;
                      var data = $("#inputForm").serialize();
                      // console.log("data serialize", data);
                      data = data.replace("&is_read_privacy=1", "");
                   
                      axios({
                        method: "get",
                        url:
                          "/api/data/?" +
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
              // form_q.querySelector('button[type="submit"]').disabled = true;

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
  }
  console.log("test-marian");

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
    const reGx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = reGx.test(String(email).toLowerCase());

    const emailError = document.getElementById("emailError");
    if (isValid) {
      $("#emailError").css("display", "none");
    } else {
      $("#emailError").css({
        display: "flex",
        "justify-content": "center",
        "font-size": "1em",
        "margin-bottom": "-3px",
        "margin=top": "0px",
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

  function setup() {
    noCanvas();
    startInstruction();
    makeDoors();
    startGame();
    // makeInstruction();
    makeInput();

    setStars();
    // resizeWin();
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
</script>

{/literal} {/block}
