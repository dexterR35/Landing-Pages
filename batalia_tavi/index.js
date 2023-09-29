const min = 1;
const max = 3000;
const randomPointsTest = Math.floor(Math.random() * (max - min + 1)) + min;
const randomVoteTest = Math.floor(Math.random() * +(max - min + 1)) + min;


console.log(randomVoteTest);


const scrollContainer = document.querySelector("#fullpage");

if ($(window).width() < 1024) {
  $(".btn._mobile").addClass("w-100");
  $(".btn._desktop").css({
    display: "none"
  });
  $(".btn._mobile").css({
    display: "block"
  });

  $(".table-responsive").css({
    "overflow-y": "unset",
    height: "fit-content",
  });
} else {
  $(".btn._mobile").removeClass("w-100");
  $(".btn._desktop").css({
    display: "block"
  });
  $(".btn._mobile").css({
    display: "none"
  });
}

$(document).ready(function () {
  const dataObject = {
    streamers: [{
        name: "anna",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "1",
        challenge: true,
        bgImg: "./_bg/bg_anna.jpg",
        avatarImg: `./_avatar/anna.png`,
      },
      {
        name: "dudy",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "2",
        challenge: false,
        bgImg: "./_bg/bg_dudy.jpg",
        avatarImg: "./_avatar/dudy.png",
      },
      {
        name: "dumisninja",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "3",
        challenge: true,
        bgImg: "./_bg/bg_dumisninja.jpg",
        avatarImg: "./_avatar/dumisninja.png",
      },
      {
        name: "fratiijonson",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "4",
        challenge: false,
        bgImg: "./_bg/bg_fratiijonson.jpg",
        avatarImg: "./_avatar/fratiijonson.png",
      },
      {
        name: "narcis",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "5",
        challenge: true,
        bgImg: "./_bg/bg_narcis.jpg",
        avatarImg: "./_avatar/narcis.png",
      },
      {
        name: "pacanedy",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "6",
        challenge: true,
        bgImg: "./_bg/bg_pacanedy.jpg",
        avatarImg: "./_avatar/pacanedy.png",
      },
      {
        name: "pacanela",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "7",
        challenge: true,
        bgImg: "./_bg/bg_pacanela.jpg",
        avatarImg: "./_avatar/pacanela.png",
      },
      {
        name: "princess",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "8",
        challenge: false,
        bgImg: "./_bg/bg_princess.jpg",
        avatarImg: "./_avatar/princess.png",
      },
      {
        name: "quikanu",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "9",
        challenge: false,
        bgImg: "./_bg/bg_quikanu.jpg",
        avatarImg: "./_avatar/quikanu.png",
      },
      {
        name: "stero",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "10",
        challenge: true,
        bgImg: "./_bg/bg_stero.jpg",
        avatarImg: "./_avatar/stero.png",
      },
    ],
    gamesArray: [
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
      "14220-aztec-respin-remember-skywind-prov__2",
      "25884-toucan-wild__2",
      "25258-sugar-bonanza-deluxe__2",
    ],
    backgroundImages: [
      'url("./_bg/bg_anna.jpg")',
      'url("./_bg/bg_dudy.jpg")',
      'url("./_bg/bg_dumisninja.jpg")',
      'url("./_bg/bg_fratiijonson.jpg")',
      'url("./_bg/bg_narcis.jpg")',
      'url("./_bg/bg_pacanedy.jpg")',
      'url("./_bg/bg_pacanela.jpg")',
      'url("./_bg/bg_pacanela.jpg")',
      'url("./_bg/bg_princess.jpg")',
      'url("./_bg/bg_quikanu.jpg")',
      'url("./_bg/bg_stero.jpg")',
    ],
  }

  const gamesArray = [...dataObject.gamesArray];

  const backgroundImages = [...dataObject.backgroundImages];
  console.log(backgroundImages);
  // console.log(gamesArray, "games array");
  // console.log(streamers, "streamers array");

  //map streamers
  const streamerCards = dataObject.streamers.map((streamerData) => {
    return {
      name: streamerData.name,
      points: streamerData.points,
      bgImg: streamerData.bgImg,
      avatarImg: streamerData.avatarImg,
      vote: streamerData.vote,
      position: streamerData.position,
      challenge: streamerData.challenge,
    };
  });

  function generateCard(streamerData) {
    // const isVoted = getCookie('namevoted') === streamerCards.name;
    //${isVoted ? 'voted' : 'non-voted'}
    const cardHtml = `
          <div class="col-lg-4 card-wrapp">
              <div class="card card-custom " style="background:url(${streamerData.bgImg}")>
                  <div class="card-body text-center">
                      <p class="card-text text top-left"">Voteaza-ma</p>
                      <p class="speech">${streamerData.points} Voturi</p>
                      <div class="card-image" style="background-image:url(${streamerData.avatarImg})"></div>
                      <h6 class="card-title text bottom-right">${streamerData.name}</h6>
                  </div>
              </div>
          </div>
      `;
    const $cardElement = $(cardHtml);

    $cardElement.click(function (e) {
      $("#messageContainer").empty();
      $("#messageContainer").show();
      showMessage("doresti sa votezi cu", streamerData);
      voteForStreamer($cardElement);
      e.preventDefault();
    });
    // const cardCustomElement = cardElement.find('.card-custom');
    // // Remove the 'non-voted' class from cardCustomElement
    // cardCustomElement.removeClass('non-voted');
    // // Add a click event handler to cardCustomElement
    // cardCustomElement.on('click', function () {
    //   if (!cardCustomElement.hasClass('voted')) {
    //     $('.card-custom:not(.voted)').removeClass('non-voted');
    //     cardCustomElement.addClass('voted');
    //     cardCustomElement.attr('data-voted', 'true');
    //     if (cardCustomElement.hasClass('voted')) {
    //       $('.card-custom:not(.voted)').addClass('non-voted');
    //     }
    //   }
    // });
    return $cardElement;
  }

  function voteForStreamer($cardElement) {
    // if (voted === true) {
    //   alert("Nu puteți vota pentru acest utilizator.");
    //   return;
    // }
    $("#yes-button").on("click", () => {
      $("#messageContainer").hide();
      $cardElement.addClass("voted");
      $(".card-wrapp").not($cardElement).css("background", "yellow");
      $($cardElement).css("background", "red");
      const $voteElement = $cardElement.find(".streamerVote");
      $voteElement.text("hello");
    });
    $("#no-button").on("click", () => {
      $("#messageContainer").hide();
    });
  }

  function generateStreamerTable(streamerData) {
    const tableAHtml = `<tr class="parent-table">
    <td class="parent-position ps">#${streamerData.position}</td>
      <td>
          <div class="d-flex align-items-center parent-avatar">
                  <div class="avatar-table avatar-blue">
                  <img src="${(streamerData.avatarImg)}" alt="pict_table" class="pict_table">
                  </div>
                  <div class="parent-name">
                      <p class="mb-0 ps">${streamerData.name}</p>
                      <p class="text-muted mb-0">voturi: ${streamerData.vote}</p>
                  </div>
            </div>
      </td>
      <td class="parent-points ps">${streamerData.points}</td>
      <td class="parent-vote ps">${streamerData.vote}</td>
      <td class="parent-badge">
      <div class="ps badge ${streamerData.challenge ? 'badge-success' : 'badge-danger'}">
  ${streamerData.challenge ? '&#10004;' : '&#10006;'}
</div>
      </td>
     
  </tr>`
    return tableAHtml;
  }


  // Function populate streamers table and modal streamers cards

  function populateTable(streamerData) {
    let cardData = $("#dynamicCardBody");
    cardData.empty();
    let tableData = $(".table-body");
    tableData.empty();
    streamerData.forEach((streamerData, index) => {
      //card for modal
      cardData.append(generateCard(streamerData));
      //table for section 2
      tableData.append(generateStreamerTable(streamerData));
    });
  }

  // Function append bg card ,pos, name for swipper
  function generetaDataSlider() {
    $(".slide-streamer").each(function (index) {
      const streamer_pos = Math.floor(Math.random() * 10);
      let boxSlideBottom = $(
        `<div class="bottom_swiper_box" data-swiper-parallax="-5"><span># </span><span>${streamer_pos}</span></div>`
      );
      const bgImage = backgroundImages[index % backgroundImages.length];
      $(this).append(boxSlideBottom);
      $(this).css("background-image", bgImage);
      $(this).css({
        "background-size": "cover",
        "background-position": "center",
        "background-repeat": "no-repeat",
      });

      // $(this).prepend(boxSlideTop);
    });
  }


  function showMessage(message, streamerData) {
    console.log(message, "message");
    const messageHtml = `
<div class="card-message col-lg-3 col-md-8 col-sm-8">
<div class="card">
  <div class="card-header">
   <div class="card-picture" style="background-image:url('${streamerData.avatarImg}')"></div>
   
   <h6 class="card-text _text-left">pozitie: #${streamerData.position}</h6>
   <h5 class="card-title text-uppercase m-0">${streamerData.name}</h5>
   <h6 class="card-text _text-right">voturi: ${streamerData.vote}</h6>
  </div>
  <div class="card-body">
    <h4 class="card-title text-center">
      ${message} ${streamerData.name}
    </h4>
    <div class="btn-wrapp d-flex justify-content-center gap-3 py-3">
      <button type="button" id=yes-button class="btn btn-danger w-25">DA</button>
      <button type="button" id=no-button class="btn btn-success w-25">NU</button>
    </div>
  </div>
</div>
</div>
`;
    return $("#messageContainer").append(messageHtml);
  }



  generetaDataSlider();
  generateGames(gamesArray);
  populateTable(streamerCards);


  // Options for the "streamersTable"
  const streamersTableOptions = {
    aaSorting: false,
    responsive: true,
    pageLength: 5,
    info: false,
    lengthChange: false,
    searching: false, // Disable search
    language: {
      paginate: {
        previous: '',
        next: ''
      }
    },
    columnDefs: [{
        width: "5%",
        targets: 0
      },
      {
        width: "60%",
        targets: 1
      },
      {
        width: "10%",
        targets: 2
      },
      {
        width: "10%",
        targets: 3,
        className: "text-center"
      },
      {
        width: "10%",
        targets: 4
      },

      {
        responsivePriority: 2,
        targets: 2,
      },

      {
        visible: false,
        targets: 2,
      }
    ],
  };

  // Options for the "usersTable"
  const usersTableOptions = {
    autoWidth: false,
    aaSorting: false,
    responsive: true,
    pageLength: 10,
    paginate: false,
    info: false,
    searching: false, // Disable search
    language: false,
    columnDefs: [{
        width: "10%",
        targets: 0
      },
      {
        width: "60%",
        targets: 1
      },
      {
        width: "15%",
        targets: 2,
      },
      {
        width: "15%",
        targets: 3,
        visible: false,
      },
      {
        responsivePriority: 1,
        targets: -1,
        visible: false, // Hide the last column (which is "Challenge")
      },
      {
        width: "15%",
        targets: 4,
        visible: false,
      },


      // You can add more specific columnDefs for the "usersTable" here if needed
    ],
  };

  // Initialize DataTables for both tables
  $("#streamersTable").DataTable(streamersTableOptions);
  $("#usersTable").DataTable(usersTableOptions);

  // Add titles to table wrappers
  $("#streamersTable_wrapper").prepend(`<h4 class="text-center p-2 position-relative">Streameri</h4>`);
  $("#usersTable_wrapper").prepend(`<h4 class="text-center p-2 position-relative">Utilizatori</h4>`);



  // Customize search input (if needed)
  $(".dataTables_filter input")
    .attr("placeholder", "Search here...")
    .css({
      width: "200px",
      display: "inline-block",
      "font-size": "0.7em",
      padding: "0.3em 0.7em",
      outline: "none"
    });

  // Add tooltips (if needed)
  $('[data-toggle="tooltip"]').tooltip();


  // //   SCROLL WINDOWS LOCOMOTIVE JS
  // const scroll = new LocomotiveScroll({
  //   el: scrollContainer,
  //   smoothMobile: true,
  //   getSpeed: true,
  //   getDirection: true,
  //   firefoxMultiplier: "",
  //   scrollFromAnywhere: true,
  //   reloadOnContextChange: false,
  //   resetNativeScroll: false,
  //   smooth: true,
  //   autoResize: true,
  //   // lerp: 0.05
  // });

  // scroll.on("scroll", (e) => {
  //   // scrollContainer.style.backgroundColor =
  //   // 	"hsl(" + 100 + e.scroll.y / 5 + ",40%,30%)";
  //   // const table = document.getElementById("gameImages"); // Selectați tabelul după ID
  //   // if (table) {
  //   //   const skewValue = e.scroll.y / 9; // Ajustați acest număr pentru a controla intensitatea efectului de skew
  //   //   table.style.transform = `skew(${skewValue / 30}deg)`; // Aplicați efectul de skew pe axa orizontală
  //   // }
  // });

});

