// Define a function to create and append lazy-loaded images


const scrollContainer = document.querySelector("#fullpage");



$(document).ready(function () {
  const streamers = [

    {
      name: "ana",
      points: "310",
      position: "3",
      vote: "2",
      challenge: false,
      picture: {
        _bgImg: false,
        _avatarImg: "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/avatar/pacanela.png",
      },
      social: {
        facebook: "ana facebook",
        insta: "ana insta",
        streaming: "link",
        website: "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=ana",
      },
    },
    {
      name: "stero",
      points: "120",
      vote: "12",
      position: "13",
      challenge: true,
      picture: {
        _bgImg: "",
        _avatarImg: "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/avatar/stero.png",
      },
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website: "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=stero",
      },
    },
    {
      name: "alin",
      points: "770",
      vote: "12",
      position: "131",
      challenge: false,
      picture: {
        _bgImg: "",
        _avatarImg: "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/avatar/alin.png",
      },
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website: "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=alin",
      },
    },
    {
      name: "maria",
      points: "970",
      position: "113",
      challenge: true,
      picture: {
        _bgImg: "",
        _avatarImg: "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/avatar/maria.png",
      },
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website: "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=maria",
      },
    },
    {
      name: "george",
      points: "1214",
      challenge: false,
      picture: {
        _bgImg: "",
        _avatarImg: "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/avatar/george.png",
      },
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website: "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=george",
      },
    },
    {
      name: "daniel",
      points: "6453654",
      challenge: false,
      picture: {
        _bgImg: "",
        _avatarImg: "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/avatar/daniel.png",
      },
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website: "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=daniel",
      },
    },
    {
      name: "stero",
      points: "120",
      challenge: true,
      picture: {
        _bgImg: "",
        _avatarImg: "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/avatar/stero2.png",
      },
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website: "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=stero",
      },

    },
    {
      name: "daniel",
      points: "6453654",
      challenge: false,
      picture: {
        _bgImg: "",
        _avatarImg: "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/avatar/stero2.png",
      },
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=daniel",
        website: "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=daniel",
      },
    },
    {
      name: "daniel",
      points: "6453654",
      challenge: false,
      picture: {
        _bgImg: "",
        _avatarImg: "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/avatar/stero2.png",
      },
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website: "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=daniel",
      },
    },
    {
      name: "stero",
      points: "120",
      challenge: true,
      picture: {
        _bgImg: "",
        _avatarImg: "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/avatar/stero2.png",
      },
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website: "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=stero",
      },

    },
    {
      name: "daniel",
      points: "6453654",
      challenge: false,
      picture: {
        _bgImg: "",
        _avatarImg: "https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/avatar/stero2.png",
      },
      social: {
        facebook: "{$asset}/social/facebook.png",
        insta: "stero insta",
        streaming: "link",
        website: "https://go-testing.netbet.ro/casino/?lp=bataliaStreamarilorv2&streamer=daniel",
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

  // Function to generate a card
  function generateCard(streamerData) {
    console.log(streamerData, "streamerData");
    const isVoted = false; // Setăm inițial cardul ca "non-voted"
    const cardHtml = `
        <div class="col-lg-4 card-wrapp">
            <div class="card card-custom ${isVoted ? 'voted' : 'non-voted'}" >
                <div class="card-body text-center" >
                    <a class="card-text text top-left" href="${streamerData.social.website
      }" target="_blank">Voteaza-ma</a>
                    <p class="speech"> ${streamerData.points + " " + "Voturi"
      }</p>
                    <div class="card-image" style="background-image:url(${streamerData.picture._avatarImg
      })"></div>
                   
                    <h6 class="card-title text bottom-right">${streamerData.name
      }</h6>
                    
                </div>
            </div>
        </div>
    `;
    // Adaugăm un eveniment de click pentru card-ul generat folosind jQuery
    const cardElement = $(cardHtml);
    const cardCustomElement = cardElement.find('.card-custom');
    cardCustomElement.removeClass('non-voted');
    cardCustomElement.on('click', function () {
     
      // Verificăm dacă cardul pe care l-am selectat are clasa "voted"
      if (!cardCustomElement.hasClass('voted')) {
        
          // Eliminăm clasa "non-voted" de pe toate celelalte carduri care nu au clasa "voted"
          $('.card-custom:not(.voted)').removeClass('non-voted');
          
          // Adăugăm clasa "voted" la cardul pe care l-am selectat
          cardCustomElement.addClass('voted');
          // Setăm atributul personalizat pentru a marca cardul ca "votat"
          cardCustomElement.attr('data-voted', 'true');
          if (cardCustomElement.hasClass('voted')) { 
            $('.card-custom:not(.voted)').addClass('non-voted');
          }
      }
  });
    return cardElement;
  }

  // Function to generate table streamres
  function generateDataTable(streamerData) {
    const tableAHtml = `<tr>
      <td>
          <div class="d-flex align-items-center">
                  <div class="avatar-table avatar-blue mr-3">${(streamerData.name).slice(0, 2).toUpperCase()}</div>
                  <div class="">
                      <p class="font-weight-bold mb-0">${streamerData.name}</p>
                      <p class="text-muted mb-0">Voturi: ${streamerData.vote}</p>
                  </div>
            </div>
      </td>
      <td>${streamerData.position}</td>
      <td>${streamerData.points}</td>
      <td>
          <div class="badge ${streamerData.challenge ? 'badge-success-alt' : 'text-bg-danger'}">
          ${streamerData.challenge ? "challenge" : "no challenge"}
          </div>
      </td>
     
  </tr>`
    return tableAHtml;
  }

  // Function populate streamers table and modal streamers cards
  function populateTable(objData) {

    let cardData = $("#dynamicCardBody");
    cardData.empty(); // Clear any existing content

    let tableData = $(".table-body");
    tableData.empty(); // Clear any existing rows

    objData.forEach((streamerData) => {
      // console.log(streamerData, "card");
      //card for modal
      cardData.append(generateCard(streamerData));
      //table for section 2
      tableData.append(generateDataTable(streamerData));
    });
  }

  //Function GamesName + manipulate the link
  function generateGames(objData) {
    const gameImagesContainer = $("#gameImages");
    objData.forEach((gameName) => {
      const img = $("<img>")
        .attr("src", `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E`) // Placeholder image
        .attr("data-src", `https://img.netbet.ro/cdn-cgi/image/q=90,w=214,f=webp//gms/games/casino_new/preview/${gameName}.jpg`)
        .attr("alt", gameName)
        .attr("loading", "lazy") // Add loading="lazy" attribute
        .attr("srcset", `https://img.netbet.ro/cdn-cgi/image/q=90,w=214,f=webp//gms/games/casino_new/preview/${gameName}.jpg 214w`);
      const link = $("<a>").addClass("scroll-item-game").attr("href", "#").append(img);
      gameImagesContainer.append(link);
    });
  }

  // Function append bg card ,pos, name for swipper
  function generetaDataSlider() {
    $(".slide-streamer").each(function (index) {
      const streamer_pos = Math.floor(Math.random() * 10);

      // let boxSlideTop = $(
      //   `<div class="top_swiper_box" data-text="terminator" data-swiper-parallax="10"><span>term</span>inator</div>`
      // );
      let boxSlideTop = $(
        `<div class="top_swiper_box" data-text="terminator" data-swiper-parallax="10"><img src="https://go-testing.netbet.ro/lp-asset/netbetro/casino/bataliaStreamarilorv2/names/t_ana.png" class="Testpicture"></div>`
      );
      let boxSlideBottom = $(
        `<div class="bottom_swiper_box" data-swiper-parallax="-10"><span># </span><span>${streamer_pos}</span></div>`
      );

      $(this).append(boxSlideBottom);
      $(this).prepend(boxSlideTop);

      const bgImage = backgroundImages[index % backgroundImages.length];

      $(this).css("background-image", bgImage);
      $(this).css({
        "background-size": "cover",
        "background-position": "center",
        "background-repeat": "no-repeat",
      });
    });
  }

  $("#toggleButton").click(function () {
    $("#termsAndConditions").slideToggle();
  });

  populateTable(streamers);
  generateGames(gamesArray);

  generetaDataSlider();

  // function lazyLoadBackgroundImages(data) {
  //   data.forEach((bgImage, index) => {
  //     const container = document.getElementById(`bg-container-${index}`); // Replace with the ID of your background image container

  //     const div = document.createElement('div');
  //     div.style.backgroundImage = bgImage;
  //     div.style.width = '100%';
  //     div.style.height = '200px'; // Set the height as needed
  //     div.loading = 'lazy'; // Set the loading attribute to lazy

  //     container.appendChild(div); // Add the background image to your container
  //   });
  // }
  // lazyLoadBackgroundImages(backgroundImages);


  const commonOptions = {
    aaSorting: [],
    responsive: true,
    pageLength: 5,
    info: true,
    language: {
      search: "",
      paginate: {
        'previous': '<span class="prev-icon"></span>',
        'next': '<span class="next-icon"></span>'
      }
    },
    lengthChange: false,
    bFilter: false,
  };

  // Options for the "streamersTable" with all columns
  const streamersTableOptions = {
    ...commonOptions,
    columnDefs: [{
        responsivePriority: 1,
        targets: 0,
      },
      {
        responsivePriority: 2,
        targets: -1,
      },
    ],
  };

  // Options for the "usersTable" without the "Challenge" column
  const usersTableOptions = {
    ...commonOptions,
    columnDefs: [{
        responsivePriority: 1,
        targets: 0,
      },
      {
        responsivePriority: 2,
        targets: -1, // This targets the last column (which is "Challenge")
        visible: false, // This hides the column
      },
    ],
  };

  $("#streamersTable").DataTable(streamersTableOptions);
  $("#usersTable").DataTable(usersTableOptions);


  $("#streamersTable_wrapper").prepend(`<h4 class="text-center p-2 position-relative">Streameri</h4>`);
  $("#usersTable_wrapper").prepend(`<h4 class="text-center p-2 position-relative">Utilizatori</h4>`);

  $("#usersTable_filter > label").addClass("col-12 d-flex justify-content-end");
  $(".dataTables_filter input")
    .attr("placeholder", "Search here...")
    .css({
      width: "200px",
      display: "inline-block",
      "font-size": "0.7em",
      padding: "0.3em 0.7em",
      outline: "none"
    });

  $('[data-toggle="tooltip"]').tooltip();


  const scroll = new LocomotiveScroll({
    el: scrollContainer,
    smoothMobile: true,
    getSpeed: true,
    getDirection: true,
    firefoxMultiplier: "",
    scrollFromAnywhere: true,
    reloadOnContextChange: false,
    resetNativeScroll: false,
    smooth: true,
    autoResize: true,
    // lerp: 0.05
  });

  scroll.on("scroll", (e) => {

    // scrollContainer.style.backgroundColor =
    // 	"hsl(" + 100 + e.scroll.y / 5 + ",40%,30%)";
    // const table = document.getElementById("gameImages"); // Selectați tabelul după ID
    // if (table) {
    //   const skewValue = e.scroll.y / 9; // Ajustați acest număr pentru a controla intensitatea efectului de skew
    //   table.style.transform = `skew(${skewValue / 30}deg)`; // Aplicați efectul de skew pe axa orizontală
    // }
  });

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
  touchRatio: 0.3,
  cache: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 5, // (Rotate of the prev and next slides);
    depth: 30, // (Depth of the prev and next slides);
    stretch: 5, // (Space between the slides);
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



$("#setCookieButton").click(function () {
  const name = $("#cookieInput").val();
  document.cookie = `name=${name}`;
  updateButton();
});

function updateButton() {
  const cookieValue = getCookie("name");
  const inputName = $("#cookieInput").val();
  console.log(cookieValue);
  const actionButton = $("#actionButton");
  if ((cookieValue === inputName) || cookieValue) {
    actionButton.attr("href", "test1.html");
    actionButton.attr("data-bs-toggle", "modal");
    actionButton.attr("data-bs-target", "#myModal");
    actionButton.text("Join Battles");
  } else {
    actionButton.attr("href", "https://casino.netbet.ro/inregistrare");
    actionButton.attr("target", "blank");
    actionButton.text("Show Me Offer");
  }
}

function getCookie(nameCookie) {
  let value = "; " + document.cookie;
  let parts = value.split("; " + nameCookie + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  } else {
    return null;
  }
}

// La încărcarea paginii, actualizați textul butonului în funcție de cookie-ul existent
updateButton();


// Obține toate elementele cu clasa "card-custom"
const cardElements = document.querySelectorAll('.card-custom');
console.log(cardElements, "cards")

// Adaugă un ascultător de eveniment pentru fiecare card
cardElements.forEach(card => {
  card.addEventListener('click', () => {
    // Adaugă clasa "voted" la cardul apăsat
    card.classList.add('voted');
  });
});
// document.addEventListener('DOMContentLoaded', function () {


// lazyLoadImagesFromObject(streamers);