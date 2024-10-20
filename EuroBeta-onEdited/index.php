<?php

$qsa = '';
$qsa_with_end = '';
if (count($_GET) > 0)
{
	while (list($name, $value) = each($_GET))
		$qsa .= '&'.$name.'='.$value;	
}

if (!empty($qsa))
{
	$qsa_with_end = $qsa;
	$qsa = '?'.substr($qsa, 1);
}

?>
<!DOCTYPE html>
<html lang="ro">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="author" content="Netbet" />
  <meta name="description" content="Netbet Sport" />
  <meta name="Resource-type" content="Document" />
  <meta name="robots" content="noindex,follow" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"
    integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.2/velocity.min.js"></script>
  <script src="https://cdn.datatables.net/2.0.7/js/dataTables.min.js"></script>
  <script src="https://apis.google.com/js/api.js"></script>
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',"GTM-T96S3P");</script>
  <link rel="stylesheet" href="https://cdn.datatables.net/2.0.7/css/dataTables.dataTables.min.css">
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/fullpage.js/dist/fullpage.min.css" />
  <link rel="stylesheet" href="./index5.css" />
  <title>NetBet Euro 2024</title>
</head>

<body>
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T96S3P"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  <div id="loading">
    <p>Se Încarcă</p>
    <div class="loader">
      <svg viewBox="0 0 866 866" xmlns="http://www.w3.org/2000/svg">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 164.83 151.5">
          <path class="path-0"
            d="M117.24,69.24A8,8,0,0,0,115.67,67c-4.88-4-9.8-7.89-14.86-11.62A4.93,4.93,0,0,0,96.93,55c-5.76,1.89-11.4,4.17-17.18,6a4.36,4.36,0,0,0-3.42,4.12c-1,6.89-2.1,13.76-3,20.66a4,4,0,0,0,1,3.07c5.12,4.36,10.39,8.61,15.68,12.76a3.62,3.62,0,0,0,2.92.75c6.29-2.66,12.52-5.47,18.71-8.36a3.49,3.49,0,0,0,1.68-2.19c1.34-7.25,2.54-14.55,3.9-22.58Z"
            fill="#64b000" />
          <path class="path-1"
            d="M97.55,38.68A43.76,43.76,0,0,1,98,33.44c.41-2.36-.5-3.57-2.57-4.64C91.1,26.59,87,24,82.66,21.82a6.18,6.18,0,0,0-4-.71C73.45,22.55,68.32,24.25,63.22,26c-3.63,1.21-6.08,3.35-5.76,7.69a26.67,26.67,0,0,1-.6,4.92c-1.08,8.06-1.08,8.08,5.86,11.92,3.95,2.19,7.82,5.75,11.94,6.08s8.76-2.41,13.12-3.93c9.33-3.29,9.33-3.3,9.78-14Z"
            fill="#64b000" />
          <path class="path-2"
            d="M66.11,126.56c5.91-.91,11.37-1.7,16.81-2.71a3.3,3.3,0,0,0,1.87-2.17c1-4.06,1.73-8.19,2.84-12.24.54-2-.11-3-1.55-4.15-5-4-9.9-8.12-15-12a6.19,6.19,0,0,0-4.15-1.1c-5.35.66-10.7,1.54-16,2.54A4,4,0,0,0,48.34,97a109.13,109.13,0,0,0-3,12.19,4.47,4.47,0,0,0,1.34,3.6c5.54,4.36,11.23,8.53,16.91,12.69a10.84,10.84,0,0,0,2.57,1.11Z"
            fill="#64b000" />
          <path class="path-3"
            d="M127.42,104.12c4.1-2.1,8-3.93,11.72-6a6,6,0,0,0,2.27-3,58.22,58.22,0,0,0,3.18-29.92c-.26-1.7-8-7.28-9.71-6.85A5,5,0,0,0,133,59.65c-2.81,2.49-5.71,4.88-8.33,7.56a9.46,9.46,0,0,0-2.47,4.4c-1.29,6.49-2.38,13-3.35,19.55a5.73,5.73,0,0,0,.83,3.91c2.31,3.08,5,5.88,7.7,9Z"
            fill="#64b000" />
          <path class="path-4"
            d="M52.58,29.89c-2.15-.36-3.78-.54-5.39-.9-2.83-.64-4.92.1-7,2.32A64.1,64.1,0,0,0,26.09,54.64c-2.64,7.92-2.62,7.84,5.15,10.87,1.76.69,2.73.45,3.93-1C39.79,59,44.54,53.65,49.22,48.2a4.2,4.2,0,0,0,1.13-2c.8-5.32,1.49-10.68,2.24-16.34Z"
            fill="#64b000" />
          <path class="path-5" fill="#64b000"
            d="M23,68.13c0,2.51,0,4.7,0,6.87a60.49,60.49,0,0,0,9.75,32.15c1.37,2.13,6.4,3,7,1.2,1.55-5,2.68-10.2,3.82-15.34.13-.58-.58-1.38-.94-2.06-2.51-4.77-5.47-9.38-7.45-14.37C32.94,71,28.22,69.84,23,68.13Z" />
          <path class="path-6" fill="#64b000"
            d="M83.91,12.86c-.32.36-.66.71-1,1.07.9,1.13,1.57,2.62,2.73,3.33,4.71,2.84,9.56,5.48,14.39,8.1a9.29,9.29,0,0,0,3.13.83c5.45.69,10.89,1.38,16.35,1.94a10.41,10.41,0,0,0,3.07-.71c-11.48-9.9-24.26-14.61-38.71-14.56Z" />
          <path class="path-7" fill="#64b000"
            d="M66.28,132.51c13.36,3.78,25.62,3.5,38-.9C91.68,129.59,79.36,128,66.28,132.51Z" />
          <path class="path-8" fill="#64b000"
            d="M127.2,30.66l-1.27.37a18.58,18.58,0,0,0,1,3.08c3,5.52,6.21,10.89,8.89,16.54,1.34,2.83,3.41,3.82,6.49,4.9a60.38,60.38,0,0,0-15.12-24.9Z" />
          <path class="bb-9" fill="#64b000"
            d="M117.35,125c5.58-2.32,16.9-13.84,18.1-19.2-2.41,1.46-5.18,2.36-6.78,4.23-4.21,5-7.89,10.37-11.32,15Z" />
        </svg>
      </svg>
    </div>
  </div>
  <style>
    .loader {
      position: relative;
    }

    .loader svg {
      height: 100px;
      display: block;
      margin: 0 auto;
    }

    .loader svg path {
      animation-duration: 1s;
      animation-name: pulse;
      animation-iteration-count: infinite;
      color: #64b000;
    }

    .loader svg path.path-7 {
      animation-delay: -1s;
    }

    .loader svg path.path-6 {
      animation-delay: -0.875s;
    }

    .loader svg path.path-5 {
      animation-delay: -0.75s;
    }

    .loader svg path.path-4 {
      animation-delay: -0.625s;
    }

    .loader svg path.path-3 {
      animation-delay: -0.5s;
    }

    .loader svg path.path-2 {
      animation-delay: -0.375s;
    }

    .loader svg path.path-1 {
      animation-delay: -0.25s;
    }

    .loader svg path.path-0 {
      animation-delay: -0.125s;
    }

    @keyframes pulse {
      0% {
        opacity: 0.1;
      }

      30% {
        opacity: 0.8;
      }

      100% {
        opacity: 0.1;
      }
    }

    #loading {
      position: fixed;
      width: 100%;
      height: 100%;
      background: var(--white);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column-reverse;
      gap: 10px;
      z-index: 9999;

    }

    #loading p {
      color: var(--dark);
      font-size: 1em;
      position: relative;
      text-transform: uppercase;
      text-align: center;
      font-family: "MontzBold";
      /* background: #8f73ff; */
    }

    @media screen and (max-width:991px) and (orientation:portrait) {
      .loader svg {
        height: 70px;
      }

      #loading p {
        color: var(--dark);

      }
    }
  </style>
  <header id="headerId">
    <nav class="__nav_d _n">
      <div class="__logo">
        <img src="./png/elements/nbLogoWhite.png" alt="nblogo" />
      </div>
      <ul class="__ul _d">
        <li>
          <a href="https://sport.netbet.ro/?register=1<?php echo $qsa_with_end; ?>" target="_blank">Înregistrare</a>
        </li>
        <li>
          <a href="https://sport.netbet.ro/<?php echo $qsa; ?>" target="_blank">Conectare</a>
        </li>
      </ul>
      <div class="___ham">
        <div class="__ham" id="__ham">
          <span class="_ln"></span>
          <span class="_ln"></span>
          <span class="_ln"></span>
        </div>
      </div>
    </nav>
    <nav class="__nav_m _n">
      <ul>
        <li>
          <a href="https://sport.netbet.ro/?register=1<?php echo $qsa_with_end; ?>" target="_blank">Înregistrare</a>
        </li>
        <li>
          <a href="https://sport.netbet.ro/<?php echo $qsa; ?>" target="_blank">Conectare</a>
        </li>
      </ul>
    </nav>
  </header>

  <style>
    /*header style*/
    /*header style*/
    /*header style*/
    header {
      width: 100%;
      height: 2.5em;
      max-height: 100%;
      position: absolute;
      top: 0;
      color: var(--white);
      background: #69010114;
      z-index: 100;

    }

    header ul li a {
      font-family: "MontzBold";
    }

    header .__logo img,
    header .__nav_d,
    ._bdropfilter_,
    ._n ul li a {
      width: 100%;
      height: 100%;
      display: flex;
    }

    header .__logo {
      flex-basis: calc(130px + 2%);
      margin-left: 6%;
    }

    .__ul._d {
      margin-right: 6%;
    }

    header .__nav_d,
    header .__nav_d ul,
    .__nav_m ul li a,
    .__nav_m li {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    header .__nav_d {
      margin: auto;
      justify-content: space-between !important;
    }

    header .__logo img {
      object-fit: contain;
      max-height: 80px;
      filter: drop-shadow(1px 1px 1px black);
    }

    ._n {
      background: #e6ebe92e;
      backdrop-filter: blur(5px);
    }

    ._n li a {
      color: #202020;
      font-size: 0.8em;
      font-weight: bold;
      text-transform: uppercase;

    }

    .__nav_d ul {
      gap: 8px;
    }

    .__nav_d ul li {
      padding: 5px 30px;
      cursor: pointer;
      font-weight: bold;
    }



    .___ham {
      flex-basis: calc(72px + 2%);
    }

    .___ham .__ham ._ln {
      width: 27px;
      height: 3px;
      background-color: var(--white);
      display: block;
      margin: 6px auto;
      -webkit-transition: all 0.3s ease-in-out;
      -o-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
    }

    .__ham:hover {
      cursor: pointer;
    }

    #__ham.is-active ._ln:nth-child(2) {
      opacity: 0;
    }

    #__ham.is-active ._ln:nth-child(1) {
      -webkit-transform: translateY(9px) rotate(45deg);
      -ms-transform: translateY(9px) rotate(45deg);
      -o-transform: translateY(9px) rotate(45deg);
      transform: translateY(9px) rotate(45deg);
    }

    #__ham.is-active ._ln:nth-child(3) {
      -webkit-transform: translateY(-9px) rotate(-45deg);
      -ms-transform: translateY(-9px) rotate(-45deg);
      -o-transform: translateY(-9px) rotate(-45deg);
      transform: translateY(-9px) rotate(-45deg);
    }

    /*mobile nav*/
    .__nav_m {
      z-index: 3000;
      font-weight: bold;
      font-size: 0.8em;
      width: 100%;
      height: 100vh;
      position: relative;
      text-align: center;
      background: #ffffffcf;
      display: none;
    }

    .__nav_d ul li a {
      color: var(--white);
    }

    .__nav_m ul {
      background-color: #e6ebe926;
    }

    .__nav_m li:nth-child(1) {
      border-top: #e1e1e1d0 1px solid;
    }

    .__nav_m li {
      height: 5em;
      border-bottom: #e1e1e1d0 1px solid;
    }

    /*mobile nav*/
    #headerId ul li {
      list-style: none;
      border-radius: 50px;
    }

    .__nav_d ul li {
      background: var(--gradientRed);
      color: var(--white);
    }

    .__nav_m li:nth-child(2) {
      background: var(--gradientRed);

    }

    .__nav_m li:nth-child(2) a {
      color: var(--white);
    }

    #headerId .__nav_m ul li {
      border-radius: 0;
    }

    .__nav_d ul li:nth-child(2),
    .__nav_m ul li:nth-child(2):hover a {
      background: var(--gradientRed);
      color: var(--white);
    }

    /* .__nav_d ul li:nth-child(3),
  .__nav_m ul li:nth-child(3) {
    background-image: var(--button_color);
  } */

    /* .__nav_m ul li:nth-child(3) a {
    color: var(--white);
  } */

    @media (orientation: portrait) {
      header {
        height: 2.5em !important;
        position: absolute;
      }


    }

    @media (min-width: 1024px) {
      header .__nav_d {
        max-width: 100%;
      }

      .___ham,
      .__nav_m {
        display: none !important;
      }
    }

    @media (max-width: 1023px) {
      header .__nav_d {
        max-width: 100%;
      }

      ._n li a {
        font-size: 1.3em;
      }

      header .__logo {
        margin-left: 3%;
      }

      .__nav_d ul._d {
        display: none;
      }

      /* .__nav_m {
      display: block;
    } */
    }

    @media (max-width: 678px) {
      header .__logo {
        /* flex-basis: calc(11vw + 11vh); */
        flex-basis: calc(110px + 2%);
      }
    }
  </style>

  <script>
    document.addEventListener("DOMContentLoaded", function () {
      var hamButton = document.querySelector(".___ham");
      var hamIcon = document.querySelector(".__ham");
      var navMenu = document.querySelector(".__nav_m");

      hamButton.addEventListener("click", function () {
        hamIcon.classList.toggle("is-active");
        navMenu.classList.toggle("is-active");

        if (navMenu.style.display === "block") {
          navMenu.style.display = "none";
        } else {
          navMenu.style.display = "block";
        }
      });
    });
  </script>
  <div id="content">
    <div id="fullpage">
      <div class="section" id="section1">
        <div class="fp-bg"></div>
        <div class="fp-content">
          <div class="wrapp_all">
            <div class="offer">
              <div class="offer-content anim-wrapper">
                <ul>
                  <li>pariază pe</li>
                  <li>euro 2024</li>
                  <li>&</li>
                  <li>câștigă mingea</li>
                  <li>momentului</li>
                </ul>
                <a href="" class="_btnReg" id="actionBtn"></a>
              </div>
            </div>
            <div class="players p-s1-one">
              <img data-src="./png/elements/Players.png" alt="p1" loading="lazy" />
            </div>
            <div class="ball">
              <img data-src="./png/elements/euroBall.png" alt="ball" loading="lazy" />
            </div>
            <div class="anim-wrapper anim-delay-8 cotes">
              <div class="tableScore-container">
                <div class="tableScore-header gradientRed">
                  <span class="group-name">GRUPA E</span>
                  <span class="column-header">P</span>
                  <span class="column-header">W</span>
                  <span class="column-header">D</span>
                  <span class="column-header">L</span>
                  <span class="column-header">PTS</span>
                </div>
                <div id="tableScore-content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section" id="section2">
        <div class="fp-bg"></div>
        <div class="fp-content section2-text">
          <div class="wrapp_all">
            <div class="section_content">
              <h1 class="anim-wrapper">
                <span>Clasament jucători</span>
              </h1>
              <div class="intro anim-wrapper anim-delay-8">
                <p>Verifică mai jos dacă ești eligibil pentru tragerea la sorți.</p>
              </div>
            </div>
            <div class="section_info">
              <div class="infoTabel">
                <span>
                  <h5>Esti Eligibil</h5><img data-src="./png/thumbs/thumb-up2.png" class="thumb-icon" alt="td"
                    loading="lazy">
                </span> -
                <a href="#" target="_blank" rel="noopener noreferrer"> <span>
                    <h5>Depune</h5> <img data-src="./png/thumbs/thumb-down2.png" class="thumb-icon" alt="th"
                      loading="lazy">
                  </span></a>
              </div>
              <table id="tableJs" class="display" style="width: 100%"></table>
            </div>
          </div>
        </div>
      </div>
      <div class="section" id="section3">
        <div class="fp-bg"></div>
        <div class="fp-content section3-text">
          <div class="wrapp_all">
            <a href="https://sport.netbet.ro/fotbal/euro-2024/<?php echo $qsa; ?>" target="_blank">
              <div class="section_content">
                <h1 class="anim-wrapper">
                  <span>Cote Euro 2024</span>
                </h1>
                <div class="intro anim-wrapper anim-delay-8">
                  <p>Urmărește acum cotele celor mai importante meciuri.</p>
                </div>
              </div>
            </a>

            <div class="section_info">
              <div class="container-info">
              <table id="tableJsBets" class="display ">
                  <tbody></tbody>
                </table>
                <!-- <div class="coteMatch" id="coteMatch"></div> -->
              </div>
              <div class="smallText">*Cotele din oferta de pariuri pot suferi modificări în decursul timpului și de
                asemenea evenimentele pot fi suspendate din oferta de pariere și redeschise ulterior sau chiar blocate
                înainte de ora de începere.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="section" id="section4">
        <div class="slide" id="slide2-1">
          <div class="fp-bg"></div>
          <div class="fp-content">
            <div class="wrapp_all">
              <div class="section_content"></div>
              <div class="section_info">
                <div id="container_boxes2-1" class="containerBox"></div>
              </div>
              <div class="slider-controls">
                <div class="displaFlex">
                  <span style="color:rgba(0, 0, 0, 0.4);">Înapoi</span>
                  <a class="slider-control slider-control-prev" href="#">
                    <span>
                      <</span> </a> </div> <div class="displaFlex">
                        <a class="slider-control slider-control-next" href="#">
                          <span>> </span> </a>
                        <span style="color:rgba(0, 0, 0, 0.4);">Înainte</span>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="slide" id="slide2-2">
          <div class="fp-bg"></div>
          <div class="fp-content">
            <div class="wrapp_all">
              <div class="section_content"></div>
              <div class="section_info">
                <div id="container_boxes2-2" class="containerBox"></div>
              </div>
              <div class="slider-controls">
                <div class="displaFlex">
                  <span style="color:rgba(0, 0, 0, 0.4);">Înapoi</span>
                  <a class="slider-control slider-control-prev" href="#">
                    <span>
                      <</span> </a> </div> <div class="displaFlex">
                        <a class="slider-control slider-control-next" href="#">
                          <span>> </span> </a>
                        <span style="color:rgba(0, 0, 0, 0.4);">Înainte</span>
                </div>
              </div>
            </div>

          </div>
          <div class="slide" id="slide2-3">
            <div class="fp-bg"></div>
            <div class="fp-content">
              <div class="wrapp_all">
                <div class="section_content"></div>
                <div class="section_info">
                  <div id="container_boxes2-3" class="containerBox"></div>
                </div>
                <div class="slider-controls">
                  <div class="displaFlex">
                    <span style="color:rgba(0, 0, 0, 0.4);">Înapoi</span>
                    <a class="slider-control slider-control-prev" href="#">
                      <span>
                        <</span> </a> </div> <div class="displaFlex">
                          <a class="slider-control slider-control-next" href="#">
                            <span>> </span> </a>
                          <span style="color:rgba(0, 0, 0, 0.4);">Înainte</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="slide" id="slide2-4">
          <div class="fp-bg"></div>
          <div class="fp-content">
            <div class="wrapp_all">
              <div class="section_content"></div>
              <div class="section_info">
                <div id="container_boxes2-4" class="containerBox"></div>
              </div>
              <div class="slider-controls">
                <div class="displaFlex">
                  <span style="color:rgba(0, 0, 0, 0.4);">Înapoi</span>
                  <a class="slider-control slider-control-prev" href="#">
                    <span>
                      <</span> </a> </div> <div class="displaFlex">
                        <a class="slider-control slider-control-next" href="#">
                          <span>> </span> </a>
                        <span style="color:rgba(0, 0, 0, 0.4);">Înainte</span>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="slide" id="slide2-5">
          <div class="fp-bg"></div>
          <div class="fp-content">

            <div class="wrapp_all">
              <div class="section_content"></div>
              <div class="section_info">
                <div id="container_boxes2-5" class="containerBox"></div>
              </div>
              <div class="slider-controls">
                <div class="displaFlex">
                  <span style="color:rgba(0, 0, 0, 0.4);">Înapoi</span>
                  <a class="slider-control slider-control-prev" href="#">
                    <span>
                      <</span> </a> </div> <div class="displaFlex">
                        <a class="slider-control slider-control-next" href="#">
                          <span>> </span> </a>
                        <span style="color:rgba(0, 0, 0, 0.4);">Înainte</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="section " id="section5">
        <div class="fp-bg"></div>
        <div class="fp-content section5-text">
          <div class="wrapp_all">
            <div class="section_content">
              <h1 class="anim-wrapper">
                <span>Termeni și condiții</span>
              </h1>
            </div>
            <div class="section-info">
              <div class="container_terms">
                <div id="_terms" class="terms_modal">
                  <div class="terms_wrap">
                    <div class="terms_content">
                      <div class="terms_body">
                        <p><b>Cine este eligibil?</b></p>
                        <ul>
                          <li>
                            Campania se adresează atât jucătorilor noi înregistrați, cât și jucătorilor existenți pe
                            platforma NetBet Sport. Pentru a fi eligibili, jucătorii trebuie să plaseze un pariu
                            pre-live single sau combi de <b>minimum 50 RON</b> pe orice meci de la <b>EURO 2024</b>, <b>
                              cu o cotă de minimum 1.40 per selecție.</b>
                          </li>
                          <li>
                            <b>Atenție!</b> Pariurile Cashout sunt excluse de la această campanie.
                          </li>
                          <li>
                            În plus față de cele menționate anterior, jucătorii noi trebuie să introducă codul bonus
                            EUR2024 în ultimul pas al înregistrării pe NetBet Sport și să finalizeze procesul de
                            verificare a identității în termenii prevăzuți de lege.
                          </li>
                          <li>
                            Promoția se desfășoară în perioada 07.06.2024, ora 00:00 EEST – 15.07.2024, ora 23:59 EEST.
                          </li>
                          <li>Oferta este limitată la o singură utilizare per adresă domiciliu/calculator/adresă IP.
                          </li>
                        </ul>
                        <p><b>CARE ESTE PREMIUL MEU?</b></p>
                        <ul>
                          <li>
                            Jucătorii eligibili au șansa de a câștiga una dintre cele <b>100 de mingi oficiale
                              FUSSBALLLIEBE</b> cu o valoare totală de 50.000 RON. Valoarea unitară pentru fiecare premiu
                            a fost stabilită la suma de 500 RON. Cei 100 de jucători câștigători vor fi aleși prin
                            intermediul site-ului random.org la finalul perioadei promoționale.
                          </li>
                          <li>Pentru aceasta promoție, este necesar un pariu eligibil de 50 RON.</li>
                          <li>
                            Promoția este compatibilă cu altă ofertă de Bun-Venit.
                          </li>
                        </ul>
                        <p><b>Cum funcționează?</b></p>
                        <ul>
                          <li>
                            Înregistrează-te sau Conectează-te pe NetBet Sport.
                          </li>
                          <li>
                            Pentru jucătorii noi: introdu codul <b>EUR2024</b> în secțiunea Cod Bonus (opțional) din
                            ultimul pas al înregistrării pe NetBet Sport și validează contul în termenii prevăzuți de
                            lege.
                          </li>
                          <li>
                            Completează cerințele promoției: plasează un pariu pre-live single sau combi de minimum 50
                            RON pe meciurile de la EURO 2024, la o cotă de minimum 1.40 per selecție.
                          </li>

                          <p>
                            <b>Clasament</b>
                          </p>
                          <li>
                            Pentru această promoție, se ia în considerare doar primul pariu eligibil stabilit,
                            indiferent dacă este câștigat sau pierdut.
                          </li>
                          <li>
                            Sunt luate în considerare doar pariurile plasate din balanța reală.
                          </li>

                          <li>
                            Jucătorii pot consulta statutul de eligibilitate în clasamentul afișat în pagina promoției.
                          </li>
                          <li>
                            Câștigurile rezultate în urma utilizării Rundelor Gratuite vor fi
                            transferate automat ca sume bonus odată ce toate rundele acordate au
                            fost epuizate.
                          </li>
                          <li>
                            La finalul perioadei promoționale, câștigătorii vor fi aleși prin intermediul site-ului
                            random.org și vor fi contactați de echipa de Asistență Clienți în vederea stabilirii
                            detaliilor de livrare.
                          </li>
                          <li>
                            Jucătorii câștigători vor fi anunțați pe 16.07.2024 prin intermediul canalelor oficiale
                            NetBet.
                          </li>
                          <li>
                            În cazul în care unul sau mai mulți jucători nu pot fi contactați/refuză să ofere detaliile
                            necesare livrării premiului în termen de 7 zile de la data încheierii promoției, atunci,
                            NetBet nu va face o altă extragere, iar premiul va fi anulat.
                          </li>
                          <li>Reține că premiul nu poate fi schimbat cu valoarea sa în bani reali, Freebet-uri sau alte
                            bonusuri. </li>
                          <li>Un jucător poate câștiga un singur premiu pe durata campaniei.</li>
                        </ul>
                        <p><b>Ce altceva trebuie să știu?</b></p>
                        <ul>
                          <li>Această ofertă respectă <a
                              href="https://sport.netbet.ro/help/terms-and-conditions/terms-conditions<?php echo $qsa; ?>"
                              style="display:inline-block;font-size: 0.9em;">Termenii și Condițiile NetBet
                              Cazino</a>.</li>
                          <li>
                            NetBet își rezervă dreptul de a anula sau de a modifica condițiile acestei promoții fără
                            notificare prealabilă.
                          </li>
                          <li>
                            NetBet își rezervă dreptul de a exclude jucătorii care participă la această promoție
                            folosind mai multe conturi de utilizator. În cazul în care avem motive să credem că un cont
                            sau un grup de conturi operează sistematic, de exemplu, folosind tehnici de pariere
                            specifice sau pariuri în grup, atunci NetBet își rezervă dreptul de a bloca sau de a închide
                            permanent toate conturile. În aceste circumstanțe, conturile vor fi excluse automat de la
                            participarea la promoțiile viitoare, chiar dacă jucătorii au început deja procesul de
                            depunere sau de pariere.
                          </li>
                          <li>
                            NetBet își rezervă dreptul de a descalifica jucătorii în caz de coluziune, joc necinstit sau
                            în cazul în care se consideră că au abuzat de promoție. În acest caz, orice câștig rezultat
                            din urma utilizării bonusului va fi anulat.
                          </li>
                          <li>
                            Pentru a putea juca pe NetBet, este necesar să ai peste 18 ani și să nu ai interdicție de a
                            participa la activități de jocuri de noroc din orice motiv.
                          </li>
                          <li>NetBet : Licența nr. L1160651W000195 emisă de Comitetul de Supraveghere ONJN pentru NetBet
                            Enterprises
                            Ltd., Ewropa Business Centre, etaj 3, camera 704, birou A, str. Dun Karm Street, Birkirkara,
                            Malta, valabilă
                            din data de 01 Iulie 2016 până la 30 Iunie 2026.</li>
                          <li>Cod unic de identificare fiscală 35831487 eliberat de Administrația Fiscală pentru
                            Contribuabili
                            Nerezidenți.</li>
                          <li>Accesul la site-urile online cu jocuri pe bani reali este interzis în conformitate cu
                            unele
                            legislații
                            naționale.</li>
                          <li>Este responsabilitatea fiecărui jucător în parte de a se asigura că acționează în
                            conformitate
                            cu
                            legislația în vigoare atunci când accesează site-ul NetBet.</li>
                          <li>Jocurile de noroc implică riscuri financiare și de dependență. Jucați cu moderație.</li>
                          <li>Dacă simți că ai nevoie de asistență suplimentară pentru a controla activitatea de jocuri
                            de
                            noroc, ia-ți
                            timp și caută ajutor. </li>

                        </ul>
                        <p><b>Organizațiile de mai jos îți vor oferi sprijin specializat:</b></p>
                        <ul>
                          <li>Dacă ai nevoie sau știi pe cineva din jurul tău care are probleme cu jocurile de noroc,
                            nu
                            ezita să
                            contactezi
                            departamentul de relații cu clienții al grupului NetBet.</li>
                          <li style="list-style:none">- Gamblers Anonymous oferă informații pentru a ajuta oamenii să ia
                            decizii despre
                            dependența de jocuri de noroc.
                            Au, de asemenea, un serviciu de localizare a grupurilor de suport din întreaga lume,
                            inclusiv
                            din România;
                          </li>
                          <li style="list-style:none">- Gambling Therapy este un serviciu online gratuit, disponibil în
                            mai
                            multe limbi,
                            care
                            oferă sfaturi practice
                            și sprijin persoanelor afectate de probleme cu jocurile de noroc. Poate fi deosebit de util
                            deoarece site-ul
                            este
                            disponibil și în limba română.</li>
                          <li style="list-style:none">- Pentru ajutor și sprijin privind dependența de jocuri de
                            noroc contactați Clinica ALIAT la +40727880447 sau vizitați<a
                              style="color:blue;text-transform:lowercase;"
                              href="https://clinica-aliat.ro/jocuri-de-noroc/" target="_blank">
                              https://clinica-aliat.ro/jocuri-de-noroc/</a></li>

                        </ul>
                        <ul>
                          <div class="terms_footer">
                            <div class="logos">
                              <!-- Div for ONJN and GambleAware logos -->
                              <div class="logos-group">
                                <a href="https://onjn.gov.ro/" target="_blank">
                                  <img data-src="./png/elements/onjn.png" alt="onjn" class="onjn lozad" />
                                </a>
                                <a href="https://www.begambleaware.org/" target="_blank">
                                  <img data-src="./png/elements/gambleaware.png" alt="gambleaware"
                                    class="gambleaware lozad" />
                                </a>
                              </div>
                              <!-- Div for GamCare and Logo Clinica logos -->
                              <div class="logos-group">
                                <a href="https://www.gamcare.org.uk/" target="_blank">
                                  <img data-src="./png/elements/gamcare.png" alt="gamcare" class="gamcare lozad" />
                                </a>
                                <a href="https://clinica-aliat.ro/jocuri-de-noroc" target="_blank">
                                  <img data-src="./png/elements/logo_clinica.png" alt="logo_clinica"
                                    class="logo_clinica lozad" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <br>
                          <br>
                          <br>
                        </ul>
                        <br>
                      </div>
                      <br>
                      <br>
                      <br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ul id="myMenu" class="footer-bar"">
    <li class=" footer-button" data-menuanchor="oferta" class="active" data-color="--gradientRed"><a href="#oferta">Ofertă</a></li>
    <li class="footer-button" data-menuanchor="clasament" data-color="--gradientGreen"><a href="#clasament">Clasament</a></li>
    <li class="footer-button" data-menuanchor="cote" data-color="--button_color"><a href="#cote">Cote</a></li>
    <li class="footer-button" data-menuanchor="infografic" data-color="--gradientBlue"><a href="#infografic">InfoGrafic</a>
    </li>
    <li class="footer-button" data-color="--gradientBlue"><a href="#tcs">T&Cs</a></li>
  </ul>
  <svg class="arrow-down">
    <path
      d="M12 18c-.2 0-.5-.1-.7-.3l-11-10c-.4-.4-.4-1-.1-1.4.4-.4 1-.4 1.4-.1l10.4 9.4 10.3-9.4c.4-.4 1-.3 1.4.1.4.4.3 1-.1 1.4l-11 10c-.1.2-.4.3-.6.3z" />
  </svg>
  <input type="hidden" id="_4" value="3" />
  <script type="text/javascript" src="./fullpage.cards.min.js"></script>
  <script type="text/javascript" src="https://unpkg.com/fullpage.js@4.0.22/dist/fullpage.extensions.min.js"></script>

