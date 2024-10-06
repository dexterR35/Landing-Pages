// Configuration Variables

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

const token = "2f97bb641f2096c1e98a723c249a6ece";
const url = "https://qaadmin.livepartners.com/api/streaming/";

// 39356008	testcozminn	
// 40302497	testmarian2024	
// 37857769	TestCristianP	
// 39438169	test1686042757550	
// 35115686	testmar	
// 39183753	testcozminnou	
// const username = getCookie('netbet_login');
// const netbet_id = getCookie("netbet_id");

let username = "testcozminn"; 
let netbet_id = 39356008;

console.log("Final Username:", username);
console.log("Final NetBet ID:", netbet_id);
console.log(typeof(username), typeof(netbet_id), username, netbet_id);   // Should output: testuser 12345
let isLoading = false;

const $loading = $(".loading");
// const $optInBtn = $("#optin-btn");
const $optOutBtn = $("#optout-btn");
const $actionButton = $("#actionButton");
const streamerImages = {
  pacanela: "./assets/icons_table/pacanela.webp",
  gamblers: "./assets/icons_table/gamblers.webp",
  andyvip: "./assets/icons_table/andyvip.webp",
  quikanu: "./assets/icons_table/quikanu.webp",
  alexmihai: "./assets/icons_table/alexmihai.webp",
  cosmina: "./assets/icons_table/cosmina.webp",
  edi: "./assets/icons_table/edi.webp",
  danutu: "./assets/icons_table/danutu.webp",
  razvan: "./assets/icons_table/razvan.webp",
  anna: "./assets/icons_table/anna.webp",
  aparatepacaneleslots: "./assets/icons_table/aps.webp",
  fury: "./assets/icons_table/fury.webp",
  stero: "./assets/icons_table/stero.webp",
  sorin: "./assets/icons_table/sorin.webp",
};

function showModal(type, title, message, callback) {
  if ($(".modal").length) {
    $(".modal").remove(); 
  }
  const modalHtml = `
    <div class="modal">
      <div class="modal-content">
        <h3>${title}</h3>
        <p>${message}</p>
        <div class="modal-buttons">
        ${
            type === "optOut" || type === "optIn"
              ? '<button class="btn yes-btn">Yes</button><button class="btn no-btn">No</button>'
              : '<button class="btn ok-btn">OK</button>'
          }
        </div>
      </div>
    </div>
  `;

  $("body").append(modalHtml);

  if (type === "optOut" || type === "optIn") {
    $(".yes-btn").click(() => {
      $(".modal").remove();
      callback(true);
    });
    $(".no-btn").click(() => {
      $(".modal").remove();
      callback(false);
    });
  } else {
    $(".ok-btn").click(() => {
      $(".modal").remove();
    });
  }
}
// showModal("succes","OptOut","message","trrue");
// Format Points
function formatPoints(points) {
  if (points === null || points === undefined) {
    return "0";
  }
  points = Number(points);
  if (isNaN(points)) {
    return "0";
  }
  if (points < 1000) {
    return points.toFixed(0);
  } else if (points < 1000000) {
    return (points / 1000).toFixed(1) + "K";
  } else if (points < 1000000000) {
    return (points / 1000000).toFixed(1) + "M";
  } else {
    return (points / 1000000000).toFixed(1) + "B";
  }
}

// Generate stars based on ranking
function generateStars(ranking) {
  let stars;
  if (ranking === 1) {
    stars = 5;
  } else if (ranking <= 5) {
    stars = 4;
  } else if (ranking <= 9) {
    stars = 3;
  } else if (ranking <= 13) {
    stars = 2;
  } else {
    stars = 1;
  }
  let starIcons = "&#9733;".repeat(stars);
  if (ranking === 1) {
    return starIcons + "<span><img src='./assets/stuff/wanted.webp'></span>";
  }
  return starIcons;
}

// Prevent multiple rapid API calls
function debounce(func, delay) {
  let debounceTimer;
  return function (...args) {
    const context = this;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(context, args), delay);
  };
}

