// Configuration Variables
const token = "2f97bb641f2096c1e98a723c249a6ece";
const url = "https://qaadmin.livepartners.com/api/streaming/";
const username = "TestCristianP";
const netbet_id = 37857769;

// jQuery Selectors
const $loading = $(".loading");
const $optInBtn = $("#optin-btn");
const $optOutBtn = $("#optout-btn");
const $message = $("#message");

// Debounce Function to prevent multiple rapid API calls
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

// Function to create table rows for users
function createTableUsers(item, userPosition) {
  const highlightClass = item.id === netbet_id ? "highlight-row" : "";
  const tableAHtml = `<tr class="parent-table ${highlightClass}">
        <td class="parent-position ps">#${userPosition}</td>
        <td class="parent-id ps">${item.id}</td>
        <td>
          <div class="parent-name">
            <p class="ps">${item.username}</p>
          </div>
        </td>
        <td class="parent-points ps">${item.points}</td>  
      </tr>`;
  return tableAHtml;
}

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
  stero:"./assets/icons_table/stero.webp"
};

// case for names
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
    default:
      displayName = streamer.username;
  }

  function convertFormattedPoints(points) {
    if (typeof points === "string") {
      let value = parseFloat(points); // Extract the numeric part
      if (points.includes("K")) {
        value *= 1000; // Convert from K to a number
      } else if (points.includes("M")) {
        value *= 1000000; // Convert from M to a number
      } else if (points.includes("B")) {
        value *= 1000000000; // Convert from B to a number
      }
      return value;
    }
    return points;
  }

  function generateStars(points) {
    // Convert formatted points to numeric form
    const numericPoints = convertFormattedPoints(points);
    
    if (numericPoints >= 1000000) { // 1M and above gets 5 stars
      return "★★★★★"; 
    } else if (numericPoints >= 500000) { // 500K to 1M gets 4 stars
      return "★★★★";
    } else if (numericPoints >= 100000) { // 100K to 500K gets 3 stars
      return "★★★";
    } else if (numericPoints >= 50000) { // 50K to 100K gets 2 stars
      return "★★";
    } else {
      return "★"; // Below 50K gets 1 star
    }
  }

  const normalizedDisplayName = displayName.toLowerCase().replace(/\s/g, "");
  imgSrc = streamerImages[normalizedDisplayName];
 // Generate stars based on points
 const stars = generateStars(streamer.points);
  const highlightClass = streamer.id === netbet_id ? "highlight-row" : "";
  const tableHtml = `<tr class="parent-table ${highlightClass}">
          <td class="parent-position ps">#${streamer.ranking}</td>
          <td>
            <div class="d-flex-start flex-row parent-avatar">
              <div class="avatar-table avatar-blue">
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
// Function to generate stars based on points

// Generate tables and populate with API data

function generateTables(userData, streamerData) {
  let tableDataUser = $("#bodyUser");
  let tableDataStreamer = $("#bodyStreamer");
  // Clear
  tableDataUser.empty();
  tableDataStreamer.empty();
  // Populate user data
  userData.forEach((user, index) => {
    const userRow = createTableUsers(user, index + 1);
    tableDataUser.append(userRow);
  });
  // Populate streamer data
  streamerData.forEach((streamer, index) => {
    const streamerRow = createTableStreamers(
      streamer,
      `./_avatar/${streamer.username.toLowerCase()}.png`
    );
    tableDataStreamer.append(streamerRow);
  });

  // Initialize DataTables
  $("#usersTable").DataTable({
    autoWidth: false,
    aaSorting: false,
    responsive: false,
    pageLength: 10,
    paginate: true,
    info: false,
    searching: true,
    lengthChange: false,
    language: false,
    pagingType: "simple_numbers",
    columnDefs: [
      { width: "10%", targets: 0 },
      //   { width: "15%", targets: 1 }, // ID column width
      { width: "45%", targets: 2 },
      { width: "30%", targets: 3 },
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
      { width: "5%", targets: 0 },
      { width: "60%", targets: 1 },
      { width: "10%", targets: 2 },
    ],
    destroy: true,
  });

  // Move pagination to custom locations
  $("#usersTable_paginate").detach().appendTo("._users");
  $("#streamersTable_paginate").detach().appendTo("._streamers");
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

    // Check if the current user (TestCristianP) exists in the table
    const userExists = response.data.some((player) => player.id === netbet_id);
    toggleButtons(userExists); // Enable/disable buttons based on user's existence
    console.log(userExists, "test");
    console.log(response, "fasfa");
    return response.data.map((player, index) => ({
      ranking: index + 1,
      id: player.id, // Add the player ID
      username: player.id === netbet_id ? username : player.username,
      points: formatPoints(player.points),
    }));
  } catch (error) {
    console.error("Error fetching player data:", error);
  }
}

// Fetch Streamer Data
async function fetchStreamerData() {
  try {
    const response = await $.ajax({
      url: url + "streamers",
      type: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(response, "streamers");
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

// Enable or Disable Buttons based on player existence
function toggleButtons(isOptedIn) {
  $optInBtn.prop("disabled", isOptedIn);
  $optOutBtn.prop("disabled", !isOptedIn);
}

// Reload the User Table
async function reloadUserTable() {
  try {
    const userData = await fetchDataUsers();
    const streamerData = await fetchStreamerData();
    generateTables(userData, streamerData);
  } catch (error) {
    console.error("Error reloading user table:", error);
  }
}

// Initialize tables on document ready
$(document).ready(function () {
  reloadUserTable();

  // Set up click events for opt-in and opt-out buttons
  $optInBtn.click(debounce(() => optInPlayer(username), 300));
  $optOutBtn.click(debounce(() => optOutPlayer(username), 300));
});
