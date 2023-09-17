
$(document).ready(function () {
  const streamers = [
    {
      name: "ana",
      points: "310",
      position: "#3",
      challenge: false,
      social: {
        facebook: "ana facebook",
        insta: "ana insta",
        streaming: "link",
        website:
          "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=ana",
      },
      bgPicture: "link",
      avatar:
        "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/avatar/pacanela.png",
    },
    {
      name: "stero",
      points: "120",
      challenge: true,
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website:
          "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=stero",
      },
      avatar:
        "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/avatar/stero2.png",
    },
    {
      name: "alin",
      points: "770",
      challenge: false,
      avatar:
        "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/alin.png",
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website:
          "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=alin",
      },
    },
    {
      name: "maria",
      points: "970",
      challenge: true,
      avatar:
        "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/maria.png",
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website:
          "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=maria",
      },
    },
    {
      name: "george",
      points: "1214",
      challenge: false,
      avatar:
        "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/avatar/george.png",
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website:
          "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=george",
      },
    },
    {
      name: "daniel",
      points: "6453654",
      challenge: false,
      avatar:
        "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/daniel.png",
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website:
          "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=daniel",
      },
    },
    {
      name: "stero",
      points: "120",
      challenge: true,
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website:
          "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=stero",
      },
      avatar:
        "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/avatar/stero2.png",
    },
    {
      name: "daniel",
      points: "6453654",
      challenge: false,
      avatar:
        "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/daniel.png",
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website:
          "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=daniel",
      },
    },
    {
      name: "daniel",
      points: "6453654",
      challenge: false,
      avatar:
        "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/daniel.png",
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website:
          "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=daniel",
      },
    },
    {
      name: "stero",
      points: "120",
      challenge: true,
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website:
          "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=stero",
      },
      avatar:
        "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/avatar/stero2.png",
    },
    {
      name: "daniel",
      points: "6453654",
      challenge: false,
      avatar:
        "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/daniel.png",
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website:
          "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=daniel",
      },
    },
  ];

  /// games name for section games
  const gamesArray = [
    "4553-book-of-dead__6",
    "9903-rich-wilde-and-the-tome-of-madness__4",
    "7152-legacy-of-egypt__3",
    "21726-royal-coins-2-hold-and-win__2",
    "9903-rich-wilde-and-the-tome-of-madness__4",
    "7152-legacy-of-egypt__3",
    "21726-royal-coins-2-hold-and-win__2",
    "14166-legend-of-cleopatra-megaways__2",
    "21318-luxor-gold-hold-and-win__2",
    "11953-coin-coin-coin-ro__2",
    "18166-age-of-the-gods-wonder-warriors__2",
    "11955-streak-of-luck__2",
    "9736-sweet-bonanza__4",
    "15213-gates-of-olympus__4",
    "20949-big-bass-splash__4",
    "14220-aztec-respin-remember-skywind-prov__2",
    "25884-toucan-wild__2",
    "25258-sugar-bonanza-deluxe__2",
  ];

  ////  backgroundImages for cards in modal
  const backgroundImages = [
    'url("./_bg/bg1.jpg")',
    'url("./_bg/bg2.jpg")',
    'url("./_bg/bg3.jpg")',
  ];

  /*    <p class="card-text">${cardData.challenge ? "challenge" : "no challenge"}</p>
<div class="card-button text-end"><button class="btn-custom text top-right">votează-mă</div>
+ " -> " + "puncte: " + cardData.points

*/
  // Function to generate a card
  function generateCard(cardData) {
    const cardHtml = `
        <div class="col-lg-4 card-wrapp">
            <div class="card card-custom"; min-height:200px !important">
                <div class="card-body text-center" >
                    <a class="card-text text top-left" href="${cardData.social.website
      }" target="_blank">Voteaza-ma</a>
                    <p class="speech"> ${cardData.points + " " + "Voturi"
      }</p>
                    <div class="card-image" style="background-image:url(${cardData.avatar
      })"></div>
                    <p class="card-text vote addVote">VOTAT</p>
                    <h6 class="card-title text bottom-right">${cardData.name
      }</h6>
                    
                </div>
            </div>
        </div>
    `;
    return cardHtml;
  }

  // Function to generate table streamres
  function generateDataTable(index, tableData) {
    const tableHtml = ` <tr>
        <th scope="row">${index + 1}</th>
        <td>${tableData.name}</td>
        <td>${tableData.points}</td>
      </tr>`;
    return tableHtml;
  }

  // Function populate streamers table and modal streamers cards
  function populateTable() {
    let dynamicCardBody = $("#dynamicCardBody");
    dynamicCardBody.empty(); // Clear any existing content

    let tableBody = $(".table-body");
    tableBody.empty(); // Clear any existing rows

    streamers.forEach((cardData, index) => {
      dynamicCardBody.append(generateCard(cardData));
      tableBody.append(generateDataTable(index, cardData));
    });
  }

  //Function GamesName + manipulate the link
  function generateGames() {
    const gameImagesContainer = $("#gameImages");
    for (let i = 0; i < gamesArray.length; i++) {
      const gameName = gamesArray[i];
      const img = $("<img>")
        .attr(
          "src",
          `https://img.netbet.ro/cdn-cgi/image/q=90,w=214,f=webp//gms/games/casino_new/preview/${gameName}.jpg`
        )
        .attr("alt", gameName);
      const link = $("<a>").attr("href", "#").append(img);
      gameImagesContainer.append(link);
    }
  }

  // Function append bg card ,pos, name for swipper
  function appendStuff() {
    $(".slide-streamer").each(function (index) {
      const streamer_pos = Math.floor(Math.random() * 10);
      let boxSlideTop = $(
        `<div class="top_swiper_box" data-text="Pacanela" data-swiper-parallax="10"><span>păcă</span>nela</div>`
      );
      let boxSlideBottom = $(
        `<div class="bottom_swiper_box" data-swiper-parallax="-10"><span># </span><span>${streamer_pos}</span></div>`
      );
      $(this).append(boxSlideBottom);
      $(this).prepend(boxSlideTop);
      const bgImage = backgroundImages[index % backgroundImages.length];
      // random     const randomIndex = Math.floor(Math.random() * backgroundImages.length);    const bgImage = backgroundImages[randomIndex];
      $(this).css("background-image", bgImage);
      $(this).css({
        "background-size": "cover",
        "background-position": "center",
        "background-repeat": "no-repeat",
      });
    });
  }

  $("#toggleButton").click(function() {
    $("#termsAndConditions").slideToggle(); 
  });

  populateTable(streamers);
  generateGames(gamesArray);
  appendStuff();
});


