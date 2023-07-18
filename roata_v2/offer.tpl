{block name="add_char"}
<div class="char wheel" style="position:absolute;">
  <div class="spinner-table"> 
      <img src="{$asset}/wheel/light_arrow.png" class="arrow-light" />
      <img src="{$asset}/wheel/arrow.png" class="arrow-spin" />
      <img src="{$asset}/wheel/glow_new.png" class="swirl-wheel" />
      <img src="{$asset}/wheel/glow_new.png" class="swirl-wheel onmobile" />
      <div class="dial">
          {* <img src="{$asset}/wheel/shadow_over_wheel.png" class="shadow-wheel" />
          <img src="{$asset}/wheel/spinning_wheel.png" class="spinning-wheel"/> *}
          <img src="{$asset}/wheel/full_base.png" class="base-wheel"/>
      </div>
  </div>
</div>
{/block}
{block name="offer_html"}
  <div class="line-1"><span>PÂNĂ LA</span></div>
  <div class="line-4">500</div>
  <div class="line-2">ROTIRI GRATUITE</div>
  <div class="line-3">FĂRĂ DEPUNERE</div>
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
{/block}

{block name="offer_css"}
  <style>

    @media (orientation: landscape) and (min-width: 1023px) and (max-width: 1288px) {
.spinner-table{
  transform:scale(0.7);
}
    }
    @media (orientation: landscape) and (min-width: 1288px) and (max-width: 1366px) {
.spinner-table{
  transform:scale(0.8);
}

    }
 @media (orientation: landscape) and (min-width: 1440px) and (max-width: 1919px) {
 .spinner-table{
   transform:scale(1.1);

 }
 }
  @media (orientation: landscape) and (min-width: 1920px) and (max-width: 2568px) {
 .spinner-table{
   transform:scale(1.2);

 }
 }


