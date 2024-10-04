// Configuration Variables
const token = "2f97bb641f2096c1e98a723c249a6ece";
const url = "https://qaadmin.livepartners.com/api/streaming/";

const username = "lo";
const netbet_id = 35151267;

const $loading = $(".loading");
const $optInBtn = $("#optin-btn");
const $optOutBtn = $("#optout-btn");
const $message = $("#message");
const $actionButton = $(".btn.desktop");
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
  quikanu: "./assets/icons_table/quikanu.webp",
  aparatepacaneleslots: "./assets/icons_table/aps.webp",
  fury: "./assets/icons_table/fury.webp",
  stero: "./assets/icons_table/stero.webp",
  sorin: "./assets/icons_table/sorin.webp",
};

// prevent multiple rapid API calls
function debounce(func, delay) {
  let debounceTimer;
  let rejectLastPromise;
  return function (...args) {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }
    if (rejectLastPromise) {
      rejectLastPromise("Debounced");
    }
    return new Promise((resolve, reject) => {
      rejectLastPromise = reject;
      debounceTimer = setTimeout(() => {
        func.apply(this, args).then(resolve).catch(reject);
      }, delay);
    });
  };
}
// Update button logic
function updateActionButton(userExists) {
  if (!username || !netbet_id) {
    // Case 1: No username or netbet_id - "ÎNREGISTREAZĂ-TE"
    $actionButton.replaceWith(`
      <a href="https://casino.ro/auth">
        <button class="btn desktop shape pointer">
          <span></span>ÎNREGISTREAZĂ-TE
        </button>
      </a>
    `);
  } else if (username && netbet_id && !userExists) {
    // Case 2: Username and netbet_id exist, but user not in table - "Joacă Acum"
    $actionButton.replaceWith(`
      <a href="https://casino.ro/play">
        <button class="btn desktop shape pointer">
          <span></span>Joaca si Castiga Puncte
        </button>
      </a>
    `);
  } else if (userExists) {
    // Case 3: User exists in table - "Vezi Tabel"
    $actionButton.replaceWith(`
      <button class="btn desktop shape pointer">
        <span></span>urmareste tabelul
      </button>
    `);
  }
}
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
    return starIcons + "<span><img src='./assets/wanted.webp'></span>";
  }
  return starIcons;
}

// create table for streamers
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