//   SWIPER FOR STREAMERS

const swiperStr = new Swiper(".stream-slider", {
  effect: "coverflow",
  loop: true,
  autoplay: {
    delay: 0,
  },
  slidesPerView: "auto",
  speed: 2 * 1000,
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
  //   1024: { slidesPerView: 4 },
  //   1440: { slidesPerView: "auto" },
  // },
});

// swiperStr.autoplay.stop();
swiperStr.el.addEventListener("mouseover", function () {
  swiperStr.autoplay.stop();
});

swiperStr.el.addEventListener("mouseleave", function () {
  swiperStr.autoplay.start();
});


function generateGames(streamerData) {
  const gameImagesContainer = $("#gameImages");
  const isDesktop = window.innerWidth > 480;
  const maxGamesToShow = isDesktop ? streamerData.length : 16;
  // Loop through the games and display up to maxGamesToShow
  streamerData.slice(0, maxGamesToShow).forEach((gameName) => {
    const img = $("<img>")
      .attr("src", `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E`)
      .attr("data-src", `https://img.netbet.ro/cdn-cgi/image/q=90,w=214,f=webp//gms/games/casino_new/preview/${gameName}.jpg`)
      .attr("alt", gameName)
      .attr("loading", "lazy")
      .attr("srcset", `https://img.netbet.ro/cdn-cgi/image/q=90,w=214,f=webp//gms/games/casino_new/preview/${gameName}.jpg 214w`);
    const link = $("<a>").addClass("scroll-item-game").attr("href", "#").append(img);
    gameImagesContainer.append(link);
  });
}

