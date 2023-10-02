function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

userToCheck = getCookie("netbet_login"); // DE LINKUIT AICI CHECKCOOKIE (VEZI MAI SUS)
userToVote = null;

const apiEndpoint_check_user =
  "https://casino-promo.netbet.ro/scripts/streamers/get.php?srv=check_user&user=" +
  userToCheck;
const apiEndpoint_clasament_streamers =
  "https://casino-promo.netbet.ro/scripts/streamers/get.php?srv=clasament_streamers";
const apiEndpoint_optin_user =
  "https://casino-promo.netbet.ro/scripts/streamers/get.php?srv=optin_user&user=" +
  userToCheck;

let tableDataUser = $("#bodyUser");
let tableDataStreamer = $("#bodyStreamer");


$(document).ready(function () {
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


  const dataObject = {
    streamers: [{
        name: "anna",
        // points: randomPointsTest,
        // vote: randomVoteTest,
        position: "1",
        challenge: true,
        bgImg: "./_bg/bg_anna.jpg",
        avatarImg: `./_avatar/anna.png`,
      },
      {
        name: "dudy",
        // points: randomPointsTest,
        // vote: randomVoteTest,
        position: "2",
        challenge: false,
        bgImg: "./_bg/bg_dudy.jpg",
        avatarImg: "./_avatar/dudy.png",
      },
      {
        name: "dumisninja",
        // points: randomPointsTest,
        // vote: randomVoteTest,
        position: "3",
        challenge: true,
        bgImg: "./_bg/bg_dumisninja.jpg",
        avatarImg: "./_avatar/dumisninja.png",
      },
      {
        name: "fratiijonson",
        // points: randomPointsTest,
        // vote: randomVoteTest,
        position: "4",
        challenge: false,
        bgImg: "./_bg/bg_fratiijonson.jpg",
        avatarImg: "./_avatar/fratiijonson.png",
      },
      {
        name: "narcis",
        // points: randomPointsTest,
        // vote: randomVoteTest,
        position: "5",
        challenge: true,
        bgImg: "./_bg/bg_narcis.jpg",
        avatarImg: "./_avatar/narcis.png",
      },
      {
        name: "pacanedy",
        // points: randomPointsTest,
        // vote: randomVoteTest,
        position: "6",
        challenge: true,
        bgImg: "./_bg/bg_pacanedy.jpg",
        avatarImg: "./_avatar/pacanedy.png",
      },
      {
        name: "pacanela",
        // points: randomPointsTest,
        // vote: randomVoteTest,
        position: "7",
        challenge: true,
        bgImg: "./_bg/bg_pacanela.jpg",
        avatarImg: "./_avatar/pacanela.png",
      },
      {
        name: "princess",
        // points: randomPointsTest,
        // vote: randomVoteTest,
        position: "8",
        challenge: false,
        bgImg: "./_bg/bg_princess.jpg",
        avatarImg: "./_avatar/princess.png",
      },
      {
        name: "quikanu",
        // points: randomPointsTest,
        // vote: randomVoteTest,
        position: "9",
        challenge: false,
        bgImg: "./_bg/bg_quikanu.jpg",
        avatarImg: "./_avatar/quikanu.png",
      },
      {
        name: "stero",
        // points: randomPointsTest,
        // vote: randomVoteTest,
        position: "10",
        challenge: true,
        bgImg: "./_bg/bg_stero.jpg",
        avatarImg: "./_avatar/stero.png",
      },
    ],
    gamesArray: [
      "10189-the-sword-and-the-grail__2",
      "11877-sky-queen__4",
      "12009-halloween-fortune-ro__3",
      "20051-big-top-bonanza-megaways__2",
      "20139-age-of-the-gods-ii-god-storms__2",
      "20621-big-buffalo-badlands__3.jpg",
      "21509-disco-mania-megaways-merge__2",
      "23076-cash-of-command__2",
      "23278-pirate-chest-hold-and-win__2",
      "24576-big-bass-bonanza-hold-spinner__2",
      "25313-cash-20x__2",
      "25328-egyptian-treasure__2",
      "25794-empire-gold-hold-and-win__2",
      "14220-aztec-respin-remember-skywind-prov__2",
      "25878-wisdom-of-athena__2",
      "26018-fox-mayhem__2",
      "26271-sky-bounty__2",
      "26375-halloween__3",
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



  // Define the API endpoint

  // const apiEndpoint_optout_user =
  //   "https://casino-promo.netbet.ro/scripts/streamers/get.php?srv=delete_user&user=" +
  //   userToCheck;

  // let isOptedIn = false;
  // Make a GET request to the API for CHECK USER
  fetch(apiEndpoint_check_user)
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the JSON from the response
    })
    .then((data) => {
      console.log(data, "Data");
      // Initialize variables to hold optin, voted, and clasament data
      let optin = null;
      console.log(data[0].optin, "optin");
      let voted = "Not available"; // Default value if "voted" is not in the response
      let clasament = null;
      // Iterate over the array and assign values to optin, voted, and clasament
      data.forEach((item) => {
        if ("optin" in item) {
          optin = item.optin === "true"; // Convert string to boolean
        } else if ("voted" in item) {
          voted = item.voted; // Assign the string value to voted
        } else if ("clasament" in item) {
          clasament = item.clasament;
        }
      });
      // if (!optin) {
      //   $("#optin").html('<button onclick="optIn()">Opt In</button>');
      // } else {
      //   $("#optin").html('<button onclick="optOut()">Opt out</button>');
      // }
      // Check if optin and clasament have been assigned values
      if (optin !== null && clasament !== null) {
        console.log(clasament, "clasament");
        tableDataUser.empty();
        // Find the user's ranking
        let pozitie = null;
        clasament.forEach((item) => {
          if (item.username === userToCheck) {
            pozitie = item.ranking;
            console.log("am gasit userul pe pozitia ", pozitie);
          }
        });

        if (pozitie <= 10) {
          console.log("userul e top 10");
          clasament.slice(0, 10).forEach((item) => {
            tableDataUser.append(createTableUsers(item));
          });
        } else if (pozitie > 10 && pozitie <= 200) {
          console.log("userul e in top 200");
          if (clasament.length == 17) {
            console.log("userul nu e intre ultimii 3");

            clasament.slice(0, 3).forEach((item) => {
              tableDataUser.append(createTableUsers(item));
            });

            clasament.slice(10, 17).forEach((item) => {
              tableDataUser.append(createTableUsers(item));
            });
          } else {
            console.log("userul e intre ultimii 3");

            clasament.slice(0, 6).forEach((item) => {
              tableDataUser.append(createTableUsers(item));
            });

            clasament
              .slice(clasament.length - 4, clasament.length)
              .forEach((item) => {
                tableDataUser.append(createTableUsers(item));
              });
          }
        } else if (pozitie > 200) {
          console.log("userul e mai jos de 200");
          if (clasament.length == 20) {
            console.log("userul nu e intre ultimii 3");
            clasament.slice(0, 3).forEach((item) => {
              tableDataUser.append(createTableUsers(item));
            });
            clasament.slice(10, 13).forEach((item) => {
              tableDataUser.append(createTableUsers(item));
            });

            clasament.slice(14, 18).forEach((item) => {
              tableDataUser.append(createTableUsers(item));
            });
          } else {
            console.log("userul e intre ultimii 3");
            clasament.slice(0, 3).forEach((item) => {
              tableDataUser.append(createTableUsers(item));
            });

            clasament.slice(10, 13).forEach((item) => {
              tableDataUser.append(createTableUsers(item));
            });
            clasament
              .slice(clasament.length - 4, clasament.length)
              .forEach((item) => {
                tableDataUser.append(createTableUsers(item));
              });
          }
        }
      } else {
        console.error("Invalid response structure:", data);
      }
    })
    .catch((error) => {
      // Log any errors that occurred during the fetch
      console.error("Fetch error:", error);
    });

  // Make a GET request to the API for CLASAMENT STREAMERS
  fetch(apiEndpoint_clasament_streamers)
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the JSON from the response
    })
    .then((data) => {
      tableDataStreamer.empty();
      data.forEach((user) => {
        console.log(user,"fasfa")
        switch (user.username) {
          case "testpacanela" : 
          user.username = "PACANELA";
          break;
          case "casinosro" : 
          user.username = "QUIKANU";
          break;
          case "dumis423435" : 
          user.username = "DUMISNINJA";
          break;    
          case "cazino265ro" : 
          user.username = "DUDY";
          break;   
          case "cazinoz" : 
          user.username = "NARCIS";
          break; 
          case "ster0iaBanii" : 
          user.username = "STERO";
          break; 
          case "Annuskaa" : 
          user.username = "ANNA";
          break; 
          case "supercazino1" : 
          user.username = "FRATIIJONSON";
          break;      
          case "supercazino2" : 
          user.username = "PACANEDY";
          break;   
          case "supercazino3" : 
          user.username = "PRINCESS";
          break;                       
        }
        tableDataStreamer.append(createTableUsers(user));
      });
    })
    .catch((error) => {
      // Log any errors that occurred during the fetch
      console.error("Fetch error:", error);
    });


  function createTableUsers(item) {

    const tableAHtml = `<tr class="parent-table">
        <td class="parent-position ps">#${item.ranking}</td>
        <td>
            <div class="d-flex align-items-center parent-avatar">
                <div class="avatar-table avatar-blue">
                    <img src="" alt="pict_table" class="pict_table">
                </div>
                <div class="parent-name">
                    <p class="mb-0 ps">${item.username}</p>
                    <p class="text-muted mb-0">voturi: ${item.votes}</p>
                </div>
            </div>
        </td>
        <td class="parent-points ps">${item.points}</td>
        
    </tr>`;
    return tableAHtml;
  }
  // streamerCards.forEach((streamerData, index) => {
  //   console.log(streamerData, "test")

  // });
  // function createTableStreamers(data , streamerData) {
  //   const tableHtml = `
  //     <td class="parent-position ps">#${item.ranking}</td>
  //     <td>
  //       <div class="parent-name">
  //                   <p class="mb-0 ps">${item.username}</p>
  //               </div>
  //     </td>
  //     <td class="parent-points ps">${item.points}</td>

  //   `;
  //   return tableHtml;
  // }

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



  generetaDataSlider();
  generateGames(gamesArray);


  function generateGames(allGames) {
    const gameImagesContainer = $("#gameImages");
    const isDesktop = window.innerWidth > 480;
    const maxGamesToShow = isDesktop ? (allGames.length) : 12;
    // Loop through the games and display up to maxGamesToShow
    allGames.slice(0, maxGamesToShow).forEach((gameName) => {
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


  // Options for the "streamersTable"
  const streamersTableOptions = {
    aaSorting: false,
    responsive: true,
    pageLength: 10,
    paging: true,
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
  // $("#usersTable").DataTable(usersTableOptions);
  // $("#streamersTable").DataTable(streamersTableOptions);

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

  // Call the function again on window resize
  $(window).resize(function () {
    updateContent();
    gameImagesContainer.empty(); // Clear the container
    generateGames(objData); // Re-generate the games based on the new screen size
  });
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

async function optIn() {
  console.log("optin");
  await fetch(apiEndpoint_optin_user)
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); // Parse the JSON from the response
    })
    .catch((error) => {
      // Log any errors that occurred during the fetch
      console.error("Fetch error:", error);
    });
}

function updateContent() {
  var screenWidth = $(window).width();
  var netbetSpan = $('#changeWord');
  if (screenWidth <= 480) {
    netbetSpan.text('În partea de jos');
  } else {
    netbetSpan.text('În stânga');
  }
}
updateContent()


// const cardElements = document.querySelectorAll('.card-custom');
// // console.log(cardElements, "cards")

// // Adaugă un ascultător de eveniment pentru fiecare card
// cardElements.forEach(card => {
//   card.addEventListener('click', () => {
//     // Adaugă clasa "voted" la cardul apăsat
//     card.classList.add('voted');
//   });
// });