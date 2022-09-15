{block name="add_char"}
<div class="container-hero-img move draggable" style="position:relative;">
    <li><img class="char_water animation" data-x="0.05" data-y="0.05" data-scale="1.05" src="{$asset}/donut2.png"
            alt="chars" /></li>
    <li><img class="char_water animation" src="{$asset}/pepene.png" alt="chars" /></li>
    <li><img class="char_water animation" src="{$asset}/flamingo.png" alt="chars" /></li>
    <li><img class="char_water animation" src="{$asset}/donut1.png" alt="chars" /></li>
    <li><img class="char_water animation" src="{$asset}/Septar.png" alt="chars" /></li>
    <li><img class="char_water animation" src="{$asset}/pizza.png" alt="chars" /></li>
    <li><img class="char_water animation" src="{$asset}/pinapple.png" alt="chars" /></li>
    <svg style="display: none">
        <defs>
            <filter id="under-water-effect" x="0" y="0" width="130px" height="100%" result="abc">
                <feTurbulence id="water-effect" numOctaves="4" seed="1" baseFrequency="0.04"></feTurbulence>
                <feDisplacementMap scale="45" in2="abc" in="SourceGraphic" xChannelSelector="R" yChannelSelector="B"
                    result="displacement"></feDisplacementMap>
                <animate xlink:href="#water-effect" attributeName="baseFrequency" dur="30s" begin="0" keyTimes="0;0.5;1"
                    values="0.01;0.005;0.01" repeatCount="indefinite" />
            </filter>
        </defs>
    </svg>
</div>
{/block}
{block name="offer_html"}
<svg style="display: none">
    <defs>
        <filter id="logo-water-effect" x="0" y="0" width="100%" height="100%">
            <feTurbulence id="water-effect1" numOctaves="2" seed="1" baseFrequency="0.01"></feTurbulence>
            <feDisplacementMap scale="15" in="SourceGraphic" xChannelSelector="R" yChannelSelector="B"
                result="displacement"></feDisplacementMap>
            <animate xlink:href="#water-effect1" attributeName="baseFrequency" dur="30s" begin="0" keyTimes="0;0.5;1"
                values="0.01;0.003;0.01" repeatCount="indefinite" />
        </filter>
    </defs>
</svg>
<div class="offer-html">
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
</div>
{/block}

{block name="offer_css"}

