{block name="meta"}
<meta name="robots" content="noindex,follow" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta charset="UTF-8" />

<meta property="og:image" content="{$asset}/og-image3.png" />

<link
  rel="icon"
  type="image/png"
  href="https://go.netbet.ro/lp-asset/shared/netbet/favicon.ico"
/>
<meta
  property="title"
  content="Profită de oferta NetBet Sport pentru pariorii noi și bucură-te de bonusuri exclusive, atât la validare cât și la depunere - intră în universul NetBet!"
/>
<title>Bonus Exclusiv | NetBet Sport</title>
{/block} {block name="add_char"}
<div class="wrap-wrap">
  <div class="wrapper-all">
    <div id="drag-container">
      <div id="spin-container">
        <!-- Add your images (or video) here -->
        <img src="{$asset}/img/3.jpg" alt="" />
        <img src="{$asset}/img/1.jpg" alt="" />
        <img src="{$asset}/img/2.jpg" alt="" />
        <img src="{$asset}/img/3.jpg" alt="" />
        <img src="{$asset}/img/2.jpg" alt="" />
        <img src="{$asset}/img/5.jpg" alt="" />

        <!-- Example image with link -->
        <a target="_blank" href="./img/8.jpg">
          <img src="{$asset}/img/6.webp" alt="" />
        </a>

        <!-- Example add video  -->
        <video controls autoplay="autoplay" loop>
          <source src="{$asset}/img/7.mp4" type="video/mp4" />
        </video>

        <!-- Text at center of ground -->
        <p>OFERTA</p>
      </div>
      <div id="ground"></div>
    </div>

    <div id="music-container"></div>
  </div>
</div>


{/block} {block name="offer_html"}
<div class="offer-html">
  <div class="line-1">20 RON</div>
  <div class="line-2">fara depunere</div>
  <!-- <div class="line-3">Far</div>
  <div class="line-4">100 ron</div> -->
</div>

{/block} {block name="offer_css"}
<style>


