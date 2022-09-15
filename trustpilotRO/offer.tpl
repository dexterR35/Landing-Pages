
{block name="add_char"}
 <img class="char animation" src="{$asset}/char.png" alt="chars" />
  <img class="char onmobile animation" src="{$asset}/char-mobile-new4.png" alt="charss" />
{/block}


{block name="offer_html"}
  <div class="offer-html">
    <div class="line-5">cea mai bună</div>
    <div class="line-6">experiență</div>
    <div class="line-9">dintr-un cazino online</div>
  </div>
{/block}

{block name="offer_css"}

  <style>
  .steps{
    z-index:12 !important;
  }

 
.char{
      height: 100%;
    }
.container-hero{
     height: 85vh;
    MAX-WIDTH: 1200PX;
    min-width: 300px;
    margin: 2em auto 1em auto;
    display: grid;
    place-content: center;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    position: relative;
}
    .char.onmobile{
      display: none;
    }
/*
    .offer{
      z-index: 100;
    }
*/
body::before{
 z-index:unset !important;

}
    header{
      z-index: 200;
    }

    .offer-html {
      font-size: 1.6em;
  text-transform: uppercase;
      text-align: center;
      font-weight: bold;
    }

   .line-5, 
   .line-6
   {
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
    color:#fff;
  }
     
 @media (orientation: portrait) {
 .cta-button.mobile{
    margin-top: 10px;
    z-index: 1;
    display: inline-flex;
    justify-content: center;
    color: #fff;
    text-decoration: none;
padding: 1em 2em;
  }
    .offer{
    z-index: 1;
 left:4vh;
    bottom: 29vh;
    height: 80%;
    position:absolute;
    }

    .offer-content{
      width:90%;
     font-size: 1.7vh;
    }

    .offer-html{
      font-size: 1.4em;
    }

      .char{
    height: 60%;
    top: -8vh;
    left: -2vh;

    }

    .line-4{
      margin-left: 3em;
    }

    .char {
      display: none;
    }

    .char.onmobile{
      display: block;
    }
    .container-hero{
      display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    height: 85vh;
    MAX-WIDTH: 1200PX;
    min-width: 300px;
    margin: 8em auto 1em auto;
    position: relative;
    }
    .offer img {
    display: block;
    height: 520px;
}
  }
@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation:portrait) { 
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
            

  @media (orientation: portrait) and (max-aspect-ratio: 380 / 635){


.offer-content{
  width:90%;
}
  }

  @media (orientation: portrait) and (min-aspect-ratio: 500 / 736) and (min-width: 500px) {
      .offer{
         right: -2vh;
    bottom: 18vh;
    height: 85%;
      }

      .offer-html{
        font-size: 1.4em;
        
      }

      .offer-content {
 
        font-size:2.2vh;
      }

      .char{
    height: 150%;
    top: -5vh;
    margin-left: -0%;
}
      
      
  }

  @media (orientation: portrait) and (min-aspect-ratio: 834 / 1087) {
 .offer {
    left: 22vh;
    bottom: 29vh;
    height: 80%;
}
.char {
    height: 70%;
    top:-9vh;
    z-index: 2;
}
  .offer-content {
    left: -0.6em;
    font-size: 2vh;
    width: 100%;
    font-size: 2vh;
    height: 82%;
}
.offer img {
    display: block;
     height: 750px; 
}
.offer-content {
    width:100%; 
    font-size: 2vh;
}
.cta-button.desktop{
  display:none;
}
  }

  @media (orientation: portrait) and (max-width: 350px){
    .offer{
    z-index: 1;
    left: 9vh;
    bottom: 34vh;
    }

    .char{
      margin-left: -8%;
    }
  }
  

  @media (orientation: landscape) and (min-width: 1920px) and (max-width: 2560px)  {
    .offer {
    top:1vh;
   
} 
.char{
  height:80%;
}

}
 @media screen only (max-aspect-ratio 1920 / 1200)   {
    .offer {
    margin-left: 100px;
    top:1vh;
} 
.char{
    margin-left: -2.5%;
    height: 90%;
    z-index: 1;
    }

}
 @media (orientation: landscape) and (min-width: 1024px) and (max-width:1280px){

   .char {
left:12vh;
  height:57%;
}
.offer img {
  height:550px;
}
.offer-content{
  font-size:1.1rem;
}
  .offer {

  top:0vh;
 
} 
 
 }
    @media (orientation: landscape) and (min-width: 1288px) and (max-width:1366px) {
  .offer {
  height:75%;
  top:1vh;
  left:0vh;
} 
.char{
height:55%;
left:18vh;
}
.offer img {
  height:550px;
}
.offer-content{
  font-size:1.1rem;
}
  }
      @media (orientation: landscape) and (min-width: 1440px) and (max-width:1919px) {

  .offer {
  height:75%;
  top:1vh;
  left:0vh;
} 
.char{
 
  height:62%;
}
.offer-content{
  font-size:1.4rem;

}
  }

  @media (orientation: landscape) and (min-width: 1920px) and (max-width:2000px) {
      .offer {
 font-size:1.5rem;
} 
.char{
 
  height:80%;
}
  @media (orientation: landscape) and (min-width:2001px) and (max-width: 2567px) {
      .offer {
 font-size:1.6vh;
  margin-left:0vh;
} 
.char{
 
}

}

@media (orientation: landscape) and (min-width:2568px) and (max-width: 3840px) {
        .offer {
 font-size:2vh;
} 
}
  


  </style>
{/block}