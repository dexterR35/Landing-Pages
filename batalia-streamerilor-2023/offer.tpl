{block name="add_char"}

<div class="wrapper-all" data-aos="fade-up" data-aos-duration="1500">
  <div class="avatars"><img src="" alt="avatars" /></div>
</div>

<div class="wrapper-box">
  <div class="title_streamers" data-aos="fade-right" data-aos-duration="1500">
    <img src="{$asset}/names/title_streamer.png" alt="title" />
  </div>
  <div
    class="name_streamer"
    data-aos="fade-right"
    data-aos-duration="1500"
    data-aos-delay="250"
  >
    <img src="{$streamerNamePic}" alt="pict title streamer" />
  </div>
</div>

{/block} {block name="offer_html"}
<div class="offer-html">
  <div class="line-1" data-text="20,000 RON" id="myElement">20,000 RON</div>
  <div class="line-2" data-text="premii cash">premii cash</div>
  <div class="line-3" data-text="+15,000 runde gratis">
    +15,000 runde gratis
  </div>
</div>
{/block} {block name="offer_css"}

<style>
  @import url("https://fonts.googleapis.com/css2?family=Bangers&display=swap");

  .container-hero {
    display: grid !important;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    grid-template-rows: repeat(6, minmax(0, 1fr));
    align-items: flex-end !important;
  }
  .header .bottom {
    display: none;
  }
  .inner_games {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .inner_games img {
    width: 100%;
    height: 100%;
    object-fit: scale-down;
    max-width: 15vh;
  }
  .inner_games img:nth-child(1) {
    transform: translatey(-4px);
  }
  @media (max-width: 600px) {
    /* adjust the breakpoint as per your requirement */
    .inner_games img {
      max-width: 7vh;
      flex-basis: 48%; /* set to less than 50% to allow two items per row */
    }

    .inner_games img:nth-child(3),
    .inner_games img:nth-child(4),
    .inner_games img:nth-child(5) {
      flex-basis: 30%; /* set to less than 33.33% to allow three items per row */
    }
  }
  .offer.animation {
    -webkit-animation-name: offer-animation-stop !important;
    animation-name: offer-animation-stop !important;
  }

  .wrapper-all {
    grid-row: 2 / span 5;
    grid-column: 2 / 6;
  }

  .wrapper-box {
    grid-row: 2 / span 4;
    grid-column: 1 / span 2;
    height: 100%;
    top: -3em;
    position: relative;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    filter: drop-shadow(4px 6px 10px rgb(37, 37, 37));
  }

  .wrapper-providers {
    display: grid;
    grid-column: 5 / span 2;
    grid-row: 4 / span 3;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(4, minmax(0, 1fr));
    grid-column-gap: 5em;
    grid-row-gap: 0.9em;
    place-items: flex-end;
    filter: drop-shadow(4px 6px 10px rgb(37, 37, 37));
    position: relative;
    left: 9%;
    bottom: 22%;
  }

  .wrapper-providers ._7gaming {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
  }

  .wrapper-providers ._7gaming img {
    transform: rotate(10deg);
    -webkit-transform: rotate(10deg);
  }

  .wrapper-providers ._playtech {
    grid-column: 1 / 2;
    grid-row: 3 / 5;
  }

  .wrapper-providers ._pragmatic {
    grid-column: 2 / 2;
    grid-row: 1 / 3;
    place-self: flex-start;
  }

  .wrapper-providers ._pragmatic img {
    transform: rotate(-10deg);
    -webkit-transform: rotate(-10deg);
  }
  .wrapper-providers div {
    height: 100%;
  }
  .wrapper-providers ._skywind {
    grid-column: 2 / 2;
    grid-row: 3 / 5;
    place-self: flex-start;
  }

  .wrapper-providers ._prov_picture {
    width: 15vh;
    height: 100%;
    object-fit: contain;
  }

  .title_streamers {
    font-size: 3em;
    text-transform: uppercase;
    line-height: 0.9;
    text-align: center;
    color: white;
  }

  .title_streamers img {
    height: 28vh;
    width: 21vw;
    object-fit: contain;
  }

  .name_streamer {
    margin-bottom: 0.8em;
  }

  .name_streamer img {
    position: relative;
    /* left: 1.4em; */
    height: 8vh;
  }

  .offer {
    grid-row: 2 / span 3;
    grid-column: 5 / 7;
    position: relative;
    /* top: -2.5em; */
    color: black !important;
    filter: drop-shadow(4px 6px 10px rgb(37, 37, 37));
    height: fit-content !important;
  }

  .offer img {
    display: block;
    height: 45vh;
    max-height: 45vh;
  }

  .offer-html {
    color: #262626;
    font-family: "Bangers", cursive;
    text-shadow: 0 1px 0px #1e1e1e, 1px 0 0px #262626, 1px 2px 0px #1e1e1e,
      2px 1px 0px #262626, 2px 3px 0px #1e1e1e, 3px 2px 0px #262626,
      3px 4px 0px #1e1e1e, 4px 3px 0px #262626, 4px 5px 0px #1e1e1e,
      5px 4px 0px #262626, 5px 6px 0px #1e1e1e, 6px 5px 0px #262626,
      6px 7px 0px #1e1e1e, 7px 6px 0px #262626, 7px 8px 0px #1e1e1e,
      8px 7px 0px #262626, 11px 10px 0px #1e1e1e, 8px 9.2px 0px #1e1e1e,
      10px 9.2px 0px #1e1e1e, 9px 8px 0px #1e1e1e, -1.5px 0px 0px #1e1e1e,
      2px 2px 0px rgba(206, 89, 55, 0);
    -webkit-text-stroke-color: black;
    line-height: 1;
    width: 105%;
    position: relative;
    left: -11px;
  }
  .offer-content {
    height: 104%;
    margin-left: -11px;
  }
  .line-1,
  .line-2,
  .line-3,
  .line-4 {
    position: relative;
  }
  .line-1::after,
  .line-2::after,
  .line-3::after,
  .line-4::after {
    position: absolute;
    width: 100%;
    height: 100%;
    color: #ffd456;
    top: 5.7px;
    left: 4px;
    font-size: 1em;
    background: -webkit-linear-gradient(#fff1b8, #ffcc38);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: none;
  }

  .line-1 {
    font-size: 4.5em;
    position: relative;
  }

  .line-1::after {
    content: attr(data-text);
    position: absolute;
    top: 4px;
    left: 1px;
    /* letter-spacing: 3.3px; */
    text-shadow: none;
    font-size: 1em;
  }

  .line-2 {
    font-size: 2em;
  }
  .line-2::after {
    content: attr(data-text);
    top: 3px;
    left: 0px;
    font-size: 1em;
  }

  .line-3 {
    font-size: 2.8em;
    margin-left: -0.5em;
  }

  .line-3::after {
    content: attr(data-text);
    top: 2px;
    left: -1px;
    font-size: 1em;
  }
  .cta-button.cta-button.desktop {
    height: 3em !important;
    padding: 0 2em !important;
  }
  .cta-button {
    border: none;
    outline: none;
    filter: unset;
  }
  .cta-button.desktop {
    position: absolute;
    bottom: 10px;
  }

  .avatars {
    color: white;
    font-size: 4em;
    text-transform: uppercase;
    font-weight: bold;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 0.5em;
    width: 100%;
  }

  .avatars img {
    max-height: 70vh;
    height: 100%;
    width: 100%;
    object-fit: contain;
    transform: translateX(-50px);
    filter: drop-shadow(2px 3px 9px #696969);
  }
  body.default .wrapper-all {
    grid-row: 2 / span 5;
    grid-column: 1 / 6;
    display: grid;
    place-content: center;
    width: 100%;
    height: 100%;
  }

  body.default .avatars.defaultAvatar img {
    max-height: 65vh;
    transform: translateX(-50px) translateY(-42px);
    -webkit-transform: translateX(-50px) translateY(-42px);
  }
  @media (orientation: portrait) {
    .container-hero {
      align-items: center !important;
    }
    body.default .avatars.defaultAvatar img {
      transform: none;
      -webkit-transform: none;
    }
    .wrapper-all {
      width: 100%;
      grid-row: 3;
      grid-column: 2 / 6;
      position: relative;
      top: -2em;
    }
    .line-1::after {
      top: 2.7px;
      left: 1px;
      text-shadow: none;
      font-size: 0.97em;
    }
    .title_streamers {
      margin: auto;
    }
    .title_streamers img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      margin: auto;
      max-width: 32vh;
    }
    .name_streamer {
      position: absolute;
      top: -44%;
      left: 2%;
    }

    .wrapper-box {
      grid-row: 4 / span 3;
      grid-column: 1 / span 6;
      width: 100%;
      top: -2.3em;
      z-index: 2;
    }
    .inner_games {
      display: grid;
      grid-template-columns: repeat(6, minmax(0, 1fr));
      place-items: center;
    }
    .inner_games img:nth-child(1) {
      grid-column: 1 / span 2;
      grid-row: 1;
    }
    .inner_games img:nth-child(2) {
      grid-column: 3 / span 2;
    }
    .inner_games img:nth-child(3) {
      grid-column: 3 / span 2;
    }
    .inner_games img:nth-child(4) {
      grid-column: 5 / span 2;
      grid-row: 1;
    }
    .inner_games img:nth-child(5) {
      grid-column: 1 / span 2;
      grid-row: 2;
      place-self: end;
    }
    .inner_games img:nth-child(6) {
      grid-column: 5 / span 2;
      grid-row: 2;

      place-self: start;
    }
  }

  /*////////////////////////////////////////////default Page//////////*/

  @media (max-width: 768px) {
    body.default .avatars.defaultAvatar img {
      max-height: 45vh;
    }

    body.default .wrapper-all {
      grid-row: 3 / span 3;
      grid-column: 1 / 7;
      margin-left: 0;
    }
  }

  @media (orientation: landscape) and (min-width: 991px) and (max-width: 1400px) and (max-height: 767px) {
    .container-hero {
      max-width: 90%;
    }
  }
  @media (orientation: landscape) and (min-width: 991px) and (max-width: 1400px) and (min-height: 768px) {
    .container-hero {
      max-width: 90%;
    }
    .avatars img {
      max-height: 65vh;
    }
  }

  @media (orientation: landscape) and (min-width: 1401px) and (max-height: 767px) {
    .container-hero {
      max-width: 85%;
    }
  }
  @media (orientation: landscape) and (min-width: 1401px) and (max-width: 1699px) and (min-height: 768px) {
    .container-hero {
      /* max-width: 1200px; */
      max-width: 95%;
    }
    .offer img {
      height: 40vh;
      max-height: 40vh;
    }
    .avatars img {
      max-height: 60vh;
    }
    .offer {
      font-size: 1.7vh;
    }
  }
  .cta-button {
    filter: drop-shadow(2px 3px 0px black) !important;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    .cta-button.mobile {
      bottom: 6% !important;
      filter: drop-shadow(2px 3px 0px black) !important;
    }

    .steps {
      padding: 0.2em 0em !important;
    }

    .steps .separator {
      margin-right: 8px !important;
    }

    .steps .step {
      width: unset !important;
    }

    .offer {
      grid-row: 1 / span 3;
      grid-column: 2 / span 4;
      top: -11.5vh;
    }
    .offer-text {
      width: 100%;
    }
    .line-1,
    .line-2,
    .line-3 {
      text-wrap: nowrap;
    }
    .line-1::after {
      top: 3.7px;
      left: 0px;
      font-size: 1em;
    }
    .line-1 {
      font-size: 4.8em;
    }
    .line-2 {
      font-size: 3em;
      margin-top: -0.1em;
    }
    .line-3 {
      font-size: 3em;
      margin-left: -0.5em;
    }
    .line-3::after,
    .line-2::after,
    .line-1::after {
      top: 3px;
      left: 0px;
      font-size: 1em;
    }
    .offer img {
      display: block;
      height: 32vh;
      max-height: 32vh;
    }
    .offer-html {
      line-height: 1.1;
    }
    .offer {
      font-size: 1.25vh;
    }
    .avatars img {
      max-width: 92%;
      height: 100%;
      width: 100%;
      object-fit: contain;
      transform: translateY(18px);
      filter: drop-shadow(-4px -3px 27px #696969);
    }
    .offer-content {
      height: 100%;
      margin-left: 0;
    }
    .wrapper-all {
      place-self: flex-start;
    }
  }
  /* Large Mobile (480px to 767px) */
  @media (min-width: 480px) and (max-width: 767px) {
    /* Your CSS rules for large mobile screens go here */
  }
  @media (max-width: 991px) {
    .steps .separator {
      height: 3.5em;
    }
  }
  /* Tablet (768px to 1023px) */
  @media (min-width: 768px) and (max-width: 1199px) {
    .title_streamers img {
      height: 20vh;
    }

    .name_streamer img {
      position: relative;
      height: 8vh;
    }

    .offer img {
      height: 30vh;
    }

    .wrapper-providers ._prov_picture {
      width: 16vh;
    }

    .avatars img {
      height: 60vh;
    }

    .wrapper-all {
      grid-row: 3 / span 4;
    }

    /* .container-hero {
     max-width: 92% !important;
    } */
    .container-hero {
      max-width: 90% !important;
    }
  }

  /* Small Tablet (1024px to 1199px) */
  @media (min-width: 1024px) and (max-width: 1199px) {
    .container-hero {
      max-width: 90% !important;
    }
  }

  /* Small Desktop (1200px to 1439px) */
  @media (min-width: 1200px) and (max-width: 1439px) {
    .title_streamers img {
      height: 25vh;
    }

    .wrapper-providers {
      left: 4em;
    }

    /* .offer img {
      display: block;
      height: 33vh;
    } */
  }
  a:hover {
    color: unset !important;
  }
  body.default::before {
    background-image: url("{$asset}/bg/bg_default.jpg") !important;
  }
</style>
{/block} {block append name=js} {literal}

<script>
  $(document).ready(function () {
    let queryParams = new URLSearchParams(window.location.search);
    const streamerValue = queryParams.get("streamer");

    const streamers = [
      {
        name: "anna",
        avatar: "{/literal}{$asset}{literal}/avatar/anna.png",
      },
      {
        name: "dudy",
        avatar: "{/literal}{$asset}{literal}/avatar/dudy.png",
      },
      {
        name: "dumisninja",
        avatar: "{/literal}{$asset}{literal}/avatar/dumisninja.png",
      },
      {
        name: "fratiijonson",
        avatar: "{/literal}{$asset}{literal}/avatar/fratiijonson.png",
      },
      {
        name: "narcis",
        avatar: "{/literal}{$asset}{literal}/avatar/narciss.png",
      },
      {
        name: "pacanedy",
        avatar: "{/literal}{$asset}{literal}/avatar/pacanedy.png",
      },
      {
        name: "pacanela",
        avatar: "{/literal}{$asset}{literal}/avatar/pacanela.png",
      },
      {
        name: "princess",
        avatar: "{/literal}{$asset}{literal}/avatar/princess.png",
      },
      {
        name: "quikanu",
        avatar: "{/literal}{$asset}{literal}/avatar/quikanu.png",
      },
      {
        name: "stero",
        avatar: "{/literal}{$asset}{literal}/avatar/stero.png",
      },
    ];

    const backgroundImages = [
      "{/literal}{$asset}{literal}/bg/bg_anna.jpg",
      "{/literal}{$asset}{literal}/bg/bg_dudy.jpg",
      "{/literal}{$asset}{literal}/bg/bg_dumisninja.jpg",
      "{/literal}{$asset}{literal}/bg/bg_fratiijonson.jpg",
      "{/literal}{$asset}{literal}/bg/bg_narcis.jpg",
      "{/literal}{$asset}{literal}/bg/bg_pacanedy.jpg",
      "{/literal}{$asset}{literal}/bg/bg_pacanela.jpg",
      "{/literal}{$asset}{literal}/bg/bg_princess.jpg",
      "{/literal}{$asset}{literal}/bg/bg_quikanu.jpg",
      "{/literal}{$asset}{literal}/bg/bg_stero.jpg",
      "{/literal}{$asset}{literal}/bg/bg_generic.jpg",
    ];

    const inner_games = [
      "{/literal}{$asset}{literal}/providers/pragmatic.png",
      "{/literal}{$asset}{literal}/providers/skywind.png",
      "{/literal}{$asset}{literal}/providers/7777gaming.png",
      "{/literal}{$asset}{literal}/providers/playtech.png",
      "{/literal}{$asset}{literal}/providers/playngo.png",
      "{/literal}{$asset}{literal}/providers/playson.png",
    ];

    console.log(`{/literal}{$query}{literal}`, "query");

    const selectedStreamer = streamers.find(
      (streamer) => streamer.name === streamerValue
    );

    function changeContentPage(selectedStreamer) {
      if (selectedStreamer) {
        $("body").addClass(selectedStreamer.name);
        $(".avatars img").attr("src", selectedStreamer.avatar);
        $(".avatars img").addClass(selectedStreamer.name);
      } else {
        $(".avatars img[alt='avatars']").remove();
        $("body").removeClass();
        $("body").addClass("default");
        $(".title_streamers").css("display", "none");
        $(".avatars").addClass("defaultAvatar");
        $(".wrapper-box").css("display", "none");
        const avatar = $("<img>")
          .attr("src", "{/literal}{$asset}{literal}/title_generic1.png")
          .attr("alt", "default");
        $(".avatars").append(avatar);
        // selectedStreamer.name = "generic";
        // streamers.forEach((streamer) => {
        //   const avatar = $("<img>")
        //     .attr("src", streamer.avatar)
        //     .attr("alt", streamer.name);
        //   $(".avatars").append(avatar);
        // });
      }
    }
    changeContentPage(selectedStreamer);

    function appendProv() {
      const innerProviders = document.querySelector(".inner_games");
      console.log(innerProviders, "innerProviders");
      inner_games.forEach((imageUrl) => {
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        innerProviders.appendChild(imgElement);
      });
    }

    appendProv();
  });
</script>
<script>
  AOS.init();
</script>
{/literal} {/block}
