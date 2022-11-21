{block name="meta"}
<meta name="robots" content="noindex,follow" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta charset="UTF-8" />

<meta property="og:image" content="{$asset}/og-image3.webp" />

<link rel="icon" type="image/png" href="https://go.netbet.ro/lp-asset/shared/netbet/favicon.ico" />
<meta property="title" content="NetBet Casino" />

<title>Bonus Exclusiv | NetBet Sport</title>
{/block} {block name="add_char"}

<div id="container-snow" style="z-index:150 ;"></div>

<audio src="{$asset}/santa.mp3" id="my_audio" loop="loop" autoplay="autoplay" muted="muted"></audio>

<div class="counter-container">
  <div id="clockdiv" class="swing">
    <div class="clockTop">
      <span class="days">zile rămase</span>
      <div class="smalltext" id="day"></div>
    </div>
    <!-- <div>
      <span class="hours" id="hour"></span>
      <div class="smalltext">nu i gata</div>
    </div>
    <div>
      <span class="minutes" id="minute"></span>
      <div class="smalltext">nu i gata</div>
    </div>
    <div>
      <span class="seconds" id="second"></span>
      <div class="smalltext">nu i gata</div>
    </div> -->
  </div>

  <p id="clock_time"></p>
</div>
<div class="img-char-container charsss BootsAnimation">
  <ul class="socks">
    <li>
      <img src="{$asset}/socks3.png" alt="shocks" />
    </li>
    <li>
      <img src="{$asset}/socks1.png" alt="shocks" />
    </li>
    <!-- clickable sock -->
    <li class="ms-active">
      <img src="{$asset}/socks2.png" alt="shocks" />
    </li>
    <li>
      <img src="{$asset}/socks3.png" alt="shocks" />
    </li>
    <li>
      <img src="{$asset}/socks1.png" alt="shocks" />
    </li>
  </ul>

</div>

