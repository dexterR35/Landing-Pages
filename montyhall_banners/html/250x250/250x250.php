<?php require_once("../../linkhelper2022.php"); ?>

<!DOCTYPE html>
<html lang="ro">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap"
      rel="stylesheet"
    />
    <title>250x250</title>
    <style>
      *,
      *::after,
      *::before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      html,
      body,
      div {
        font-family: "Play", sans-serif;
      }
      a {
        text-decoration: none;
        color: white;
        margin-bottom: 0.6em;
      }
      :root {
        --offer-color: #ffc107;
        --width: 250px;
        --height: 250px;
        --bg-one: url(./img/bg-4.jpg);
        --bg-two: url(./img/bg-1.jpg);
        --bg-three: url(./img/bg-2.jpg);
        --bg-four: url(./img/bg-3.jpg);
      }

      .container-all {
        width: var(--width);
        height: var(--height);
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      .scene {
        position: relative;
        width: 100%;
        height: 100%;
        perspective: 1000px;
      }

      .carousel {
        width: 100%;
        height: 100%;
        position: absolute;
        transform-style: preserve-3d;
        transition: transform 1s;
      }
      .btn {
        display: none;
      }

      .carousel__cell {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: transform 1s, opacity 1s;
        flex-direction: row;
      }
      .container-text {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 90%;
        align-items: center;
      }

      .cell_text,
      .cell_assets {
        width: 41%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .cell_text {
        flex-direction: column;
        height: 84%;
      }

      .cell_one {
        background-image: var(--bg-one);
      }
      .cell_two {
        background-image: var(--bg-two);
      }
      .cell_three {
        background-image: var(--bg-three);
      }
      .cell_four {
        background-image: var(--bg-four);
      }

      .carousel-options {
        position: relative;
        top: -10vh;
        display: flex;
        justify-content: space-around;
        width: 55%;
        left: 26px;
      }

      .offer-html {
        font-size: 0.85em;
        width: fit-content;
        font-weight: bold;
        height: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: white;
        text-transform: uppercase;
        /* line-height: 1.2; */
        left: -6px;
        width: 181px;
        position: relative;
      }
      .p1__line-1 {
        font-size: 1.4em;
        text-align: center;
      }

      .p1__line-2 {
        font-size: 2.18em;
        margin-top: -0.35em;
      }

      .p1__line-3 {
        font-size: 2.25em;
        margin-top: -0.33em;
      }

      .p2__line-1 {
        font-size: 1em;
        text-align: center;
        position: relative;
        left: -10px;
      }
      .p2__line-2 {
        font-size: 1em;
      }
      .p2__line-3 {
        font-size: 1.48em;
        /* text-align: center; */
        position: relative;
        left: 0px;
      }

      .p3__line-2 {
        font-size: 1.2em;
        position: relative;
        text-align: center;
        width: 164px;
      }
      .p3__line-3 {
        font-size: 1.25em;
      }

      .p4__line-2 {
        text-align: center;
        font-size: 1.6em;
        width: 166px;
        top: 3px;
        position: relative;
      }

      .text-yellow {
        color: var(--offer-color);
      }

      .logo-netbet {
        width: 100%;
        background-image: url(./img/logo-inline.svg);
        height: 1.5em;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        position: relative;
        left: 17px;
      }

      .button {
        font-size: 0.5em;
        background: linear-gradient(90deg, #ff6333 0%, #ff832b 100%);
        text-transform: uppercase;
        font-weight: bold;
        padding: 0.8em 0.2em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 1.4em;
        white-space: nowrap;
        overflow: hidden;
        position: relative;
        max-width: 129px;
        width: 129px;
        left: 6px;
      }

      .btn-custom:before,
      .btn-custom:after {
        animation: shiny-btn 1.4s ease-in infinite;
        background-color: #ffffffd1;
        position: absolute;
        content: "";
        display: inline-block;
      }
      .btn-custom:before {
        top: -27px;
        left: 0;
        width: 20px;
        height: 90px;
        margin-left: 16px;
      }
      .btn-custom:after {
        top: -20px;
        left: 0;
        width: 5px;
        height: 74px;
      }

      @keyframes shiny-btn {
        0% {
          -webkit-transform: scale(1) translateX(-15em) rotate(45deg);
          opacity: 1;
        }

        100% {
          -webkit-transform: translateX(20em) rotate(45deg);
          opacity: 1;
        }
      }
      .ong {
        background-image: url(./img/ong.png);
        width: 100%;
        height: 1.2em;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        margin-top: 1em;
        left: 25px;
        position: relative;
      }
    </style>
  </head>
  <body>
    <div class="container-all">
      <div class="scene">
        <div class="carousel">
          <div class="carousel__cell cell_one">
            <div class="cell_assets"></div>
            <div class="cell_text">
              <div class="container-text">
                <div class="logo-netbet"></div>
                <div class="offer-html">
                  <div class="p1__line-1">
                    INTRĂ ÎN <br />
                    UNIVERSUL <br />
                    NETBET!
                  </div>
                </div>
                <a href="<?=$link?>">
                  <div class="button btn-custom">JOACĂ ACUM</div>
                </a>
                <div class="ong"></div>
              </div>
            </div>
          </div>
          <div class="carousel__cell cell_two">
            <div class="cell_assets"></div>
            <div class="cell_text">
              <div class="container-text">
                <div class="logo-netbet"></div>
                <div class="offer-html">
                  <div class="p2__line-1">până la</div>
                  <div class="p2__line-2">350 DE RUNDE GRATUITE</div>
                  <div class="p2__line-3">FĂRĂ DEPUNERE</div>
                </div>
                <a href="<?=$link?>">
                  <div class="button btn-custom">INTRĂ ÎN UNIVERSUL NETBET</div>
                </a>
                <div class="ong"></div>
              </div>
            </div>
          </div>
          <div class="carousel__cell cell_three">
            <div class="cell_assets"></div>
            <div class="cell_text">
              <div class="container-text">
                <div class="logo-netbet"></div>
                <div class="offer-html">
                  <div class="p3__line-2">O UȘĂ ASCUNDE</div>
                  <div class="p3__line-3">PREMIUL CEL MARE</div>
                </div>
                <a href="<?=$link?>">
                  <div class="button btn-custom">INTRĂ ÎN UNIVERSUL NETBET</div>
                </a>
                <div class="ong"></div>
              </div>
            </div>
          </div>
          <div class="carousel__cell cell_four">
            <div class="cell_assets"></div>
            <div class="cell_text">
              <div class="container-text">
                <div class="logo-netbet"></div>
                <div class="offer-html">
                  <div class="p4__line-2">
                    pe care o vei <br />
                    alege?
                  </div>
                </div>
                <a href="<?=$link?>">
                  <div class="button btn-custom">INTRĂ ÎN UNIVERSUL NETBET</div>
                </a>
                <div class="ong"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-options">
        <button class="previous-button btn">Inapoi</button>
        <button class="next-button btn">Inainte</button>
        <label style="display: none">
          <input type="radio" name="orientation" value="horizontal" checked />
          vertical
        </label>
      </div>
    </div>

    <script>
      let carousel = document.querySelector(".carousel");
      let cells = carousel.querySelectorAll(".carousel__cell");
      let cellCount;
      let selectedIndex = 4;
      let cellWidth = 250;
      let cellHeight = 250;
      let isHorizontal = true;
      let rotateFn = isHorizontal ? "rotateY" : "rotateX";
      let radius, theta;
      console.log(cellWidth, cellHeight);

      function rotateCarousel() {
        let angle = theta * selectedIndex * -1;
        carousel.style.transform =
          "translateZ(" + -radius + "px) " + rotateFn + "(" + angle + "deg)";
      }

      const config = {
        autoload: true,
        speed: 3500,
      };
      function start() {
        let nextButton = document.querySelector(".next-button");
        nextButton.addEventListener("click", function () {
          selectedIndex++;
          rotateCarousel();
        });

        if (config.autoload) {
          playCarousel(nextButton, config);
        }
      }

      function playCarousel(nextButton, config) {
        const play = () => {
          nextButton.click();
          setTimeout(play, config.speed);
        };
        play();
      }
      start();

      function changeCarousel() {
        cellCount = 4;

        theta = 360 / cellCount;
        let cellSize = isHorizontal ? cellWidth : cellHeight;
        radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount));
        for (let i = 0; i < cells.length; i++) {
          let cell = cells[i];
          if (i < cellCount) {
            // visible cell
            cell.style.opacity = 1;
            let cellAngle = theta * i;
            cell.style.transform =
              rotateFn + "(" + cellAngle + "deg) translateZ(" + radius + "px)";
          } else {
            // hidden cell
            cell.style.opacity = 0;
            cell.style.transform = "none";
          }
        }

        rotateCarousel();
      }

      function onOrientationChange() {
        var checkedRadio = document.querySelector(
          'input[name="orientation"]:checked'
        );
        isHorizontal = checkedRadio.value == "horizontal";
        rotateFn = isHorizontal ? "rotateY" : "rotateX";
        changeCarousel();
      }

      // set initials
      onOrientationChange();
    </script>
  </body>
</html>