// Add an event listener to re-run the function when the window is resized
window.addEventListener('resize', function () {
  gameImagesContainer.empty(); // Clear the container
  generateGames(objData); // Re-generate the games based on the new screen size
});

//SET COOKIES

// $("#setCookieButton").click(function () {
//   const name = $("#cookieInput").val();
//   document.cookie = `name=${name}`;
//   updateButton();
// });

function updateButton() {

  // const cookieValue = getCookie("name");
  // const inputName = $("#cookieInput").val();
  // console.log(cookieValue);
  const actionButton = $("#actionButton");
  actionButton.attr("href", "test1.html");
  actionButton.attr("data-bs-toggle", "modal");
  actionButton.attr("data-bs-target", "#cardsModal");
  actionButton.text("Join Battles");
  // if ((cookieValue === inputName) || cookieValue) {
  //   actionButton.attr("href", "test1.html");
  //   actionButton.attr("data-bs-toggle", "modal");
  //   actionButton.attr("data-bs-target", "#cardsModal");
  //   actionButton.text("Join Battles");
  // } else {
  //   actionButton.attr("href", "https://casino.netbet.ro/inregistrare");
  //   actionButton.attr("target", "blank");
  //   actionButton.text("Show Me Offer");
  // }
}
updateButton()
// function getCookie(nameCookie) {
//   let value = "; " + document.cookie;
//   let parts = value.split("; " + nameCookie + "=");
//   if (parts.length === 2) {
//     return parts.pop().split(";").shift();
//   } else {
//     return null;
//   }
// }

// La încărcarea paginii, actualizați textul butonului în funcție de cookie-ul existent



// VOTED CARDS 

const cardElements = document.querySelectorAll('.card-custom');
// console.log(cardElements, "cards")

// Adaugă un ascultător de eveniment pentru fiecare card
cardElements.forEach(card => {
  card.addEventListener('click', () => {
    // Adaugă clasa "voted" la cardul apăsat
    card.classList.add('voted');
  });
});