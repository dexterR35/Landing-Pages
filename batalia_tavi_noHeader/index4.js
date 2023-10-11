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

userToCheck = "testcozminn";
// userToCheck = getCookie("netbet_login");
let userToVote = null;

const apiEndpoint_check_user =
  "https://casino-promo.netbet.ro/scripts/streamers/get.php?srv=check_user&user=" +
  userToCheck;
const apiEndpoint_clasament_streamers =
  "https://casino-promo.netbet.ro/scripts/streamers/get.php?srv=clasament_streamers";
const apiEndpoint_optin_user =
  "https://casino-promo.netbet.ro/scripts/streamers/get.php?srv=optin_user&user=" +
  userToCheck;



const scrollContainer = document.querySelector("#fullpage");
let tableDataUser = $("#bodyUser");
let tableDataStreamer = $("#bodyStreamer");


let voted = null;
// console.log("1")
$(document).ready(function () {


  if ($(window).width() <= 1024) {
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

    gamesArray: [
      "10189-the-sword-and-the-grail__2",
      "11877-sky-queen__4",
      "12009-halloween-fortune-ro__3",
      "20051-big-top-bonanza-megaways__2",
      "20139-age-of-the-gods-ii-god-storms__2",
      "20621-big-buffalo-badlands__3",
      "21509-disco-mania-megaways-merge__2",
      "23076-cash-of-command__2",
      "23278-pirate-chest-hold-and-win__2",
      "24576-big-bass-bonanza-hold-spinner__2",
      "25313-cash-20x__2",
      "25328-egyptian-treasure__2",
      "25794-empire-gold-hold-and-win__2",
      "22372-treasures-of-fire-scatter-pays-95__2",
      "25878-wisdom-of-athena__2",
      "26018-fox-mayhem__2",
      "26271-sky-bounty__2",
      "26375-halloween__3",
    ],
    backgroundImages: [
      'url("./_bg/bg_anna.jpg")',
      'url("./_bg/bg_pacanela.jpg")',
      'url("./_bg/bg_princess.jpg")',
    ],
  }

  const gamesArray = [...dataObject.gamesArray];
  const backgroundImages = [...dataObject.backgroundImages];
  // console.log(backgroundImages);

  let isVoted = null;
  let cardData = $("#dynamicCardBody");
  let cardChallenge = $("#dynamicChallenge");

  // const apiEndpoint_optout_user =
  //   "https://casino-promo.netbet.ro/scripts/streamers/get.php?srv=delete_user&user=" +
  //   userToCheck;
  const actionButton = $("#actionButton");
  let userPosition = null;



  function formatPoints(pointsf) {
    if (pointsf >= 1000000) {
      if (pointsf % 1000000 === 0) {
        return (pointsf / 1000000) + "MIL";
      } else {
        return (pointsf / 1000000).toFixed(1) + "MIL";
      }
    } else if (pointsf >= 1000) {
      if (pointsf % 1000 === 0) {
        return (pointsf / 1000) + "K";
      } else {
        return (pointsf / 1000).toFixed(1) + "K";
      }
    } else {
      return pointsf.toString();
    }
  }

  // Make a GET request to the API for CHECK USER
  fetch(apiEndpoint_check_user)
    .then((response) => {
      // Check if the request was successful
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data, "Data");
      let optin = null;
      // console.log(data[0].optin, "optin");
      voted = "Not available"; // Default value if "voted" is not in the response
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
      updateButtonBehavior(optin, voted);

      console.log("optin is:", optin);

      // Check if optin and clasament have been assigned values
      if (optin !== null && clasament !== null) {
        tableDataUser.empty();
        // Find the user's ranking
        clasament.forEach((item) => {
          if (item.username === userToCheck) {
            userPosition = item.ranking;
          }
          item.points = formatPoints(item.points);
          // showMessage(message, item);
        });
        if (userPosition <= 10) {
          // console.log("userul e top 10");
          clasament.slice(0, 10).forEach((item) => {
            tableDataUser.append(createTableUsers(item, userPosition));
          });
        } else if (userPosition > 10 && userPosition <= 200) {
          console.log("userul e in top 200");
          if (clasament.length == 17) {
            // console.log("userul nu e intre ultimii 3");
            clasament.slice(0, 3).forEach((item) => {
              tableDataUser.append(createTableUsers(item, userPosition));
            });
            // console.log("userul se afla ultimii 3  >,add index (item, index");
            clasament.slice(10, 17).forEach((item) => {
              tableDataUser.append(createTableUsers(item, userPosition));
            });
          } else {
            console.log("userul e intre ultimii 3");
            clasament.slice(0, 6).forEach((item) => {
              tableDataUser.append(createTableUsers(item, userPosition));
            });
            clasament
              .slice(clasament.length - 4, clasament.length)
              .forEach((item) => {
                tableDataUser.append(createTableUsers(item, userPosition));
              });
          }
        } else if (userPosition > 200) {
          // console.log("userul e mai jos de 200");
          if (clasament.length == 20) {
            // console.log("userul nu e intre ultimii 3");
            clasament.slice(0, 3).forEach((item) => {
              tableDataUser.append(createTableUsers(item, userPosition));
            });
            clasament.slice(10, 13).forEach((item) => {
              tableDataUser.append(createTableUsers(item, userPosition));
            });

            clasament.slice(14, 18).forEach((item) => {
              tableDataUser.append(createTableUsers(item, userPosition));
            });
          } else {
            console.log("userul e intre ultimii 3");
            clasament.slice(0, 3).forEach((item) => {
              tableDataUser.append(createTableUsers(item, userPosition));
            });

            clasament.slice(10, 13).forEach((item) => {
              tableDataUser.append(createTableUsers(item, userPosition));
            });
            clasament
              .slice(clasament.length - 4, clasament.length)
              .forEach((item) => {
                tableDataUser.append(createTableUsers(item, userPosition));
              });
          }
        }
      } else {
        console.error("Invalid response structure:", data);
      }
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });

  let imgSrc = "";
  let linkVideo;
  fetch(apiEndpoint_clasament_streamers)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      // console.log(data, "clasament streamer");
      tableDataStreamer.empty();
      data.forEach((streamer, index) => {
        // console.log(streamer, "fasfa")
        switch (streamer.username) {
          case "testpacanela":
            streamer.username = "PĂCĂNELA";
            imgSrc = "./_avatar/pacanela.png";
            linkVideo = streamer.status;
            break;
          case "casinosro":
            streamer.username = "QUIKANU";
            imgSrc = "./_avatar/quikanu.png";
            break;
          case "dumis423435":
            streamer.username = "DUMISNINJA";
            imgSrc = "./_avatar/dumisninja.png";
            break;
          case "cazino265ro":
            streamer.username = "DUDY";
            imgSrc = "./_avatar/dudy.png";
            break;
          case "cazinoz":
            streamer.username = "NARCIS";
            imgSrc = "./_avatar/narcis.png";
            break;
          case "ster0iaBanii":
            streamer.username = "STERO";
            imgSrc = "./_avatar/stero.png";
            break;
          case "Annuskaa":
            streamer.username = "ANNA";
            imgSrc = "./_avatar/anna.png";
            break;
          case "supercazino1":
            streamer.username = "FRATIIJONSON";
            imgSrc = "./_avatar/fratiijonson.png";
            break;
          case "supercazino2":
            streamer.username = "PACANEDY";
            imgSrc = "./_avatar/pacanedy.png";
            break;
          case "supercazino3":
            streamer.username = "PRINCESS";
            imgSrc = "./_avatar/princess.png";
            break;
        }
        const bgImage = backgroundImages[index % backgroundImages.length];
        tableDataStreamer.append(createTableStreamers(streamer, imgSrc));
        cardData.append(generateModalCard(streamer, imgSrc, bgImage, voted , linkVideo));
        // cardChallenge.append(generateModalChallenge(streamer, imgSrc, bgImage));
      });

      $("#streamersTable").DataTable(streamersTableOptions);

    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });


  function createTableUsers(item, userPosition) {
    let userAsterix = item.username;
    if (userAsterix && userAsterix.length > 2) {
      const firstTwoLetters = userAsterix.slice(0, 2);
      const asterisks = '*'.repeat(userAsterix.length - 2);
      userAsterix = firstTwoLetters + asterisks;
      userPosition = item.ranking;
    }
    const matchingUsername = item.username === userToCheck;
    // const isTopTen = index <= 10;
    const tableAHtml = `<tr class="parent-table ${userPosition<=10 ? '_t3' : `${userPosition<=200 ? '_t10 ' : '' }`}${matchingUsername ? '_hl' : ''}">
        <td class="parent-position ps">#${item.ranking}</td>
        <td>
                <div class="parent-name">
                    <p class="mb-0 ps">${matchingUsername ? item.username : userAsterix}</p>
                </div>
        </td>
        <td class="parent-points ps">${item.points}</td>  
    </tr>`;
    return tableAHtml;
  }


  function createTableStreamers(streamer, imgSrc) {
    streamer.points = formatPoints(streamer.points);
    const tableHtml = `<tr class="parent-table">
     <td class="parent-position ps">#${streamer.ranking}</td>
     <td>
     <div class="d-flex align-items-center parent-avatar">
         <div class="avatar-table avatar-blue">
             <img src="${imgSrc}" alt="pict_table" class="pict_table">
         </div>
         <div class="parent-name">
         <p class="mb-0 ps">${streamer.username} <span class="${false ? 'badge-success' : 'badge-danger'}">${false ? '&#10004' : '&#10006'}</span></p> 
             <p class="text-muted mb-0">${streamer.votes === -1 ? "Nu se poate vota" : `Voturi: ${streamer.votes}`}</p>
         </div>
     </div>
 </td>
     <td class="parent-points ps">${streamer.points}</td>
     </tr>;
   `;
    return tableHtml;
  }