<script>
      console.log("--start script");
  const $ = fp_utils.$;
const addClass = fp_utils.addClass;
const removeClass = fp_utils.removeClass;
const toggleClass = fp_utils.toggleClass;
const g_timeouts = {};
const ACTIVE = "active";
const fullData = {
  dataBoxes: [{
      text: "Este a șasea apariție a Tricolorilor la un Campionat European. Cea mai bună performanță a fost în 2000 când visele lui Hagi și co. s-au spulberat în sferturi. Acum, România vine cu forțe proaspete și încrederea la cote maxime ținând cont că și-a câștigat grupa de calificări fără să fie învinsă.",
      image: "./png/_slides/slide1/romania2.png",
      title: "România",
    },
    {
      text: "Cele două echipe au trei victorii la Campionatele Europene. Ambele se luptă pentru a o obține pe a patra. Nu știm dacă vor reuși, cert este că dintre cele două, un record inedit îl dețin ibericii. Sunt singurii care au reușit să câștige două europene la rând: 2008 și 2012.",
      image: "./png/_slides/slide1/spaniaGermania.png",
      title: "Spania și Germania",
    },
    {
      text: "Pe locul doi la victorii, Franța și Italia speră să ajungă în clubul select din care fac parte rivalele Spania și Germania. Gli Azzuri sunt campionii en-titre, iar Cocoșii galici au câștigat mondialul din 2018 și au ajuns în finală în 2022, așa că toată lumea este cu ochii pe ei!",
      image: "./png/_slides/slide2/franceItaly.png",
      title: "Franța și Italia",
    },
    {
      text: "FUSSBALLIEBE este mingea oficială a Campionatului European. “Dragostea pentru fotbal” se regăsește în cel mai mic detaliu, de la culorile ce reprezintă fiecare națiune, la inovația tehnologică folosită pentru construcția sa.",
      image: "./png/_slides/slide2/euroBall.png",
      title: "Uniți prin fotbal",
    },
    {
      text: "Din cele 10 stadioane alese pentru acest turneu, doar unul poate face față unei finale de așa anvergură. Vorbim, desigur, de Olympiastadion din Berlin. Încă nu știm ce echipe se vor duela pe 14 iulie, dar un lucru este cert: cei 70,000 de spectatori vor avea parte de o atmosferă incendiară!",
      image: "./png/_slides/slide3/grandFinal.png",
      title: "Marea finală",
    },
    {
      text: "Știai că din cele 24 de echipe participante la EURO 2024, Portugalia este singura care a câștigat fiecare meci din calificări? Cu 36 de goluri înscrise și doar 2 încasate, colegele sale de grupă Cehia, Turcia și Georgia au o misiune grea.",
      image: "./png/_slides/slide3/winWhite.png",
      title: "Victorie în alb",
    },
    {
      text: "Cristiano Ronaldo! Legendarul jucător portughez se află (probabil) la ultima sa apariție la un turneu final. Cea de-a 6 ediție de EURO este un adevărat record, fiind singurul jucător care a reușit o asemenea performanță.",
      image: "./png/_slides/slide4/ronaldo.png",
      title: "Nu există EURO fără....",
    },
    {
      text: "Michel Platini a fost omul de bază al francezilor la campionatul din ’84. O adevărată legendă, ținând cont că recordul său de 9 goluri date la o singură ediție de EURO este încă în picioare. Să fie oare acesta Europeanul în care se va doborî recordul său?",
      image: "./png/_slides/slide4/platini.png",
      title: "Recorduri personale",
    },
    {
      text: "Încă o dată, englezii sunt în frunte, cu un lot ce valorează 1,67 miliarde de euro. Nu stau rău nici Les Bleus cu un lot de peste un miliard de euro. La polul opus, România încheie topul cu un lot ce valorează 95 de milioane de euro.",
      image: "./png/_slides/slide5/angliaFranta.png",
      title: "Cel mai valoros lot",
    },
    {
      text: "Aici lupta se dă între Kylian Mbappe și Jude Bellingham. Performanțele lor și ale naționalelor sigur vor face diferența la finalul turneului!",
      image: "./png/_slides/slide5/frantaAnglia.png",
      title: "...si cei mai valoroși jucători",
    },
  ],
  containerBoxes: [
    "container_boxes2-1",
    "container_boxes2-2",
    "container_boxes2-3",
    "container_boxes2-4",
    "container_boxes2-5",
  ]

};

