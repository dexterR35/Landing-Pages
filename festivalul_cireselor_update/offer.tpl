{block name="add_char"}
<div class="boat">
  <img src="{$asset}/Yacht.png" alt="boat" srcset="" />
</div>
<div class="plane">
  <img src="{$asset}/Avion.png" alt="avion" srcset="" />
</div>
<div class="wrapper-all animation">
  <div class="girl">
    <img src="{$asset}/Girl_2.png" alt="girl" srcset="" />
  </div>

  <div class="dices">
    <div class="div-dices rotate-dices">
      <img src="{$asset}/Dice1.png" alt="d1" srcset="" class="floating-dices" />
    </div>
    <div class="div-dices rotate-dices">
      <img src="{$asset}/Dice2.png" alt="d2" srcset="" class="floating-dices" />
    </div>
    <div class="div-dices rotate-dices">
      <img src="{$asset}/Dice3.png" alt="d3" srcset="" class="floating-dices" />
    </div>
  </div>
</div>
{/block} {block name="offer_html"}
<div class="offer-html">
  <div class="line-1">FESTIVALUL VERII PE NETBET</div>
  <div class="line-2">125 <span>runde</span></div>
  <div class="line-3 line-3-1">gratis la <span>dice & roll</span></div>
  <div class="line-2 line-2-2">+25 <span class="line-2-ron">ron</span></div>
  <div class="line-3 line-3-2">la sloturile <span>amusnet</span></div>
  <div class="line-4">FĂRĂ DEPUNERE</div>
  <div class="line-5">
    <div class="top">COD BONUS:</div>
    <div class="bottom">125DICE</div>
  </div>
</div>
{/block} {block name="offer_css"}

<style>
  .container-hero {
    position: relative;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(7, 1fr);
    margin: 0 auto;
    place-items: center;
  }
  .wrapper-all {
    grid-column: 1 / span 4;
    grid-row: 1 / span 7;
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
  }
  .offer {
    grid-column: 5 / span 3;
    grid-row: 1 / span 6;
    position: relative;
  }

  .promo-text {
    z-index: 20;
  }
  .plane {
    z-index: 10;
  }

  @media (orientation: portrait) {
    .wrapper-all {
      width: 95%;
    }
  }

  /* .offer {
    width: 30%;
    height: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 2vh;
    font-size: 1.35em;
    z-index: 55;
  } */

  .line-1 {
    color: black;
    padding: 0.2em 0.3em;
    background: #ffc107;
    font-size: 0.95em;
    margin-bottom: 0.5em;
    margin-top: 0.2em;
    text-align: center;
  }

  .line-2 {
    font-size: 2.78em;
    margin-top: -0.3em;
    margin-bottom: 0.3em;
  }

  .line-2-2 {
    font-size: 3.66em;
    margin-bottom: 0.15em;
    margin-top: -0.3em;
  }

  .line-3 {
    font-size: 1.22em;
    margin-top: -1em;
    margin-bottom: 0.3em;
    margin-left: 0.1em;
  }

  .line-3-1 {
    font-size: 1.35em;
    margin-left: 0.1em !important;
  }

  .line-3-2 {
    font-size: 1.23em;
  }

  .line-3 span {
    color: #ffc107;
  }

  .line-4 {
    font-size: 1.79em;
    margin-bottom: 0em;
    margin-top: -0.3em;
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

  .girl {
    top: 3em;
    position: relative;
  }

  .girl img {
    height: 82vh;
    max-height: 82vh;
  }
  .offer {
    /* top: -5.5vh !important; */
    /* left: -6em; */
  }

  .dices {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 18em;
  }

  .plane {
    position: absolute;
    top: 9%;
    animation: plane-move 15s infinite forwards linear;
  }

  @keyframes plane-move {
    0% {
      transform: translateX(-80em);
    }
    100% {
      transform: translateX(80em);
    }
  }
  .div-dices img {
    height: 12vh;
  }

  @media (max-width: 1400px) {
    .girl img {
      height: 82vh;
      max-height: 82vh;
    }
  }
  @media (max-width: 500px) {
    .hero {
      overflow: hidden;
    }

    .container-hero {
      flex-direction: unset;
      /* top: -3vh; */
    }
    .dices {
      display: none;
    }
    .hero {
      max-width: 500px;
    }
    .offer {
      left: -8em;
    }
    .girl img {
      height: 60vh;
      /* max-height: 82vh; */
    }
    .girl {
      left: 7vh;
      top: 10vh;
    }
    .plane {
      top: 3%;
      z-index: 30;
    }
    header {
      height: 5.5em !important;
      z-index: 51;
    }
    .plane img {
      height: 4.5vh;
    }
  }
  @media (min-width: 991px) {
    .offer {
      font-size: 1.82vh !important;
    }
  }

  .floating-dices {
    animation-name: floating;
    animation-duration: 19s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 10px;
    /* margin-top: 5px; */
  }

  @keyframes floating {
    from {
      transform: translate(0, 0px);
    }
    65% {
      transform: translate(0, 15px);
    }
    to {
      transform: translate(0, -0px);
    }
  }

  .rotate-dices {
    animation: rotation 22s infinite linear;
  }
  .rotate-dices:nth-child(2) {
    animation: rotation-reverse 22s infinite linear;
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  @keyframes rotation-reverse {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-359deg);
    }
  }

  .boat {
    position: fixed;
    top: 4%;
    left: 0;
    animation: boat-move 45s infinite forwards linear;
  }

  
  @keyframes boat-move {
    0% {
      transform: translateX(-20em);
    }
    100% {
      transform: translateX(80em);
    }
  }
</style>
{/block}