const swiperStr = new Swiper(".stream-slider", {
  effect: "coverflow",
  loop: true,
  autoplay: {
    delay: 0,
  },
  speed: 2 * 1000,
  slidesPerView: "auto",
  parallax: true,
  licenseKey: "STREA",
  cache: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 2, // (Rotate of the prev and next slides);
    depth: 70, // (Depth of the prev and next slides);
    stretch: 10, // (Space between the slides);
    modifier: 2, // (Multiply the values of rotate, depth, and stretch);
    slideShadows: true, // (Presence of shadow on the surfaces of the prev and next slides);
  },
  // breakpoints: {
  //   320: { slidesPerView: 2 },
  //   640: { slidesPerView: 4 },
  //   1024: { slidesPerView: 6 },
  //   1921: { slidesPerView: 3 },
  // },
});
// swiperStr.autoplay.stop();
swiperStr.el.addEventListener("mouseover", function () {
  swiperStr.autoplay.stop();
});

swiperStr.el.addEventListener("mouseleave", function () {
  swiperStr.autoplay.start();
});

// const parallax4 = document.getElementById("parallax4");
// const bgPalalax = document.getElementById("background_p");
// const contentMiddle = document.getElementById("contentImg_p");
// const spikePalalax = document.getElementById("spike_p");
// const gameImages = document.querySelector(".s2_providers");
// window.addEventListener("scroll", function () {
//   let offset = window.pageYOffset;
//   bgPalalax.style.backgroundPositionY = -offset * 0.1 + "px";
//   spikePalalax.style.transform = "translateY(" + (offset * 0.3 + "px)");
//   contentMiddle.style.transform = "translateY(" + (-offset * 0.5 + "px)");

// });

