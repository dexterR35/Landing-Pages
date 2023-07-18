{block name="meta"}
<meta name="robots" content="noindex,follow" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta charset="UTF-8" />
<meta property="og:image" content="{$asset}/og-image12.png" />
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
<!-- <div class="assets-Fotball assetJs">
  <img class="pict-ball" src="{$asset}/ball_main.png" alt="chars" />
</div> -->
<div class="assets-Fotball-dirt assetJs">
  <img class="pict-ball-dirt" src="{$asset}/dirt_main.png" alt="chars" />
</div>
<div class="img-char-container char">
  <!-- <img class="pict-one pictures" src="{$asset}player_main.png" alt="chars" />
  <img class="pict-two pictures" src="{$asset}/d-fotbal-one.webp" alt="chars" /> -->
  <img
    class="pict-three pictures imgVersionDesktop"
    src="{$asset}/Player4.png"
    alt="chars"
  />
  <img
    class="pict-three pictures imgVersionMobile"
    src="{$asset}/Player4.png"
    alt="chars"
  />
  <!-- <img class="pict-ball pictures" src="{$asset}/ball_main.png" alt="chars" /> -->
  <!-- <img
    class="onmobile animation"
    data-cfsrc="{$asset}/char-mobile-balls.png"
    alt="charss"
    src="{$asset}/char-mobile-balls.png"
    style="display: none"
  /> -->
</div>