function updateActionButton(userExists, streamerExists) {
  let buttonHtml = "";
  if (!username && !netbet_id){
    // Case 1: No username or netbet_id - Show Register Button
    buttonHtml = `
      <a href="https://casino.netbet.ro/auth">
        <button class="btn desktop shape pointer">
          <span></span>ÎNREGISTREAZĂ-TE
        </button>
      </a>
    `;
  } else if(username && netbet_id && !userExists && !streamerExists) {
    // Case 2: User exists in the system, but not in the table - Show Join Table Button
    buttonHtml = `
      <button class="btn desktop shape pointer join-table" id="joinTable">
        <span></span>Joacă și Câștigă Puncte
      </button>
    `;
  } else if (userExists || streamerExists) {
    // Case 3: User exists in the table - Show View Table Button
    buttonHtml = `
      <button class="btn desktop shape pointer view-table" id="viewTable">
        <span></span>Urmărește Tabelul
      </button>
    `;
  }

  $actionButton.html(buttonHtml);

  // Add functionality to buttons
  $("#joinTable").click(() => {
    // Show confirmation modal
    showModal(
      "optIn", // You can name this type as optIn for differentiation
      "Join Table",
      "Do you want to join the table and start earning points?",
      (confirmed) => {
        if (confirmed) {
          // If "Yes" clicked, opt-in player
          optInPlayer(username);
        }
        // If "No" clicked or modal closed, do nothing and modal will be closed automatically
      }
    );
  });
  $("#viewTable").click(() =>
    $("body").animate({ scrollTop: $("#section3").offset().top }, 500)
  );
}

// Create table for streamers
function createTableStreamers(streamer) {
  let displayName;
  switch (streamer.username.toLowerCase()) {
    case "testpacanela":
      displayName = "pacanela";
      break;
    case "florian95954":
      displayName = "gambler s";
      break;
    case "andy202202":
      displayName = "andy vip";
      break;
    case "cazino265ro":
      displayName = "quikanu";
      break;
    case "psqcasinos":
      displayName = "alex mihai";
      break;
    case "supercazino1":
      displayName = "cosmina";
      break;
    case "supercazino2":
      displayName = "edi";
      break;
    case "supercazino3":
      displayName = "danutu";
      break;
    case "supercazino4":
      displayName = "razvan";
      break;
    case "testdenisc19":
      displayName = "aparate pacanele slots";
      break;
    case "takemyfury":
      displayName = "fury";
      break;
    case "ster0iabanii":
      displayName = "stero";
      break;
    case "annuskaa":
      displayName = "anna";
      break;
    case "sisha1487":
      displayName = "sorin";
      break;
    default:
      displayName = "noName";
  }

  const normalizedDisplayName = displayName.toLowerCase().replace(/\s/g, "");
  const imgSrc = streamerImages[normalizedDisplayName];
  const stars = generateStars(streamer.ranking);
  const highlightClass = streamer.id === netbet_id ? "highlight-row" : "";

  const tableHtml = `
    <tr class="parent-table ${highlightClass} pointer">
        <td class="parent-position ps">#${streamer.ranking}</td>
        <td>
          <div class="d-flex-start flex-row parent-avatar">
            <div class="avatar-table ">
              <img src="${imgSrc}" alt="pict_table" class="pict_table">
            </div>
            <div class="parent-name">
              <p class="font-tabel">${displayName}</p> 
              <p class="font-tabel stars">${stars}</p> 
            </div>
          </div>
        </td>
        <td class="parent-points ps">${streamer.points}</td>
    </tr>`;
  return tableHtml;
}