// Fetch User Data and Check if the Player Exists
async function fetchDataUsers() {
  try {
    const response = await $.ajax({
      url: url + "data/0",
      type: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!response || !Array.isArray(response.data)) {
      console.error("Invalid or missing data in response");
      return [];
    }

    const totalUsers = response.data.length;
    console.log(totalUsers, "total users");
    const currentUserIndex = response.data.findIndex(
      (player) => player.id === netbet_id
    );

    console.log(currentUserIndex, "currentUserIndex");
    const isUserInTable = currentUserIndex !== -1;
    console.log(isUserInTable, "isUserInTable");
    console.log(response, "repsone");
    const top7 = response.data.slice(0, 7);
    const top4 = response.data.slice(0, 4);
    const last3 = response.data.slice(-3);
    const last4 = response.data.slice(-4);

    let combinedUsers = [];

 // Case 1: User in the first place
 if (currentUserIndex === 0) {
  console.log("1");
  combinedUsers = [
    ...response.data.slice(currentUserIndex, currentUserIndex + 1), // first place
    ...response.data.slice(1, 8),
    ...last3,
  ];

// Case 2: User in the top 3
} else if (currentUserIndex > 0 && currentUserIndex <= 2) {
  console.log("2");
  combinedUsers = [...top7, ...last3];

// Case 3: User in the second-to-last position
} else if (currentUserIndex === totalUsers - 2) {
  console.log("3");
  combinedUsers = [...top7, ...last3];

// Case 4: User in the last place
} else if (currentUserIndex === totalUsers - 1) {
  console.log("4");
  const neighbors = response.data.slice(
    Math.max(0, currentUserIndex),
    currentUserIndex
  );
  combinedUsers = [...top7, ...neighbors, ...last3];

// Case 5: User in the last 3 (including last 2 or last)
} else if (currentUserIndex >= totalUsers - 3) {
  console.log("5");
  combinedUsers = [...top7, ...last3];

// Case 6: User in the middle but near the top (4th to 10th place)
} else if (currentUserIndex >= 3 && currentUserIndex <= 10) {
  console.log("6");
  const neighbors = response.data.slice(
    Math.max(0, currentUserIndex - 1),
    currentUserIndex + 2
  );
  combinedUsers = [
    ...response.data.slice(0, 3), // Top 3
    ...neighbors,                 // User and neighbors
    ...last3,                     // Last 3
  ];

// Case 7: User in the middle but near the bottom (11th to 3rd-to-last)
} else if (currentUserIndex > 10 && currentUserIndex < totalUsers - 3) {
  console.log("7");
  const neighbors = response.data.slice(
    Math.max(0, currentUserIndex - 1),
    currentUserIndex + 2
  );
  combinedUsers = [
    ...response.data.slice(0, 4), // Top 3
    ...neighbors,                 // User and neighbors
    ...last4,                     // Last 4
  ];

// Case 8: User is not in the table, but part of a special group (e.g., VIP)
} else if (!isUserInTable) {
  console.log("8");
  const neighbors = response.data.slice(1, 4);
  combinedUsers = [...response.data.slice(0, 1), ...neighbors, ...last3];

// General Case: User somewhere in the middle
} else {
  console.log("9");
  const neighbors = response.data.slice(
    Math.max(0, currentUserIndex - 1),
    currentUserIndex + 2
  );
  combinedUsers = [...top7, ...neighbors, ...last3];
}
    combinedUsers = [...new Set(combinedUsers)];
    console.log(combinedUsers);
    const userExists = response.data.some((player) => player.id === netbet_id);
    toggleButtons(userExists);
    console.log(userExists, "userExists");
    updateActionButton(userExists);
    return combinedUsers.map((player) => {
      const actualRanking =
        response.data.findIndex((p) => p.id === player.id) + 1;
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

// create table for users
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

// Fetch Streamers Data
async function fetchStreamerData() {
  try {
    const response = await $.ajax({
      url: url + "streamers",
      type: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
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
  try {
    $loading.show();
    await $.ajax({
      url: url + "optin/" + username,
      type: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    $message.text(`Player ${username} has been successfully added.`);
    await reloadUserTable();
  } catch (error) {
    if (error.status === 409) {
      $message.text(`Player ${username} already exists in the table.`);
    } else {
      $message.text("Error adding player. Please try again later.");
    }
  } finally {
    $loading.hide();
  }
}

// Opt-Out Player
async function optOutPlayer(username) {
  try {
    $loading.show();
    await $.ajax({
      url: url + "optout/" + username,
      type: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    $message.text(`Player ${username} has been successfully removed.`);
    await reloadUserTable();
  } catch (error) {
    $message.text("Error removing player. Please try again later.");
  } finally {
    $loading.hide();
  }
}

async function reloadUserTable() {
  try {
    const userData = await fetchDataUsers();
    const streamerData = await fetchStreamerData();
    generateTables(userData, streamerData);
  } catch (error) {
    console.error("Error reloading user table:", error);
  }
}

// Enable or Disable Buttons based on player existence
function generateTables(userData, streamerData) {
  let tableDataUser = $("#bodyUser");
  let tableDataStreamer = $("#bodyStreamer");
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

  // Init DataTables
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

  // Move pagination
  $("#usersTable_paginate").detach().appendTo("._users");
  $("#streamersTable_paginate").detach().appendTo("._streamers");
}
function toggleButtons(isOptedIn) {
  $optInBtn.prop("disabled", isOptedIn);
  $optOutBtn.prop("disabled", !isOptedIn);
}
// Initialize on document ready
$(document).ready(function () {
  reloadUserTable();

  $optInBtn.click(debounce(() => optInPlayer(username), 400));
  $optOutBtn.click(debounce(() => optOutPlayer(username), 400));
});