{/block} {block name="offer_html"}
<div class="offer-html">
  <div class="line-1">50 RON</div>
  <div class="line-2">FREEBET</div>
  <div class="line-3">Fără Depunere</div>
  <div class="line-5">
    <div class="top">COD BONUS:</div>
    <div class="bottom">50SPORT</div>
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
    .assets-Fotball-dirt {
      grid-column: 1;
      grid-row: 9;
      mix-blend-mode: multiply;
    }
    .assets-Fotball {
      display: none;
    }
  }
  .imgVersionDesktop {
    display: block;
  }
  .imgVersionMobile {
    display: none;
  }
  .char {
    z-index: 2;
  }
  /* .steps_one {
    width: 40% !important;
  } */

  .offer-content {
    top: 3.2vh;
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
    padding: 0 1em;
  }

  .assets-Fotball-dirt {
    animation: float-dirt 15s ease-in-out infinite alternate;
  }
  .pict-three.pictures {
    animation: float-player 18s ease-in-out infinite alternate;
  }
  .pict-ball {
    -webkit-animation: rotation-ball 45s infinite linear;
  }
  @keyframes float-dirt {
    0% {
      transform: translatey(0px) rotate(0deg);
    }

    100% {
      transform: translatey(-6px) rotate(8deg) skew(11deg);
    }
  }

  @keyframes float-player {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-10px);
    }
    100% {
      transform: translatey(0px);
    }
  }
  @-webkit-keyframes rotation-ball {
    0% {
      -webkit-transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(359deg);
    }
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
    grid-column: 2 / span 4;
    grid-row: 6;
    padding-bottom: 5em;
    display: flex;
    flex-direction: row;
    justify-content: end;
    /* background-color: red; */
    z-index: 118;
    position: relative;
  }

  .img-char-container::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url({$asset}/Ball4.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 30%;
    /* animation-name: spin_b;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;  */
  animation:zoom-in-zoom-out 20s linear infinite alternate;
  }

  @keyframes spin_b {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
@keyframes zoom-in-zoom-out {
  from {
        transform:rotate(0deg) scale(0.7);
    }
    to {
        transform:rotate(360deg) scale(1);
    }
}
  .pict-three.pictures {
    height: 92vh;
  }
  /* .img-char-container::after{
    content: "";
    position: absolute;
    bottom: 20vh;
    left: 20vw;
    width: 20%;
    height: 20%;
    background-image: url({$asset}/ball_main.png);
    background-repeat: no-repeat;
    background-position: center ;
    background-size: contain;
  }
  .img-char-container::before{
    content: "";
    position: absolute;
    top: 0;
    left:0 ;
    width: 100%;
    height: 100%;
    background-image: url({$asset}/dirt_main.png);
    background-repeat: no-repeat;
    background-position: center ;
    background-size: contain;
  } */
  .assets-Fotball {
    grid-row: 8;
    /* background: red; */
    grid-column: 3 / span 4;
    position: relative;
    left: 17vh;
    bottom: -2vh;
  }
  .pict-ball {
    width: 13vh;
  }

  .offer.animation {
    z-index: 100;
    grid-row: 3 / span 4;
    grid-column: 6 / span 3;
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
  .offer img {
    width: 70vh;
    height: auto;
  }

  /*some animation*/

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
    background: #508c00 !important;
  }
  .promo-text {
    text-transform: uppercase;
  }
  .steps {
    z-index: 499 !important;
  }
  .steps .separator {
    margin-right: 15px;
  }
  .steps .text {
    padding-right: 2.5em;
  }
  .inner > span {
    color: #64b000 !important;
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
      grid-column: 1 / span 3;
      grid-row: 1 / span 6;
      height: fit-content;
      justify-content: center;
      padding-left: 10em;
    }
    .img-char-container::after {
      background-size: 50%;
    }
    .offer-content {
    top: 1.2vh;
  }
    .steps .text {
      padding-left: 0.5em;
    }
    .offer.animation {
      display: grid;
      justify-content: center;
      place-items: center;
      position: relative;
      height: fit-content;
      right: -5vh;
      margin-top: 8vh;
      z-index: 10;
      grid-row: 1 / span 2;
      /* background: red; */
      grid-column: 3 / span 3;
      position: absolute;
    }
    .offer-content {
      width: 95%;
    }
    .pict-three.pictures {
      height: 65vh;
    }
    /* .char {
      top: 7vh;
    } */

    .offer-html {
      font-size: 1.55vh;
    }

    .offer img {
      width: 41vh;
      height: unset;
    }

    .pict-ball-dirt {
      width: 80%;
    }
    .assets-Fotball-dirt {
      position: absolute;
      mix-blend-mode: multiply;
      z-index: 120;
      bottom: -4vh;
      left: -4vh;
      width: 100%;
      height: fit-content;
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
    .char {
      top: 11vh;
    }
    .pict-ball-dirt {
      width: 80%;
    }
    .assets-Fotball {
      grid-row: 5;
      grid-column: 2;
      position: relative;
      left: 0vh;
      bottom: 2vh;
    }
    .pict-ball {
      width: 8vh;
    }
    .steps {
      font-size: 11px !important;
    }
  }
  @media (orientation: portrait) and (max-width: 992px) {
    .step.steps_one {
      width: 40% !important;
    }
    .steps .text {
      padding-right: 0em;
    }
    .steps .step {
      display: flex;
      width: 33%;
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
    z-index: 500;
  }

  .line-1 {
    font-size: 3.42em;
    margin-top: -0.4em;
    /* margin-bottom: -0.3em; */
  }

  .line-2 {
    font-size: 2.8em;
    margin-bottom: 0.2em;
    margin-top: -0.35em;
    margin-bottom: -0.3em;
  }
  .line-3 {
    color: #64b000;
    font-size: 1.45em;
    margin-top: 0.2em;
    margin-bottom: -0.3em;
  }
  .line-5 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.7em;
    padding-top: 0.8em;
  }

  .line-5 .top {
    font-size: 0.9em;
    margin-bottom: -0.55em;
    z-index: 5;
    color: white;
  }

  .line-5 .bottom {
    font-size: 1.4em;
    font-weight: 900;
    border: 1px solid azure;
    color: #64b000;
    border-radius: 5px;
    padding: 0.3em 0.5em;
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

  @media (orientation: portrait) {
    footer .terms-toggle {
      font-size: 1.8em;
      width: fit-content;
      padding: 0.3em 1em !important;
    }
    .imgVersionDesktop {
      display: none;
    }
    .imgVersionMobile {
      display: block;
    }
    .below-fold {
      z-index: 199;
    }
    .assets-Fotball {
      grid-row: 5;
      grid-column: 2;
      position: relative;
      left: 0vh;
      bottom: 2vh;
    }
    .pict-ball {
      width: 8vh;
    }

    /* .char {
      display: none;
      height: 55%;
      position: relative;
      top: -32vh;
      align-items: center;
    } */
    .separator-mobile {
      display: none;
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
      grid-template-rows: repeat(6, minmax(10vh, 1fr));
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
      z-index: 121;
      left: 22%;
      right: 22%;
    }

    body::before {
      background-image: url("{$background_mobile}");
    }

    .steps {
      font-size: 20px;
    }
  }
  @media (max-width: 420px){
    .above-fold {
      height: calc(100vh - 88px);
    }
  }
  @media (max-width: 450px){
    .above-fold {
      height: calc(100vh - 88px);
    }
  }
  @media (orientation: portrait) and (min-aspect-ratio: 500 / 736) and (min-width: 500px) {
    .img-char-container {
      grid-column: 1 / span 5;
      justify-content: start;
      align-items: flex-start;
    }
    .container-hero {
      max-width: 100%;
    }
  }
  .assetJs {
    opacity: 0;
    transition: 0.6s ease opacity;
  }
</style>

{/block } {block append name=js} {literal}

<script>
  $(".assetJs").css("opacity", "0");

  setTimeout(() => {
    $(".assetJs").css("opacity", "1");
  }, 750);
</script>

{/literal} {/block}
