{block name="add_char"}

<div class="wrapper-all">
  <div class="rafter" style="display: none">
    <div class="lamp">
      <div class="lamp__icon"></div>
    </div>

    <div class="lamp">
      <div class="lamp__icon"></div>
    </div>

    <div class="lamp">
      <div class="lamp__icon"></div>
    </div>
  </div>
  <div class="container-all">
    <div class="container-stuff">
      <div class="container-girl">
        <img src="{$asset}/png/girl.png" alt="girl" class="desktop_girl" />
        <div class="container-bubble bubble_hidden">
          <div class="bubble">
            <div class="bubble_instruction" id="instruction">
              <!-- <div id="instr_text"></div> -->
              <p style="margin-bottom: 0.6em"></p>

              <div class="start_game" style="z-index: 10">
                <button id="start_game" class="btnNew btn_startGame pulse_btn">
                  Începe jocul
                </button>
              </div>
              <div class="select_door" style="z-index: 10">
                <button id="yes_select" class="btnNew btn_continue pulse_btn">
                  alege un ȘEPTAR...
                </button>
              </div>
              <div class="p_continue" style="z-index: 10">
                <button id="yes_continue" class="btnNew btn_continue pulse_btn">
                  OK! MAI DEPARTE
                </button>
              </div>
              <div class="choices">
                <button id="yes" class="btnNew btn_choices btn_yes pulse_btn">
                  Da
                </button>
                <button id="no" class="btnNew btn_choices btn_no pulse_btn">
                  NU
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="app" class="app-main">
        <div class="wrapper-seven" id="_Sevens"></div>
      </div>
    </div>
  </div>
</div>
<div class="mask" role="dialog" id="mask_modal"></div>

