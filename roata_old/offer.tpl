{block name="add_char"}
<canvas id="particle-canvas"></canvas>
<div class="wrapper-all">
  <div class="wheel-container">
    <div class="frame-wheel">
      <img
        src="{$asset}/spark-wheel.png"
        alt="frame-wheel"
        srcset=""
        class="frame-img swirl-wheel"
      />
      <img
        src="{$asset}/wheel-frame-2.png"
        alt="frame-wheel"
        srcset=""
        class="frame-img"
      />
    </div>
  </div>

  <div class="santa-man">
    <img src="{$asset}/santa-3.png" alt="santa" srcset="" class="santa-img" />
  </div>
  <div class="gonzo-man">
    <img src="{$asset}/gonzo-4.png" alt="gonzo" srcset="" class="gonzo-img" />
  </div>
  <div class="bottom-sparkle">
    <img
      src="{$asset}/spark-bottom.png"
      alt="spark-bottom"
      srcset=""
      class="spark-bottom-img"
    />
  </div>
  <div class="long-swirl-bottom">
    <img
      src="{$asset}/long-swirl.png"
      alt="long-swirl"
      srcset=""
      class="long-swirl-img"
    />
    <img
      src="{$asset}/short-swirl.png"
      alt="short-swirl"
      srcset=""
      class="short-swirl-img"
    />
  </div>
