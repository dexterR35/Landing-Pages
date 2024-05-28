<style>
  @font-face {
    font-family: "montSuperBold";
    src: url("{$asset}/fonts/MontserratZ-Bold.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "montExtraBold";
    src: url("{$asset}/fonts/MontserratZ-ExtraBold.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "montBold";
    src: url("{$asset}/fonts/MontserratZ-Bold.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "montSemiBold";
    src: url("{$asset}/fonts/MontserratZ-SemiBold.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "montMedium";
    src: url("{$asset}/fonts/MontserratZ-Medium.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "montRegular";
    src: url("{$asset}/fonts/MontserratZ-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "montLight";
    src: url("{$asset}/fonts/MontserratZ-Light.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "montExtraLight";
    src: url("{$asset}/fonts/MontserratZ-ExtraLight.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "montThin";
    src: url("{$asset}/fonts/MontserratZ-Thin.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
    outline: none;
    text-decoration: none;
  }

  :root {
    --s_BG: 103vmax;
    --s_pin: 54vmin;
    --s_cave: 87vmin;
    --s_mainBox: 58vmin;
    --s_boxWheel: 55vmin;
    --s_shadowWheel: 63vmin;
    --s_wheel_frame: 60vmin;
    --s_dialog_two: 350px;
    --clipPathBoxes: polygon(0 0%, 0 38%, 48% 55%);
    --sizeW: 435px;
    --sizeH: 310px;
    /* --s_md_text: calc(1.5vh + 1.7vw);
  --s_lg_text: calc(3vh + 1.5vw); */
    --font-2xnormal: 2em;
    --font-normal: 1em;
    --__sport: green;
    --__casino: #f37539;
    --modalBgColor: #270e25b8;
    --textShadow: #f11a1a;
    --white_color: #fff;
    --text_color_second: #b9e2fff2;
    --button_color: linear-gradient(to right, #ff1c26, #a81c1f);
    --badge_color: linear-gradient(65deg, #5e0808, #ff7272);
    --button_color-hover: linear-gradient(to left, #ff1c26, #a81c1f);
    --textShadowFull: var(--textShadow) 0px 0px 7px,
      var(--textShadow) 0px 0px 10px, var(--textShadow) 0px 0px 10px,
      var(--textShadow) 0px 0px 19px, var(--textShadow) 0px 0px 22px,
      2px 3px 0px rgba(206, 206, 206, 0);
  }

  @media (max-width: 576px) {
    :root {
      --s_dialog: 87vmin;
      /* --sizeW: 170px;
    --sizeH: 135px; */
      --fontSize: 1.6em;
    }
  }

  @media (max-width: 768px) {
    :root {
      /* --s_dialog: 350px; */
      --fontSize: 2.6em;
    }
  }

  @media (min-width: 992px) {
    :root {
      --sizeW: 270px;
      --sizeH: 195px;
      --fontSize: 1.8em;
    }
  }

  @media (min-width: 1200px) {
    :root {
      --s_dialog: 650px;
      --fontSize: calc(var(--font-normal) + 1em);
      --sizeW: 300px;
      --sizeH: 210px;
      /* --sizeW: 300px;
    --sizeH: 250px; */
    }
  }

  @media (min-width: 1400px) {
    :root {
      --s_dialog: 650px;
      --sizeW: 340px;
      --sizeH: 235px;
    }
  }

  @media (min-width: 1600px) {
    :root {
      --s_dialog: 850px;
      --fontSize: calc(var(--font-normal) + 1.6em);
      --sizeW: 420px;
      --sizeH: 306px;
    }
  }

  body {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;

    /* background: black; */
  }

  .terms_body {
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    -o-user-select: text;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    position: absolute;
    font-size: 100%;
    font-family: "montSemiBold";
    background-color: unset !important;
    scroll-behavior: smooth;
  }

  body::after {
    background-size: cover !important;
  }

  ::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }

  h2,
  a {
    font-family: "montExtraBold";
    text-transform: uppercase;
  }

  .m_line1,
  .m_line2,
  .m_line3,
  .modal-title,
  .prizeScratch {
    font-family: "montExtraBold";
  }

  .headerElements,
  .linksNB,
  .modalNB,
  .modal-body,
  .modal-content,
  .modal-header,
  .modal-footer,
  #appendDivs,
  ._scratchCard,
  ._front_text,
  ._canvaTextContainer,
  .content-offer.scenario2,
  .flexScenario,
  .wrapp-all,
  .scratchPrizeSmall,
  .wrap-prizeSmall {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  body,
  body::after,
  span,
  #appendDivs,
  .wrapp-all,
  ._scratchCard img:not(.prizeImage),
  .modalNB.scenario1 .modal-dialog::before,
  .sc__canvas,
  ._boxContainer,
  .borderCave,
  .modalNB,
  .frame_img,
  .modalImg,
  .modalNB::after,
  .modalNB::before,
  ._scratchCard,
  ._canvaTextContainer,
  .elemAssets,
  .borderCave .borderFrame,
  .elemAssets img,
  .scratchPrizeSmall img,
  .modal-body,
  .modal-content,
  .flexScenario,
  .modalNew div {
    width: 100%;
    height: 100%;
  }

  body::after {
    content: "";
    position: absolute;
    top: 0;
    background-size: cover;
    background-image: url({$asset}/png/bg-desktop.jpg);
    background-repeat: no-repeat;
    background-position: bottom;
    z-index: -1;
  }

  @media (max-width: 992px) {
    body::after {
      background-image: url({$asset}/png/bg-mobile.jpg);
    }
  }

  .modalNB::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--modalBgColor);
    z-index: 4;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }

  body.sc2 .elemAssets ._dollar {
    display: none;
  }

  .hero {
    flex: 1;
    height: 100%;
    overflow: hidden;
    z-index: 22;
  }

  .wrapp-all {
    background: #69010114;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
  }

  .container_design {
    position: relative;
  }

  @media (max-width: 1024px) {
    .wrapp-all {
      justify-content: start;
      padding-top: 3vh;
    }

    .hero {
      overflow: hidden;
    }
  }

  #appendDivs {
    position: relative;
    z-index: 20;
    gap: calc(1vh + 1.3vw);
    flex-direction: column;
  }

  #appendDivs:has(._s2) {
    flex-direction: column-reverse;
  }

  #appendDivs,
  ._boxContainer,
  ._canvaTextContainer,
  .modal-dialog::before,
  .borderFrame {
    background-position: center;
    background-repeat: no-repeat;
  }

  audio {
    display: none;
  }

  .wrapperBox {
    position: relative;
    margin: 2vh 0;
  }

  .mainbox {
    position: relative;
    width: var(--s_mainBox);
    height: var(--s_mainBox);
    top: 4%;
  }

  ._boxContainer {
    position: relative;
    overflow: hidden;
    background-size: var(--s_boxWheel);
    background-image: url({$asset}/png/wheel/roata_noua2.webp);
    border-radius: 50%;
    z-index: 2;
  }

  .flexScenario {
    gap: 20px;
    max-width: 100%;
  }

  span {
    display: flex;
    position: relative;
  }

  .clipPath {
    clip-path: var(--clipPathBoxes);
  }

  @keyframes floating {
    0% {
      transform: translate(0%, 0%) rotate(0deg);
    }

    50% {
      transform: translate(-10%, -10%) rotate(-10deg);
    }

    100% {
      transform: translate(0%, 0%) rotate(0deg);
    }
  }

  @keyframes floating-reverse {
    0% {
      transform: translate(0%, 0%) rotate(0deg);
    }

    50% {
      transform: translate(10%, 10%) rotate(10deg);
    }

    100% {
      transform: translate(0%, 0%) rotate(0deg);
    }
  }

  ._box1,
  ._box2,
  ._box3,
  ._box4,
  ._box3,
  ._box5,
  ._box6,
  ._box7,
  ._box8,
  ._box9,
  ._box10,
  ._shadow_wheel,
  .cave,
  .spin,
  ._pin,
  .borderCave,
  .modal-content,
  .modal-body:has(.scenario2) ._of .m_line2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .spin {
    width: 12vh;
    height: 12vh;
    border-radius: 50%;
    background: transparent;

    cursor: pointer;
    z-index: 1000;
    border: none;
    outline: none;
  }

  .spin:active {
    width: 80px;
    height: 80px;
  }

  ._pin img.animate {
    animation: animateArrow 0.5s ease infinite;
  }

  /*IMAGE SIZE*/
  /*IMAGE SIZE*/
  /*IMAGE SIZE*/
  /*IMAGE SIZE*/

  .pinImg {
    height: var(--s_pin);
    max-height: var(--s_pin);
  }

  .cave {
    width: fit-content;
    height: fit-content;
    z-index: 2;
  }

  .caveImg {
    height: var(--s_cave);
    max-height: 100%;
  }

  /*IMAGE SIZE*/
  /*IMAGE SIZE*/
  /*IMAGE SIZE*/
  /*IMAGE SIZE*/

  @keyframes animateArrow {
    50% {
      transform: rotate(-2deg);
    }
  }

  /*PIN*/
  /*PIN*/

  ._pin {
    z-index: 2;
  }

  /*border asset*/
  /*border asset*/
  .borderCave {
    z-index: 4;
    position: absolute;
    border-radius: 50%;
  }

  ._shadow_wheel {
    z-index: 2;
    width: fit-content;
    height: fit-content;
  }

  ._shadow_wheel img {
    width: var(--s_shadowWheel);
    height: var(--s_shadowWheel);
  }

  .borderCave .borderFrame {
    border: 15px solid transparent;
    border-radius: 50%;
    animation: rotate 140s linear infinite;
    background-image: url({$asset}/png/wheel/wheel_frame.png);
    background-size: var(--s_wheel_frame);
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .offerPart1 {
    overflow: hidden;
  }

  .c_badge {
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: rotate(-45deg);
    background: var(--badge_color);
    position: absolute;
    font-size: 0.47em;
    font-family: "montExtraBold";
    background: #7564006e;
    border: 0.4vh dotted #edd797db;
    width: 103%;
    height: 97%;
    text-shadow: var(--textShadow) 0px 0px 10px, var(--textShadow) 0px 0px 8px,
      var(--textShadow) 0px 0px 1px, var(--textShadow) 0px 0px 6px !important;
  }

  .badge {
    position: absolute;
    width: 93%;
    height: 93%;
    background: var(--badge_color);
    z-index: 412;
    left: 0;
    top: 0;
    margin: 6px;
    border-radius: 7%;
    margin: 8px 0px 0px 4px;
    clip-path: polygon(0 0, 0 48.7%, 37.8% 0);
  }

  .c_badge div {
    width: 100%;
    transform: translate(-10%, -100%);
  }

  .c_badge div:nth-child(1) {
    width: 100%;
    position: absolute;
    top: -11%;
    left: 0;
  }

  .c_badge div:nth-child(2) {
    width: 100%;
    position: absolute;
    top: -3%;
    left: 0;
  }

  .c_badge div:nth-child(3) {
    position: absolute;
    top: -21.2%;
    left: 37.5%;
    border-radius: 50%;
    background: #1615108c;
    border: 2px solid #ffb66b;
    width: 6%;
    height: 8%;
  }

  /* .badge::after {
  position: absolute;
  content: attr(data-label);
  top: -0px;
  left: 0px;
  padding: 0.7em;
  height: 10em;
  color: white;
  text-align: center;
  font-family: "montExtraBold";
  border: 1px solid #ffffff;
  box-shadow: 2px 2px 24px rgb(255 255 255);
  rotate: 328deg;
  font-size: 0.8em;
  opacity: 1.8;
} */
  /* .badge::before {
  content: "";

  transform: rotate(317deg);
  left: -113px;
  top: -101px;
  position: absolute;
  width: 66%;
  height: 80%;
  background: linear-gradient(from top, red 50%, blue 50%);
  z-index: 10;
  margin: 6px;
} */
  .flexScenario {
    position: relative;
  }

  /* .flexScenario::after {
  content: "";
  border-bottom: 13px solid #c7c7c7;
  border-left: 73px solid transparent;
  transform: rotate(169deg);
  left: 64px;
  top: -9px;
  position: absolute;
  z-index: -1;
} */
  @media (max-width: 767px) {
    .flexScenario {
      width: fit-content;
      flex-direction: column;
    }

    /* .flexScenario::after {
    border-bottom: 56px solid #c7c7c7;
    border-left: 23px solid transparent;
    transform: rotate(255deg);
    left: 8.2vw;
    top: -2.9vh;
  } */
    .offerPart1::after {
      font-size: 1.1vh;
      top: 1.5vh;
      left: -3vh;
    }

    /* .offerPart1::before {
    border-bottom: 25px solid #c7c7c7;
    border-left: 19px solid transparent;
    left: -2.3vw;
    top: 3.9vh;
  } */
  }

  /* Modal Styles */
  .modalNB {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    z-index: 600;
  }

  /* .modalNB::after {
  content: "";
  position: absolute;
  top: 0;
  background-color: var(--modalBgColor);
  z-index: -1;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
} */
  .modal-dialog {
    position: relative;
    z-index: 2400;
  }

  .modalNB.scenario1 .modal-dialog::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -100%);
    background-image: url({$asset}/png/elements/crown_card.png);
    background-size: 27%;
    z-index: 1;
  }

  .modal-content {
    position: absolute;
    z-index: 1;
    color: var(--white_color);
    /* padding: 20px 0 0; */
    flex-direction: column;
  }

  @media (max-width: 991px) {
    .modal-content {
      width: 100%;
    }

    .modalNB.scenario2 .modal-dialog {
      height: fit-content;
    }
  }

  .modal-dialog {
    width: var(--s_dialog);
    height: auto;
    max-width: 100%;
    border-radius: 5px;
    top: -4%;
  }

  .scenario1 .modal-dialog {
    width: calc(var(--s_dialog) / 1.6);
  }

  .modalImg {
    object-fit: contain;
    position: relative;
  }

  .modal-header {
    justify-content: space-between;
    border-bottom: 1px solid var(--white_color);
  }

  .modal-title {
    margin: 0;
    height: 20%;
    text-align: center;
    margin: 20px 0 10px 0;
  }

  .sc2 .elemAssets ._dollar {
    z-index: 4;
  }

  /*modaltext*/
  /*modaltext*/
  /*modaltext*/
  .modal-body:has(.scenario1),
  .modal-body:has(.scenario2) {
    font-size: var(--fontSize);
  }

  .modal-body:has(.scenario1) {
    font-size: calc(var(--fontSize) + 0.2em);
  }

  .modal-body .scenario1 {
    line-height: 1.1;
  }

  .modal-body .scenario1 .m_line2 {
    font-size: 1.14em;
  }

  .modal-body .scenario1 .m_line3 {
    font-size: 1.28em;
  }

  /*modaltext*/
  /*modaltext*/

  .content-offer.scenario2 {
    flex-direction: column !important;
    gap: 40px;
  }

  .modal-content.scenario2 {
    position: relative;
  }

  .modalNB.scenario2 .modal-dialog {
    height: auto !important;
  }

  .modal-body:has(.scenario2) ._of {
    position: relative;
    height: 100%;
  }

  .modal-body:has(.scenario2) .offerPart1 .m_line2 {
    font-size: calc(var(--font-2xnormal) - 0.8em);
  }

  .modal-body:has(.scenario2) .offerPart2 .m_line2 {
    font-size: calc(var(--font-normal) + 0.1em);
    width: 100%;
  }

  /* .modal-body:has(.scenario2) .m_line1 {
  font-size: calc(var(--font-normal) + 0.35em);
} */

  .modal-body:has(.scenario2) .offerPart1 .m_line2 div:nth-child(1) {
    font-size: 1.06em;
  }

  .modal-body:has(.scenario2) .offerPart2 .m_line2 div:nth-child(1) {
    font-size: 1.045em;
  }

  .modal-body:has(.scenario2) .offerPart2 .m_line2 div:nth-child(3) {
    font-size: 1.14em;
  }

  .modal-body:has(.scenario2) .offerPart2 .m_line2 div:nth-child(4) {
    font-size: 0.99em;
  }

  /* @media (max-width: 991px) {
  .flexScenario {
    flex-direction: column;
    gap: 10px;
  }
  .modal-body:has(.scenario2) ._of .m_line2 {
    width: 100%;
    font-size: calc(2.1vh + 2.1vw);
  }
  .modal-body:has(.scenario2) .offerPart1 .m_line2 {
    font-size: calc(2.5vh + 2.5vw);
  }
  .modal-body:has(.scenario2) .offerPart1 .m_line2:nth-child(3) {
    font-size: 1.95em;
    margin-top: -0.1em;
  }
} */
  .content-offer {
    text-align: center;
  }

  ._close {
    cursor: pointer;
  }

  .modal-body {
    position: relative;
    text-transform: uppercase;
    flex-direction: column;
    height: auto !important;
  }

  .modal-footer ._btn {
    font-size: calc(0.8vh + 0.6vw);
    padding: 0.8em 2.5em;
  }

  ._btn {
    font-family: "montExtraBold";
    background: var(--button_color);
    color: var(--white_color);
    cursor: pointer;
    border-radius: 8px;
    text-transform: uppercase;
    border: none;
  }

  .btnNew {
    padding: 0.5em 2.5em;
    width: fit-content;
    border: none;
    text-transform: uppercase;
    margin: 0 auto;
    z-index: 100;
  }

  @media (max-width: 992px) {
    .modal-footer .btnNew {
      font-size: calc(1.4vh + 1.4vw);
    }
  }

  ._btn:hover {
    background: var(--button_color-hover);
    color: var(--white_color);
    transition: all 0.3s ease;
  }

  .scenario1 .modal-title {
    font-size: calc(var(--font-normal) + 0.1em);
  }

  .scenario2 .modal-title {
    font-size: calc(var(--font-normal) + 0.5em);
    margin: 0 0 10px 0;
  }

  .scenario2 .m_line2 {
    line-height: 1.05;
  }

  .scenario2 .offerPart1 .m_line2 div:nth-child(1) {
    font-size: 0.9em;
  }

  .scenario2 .offerPart1 .m_line2 div:nth-child(3) {
    font-size: 1.9em;
    margin-top: -0.1em;
  }

  ._front_text {
    width: 100%;
    position: relative;
    z-index: 10;
    text-align: center;
    flex-direction: column;
    justify-content: end;
    font-family: "montExtraBold";
    bottom: 0;
    font-size: 1.5vh;
  }

  @media (max-width: 1200px) {
    ._front_text {
      font-size: 1.2vh;
    }
  }

  ._front_text,
  .content-offer,
  .modal-title {
    filter: drop-shadow(2px 3px 3px black);
  }

  ._front_text div:nth-child(1),
  .modal-title {
    color: var(--text_color_second);
  }

  ._front_text div:nth-child(2),
  .content-offer {
    text-shadow: var(--textShadowFull);
  }

  ._tText,
  ._tText_s {
    color: var(--white_color);
    position: relative;
    text-transform: uppercase;
  }

  ._tText {
    position: relative;
    font-size: calc(var(--font-2xnormal) + 0.2em);
  }

  ._tText_s {
    font-size: calc(var(--font-2xnormal) + 3em);
  }

  @media (max-width: 767px) {}

  .container_terms {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .container_terms::after {
    content: "";
    width: 100%;
    height: 0.15em;
    background: var(--button_color-hover);
    position: absolute;
    bottom: 0;
    left: 0;
  }

  /*PART 1 ElementDesktopBg*/
  /*PART 1 ElementDesktopBg*/
  /*PART 1 ElementDesktopBg*/
  /*PART 1 ElementDesktopBg*/
  .elemAssets {
    position: absolute;
  }

  .elemAssets div {
    width: calc(10vw + 13vh);
    height: calc(10vw + 13vh);
    position: absolute;
  }

  /*seven*/
  .elemAssets div:where(:nth-child(1), :nth-child(4)) {
    animation: floating-reverse 35s ease infinite;
  }

  .elemAssets div:where(:nth-child(2), :nth-child(3)) {
    animation: floating 35s ease infinite;
  }

  .elemAssets div:nth-child(1) {
    right: 10%;
    top: -14%;
    width: calc(21vw + 7vh);
    height: calc(21vw + 8vh);
  }

  /*crown*/
  .elemAssets div:nth-child(2) {
    left: 12%;
    top: 1%;
    width: 35vh;
    height: 35vh;
  }

  /*star*/
  .elemAssets div:nth-child(3) {
    right: 35%;
    top: 4%;
    width: 12vh;
    height: 12vh;
  }

  /*dolar*/
  .elemAssets div:nth-child(4) {
    left: 13%;
    bottom: 17%;
    width: 24vh;
    height: 30vh;
    z-index: 10;
  }

  body:has(.sc2) {
    z-index: 4;
  }

  .elemAssets img {
    object-fit: contain;
  }

  /*PART 1 end ElementDesktopBg*/
  /*PART 1 end ElementDesktopBg*/
  /*PART 1 end ElementDesktopBg*/
  /*PART 1 end ElementDesktopBg*/

  /*PART 2 SCRATCH*/
  /*PART 2 SCRATCH*/
  /*PART 2 SCRATCH*/
  /*PART 2 SCRATCH*/

  ._scrathContainer {
    max-width: 90%;
    width: 100%;
    height: auto;
    position: relative;
    margin: 10px auto;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  ._scratchCardParent {
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    z-index: 5;
    gap: 3vw;
  }

  .frame_scratch {
    width: var(--sizeW);
    min-width: var(--sizeW);
    height: var(--sizeH);
    position: relative;
  }

  .prizeScratch {
    position: relative;
    z-index: 1;
    line-height: 1.05;
    color: var(--white_color);
  }

  ._scratchCard {
    position: relative;
    user-select: none;
  }

  .frame_img {
    position: relative;
    z-index: 10;
    object-fit: cover;
  }

  ._scratchCard img:not(.prizeImage) {
    position: absolute;
    z-index: 0;
    max-height: 500px;
    /* filter: grayscale(1); */
  }

  .sc__canvas {
    z-index: 2;
    position: absolute;
    filter: drop-shadow(1px 1px 2px black);
  }

  .scratchPrizeSmall {
    position: relative;
    width: fit-content;
    height: 4.7em;
    padding: 1em;

    text-transform: uppercase;
    z-index: 2;
    gap: 10px;
    color: white;
    filter: drop-shadow(2px 4px 6px black);
    font-family: "montExtraBold";
    /* left: -34px;
  top: -65px; */
  }

  .scratchPrizeSmall img {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .wrap-prizeSmall {
    gap: 10px;
    z-index: 2;
    font-size: calc(var(--fontSize) / 1.6);
    padding: 0 1em;
  }

  /*end PART 2 SCRATCH*/
  /*end PART 2 SCRATCH*/
  /*end PART 2 SCRATCH*/
  /*end PART 2 SCRATCH*/

  /*start prize SCRATCH*/
  /*start prize  SCRATCH*/
  /*start prize SCRATCH*/
  /*start prize  SCRATCH*/
  .prizeImage {
    z-index: 2;
    position: absolute;
    width: calc(3vw + 7vh);
    height: calc(3vw + 9vh);
    max-width: 40%;
    object-fit: contain;
    top: -7vh;
    right: -4vh;
    rotate: -12deg;
    filter: drop-shadow(-4px 4px 6px black);
  }

  .prizeScratch {
    /* background-color: red; */
    font-size: calc(var(--fontSize) * 1.35);
    filter: drop-shadow(2px 6px 4px #161616);
  }

  .prizeScratch div {
    text-transform: uppercase;
    color: var(--white_color);

    text-align: center;
    height: 34%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-shadow: var(--textShadowFull);
  }

  .prizeScratch div:nth-child(1) {
    font-size: 1.9em;
    margin-bottom: -3px;
  }

  .prizeScratch ._lineRON {
    font-size: 1.64em;
    margin-top: -10px;
  }

  .prizeScratch ._lineRUN {
    font-size: 0.9em;
  }

  /*end prize SCRATCH*/
  /*end prize  SCRATCH*/
  /*end prize SCRATCH*/
  /*end prize  SCRATCH*/
  @media (orientation: portrait) {
    #appendDivs {
      justify-content: center;
      height: auto;
    }

    .prizeImage {
      top: -17%;
      right: -9%;
      filter: drop-shadow(1px 3px 3px black);
    }

    #appendDivs:has(._s2) {
      /* margin-top: 5%; */
      justify-content: start;
    }

    ._scrathContainer {
      margin: 0 auto;
    }

    .modal-content {
      padding: 0;
    }

    .modal-dialog {
      width: 100%;
    }

    .modalNB.scenario1 .modal-dialog::before {
      background-size: calc(19vw + 3vh);
    }

    .elemAssets {
      display: none;
    }

    /* ._tText {
    transform: none;
    font-size: calc(var(--s_lg_text) / 1.4);
    margin-bottom: 6px;
  }
  ._tText_s {
    font-size: calc(var(--s_lg_text) * 2);

  } */
  }

  @media (max-width: 1023px) {
    body::after {
      background-size: 550%;
    }

    .caveImg {
      height: calc(100vw + 8vh);
    }

    .mainbox {
      width: calc(65vw + 8vh);
      height: calc(65vw + 8vh);
    }

    ._boxContainer {
      background-size: calc(60vw + 8vh);
    }

    .borderCave .borderFrame {
      background-size: calc(66vw + 8vh);
    }

    ._shadow_wheel img {
      width: calc(69vw + 8vh);
      height: calc(69vw + 8vh);
    }

    .pinImg {
      height: calc(57vw + 8vh);
      max-height: calc(57vw + 8vh);
    }

    .modal-body:has(.scenario2) .offerPart2 .m_line2 {
      font-size: calc(2.3vw + 2.3vh);
      width: 100%;
    }

    .modal-body:has(.scenario2) .offerPart1 .m_line2 {
      font-size: calc(2.6vw + 2.6vh);
    }

    .c_badge {
      font-size: calc(1vh + 1vw);
    }

    ._scratchCardParent {
      gap: 13px;
    }

    /* .modal-body:has(.scenario2) .m_line1 {
    font-size: 1em;
  }
  .modal-body:has(.scenario2) .modal-title {
    font-size: 1.4em;
  } */

    .modal-dialog:has(.scenario2) .btnNew {
      padding: 0.6em 1.5em;
    }

    .scenario1 .modal-dialog {
      width: var(--s_dialog);
    }
  }

  @media (max-width: 991px) {
    ._scrathContainer {
      max-width: 100vw;
      padding: 15px 0px 15px;
    }
  }

  @media (max-width: 767px) {
    .scratchPrizeSmall {
      width: 50%;
      height: 3.6em;
    }

    .wrap-prizeSmall {
      gap: 5px;
      font-size: calc(1.3vw + 1.3vh);
    }

    ._front_text {
      font-size: 1.2vh;
      gap: 7px;
      line-height: 1.1;
    }

    ._front_text._s2 ._tText_s {
      font-size: 4.7em;
    }

    ._front_text._s2 ._tText {
      font-size: 2em;
    }

    ._tText_s {
      font-size: 5.7em;
    }

    ._tText {
      font-size: 2.2em;
    }

    .modal-body:has(.scenario1) {
      font-size: calc(5vw + 1.3vh);
      gap: 0;
    }

    /* .modal-body:has(.scenario2) .modal-title {
    font-size: 1.6em;
  } */
    .scenario2 .modal-title {
      font-size: 8vw;
    }

    .modal-body:has(.scenario2) .m_line1 {
      font-size: 5vw;
    }

    .prizeImage {
      width: calc(4vw + 5vh);
      height: calc(3vw + 5vh);
    }
  }

  @media (max-width: 768px) {
    .content-offer {
      text-shadow: var(--textShadowFull);
    }

    .content-offer.scenario2 {
      gap: 20px;
    }

    .prizeScratch {
      font-size: calc(2.4vh + 1.4vw);
      filter: drop-shadow(1px 2px 3px #161616);
      line-height: unset;
    }

    .prizeScratch div:nth-child(1) {
      font-size: 1.9em;
      margin-bottom: -7px;
    }

    ._scratchCardParent {
      flex-direction: row;
      flex-wrap: wrap;
      gap: 23px;
    }

    .frame_scratch {
      width: calc(27vw + 8vh);
      height: calc(21vw + 6vh);
      min-width: unset !important;
    }

    .modal-body:has(.scenario2) ._of {
      width: calc(30vw + 15vh);
      height: auto;
    }
  }

  .loading-spinner::after {
    content: "";

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid #007bff;
    /* Change color as needed */
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
    animation-play-state: paused;
  }

  .loading-spinner {
    z-index: 4124142;
    display: none;
    top: 50;
    left: 50;
    position: fixed;
    width: 90%;
    height: 90%;
    background-color: rgba(50, 50, 50, 0.46);
  }

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }

    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
</style>
<style>
  :root {}

  /*header style*/
  /*header style*/
  /*header style*/

  header {
    width: 100%;
    height: 4.5em;
    max-height: 100%;
    position: fixed;
    top: 0;
    color: var(--white_color);
    background: #69010114;
    z-index: 125;
  }

  header .__logo img,
  header .__nav_d,
  ._bdropfilter_,
  ._n ul li a {
    width: 100%;
    height: 100%;
  }

  header .__logo {
    /* flex-basis: calc(11vw + 11vh); */
    flex-basis: calc(220px + 2%);
    margin-left: 9%;
  }

  .__ul._d {
    margin-right: 6%;
  }

  header .__nav_d,
  header .__nav_d ul,
  .__nav_m ul li a,
  .__nav_m li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  header .__nav_d {
    margin: auto;
    justify-content: space-between !important;
  }

  header .__logo img {
    object-fit: contain;
    max-height: 80px;
    filter: drop-shadow(1px 1px 1px black);
  }

  ._n {
    background: #e6ebe92e;
    backdrop-filter: blur(5px);
  }

  ._n li a {
    color: #202020;
    font-size: 17px;
    font-weight: bold;
  }

  .__nav_d ul {
    gap: 8px;
  }

  .__nav_d ul li {
    padding: 5px 30px;
    cursor: pointer;
    font-weight: bold;
  }

  .__nav_d ul li:nth-child(1) {
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
  }

  .__nav_d ul li:nth-child(3) {
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
  }

  .___ham {
    flex-basis: calc(72px + 2%);
  }

  .___ham .__ham ._ln {
    width: 27px;
    height: 3px;
    background-color: var(--white_color);
    display: block;
    margin: 6px auto;
    -webkit-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }

  .__ham:hover {
    cursor: pointer;
  }

  #__ham.is-active ._ln:nth-child(2) {
    opacity: 0;
  }

  #__ham.is-active ._ln:nth-child(1) {
    -webkit-transform: translateY(9px) rotate(45deg);
    -ms-transform: translateY(9px) rotate(45deg);
    -o-transform: translateY(9px) rotate(45deg);
    transform: translateY(9px) rotate(45deg);
  }

  #__ham.is-active ._ln:nth-child(3) {
    -webkit-transform: translateY(-9px) rotate(-45deg);
    -ms-transform: translateY(-9px) rotate(-45deg);
    -o-transform: translateY(-9px) rotate(-45deg);
    transform: translateY(-9px) rotate(-45deg);
  }

  /*mobile nav*/
  .__nav_m {
    z-index: 3000;
    font-weight: bold;
    font-size: 0.8em;
    width: 100%;
    height: 100vh;
    position: relative;
    text-align: center;
    background: #ffffffcf;
  }

  .__nav_d ul li a {
    color: var(--white_color);
  }

  .__nav_m ul {
    background-color: #e6ebe926;
  }

  .__nav_m li:nth-child(1) {
    border-top: #e1e1e1d0 1px solid;
  }

  .__nav_m li {
    height: 5em;
    border-bottom: #e1e1e1d0 1px solid;
  }

  /*mobile nav*/

  .__nav_d ul li:nth-child(1),
  .__nav_m ul li:nth-child(1):hover a {
    background-color: var(--__sport);
    color: var(--white_color);
  }

  .__nav_d ul li:nth-child(2),
  .__nav_m ul li:nth-child(2):hover a {
    background-color: var(--__casino);
    color: var(--white_color);
  }

  .__nav_d ul li:nth-child(3),
  .__nav_m ul li:nth-child(3) {
    background-image: var(--button_color);
  }

  .__nav_m ul li:nth-child(3) a {
    color: var(--white_color);
  }

  @media (orientation: portrait) {
    header {
      height: 4.5em !important;
      position: relative;
    }
  }

  @media (min-width: 1024px) {
    header .__nav_d {
      max-width: 100%;
    }

    .___ham,
    .__nav_m {
      display: none !important;
    }
  }

  @media (max-width: 1023px) {
    header .__nav_d {
      max-width: 100%;
    }

    header .__logo {
      margin-left: 3%;
    }

    .__nav_d ul._d {
      display: none;
    }

    .__nav_m {
      display: block;
    }
  }

  @media (max-width: 678px) {
    header .__logo {
      /* flex-basis: calc(11vw + 11vh); */
      flex-basis: calc(140px + 2%);
    }
  }
</style>

<style>
  .terms_content,
  ._close,
  .terms_body,
  .terms_footer,
  .terms_header h2,
  .terms_modal {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .body.modal-open {
    overflow: hidden;
  }

  .container_terms:not(h2) {
    margin: 0 auto;
    font-size: calc(var(--s_lg_text) / 3);
    color: #292929;
    z-index: 2000;
  }

  #_open {
    position: relative;
    bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .terms_modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: end;
    /* background: #00000069; */
  }

  .terms_header,
  .terms_footer {
    background: var(--white_color);
    position: relative;
  }

  .terms_header h2 {
    background: var(--button_color);
    margin: 0;
    font-size: 1.2em;
    cursor: pointer;
    width: fit-content;
    text-align: center;
    padding: 5px 20px;
    border-radius: 10px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    color: var(--white_color);
    z-index: -1;
  }

  .terms_wrap {
    margin: 0 auto;
    width: 100%;
    height: 93%;
    background: var(--white_color);
    border-top: 2px solid rgb(220, 0, 0);
  }

  @media (max-width: 768px) {
    .terms_header h2 {
      font-size: 0.75em;
    }

    .terms_body ul li {
      font-size: calc(2.2vw + 0.6vh);
      line-height: 1.3;
    }

    .terms_wrap {
      height: 100%;
    }
  }

  .terms_content {
    flex-direction: column;
    margin: auto;
    height: 100%;
    width: 90%;
    position: relative;
  }

  .terms_body {
    padding: 20px;
    align-items: start;
    flex-direction: column;
    justify-content: start;
    gap: 10px;

    overflow: auto;
    border-radius: 12px;
    margin: 4em 0 0px;
  }

  .terms_header {
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    height: 2.3em;
    top: -2.9em;
    margin: 0;
    text-align: center;
    background: transparent;
    z-index: -1;
  }

  .terms_footer {
    bottom: 0;
    width: 100%;
    justify-content: space-between;
    border-radius: 10px;
  }



  .terms_footer .logos {
    width: fit-content;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 10px;
    /* grid-template-columns: repeat(4, 120px); */
  }

  .terms_footer .logos a {
    display: flex;
    justify-content: center;
    align-self: center;
    height: 100%;
  }

  .terms_footer .logos-group {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .terms_footer .logos-group:nth-child(1) {
    flex-direction: row;
    column-gap: 10px;
  }

  .terms_footer .logos-group:nth-child(2) {
    flex-direction: row;
    column-gap: 10px;
  }

  .terms_footer .logos-group:nth-child(2) a:nth-child(2) {
    justify-content: flex-start;
  }

  .terms_footer .logos a img {
    width: 100%;
    height: 100%;
    max-width: 120px;
    object-fit: contain;
  }

  .terms_footer .logos .onjn {
    width: 95%;
    margin-top: 3px;
  }

  .terms_footer .logos .logo_clinica {
    width: 55%;
    /* filter: brightness(0.6); */
  }

  .terms_footer .logos .gambleaware {
    width: 100%;
    object-fit: contain;
    /* filter: brightness(0); */
  }

  .terms_footer .logos .gamcare {
    width: 98%;
  }


  .terms_footer button {
    width: fit-content;
  }

  .terms_footer,
  .terms_header {
    margin: 10px 0;
  }

  .terms_body p {
    font-family: "montBold";
    text-transform: uppercase;
    color: #ff1c26;
    font-size: calc(var(--fontSize) / 1.5);
    margin: 0.5vh 0;
    width: 100%;
  }

  .terms_body ul li {
    font-size: var(--font-normal);
    line-height: 1.3;
    vertical-align: middle;
    margin: 4px 0;
    list-style: disc;
  }

  ._close {
    width: 100%;
    padding: 0.5em 3em;
  }

  @media screen and (max-width: 768px) {
    .terms_body p {
      font-size: calc(var(--fontSize) / 2.4);
    }

    .terms_body {
      margin: 1.5em 0 0px;
      padding: 17;
    }

    .terms_body ul li {
      font-size: calc(var(--fontSize) / 3);
    }

    .terms_content {
      width: 95%;
    }
  }
</style>