// Fetch User Data and Check if Player Exists
async function fetchDataUsers() {
  try {
    const response = await $.ajax({
      url: url + "data/0",  
      type: "GET",  
      headers: {
        Authorization: "Bearer " + token,  // Authorization header with bearer token
      },
    });
    // Check if the response is 
    if (!response || !Array.isArray(response.data)) {
      console.error("Invalid or missing data in response");
      return [];
    }

    const totalUsers = response.data.length;
    console.log(totalUsers, "totalUsers");
    console.log(response.data, "response.data");
    // Find the current user's index in the response data using netbet_id
    const currentUserIndex = response.data.findIndex(
      (player) => Number(player.id) === netbet_id
    );
    // Check if the user exists in the data (not equal to -1)
    const isUserInTable = currentUserIndex !== -1;
    console.log(isUserInTable, "isuserintable");
    // Log the position of the current user (+1 for ranking system)
    console.log(currentUserIndex + 1, "currentUserIndex + 1");

    const top3 = response.data.slice(0, 3); 
    const top4 = response.data.slice(0, 4);  
    const top7 = response.data.slice(0, 7);  
    const top10 = response.data.slice(0, 10); 
    const last3 = response.data.slice(-3);  
    const last4 = response.data.slice(-4);  
    let combinedUsers = [];  
    // Different cases 
    if (currentUserIndex === 0) {
      console.log("case1");
      // Case 1: If the user is at the top (index 0), include the top 10 users
      combinedUsers = [...top10];
    } else if (currentUserIndex > 0 && currentUserIndex <= 2) {
      console.log("case2");
      // Case 2: If the user is within the top 3, include the top 7 and last 3 users
      combinedUsers = [...top7, ...last3];
    } else if (currentUserIndex >= totalUsers - 2) {
      console.log("case3");
      // Case 3: If the user is near the bottom (last 2), include the top 7 and last 3 users
      combinedUsers = [...top7, ...last3];
    } else if (currentUserIndex >= 3 && currentUserIndex <= 10) {
      console.log("case4");
      // Case 4: If the user is between 4th and 10th place, include top 3, neighbors, and last 3 users
      const neighbors = response.data.slice(
        currentUserIndex - 1,
        currentUserIndex + 2
      );
      combinedUsers = [...top3, ...neighbors, ...last3];
    } else if (currentUserIndex > 10 && currentUserIndex < totalUsers - 3) {
      console.log("case5");
      // Case 5: If the user is beyond 10th place but not near the bottom, include top 4, neighbors, and last 3 users
      const neighbors = response.data.slice(
        currentUserIndex - 1,
        currentUserIndex + 2
      );
      combinedUsers = [...top4, ...neighbors, ...last3];
    } else if (!isUserInTable) {
      console.log("case6");
      // Case 6: If the user is not found in the table, include top 10 users by default
      combinedUsers = [...top7, ...last3];
    } else {
      console.log("case7 default");
      // Default case: Include top 7, neighbors, and last 3 users
      const neighbors = response.data.slice(
        currentUserIndex - 1,
        currentUserIndex + 2
      );
      combinedUsers = [...top7, ...neighbors, ...last3];
    }
    // Remove any duplicate users from the combined list
    combinedUsers = [...new Set(combinedUsers)];
    console.log(combinedUsers, "combinedUsers");
    // Update action button 
    updateActionButton(isUserInTable);
    return combinedUsers.map((player) => {
      // Find actual ranking of the player in the list
      const actualRanking =
        response.data.findIndex((p) => p.id === player.id) + 1;
      // Map player details, replace username if it's the current user, format points
      return {
        ranking: actualRanking,
        id: player.id,
        username: player.id === netbet_id ? username : player.username,
        points: formatPoints(player.points),
      };
    });
  } catch (error) {
    console.error("Error fetching player data:", error);
  }
}

