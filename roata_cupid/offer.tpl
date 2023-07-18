{block name="add_char"}

<!-- <div id="container-snow" style="z-index:150 ;perspective :250px;"></div> -->
<div class="wrapper-all">
  <div class="guy_mobile_container">
    <img src="{$asset}/guy_mobile2.png" alt="guy_mobile" class="guy_mobile">
  </div>
  <div class="wheel-container">
    <div class="frame-wheel">
      <img
        src="{$asset}/spark-wheel1.png"
        alt="frame-wheel"
        srcset=""
        class="frame-img swirl-wheel"
      />
      <img
        src="{$asset}/wheel-frame-3.png"
        alt="frame-wheel"
        srcset=""
        class="frame-img"
      />
    </div>
  </div>
  <div class="elementsD">
    <img src="{$asset}/element-desktop-bun.png" class="img-desktop" alt="elem">

  </div>
  <div class="elementsM">

    <img src="{$asset}/element-mobile2.png" class="img-mobile3" alt="elem">
  </div>
  <!-- <div class="bottom-sparkle">
    <img
      src="{$asset}/spark-bottom.png"
      alt="spark-bottom"
      srcset=""
      class="spark-bottom-img"
    />
  </div> -->
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
  .img-mobile {
    display: none;
  }
    .offer {
      height: unset !important;
    }
    .guy_mobile_container {
      display: none;
    }
    .elementsM {
      display: none;
    }
  }
 
  /* @media (orientation: landscape) and (max-height: 800px) {
    .container-hero {
      height: 110%;
      width: 950px;
    }
  }
  @media (orientation: landscape) and (min-height: 1081px) {
    .container-hero {
      max-width: 1520px !important;
    }
  } */

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


  /* .container-hero::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url({$asset}/flare-desktop.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    mix-blend-mode: screen;
    top: -2vh;
    left: 5vw;
    z-index: 70;
  } */
/* 
  .wrapper-all::before,
  .wrapper-all::after {
    content: "";
    position: absolute;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    z-index: 1;
  } */

  /* .wrapper-all::after {
    top: 4.8vh;
    transform: rotatey(-180deg);
    -webkit-transform: rotateY(-180deg);
    left: 31vw;
    background-image: url({$asset}/space-man2.png);
    background-size: 9vh;
    background-position: top left;
  } */
  /* .wrapper-all::before {
    bottom: 19.7vh;
    right: 60%;
    transform: translateY(-180px);
    background-image: url({$asset}/guy-bkg.png);
    background-repeat: no-repeat;
    background-size: 12vh;
    background-position: bottom left;
  } */

  .splash-screen {
    z-index: 250;
  }

  .wheel-container {
    grid-column: 1 / span 4;
    grid-row: 1 / span 5;
    position: relative;
    width: 100%;
    height: 100%;
    top: 2vh;
  }

  .elementsD {
    grid-column: 1 / span 6;
    grid-row: 4;
    top: -7vh;
    left: 4vh;
    z-index: 56;
    position: relative;
  }

  .elementsD img {
    height: 70vh;
  }

  /* .wheel-container::after{
    content: "";
    position:Absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url({$asset}/element-desktop3.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    z-index: 20;
  } */

  .frame-wheel {
    position: relative;
    display: grid;
    place-content: center;
    width: fit-content;
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
    mix-blend-mode: screen;
    left: 0;
    top: 0;
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

  /* .frame-wheel::before {
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
  } */
  /* .wheel-container::after,
  .wheel-container::before {
    bottom: -5vh;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    z-index: 22;
    content: "";
    position: absolute;
  } */
  /* .wheel-container::after {
    left: -9vh;
    background-image: url({$asset}/dog3.png);
    background-size: 16vh;
    background-position: bottom right;
  } */

  /* .wheel-container::before {
    left: 15vh;
    background-image: url({$asset}/Dog2.png);
    background-size: 19vh;
    background-position: bottom left;
    z-index: 10;
  }
  */


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
    .img-mobile {
      display: block;
    }
    .img-desktop {
      display: none;
    }
    .wrapper-all{
      max-width: 380px;
    }
  }

  @media (orientation: portrait) {

  

    .wrapper-all {
      height: 96%;
      width: 100%;
      position: relative;
      /* left: 1em; */
      top: -1.5em;
      justify-content: center;
      grid-template-columns: repeat(4, minmax(10vh, 1fr));
    grid-template-rows: repeat(6, minmax(10vh, 1fr));
    }
    .frame-wheel::after {
      background-size: 53.3vh;
      top: 2vh;
    }
    .steps .text {
      text-shadow: 1px 0.16em 0.2em black !important;
    }
    .swirl-wheel {
    position: absolute;
    mix-blend-mode: screen;
    left: 0;
    top: 7em;
}
    .elementsM img {
    height: 100%;
    width: 100%;
    /* background: black; */
   }
  .guy_mobile_container {
    z-index: 20;
  }
    .elementsM {
    grid-column: 1 /span 4;
    grid-row: 5 /span 2;
    top: 3vh;
    left: -5vh;
    width: 115%;
    height: fit-content;
    z-index: 56;
    place-content: center;
    position: relative;
}
  .guy_mobile_container {
    grid-row: 2;
    grid-column: 1;
    position:relative;
    left: -1em;
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
      grid-column: 1 / span 4;
    grid-row: 2/ span 6;
    left: -8.2em;
    z-index: 22;
    }

    /* .wheel-container::before {
      background-size: 11vh;
      top: -9vh;
      left: 5vh;
    }
    .wheel-container::after {
      background-size: 9vh;
      bottom: 10vh;
      left: -5vh;
    } */

    .frame-img {
      height: 50vh;
      z-index: 2;
    }
    .frame-wheel::before {
      background-size: 17vh;
      top: 17vh;
      transform: rotate(13deg);
      -webkit-transform: rotate(13deg);
      left: 2em;
    }


  }
  @media (orientation: landscape) and (min-width: 992px) {
  
    .container-hero {
   max-width: 1400px;
    }

  }
  @media (orientation: landscape) and (min-width: 992px) and (max-height: 800px) {
  
  .container-hero {
 max-width: 1280px;
  }

}
  @media (orientation: landscape) and (min-width: 992px) and (max-height: 700px) {
  
    .container-hero {
   max-width: 1100px;
    }

  }
  @media (orientation: landscape) and (min-width: 992px) and (min-height: 1000px) {
  
    .container-hero {
   max-width: 1650px;
    }

  }
  @media (orientation: landscape) and (min-width: 992px) and (min-height: 1250px) {
  
  .container-hero {
 max-width: 2200px;
  }

}


  @media (min-width: 1921px) {
    .above-fold {
      max-height: unset;
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
  
    .frame-img {
      height: 44vh;
    }

    .offer.animation {
      left: 12em;
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
    .elementsD {
      display: none;
    }
  
    .elementsM {
    grid-column: 1 /span 4;
    grid-row: 5 /span 2;
    top: 3vh;
    left: -8vh;
    width: 118%;
    }
  
.guy_mobile_container {
    grid-row: 1;
    grid-column: 1;
    position: relative;
    left: -8em;
    width: 100%;
    height: 100%;
}
.guy_mobile_container img {
  height: 46vh;
}
.wheel-container {
    grid-column: 1 / span 4;
    grid-row: 1/ span 6;
    left: -13.2em; 
}
.swirl-wheel{
  top: 23vh;
}
.offerA {
    width: 53vh !important; 
  }
  }


</style>

{/block} 