.swirl-wheel{
  display:none;
}
 .cta-button:hover{
    background: linear-gradient(135deg, #ff8929, #ff5d3c);
    cursor:pointer;
  }
    header{
      z-index: 120!important;
    }
    /* WHEEL CSS START */
    .char{
      position: absolute;
      /* display: none; */
      margin-left: -43%;
      margin-bottom: -3%;
      height: 90%;
      z-index: 100;
    }

    .char.wheel{
   /*   display: block;
      margin-left: -8%;
      z-index: 10;
      height: 75%;
          display: block;
          */
    display: flex;
    margin-left: -8%;
    margin-bottom: 0vh;
    z-index: 10;
    justify-content: center;
    /* height: 75%; */
    /* align-content: center; */
    align-items: center;
    }

    .steps{
      z-index: 110!important;
    }

    @media (orientation: landscape) and (max-aspect-ratio: 1150 / 690){
      .char.wheel{
        margin-left: -17%;
     /* height: 75%;*/
      }
      .char{
        margin-left: -58%;
        margin-bottom: -3%;
      }
    }
    .spinner-table {
      width: 416px;
      height: 472px;
      position: relative;
      border-radius: 100%;
    }

    .swirl-wheel{
      position: absolute;
      width: 159%;
      top: -31%;
      left: -33%;
      mix-blend-mode: screen;
    }

    .swirl-wheel.onmobile{
      display: none;
    }

    .base-wheel{
        width: 100%;
    }

    .spinning-wheel, .shadow-wheel{
        position:absolute;
        width: 100%;
    }

    .dial {
     /* height: 100%;*/
      transform: scale(1);
      transition: all 5s ease-out;
      animation-fill-mode: forwards;
      animation-timing-function: linear;
      margin-top: 1em;
    }
    .dial.spinning {
      animation-duration: 5s;
      animation-timing-function: cubic-bezier(0.44, -0.205, 0, 1.13);
      animation-name: spinning;
    }

  {literal}
    @keyframes spinning {
      from {
        transform: rotate(0);
      }
      to {
        transform: rotate(720deg);
      }
    }
  {/literal}
    .arrow-spin, .arrow-light {
        position: absolute;
        right: 44.2%;
        width: 2em;
        top: 2%;
        z-index: 300;
    }

    .arrow-light.open-light {
        z-index: 500;
    }
    /* WHELL CSS END */

    .offer-html {
      font-size: 2.1em;

      text-align: center;
      font-weight: bold;
    }

    .offer-content{
      margin-top: -3.5em;
    }

    .plus-line {
    display: flex;
    align-items: center;
    margin-top: -0.3em;
    margin-bottom: 0.5em;
    width: 16.6em;
  }

  .plus-line .line {
    flex: 1;
    height: 0.23em;
    background-color: rgba(255,255,255,1);
    border-radius: 0.06em;
  }

  .plus-line .plus {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    width: 1.1em;
    height: 1.1em;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    margin-right: 0.2em;
    margin-left: 0.2em;
    border-radius: 50px;
    background-color: white;
  }

  .plus-line .plus .plus-inside {
    color: black;
    font-weight: bold;
    margin-top: -0.03em;
  }

    .line-3 {
      color: #ffc107;
    }

    .line-1 {
      font-size: 8em;
      margin-left: 0.35em;
          margin-left: 0.03em;
    margin-bottom: -0.44em;
    margin-top: 0.4em;
    }

    .line-1 span{
      background-color: #ffc107;
      color: black;
      font-size: 0.2em;
      padding-left: 0.2em;
      padding-right: 0.2em;
      padding-top: 0.1em;
      padding-bottom: 0.1em;
      height: 1em;
      font-weight: bold;
    }

    .line-2 {
      font-size: 2em;
      margin-top: -0.7em;
      font-weight: bold;
    }

    .line-3 {
      font-size: 2.05em;
      margin-bottom: 0.5em;
      font-weight: bold;
    }

    .line-4{
      font-weight: bold;
      font-size: 10em;
      margin-top: -0.3em;
      margin-left: -0.05em;
    }

    .line-5 {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1.2em;
        margin-bottom: 1.2em;
        transform: scale(1.5);
    }

    .line-5 .top {
        font-size: 0.6em;
        margin-bottom: -0.2em;
        z-index: 5;
        color: white;
    }

    .line-5 .bottom {
        font-weight: 900;
        border: 1px solid #ffc107;
        color: #ffc107;
        border-radius: 6px;
        padding: .3em 1.2em .3em 1.2em;
        transform: scale(1.2);
        clip-path: polygon(24% 0%, 0% 0%, 0% 100%, 100% 100%, 100% 0%, 76% 0%, 92% 22%, 8% 23%);
    }

    .offer-text{
      font-size: 0.9em;
    }

  @media (orientation: landscape) and (min-width: 992px) {
    .container-hero {
          left: 10vh;
          overflow: unset;
    }
    .promo-text {
      z-index:100 !important;
    }
   
  }

    @media (orientation: portrait) {
      .offer-content{
        top: -5px;
        margin-left: 9em;
      }
.char.wheel{
      display: block;
}
      .offer-text{
        font-size: 1.1em;
      }

      .line-5 .top{
        font-size: 1em;
        margin-bottom: 0.5em;
        margin-top: 0.2em;
      }

      .line-5 .bottom{
        clip-path: unset;
      }

      .spinner-table{
        width: 250px;
        height: 250px;
       /* margin-left: auto;*/
        margin-right: auto;
        transform: scale(0.6);
        margin-top: -1em;
      }

      .char{
        right: 50vw;
        top: 27vh;
        height: 67%;
      }

      .char.wheel{
        top: 6vh;
        left: -1vw;
      }
    }

    @media (orientation: portrait) and (max-width: 450px) {
      .offer {
        font-size: 1.15vh;
        position: absolute;
        height: 75%;
        margin-right: 0;
        margin-bottom: 0;
        right: -12vh;
        bottom: 11vh;        
      }

      .cta-button.mobile{
        bottom: 2.7em!important;
        z-index: 101!important;
      }

      .promo-text .inner{
        font-size: 18px!important;
      }
    }

    @media (orientation: portrait) and (max-aspect-ratio: 380 / 635) {
      .spinner-table{
        transform: scale(0.7);
        margin-top: 1em;
          
      }
      .offer{
        right: -17vh;
      }
      .offer-text{
        font-size: 1.1em;
      }
      .offer-content {
        left: -6.5vh;
      }
      .char{
        right: 7vw;
        top: 28vh;
      }
      .char.wheel{
        top: 6vh;
        left: 0vw;
      }
    }

    @media (orientation: portrait) and (min-aspect-ratio: 500 / 736) and (min-width: 500px) {
      .offer{
        margin-right: -23%;
        font-size: 1.7vmin;
        height: 79%;
        margin-bottom: 11%;
      }
      .offer-content{
        top: -6px;
        margin-left: 0em;
      }
      .char{
        right: 53vw;
        top: 28vh;
      }
      .char.wheel{
        top: 4vh;
        left: 35.5vw;
      }
      .spinner-table{
        transform: scale(1.4);
        right: 18vw;
        top: 10vh;
      }
    }

    @media (orientation: portrait) and (min-aspect-ratio: 834 / 1087) {
      .offer{
        margin-right: 67%;
        font-size: 1.7vmin;
        height: 79%;
        margin-bottom: 11%;
      }
      .offer-content{
        top: -6px;
        margin-left: 25.7em;
      }
      .char{
        right: 50vw;
        top: 30vh;
      }
      .char.wheel{
        top: 4vh;
        left: 38vw;
      }
      .spinner-table{
        transform: scale(1.2);
      }
    }

    @media (orientation: portrait) and (max-width: 350px) {
      .offer{
        height: 67%;
        right: -17vh;
        bottom: 15vh;
      }
      .char{
        top: 32vh;
        right: 41vw;
      }
      .char.wheel{
        left: -2.5vw;
      }
      .spinner-table{
        transform: scale(0.6);
        /* margin-top: -2em; */
      }
    }


  </style>
{/block}