// Create table for users
function createTableUsers(item) {
  const highlightClass = item.id === netbet_id ? "highlight-row" : "";
  const tableAHtml = `
    <tr class="parent-table ${highlightClass} pointer">
        <td class="parent-position ps">#${item.ranking}</td>
        <td>
          <div class="parent-name">
            <p class="ps">${item.username}</p>
          </div>
        </td>
        <td class="parent-points ps">${item.points}</td>  
    </tr>`;
  return tableAHtml;
}
// Fetch Streamers
async function fetchStreamerData() {
  try {
    const response = await $.ajax({
      url: url + "streamers",
      type: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    if (!response || !response.data) {
      console.error("Invalid streamer data");
      return [];
    }
    console.log(response,"streamers")
    return response.data.map((streamer, index) => ({
      ranking: index + 1,
      id: streamer.id,
      username: streamer.username,
      points: formatPoints(streamer.points),
    }));
  } catch (error) {
    console.error("Error fetching streamer data:", error);
  }
}

// Opt-In Player 
async function optInPlayer(username) {
  if (isLoading) return;
  isLoading = true;
  try {
    $loading.show();
    await $.ajax({
      url: url + "optin/" + username,
      type: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    showModal(
      "succes",
      "Player New added",
      `Player ${username} added ok`
    );
    updateActionButton(true);
  } catch (error) {
    if (error.status === 409) {
      showModal(
        "error",
        "Player Exists",
        `Player ${username} is already in the table.`
      );
      updateActionButton(true);
    } else {
      showModal(
        "error",
        "Error",
        "Error adding player. Please try again later."
      );
       updateActionButton(false);  
    }
  } finally {
    isLoading = false;
    $loading.hide();
  }
}

// Opt-Out 
async function optOutPlayer(username) {
  if (isLoading) return; 
  isLoading = true;
  
  showModal(
    "optOut",
    "Opt-Out",
    `Are you sure you want to remove player ${username}?`,
    async (confirmed) => {
      if (!confirmed) {
        isLoading = false; 
        return;
      }
      try {
        $loading.show();
        await $.ajax({
          url: url + "optout/" + username,
          type: "DELETE",
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        showModal(
          "success",
          "Success",
          `Player ${username} has been successfully removed.`
        );
        updateActionButton(false);
      } catch (error) {
        showModal(
          "error",
          "Error",
          "Error removing player. Please try again later."
        );
      } finally {
        isLoading = false;
        $loading.hide();
      }
    }
  );
}

// Generate tables for users and streamers
function generateTables(userData, streamerData) {
  const tableDataUser = $("#bodyUser");
  const tableDataStreamer = $("#bodyStreamer");
  tableDataUser.empty();
  tableDataStreamer.empty();
  userData.forEach((user, index) => {
    const userRow = createTableUsers(user, index + 1);
    tableDataUser.append(userRow);
  });
  streamerData.forEach((streamer) => {
    const streamerRow = createTableStreamers(streamer);
    tableDataStreamer.append(streamerRow);
  });
  //  DataTable initialization
  $("#usersTable").DataTable({
    autoWidth: false,
    aaSorting: false,
    responsive: false,
    pageLength: 10,
    paginate: true,
    info: false,
    searching: false,
    lengthChange: false,
    language: false,
    pagingType: "simple_numbers",
    columnDefs: [
      { width: "10%", targets: 0, className: "dt-center" },
      { width: "45%", targets: 1, className: "dt-center" },
      { width: "30%", targets: 2, className: "dt-right" },
    ],
    destroy: true,
  });

  $("#streamersTable").DataTable({
    autoWidth: false,
    aaSorting: false,
    responsive: false,
    pageLength: 7,
    paginate: true,
    language: false,
    lengthChange: false,
    info: false,
    searching: false,
    columnDefs: [
      { width: "8%", targets: 0 },
      { width: "60%", targets: 1 },
      { width: "14%", targets: 2 },
    ],
    destroy: true,
  });

  $("#usersTable_paginate").detach().appendTo("._users");
  $("#streamersTable_paginate").detach().appendTo("._streamers");
}


function toggleButtons(isOptedIn) {
  $optOutBtn.prop("disabled", !isOptedIn);
}

async function reloadUserTable() {
  try {
    const userData = await fetchDataUsers();
    const streamerData = await fetchStreamerData();
    
    // Check if the streamer exists in the streamerData list
    const streamerExists = streamerData.some(
      (streamer) => streamer.id === netbet_id
    );
    console.log(streamerExists,"streamerExists")
    // Check if the user exists in the user data list
    const userExists = userData.some(
      (user) => user.id === netbet_id
    );
    console.log(userExists,"userExists")
    // Pass both userExists and streamerExists to the updateActionButton function
    updateActionButton(userExists, streamerExists);
    generateTables(userData, streamerData);
    
  } catch (error) {
    console.error("Error reloading user table:", error);
  }
}

$(document).ready(function () {
  reloadUserTable();
  $optOutBtn.click(debounce(() => optOutPlayer(username), 400));
});
console.log(document.cookie,);