// Add origin animations
function addOriginAnimations(elements, direction) {
  if (elements.length) {
    elements.forEach(function (element) {
      // console.log(element);
      element.classList.remove("animate2");
      g_timeouts.origin = setTimeout(function () {
        console.warn("hide-" + direction);
        addClass(element, "hide-" + direction);
        element.classList.remove("animate");
      }, 100);
    });
  }
}

// Add destiny animations
function addDestinyAnimations(element, direction) {
  const hideClass =
    direction === "up" || direction === "down" ?
    "hide-down hide-up" :
    "hide-left hide-right";
  if (element) {
    addClass(element, ACTIVE);
    addClass(element, "animate");
    removeClass(element, hideClass);
    g_timeouts.destination = setTimeout(function () {
      addClass(element, "animate2");
    }, 1000);
  }
}

// Initialize fullpage.js
document.addEventListener("DOMContentLoaded", function () {
  const loadingElement = document.getElementById('loading');
  const contentElement = document.getElementById('content');
  loadingElement.style.display = 'flex';
  contentElement.style.display = 'none';

  function hideLoadingScreen() {
    setTimeout(() => {
      loadingElement.style.display = 'none';
      contentElement.style.display = 'flex';
    }, 1500); // 1000ms = 1 second
  }

  window.addEventListener("load", hideLoadingScreen);

  new fullpage("#content", {
    licenseKey: "K6CMK-781MK-IQ9J6-N9S36-VXKNO",
    cards: true,
    cardsKey: "STdibVYwWW1WMExuSnZLOF8yZnRZMkZ5WkhNPU9NTw==",
    // sectionsColor: ["#3a45de", "#fc6c7c", "#7BAABE"],
    anchors: ["oferta", "clasament", "cote", "infografic", "tcs"],
    menu: "#myMenu",
    navigation: true,
    keyboardScrolling: true,
    dragAndMove: true,
    lazyLoading: true,
    controlArrows: false,
    fadingEffect: false,
    afterLoad: (origin, destination, direction) => {

    },
    onLeave: (origin, destination, direction) => {
      clearTimeout(g_timeouts.destination);
      removeClass(document.body, "fp-moving-right fp-moving-vertically fp-moving-left fp-moving-down fp-moving-up");
      // if (direction) {
      //   addClass(document.body, `fp-moving-${direction}`);
      //   removeClass(document.body, "fp-moving-horizontally");
      //   addClass(document.body, "fp-moving-vertically");
      // }
      if (["right", "left"].indexOf(direction) === -1) {
        const activeElement = $(`.active[data-section="${destination.index + 1}"]`)[0];
        addDestinyAnimations(activeElement || $(`[data-section="${destination.index + 1}"]`)[0], direction);
        const originElements = $(`.active[data-section="${origin.index + 1}"]`);
        addOriginAnimations(originElements, direction);
      }
    },
    onSlideLeave: (section, origin, destination, direction) => {
   
 // Clear any previous movement-related classes from the body
 removeClass(document.body, "fp-moving-right fp-moving-left fp-moving-down fp-moving-up");

 // Add movement-related classes based on the direction
 if (direction) {
   addClass(document.body, `fp-moving-${direction}`);
   removeClass(document.body, "fp-moving-vertically");
   addClass(document.body, "fp-moving-horizontally");

   const originId = origin.item.id;
   if (direction === 'right' || direction === 'left') {
     const boxParent = document.querySelectorAll(".boxParent");
     boxParent.forEach(parent => addClass(parent, `${originId}-${direction}`));
   }
 }

 // Handle destination animations
 const destinationElement = document.querySelector(`.trainers[data-section="${section.index + 1}"][data-slide="${destination.index + 1}"]`);
 if (destinationElement) {
   addDestinyAnimations(destinationElement, direction);
 }

 // Handle origin animations and removing ACTIVE class
 const activeElements = document.querySelectorAll(`.trainers[data-section="${section.index + 1}"][data-slide="${origin.index + 1}"]`);
 activeElements.forEach(element => {
   removeClass(element, ACTIVE);
   addOriginAnimations(element, direction);
 });
    },
    afterResize: function(width, height){},
  });
});

