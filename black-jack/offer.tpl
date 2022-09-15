


{block name="add_char"}
<img class="char animation" src="{$asset}/char.png" alt="chars"/>
<img class="char onmobile animation" src="{$asset}/char-mobile1.png" alt="charss"/>
{/block}


{block name="offer_html"}
<div class="offer-html">
	<div class="line-4">
		<span>PÂNĂ LA</span>
	</div>
	<div class="line-5">5000 RON</div>
	<div class="line-6">BONUS</div>
	<div class="line-7">+</div>
	<div class="line-8">650</div>
	<div class="line-9">RUNDE GRATUITE</div>
</div>
{/block}

{block name="offer_css"}

<style>
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
	.char{
		height:65%;
	}
	
	
	.container-hero {
		height: 85vh;
		MAX-WIDTH: 1200px;
		min-width: 300px;
		margin: 2em auto 1em;
		display: grid;
		place-content: center;
		grid-template-columns: 1fr 1fr;
		align-items: center;
		position: relative;
	}
	.char.onmobile {
		display: none;
	}
	/*
    .offer{
      z-index: 100;
    }
*/
	body::before {
		z-index: unset !important;

	}
	header {
		z-index: 200;
	}

	.offer-html {
		font-size: 1.6em;
		text-transform: uppercase;
		text-align: center;
		font-weight: bold;
	}

	.line-6,
	.line-9 {
		color: #ffc107;
	}

	.line-4 {
		font-size: 1.3em;
		margin-top: -1.1em;
		margin-bottom: 0.2em;
	}

	.line-4 span {
		background-color: #ffc107;
		color: black;
		font-size: 0.8em;
		padding: 0.1em 0.2em;
		height: 1em;
		font-weight: bold;
	}

	.line-5 {
		font-size: 1.9em;
		margin-top: -0.12em;
	}

	.line-6 {
		font-size: 2.6em;
		margin-top: -0.2em;
	}

	.line-7 {
		font-size: 2.3em;
		margin-top: -0.4em;
	}

	.line-8 {
		font-size: 5.1em;
		margin-top: -0.3em;
	}

	.line-9 {
		margin-top: -0.6em;
	}
	.offer {
		/*font-size: 1.6vmin;*/
		position: relative;
	
	/*	margin-right: -32%;
		margin-bottom: 5%;*/
	}
	
	@media (orientation: landscape) and (min-width: 992px) {

		.offer {
			font-size: 0.95rem;
		}
		.char {
		height: 64%;
		top: 7vh;
		left: 5vh;
	}
		.offer img {
			height:600px;
		}

.container-hero{
margin: 0 auto;
}
.line-4 span {
	font-size:0.6em;
	    padding: 0em 0.2em;
}

.offer-content{
	top:1vh;
	    line-height: 0.95;
}

.line-4{
    margin-top: -1.1em;
    margin-bottom: 0.08em;
}
.line-5{
	    margin-top: 0em;
}
.line-6{
margin-top: -0.13em;

}
.line-7{
    margin-top: -0.28em;
}

.line-8 {
margin-top: -0.18em;
}
.line-9{
    margin-top: -0.35em;
}
.cta-button .desktop{
	margin-top:0.4em;
}

	}