.wrap-wrap {
        /* background: #111;
        overflow: hidden; */
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        justify-content: center;
        align-items: center;
        /* height: 100vh; */
        grid-column: 1/span 7;
    grid-row: 2/span 4;
    z-index: 2000;
      }
      .wrapper-all {
        -webkit-perspective: 1000px;
        perspective: 1000px;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
      }
      /* 
body{
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
} */

      #drag-container,
      #spin-container {
        position: relative;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        margin: auto;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        -webkit-transform: rotateX(-10deg);
        transform: rotateX(-10deg);
        width: 180px !important;
    height: 280px !important;
      }

      #drag-container img,
      #drag-container video {
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        line-height: 200px;
        font-size: 50px;
        text-align: center;
        -webkit-box-shadow: 0 0 8px #fff;
        box-shadow: 0 0 8px #fff;
        -webkit-box-reflect: below 10px
          linear-gradient(transparent, transparent, #0005);
      }

      #drag-container img:hover,
      #drag-container video:hover {
        -webkit-box-shadow: 0 0 15px #fffd;
        box-shadow: 0 0 15px #fffd;
        -webkit-box-reflect: below 10px
          linear-gradient(transparent, transparent, #0007);
      }

      #drag-container p {
        font-family: Serif;
        position: absolute;
        top: 100%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%) rotateX(90deg);
        transform: translate(-50%, -50%) rotateX(90deg);
        color: #fff;
      }

      #ground {
        width: 900px;
        height: 900px;
        position: absolute;
        top: 100%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%) rotateX(90deg);
        transform: translate(-50%, -50%) rotateX(90deg);
        background: -webkit-radial-gradient(
          center center,
          farthest-side,
          #9993,
          transparent
        );
      }

      #music-container {
        position: absolute;
        top: 0;
        left: 0;
        display: none;
      }

      @-webkit-keyframes spin {
        from {
          -webkit-transform: rotateY(0deg);
          transform: rotateY(0deg);
        }
        to {
          -webkit-transform: rotateY(360deg);
          transform: rotateY(360deg);
        }
      }

      @keyframes spin {
        from {
          -webkit-transform: rotateY(0deg);
          transform: rotateY(0deg);
        }
        to {
          -webkit-transform: rotateY(360deg);
          transform: rotateY(360deg);
        }
      }
      @-webkit-keyframes spinRevert {
        from {
          -webkit-transform: rotateY(360deg);
          transform: rotateY(360deg);
        }
        to {
          -webkit-transform: rotateY(0deg);
          transform: rotateY(0deg);
        }
      }
      @keyframes spinRevert {
        from {
          -webkit-transform: rotateY(360deg);
          transform: rotateY(360deg);
        }
        to {
          -webkit-transform: rotateY(0deg);
          transform: rotateY(0deg);
        }
      }




  @media (orientation: landscape) and (min-width: 992px) {
    .char {
      top: unset;
      position: unset;
      left: unset;
      z-index: unset;
      height: unset;
    }
  }
  .splash-screen {
    z-index: 250;
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
    /* position:  relative !important; */
  }
  header .products li a:hover {
    color: #64b000 !important;
  }

  .banner .overlay {
    display: none !important;
  }
  .char.onmobile {
    display: none;
  }
  .inner {
    color: #64b000 !important;
  }

  /*--NetBet Ro sport--*/
  .container-hero {
    height: 90%;
    max-width: 100%;
    min-width: 300px;
    margin: 5em auto 1em auto;
    display: grid;
    /* place-content: center; */
    /* grid-template-columns: 750px 460px; */
    align-items: center;
    position: relative;
    grid-template-columns: repeat(10, minmax(10vh, 1fr));
    grid-template-rows: repeat(9, minmax(10vh, 1fr));
  }

  .img-char-container {
    grid-column: 2;
    grid-row: 6;
    display: flex;
    width: fit-content;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    z-index: 118;
  }

  .offer-img_new {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .offer.animation {
    z-index: 100;
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
  .offerA  {
    width: 70vh !important;
    position: absolute;
    height: auto !important;
  }
  .pictures {
    height: 60vh;
  }
  .pict-badges {
    width: 42vh !important;
    position: relative;
    background-repeat: no-repeat;
    background-size: contain;
    top: 17.7vh;
    left: -0.03em;
  }

  .img-char2 {
    grid-column: 6;
    grid-row: 3;
    position: relative;
    display: flex;
    /* width: fit-content; */
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 118;
  }

  .img-char {
    mix-blend-mode: screen !important;
    z-index: 12;
    grid-column: 6;
    grid-row: 2 / span 2;
    position: relative;
    top: 0.5vh;
    z-index: 233;
    left: -0.5vh;
  }
  .img-char .pict-four {
    height: 5vh;

  }
  /*some animation*/
  .pict-one.pictures {
    width: 10vh;
    height: 100%;
  }
  .part2 .pict-three.pictures {
    height: 19vh;
    position: relative;
    left: 16vh;
    top: 5.5vh;
    opacity: 1;
 
  }
  .pictures_inside {
    position: absolute;
    top: 5px;
    width: auto !important;
    left: 30%;
    height: 55% !important;
    z-index: 41214124141;
  }

  .offer-img_new.text::before {
    content: '';
    position: absolute;
    width: calc(100% + 4px);
    height: calc(100% + 8px);
    top: -4px;
    left: -2px;
    display: block;
    border-radius: 10px;
    pointer-events: none;
    border: 4px solid #fff;
    -webkit-animation: scalePulse 1.6s both infinite;
    animation: scalePulse 1.6s both infinite;
  }
  .offer-img_new.text{
    position: relative;
    top: 7.5vh;
    color: #fdfdfd;
    line-height: inherit;
    width: fit-content;
    height: 4vh;
    font-size: 2.6vh;
    padding: 0.3em 0.5em;
    z-index: 100;
    top: 19vh;
}
  .animation-element {
    animation: move-top 10s 0.3s ease-in-out infinite
      alternate-reverse;
  }
  @keyframes move-top {
    0% {
    transform: translateY(29px) translateX(-44px);
    }

    100% {
        transform: translateY(10px) translateX(6px);
    }
  }

  .pict-one.pictures {
    transform: rotate(0deg);
    animation: rotate-left 10s ease-in-out infinite
      alternate-reverse;
  }

  @keyframes rotate-left {
    0% {
      transform: rotate(0deg);
    }
   

    100% {
      transform: rotate(360deg);
    }
  }

  .pict-two.pictures {
    animation: move-right 10s 0.3s ease-in-out infinite
      alternate;
  }

  @keyframes move-right {
    0% {
    transform: translateY(-3px) translateX(-35px);
    }
    100% {
        transform: translateY(-40px) translateX(0px);
    }
  }



  .offer-html {
    font-size: 2.4vh;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
  }
  /* -----------------PROVIDERS SPORT TEMPLATE CSSS-------------------*/

  .providers img {
    width: 40% !important;
  }
  .providers .swiper-slide {
    width: 10% !important;
  }
  .swiper-slide {
    margin-right: 1px !important;
  }
  .providers {
    padding: 0.3em 1em 0.3em 3em !important;
  }
  .cta-button,
  .steps .separator,
  .steps .number,
  .bottom-center,
  .bottom::before {
    background: #64b000 !important;
  }
  .cta-button:hover,
  .bottom-center:hover,
  .bottom::before {
    background: #64b000 !important;
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
  .inner > span {
    color: #64b000 !important;
    padding: 0 0.2em;

  }

  @media (max-width: 450px) {
    .promo-text {
      font-size: 20px !important;
    }
    .providers .swiper-slide {
      width: 18% !important;
    }
  }
  @media (orientation: portrait) {
      .img-char-container {
        grid-column: 1 / span 5;
        grid-row: 6;
        height: fit-content;
        justify-content: center;
        margin: 0 auto;
        margin-left: -1em;
        z-index: 101;
      }
      .offer-img_new.text::before {
        border: 2px solid white;
      }
      .offer.animation {
        z-index: 100;
        grid-row: 2 / span 2;
        grid-column: 1 / span 4;
        margin-left: 1em;
        margin-top: 1em;
        position: relative;
      }
      .img-char-container .pict-one {
        margin-right: -8em;
      }
      .img-char-container .pict-three {
        margin-left: -10em;
      }
      .pictures {
        width: 65vh;
      }
      .offer {
        display: grid;
        justify-content: center;
        place-items: center;
        position: relative;
        right: -3vh;
      }
      .offer-html {
        font-size: 1.9vh;
      }
      .offer-content {
        top: 0vh;
      }
      .pict-two.pictures {
        width: 50vh;
        height: unset;
      }
      .offer img {
        width: 45vh;
        height: unset;
      }
      .offer-img_new {
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-left: -0.1em;
      }
      .separator-mobile {
        display: none;
      }
      .pict-badges {
        width: 32.4vh !important;
        position: relative;
        background-repeat: no-repeat;
        background-size: contain;
        margin-top: 0.3em;
        top: 9vh;
      }
      .cta-button.mobile.animation{
        z-index: 103;
      }
      .pict-one.pictures {
        width: 7.5vh;
        height: 100%;
    }
      .img-char2 {
        grid-column: 5;
        grid-row: 4;
        position: relative;
        display: flex;
        width: auto;
      }
      .pict-four.pictures {
        width: 19vh;
      }
      .img-char {
        mix-blend-mode: screen !important;
        z-index: 12;
        grid-column: 5;
        grid-row: 4;
        position: relative;
        top: -3.2vh;
        z-index: 233;
      }
    .offerA {
        width: 45vh !important;
        position: absolute;
        height: auto !important;
    }
    .part2 .pict-three.pictures {
      height: 19vh;
      position: relative;
      left: 7vh;
      top: 5.5vh;
      opacity: 1;
  
    }
    .offer-img_new.text {
        position: relative;
        top: 10.3vh;
        color: #fdfdfd;
        line-height: inherit;
        width: fit-content;
        height: 2.5vh;
        font-size: 2vh;
        padding: 0em 0.3em;
        z-index: 100;
    }

      @keyframes move-top {
        0% {
           transform: translateY(50px) translateX(-4px);
        }
      100% {
          transform: translateY(-0px) translateX(-6px);
      }
    }

  }

  @media (orientation: portrait) and (max-width: 450px) {
    .text-mobile {
      display: flex;
      flex-direction: column-reverse;
      align-items: center;
      width: 80%;
      justify-content: center;
      text-align: center;
      margin: 0 auto;
    }
    .steps .separator {
      margin-right: 0px;
    }

  }

  footer {
    opacity: 1 !important;
  }
  .cta-button {
    font-size: 1.9vh !important;
    padding: 0 2em;
    margin-top: 0.2em;
    margin-bottom: 0.5em;
  }

  header {
    z-index: 200;
  }

  .line-1 {
    font-size: 4em;
  }

  .line-2 {
    color: #64b000;
    font-size: 1.7em;
    margin-top: -0.6em;
  }

  @media (orientation: portrait) {
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
      left: 28%;
      right: 28%;
    }

    body::before {
      background-image: url("{$background_mobile}");
    }

    .steps {
      font-size: 20px;
    }
  }

  @media (orientation: portrait) and (min-aspect-ratio: 500 / 736) and (min-width: 500px) {
    .img-char-container {
      grid-column: 2 / span 5;
    }
    @media (min-width: 992) {
      .img-char-container {
        grid-column: 2 / span 6;
        grid-row: 6;
        height: fit-content;
      }
    }
  }

  .offer-img_new.text {
    position: relative;
    text-transform: uppercase;
    font-weight: bold;
  }

@-webkit-keyframes scalePulse {
    0% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    80% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1)
    }

    100% {
        opacity: 0;
        -webkit-transform: scale(1.3);
        transform: scale(1.3)
    }
}

@keyframes scalePulse {
    0% {
        opacity: 1;
        -webkit-transform: scale(1);
        transform: scale(1)
    }

    80% {
        -webkit-transform: scale(1.1);
        transform: scale(1.1)
    }

    100% {
        opacity: 0;
        -webkit-transform: scale(1.3);
        transform: scale(1.3)
    }
}

</style>

{/block} {block name="imgNew"}
<a href="https://www.netbet.ro/CM-2022" style="display:flex; justify-content:center; align-items:center; text-decoration: none;">
<div class="offer-img_new">
  <img class="pict-badges" src="{$asset}/element-sport.png" alt="bad" />
</div>

<div class="offer-img_new text .pulse_cm" off-text="infografic cm 2022">
  infografic cm 2022
</div>
</a>

{/block}
