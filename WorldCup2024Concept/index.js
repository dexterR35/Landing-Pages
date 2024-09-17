const min = 1;
const max = 3000;
const randomPointsTest = Math.floor(Math.random() * (max - min + 1)) + min;
const randomVoteTest = Math.floor(Math.random() * (max - min + 1)) + min;


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
    streamers: [
      {
        name: "pacanela",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "234253",
        challenge: true,
        bgImg: "./_bg/bg_pacanela.jpg",
        avatarImg: "./_avatar/pacanela.png",
      },
      {
        name: "anna",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "34527",
        challenge: true,
        bgImg: "./_bg/bg_anna.jpg",
        avatarImg: `./_avatar/anna.png`,
      },
      {
        name: "dudy",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "564564",
        challenge: false,
        bgImg: "./_bg/bg_dudy.jpg",
        avatarImg: "./_avatar/dudy.png",
      },
      {
        name: "dumisninja",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "867862",
        challenge: true,
        bgImg: "./_bg/bg_dumisninja.jpg",
        avatarImg: "./_avatar/dumisninja.png",
      },
      {
        name: "fratii jonson",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "645678",
        challenge: false,
        bgImg: "./_bg/bg_fratiijonson.jpg",
        avatarImg: "./_avatar/fratiijonson.png",
      },
      {
        name: "narcis",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "412310",
        challenge: true,
        bgImg: "./_bg/bg_narcis.jpg",
        avatarImg: "./_avatar/narcis.png",
      },
      {
        name: "pacanedy",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "5234",
        challenge: true,
        bgImg: "./_bg/bg_pacanedy.jpg",
        avatarImg: "./_avatar/pacanedy.png",
      },
      {
        name: "princess",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "123",
        challenge: false,
        bgImg: "./_bg/bg_princess.jpg",
        avatarImg: "./_avatar/princess.png",
      },
      {
        name: "quikanu",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "67589",
        challenge: false,
        bgImg: "./_bg/bg_quikanu.jpg",
        avatarImg: "./_avatar/quikanu.png",
      },
      {
        name: "stero",
        points: randomPointsTest,
        vote: randomVoteTest,
        position: "5345",
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
  }

  const gamesArray = [...dataObject.gamesArray];
  // console.log(gamesArray, "games array");
  // console.log(streamers, "streamers array");

  //map streamers
  const streamerCards = dataObject.streamers.map((streamerData) => {
    return {
      name: streamerData.name,
      points: streamerData.points,
      bgImg: streamerData.bgImg,
      avatarImg:streamerData.avatarImg,

    };
  });
  // console.log(streamerData.points,"asfasas");
  console.log("fasfaaaaaaaaa");
  // console.log(backgroundImages,"fasfaaaaaaaaa");

  //strData - streamerData
  function generateCard(streamerData) {

    const isVoted = getCookie('namevoted') === streamerCards.name;
    const cardHtml = `
          <div class="col-lg-4 card-wrapp">
              <div class="card card-custom ${isVoted ? 'voted' : 'non-voted'}" style="background:url(${streamerData.bgImg}")>
                  <div class="card-body text-center">
                      <a class="card-text text top-left" href="#" target="_blank">Voteaza-ma</a>
                      <p class="speech">${streamerData.points} Voturi</p>
                      <div class="card-image" style="background-image:url(${streamerData.avatarImg})"></div>
                      <h6 class="card-title text bottom-right">${streamerData.name}</h6>
                  </div>
              </div>
          </div>
      `;
    // Create a jQuery element from the cardHtml
    const cardElement = $(cardHtml);

    // Find the '.card-custom' element within the cardElement
    const cardCustomElement = cardElement.find('.card-custom');

    // Remove the 'non-voted' class from cardCustomElement
    cardCustomElement.removeClass('non-voted');
    
      // Add a click event handler to cardCustomElement
    cardCustomElement.on('click', function () {
      if (!cardCustomElement.hasClass('voted')) {
        $('.card-custom:not(.voted)').removeClass('non-voted');
        cardCustomElement.addClass('voted');
        cardCustomElement.attr('data-voted', 'true');
        if (cardCustomElement.hasClass('voted')) {
          $('.card-custom:not(.voted)').addClass('non-voted');
        }
      }
    });
    return cardElement;
  }

  function generateStreamerTable(streamerData) {
    const tableAHtml = `<tr>
    <td>${streamerData.position}</td>
      <td>
          <div class="d-flex align-items-center">
                  <div class="avatar-table avatar-blue">
                  <img src="${(streamerData.avatarImg)}" alt="pict_table">
                  </div>
                  <div class="">
                      <p class="font-weight-bold mb-0">${streamerData.name}</p>
                      <p class="text-muted mb-0">Locul: 1</p>
                  </div>
            </div>
      </td>
      <td>${streamerData.points}</td>
      <td>${streamerData.vote}</td>
      <td>
          <div class="badge ${streamerData.challenge ? 'badge-success-alt' : 'text-bg-danger'}">
          ${streamerData.challenge ? "challenge" : "no challenge"}
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
      streamerData.position = index + 1; // Set the position based on the sorted order
      //card for modal
      cardData.append(generateCard(streamerData));
      //table for section 2
      tableData.append(generateStreamerTable(streamerData));
    });
  }


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

  // Function append bg card ,pos, name for swipper
  function generetaDataSlider(streamerData) {
    $(".slide-streamer").each(function (index) {
      const streamer_pos = Math.floor(Math.random() * 10);
      // let boxSlideTop = $(
      //   `<div class="top_swiper_box" data-text="terminator" data-swiper-parallax="10"><span>Paca</span>Nela</div>`
      // );
      let boxSlideBottom = $(
        `<div class="bottom_swiper_box" data-swiper-parallax="-10"><span># </span><span>${streamer_pos}</span></div>`
      );
      // streamerData[index].bgImg
      // let test = $(`<img src="${streamerData[index].bgImg}">`);
      $(this).append(boxSlideBottom);
      // $(this).prepend(boxSlideTop);
      // console.log("streamerCardsss",test);
    });
  }

  generetaDataSlider(streamerCards);
  generateGames(gamesArray);
  populateTable(streamerCards);


// Options for the "streamersTable"
const streamersTableOptions = {
  aaSorting: false,
  responsive: true,
  pageLength: 5,
  info: true,
  lengthChange: false,
  searching: false, // Disable search
  language: {
    paginate: {
      previous: '<span class="prev-icon"></span>',
      next: '<span class="next-icon"></span>'
    }
  },
  columnDefs: [
    { width: "5%", targets: 0 },
    { width: "60%", targets: 1 },
    { width: "10%", targets: 2 },
    { width: "10%", targets: 3 },
    { width: "10%", targets: 4 },

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
  autoWidth : false,
  aaSorting: false,
  responsive: true,
  pageLength: 10,
  paginate:false,
  info: false,
  searching: false, // Disable search
  language: false,
  columnDefs: [
    { width: "10%", targets: 0 },
    { width: "60%", targets: 1 },
    { width: "15%", targets: 2 },
    { width: "15%", targets: 3 },
    {
      responsivePriority: 1,
      targets: -1,
      visible: false, // Hide the last column (which is "Challenge")
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


//SET COOKIES

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



