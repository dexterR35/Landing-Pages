{block name="add_char"}
<img class="char animation" src="{$asset}/char2.png" alt="chars" />
<img
  class="char onmobile animation"
  src="{$asset}/char-mobile-new3.png"
  alt="charss"
/>
{/block} {block name="offer_html"}
<div class="offer-html">
  <div class="line-5">cea mai bună</div>
  <div class="line-6">experiență</div>
  <div class="line-9">dintr-un cazino online</div>
</div>
{/block} {block name="offer_css"}

<style>
  .char {
    height: 100%;
  }

  .char.onmobile {
    display: none;
  }
  /*
    .offer{
      z-index: 100;
    }
*/
  header {
    z-index: 200;
  }

  .offer-html {
    font-size: 1.6em;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
  }

  .line-5,
  .line-6 {
    color: #ffc107;
  }

  .line-5 {
    font-size: 1.555em;
    margin-top: -0.12em;
  }

  .line-6 {
    font-size: 1.8em;
    margin-top: -0.1em;
    margin-bottom: 0.1em;
    margin-left: 0.05em;
  }

  .line-9 {
    margin-top: -0.1em;
    font-size: 0.85em;
    color: #fff;
  }

  @media (orientation: portrait) {
    .offer {
      z-index: 1;
      /* right: -15vh;*/
      bottom: 21vh;
      height: 80%;
    }

    .offer-content {
      left: -1em;
      font-size: 1.7vh;
    }

    .offer-html {
      font-size: 1.4em;
    }

    .char {
      height: 128%;
      top: 4em;
    }

    .line-4 {
      margin-left: 3em;
    }

    .char {
      display: none;
    }

    .char.onmobile {
      display: block;
    }
  }
  @media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (-webkit-device-pixel-ratio: 2) {
    .char {
      height: 140%;
      top: 0em;
    }
    .offer {
      left: 16%;
      top: 10px;
    }
  }

  @media (orientation: portrait) and (max-aspect-ratio: 380 / 635) {
    .offer {
      z-index: unset;
      left: 4vh;
    }
    .offer-content {
      width: 100%;
    }
  }

  @media (orientation: portrait) and (min-aspect-ratio: 500 / 736) and (min-width: 500px) {
    .offer {
      right: -2vh;
      bottom: 18vh;
      height: 85%;
    }

    .offer-html {
      font-size: 1.4em;
    }

    .offer-content {
      font-size: 2.2vh;
    }

    .char {
      height: 150%;
      top: -5vh;
      margin-left: -0%;
    }
  }

  @media (orientation: portrait) and (min-aspect-ratio: 834 / 1087) {
    .offer {
      right: -2vh;
      bottom: 22vh;
      height: 80%;
    }
    .char {
      height: 150%;
      top: -5vh;
      z-index: 2;
    }
    .offer-content {
      left: -0.6em;
      font-size: 2vh;
    }
  }

  @media (orientation: portrait) and (max-width: 350px) {
    .offer {
      right: -29vh;
    }

    .char {
      margin-left: -8%;
    }
  }

  @media (orientation: landscape) and (min-width: 1920px) and (max-width: 2560px) {
    .offer {
      margin-left: 8px;
      top: 1vh;
      font-size: 1.6vh;
    }
    .char {
      margin-left: -24%;
      height: 90%;
      z-index: 1;
    }
  }
  @media screen and (max-aspect-ratio 1920 / 1200) {
    .offer {
      margin-left: 100px;
      top: 1vh;
    }
    .char {
      margin-left: -2.5%;
      height: 90%;
      z-index: 1;
    }
  }
  @media (orientation: landscape) and (min-width: 1024px) and (max-width: 1280px) {
    .offer {
      margin-right: -52vh;
      height: 70%;
    }
    .char {
      margin-right: 49vh;
      height: 88%;
    }
  }
  @media (orientation: landscape) and (min-width: 1288px) and (max-width: 1440px) {
    .offer {
      height: 75%;
      top: 1vh;
      left: 0vh;
    }
    .char {
      margin-right: 52vh;
      height: 86%;
    }
  }
  @media (orientation: landscape) and (min-width: 1441px) and (max-width: 1919px) {
    .offer {
      height: 75%;
      top: 1vh;
      left: 13vh;
    }
    .char {
      margin-right: 45vh;
      height: 86%;
    }
  }

  @media (orientation: landscape) and (min-width: 1920px) and (max-width: 2000px) {
    .offer {
      font-size: 2vh;
    }
  }
  @media (orientation: landscape) and (min-width: 2001px) and (max-width: 2567px) {
    .offer {
      font-size: 1.6vh;
      margin-left: 0vh;
    }
    .char {
      margin-left: -19%;
    }
  }

  @media (orientation: landscape) and (min-width: 2568px) and (max-width: 3840px) {
    .offer {
      font-size: 2vh;
    }
  }
</style>
{/block}