<div class="modal-input" role="alert">
  <div class="container-input">
    {include file="{$smarty.current_dir}/forms.tpl"}
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
    /* height: 86vh; */
    /* max-width: 1200px; */
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
    display: none;
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

  /* @font-face {
    font-family: "CROWDEN";
    font-weight: normal;
    font-style: normal;
    src: url("{$asset}/fonts/CROWDEN-Regular.ttf") format("truetype");
  } */

  /* :root {

    --button_color: #ff4c16;
    --modal-input: #333743;
    --modal-inputBg: #dbdbdb;

    --bg-white: #fff;
    --color-white: #fff;

    --border-input: #dadce0;
    --border-inputFocus: #1adae8;
    --border-error: #ff4c16;
    --border-active: #0abaff;


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
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  .wrapper-all:not(.input_n4) {
    -webkit-user-select: text !important;
    -ms-user-select: text !important;
    user-select: text !important;
  }
  /* @import url("https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"); */
  :root {
    /* --orange: #f89e4f; */
    --button_color: #ff4c16;
    --modal-input: #333743;
    --modal-inputBg: #dbdbdb;

    --color-white: #fff;

    --border-input: #dadce0;
    --border-inputFocus: #1adae8;
    --border-error: #ff4c16;
    --border-active: #0abaff;
    /* --red: #f16164; */

    --h1-title: #ff4c16;

    --transition-mask: 0.5s ease-out;
    --transition-input: ease 250ms;

    --bg-desktop: url({$asset}/png/bg2.jpg);
    --sevens: url({$asset}/png/seven.png);
    --sevens2: url({$asset}/png/seven2.png);

    --swirl-top: url({$asset}/png/swirl-top2.png);
    --swirl-bottom: url({$asset}/png/swirl-bottom2.png);

    --bubble_base: url({$asset}/png/bubble_base3.png);
    --bubble_light: url({$asset}/png/bubble_light3.png);

    --content_prize: url({$asset}/png/content_prize.png);
    --content_prize_base: url({$asset}/png/content_prize_base.png);

    --animation-swirls: moveDown 0.5s cubic-bezier(1, 0.22, 0.15, 1) forwards 2
      alternate;
    --animation-seven: seven-down 0.5s cubic-bezier(1, 0.22, 0.15, 1) forwards;
    --animation-content: content-up 0.5s cubic-bezier(1, 0.22, 0.15, 1) forwards;
    --animation-seven_start: _movefromBottom 1.2s 0.3s
      cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
  }

  body {
    /* font-family: "Play", sans-serif; */
    -webkit-user-select: none;
  }
  body::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: var(--bg-desktop);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -1;
  }
  .seven {

    background-image: var(--sevens);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 40vh;
    z-index: 12;
    position: relative;
  }
  .app-main {
    /* width: 100%; */
    top: 7vh;
    left: 2em;
    /* left: -18vh; */
    /* max-width: 1200px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* z-index: 100; */
    position: relative;
    /* background: red; */
  }
  .wrapper-seven {
    position: relative;
    gap: 1em;
  }

  .wrapper-seven,
  .container-seven {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container-seven {
    /* height: fit-content; */
    position: relative;
    width: 40vh;
    height: 40vh;
    /* overflow: hidden; */
  }

  .swirl-top,
  .swirl-bottom {
    background-position: center;
    background-repeat: no-repeat;
    background-size: 45vh;
    width: 40vh;
    height: 100%;
    mix-blend-mode: screen;
    position: absolute;
    top: 53%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ._hide {
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  .swirl-top {
    background-image: var(--swirl-top);
    /* bottom: 55px; */
  }
  .swirl-bottom {
    background-image: var(--swirl-bottom);
    /* top: 14.8vh; */
    z-index: 15;
  }
  .seven,
  .text-container {
    width: 100%;
    height: 100%;
  }
  .text-container {
    background-color: #fff;
    opacity: 0.5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    color: #000;
    position: relative;
    z-index: 11;
    transform: translateY(100%);
    transition: transform 0.5s ease;
  }

  .move-down {
    position: absolute;
    bottom: 0;
    /* transform: translateY(100%); */
    transition: transform 0.5s ease;
  }

  /*bubble and girl*/
  /*bubble and girl*/
  /*bubble and girl*/

  .container-all {
    width: 100%;
    /* background: red; */
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
  .container-stuff {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    top: 5vh;
  }
  .container-girl {
    position: fixed;
    left: -11vh;
    top: 23vh;
    width: 30%;
    /* background: red; */
    display: flex;
    justify-content: end;
  }
  .container-girl img {
    height: 95vh;
  }

  .container-bubble {
    position: absolute;
    top: -18%;
    left: 70%;
    width: 100%;
    /* height: 100%; */
    /* mix-blend-mode: screen; */
  }
  .bubble_instruction {
    position: absolute;
    top: -1vh;
    left: 9.5%;
    /* transform: translate(-50%, -50%); */
    width: 80%;
    height: 100%;
    /* background: darkred; */
    /* margin-left: 14%; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: 70;
    /* background-color: rgba(90, 125, 241, 0.514); */
  }
  .bubble_instruction > div button {
    padding: 0.7em 2em;
    font-size: 1.7vh;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    width: 100%;
    border-radius: 7px;
    border: none;
    outline: none;
    background-color: crimson;
    color: var(--color-white);
    border: 1px solid white;
    margin-bottom: 10px;
  }
  .bubble_instruction > div {
    /* position: absolute; */
    width: 40%;
  }
  .bubble_base {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    mix-blend-mode: normal;
    z-index: 0;
  }
  .bubble_light {
    top: 0;
    left: 0;
    position: absolute;
    mix-blend-mode: screen;
    z-index: 10;
  }

  .bubble_hidden {
    /* visibility: hidden; */
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .bubble {
    width: 90vh;
    height: 38vh;
    /* background-color: red; */
    position: relative;
    color: var(--color-white);
    /* z-index: 40; */
  }

  .bubble::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: var(--bubble_base);
    background-repeat: no-repeat;
    background-position: 0vh top;
    background-size: 75vh;
    z-index: 1;
    /* mix-blend-mode: overlay; */
  }

  .bubble::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: var(--bubble_light);
    background-repeat: no-repeat;
    background-position: 0vh top;
    background-size: 75vh;
    z-index: 12;
    mix-blend-mode: screen;
  }
  .choices {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }

  .bubble p {
    font-size: 2.3vh;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
  }
  /*end bubble*/
  /*end bubble*/

  /*letter seven*/
  /*letter seven*/
  .letter-seven {
    position: absolute;
    bottom: 10vh;
    left: -1vh;
    width: 100%;
    /* transform: translate(0px, -0.5em); */
    display: flex;
    justify-content: center;
    align-items: center;
    /* cursor: pointer; */
    z-index: 20;
    font-size: 3.7vh;
    color: var(--color-white);
    /* text-shadow: 0 0 0 transparent, 0 0 1px #dcf1ff, 0 0 20px rgb(0 195 255 / 50%), 0 0 4px #c2e3d5, 0 0 4px #ddfff9, 0 0 10px #2fb6bf94, 0 0 3px #29d0d9a9, 0 0 4px #168cad, 0 0 41px #12617e; */
  }
  .letter-seven.light {
    text-shadow: #fff 0px 0px 5px, #fff 0px 0px 10px, #fff 0px 0px 15px,
      #ffb0a5 0px 0px 20px, #f34502 0px 0px 30px, #eb1e1e 0px 0px 40px,
      #d54110 0px 0px 50px, #ed5120 0px 0px 75px;
  }

  .letter-seven.open::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .container-seven.remaining {
    /* background-color: purple; */
  }
  .seven._movefromBottom,
  .letter-seven._movefromBottom {
    transform: translateY(47vh);
    animation: var(--animation-seven_start);
  }
  .letter-seven._movefromBottom {
    animation-delay: 0.6s;
  }
  .container-seven:nth-child(1) .seven._movefromBottom {
    animation-delay: 0.6s;
  }
  .container-seven:nth-child(2) .seven._movefromBottom {
    animation-delay: 0.8s;
  }
  .container-seven:nth-child(3) .seven._movefromBottom {
    animation-delay: 1s;
  }
  .seven._active {
    /* position: relative;
        z-index: 12; */
    /* transform: scale(1.05); */
  }
  .seven._active::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 40vh;
    mix-blend-mode: screen;
    /* transform: scale(1.05); */
    opacity: 0.8;
    background-image: var(--sevens);
  }

  .container-seven.revealed .swirls {
    animation: var(--animation-swirls);
    /* opacity: 1; */
  }

  .container-seven.remaining.-sel .swirls {
    /* background-color: rgba(231, 21, 63, 0.336); */
    animation: var(--animation-swirls);
  }

  .container-seven.lastOpen.-sel .swirls {
    /* background-color: rgba(231, 21, 63, 0.336); */
    animation: var(--animation-swirls);
  }

  .container-seven.picked.won .swirls {
    /* background-color: rgba(231, 21, 63, 0.336); */
    animation: var(--animation-swirls);
  }

  .container-seven.revealed.-sel .seven.-sev {
    /* background-color: #08f; */
    /* transform: scale(1) translate(0vh, 0vh); */
    animation: var(--animation-seven);
  }
  .container-seven.lastOpen.-sel .seven.-sev {
    /* background-color: red; */
    animation: var(--animation-seven);
  }

  .container-seven.picked.won .seven.-sev {
    /* background-color: orange; */
    animation: var(--animation-seven);
  }
  .container-seven.picked.lastOpen.won .seven.-sev {
    /* background-color: orange; */
    animation: var(--animation-seven);
  }
  .container-seven.remaining.-sel .seven.-sev {
    /* background-color: rgba(231, 21, 63, 0.336); */

    animation: var(--animation-seven);
  }
  @keyframes seven-down {
    0% {
      transform: scale(1) translate(0vh, 0vh);
      opacity: 1;
    }
    100% {
      transform: scale(1) translate(0vh, 30vh);
      opacity: 0;
    }
  }

  .container-seven.revealed.-sel .box_content.-anim {
    transform: scale(1) translate(0vh, 30vh);
    animation: var(--animation-content);
  }
  .container-seven.picked.won .box_content.-anim {
 
    animation: var(--animation-content);
  }
  .container-seven.lastOpen.-sel .box_content.-anim {

    animation: var(--animation-content);
  }
  .container-seven.remaining.-sel .box_content.-anim {

    animation: var(--animation-content);
  }
  @keyframes content-up {
    0% {
      transform: scale(1) translate(0vh, 30vh);
      opacity: 0;
    }
    100% {
      transform: scale(1) translate(0vh, 0vh);
      opacity: 1;
    }
  }

  /* .container-seven.revealed .seven{
              animation: moveDown2 10.5s ease forwards ;
            } */
  @keyframes moveDown {
    0% {
      transform: translate(-20vh, -18vh);
      /* width: 40vh; */
      background-size: 110%;
    }
    100% {
      transform: translate(-20vh, -48vh);
      /* width: 50vh; */
      background-size: 120%;
    }
  }
  @keyframes moveDown2 {
    0% {
      /* width: 38vh; */
    }
    100% {
      /* transform: translate(-20vh, -43vh); */
      /* width: 50vh; */
      /* width:  0%; */
    }
  }
  @keyframes _movefromBottom {
    0% {
      transform: translateY(47vh);
    }
    100% {
      transform: translateY(0vh);
    }
  }
  @keyframes scaleElem {
    0% {
      transform: scale(0) translate(0vh, -18vh);
      opacity: 0;
    }
    100% {
      transform: scale(1) translate(-20vh, -18vh);
      opacity: 1;
    }
  }
  /* .swirls {
              transform: translate(-20vh, -18vh);
              animation: scaleElem 1s 0.3s forwards ease;
              opacity: 0;
            } */
  /* .random_open {
              background: #000;
            } */

  /*END LETTER DOOR*/
  /*END LETTER DOOR*/
  /*end bubble and girl*/

  @keyframes moveTop {
    0% {
      transform: translate(-20vh, -18vh);
      width: 40vh;
      background-size: 110%;
    }
    100% {
      transform: translate(-20vh, -43vh);
      width: 50vh;
      background-size: 120%;
    }
  }

  .box_seven {
    /* background-color: #f00; */
    display: block;
    /* top: 30em; */
    z-index: 12;
  }

  .rafter {
    display: flex;
    justify-content: center;
    border-top: 4px solid black;
  }

  .lamp {
    position: absolute;
    z-index: 12;
  }

  .lamp:nth-child(1) {
    transform: translate(-26vh, -27px) rotate(0deg);
  }
  .lamp:nth-child(1)::before {
    /* border-bottom: 88vh solid rgb(255 255 255 / 34%); */
  }

  .lamp:nth-child(2) {
    transform: translate(14vh, -25px) rotate(0deg);
    /* border-bottom: 90vh solid rgb(255 255 255 / 17%); */
  }

  .lamp:nth-child(3) {
    transform: translate(54vh, -22px) rotate(0deg);
  }

  /* .lamp.lamp-selected::before {
        border-bottom: 88vh solid rgb(255 255 255 / 17%);
        border-left: 20vh solid transparent;
        width: 43vh;
        height: 0;
        border-right: 20vh solid transparent;
        top: 56px;
        left: 50%;
        transform: translateX(-50%);
        border-bottom-left-radius: 93px;
        border-bottom-right-radius: 93px;
        opacity: 0;
      } */

  .lamp.lamp-selected::before,
  .lamp.lamp-selected::after {
    opacity: 1 !important;
    content: "";
    position: absolute;
    border-bottom: 88vh solid rgb(255 255 255 / 9%);
    border-left: 20vh solid transparent;
    width: 43vh;
    height: 0;
    border-right: 20vh solid transparent;
    top: 56px;
    left: 50%;
    transform: translateX(-50%);
    border-bottom-left-radius: 93px;
    border-bottom-right-radius: 93px;
    opacity: 0;
  }
  .content {
    top: 25em;
  }
  .content {
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 1;
    position: absolute;
  }
  /* .content._show {
        animation: moveTop 2s ease forwards;
        transform: translateY(0vh);
        opacity: 1;
        transition: opacity ease 0.5s;
      } */

  .content.box_content::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: var(--content_prize_base);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    mix-blend-mode: screen;
    top: 0;
    left: 0;
  }
  .box_content {
    opacity: 1;
    position: absolute;
    top: -1vh;
  }
  .content.box_content::before {
    content: "";
    position: absolute;
    /* background-color: #00f; */
    /* top: 25em; */
    width: 100%;
    height: 100%;
    opacity: 1;
    position: absolute;
    background-image: var(--content_prize);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;

    z-index: 12;
  }
  /* .lamp.lamp-selected::before,
      .lamp.lamp-selected::after {
        opacity: 1 !important;
        content: "";
        position: absolute;
      } */
  /* .lamp::after {
        content: '';
        position: absolute;
        border-radius: 0 0 62.5px 62.5px;
        width: 125px;
        height: 62.5px;
        background: rgba(255, 255, 255, 0.5);
        top: 60vh;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0;
      } */

  .lamp__icon {
    list-style-image: none;
    width: 64px;
    height: 64px;
    background: url('data:image/svg+xml;utf8,<svg width="64" height="64" viewBox="0 0 64 64" fill="black" xmlns="http://www.w3.org/2000/svg"><path d="M0 4C0 1.79086 1.79086 0 4 0H14.2857C16.4949 0 18.2857 1.79086 18.2857 4V36.5714H0V4Z" transform="translate(22.8571 8)"/><path d="M6.85714 0H25.1429L29.6 5.94286C30.5889 7.26133 29.6481 9.14286 28 9.14286H4C2.35191 9.14286 1.41115 7.26133 2.4 5.94286L6.85714 0Z" transform="translate(16 46.8571)"/></svg>');
    position: relative;
    cursor: pointer;
    transition: opacity 200ms cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  .lamp__icon:hover {
    opacity: 0.6;
  }

  .lamp__icon::-webkit-details-marker {
    background: none;
    color: transparent;
  }

  .stage {
    display: flex;
    justify-content: center;
    height: 400px;
    align-items: flex-end;
    border-bottom: 80px solid saddlebrown;
  }

  .stage::after {
    content: attr(content);
    z-index: 1;
  }
  .container-seven:not(.won) .content .bonusText {
    font-size: 2.8em;
    top: -0.4em;
  }
  .bonusText {
    font-size: 2em;
    color: white;
    font-weight: bold;
    top: -1em;
    position: relative;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 33;
    flex-direction: column;
    line-height: 1;
    text-transform: uppercase;
  }
  .bonusText .content-l1 {
    font-size: 2em;
    margin-bottom: -0.1em;
  }
  .bonusText .content-l3 {
    font-size: 0.7em;
  }
 
  .sign {
    position: relative;
    background: none;
    color: #303030;
    font-size: 5rem;
    display: inline-block;
  }

  @media screen and (orientation: portrait) and (max-width: 450px) {
    .active + .modal-input {
      position: absolute;
    }
    .rafter {
      display: none;
    }
    .modal-input {
      width: 95%;
      height: fit-content;
      transform: translateY(5px);
      -webkit-transform: translateY(5px);
    }
  }

  @media screen and (orientation: portrait) {
    body::after {
      background-position: center;
      background-size: cover;
    }
    .desktop_girl {
      display: none;
    }
    .separator-mobile {
      display: none;
    }

    .app-main {
      width: 100%;
      top: 15vh;
      left: 0%;
      /* height: 100%; */
      position: relative;
    }

    .seven {
      width: 100%;
      height: 100%;
      background-size: 17.5vh;
      background-position: bottom;
    }
    .content.box_content::before {
      background-size: 15vh;
    }
    .box_content {
      top: -4vh;
    }
    .swirl-top,
    .swirl-bottom {
      background-size: 16vh;
      top: 72%;
      width: 16vh;
    }
    .container-seven {
      width: 14vh;
      height: 25vh;
      overflow: hidden;
    }
    .wrapper-all {
      position: relative;
      /* top: -4vh; */
    }
    .container-all {
      height: fit-content;
    }
    .container-stuff {
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column-reverse;
      top: 14vh;
    }
    .container-girl img {
      height: 31vh;
    }

    .container-girl {
      position: relative;
      left: 0em;
      top: 0vh;
      width: 100%;
    }
    .container-bubble {
      left: 0;
      top: 10vh;
    }
    .seven._active::before {
      top: 0vh;
      background-size: 17.5vh;
      background-position: bottom;
    }
    .bubble_instruction {
      position: absolute;
      top: -5.3vh;
      left: 0;
    }
    .bubble_instruction > div button {
      padding: 0.8em 2em;
      font-size: 1.5vh;
      background-color: crimson;
      color: var(--color-white);
      border: 1px solid white;
      margin-bottom: 21px;
    }
    .bubble_instruction > div {
      width: 50%;
    }
    .first_text_t1 {
      margin-bottom: -18px;
      margin-top: 4px;
      font-size: 2.7vh;
    }

    .first_text_t3 {
      margin-bottom: -14px;
    }
    .first_text_t2 {
      font-size: 0.9em;
      margin-bottom: -0.9em;
      margin-top: 0.3em;
    }

    .bubble {
      width: 60vh;
    }
    .bubble::after {
      z-index: 2;
    }
    .bubble::after,
    .bubble::before {
      background-size: 55vh;
      left: -15%;
    }
    .bubble p {
      font-size: 2vh;
      margin-bottom: 0.6em;
    }
    .letter-seven {
      position: absolute;
      bottom: 3.8vh;
      left: -0.4vh;
      font-size: 2.3vh;
    }
    .bonusText {
      font-size: 1.5em;
    }

    footer .terms-toggle {
      font-size: 1.8em;
      width: fit-content;
      padding: 0.3em 1em !important;
    }
    /* .steps {
      font-size: 20px;
    } */

    .promo-text .inner {
      font-size: 0.9em;
    }
    @keyframes moveDown {
      0% {
        transform: translate(-8vh, -12.3vh);
        /* width: 40vh; */
        background-size: 16vh;
      }
      100% {
        transform: translate(-8vh, -27vh);
        /* width: 50vh; */
        background-size: 16vh;
      }
    }

    @keyframes content-up {
      0% {
        transform: scale(1) translate(0vh, 30vh);
        opacity: 0;
      }

      100% {
        transform: scale(1) translate(0vh, 4vh);
        opacity: 1;
      }
    }
  }

  @media (orientation: portrait) and (min-aspect-ratio: 500 / 736) and (min-width: 500px) {
    .container-hero {
      max-width: 600px;
    }

    /* .app-main {
      transform: scale(0.8);
      -webkit-transform: scale(0.8);
    } */

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

    .steps .step {
      width: 33%;
    }

    .above-fold {
      height: 97vh;
    }
  }

  /* :root {

  --button_color: #ff4c16;
  --modal-input: #333743;
  --modal-inputBg: #dbdbdb;

  --bg-white: #fff;
  --color-white: #fff;

  --border-input: #dadce0;
  --border-inputFocus: #1adae8;
  --border-error: #ff4c16;
  --border-active: #0abaff;

  --h1-title: #ff4c16;

  --color-focusText: #333743;

  --transition-mask: 0.5s ease-out;
  --transition-input: ease 250ms;
} */
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
    color: red !important;
    top: -8px;
    background: red;
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
    margin: 32px 0;
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

  .input-box .number-container {
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
  .BonusCodeText {
    text-align: center;
  }
  .BonusCodeText,
  .h2-input {
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
  .h2-input {
    color: #000000 !important;
    text-transform: uppercase;
    font-weight: bold;
    margin: 10px 0 12px auto;
    text-align: center;
    font-size: 1.1em;
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
  .container-input {
    width: 100%;
    padding: 1em;
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
  .mask.active {
    visibility: visible;
    opacity: 1;
    display: block;
    z-index: 240;
    pointer-events: none;
  }
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

  .modal-input {
    position: fixed;
    border-radius: 10px;
    width: 38em;
    max-width: 38em;
    height: fit-content;
    background-color: var(--modal-inputBg);
    z-index: 100;
    transition: var(--transition-mask);
    transform: translateY(45px);
  }

  .errorDiv {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 0.8em;
    height: 17px;
    padding: 0px 15px;
    width: 99.5%;
    min-width: 275px;
    background: transparent;
    color: rgba(255, 255, 255, 1);
    transition: all 0.3s ease-out;
    position: absolute;
    left: 0;
    bottom: -17px;
    margin: 2px;
    z-index: -1;
  }
  .failure {
    background: rgb(255 35 0 / 76%);
    color: white;
    border-radius: 4px;
  }
  .success {
    background: rgb(11 120 14 / 68%);
    color: white;
    border-radius: 4px;
  }
  .thank_you {
    background: #fff;
    width: 100%;
    height: 20em;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .thank_you p {
    font-size: 2em;
  }
</style>

{/block} 
{include file="{$smarty.current_dir}/game.tpl"} 