// Event listeners
document.querySelector(".arrow-down").addEventListener("click", () => {
  fullpage_api.moveSectionDown();
});

document.querySelectorAll(".slider-control-next").forEach(element => {
  element.addEventListener("click", e => {
    e.preventDefault();
    fullpage_api.moveSlideRight();
  });
});

document.querySelectorAll(".slider-control-prev").forEach(element => {
  element.addEventListener("click", e => {
    e.preventDefault();
    fullpage_api.moveSlideLeft();
  });
});

fullData.dataBoxes.forEach((item, index) => {
  const sectionIndex = Math.floor(index / 2);
  const sectionContainer = document.getElementById(fullData.containerBoxes[sectionIndex]);
  if (sectionContainer) {
    sectionContainer.innerHTML += `
      <div class="boxParent${index} boxParent">
        <div>
          <img src="${item.image}" alt="img" class="boxImg boxImg${index}">
        </div>
        <div>
          <p>${item.title}</p>
          <p class="boxText boxText${index}">${item.text}</p>
        </div>
      </div>
    `;
  }

});
function onLoad() {
  addClass(document.body, "loadBg");
}
window.addEventListener("load", onLoad);

</script>
  <script>
    let userLoginCheck = getCookie("netbet_login");
    let qNetbet_id = getCookie("netbet_id");

    function getCookie(name) {
      const nameEQ = name + "=";
      const ca = document.cookie.split(";");
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
        }
      }
      return null;
    }

    let modalIntervalId;

    // Function to fetch data from the API
    async function fetchData() {
      try {
        const response = await fetch(
          "https://api.netbet.com/leaderboard/euro2024?website=casino&lang=eu&device=desktop"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        // console.log(responseData, "data fetch");
        if (
          responseData?.status === true &&
          Array.isArray(responseData.data?.data)
        ) {
          return responseData.data.data;
        } else {
          throw new Error("Invalid response data format");
        }
      } catch (error) {
        console.error("Failed to fetch data:", error);
        return null;
      }
    }
    let linkGo;
    const actionBtn = document.getElementById("actionBtn");
    const depositBtn = document.getElementById("deposit");
    const textContentReg =
      "Înregistrează-te sau accesează contul tău și plasează un pariu eligibil pentru a fi inclus în tragerea la sorți ce oferă mingea momentului!";
    const textContentBet =
      "Plasează acum un pariu eligibil pentru a fi inclus în tragerea la sorți ce oferă mingea momentului!";
    const checkStatus =
      userLoginCheck === "logged_out" ||
      userLoginCheck === "netbet_login" ||
      userLoginCheck === null ||
      userLoginCheck === "";
    if (checkStatus) {
      linkGo = "https://sport.netbet.ro/?register=1<?php echo $qsa_with_end; ?>";
      actionBtn.href = "https://sport.netbet.ro/?register=1<?php echo $qsa_with_end; ?>";
      actionBtn.textContent = "Înregistrează-te";
    } else {
      linkGo = "https://sport.netbet.ro/fotbal/euro-2024/<?php echo $qsa; ?>";
      actionBtn.href = "https://sport.netbet.ro/fotbal/euro-2024/<?php echo $qsa; ?>";
      actionBtn.textContent = "Pariază Acum";
    }
    // Function to initialize the DataTable
    function initializeDataTable(selector, data, qNetbet_id) {
      const dataSorted = data.sort((a, b) =>
        a.player_id == qNetbet_id ? -1 : b.player_id == qNetbet_id ? 1 : 0
      ); // for {user with auth to be first}
      // console.log(matchingItem,"matchingItem")
      return new DataTable(selector, {
        data: dataSorted,
        columns: [{
            title: "Participanți",
            data: "username",
          },
          {
            title: "Status",
            data: "status",
            render: (data) => {
              const thumbIcon = data === 0 ? "thumb-up2.png" : "thumb-down2.png";
              return `<span><img src="./png/thumbs/${thumbIcon}" class="thumb-icon" alt="Thumb Icon"></span>`;
            },
          },
        ],
        paging: true,
        info: true,
        lengthChange: false,
        aaSorting: true,
        responsive: true,
        pageLength: window.innerWidth < 991 ? 8 : 10,
        paginate: true,
        searching: false,
        ordering: false,
        createdRow: function (row, rowData) {
          if (rowData.player_id === parseInt(qNetbet_id)) {
            addClass(row, "highlight");
            let firstTd = row.getElementsByTagName("td")[0];
            if (firstTd) {
              firstTd.textContent = userLoginCheck;
            }
          }
        },
      });
    }

    async function initializePage() {
      const fetchedData = await fetchData();

      if (!fetchedData) {
        console.error("No data fetched");
        return null;
      }

      const tableData = fetchedData.map((item) => ({
        username: item.username,
        status: item.status,
        player_id: item.player_id,
      }));
      // find id
      const matchingItem = tableData.find((item) => item.player_id == qNetbet_id);
      initializeDataTable("#tableJs", tableData, qNetbet_id);
      return matchingItem;
    }

    initializePage().then((matchingItem) => {
      if (matchingItem) {
        // console.log("Found matching item:", matchingItem);
        actionBtn.removeAttribute("href");
        actionBtn.textContent = "Vezi Clasamentul";
        actionBtn.addEventListener("click", () => {
          fullpage_api.moveSectionDown();
        });
      } else {
        setTimeout(() => {
          showNotEligibleModal();
        }, 2000);
      }
    });

    function startModalInterval() {
      modalIntervalId = setInterval(() => {
        if (!document.getElementById("modalOverFlow")) {
          showNotEligibleModal();
        }
      }, 300000); //5 min in milisec
    }

    function showNotEligibleModal() {
      if (document.getElementById("modalOverFlow")) return;
      const modal = document.createElement("div");
      modal.innerHTML = `
    <div class="modalOverFlow" id="modalOverFlow">
      <div class="modalParent">
        <div>
             <button id="modalCloseButton">&#10006</button>
         </div>
      <div class="modalContainer">
        <p>${checkStatus ? textContentReg : textContentBet} </p>
          <a href="${linkGo}" target="_blank">
          <button class="_btnReg" id="deposit">
          ${actionBtn.textContent}
          </button>
          </a>
          <p class="arrow-custom">Termeni și Condiții</p>
      </div>
    </div>
  </div>
  `;
      document.body.appendChild(modal);

      document.querySelector(".arrow-custom").addEventListener("click", () => {
        fullpage_api.moveTo('tcs');
        closeModal();
      });

      document.getElementById("modalCloseButton").onclick = closeModal;
      clearInterval(modalIntervalId);
    }

    function closeModal() {
      const modal = document.getElementById("modalOverFlow");
      if (modal) {
        modal.remove();
      }
      startModalInterval();
    }
</script>
<script>
    // API key
const API_KEY = 'AIzaSyAAfFbz11XXy1za2hcLHhiqKYcwF23kP-M';
// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
// The ID of the spreadsheet to retrieve data from.
const SPREADSHEET_ID = '1pt__R7igjnx-IVYYRs0bXH6wOrREYVjeIN83ZNu8zBw';
// The range of values to retrieve.
const RANGE = 'Sheet1!A1:G10'; 
const RANGE2 = 'Sheet1!J1:Q10';

function gapiLoaded() {
  gapi.load('client', initializeGapiClient);
}

async function initializeGapiClient() {
  await gapi.client.init({
    apiKey: API_KEY,
    discoveryDocs: [DISCOVERY_DOC],
  });
  await fetchClassament();
}

async function fetchClassament() {
  try {
    const response = await gapi.client.sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE2,
      includeGridData: true,
    });

    const range = response.result;
    if (range.values.length) {
      // console.log('Cotes Data:');
      range.values.forEach((row) => {
        // console.log(row);
      });
  
      displayClasament(range.values);
    } else {
      console.log('No cotes data found.');
    }
  } catch (err) {
    console.error('Error fetching cotes data:', err);
  }
}

