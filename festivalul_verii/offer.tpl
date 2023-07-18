{block name="add_animate"}
<div class="seven"> <img src="{$asset}/7.png" class="png" /></div>
<div class="cherry"> <img src="{$asset}/Cherries_left.png" class="Cherries_left" /></div>
<div class="cherryM"> <img src="{$asset}/Cherries_mid.png" class="Cherries_mid" /></div>
<div class="dices"> <img src="{$asset}/Dices.png" class="Cherries_left" /></div>
<div class="container-all">
  <div class="orbit">
    <ul class="orbit-wrap">
      <li class="orbit-center">
        <img src="{$asset}/Bwheel/Star.png" class="folder-img" />

      </li>
      <li>
        <ul class="ring-0">
          <li>
            <img src="{$asset}/Bwheel/Bell.png" />
          </li>
          <li>
            <img src="{$asset}/Bwheel/7_top_right.png" />
          </li>
          <li>
            <img src="{$asset}/Bwheel/7_mid_left.png" />
          </li>
          <li>
            <img src="{$asset}/Bwheel/7_bottom_right.png" />
          </li>
        </ul>
      </li>
      <li>
        <ul class="ring-2">
          <li><img src="{$asset}/Bwheel/Dices_left.png" /></li>
          <li><img src="{$asset}/Bwheel/Orange.png" /></li>
          <li><img src="{$asset}/Bwheel/Watermelon.png" /></li>
          <li><img src="{$asset}/Bwheel/Dices_right.png" /></li>
          <li><img src="{$asset}/Bwheel/Grapes.png" /></li>
          <li><img src="{$asset}/Bwheel/Plums.png" /></li>
        </ul>
      </li>
      <li>
        <ul class="ring-3">
          <li><img src="{$asset}/Bwheel/Plums.png" /></li>
          <li><img src="{$asset}/Bwheel/7_mid_left.png" /></li>
          <li><img src="{$asset}/Bwheel/Lemon.png" /></li>
        </ul>
      </li>
    </ul>
  </div>
</div>

{/block} {block name="add_char"}
<div class="swirls-container">
  <img src="{$asset}/girl/swirl-back.png" alt="s_top" srcset="" class="swirl_top" />
  <img src="{$asset}/girl/swirl-face.png" alt="s-Bottom" srcset="" class="swirl_bottom" />
