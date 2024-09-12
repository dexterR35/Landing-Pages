function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// userToCheck = "teststep"; //teststep
userToCheck = "testCozmin";
let userToVote = null;
let isVotingAllowed = false;

const scrollContainer = document.querySelector("#fullpage");

$(document).ready(function () {
  // Mock data that replaces the API responses
  const mockDataUser = [
    {
      optin: "true",
      voted: "no",
      clasament: [
        { username: "teststep", points: 12000, ranking: 5 },
        { username: "user2", points: 11500, ranking: 6 },
        { username: "user3", points: 11000, ranking: 7 },
        { username: "user4", points: 9500, ranking: 8 },
      ],
    },
  ];

  const mockDataStreamers = [
    {
      username: "testpacanela",
      points: 120000,
      votes: 50,
      ranking: 1,
      status: "YOUTUBE_ID_1",
    },
    {
      username: "casinosro",
      points: 110000,
      votes: 100,
      ranking: 2,
      status: "YOUTUBE_ID_2",
    },
    {
      username: "dumis423435",
      points: 90000,
      votes: 80,
      ranking: 3,
      status: "YOUTUBE_ID_3",
    },
    {
      username: "cazino265ro",
      points: 60000,
      votes: -1,
      ranking: 4,
      status: "test4",
    },
    { username: "anna", points: 50000, votes: 1, ranking: 1, status: "test2" },
  ];

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
  };

  const gamesArray = [...dataObject.gamesArray];
  const backgroundImages = [...dataObject.backgroundImages];

  let tableDataUser = $("#bodyUser");
  let tableDataStreamer = $("#bodyStreamer");

  let voted = null;

  if ($(window).width() <= 1024) {
    $(".btn._mobile").addClass("w-100");
    $(".btn._desktop").css({
      display: "none",
    });
    $(".btn._mobile").css({
      display: "block",
    });

    $(".table-responsive").css({
      "overflow-y": "unset",
      height: "fit-content",
    });
  } else {
    $(".btn._mobile").removeClass("w-100");
    $(".btn._desktop").css({
      display: "block",
    });
    $(".btn._mobile").css({
      display: "none",
    });
  }

  let cardData = $("#dynamicCardBody");
  let cardChallenge = $("#dynamicChallenge");

  const actionButton = $("#actionButton");
  let userPosition = null;

  const imagesToLazyLoad = document.querySelectorAll("img[data-src]");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute("data-src");
        observer.unobserve(img);
      }
    });
  });

  imagesToLazyLoad.forEach((img) => {
    observer.observe(img);
  });

  function formatPoints(pointsf) {
    if (pointsf >= 1000000) {
      if (pointsf % 1000000 === 0) {
        return pointsf / 1000000 + "MIL";
      } else {
        return (pointsf / 1000000).toFixed(1) + "MIL";
      }
    } else if (pointsf >= 1000) {
      if (pointsf % 1000 === 0) {
        return pointsf / 1000 + "K";
      } else {
        return (pointsf / 1000).toFixed(1) + "K";
      }
    } else {
      return pointsf.toString();
    }
  }

  // Use mock data for user
  async function fetchDataUser() {
    try {
      const data = mockDataUser;

      let optin = null;
      let voted = null;
      let clasament = null;

      // Retrieve opt-in status, voted status, and rankings (clasament)
      data.forEach((item) => {
        optin = item.optin === "true";
        voted = item.voted;
        clasament = item.clasament;
      });

      // Update button behavior based on user opt-in and voting status
      updateButtonBehavior(optin, voted);

      // Clear any existing table data
      tableDataUser.empty();

      // Variable to store if user is in the top 10
      let userFoundInTop10 = false;

      // Process the top 10 users in the ranking
      clasament.slice(0, 10).forEach((item) => {
        // Highlight the user if it's the one we're checking
        if (item.username === userToCheck) {
          userPosition = item.ranking;
          userFoundInTop10 = true; // Mark that the user is found in the top 10
        }
        item.points = formatPoints(item.points);
      });

      // If user is found in the top 10, append the data with highlight
      clasament.slice(0, 10).forEach((item) => {
        tableDataUser.append(createTableUsers(item, userPosition));
      });

      // If the user is not found in the top 10, we still need to display their row at the bottom
      if (!userFoundInTop10) {
        const userOutsideTop10 = clasament.find(
          (item) => item.username === userToCheck
        );

        if (userOutsideTop10) {
          userOutsideTop10.points = formatPoints(userOutsideTop10.points);
          tableDataUser.append(
            createTableUsers(userOutsideTop10, userOutsideTop10.ranking)
          );
        }
      }
    } catch (error) {
      console.error("Error with mock data:", error);
    }
  }

  const streamersTableOptions = {
    aaSorting: false,
    responsive: false,
    pageLength: 5,
    paginate: true,
    info: false,
    lengthChange: false,
    searching: false,
    columnDefs: [
      {
        width: "5%",
        targets: 0,
      },
      {
        width: "60%",
        targets: 1,
      },
      {
        width: "10%",
        targets: 2,
      },
    ],
  };
  // Use mock data for streamers
  async function fetchDataStreamers() {
    try {
      const data = mockDataStreamers;

      tableDataStreamer.empty();
      data.forEach((streamer, index) => {
        if (streamer.votes != -1) {
          isVotingAllowed = true;
        }

        switch (streamer.username) {
          case "testpacanela":
            streamer.username = "PĂCĂNELA";
            imgSrc = "./_avatar/pacanela.png";
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
        }

        const bgImage = backgroundImages[index % backgroundImages.length];
        tableDataStreamer.append(createTableStreamers(streamer, imgSrc));
        cardData.append(generateModalCard(streamer, imgSrc, bgImage, voted));
      });

      $("#streamersTable").DataTable(streamersTableOptions);
    } catch (error) {
      console.error("Error with mock data:", error);
    }
  }

  function createTableUsers(item, userPosition) {
    let userAsterix = item.username;
    if (userAsterix.length > 2) {
      const firstTwoLetters = userAsterix.slice(0, 2);
      const asterisks = "*".repeat(userAsterix.length - 2);
      userAsterix = firstTwoLetters + asterisks;
    }

    const matchingUsername = item.username === userToCheck;
    return `
      <tr class="parent-table ${
        userPosition <= 10 ? "_t3" : ""
      }${matchingUsername ? "_hl" : ""}">
        <td class="parent-position ps">#${item.ranking}</td>
        <td><p class="mb-0 ps">${
          matchingUsername ? item.username : userAsterix
        }</p></td>
        <td class="parent-points ps">${item.points}</td>
      </tr>`;
  }

  function createTableStreamers(streamer, imgSrc) {
    streamer.points = formatPoints(streamer.points);
    return `
      <tr class="parent-table">
        <td class="parent-position ps">#${streamer.ranking}</td>
        <td>
          <div class="d-flex align-items-center parent-avatar">
            <div class="avatar-table avatar-blue">
              <img src="${imgSrc}" alt="pict_table" class="pict_table">
            </div>
            <div class="parent-name">
              <p class="mb-0 ps">${
                streamer.username
              } <span class="${false ? "badge-success" : "badge-danger"}">${false ? "&#10004" : "&#10006"}</span></p>
              <p class="text-muted mb-0">${
                streamer.votes === -1
                  ? "Nu se poate vota"
                  : `Voturi: ${streamer.votes}`
              }</p>
            </div>
          </div>
        </td>
        <td class="parent-points ps">${streamer.points}</td>
      </tr>`;
  }

  function generateModalCard(streamer, imgSrc, bgImage) {
    let customContent = "";

    if (!isVotingAllowed) {
      $("#titleModal").text(
        "Procesul de votare a fost finalizat, iar următoarea etapă de vot va începe în curând."
      );
      $("#infoModal").text(
        "Apăsați pe streamerul favorit pentru a urmări provocarea."
      );

      if (streamer.status !== "" && streamer.status !== "false") {
        customContent = `
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="red" class="bi bi-youtube" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
          </svg>
          <h4>PLAY</h4>`;
        let iframeSrc = `https://www.youtube.com/embed/${streamer.status}`;
        $("#youtubeVideo").attr("src", iframeSrc);
      }

      const cardHtml = `
          <div class="col-lg-4 card-wrapp position-relative">
          <div class="card-title text bottom-left d-flex align-items-center gap-1">${customContent}</div>
              <div class="card card-custom ${
                streamer.status !== "false" && streamer.status !== ""
                  ? ""
                  : "voted-no"
              } " >
                  <div class="card-body text-center">
                      <p class="card-text text text-center top-left">${
                        streamer.status !== "false" && streamer.status !== ""
                          ? "Vezi challenge"
                          : `${
                              streamer.username === "PĂCĂNELA" ||
                              streamer.username === "DUDY"
                                ? "Indisponibil"
                                : "Votarea a expirat"
                            }`
                      }</p>
                      <div class="card-image" style="background-image:url(${imgSrc})"></div>
                      <h6 class="card-title text bottom-right">${
                        streamer.username
                      }</h6>
                  </div>
              </div>
          </div>
      `;
      const $card = $(cardHtml);
      $card.find(".card-custom").css("background", bgImage);
      $card.click(function (e) {
        if (streamer.status !== "" && streamer.status !== "false") {
          openYoutubeModal();
          e.preventDefault();
        }
      });
      return $card;
    } else {
      $("#titleModal").text(
        "PROVOACĂ STREAMERUL FAVORIT LA CEL MAI DISTRACTIV CHALLENGE!"
      );
      $("#infoModal").text("Voturile pentru challenge se vor reseta periodic.");
      const cardHtml = `
      <div class="col-lg-4 card-wrapp ${streamer.votes === -1 ? "_pe" : ""}">
          <div class="card card-custom ${
            streamer.votes === -1 ? "voted-no" : ""
          }">
              <div class="card-body text-center">
                  <p class="card-text text top-left">${
                    streamer.username === "PĂCĂNELA" ||
                    streamer.username === "DUDY"
                      ? "Indisponibil"
                      : "Votează cu" + " " + `${streamer.username}`
                  }</p>
                  <div class="card-image" style="background-image:url(${imgSrc})"></div>
                  <h6 class="card-title text bottom-right">${
                    streamer.votes === -1
                      ? "Nu se poate vota"
                      : `Voturi: ${streamer.votes}`
                  }</h6>
              </div>
          </div>
      </div>
  `;
      const $card = $(cardHtml);

      $card.find(".card-custom").css("background", bgImage);
      $card
        .find(".card-custom.voted-no")
        .css("pointer-events", "none; !important");

      $card.click(function (e) {
        $("#messageContainer").empty();
        if (streamer.votes <= -1 && streamer.status !== "false") {
          showMessage("nu se poate vota cu", streamer, imgSrc).show();
          e.preventDefault();
          $("#no-button").hide();
          $("#yes-button").text("Continuă");
          $("#yes-button").one("click", function () {
            $("#messageContainer").hide();
          });
          return;
        }
        if (userToCheck && voted === "yes") {
          showMessage("ai votat deja", streamer, imgSrc).show();
          $("#btnIsVoted").one("click", function () {
            $("#messageContainer").hide();
          });
          return;
        } else {
          showMessage("dorești sa votezi cu", streamer, imgSrc).show();
          voteForStreamer($card, streamer);
          e.preventDefault();
        }
      });
      return $card;
    }
  }

  function updateButtonBehavior(optin, voted) {
    if (!userToCheck) {
      // Case 1: No user logged in, show "Înregistrează-te"
      actionButton.text("Înregistrează-te");
      actionButton.off("click").on("click", function () {
        window.parent.location.href = "https://casino.netbet.ro/inregistrare";
      });
    } else if (userToCheck === "testCozmin2") {
      // Case 3: User logged in but not opted in (e.g., testCozmin2), show "Intră în luptă"
      if (!optin) {
        actionButton.text("Intră în luptă");
        actionButton.off("click").on("click", function (e) {
          optIn(); // Call the opt-in functionality
          e.preventDefault();
        });
      } else {
        actionButton.text("Intră în luptă");
      }
    } else if (userToCheck === "testCozmin") {
      // Case 2: User is "testCozmin", show "Votează Streamerul" or "Vezi Challenge"
      if (voted === "yes" || !isVotingAllowed) {
        actionButton.text("Vezi Challenge");
        actionButton.attr("data-bs-toggle", "modal");
        actionButton.attr("data-bs-target", "#cardsModal");
        actionButton.off("click"); // Remove any onClick function
      } else {
        actionButton.text("Votează Streamerul");
        actionButton.attr("data-bs-toggle", "modal");
        actionButton.attr("data-bs-target", "#cardsModal");
        actionButton.off("click"); // Remove any onClick function
      }
    }
  }
  fetchDataUser();
  fetchDataStreamers();

  function showMessage(message, item, imgSrc) {
    if (!isVotingAllowed) {
      const messageHtml = `
<div class="card-message col-lg-4 col-md-8 col-sm-8">
<div class="card">
  <div class="card-header">
   <div class="card-picture">
   <img src="${imgSrc}">
   </div>
   <h6 class="card-text _text-left">poziție: #${item.ranking}</h6>
   <h5 class="card-title text-uppercase m-0">${
     item.status == "" ? `${item.status}` : `${item.username}`
   }</h5>
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
      if (userToCheck && voted === "yes") {
        const messageHtml = `
        <div class="card-message col-lg-4 col-md-8 col-sm-8">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title text-center w-75 pt-3 mx-auto">
              ${message}
            </h4>
            <div class="btn-wrapp d-flex justify-content-center gap-3 py-3">
              <button type="button" id="btnIsVoted" class="btn btn-danger w-25">Închide</button>
            </div>
          </div>
        </div>
        </div>
        `;
        return $("#messageContainer").append(messageHtml);
      }
      const messageHtml = `
<div class="card-message col-lg-4 col-md-8 col-sm-8">
<div class="card">
  <div class="card-header">
   <div class="card-picture">
   <img src="${imgSrc}">
   </div>
   <h6 class="card-text _text-left">pozitie: #${item.ranking}</h6>
   <h5 class="card-title text-uppercase m-0">${item.username}</h5>
   <h6 class="card-text _text-right">${
     item.votes === -1 ? " " : `Voturi: ${item.votes}`
   }</h6>
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
  async function voteStreamer() {
    if (userToVote !== null) {
      // Simulate updating the mock data for the streamer that was voted for
      let votedStreamer = mockDataStreamers.find(
        (streamer) =>
          streamer.username.toLowerCase() === userToVote.toLowerCase()
      );

      if (votedStreamer) {
        // Increment the vote count for the selected streamer
        if (votedStreamer.votes >= 0) {
          votedStreamer.votes += 1;
        } else {
          // If voting is disabled for this streamer (votes == -1), prevent voting
          console.error("Voting is not allowed for this streamer.");
          return;
        }

        // Simulate updating the "voted" status of the user
        let user = mockDataUser[0];
        user.voted = "yes"; // Update the user status as having voted

        // Log the vote action to the console
        console.log(`Vote recorded for streamer: ${votedStreamer.username}`);
        console.log(
          `Updated votes for ${votedStreamer.username}: ${votedStreamer.votes}`
        );

        // Update the UI to show that the user has voted and disable further voting
        $(".card-wrapp").addClass("voted");
        $(".card-wrapp")
          .not(`.card-wrapp[data-streamer="${userToVote}"]`)
          .css("filter", "grayscale(1)");
        alert(`You voted for ${votedStreamer.username}!`);

        // Optionally, reload or refresh the UI to reflect changes
        setTimeout(() => {
          window.location.reload(); // Simulate refreshing the page or UI
        }, 1500);
      } else {
        console.error("Streamer not found in mock data.");
      }
    } else {
      console.error("userToVote is null. Set a valid user to vote for.");
    }
  }

  function voteForStreamer($card, streamer) {
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
      $card.addClass("selected");
      $(".card-wrapp").not($card).css("filter", "grayscale(1)");
      $card.find(".card-custom").addClass("voted");
      $("#messageContainer").hide();
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    });
    $("#no-button").on("click", () => {
      $("#messageContainer").hide();
    });
  }

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
      $(this).attr("loading", "lazy");
    });
  }

  generetaDataSlider();

  function generateGames(allGames) {
    const gameImagesContainer = $("#gameImages");
    const isDesktop = window.innerWidth > 480;
    const maxGamesToShow = isDesktop ? allGames.length : 12;

    allGames.slice(0, maxGamesToShow).forEach((gameName) => {
      const img = $("<img>")
        .attr(
          "src",
          `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3C/svg%3E`
        )
        .attr(
          "data-src",
          `https://img.netbet.ro/cdn-cgi/image/q=90,w=214,f=webp//gms/games/casino_new/preview/${gameName}.jpg`
        )
        .attr("alt", gameName)
        .attr("loading", "lazy")
        .attr(
          "srcset",
          `https://img.netbet.ro/cdn-cgi/image/q=90,w=214,f=webp//gms/games/casino_new/preview/${gameName}.jpg 214w`
        );
      const link = $("<a>")
        .addClass("scroll-item-game")
        .attr("href", `https://casino.netbet.ro/play/${gameName.slice(6, -3)}`)
        .append(img);
      link.attr("target", "_parent");
      gameImagesContainer.append(link);
    });
  }
  generateGames(gamesArray);

  const usersTableOptions = {
    autoWidth: false,
    aaSorting: false,
    responsive: false,
    pageLength: 5,
    paginate: false,
    info: false,
    searching: false,
    language: false,
    columnDefs: [
      {
        width: "10%",
        targets: 0,
      },
      {
        width: "60%",
        targets: 1,
      },
      {
        width: "15%",
        targets: 2,
      },
    ],
  };

  $("#usersTable").DataTable(usersTableOptions);

  $(".dataTables_filter input").attr("placeholder", "Search here...").css({
    width: "200px",
    display: "inline-block",
    "font-size": "0.7em",
    padding: "0.3em 0.7em",
    outline: "none",
  });

  $('[data-toggle="tooltip"]').tooltip();

  $("#openModalButton").click(openYoutubeModal);

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

$(window).resize(function () {
  gameImagesContainer.empty();
  updateContent();
  generateGames(objData);
});

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
    rotate: 5,
    depth: 30,
    stretch: 5,
    modifier: 2,
    slideShadows: true,
  },
});

swiperStr.el.addEventListener("mouseover", function () {
  swiperStr.autoplay.stop();
});

swiperStr.el.addEventListener("mouseleave", function () {
  swiperStr.autoplay.start();
});

function updateContent() {
  var screenWidth = $(window).width();
  var netbetSpan = $("#changeWord");
  if (screenWidth <= 480) {
    netbetSpan.text("În partea de jos");
  } else {
    netbetSpan.text("În stânga");
  }
}