</div>
{/block} {block name="offer_html"}
<div class="offer-html">
  <div class="line-1">PÂNĂ LA</div>
  <div class="line-2">500</div>
  <div class="line-3">ROTIRI GRATUITE</div>
  <div class="line-4">FĂRĂ DEPUNERE</div>
  <div class="plus-line">
    <div class="line"></div>
    <div class="plus">
      <div class="plus-inside">+</div>
    </div>
    <div class="line"></div>
  </div>
  <div class="line-5">
    <div class="top">COD BONUS:</div>
    <div class="bottom">500ROTIRI</div>
  </div>
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

    .offer {
      height: unset !important;
    }
  }
  
  


  .short-swirl-img {
    display: none;
  }
  .container-hero {
    /* --w1: 900px;
    --n: 10;
    --w2: 700px;
    --m: 6;
    --w3: 300px;
    --p: 4; */
    /* grid-template-columns: repeat(
      auto-fill,
      minmax(
        clamp(
          clamp(
            clamp(
              100%/ (var(--n) + 1) + 0.1%,
              (var(--w1) - 100vw) * 1000,
              100%/ (var(--m) + 1) + 0.1%
            ),
            (var(--w2) - 100vw) * 1000,
            100%/ (var(--p) + 1) + 0.1%
          ),
          (var(--w3) - 100vw) * 1000,
          100%
        ),
        1fr
      )
    );
    grid-template-rows: repeat(7, minmax(10vh, 1fr)); */
    height: 100%;
    max-width: 150vh;
    min-width: 300px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    margin: 0 auto;
  }

  #particle-canvas {
    width: 100%;
    height: 100vh;
    vertical-align: middle;
    position: fixed;
    left: -15em;
    top: 36vh;
    transform: rotate(90deg);
    mix-blend-mode: color-dodge;
    z-index: 0;
  }
  .wrapper-all {
    height: 90%;
    max-width: 100%;
    min-width: 300px;
    display: grid;
    align-items: center;
    position: relative;
    grid-template-columns: repeat(6, minmax(10vh, 1fr));
    grid-template-rows: repeat(6, minmax(10vh, 1fr));
  }

  .splash-screen {
    z-index: 250;
  }

  .frame-img {
    height: 50vh;
    z-index: 2;
  }
  .swirl-wheel {
    position: absolute;
    height: 42vh;
    mix-blend-mode: screen;
    left: 10%;
    top: 7%;
  }

  .robo-img {
    height: 30vh;
  }

  .gonzo-man,
  .santa-man {
    position: relative;
    top: 25px;
  }

  .gonzo-img,
  .santa-img {
    height: 60vh;
  }

  /* .gonzo-img {
    height: 51vh;
  } */

  .wheel-container {
    grid-column: 3 / span 3;
    grid-row: 4;
    position: relative;
    top: 3vh;
    /* transform: scale(1.04); */
  }

  .frame-wheel {
    position: relative;
    display: grid;
    place-content: center;
  }

  .frame-wheel::after {
    content: "";
    position: absolute;
    top: 2.7vh;
    left: 2.2vh;

    background-image: url({$asset}/disc-new.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 90%;
    height: 90%;
    transform: rotate(-20deg);
    animation: disk-rotate 10s infinite ease-in-out 1s alternate;
    z-index: 1;
  }
  @keyframes disk-rotate {
    0%,
    5% {
      transform: rotate(-20deg);
    }

    40%,
    60% {
      transform: rotate(-993deg);
    }

    85%,
    100% {
      transform: rotate(195deg);
    }
  }

  .frame-wheel::before {
    content: "";
    position: absolute;
    top: -16vh;
    left: -0.5vh;
    background-image: url({$asset}/space-man.png);
    background-repeat: no-repeat;
    background-size: 20vh;
    background-position: top center;
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  .wheel-container::after {
    content: "";
    position: absolute;
    top: -7vh;
    left: -2vh;
    background-image: url({$asset}/dog.png);
    background-repeat: no-repeat;
    background-size: 15vh;
    background-position: top right;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .wheel-container::before {
    content: "";
    position: absolute;
    top: -12vh;
    left: 0vh;
    background-image: url({$asset}/guy.png);
    background-repeat: no-repeat;
    background-size: 20vh;
    background-position: top left;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  .santa-man {
    grid-column: 1;
    grid-row: 4;
    z-index: 10;
    margin-left: -2em;
  }
  /* .spark-bottom-img {
    height: 80vh;
  } */
  .bottom-sparkle {
    grid-column: 3;
    grid-row: 2;
    /* width: 100%; */
    /* margin-left: -53vh; */
    /* height: 100%; */
    z-index: 20;
    position: absolute;
    bottom: -3vh;
    left: -6.2em;
    mix-blend-mode: screen;
  }
  .long-swirl-bottom {
    position: absolute;
    z-index: 14;
    bottom: 4vh;

    grid-column: 1;
    mix-blend-mode: screen;
  }
  .long-swirl-img {
    position: relative;
    left: -50vh;
    height: 43vh;
  }
  .spark-bottom-img {
    height: 79vh;
  }
  /* .long-swirl-img {
    height: 50vh;
  } */
  .robo-man {
    grid-column: 4;
    grid-row: 2;
  }

  .gonzo-man {
    grid-column: 5;
    grid-row: 4;
    z-index: 16;
    margin-left: 1em;
  }

  .char {
    z-index: 2;
  }

  .offer img {
    width: unset;
    height: unset;
  }

  .offer-content {
    top: 1.2vh;
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

  .line-1 {
    color: black;
    padding: 0.2em 0.3em;
    width: fit-content;
    background-color: #ffc107;
    font-size: 1.6em;
    margin-bottom: 0.4em;
    margin-left: 0.3em;
    margin-top: 0.2em;
  }

  .line-2 {
    font-size: 7.5em;
    margin-top: -0.3em;
  }

  .line-3 {
    font-size: 1.5em;
    margin-top: -0.9em;
  }

  .line-4 {
    font-size: 1.54em;
    margin-bottom: 0.5em;
  }

  .plus-line {
    display: flex;
    align-items: center;
    margin-top: -0.3em;
    margin-left: 0.3em;
    margin-bottom: 0.5em;
    width: 12.6em;
    justify-content: center;
  }

  .plus-line .line {
    flex: 1;
    height: 0.13em;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 0.06em;
  }

  .plus-line .plus {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 1em;
    height: 1em;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 0.4em;
    margin-left: 0.4em;
    border-radius: 50px;
    background-color: white;
  }

  .plus-line .plus .plus-inside {
    color: black;

    margin-top: -0.03em;
  }

  .line-5 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.7em;
  }

  .line-5 .top {
    font-size: 0.9em;
    margin-bottom: -0.2em;
    z-index: 5;
    color: white;
  }

  .line-5 .bottom {
    font-size: 1.4em;
    font-weight: 900;
    border: 1px solid #ffc107;
    color: #ffc107;
    border-radius: 5px;
    padding: 0.3em 1em 0.3em 1em;
    transform: scale(1.2);
    clip-path: polygon(
      17% 0%,
      0% 0%,
      0% 100%,
      100% 100%,
      100% 0%,
      83% 0%,
      92% 22%,
      8% 23%
    );
  }

  .promo-text {
    position: relative;
  }

  .offer {
    width: 100%;
    height: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 2vh;
    font-size: 1.35em;
    z-index: 15;
  }

  .offerA {
    height: 70vh !important;
    position: absolute;
    width: auto !important;
  }

  .offer-html {
    font-size: 1.9vh;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
  }

  .swiper-slide {
    margin-right: 1px !important;
  }

  .promo-text {
    text-transform: uppercase;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
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

  @media (max-width: 450px) {
    .promo-text {
      font-size: 18px !important;
      padding: 0.2em 0.5em;
    }
    .above-fold {
      height: calc(100vh - 83px) !important;
    }
    .providers .swiper-slide {
      width: 28% !important;
    }
  }

  @media (orientation: portrait) {
    .long-swirl-img {
      display: none;
    }
    .short-swirl-img {
      display: block;
      height: 100%;
      width: 150%;
      position: relative;
      left: -33vw;
    }
    .wrapper-all {
      height: 72%;
      z-index: 4;
    }
    .long-swirl-bottom {
      position: absolute;
      bottom: 9vh;
      left: unset;
    }
    #particle-canvas {
      transform: rotate(325deg);
      mix-blend-mode: color-dodge;
      left: unset;
      top: unset;
      z-index: 0;
    }
    .offer.animation {
      z-index: 3;
      position: absolute;
      top: 3vh;
      left: 6em;
      height: 36% !important;
    }

    .offer {
      display: grid;
      justify-content: center;
      place-items: center;
      position: relative;
    }

    .offer-html {
      font-size: 1.3vh;
    }

    .offer-content {
      top: 0vh;
    }

    .separator-mobile {
      display: none;
    }

    .cta-button.mobile.animation {
      z-index: 103;
    }

    .offerA {
      width: 43vh !important;
      position: absolute;
      height: auto !important;
    }

    footer .terms-toggle {
      font-size: 1.8em;
      width: fit-content;
      padding: 0.3em 1em !important;
    }

    .below-fold {
      z-index: 199;
    }

    .container-hero {
      height: 90%;
      max-width: 640px;
      min-width: 300px;
      margin: 5em auto 1em auto;
    }

    .cta-button.desktop {
      display: none;
    }

    .cta-button.mobile {
      display: inline-flex;
      justify-content: center;
      color: #fff;
      text-decoration: none;
      padding: 1em 2em;
      position: absolute;
      bottom: 60px;
      z-index: 150;
      left: 24%;
    }

    .steps {
      font-size: 20px;
    }

    .wheel-container {
      grid-column: 1 / span 3;
      grid-row: 3;
      left: 1.3em;
      transform: scale(1);
    }

    .wheel-container::before {
      background-size: 15vh;
      top: -9vh;
      left: -1vh;
    }
    .wheel-container::after {
      background-size: 10vh;
      top: -5vh;
    }
    .frame-wheel::before {
      background-size: 15vh;
      top: -10vh;
    }
    .frame-wheel::after {
      left: -0.5vh;
      width: 103%;
      height: 103%;
      top: -0.5vh;
    }
    .gonzo-img,
    .santa-img {
      height: 34vh;
      transform: rotateY(-180deg);
    }
    .long-swirl-img {
      height: 20vh;
    }
    .gonzo-man {
      grid-column: 3;
      grid-row: 4;
      margin-left: -1em;
    }
    .santa-man {
      grid-column: 1;
      grid-row: 4;
      margin-left: -3em;
    }
    .bottom-sparkle {
      grid-column: 1;
      grid-row: 2;
      bottom: -4vh;
      left: -3em;
    }
    .spark-bottom-img {
      height: 47vh;
    }
  }

  @media (min-width: 1921px) {
    .above-fold {
      max-height: unset;
    }
  }

  @media (max-width: 480px) {
    .frame-img {
      height: 36vh;
      z-index: 2;
    }
    .swirl-wheel {
      position: absolute;
      height: 32vh;
      mix-blend-mode: screen;
      left: 1%;
      top: 5%;
    }

    .robo-img {
      height: 15vh;
    }

    .gonzo-man,
    .santa-man {
      position: relative;
      top: 25px;
    }
  }

  @media (min-width: 320px) {
    .text-mobile {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      width: 80%;
      justify-content: center;
      text-align: center;
      margin: 0 auto;
    }
  }
  @media (orientation: portrait) and (min-aspect-ratio: 500 / 736) and (min-width: 500px) {
    .above-fold {
      height: 100vh;
      max-height: 97vh;
    }

    .cta-button.mobile {
      left: 35%;
      right: 35%;
      bottom: 100px;
    }
  }

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1) {
    .separator-mobile {
      display: block;
    }
    .container-hero {
      height: 100%;
      max-width: 870px;
    }
    .wheel-container {
      grid-column: 1 / span 4;
    }
    .frame-img {
      height: 44vh;
    }
    .swirl-wheel {
      position: absolute;
      height: 38vh !important;
      mix-blend-mode: screen;
      left: 10%;
      top: 5%;
    }
    .wheel-container::before {
      background-size: 18vh;
      top: -10vh;
      left: -1vh;
    }
    .wheel-container::after {
      background-size: 12vh;
      top: -3vh;
      left: -3vh;
    }
    .offer.animation {
      left: 12em;
    }
    .spark-bottom-img {
    height: 62vh;
}
.bottom-sparkle {
    grid-column: 1;
    grid-row: 1;
    bottom: 3vh;
    left: -2em;
}
    .gonzo-img,
    .santa-img {
      height: 35vh;
    }
    .santa-man {
      margin-left: -5em;
    }
    .gonzo-man {
      margin-left: 1em;
    }
    .frame-wheel::after {
      width: 90%;
      height: 90%;
      top: 2.7vh;
      left: 2.2vh;
    }
  }

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1332px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
    .separator-mobile {
      display: block;
    }
  }
  .frame-wheel::before {
    animation: floating-items 10s ease-in-out infinite;
  }
  .gonzo-man {
    animation: sliding 10s ease-in infinite;
  }
  .santa-man {
    animation: sliding-reverse 10s ease-in infinite;
  }
  .wheel-container::after {
    animation: zooming 10s ease-in-out infinite;
  }
  .wheel-container::before {
    animation: zooming-reverse 10s ease-in-out infinite;
  }

  @keyframes floating-items {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-15px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  @keyframes sliding {
    0% {
      transform: translatex(0px);
    }
    50% {
      transform: translatex(-10px);
    }
    100% {
      transform: translatex(0px);
    }
  }
  @keyframes sliding-reverse {
    0% {
      transform: translatex(0px);
    }
    50% {
      transform: translatex(10px);
    }
    100% {
      transform: translatex(0px);
    }
  }
</style>

{/block}