</div>
<div class="wrapper-all">
  <div class="container-circle">
    <div class="cont_s">
      <div class="center_s">
        <img src="{$asset}/girl/girl.png" alt="a" srcset="" />
        <img src="{$asset}/girl/girl.png" alt="a" srcset="" class="img-shadow" />
      </div>
      <div class="circle_s c1_s">
        <img src="{$asset}/girl_elem/che-left.png" alt="c" srcset="" />
      </div>
      <div class="circle_s c2_s">
        <img src="{$asset}/girl_elem/bell.png " alt="b" srcset="" />
      </div>
      <div class="circle_s c3_s">
        <img src="{$asset}/girl_elem/dices.png" alt="d" srcset="" />
      </div>
      <div class="circle_s c4_s">
        <img src="{$asset}/girl_elem/che-right.png" alt="o" srcset="" />
      </div>
      <div class="circle_s c5_s">
        <img src="{$asset}/girl_elem/star.png" alt="r" srcset="" />
      </div>
      <div class="circle_s c6_s">
        <img src="{$asset}/girl_elem/orange.png" alt="r" srcset="" />
      </div>
      <div class="circle_s c7_s">
        <img src="{$asset}/girl_elem/dices.png" alt="d" srcset="" />
      </div>
      <div class="circle_s c8_s">
        <img src="{$asset}/Bwheel/Grapes.png" alt="d" srcset="" />
      </div>
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
  .container-all {
    position: fixed;
    left: 72px;
    top: 78px;
  }
  .container_design {
  overflow: hidden;
}

  .below-fold {
    height: 100% !important;
  }

  .img-shadow {
    position: absolute;
    left: 20vh;
    transform: skewX(347deg) rotatex(80deg) rotate(27deg) skewY(340deg);
    -webkit-transform: skewX(347deg) rotatex(80deg) rotate(27deg) skewY(340deg);
    /* height: 75vh; */
    width: 38vh !important;
    height: 85vh !important;
    opacity: 1;
    mix-blend-mode: normal;
    top: 25vh;
    /* filter: drop-shadow(2px 4px 56px black); */
    filter: opacity(0.1) brightness(0) blur(9px);
    /* background: red; */
    z-index: -1;
  }

  .wrapper-all {
    /* flex: 1; */
    align-items: end;
    display: flex;
    justify-content: end;
    z-index: 1;
    position: relative;
    left: 50px;
    width: 590px;
  }

  .container-hero {
    justify-content: unset;
  }

  /* .above-fold {
    height:calc(100vh - 100px) !important;
  } */

  body::before {
    background-position: unset;

    top: 65px !important;
  }

  @media (max-width: 500px) and (orientation: portrait) {

    body::before {
      background-image: url({$asset}/bg-mobile5.jpg);
    }
  }

  @media (max-width: 1800px) and (orientation: landscape) {
    body::before {
      background-position: unset;
    }
  }

  .offer {
    z-index: 0;
  }

  .offer img {
    height: 75vh !important;
    max-height: 75vh !important;
  }

  .seven {
    position: fixed;
    bottom: -1%;
    right: -4%;
  }

  .dices img {
    height: 14vh;
  }

  .dices {
    position: fixed;
    top: 14%;
    left: 80%;
    z-index: 1;

  }

  .cherry {
    position: fixed;
    bottom: 3%;
    left: 1%;
  }

  .cherry img {
    height: 21vh;
  }


  .seven {
    position: fixed;
    bottom: -5%;
    right: -2%;

  }

  .seven,
  .cherry,.dices {
    animation-name: floating_items;
    animation-duration: 50s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  .cherry,.dices {
    animation-duration: 30s;
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1);
    animation-direction: alternate;
  }

  @keyframes floating_items {
    from {
      transform: translate(0, 0px)rotate(0deg);
    }

    65% {
      transform: translate(0, 15px) rotate(40deg);
    }

    to {
      transform: translate(0, -0px) rotate(-0deg);
    }
  }

  .seven img {
    height: 36vh;
  }

  .cherryM {
    position: fixed;
    top: 12%;
    left: 48%;
    z-index: 0;
  }

  .cherryM img {
    height: 11vh;
  }

  @media (min-width: 991px) {

    .offer {
      font-size: 2.1vh !important;
      z-index: 0;
    }

    .offer img {
      display: block;
      height: 90%;
    }

    .offer-content {
      top: 15px !important;
    }

    .line-1 {
      font-size: 1em;
    }
  }

  :root {
    --yellow_color: #ffc107;
  }

  .Text {
    color: white;
    font-size: 4em;
    text-transform: uppercase;
    font-weight: bold;
  }

  .line-1 {
    color: black;
    padding: 0.2em 0.3em;
    background: var(--yellow_color);
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
    color: var(--yellow_color);
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
    clip-path: polygon(17% 0%,
        0% 0%,
        0% 100%,
        100% 100%,
        100% 0%,
        83% 0%,
        92% 22%,
        8% 23%);
  }

  /* TODO:IMPORTANT */
  body::after {
    content: unset !important;
    background-image: none !important;
  }



  @media (orientation: portrait) {

    /* 
    .container-hero {

      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    } */

    .wrapper-all {
      z-index: 1;
      left: 0px;
      position: relative;
      align-items: flex-end;
      display: flex;
      width: unset;

    }

    .cont_s {
      position: relative;
      perspective: 1200px;
      perspective-origin: 0% -14%;
    }

    .circle_s img {
      height: 6vh;
    }

    .swirls-container {
      position: absolute;
      /* background: red; */
      left: 50%;
      height: 100%;
      width: 100%;
      top: 50%;
      mix-blend-mode: screen;

      /* transform: translate(-100%, -50%);
      -webkit-transform: translate(-100%, -50%); */
    }
  }


  @keyframes spin_s {
    0% {
      transform: rotateY(0) translate3d(24vh, 0, 0) rotateY(0);
      z-index: 0;
    }

    25% {
      z-index: -20;
    }

    75% {
      z-index: 20;
    }

    100% {
      transform: rotateY(360deg) translate3d(24vh, 0, 0) rotateY(-360deg);
      z-index: 0;
    }
  }

  /* TODO:     ORBIT */

  .orbit-wrap {
    height: 350px;
    list-style: none;
    font-size: 0.82em;
    width: 250px;
    position: relative;
    /* transform: translate(0%, 0%) scale3d(1.07, 1.07, 1.07); */
  }

  .orbit-wrap>li {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  /* .orbit-wrap>li:hover ul {
    border-width: 2px;
    border-color: #fff;
  }

  .orbit-wrap>li:hover~li ul {
    border-color: rgba(255, 255, 255, 0.2);
  }

  .orbit-wrap>li:hover~li ul li {
    opacity: 0.4;
  } */

  ul[class^="ring"] {
    transition: all 300ms ease-in-out;
  }

  ul[class^="ring"] li {
    transition: all 300ms ease-in-out;
  }

  .ring-0 {
    width: 27em;
    height: 27em;
    animation: clockwiseRotate 65s linear infinite;
    border: none !important;
  }

  .ring-0 img {
    animation: counterClockwiseRotate 45s linear infinite;
  }

  .ring-0>*:nth-of-type(1) {
    transform: rotate(105deg) translate(12.2em) rotate(-95deg);
  }

  .ring-0>*:nth-of-type(2) {
    transform: rotate(178deg) translate(15em) rotate(-224deg);
  }

  .ring-0>*:nth-of-type(3) {
    transform: rotate(278deg) translate(15em) rotate(-275deg);
  }

  .ring-0>*:nth-of-type(4) {
    transform: rotate(380deg) translate(11em) rotate(300deg);
  }

  .ring-0>*:nth-of-type(1),
  .ring-0>*:nth-of-type(2),
  .ring-0>*:nth-of-type(3),
  .ring-0>*:nth-of-type(4) {
    width: 4em;
  }

  .ring-1 {
    width: 22em;
    height: 22em;
    animation: clockwiseRotate-reverse 95s linear infinite;
  }

  .ring-1 img {
    animation: counterClockwiseRotate 55s linear infinite;
  }

  .ring-1>*:nth-of-type(1) {
    transform: rotate(145deg) translate(10.5em) rotate(-78deg);
  }

  .ring-1>*:nth-of-type(2) {
    transform: rotate(224deg) translate(12em) rotate(-224deg);
  }

  .ring-1>*:nth-of-type(3) {
    transform: rotate(334deg) translate(10em) rotate(-380deg);
  }

  .ring-1>*:nth-of-type(4) {
    transform: rotate(54deg) translate(10em) rotate(-380deg);
  }

  .ring-1>*:nth-of-type(1),
  .ring-1>*:nth-of-type(2),
  .ring-1>*:nth-of-type(3),
  .ring-1>*:nth-of-type(4) {
    width: 3em;
  }

  .ring-2 {
    width: 19.5em;
    height: 19.5em;
    animation: clockwiseRotate-reverse 55s linear infinite;
  }

  .ring-2 img {
    animation: counterClockwiseRotate 35s linear infinite;
  }

  .ring-2>*:nth-of-type(1) {
    transform: rotate(56.5deg) translate(9em) rotate(-47.5deg);
  }

  .ring-2>*:nth-of-type(2) {
    transform: rotate(190deg) translate(10.4em) rotate(-190deg);
  }

  .ring-2>*:nth-of-type(3) {
    transform: rotate(123.5deg) translate(8.9em) rotate(-142.5deg);
  }

  .ring-2>*:nth-of-type(4) {
    transform: rotate(247deg) translate(9.8em) rotate(-190deg);
  }

  .ring-2>*:nth-of-type(5) {
    transform: rotate(363.5deg) translate(9.8em) rotate(-237.5deg);
  }

  .ring-2>*:nth-of-type(6) {
    transform: rotate(298deg) translate(10em) rotate(-260deg);
  }


  .ring-2>*:nth-of-type(1),
  .ring-2>*:nth-of-type(2),
  .ring-2>*:nth-of-type(3),
  .ring-2>*:nth-of-type(4),
  .ring-2>*:nth-of-type(5),
  .ring-2>*:nth-of-type(6),
  .ring-2>*:nth-of-type(7),
  .ring-2>*:nth-of-type(8) {
    width: 3.2em;
  }

  .ring-3 {
    width: 12em;
    height: 12em;
    animation: clockwiseRotate 30s linear infinite;
  }

  .ring-3 img {
    animation: counterClockwiseRotate 20s linear infinite;
  }

  .ring-3>*:nth-of-type(1) {
    transform: rotate(154deg) translate(6em) rotate(-127deg);
  }

  .ring-3>*:nth-of-type(2) {
    transform: rotate(257deg) translate(6.2em) rotate(-253deg);
  }

  .ring-3>*:nth-of-type(3) {
    transform: rotate(380deg) translate(5.5em) rotate(-380deg);
  }

  .ring-3>*:nth-of-type(1),
  .ring-3>*:nth-of-type(2),
  .ring-3>*:nth-of-type(3) {
    width: 2.2em;
  }

  ul[class^="ring"] {
    border: solid 1px #e7e7e7;
    box-shadow: inset 0px 0px 28px 5px white;
    filter: drop-shadow(0px 0px 14px azure);
    position: relative;
    padding: 0;
    border-radius: 50%;
    list-style: none;
    z-index: 44;
    box-sizing: content-box;
  }

  ul[class^="ring"] li {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1.6em;
    height: 1.6em;
    margin: -0.8em;
  }

  /* center;
 */
  .orbit-center {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    font-size: 2.35em;
    width: 3.2em;
    height: 3.2em;
    line-height: 1.8em;
    text-align: center;
    box-shadow: 0px 0px 28px 5px #fff;
    background: #f2f2f2 !important;
    border: 1px solid #fff;
    border-radius: 50%;
  }


  /* animations */
  @keyframes clockwiseRotate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

  @keyframes clockwiseRotate-reverse {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(-360deg);
    }
  }

  @keyframes counterClockwiseRotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(-360deg);
    }
  }

  .ring-1 img {
    width: 140%;
  }

  .orbit-center img {
    width: 80%;
    position: relative;
    top: -3px;
  }

  .ring-0 img,
  .ring-1 img,
  .ring-2 img,
  .ring-3 img {
    width: 100%;
  }

  @keyframes orbit {
    0% {
      transform: rotate(0deg);
      transform-origin: 0%;
    }

    100% {
      transform: rotate(360deg);
      transform-origin: 0% 50%;
    }
  }

  /* TODO:    END ORBIT */

  /* TODO:    ORBIT GIRL*/
  .cont_s {
    position: relative;
    perspective: 800px;
    perspective-origin: 100% 30%;
  }

  .circle_s {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 36%;
    left: 43%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    animation: spin_s 8s linear infinite;
    display: flex;
    align-items: center;
    justify-self: center;
  }

  .circle_s img {
    height: 7vh;
    /* animation: orbit 12s linear infinite; */
  }

  .center_s img {
    height: 75vh;
  }

  .c1_s {
    /* background-color: #a6c4bc; */
    animation-delay: 0s;
  }

  .c2_s {
    /* background-color: #524656; */
    animation-delay: -1s;
  }

  .cs_s img {
    height: 6vh;
  }

  .c3_s {
    /* background-color: #cf4747; */
    animation-delay: -2s;
  }

  .c3_s img,
  .c7_s img {
    height: 5vh;
  }

  .c4_s {
    /* background-color: #f3ad1f; */
    animation-delay: -3s;
  }

  .c5_s {
    /* background-color: #acc44e; */
    animation-delay: -4s;
  }

  .c6_s {
    /* background-color: #acc44e; */
    animation-delay: -5s;
  }

  .c7_s {
    /* background-color: #acc44e; */
    animation-delay: -6s;
  }

  .c8_s {
    /* background-color: #acc44e; */
    animation-delay: -7s;
  }


  .swirls-container {
    position: absolute;
    left: 40%;
    top: 45%;
  }

  /* TODO: GIRL  */
  .swirl_top,
  .swirl_bottom {
    position: absolute;
    mix-blend-mode: screen;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    z-index: 2;
    height: 23vh;
  }

  .swirl_bottom {
    top: 104px;
    height: 14vh;
    left: -81px;
  }

  .swirl_top {
    height: 12vh;
    z-index: 1;
    top: 25px;
    left: -95px;
  }

  @media (max-width: 2000px) and (orientation:landscape) {
    .orbit-wrap {
      font-size: 1.45vh;
    }
  }

  @media (max-width: 1450px) and (max-height:810px) and (orientation:landscape) {
    .container-all {
      position: fixed;
      left: 52px;
      top: 53px;
    }

    .orbit-wrap {
      font-size: 0.7em;
    }
  }

  @media (min-width: 1451px) and (min-height:811px) and (orientation:landscape) {

    .container-all {
      position: fixed;
      left: 104px;
      top: 106px;
    }

    .orbit-wrap {
      font-size: 1.6vh;
    }
  }

  @media (max-width: 480px) {


    .center_s img {
      height: 62vh;
    }

    .line-4 {
      margin-left: 0.2em;
    }

    .offer {
      font-size: 1.5vh !important;
    }

    .circle_s img {
      height: 6vh;
    }

    .offer-content {
      position: absolute;
      top: 8px;
      left: -18px;
      width: 100%;
    }

    .swirl_bottom,
    .swirl_top {
      height: 11vh;
    }

    .swirl_bottom {
      top: 58px;

    }

    /* .swirl_top {
      z-index: 1;
      top: -16px;
    } */

    .circle_s {
      top: 30%;
      left: 35%;
    }



    .cont_s {
      position: relative;
      perspective: 1200px;
      perspective-origin: 0% 24%;
    }

    .offer.animation {
      width: 100%;
    }

    .orbit-wrap {
      width: fit-content;
      height: fit-content;
      font-size: 1.02em;
    }


    .swirls-container {
      top: 45%;
      left: 28%;
      z-index: 3;
    }

    .swirl_top {
      height: 12vh;
      z-index: -3;
      top: 25px;
      left: unset;
      display: none;
    }

    .swirl_bottom {
      top: 103px;
      height: 13vh;
      left: unset;
      width: auto;
    }

    .container-all {
      left: 36px;
      z-index: 0;
      top: 143px;
    }

    .img-shadow {
      left: 19vh;
      top: 13vh;
    }

    @keyframes spin_s {
      0% {
        transform: rotateY(0) translate3d(160px, 0, 0) rotateY(0);
        z-index: 0;
      }

      25% {
        z-index: -20;
      }

      75% {
        z-index: 20;
      }

      100% {
        transform: rotateY(360deg) translate3d(160px, 0, 0) rotateY(-360deg);
        z-index: 0;
      }
    }
  }

  /* .cherry {
    display: none;
  } */

  /* TODO: mobile */
  /* TODO: mobile */
  @media (max-width: 550px) {
    .offer.animation {
      position: absolute;
      left: 28%;
      width: fit-content;
      top: 7%;
    }

    body::before {
      background-size: unset;
    }

    body::before {
      background-position: unset !important;
      background-size: unset !important;
      top: 0 !important;
    }

    .seven {
      position: fixed;
      bottom: 18%;
      left: 74%;
    }

    .seven img {
      height: 19vh;
    }

    .cherry img {
      height: 14vh;
    }

    .cherry {
      display: block;
      position: fixed;
      bottom: 14%;
      left: 0%;
    }

    .cherryM {
      display: none;
    }

    .dices {
      display: none;
    }

    /* .hero {
      background-image: url({$asset}/bg-mobile5.jpg) !important;
    } */

    .offer img {
      height: 57vh !important;
      max-height: 57vh !important;
    }
  }

  @media only screen and (min-device-width: 1024px) and (max-device-width: 1332px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5) {

    .offer {
      left: 25%;
      height: 50%;
      position: absolute;
      max-width: 100%;
      width: 100%;
    }

    .orbit-wrap {
      width: 100%;
      height: 100%;
    }

    .container-all {
      position: fixed;
      left: 16%;
      top: 30%;
      z-index: 1;
    }
  }

  /* @media (orientation: portrait) and (min-aspect-ratio: 500 / 736) and (min-width: 500px) {}

  @media (orientation: portrait) and (min-width: 420px) and (max-width:450px) {

    .offer {
      max-width: 40vw;
    }
  } */
  /* @media(orientation:landscape) and (min-height:701px) and (max-height:850px) and (max-width:1400px) {
    body::before {
      background-size: cover !important;
      background-position: unset !important;
      top: 9vh !important;
    }

    .orbit-wrap {
      height: 384px;
      width: 384px;
      font-size: 0.7em;
    }

    .center_s img {
      margin-top: 2rem;
    }

    .container-all {
      position: fixed;
      left: -21px;
      top: 5vh;
    }
  } */
  @media (max-width: 1400px) {
    header {
      height: 5.6em;
    }
  }

  /* }
  @media(orientation:landscape) and (max-height:700px) and (max-width:1500px) {
    body::before {
      background-size: cover !important;
      background-position: unset !important;
      top: 10vh !important;
    }

    .orbit-wrap {
      height: 384px;
      width: 384px;
      font-size: 0.7em;
    }

    .center_s img {
      margin-top: 2rem;
    }

    .container-all {
      position: fixed;
      left: -21px;
      top: 5vh;
    }
  } */
</style>
{/block} {block append name=js} {literal}
<script>
  $(document).ready(function () {
    var $orbitCenter = $(".orbit-wrap > li.orbit-center");
    var $orbitItems = $orbitCenter.nextAll().find("ul > li");

    console.log($orbitItems, "$orbitItems");

    function hoverOrbitItems() {
      $orbitItems.css("transform", "translate(-10px, -30px)");
    }

    function unhoverOrbitItems() {
      $orbitItems.css("transform", "");
    }
    // hover on page load
    setTimeout(function () {
      $orbitCenter.trigger("mouseenter");
    }, 5000);

    // set interval for auto hover
    setInterval(function () {
      $orbitCenter.trigger("mouseenter");
      setTimeout(function () {
        $orbitCenter.trigger("mouseleave");
      }, 1000);
    }, 6000);
    // bind hover events
    $orbitCenter.hover(hoverOrbitItems, unhoverOrbitItems);


  });

  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 1) {
      $('.img-shadow').fadeOut();
    } else {
      $('.img-shadow').fadeIn();
    }
  });
</script>

{/literal} {/block}