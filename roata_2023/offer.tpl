{block name="add_char"}

<!-- <div id="container-snow" style="z-index:150 ;perspective :250px;"></div> -->
<div class="wrapper-all">
  <div class="wheel-container">
    <div class="frame-wheel">
      <img
        src="{$asset}/spark-wheel1.png"
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
    <img src="{$asset}/santa-31.png" alt="santa" srcset="" class="santa-img" />
  </div>
  <div class="gonzo-man">
    <img src="{$asset}/gonzo-41.png" alt="gonzo" srcset="" class="gonzo-img" />
  </div>
  <!-- <div class="bottom-sparkle">
    <img
      src="{$asset}/spark-bottom.png"
      alt="spark-bottom"
      srcset=""
      class="spark-bottom-img"
    />
  </div> -->
  <div class="long-swirl-bottom">
    <img
      src="{$asset}/long-swirl2.png"
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
  <!-- <div class="plus-line">
    <div class="line"></div>
    <div class="plus">
      <div class="plus-inside">+</div>
    </div>
    <div class="line"></div>
  </div> -->
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
 
  @media (orientation: landscape) and (max-height: 800px) {
    .container-hero {
      height: 110%;
      width: 950px;
    }
  }
  @media (orientation: landscape) and (min-height: 1081px) {
    .container-hero {
      max-width: 1520px !important;
    }
  }
  .short-swirl-img {
    display: none;
  }
  header {
    height: 5.11em !important;
  }
  .container-hero {
    height: 100%;
    max-width: 1200px;
    min-width: 300px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;
    margin: 0 auto;
  }

  .promo-text {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .container-snow {
    perspective: 200px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .wrapper-all {
    height: 90%;
    max-width: 100%;
    width: 70%;
    min-width: 300px;
    display: grid;
    align-items: center;
    position: relative;
    grid-template-columns: repeat(6, minmax(10vh, 1fr));
    grid-template-rows: repeat(6, minmax(10vh, 1fr));
  }

  .wrapper-all::before,
  .wrapper-all::after {
    content: "";
    position: absolute;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .wrapper-all::after {
    top: 4.8vh;
    transform: rotatey(-180deg);
    -webkit-transform: rotateY(-180deg);
    left: 31vw;
    background-image: url({$asset}/space-man2.png);
    background-size: 9vh;
    background-position: top left;
  }
  .wrapper-all::before {
    bottom: 19.7vh;
    /* left: -5.5vw; */
    right: 60%;
    transform: translateY(-180px);
    background-image: url({$asset}/guy-bkg.png);
    background-repeat: no-repeat;
    background-size: 12vh;
    background-position: bottom left;
  }

  .splash-screen {
    z-index: 250;
  }

  .robo-img {
    height: 30vh;
  }

  .gonzo-man,
  .santa-man {
    position: relative;
    top: -20px;
  }

  .gonzo-img,
  .santa-img {
    height: 60vh;
  }

  .gonzo-img {
    height: 68vh;
    position: relative;
    top: -2em;
    left: -1em;
  }

  .wheel-container {
    grid-column: 2 / span 4;
    grid-row: 2 / span 4;
    position: relative;
    width: 100%;
    height: 60vh;
    top: -2vh;
  }

  .frame-wheel {
    position: relative;
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
  }
  .frame-img {
    height: 72vh;
    z-index: 2;
    position: relative;
    top: 1.3em;
    left: 1em;
  }
  .swirl-wheel {
    position: absolute;
    height: 60vh;
    mix-blend-mode: screen;
    left: 3em;
    top: 1.3em;
  }
  .frame-wheel::after {
    content: "";
    position: absolute;
    top: 2.7vh;
    left: 1.6vh;
    background-image: url({$asset}/disc-new2.png);
    background-repeat: no-repeat;
    background-size: 78vh;
    background-position: center;
    width: 100%;
    height: 100%;
    transform: rotate(1deg);
    animation: disk-rotate 10s ease-in-out 1s alternate infinite;
    z-index: 1;
  }
  @keyframes disk-rotate {
    0%,
    5% {
      transform: rotate(1deg);
    }

    30%,
    60% {
      transform: rotate(-900deg);
    }

    75%,
    100% {
      transform: rotate(-1440deg);
    }
  }

  .frame-wheel::before {
    content: "";
    position: absolute;
    background-image: url({$asset}/space-man1.png);
    background-repeat: no-repeat;
    background-size: 40vh;
    background-position: top center;
    width: 100%;
    height: 100%;
    left: 8em;
    z-index: 10;
    top: -0.8em;
    left: 7em;
  }
  .wheel-container::after,
  .wheel-container::before {
    bottom: -5vh;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    z-index: 22;
    content: "";
    position: absolute;
  }
  .wheel-container::after {
    left: -9vh;
    background-image: url({$asset}/dog3.png);
    background-size: 16vh;
    background-position: bottom right;
  }

  .wheel-container::before {
    left: 15vh;
    background-image: url({$asset}/Dog2.png);
    background-size: 19vh;
    background-position: bottom left;
    z-index: 10;
  }
  .santa-man {
    grid-column: 1;
    grid-row: 4;
    z-index: 10;
  }

  .bottom-sparkle {
    grid-column: 3;
    grid-row: 2;
    z-index: 20;
    position: absolute;
    bottom: -3vh;
    left: -6.2em;
    mix-blend-mode: screen;
  }
  .long-swirl-bottom {
    position: absolute;
    z-index: 14;
    bottom: 1vh;
    left: -44vh;
    grid-column: 1;
    mix-blend-mode: screen;
    z-index: 50;
  }
  .long-swirl-img {
    position: relative;

    height: 34vh;
    transform: rotate(4deg);
  }
  .spark-bottom-img {
    height: 79vh;
  }

  .robo-man {
    grid-column: 4;
    grid-row: 2;
  }

  .gonzo-man {
    grid-column: 5;
    grid-row: 4;
    z-index: 140;
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
    width: 30%;
    height: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 2vh;
    font-size: 1.35em;
    z-index: 55;
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
      height: calc(100vh - 65px) !important;
    }
    .providers .swiper-slide {
      width: 28% !important;
    }
  }

  @media (orientation: portrait) {
    .frame-wheel::after {
      background-size: 36vh;
      top: 1.9vh;
    }
    .long-swirl-img {
      display: none;
    }
    .gonzo-man {
      z-index: 50 !important;
    }

    .short-swirl-img {
      display: block;
      height: 100%;
      width: 150%;
      position: relative;
      left: -33vw;
    }

    .wrapper-all {
      height: 100%;
      width: 100%;
      position: relative;
      left: 1em;
      top: -1.5em;
    }

    .long-swirl-bottom {
      position: absolute;
      bottom: 9vh;
      left: unset;
    }

    .offer.animation {
      z-index: 3;
      position: absolute;
      top: 3vh;
      right: 2em;
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
      grid-row: 4;
      left: 1.3em;
    }

    .wheel-container::before {
      background-size: 11vh;
      top: -9vh;
      left: 5vh;
    }
    .wheel-container::after {
      background-size: 9vh;
      bottom: 10vh;
      left: -5vh;
    }

    .swirl-wheel {
      position: absolute;
      height: 29vh !important;
      mix-blend-mode: screen;
      left: 1%;
      top: 28%;
    }
    .gonzo-img {
      height: 68vh;
      top: unset;
      left: unset;
    }
    .gonzo-img,
    .santa-img {
      height: 34vh;
    }
    .long-swirl-img {
      height: 20vh;
    }
    .gonzo-man {
      grid-column: 3;
      grid-row: 4;
      margin-left: 0em;
    }
    .santa-man {
      grid-column: 1;
      grid-row: 4;
      margin-left: -5em;
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
    .frame-img {
      height: 33vh;
      z-index: 2;
    }
    .frame-wheel::before {
      background-size: 17vh;
      top: 17vh;
      transform: rotate(13deg);
      -webkit-transform: rotate(13deg);
      left: 2em;
    }

    .wrapper-all::after {
      top: 6vh;
      transform: rotatey(-180deg);
      -webkit-transform: rotateY(-180deg);
      left: 2.6vh;
      background-size: 9vh;
      background-position: top right;
    }
    .wrapper-all::before {
      bottom: 27.7vh;
      transform: rotatey(-180deg);
      -webkit-transform: rotateY(-180deg);
      background-size: 7vh;
      background-position: bottom left;
    }
  }
  @media (orientation: landscape) and (min-width: 992px) {
  
    .container-hero {
   max-width: 1200px;
    }

  }
  @media (orientation: landscape) and (min-width: 1441px) {
    .container-hero {
   max-width: 1400px;
    }
  }

  @media (min-width: 1921px) {
    .above-fold {
      max-height: unset;
    }
  }
  

  @media (max-width: 480px) {
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
      z-index: 10;
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
      width: 100%;
      height: 100%;
      top: 2.7vh;
      left: 2.2vh;
    }
  }
  @media (orientation: portrait) and (min-aspect-ratio: 500 / 736) and (min-width: 500px) {
    .above-fold {
      height: 100vh;
      max-height: 97vh;
    }

    .wrapper-all {
      left: 2em;
    }
    .frame-wheel::before {
      top: 12vh;
      left: 3em;
    }
    .cta-button.mobile {
      left: 35%;
      right: 35%;
      bottom: 100px;
    }

    .frame-wheel::after {
      background-size: 48vh;
    }
    .frame-wheel::after {
      top: 1.5vh;
      left: 1.2vh;
    }
    .wheel-container::after {
      background-size: 12vh;
      top: -9vh;
      left: -8vh;
    }
    .wheel-container::before {
      background-size: 12vh;
      top: -9vh;
      left: 9vh;
      z-index: 10;
    }
    .gonzo-img,
    .santa-img {
      height: 45vh;
    }
    .santa-man {
      margin-left: -10em;
    }
    .gonzo-man {
      margin-left: 6em;
    }
    .swirl-wheel {
      height: 40vh !important;
      left: 3%;
      top: 18%;
    }
    .long-swirl-img {
      height: 15vh;
      display: block;
    }
    .short-swirl-img {
      display: none;
    }
    .long-swirl-bottom {
      position: absolute;
      bottom: 16vh;
      left: -22vw;
    }
    .offer.animation {
      left: unset;
    }
  }
  @media only screen and (min-device-width: 1024px) and (max-device-width: 1332px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
    .separator-mobile {
      display: block;
    }
    .offer.animation {
      left: unset;
    }

    .frame-wheel::after {
      background-size: 48vh;
    }
    .frame-wheel::after {
      width: 100%;
      height: 100%;
      top: 1.5vh;
      left: 1.2vh;
    }
    .wheel-container::after {
      background-size: 12vh;
      top: -9vh;
      left: -8vh;
    }
    .wheel-container::before {
      background-size: 12vh;
      top: -9vh;
      left: 9vh;
      z-index: 10;
    }
    .gonzo-img,
    .santa-img {
      height: 45vh;
    }
    .santa-man {
      margin-left: -10em;
    }
    .gonzo-man {
      margin-left: 6em;
    }
    .swirl-wheel {
      height: 40vh !important;
      left: 3%;
      top: 18%;
    }
    .long-swirl-img {
      height: 15vh;
      display: block;
    }
    .short-swirl-img {
      display: none;
    }
    .long-swirl-bottom {
      position: absolute;
      bottom: 16vh;
      left: -22vw;
    }
  }

  .wrapper-all::after {
    animation: floating-items 18s linear infinite forwards;
    z-index: 150;
  }
  .wrapper-all::before {
    animation: move-left 25s linear infinite forwards 1s;
  }
  .gonzo-man {
    animation: sliding 10s ease-in infinite;
  }
  .santa-man {
    animation: sliding-reverse 10s ease-in infinite;
  }

  @keyframes floating-items {
    0% {
      top: 100%;
    }

    100% {
      top: -30%;
    }
  }

  @media screen and (orientation: portrait) {
    .wrapper-all::after {
      z-index: 0;
    }
    @keyframes floating-items {
      0% {
        top: 50%;
      }

      100% {
        top: -30%;
      }
    }
  }

  @keyframes move-left {
    0% {
      right: 60%;
      transform: translateY(-180px);
    }

    25%,
    65% {
      transform: translateY(80px);
    }

    100% {
      transform: translateY(-150px);
      right: -200%;
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

  .dot {
    width: 35px;
    height: 35px;
    position: absolute;
    background: url({$asset}/snowflake2.png);
    background-size: 30% 30%;
    background-repeat: no-repeat;
  }
</style>

{/block} {block append name=js} {literal}

<script>
  $(".hero").prepend('<div id="container-snow" style="z-index:150;"></div>');

  TweenLite.set("#container-snow", {
    perspective: 250,
  });

  var total = 150;
  var warp = document.getElementById("container-snow"),
    w = window.innerWidth,
    h = window.innerHeight;

  for (i = 0; i < total; i++) {
    var Div = document.createElement("div");
    TweenLite.set(Div, {
      attr: {
        class: "dot",
      },
      x: R(0, w),
      y: R(-200, -150),
      z: R(-200, 200),
    });
    warp.appendChild(Div);
    animm(Div);
  }

  function animm(elm) {
    TweenMax.to(elm, R(3, 6.5), {
      y: h + 100,
      ease: Linear.easeNone,
      repeat: -1,
      delay: -15,
    });

    TweenMax.to(elm, R(5, 7), {
      x: "+=100",
      repeat: -1,
      yoyo: true,
      ease: Sine.easeInOut,
    });
  }

  function R(min, max) {
    return min + Math.random() * (max - min);
  }
</script>
{/literal} {/block}