<style>
    .promo-text>.inner>span {
        color: #f8bf00;
    }

    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
    }

    .container-hero-img li img,
    .offer {
        -khtml-user-select: none;
        -o-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }


    .container-hero-img {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: nowrap;
        position: relative;
    }

    .container-hero-img li {
        position: relative;
        list-style-type: none;
    }


    .container-hero-img li:nth-child(1) {
        top: 300px;
        left: 275px;
        -webkit-animation: rotating1 60s linear infinite alternate;
    }

    @media (orientation: landscape) and (min-width: 992px) {
        @-webkit-keyframes rotating1 {
            from {
                -webkit-transform: rotate(0deg) translateY(0px) translateX(-100px);
            }

            to {
                -webkit-transform: rotate(320deg) translateY(-9px) translateX(90px);
            }
        }

        .container-hero-img li:nth-child(2) {
            top: -120px;
            left: 167px;
            -webkit-animation: rotating2 40s linear infinite alternate;

        }

        @-webkit-keyframes rotating2 {
            from {
                -webkit-transform: rotate(0deg) translateY(0px) translateX(0px);
            }

            to {
                -webkit-transform: rotate(-90deg) translateY(65px) translateX(100px);
            }
        }

        .container-hero-img li:nth-child(3) {
            top: 210px;
            left: 120px;
            -webkit-animation: rotating3 35s linear infinite alternate;
        }

        @-webkit-keyframes rotating3 {
            from {
                -webkit-transform: rotate(0deg) translateY(0px);
            }

            to {
                -webkit-transform: rotate(-60deg) translateY(-45px);
            }
        }

        .container-hero-img li:nth-child(4) {
            top: 10px;
            left: 150px;
            -webkit-animation: rotating4 40s linear infinite alternate;
            text-align: center;
        }

        @-webkit-keyframes rotating4 {
            from {
                -webkit-transform: rotate(0deg) translateY(0px) translateX(0px);


            }

            to {
                -webkit-transform: rotate(360deg) translateY(-10px) translateX(0px);

            }
        }

        .container-hero-img li:nth-child(5) {
            top: 220px;
            left: 230px;
            -webkit-animation: rotating5 30s linear infinite alternate;
        }

        @-webkit-keyframes rotating5 {
            from {
                -webkit-transform: rotate(0deg) translateY(0px) translateX(0px);
            }

            to {
                -webkit-transform: rotate(-90deg) translateY(10px) translateX(20px);
            }
        }

        .container-hero-img li:nth-child(6) {
            top: -280px;
            left: -280px;
            -webkit-animation: rotating6 40s linear infinite alternate;
        }

        @-webkit-keyframes rotating6 {
            from {
                -webkit-transform: rotate(20deg) translateY(0px) translateX(0px);
            }

            to {
                -webkit-transform: rotate(100deg) translateY(-65px) translateX(30px);
            }
        }

        .container-hero-img li:nth-child(7) {
            top: -220px;
            left: -69px;
            transform: rotate(207deg);
            -webkit-animation: rotating7 50s linear infinite alternate;
        }

        @-webkit-keyframes rotating7 {
            from {
                -webkit-transform: rotate(207deg) translateY(90px) translateX(0px);
            }

            to {
                -webkit-transform: rotate(100deg) translateY(40px) translateX(130px);
            }
        }
    }

    body::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 89vh;
        margin: 0 auto;
        z-index: -3;
        background-image: url(https://go-testing.netbet.ro/lp-asset/netbetro/casino/poolparty2/logo3.png);
        background-position: center 60%;
        background-repeat: no-repeat;
        background-size: 96%;
        opacity: 0.9;
        filter: blur(2px) url("#logo-water-effect");

    }

    body::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-image: url("{$background_desktop}");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        z-index: -2;
        filter: url("#under-water-effect");
        transform: scale(1.1);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;

    }

    body {
        background: #00ccff;
        /*  background: linear-gradient(42deg, #8a9dad 0%,#96bdc3 46%,#5ed5f9 100%);*/
    }

    @media (orientation: landscape) and (min-width: 992px) {
        .container-hero {
            height: 78vh !important;
            MAX-WIDTH: 100% !important;
            /* min-width: 300px; */
            margin: 1em 1em 1em 1em !important;
            justify-content: center;
            display: grid;
            place-content: center;
            grid-template-columns: 1fr 0.5fr !important;
            grid-auto-rows: 1fr 1fr !important;
            align-items: center;
            position: relative;
        }

        .offer {
            display: unset !important;
            justify-content: unset !important;
            place-items: unset !important;
            width: unset !important;
            position: relative;
            height: unset !important;
            height: unset !important;
            right: unset !important;
            top: unset !important;
            font-size: unset !important;
            grid-column: unset !important;

        }

        .offer {
            position: relative;
            left: -200px;
        }

        .offer img {
            display: block;
            height: 700px !important;
        }
    }

    @media only screen and (max-width:992px) {
        .container-hero {
            transform: scale(0.8);
        }
    }



    @media only screen and (max-width:1400px) {
        .container-hero {
            transform: scale(0.7);
        }
    }

    @media only screen and (max-width:1599px) {
        .container-hero {
            transform: scale(0.8);
        }
    }

    @media (orientation:landscape) and (min-width:1600px) {
        .container-hero {
            transform: scale(1);

        }
    }

    @media (orientation:landscape) and (min-width:1921px) {
        .container-hero {
            transform: scale(1.2);
        }
    }

    @media (orientation: landscape) and (min-height: 920px) and (max-height:1000px) {
        .container-hero {
            transform: scale(0.85);
        }
    }

    @media (max-width: 450px) and (orientation: portrait) {
        body::before {
            background-image: url("{$background_mobile}");
            height: 100%;
            background-repeat: repeat;
            overflow: hidden;
        }

        .cta-button.mobile {
            margin-top: 10px;
            z-index: 1;
            display: inline-flex;
            justify-content: center;
            color: #fff;
            text-decoration: none;
            padding: 1em 1em;
            position: absolute;
            bottom: 50px;
        }
    }

    @media screen and (max-width: 768px) {
        body {
            -webkit-overflow-scrolling: touch;
            /* Safari 3.1+ */
            -moz-overflow-scrolling: touch;
            /* Firefox 2+ */
            -ms-overflow-scrolling: touch;
            /* IE 10+ */
            overflow-scrolling: touch;
            /* Standard syntax */
            -webkit-user-select: none;
            /* Safari 3.1+ */
            -moz-user-select: none;
            /* Firefox 2+ */
            -ms-user-select: none;
            /* IE 10+ */
            user-select: none;
            /* Standard syntax */
        }
    }



    .steps {
        z-index: 12 !important;
    }

    .hero {
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    }

    .char {
        height: 100%;
    }


    .char_water.onmobile {
        display: none;
    }

    body::before {
        z-index: unset !important;

    }

    header {
        z-index: 200;
    }

    .offer-html {

        font-weight: bold;
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
        background-color: rgba(255, 255, 255, 1);
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
        text-align: justify;
        margin-left: 0.2em;
        margin-bottom: 0.8em;
    }

    .line-1 span {
        background-color: #ffc107;
        color: black;
        font-size: 1.6em;
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

    .line-4 {
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

    .offer {

        position: relative;

    }

    .offer-text {
        font-size: 0.9em;
    }



    @media (orientation: portrait) and (max-width:768px) {
        .container-hero {
            height: 78vh !important;
            MAX-WIDTH: 100% !important;
            /* min-width: 300px; */
            margin: 1em 1em 3em 1em !important;
            justify-content: center;
            display: grid;
            place-content: center;
            grid-template-columns: 1fr 0.5fr !important;
            grid-auto-rows: 1fr 1fr !important;
            align-items: center;
            position: relative;
        }

        .offer {
            display: unset !important;
            justify-content: unset !important;
            place-items: unset !important;
            width: unset !important;
            position: relative;
            height: unset !important;
            height: unset !important;
            right: unset !important;
            top: unset !important;
            font-size: unset !important;
            grid-column: unset !important;

        }

        .offer {
            position: absolute;

        }

        .offer img {
            display: block;
            height: 700px !important;
        }

        .offer-text {
            font-size: 1.2em;
            text-align: center;

        }

    }

    @media (orientation: portrait) {
        .cta-button.mobile {
            margin-top: 10px;
            z-index: 1;
            display: inline-flex;
            justify-content: center;
            color: #fff;
            text-decoration: none;
            padding: 1em 1em;
            position: absolute;
            bottom: 50px;
        }
    }


    @media (orientation: portrait) and (max-width: 480px) {
        .container-hero {
            height: 68vh !important;
            max-width: 360px;
            width: 360px;
        }

        .promo-text {
            font-size: 20px;
        }

        .container-hero-img li img {
            transform: scale(0.6);
            -webkit-transform: scale(0.6);
            position: relative;
        }

        .container-hero {
            transform: scale(0.90);
            -webkit-transform: scale(0.90);

        }

        .container-hero-img li {
            position: absolute;
            list-style-type: none;
        }

        .container-hero-img {
            max-width: 360px;
            width: 320px;
            max-width: 360px;
            width: 320px;
            height: 65vh;
            margin: auto;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;

        }

        .offer img {
            display: block;
            height: 400px !important;
        }

        body::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 80vh;
            margin: 0 auto;
            z-index: -3;
            background-image: url(https://go-testing.netbet.ro/lp-asset/netbetro/casino/poolparty2/logo2.png);
            background-position: center 58%;
            background-repeat: no-repeat;
            background-size: 100%;
            opacity: 0.9;
            filter: blur(2px) url(#logo-water-effect1);
        }

        .offer-text {
            font-size: 0.75em;
        }

        .offer {
            position: absolute;
            left: 70px;
        }

    }

    @media (orientation: portrait) and (max-width: 480px) {

        .container-hero-img li:nth-child(1) {
            top: 70px;
            left: 26px;
            -webkit-animation: rotating1s 60s linear infinite alternate;
            visibility: hidden;
        }

        @-webkit-keyframes rotating11 {
            from {
                -webkit-transform: rotate(0deg) translateY(0px) translateX(0px);
            }

            to {
                -webkit-transform: rotate(320deg) translateY(0px) translateX(9px);
            }
        }

        .container-hero-img li:nth-child(2) {
            /*pepene*/
            top: 95px;
            left: -40px;
            -webkit-animation: rotating2-2 35s linear infinite alternate;
            z-index: 100;
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
        }


        @-webkit-keyframes rotating2-2 {
            from {
                -webkit-transform: rotate(0deg);
            }

            to {
                -webkit-transform: rotate(-320deg);
            }
        }

        .container-hero-img li:nth-child(3) {
            /*flamingo*/
            top: -88px;
            left: -83px;
            -webkit-animation: rotating3s 25s linear infinite alternate;
        }


        @-webkit-keyframes rotating3s {
            from {
                -webkit-transform: rotate(0deg) translateY(0px);
            }

            to {
                -webkit-transform: rotate(60deg) translateY(-4px);
            }
        }

        .container-hero-img li:nth-child(4) {
            /*gogoasa rosie*/
            top: -61px;
            left: 219px;
            -webkit-animation: rotating4s 40s linear infinite alternate;
            text-align: center;

        }

        @-webkit-keyframes rotating4s {
            from {
                -webkit-transform: rotate(0deg) translateY(0px) translateX(0px);
            }

            to {
                -webkit-transform: rotate(360deg) translateY(-10px) translateX(0px);

            }
        }

        .container-hero-img li:nth-child(5) {
            top: 296px;
            left: -42px;

            -webkit-animation: rotating5s 30s linear infinite alternate;

        }

        @-webkit-keyframes rotating5s {
            from {
                -webkit-transform: rotate(0deg) translateY(0px) translateX(0px);
            }

            to {
                -webkit-transform: rotate(90deg) translateY(10px) translateX(20px);
            }
        }

        .container-hero-img li:nth-child(6) {
            visibility: hidden;
            /*pizza*/
            top: -185px;
            left: -362px;
            -webkit-animation: rotating6s 40s linear infinite alternate;
        }

        @-webkit-keyframes rotating6s {
            from {
                -webkit-transform: rotate(20deg) translateY(0px) translateX(0px);
            }

            to {
                -webkit-transform: rotate(100deg) translateY(-6px) translateX(10px);
            }
        }


        .container-hero-img li:nth-child(7) {
            top: 331px;
            right: -70px;

            -webkit-animation: rotating7s 50s linear infinite alternate;
            z-index: 0;
        }

        @-webkit-keyframes rotating7s {
            from {
                -webkit-transform: rotate(207deg) translateY(9px) translateX(0px);
            }

            to {
                -webkit-transform: rotate(-100deg) translateY(14px) translateX(40px);
            }
        }

    }
</style>
{/block}