///MODAL CARD WITH STREAMERS FOR VOTING AND STUFF
  let isVotingAllowed = true;
  // generate modal card if voting allowed is true or false
  function generateModalCard(streamer, imgSrc, bgImage, linkVideo) {
    if (!isVotingAllowed) {
      $("#titleModal").text("PROVOACĂ STREAMERUL FAVORIT LA CEL MAI DISTRACTIV CHALLENGE!");
      $("#subTitleModal").text("Procesul de votare a fost finalizat, iar următoarea etapă de vot va începe pe data de 12 octombrie 2023.");
      $("#infoModal").text('"Apăsați pe streamerul favorit pentru a urmări provocarea."');
      const cardHtml = `
          <div class="col-lg-4 card-wrapp position-relative">
          <div class="card-title text bottom-left d-flex align-items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="red" class="bi bi-youtube" viewBox="0 0 16 16">
          <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
        </svg><h4>PLAY</h4></div>
              <div class="card card-custom ${voted == "no" ?  "" : "voted-no" } >
                  <div class="card-body text-center">
                      <p class="card-text text text-center top-left">Votarea a expirat</p>
                      <div class="card-image" style="background-image:url(${imgSrc})"></div>
                      <h6 class="card-title text bottom-right">${streamer.username}</h6>
                 
                  </div>
              </div>
          </div>
      `;
      const $card = $(cardHtml);
      $card.find(".card-custom").css("background", bgImage);
      $card.click(function (e) {
        openYoutubeModal();
        // $("#messageContainer").empty();
        // if (streamer.votes >= -1) {
        //   showMessage("votul s a terminat", streamer, imgSrc).show();
        //   e.preventDefault();
        //   $("#no-button").hide();
        //   $("#openYt").one("click", function () {
        //     showMessage("votul s a terminat", streamer, imgSrc).hide()
        //     openYoutubeModal();
        //   });
        //   return;
        // }
        // showMessage("doresti sa votezi cu", streamer, imgSrc).show();
        // voteForStreamer($card, streamer);
        e.preventDefault();
      });
      return $card;
    } else {

      $("#titleModal").text("PROVOACĂ STREAMERUL FAVORIT LA CE MAI DISTRACTIV CHALLENGE!");

      $("#subTitleModal").text("Voturile pentru acest challenge se vor reseta la data de 11.10.2023");

      const cardHtml = `
      <div class="col-lg-4 card-wrapp ${streamer.votes === -1 ? "_pe" : ''}">
          <div class="card card-custom ${streamer.votes === -1 ? "voted-no" : ''}">
              <div class="card-body text-center">
                  <p class="card-text text top-left">Votează cu ${streamer.username}</p>
                  <div class="card-image" style="background-image:url(${imgSrc})"></div>
                  <h6 class="card-title text bottom-right">${streamer.votes === -1 ? "Nu se poate vota" : `Voturi: ${streamer.votes}`}</h6>
              </div>
          </div>
      </div>
  `;
      const $card = $(cardHtml);
      
      $card.find(".card-custom").css("background", bgImage);
      console.log($card);
      $card.find(".card-custom.voted-no").css("pointer-events", "none; !important");
      $card.click(function (e) {
        $("#messageContainer").empty();
        if (streamer.votes <= -1) {
          showMessage("nu se poate vota cu", streamer, imgSrc).show()
          e.preventDefault();
          $("#no-button").hide();
          $("#yes-button").text("Continuă");
          $("#yes-button").one("click", function () {
            $("#messageContainer").hide();
          });
          return;
        }
        showMessage("doresti sa votezi cu", streamer, imgSrc).show();
        voteForStreamer($card, streamer);
        e.preventDefault();
      });
      return $card;
    }
  }

  //   function generateModalChallenge(streamer) {
  //     const cardChallenge = `
  //     <div class="col-lg-4 card-wrapp">
  //         <div class="card card-custom ${streamer.votes === -1 ? "voted-no" : ` `}" >
  //             <div class="card-body text-center">
  //                 <div class="card-image" > link</div>
  //             </div>
  //         </div>
  //     </div>
  // `;
  //     const $card = $(cardChallenge);
  //     return $card;
  //   }

  function updateButtonBehavior(optin, voted) {
    if (!userToCheck || userToCheck == "logged_out") {
      actionButton.text("înregistrează-te");
      actionButton.click(function () {
        window.parent.location.href = "https://casino.netbet.ro/inregistrare";
      });
    } else {
      if (!isVotingAllowed) {
        actionButton.attr("data-bs-toggle", "modal");
        actionButton.attr("data-bs-target", "#cardsModal");
        actionButton.text("Vezi Challenge");
        actionButton.removeAttr("onclick");
      } else if (optin) {
        if (voted == "yes") {
          actionButton.text("Ai votat");
          actionButton.attr("data-bs-toggle", "modal");
          actionButton.attr("data-bs-target", "#cardsModal");
          actionButton.removeAttr("onclick");
        } else {
          actionButton.attr("data-bs-toggle", "modal");
          actionButton.attr("data-bs-target", "#cardsModal");
          actionButton.text("Votează Streamerul");
          actionButton.removeAttr("onclick");
        }
      } else {
        actionButton.attr("onclick", "optIn(); actionButton.text('Votează Streamerul');");
        actionButton.text("Intră în luptă");
        actionButton.off("click"); // Remove any existing click event handlers
      }
    }
  }

  function showMessage(message, item, imgSrc) {
    // console.log(message, "message");
    if (!isVotingAllowed) {
      const messageHtml = `
<div class="card-message col-lg-4 col-md-8 col-sm-8">
<div class="card">
  <div class="card-header">
   <div class="card-picture">
   <img src="${imgSrc}">
   </div>
   <h6 class="card-text _text-left">pozitie: #${item.ranking}</h6>
   <h5 class="card-title text-uppercase m-0">${item.status == "link" ? `${item.status}` : `${item.username}`}</h5>
   <h6 class="card-text _text-right"></h6>
  </div>
  <div class="card-body">
    <h4 class="card-title text-center w-75 mx-auto">
      ${message}
    </h4>
    <div class="btn-wrapp d-flex justify-content-center gap-3 py-3">
      <button type="button" id=openYt class="btn btn-danger w-25">vezi challenge</button>
    </div>
  </div>
</div>
</div>
`;
      return $("#messageContainer").append(messageHtml);

    } else {

      const messageHtml = `
<div class="card-message col-lg-4 col-md-8 col-sm-8">
<div class="card">
  <div class="card-header">
   <div class="card-picture">
   <img src="${imgSrc}">
   </div>
   <h6 class="card-text _text-left">pozitie: #${item.ranking}</h6>
   <h5 class="card-title text-uppercase m-0">${item.username}</h5>
   <h6 class="card-text _text-right">${item.votes === -1 ? " " : `Voturi: ${item.votes}`}</h6>
  </div>
  <div class="card-body">
    <h4 class="card-title text-center w-75 mx-auto">
      ${message} ${item.username}
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
  }

  // let selectedUser = null;
  // let countVote = 0;

  function voteForStreamer($card, streamer) {
    console.log(streamer, "cardddd");
    $("#messageContainer").show();

    $("#yes-button").on("click", () => {
      switch (streamer.username) {
        case "PĂCĂNELA":
          userToVote = "testpacanela";
          break;
        case "QUIKANU":
          userToVote = "casinosro";
          break;
        case "DUMISNINJA":
          userToVote = "dumis423435";
          break;
        case "DUDY":
          userToVote = "cazino265ro";
          break;
        case "NARCIS":
          userToVote = "cazinoz";
          break;
        case "STERO":
          userToVote = "ster0iaBanii";
          break;
        case "ANNA":
          userToVote = "Annuskaa";
          break;
        case "FRATIIJONSON":
          userToVote = "supercazino1";
          break;
        case "PACANEDY":
          userToVote = "supercazino2";
          break;
        case "PRINCESS":
          userToVote = "supercazino3";
          break;
      }

      voteStreamer(userToVote);
      // selectedUser.voted = true;
      // userVoted.text("Da");
      $card.addClass("selected");
      $(".card-wrapp").not($card).css("filter", "grayscale(1)");
      // $($card).css("background", "red");
      $card.find(".card-custom").addClass("voted")
      // const $voteElement = $card.find(".streamerVote");
      $("#messageContainer").hide();
      window.location.reload();
    });
    $("#no-button").on("click", () => {
      // alert("Ai anulat votul.");
      $("#messageContainer").hide();
    });
  }

  async function voteStreamer() {
    const apiEndpoint_vote = "https://casino-promo.netbet.ro/scripts/streamers/get.php?srv=vote_user&user=" + userToCheck + "&vote=" + userToVote;

    if (userToVote !== null) {
      // console.log("Voting for " + userToVote);
      // console.log("API ESTE : ", apiEndpoint_vote)

      await fetch(apiEndpoint_vote)
        .then(response => {
          // Check if the request was successful
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json(); // Parse the JSON from the response
        })
        .catch(error => {
          // Log any errors that occurred during the fetch
          console.error("Fetch error:", error);
        });
    } else {
      console.error("userToVote is null. Set a valid user to vote for.");
    }
  }

  // Function append bg card ,pos, name for swipper
  function generetaDataSlider() {
    $(".slide-streamer").each(function (index) {
      let boxSlideBottom = $(
        `<div class="bottom_swiper_box" data-swiper-parallax="-5"><span># </span><span></span></div>`
      );
      const bgImage = backgroundImages[index % backgroundImages.length];
      $(this).append(boxSlideBottom);
      $(this).css("background-image", bgImage);
      $(this).css({
        "background-size": "cover",
        "background-position": "center",
        "background-repeat": "no-repeat",
      });
      $(this).attr("loading", "lazy")
      // $(this).prepend(boxSlideTop);
    });
  }

  generetaDataSlider();

  // generate games from link and slice
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
      const link = $("<a>").addClass("scroll-item-game").attr("href", `https://casino.netbet.ro/play/${gameName.slice(6, -3)}`).append(img);
      link.attr("target", "_parent")
      gameImagesContainer.append(link);
    });
  }
  generateGames(gamesArray);
  // Options for the "streamersTable"


  const streamersTableOptions = {
    aaSorting: false,
    responsive: false,
    pageLength: 5,
    paginate: true,
    info: false,
    lengthChange: false,
    searching: false, // Disable search
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
      // {
      //   responsivePriority: 2,
      //   targets: 3,
      // },
    ],
  };

  // Options for the "usersTable"
  const usersTableOptions = {
    autoWidth: false,
    aaSorting: false,
    responsive: false,
    pageLength: 5,
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

      // You can add more specific columnDefs for the "usersTable" here if needed
    ],
  };


  $("#usersTable").DataTable(usersTableOptions);


  // Add titles to table wrappers
  // $("#streamersTable_wrapper").prepend(`<h4 class="text-center p-2 position-relative">Streameri</h4>`);
  // $("#usersTable_wrapper").prepend(`<h4 class="text-center p-2 position-relative">Utilizatori</h4>`);

  // // Customize search input (if needed)
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

  // $("#openModalButton").click(openYoutubeModal);

  $("#modal-youtube").on("hidden.bs.modal", pauseYoutubeVideo);

  function openYoutubeModal() {
    $("#modal-youtube").modal("show");
    playYoutubeVideo();
  }

  function playYoutubeVideo() {
    const videoIframe = $("#youtubeVideo");
    const videoSrc = videoIframe.attr("src");
    videoIframe.attr("src", videoSrc + "&autoplay=1");
  }

  function pauseYoutubeVideo() {
    const videoIframe = $("#youtubeVideo");
    const videoSrc = videoIframe.attr("src");
    videoIframe.attr("src", videoSrc.replace("&autoplay=1", ""));
  }


});


