// Fetch User Data and Check if Player Exists

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
  
  const username = String("testcozminnou");  
  const netbet_id = Number("39183753");
  
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
  
      return response.data;
    } catch (error) {
      console.error("Error fetching player data:", error);
      return [];
    }
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
  
      return response.data;
    } catch (error) {
      console.error("Error fetching streamer data:", error);
      return [];
    }
  }
  
  // Combine users based on ranking and other rules
  function getCombinedUsers(userData, netbet_id, isStreamerLoggedIn) {
    const totalUsers = userData.length;
    const currentUserIndex = userData.findIndex(
      (player) => Number(player.id) === netbet_id
    );
    const isUserInTable = currentUserIndex !== -1;
  
    const top3 = userData.slice(0, 3); 
    const top4 = userData.slice(0, 4);  
    const top7 = userData.slice(0, 7);  
    const top10 = userData.slice(0, 10); 
    const last3 = userData.slice(-3);  
    const last4 = userData.slice(-4);  
    let combinedUsers = [];
  
    if (currentUserIndex === 0) {
      // Case 1: User is at the very top, show top 10 users
      combinedUsers = [...top10];
    } else if (currentUserIndex >= 1 && currentUserIndex <= 2) {
      // Case 2: User is in the top 3, show top 7 and last 3, no neighbors
      combinedUsers = [...top7, ...last3];
    } else if (currentUserIndex >= totalUsers - 3) {
      // Case 3: User is in the last 3, show top 7 and last 3, no neighbors
      combinedUsers = [...top7, ...last3];
    } else if (currentUserIndex >= 3 && currentUserIndex <= 4) {
      // Case 4: User is in top 4 or last 4, show top 4 or last 4 without neighbors
      combinedUsers = [...top4, ...last4];
    } else if (currentUserIndex >= 5 && currentUserIndex <= totalUsers - 5) {
      // Case 5: User is between top 5 and last 5, show top 4, user + neighbors, and last 3
      const neighbors = userData.slice(currentUserIndex - 1, currentUserIndex + 2);
      combinedUsers = [...top4, ...neighbors, ...last3];
    } else if (isStreamerLoggedIn) {
      // Case 6: If streamer is logged in, show top 10 or top 7 and last 3
      combinedUsers = [...top10];
    } else if (!isUserInTable) {
      // Case 7: If the user is not found in the table, show top 7 and last 4
      combinedUsers = [...top7, ...last4];
    } else {
      // Case 8: Default case, show top 7, user + neighbors, and last 3
      const neighbors = userData.slice(currentUserIndex - 1, currentUserIndex + 2);
      combinedUsers = [...top7, ...neighbors, ...last3];
    }
  
    // Remove duplicates from combinedUsers
    return [...new Set(combinedUsers)];
  }
  
  // Generate tables for users and streamers
  function generateTables(userData, streamerData, netbet_id) {
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
  
    // Initialize DataTables
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
  
  // Reload User Table and Streamer Table
  async function reloadUserTable() {
    try {
      const userData = await fetchDataUsers();
      const streamerData = await fetchStreamerData();
  
      const streamerExists = streamerData.some(
        (streamer) => streamer.id === netbet_id
      );
  
      const userExists = userData.some(
        (user) => user.id === netbet_id
      );
  
      updateActionButton(userExists, streamerExists);
  
      const combinedUsers = getCombinedUsers(userData, netbet_id, streamerExists);
      generateTables(combinedUsers, streamerData, netbet_id);
  
    } catch (error) {
      console.error("Error reloading user table:", error);
    }
  }
  
  // Helper functions (kept from your code)
  
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
  
  // Update Action Button
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
        }
      );
    });
    $("#viewTable").click(() =>
      $("body").animate({ scrollTop: $("#section3").offset().top }, 500)
    );
  }
  
  // Initialize
  $(document).ready(function () {
    reloadUserTable();
    $optOutBtn.click(debounce(() => optOutPlayer(username), 400));
  });
  
  console.log(document.cookie);
  