{/block} {block name="offer_html"}
<div class="offer-html">
  <div class="line-1">în fiecare zi</div>
  <div class="line-2">UN PREMIU</div>
  <div class="line-3">gratis</div>
  <div class="line-4">în cizmulițe</div>
  <div class="plus-line">
    <div class="line"></div>
    <div class="plus">
      <div class="plus-inside">+</div>
    </div>
    <div class="line"></div>
  </div>
  <div class="line-5">
    <div class="top">Sărbători magice</div>
    <div class="bottom">doar pe netbet</div>
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
  }

  .container-snow {
    z-index: 150;
  }

  .splash-screen {
    z-index: 250;
  }

  .char {
    z-index: 2;
  }

  .snow-flake {
    top: -13.2em;
    position: relative !important;
    height: 15vh !important;
  }

  .offer img {
    width: unset;
    height: unset;
  }

  .offer-content {
    top: 1.2vh;
  }


  .steps {
    padding: 1em 1em !important;
  }



  .char.onmobile {
    display: none;
  }


  footer {
    opacity: 1 !important;
  }
  .promo-text>.inner>span {
    color: #ffd101 !important;
  }
  .cta-button {
    font-size: 1.9vh !important;
    padding: 0 2em;
    margin-top: 0.2em;
    margin-bottom: 0.5em;
    width: 26vh;
    text-align: center;
    display: flex;
    justify-content: center;
    box-shadow: inset 0px 0px 18px 2px rgb(255 0 0 / 56%), 0px 0px 18px 5px rgb(170 39 0 / 35%);
  }

  header {
    z-index: 200;
  }

  .line-1 {
    font-size: 1.2em;
    color: black;
    background: #ffd101;
    padding: 0.2em 0.5em;
    /* border-radius: 5px; */
    width: fit-content;
    margin-left: 0.2em;
  }

  .line-2 {
    font-size: 2.6em;
    margin-top: -0.15em;
  }

  .line-3 {
    font-size: 4.1em;
    margin-top: -0.3em;
  }

  .line-4 {
    font-size: 2.15em;
    margin-top: -0.4em;
    color: #ffd101;
  }

  .plus-line {
    display: flex;
    align-items: center;
    margin-bottom: 0.3em;
    margin-top: 0.3em;

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
    font-weight: bold;
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
    font-size: 1.1em;
    font-weight: 900;
    border: 1px solid #ffc107;
    color: #ffc107;
    border-radius: 6px;
    padding: .3em 1.2em .3em 1.2em;
    transform: scale(1.2);
    clip-path: polygon(17% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 0%, 83% 0%, 92% 22%, 8% 23%);
  }


  .offer-img_new {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .container-hero {
    height: 90%;
    max-width: 100%;
    min-width: 300px;
    margin: 5em auto 1em auto;
    display: grid;
    align-items: center;
    position: relative;
    grid-template-columns: repeat(10, minmax(10vh, 1fr));
    grid-template-rows: repeat(9, minmax(10vh, 1fr));
  }

  .promo-text {
    position: relative;
  }


  .promo-text::after {
    content: "";
    position: absolute;
    left: -1.1vh;
    top: -2.1vh;
    width: 102%;
    height: 90%;
    background-image: url({$asset}/zapada5.png);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .pict-badges {
    height: 75vh !important;
    z-index: -1;
  }

  .offer.animation {
    z-index: 10;
    grid-row: 3 / span 4;
    grid-column: 7 / span 3;
  }

  .offer {
    display: grid;
    justify-content: center;
    place-items: center;
    width: 100%;
    position: relative;
    /* height: 100%; */
    right: -2vh;
    top: 0vh;
    font-size: 1.35em;
  }

  .offerA {
    width: 70vh !important;
    position: absolute;
    height: auto !important;
  }




  .offer-html {
    font-size: 2vh;
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


  #clockdiv {

    color: #fff;
    display: inline-block;
    font-weight: 100;
    text-align: center;
    font-size: 30px;
  }

  .clockTop {

    padding: 0;
    border-radius: 3px;
    background: #1d1d1da3;
    display: inline-block;
    border: 3px solid #fe6431;
    /* -webkit-animation: blinkPainting 0.02s infinite alternate; */
    display: flex;
    flex-direction: column;
    text-align: center;
    box-sizing: border-box;
    background-color: bisque;
    line-height: 1.2em;
    border-radius: 10px;
  }

  .clockTop .days {
    padding: 20px 0;
    position: relative;
    color: bisque;
    background-color: #fe6431;
    font-size: 1.4em;
    font-weight: bold;
    box-shadow: 0 5px 10px rgba(151, 13, 41, 0.534);
  }

  /* @keyframes blinkPainting {
    70% {
    opacity: 0.80;
  }
} */
  .clockTop .days {
    padding: 5px 15px;
    border-radius: 3px;
    font-size: 2.3vh;
    display: inline-block;
    text-transform: uppercase;

  }

  .smalltext {
    font-size: 4.7vh;
    padding: 0.4em;
    text-transform: uppercase;
    color: black;
    font-weight: 800;
  }

  /* #snow {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      filter: blur(0px);
      background-color: white;
      position: absolute;
      animation: fall 10s linear infinite;
      top: -50px;
  }

  @keyframes fall {
      100% {
        top: 100%;
      }
  } */

  .dot {
    width: 35px;
    height: 35px;
    position: absolute;
    background: url({$asset}/snowflake2.png);
    /* background: url({$asset}/snowflake.png); */
    background-size: 30% 30%;
    background-repeat: no-repeat;
  }

  .img-char-container {
    z-index: 118;
    grid-row: 2;
    grid-column: 3;
    position: fixed;
    left: 22%;
    top: 27vh;
  }

  .img-char-container .socks {
    display: flex;
    list-style: none;
    transform: scale(0.9);
  }

  .counter-container {
    grid-column: 4 / span 3;
    grid-row: 2;
    margin: 0 auto;
    position: fixed;
    left: 35%;
    top: 15%;
  }

  .socks li {
    transform: rotate(8deg);
    transform-origin: 50% 0;
    animation: sockSwing 12s infinite alternate;
    margin-right: -3em;
  }

  .promo-text,
  .below-fold {
    z-index: 140;
  }

  .socks li:first-child,
  .socks li:nth-child(3),
  .socks li:nth-child(6) {
    animation-delay: -6s;
  }

  .socks li:hover:before {
    content: "";
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(https://img.netbet.com/casino/advent-christmas2020/SOCK_Gifs_Anim.png) no-repeat top;
    background-size: 100%;
    z-index: 1;
  }


  .socks li img {
    height: 18vw;
  }

  @keyframes sockSwing {
    100% {
      transform: rotate(-8deg);
    }
  }

  .swing {
    animation: swing ease-in-out 1s infinite alternate;
    transform-origin: center -20px;
    float: left;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  }

  .swing:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid #e1e1e1;
    top: -10px;
    left: 50%;
    z-index: 0;
    border-bottom: none;
    border-right: none;
    transform: rotate(45deg);
  }

  /* nail */
  .swing:before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    top: -14px;
    left: 54%;
    z-index: 5;
    border-radius: 50% 50%;
    background: #000;
  }

  @keyframes swing {
    0% {
      transform: rotate(3deg);
    }

    100% {
      transform: rotate(-3deg);
    }
  }

  @keyframes rotateC {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 450px) {
    .promo-text {
      font-size: 18px !important;
      padding: 0.2em 0.5em;
    }

    .providers .swiper-slide {
      width: 28% !important;
    }
  }

  .BootsAnimation {
    animation-name: Boots-animation;
    -webkit-animation-delay: 500ms;
    animation-delay: 500ms;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
    -webkit-animation-duration: 750ms;
    animation-duration: 750ms;
    opacity: 0;
  }


  @keyframes Boots-animation {

    0% {
      opacity: 0;
      -webkit-transform: translateY(-95%);
      transform: translateY(-95%);
    }

    100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

  }

  @media (orientation: portrait) {
    .img-char-container {
      height: fit-content;
      justify-content: center;
      z-index: 118;
      grid-row: 5;
      grid-column: 1;
      position: relative;
      left: 0vh;
      top: 3vh;

    }

    .smalltext {
      font-size: 1em;
      padding: 0.2em;
      text-transform: uppercase;
      color: black;
      font-weight: 800;
    }

    .clockTop {
      line-height: unset;
    }


    .socks li img {
      height: 20vh;
    }

    .socks li {
      position: relative;
    }

    .socks li:nth-child(1) {

      top: -6vh;
    }

    .socks li:nth-child(5) {
      top: -8vh;
    }

    .ms-active img {
      height: 26vh !important;
    }

    .socks li:nth-child(2),
    .socks li:nth-child(4) {
      top: -2vh;
    }

    .socks li:nth-child(3) {
      top: 0vh;
    }

    .pict-badges {
      height: 52vh !important;
    }

    .promo-text::after {
      width: 102%;
      top: -2vh;
      left: unset;

    }

    .counter-container {
      grid-column: 1;
      grid-row: 3;
      margin: 0 auto;
      position: relative;
      left: 2.5vh;
      z-index: 222;
    }

    .clockTop .days {
      font-size: 1.8vh;
    }

    .offer.animation {
      z-index: 100;
      grid-row: 2 / span 2;
      grid-column: 1 / span 4;
      margin-left: 1em;
      margin-top: 1em;
      position: relative;
    }



    .offer {
      display: grid;
      justify-content: center;
      place-items: center;
      position: relative;
      right: -3vh;
    }

    .offer-html {
      font-size: 1.4vh;
    }

    .offer-content {
      top: 0vh;
    }


    /* 
    .offer img {
      width: 45vh;
      height: unset;
    } */



    .separator-mobile {
      display: none;
    }


    .cta-button.mobile.animation {
      z-index: 103;
    }




    .offerA {
      width: 50vh !important;
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
      display: grid;
      place-content: center;
      align-items: center;
      position: relative;
      grid-template-columns: repeat(5, minmax(10vh, 1fr));
      grid-template-rows: repeat(8, minmax(10vh, 1fr));
    }

    .cta-button.desktop {
      display: none;
    }

    .cta-button.mobile {
      display: inline-flex;
      justify-content: center;
      color: #fff;
      text-decoration: none;
      padding: 1em 1em;
      position: absolute;
      bottom: 60px;
      z-index: 150;
      left: 24%;
      box-shadow: inset 0px 0px 18px 2px rgb(255 0 0 / 36%), 0px 0px 18px 5px rgb(163 62 0 / 45%);
      right: 28%;
    }

    body::before {
      background-image: url("{$background_mobile}");
    }

    .steps {
      font-size: 20px;
    }

    @keyframes Boots-animation {

      0% {
        opacity: 0;
        -webkit-transform: translateY(95%);
        transform: translateY(95%);
      }

      100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }

    }

  }

  @media (min-width: 1921px) {

    .above-fold {
      max-height: unset;
    }
  }

    @media (min-width: 1200px) {}

    @media (min-width:992px) {
      
      body::before {
        top: 4vh;
        background-position: top;
        width: 100%;
        height: 100%;
      }

    }
  @media (min-width: 768px) {}

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

  @media (orientation:landscape) and (max-height:940px) {
    .img-char-container {
      left: 20vw;
      top: 15vw;
    }

  }

  @media (orientation:landscape) and (max-height:700px) {
    .img-char-container {
      left: 25vw;
    }

    .socks li img {
      height: 17vw;
    }
  }


  @media (orientation: portrait) and (min-aspect-ratio: 500 / 736) and (min-width: 500px) {
    .img-char-container {
      grid-column: 1 / span 5;
    }

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

  .pict-off {
    animation: rotateC 130s infinite alternate linear;
  }
</style>

{/block} {block name="imgNew"}
<a href="#" style="
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
  ">
  <div class="offer-img_new">

    <!-- <img class="pict-badges pict-off" id="imgOn" alt="bad" src="" /> -->
    <img class="pict-badges pict-on" id="imgOsn" src="{$asset}/light-on3.png" alt="bad"
      style="position: absolute; z-index: -1 !important;" />
    <img class="pict-badges pict-off" id="imgOn" src="{$asset}/light-off3.png" alt="bad"
      style="position: absolute; z-index: -3 !important;" />
    <!-- <img
    class="snow-flake"
    src="{$asset}/zapada4.png"
    alt="bad"
    style="position: absolute"
  /> -->
  </div>
</a>

{/block} {block append name=js} {literal}

<script>
  window.onload = function () {
    document.getElementById("my_audio").play();
  };
  $(document).ready(() => {
    setInterval(() => {
      $(".pict-on").fadeIn();
      $(".pict-on").fadeOut();

    }, 300);
    setInterval(() => {
      $(".pict-off").fadeOut();
      $(".pict-off").fadeIn();
    }, 700);
  });

  //    function snowTime() {
  //       for(let i=0; i < 50;i++){
  //           let snow = document.createElement('div');
  //           let po = Math.floor(Math.random()*100);
  //           let d = Math.floor(Math.random()*20000);
  //           let snowBlur = Math.floor(Math.random()*15);
  //           snow.id = 'snow';
  //           snow.style.left = po + '%';
  //           snow.style.animationDuration = d + 'ms';
  //           snow.style.filter = `blur(${snowBlur +2}px)`;
  //           document.body.appendChild(snow);
  //   }
  // }
  // snowTime();
  TweenLite.set("#container-snow", {
    perspective: 250,
  });
  // TweenLite.set("imgs", { xPercent: "-50%", yPercent: "-50%" });

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

  var deadline = new Date("jan 2, 2023 01:59:00").getTime();

  var now = new Date().getTime();
  var t = deadline - now;
  var days = Math.floor(t / (1000 * 3600 * 24));
  // var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
  // var seconds = Math.floor((t % (1000 * 60)) / 1000);
  document.getElementById("day").innerHTML = days;
  // document.getElementById("hour").innerHTML = hours;
  // document.getElementById("minute").innerHTML = minutes;
  // document.getElementById("second").innerHTML = seconds;

  if (t < 0) {
    clearInterval(x);
    document.getElementById("clock_time").innerHTML = "TIME UP";
    document.getElementById("day").innerHTML = "0";
    // document.getElementById("hour").innerHTML = "0";
    // document.getElementById("minute").innerHTML = "0";
    // document.getElementById("second").innerHTML = "0";
  }
</script>
{/literal} {/block}