// Call the function again on window resize
$(window).resize(function () {
  gameImagesContainer.empty(); // Clear the container
  updateContent();
  generateGames(objData); // Re-generate the games based on the new screen size
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
  // console.log("optin");
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
  window.location.reload();
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
// updateContent()

$(function () {
  const imagesToLazyLoad = document.querySelectorAll('img[data-src]');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        observer.unobserve(img);
      }
    });
  });

  imagesToLazyLoad.forEach(img => {
    observer.observe(img);
  });
});


// $(document).ready(function () {
//   const splashScreen = $('#splash-screen');
//   const mainContent = $('.contentS');

//   // Wait for all images and the DOM to be fully loaded
//   mainContent.imagesLoaded(function () {
//       // Hide the splash screen with a fade-out animation
//       splashScreen.fadeOut(500, function () {
//           // Animation complete callback - hide the splash screen
//           splashScreen.css('display', 'none');
//       });

//       // Display the main content
//       mainContent.css('display', 'block');
//   });
// });
// const cardElements = document.querySelectorAll('.card-custom');
// // console.log(cardElements, "cards")

// // Adaugă un ascultător de eveniment pentru fiecare card
// cardElements.forEach(card => {
//   card.addEventListener('click', () => {
//     // Adaugă clasa "voted" la cardul apăsat
//     card.classList.add('voted');
//   });
// });