@media (orientation: portrait) and (min-width:320px){

	.offer {
			z-index: 1;
		/*	left: 3.8vh;*/
			bottom: 2vh;
			height: 80%;
			position: absolute;
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
		}
		.offer {
			z-index: 1;
		/*	left: 7.8vh;*/
		left:-32%;
			bottom: 2vh;
			height: 80%;
			position: relative;
		}

		.offer-content {
			width: 90%;
		font-size: 0.75em;
		    margin-top: 2px;
		}

		.char {
      height: 110%;
    top: 32vh;
    left: -10vh;

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
		.container-hero {
			display: flex;
		flex-direction: row;
    justify-content: center;
    align-items: flex-end;
			height: 85vh;
			MAX-WIDTH: 1200PX;
			min-width: 300px;
			margin: 8em auto 1em;
			position: relative;
		}
		.offer img {
			display: block;
			height: 520px;
		}
	}
	@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (-webkit-device-pixel-ratio: 2) and(orientation:portrait) {
		.char {
			height: 65%;
			top: -10vh;
			left: -2vh;
		}
		.offer {
			z-index: 1;
			left: 2vh;
			bottom: 34vh;
			height: 80%;
			position: absolute;
		}
	}


	@media (orientation: portrait) and (max-aspect-ratio: 380 / 635) {

		.offer-content {
		width: 90%;

    margin-top: 9px;
    font-size: 0.75em;
	margin-left: -10px;
		}
/*
		.char {
			height: 90%;
			top: 0.5em;
			margin-left: -7%;
		}
		*/
		/*
    .offer img{
      height:750px;
    }
	*/
	}


	@media (orientation: portrait) and (min-aspect-ratio: 500 / 736) and (min-width: 500px) {
		
		.offer-content {

			font-size: 1.3vh;
		}

		.cta-button.desktop {
			display:none;
		}
		.char {
			height: 110%;
			left:-23vh;
			z-index: 2;
		}

	}


	@media (orientation: portrait) and (min-aspect-ratio: 834 / 1087) {
		.offer {
			left: 17vh;
			bottom: -5vh;
			height: 80%;
		}
		.char {
			height: 110%;
			left:-3vh;
			z-index: 2;
		}
		.offer-content {
			width: 100%;
			left: -0.6em;
				font-size: 1.3vh;
			height: 90%;
		}
		.offer img {
			display: block;
			height: 750px;
		}
		
		.cta-button.desktop {
			display: none;
		}
	}


	@media (orientation: portrait) and (max-width: 350px) {
		.offer {
			z-index: 1;
			left: 9vh;
			bottom: 34vh;
		}

		.char {
			margin-left: -8%;
		}
	}

/*
	
	@media screen only (max-aspect-ratio 1920 / 1200) {
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
	*/
	@media (orientation: landscape) and (min-width: 1024px) and (max-width:1280px) {

		.char {
			left: 12vh;
			height: 62%;
		}
		.offer img {
			height: 550px;
		}
		.offer-content {
			font-size: 0.8rem;
		}
		.offer {

			top: 0;

		}

	}
	@media (orientation: landscape) and (min-width: 1288px) and (max-width:1366px) {
		.offer {
			height: 75%;
			top: 1.5vh;
			left: 0;
		}
		.char {
			height: 55%;
			left: 4vh;
		}
		.offer img {
			height: 550px;
		}
		.offer-content {
			font-size: 0.8rem;
		}
	}
	@media (orientation: landscape) and (min-width: 1440px) and (max-width:1919px) {

		.offer {
			height: 75%;
			top: 1vh;
			left: 0;
		}
	
		.offer img {
			height: 650px;
		}
		.offer-content {
			font-size: 0.95rem;

		}
	}

	@media (orientation: landscape) and (min-width: 1920px) and (max-width:2000px) {
		.offer {
		    font-size: 1.05rem;
		}
	
	}
	@media (orientation: landscape) and (min-width: 1920px) and (max-width: 2560px) {
		.offer {
			top: 1vh;
		}
		.char {
        height: 70%;
        top: 6vh;
        left: 3vh;
        }
        .offer img {
			height:700px;
		}
	     .offer {
		    font-size: 1rem;
		}

	}
		@media (orientation: landscape) and (min-width:2001px) and (max-width: 2567px) {
			.offer {
				font-size: 0.9rem;
				margin-left: 0;
			}
			.char {}

		}

		@media (orientation: landscape) and (min-width:2568px) and (max-width: 3840px) {
		 .offer {
		      top: 10vh;
              left: 1vh;
		}
	.char {
        height: 80%;
        top: 12vh;
        left: 3vh;
        }

		.offer img {
          height: 750px;
         }

        .offer-content{
	font-size: 1.1rem;
       }


		}


	</style>
{/block}