function displayClasament(rows) {
  const groupName = rows[0][1]; 
  const groupNameElement = document.querySelector('.tableScore-header .group-name');
  groupNameElement.textContent = groupName;
    const tableContent = document.getElementById('tableScore-content');
    let htmlContent = '';
    rows.slice(1).forEach(row => {
      const teamName = row[2];
      const isRomania = teamName.toLowerCase() === 'romania';
      const className = isRomania ? 'romania-row' : '';
      htmlContent += `
        <div class="parent-tableScore-row ${className}">
          <div class="tableScore-row">
            <div class="team-name">
              <img class="flag" src="${row[1]}" alt="${row[2]} flag">
              ${row[2]}
            </div>
            <div class="cell">${row[3]}</div>
            <div class="cell">${row[4]}</div>
            <div class="cell">${row[5]}</div>
            <div class="cell">${row[6]}</div>
            <div class="cell">${row[7]}</div>
          </div>
        </div>
      `;
    });

    tableContent.innerHTML = htmlContent;
}

gapi.load('client:auth2', gapiLoaded);

async function fetchOddsData() {
        try {
          const response = await fetch("https://casino-promo.netbet.ro/scripts/utils/event_feed_euro2024.php?lang=RO&provider_competition_id=1855");
          const data = await response.json();
          return data.items;
        } catch (error) {
          console.error("Error fetching data:", error);
          return [];
        }
      }

      function translateTeamName(teamName) {
        const translations = {
          Germany: "Germania",
          "Czech Republic": "Cehia",
          Hungary: "Ungaria",
          Switzerland: "Elveția",
          Spain: "Spania",
          Poland: "Polonia",
          Slovenia: "Slovenia",
          Denmark: "Danemarca",
          Netherlands: "Olanda",
          Albania: "Albania",
          Croatia: "Croația",
          Serbia: "Serbia",
          England: "Anglia",
          Slovakia: "Slovacia",
          Georgia: "Georgia",
          Portugal: "Portugalia",
          Italy: "Italia",
          Scotland: "Scoția",
          Ukraine: "Ucraina",
          France: "Franța",
          Belgium: "Belgia",
          Turkey: "Turcia",
          Austria: "Austria",
        };
        return translations[teamName] || teamName;
      }

      function formatOdds(odds) {
        return Number.isInteger(parseFloat(odds))
          ? `${odds}.00`
          : parseFloat(odds).toFixed(2);
      }

      function formatDate(dateString) {
        const [year, month, day] = dateString.split("-");
        return `${day}-${month}-${year}`;
      }

      async function fetchAndParseOddsData() {
        const rawData = await fetchOddsData();

        const parsedData = Object.values(rawData)
          .filter((item) => item.provider_competition_id === 1855)
          .map((item) => {
            if (!item.markets || !item.markets.match_result) {
              return null;
            }
            return {
              home_team: translateTeamName(item.home_team),
              away_team: translateTeamName(item.away_team),
              starts_at: formatDate(item.starts_at.split(" ")[0]),
              home_odds: formatOdds(item.markets.match_result[0].odds_decimal),
              draw_odds: formatOdds(item.markets.match_result[1].odds_decimal),
              away_odds: formatOdds(item.markets.match_result[2].odds_decimal),
              id: item.id.replace("1-", ""),
              name: item.name,
            };
          })
          .filter((item) => item !== null);

        return parsedData;
      }

      function initTableOdds(selector, parsedData) {
        dataTableOdds(selector, parsedData);
      }

      // Fetch and parse the data, then initialize the table
      fetchAndParseOddsData().then((parsedData) => {
        initTableOdds("#tableJsBets", parsedData);
      });

      function generateLink(name, id) {
        const parts = name.split(" vs ");
        const translatedParts = parts.map((team) => translateTeamName(team));
        const translatedName = translatedParts.join(" vs ");
        const formattedName = translatedName.toLowerCase().replace(/\s+/g, "-");
        return `https://sport.netbet.ro/fotbal/european-championship/${formattedName}-${id}<?php echo $qsa; ?>`;
      }

      function dataTableOdds(selector, data) {
        return new DataTable(selector, {
          data: data,
          columns: [
            {
              title: "Echipe",
              data: null,
              render: function (data, type, row) {
                const [date] = row.starts_at.split(" ");
                return `
                  <div class="content-cote">
                    <div class="matches-cote">
                      <p>${row.home_team}</p> <p>1x2</p> <p>${row.away_team}</p>
                    </div>
                    <div class="date-cote"><p>${date}</p></div>
                    <div class="number-cote">
                      <p>${row.home_odds}<span>|</span></p>
                      <p>${row.draw_odds}<span>|</span></p>
                      <p>${row.away_odds}</p>
                    </div>
                  </div>
                `;
              },
            },
          ],
          paging: true,
          info: false,
          lengthChange: false,
          responsive: false,
          pageLength: window.innerWidth < 991 ? 4 : 4,
          searching: false,
          ordering: false,
          pagingType: "first_last_numbers",
          createdRow: function (row, data) {
            const link = generateLink(data.name, data.id);
            row.addEventListener("click", function () {
              let a = document.createElement("a");
              a.href = link;
              a.target = "_blank";
              a.rel = "noopener "; //  security // -- noreferrer !tracking
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
            });
          },
        });
      }

</script>
</body>
</html>