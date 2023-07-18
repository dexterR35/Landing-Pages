{block name="add_char"}

<div class="seven">
  <img src="{$asset}/seven.png" alt="girl" srcset="" />
</div>
<div class="lime">
  <img src="{$asset}/lemon.png" alt="girl" srcset="" />
</div>
<div class="cherry">
  <img src="{$asset}/cherry.png" alt="girl" srcset="" />
</div>
<div class="girl">
    <img src="{$asset}/Girl.png" alt="girl" srcset="" />
</div>

{/block} {block name="offer_html"}
<div class="offer-html">
  <!-- <div class="line-1">PÂNĂ LA</div> -->
  <div class="line-2">250 RUNDE</div>
  <div class="line-2-2">Gratis</div>
  <div class="line-3">LA EXTRA STARS</div>
  <div class="line-4">FĂRĂ DEPUNERE</div>
  <div class="line-5">
    <div class="top">COD BONUS:</div>
    <div class="bottom">250ANA</div>
  </div>
</div>
{/block} {block name="offer_css"}

<style>

  body::before {
    background-position: 0 2em !important;
  }

  .wrapper-all {
    width: 100%;
    /* background-color: black; */
    height: 100%;
    display: grid;
    place-items: flex-end;
    justify-content: center;
    /* position: relative; */
    top: 2%;
    z-index: 1;
  }

  .promo-text {
    z-index: 20;
  }

  .girl {
  top: 2vh;
  position: relative;
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
    visibility: hidden;
  }

  .line-2 {
    font-size: 2.4em;
    margin-top: 0.6em;
  }

  .line-2-2 {
    font-size: 3.8em;
    margin-top: -0.2em;
  }

  .line-3 {
    font-size: 1.6em;
    margin-top: -0.3em;
  }

  .line-4 {
    font-size: 1.6em;
    margin-bottom: 0.4em;
    color: #ffc107;
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

  .girl img {
    height: 77vh;
    max-height: 77vh;
  }

  .seven {
    grid-column: 5;
    grid-row: 1;
    top: 3em;
    left: -2em;
    z-index: -1;
  }
  .lime {
    grid-column: 7;
    grid-row: 4;
    left: 12em;
    top: 1em;

  }

  .cherry {
    grid-column: 7;
    grid-row: 2;
    left: -2em;
    top: -3em;
  }

  .cherry,
  .lime,
  .seven {
    animation-name: floating;
    animation-duration: 15s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    position: absolute;
  }

  @keyframes floating {
    from {
      transform: translate(0, -0px);
    }
    65% {
      transform: translate(0, -15px);
    }
    to {
      transform: translate(0, 0px);
    }
  }

  .cherry img,
  .lime img,
  .seven img {
    height: 13vh;
  }

  @media (max-width: 1400px) {
    .girl img {
      height: 74vh;
      max-height: 74vh;
    }
  }
  @media (max-width: 1024px) {
    body::before {
      background-image: url({$asset}/bg-mobile_new.png);
    }
  }
  @media (max-width: 991px) {
    .lime {
    grid-column: 5;
    grid-row: 4;
    left: -2em;
    top: -8em;
}
.cherry {
    grid-column: 3;
    grid-row: 4;
    left: 12em;
    top: 10em;
}
.seven {
    grid-column: 1;
    grid-row: 1;
    top: 5em;
    left: 2em;
}

  }
  @media (max-width: 480px) and (orientation: portrait) {
    .girl img {
      height: 53vh;
      max-height: 53vh;
    }

    .girl {
      transform: rotateY(180deg) translateX(-2em);
    }

    .offer {
      grid-column: 4;
      grid-row: 1;
      top: -4em;
      font-size: 1.6vh;
    }

    .wrapper-all {
      grid-column: 1 / span 2;
      grid-row: 3 / span 3;
    }
  }

  @media (min-width: 991px) {
    .offer {
      left: -6em;
    }
  }

  @media (orientation: portrait) and (min-aspect-ratio: 500 / 736) and (min-width: 500px) {
    .girl img {
      height: 60vh;
      max-height: 60vh;
    }

    .wrapper-all {
      left: 0%;
    }

    .offer {
      grid-column: 4;
      grid-row: 2;
      top: -5vh;
      left: 9vh;
      font-size: 1.7vh;
    }
  }

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1332px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {
    .container-hero {
      top: 0;
    }
  }
    @media screen and (orientation: landscape) and (max-width: 960px) {
        .offer {
        grid-column: 3 / span 3;
        grid-row: 1 /span 7;
        top: 0vh;
        font-size: 2.1vh;
    }
    .above-fold {
    min-height: 300px;
  }
}
</style>
{/block}
