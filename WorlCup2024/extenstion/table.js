// Function to fetch data from the API
async function fetchData() {
  try {
    const response = await fetch("https://casino-promo.netbet.ro/scripts/utils/leaderboard_euro2024.php");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    if (responseData && responseData.status === true && responseData.data && Array.isArray(responseData.data.data)) {
      const playerIds = responseData.data.data.map(player => player.player_id);
      console.log(playerIds); // Log all player IDs
      console.log(responseData.data);
      return {
        data: responseData.data.data,
        playerIds: playerIds
      };
    } else {
      throw new Error("Invalid response data format");
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return {
      data: null,
      playerIds: []
    };
  }
}

// Function to get cookie value by name
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
          c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) === 0) {
          return c.substring(nameEQ.length, c.length);
      }
  }
  return null;
}
function initializeDataTable(selector, data) {
  return new DataTable(selector, {
    data: data,
    columns: [
      {
        title: "Participanți",
        data: "username",
      },
      {
        title: "Status",
        data: "status",
        render: function (data, type, row, meta) {
          console.log(data,"datarender")
          if (data === 0) {
            return '<span><img src="./png/thumbs/thumb-up2.png" class="thumb-icon" alt="Thumb Up"> </span>';
          } else {
            return '<span><img src="./png/thumbs/thumb-down2.png" class="thumb-icon" alt="Thumb Down"></span>';
          }
        },
      },
    ],
    paging: true,
    info: true,
    lengthChange: false,
    aaSorting: true,
    responsive: true,
    pageLength: window.innerWidth < 991 ? 8 : 10,
    paginate: true,
    searching: false,
    order: [[0, "asc"]],
  });
}
async function initializePage() {
  // Fetch data from API
  const fetchedData = await fetchData();

  if (fetchedData && fetchedData.data && Array.isArray(fetchedData.data)) {
    // Extract player ID from cookies
    let player_id = parseInt(getCookie("player_id")); // Parse the player ID as an integer
    console.log("Player ID from cookie:", player_id); // Log player ID

    const tableData = fetchedData.data.map(item => ({
      ...item,
      highlight: item.player_id === player_id // Add a flag to highlight the row if player IDs match
    }));
    console.log("Table data:", tableData);

    // Sort data: highlighted player first, then by username
    tableData.sort((a, b) => {
      if (a.highlight !== b.highlight) {
        return b.highlight - a.highlight; // Sort by highlight status (highlighted players first)
      } else {
        return a.username.localeCompare(b.username); // If highlight status is the same, sort by username
      }
    });

    // Set cookie if playerId is not found in cookies
    if (!player_id && tableData.length > 0) {
      player_id = tableData[0].player_id;
      document.cookie = `player_id=${player_id}`;
    }

    // Extract usernames
    const usernames = tableData.map(item => item.username);
    console.log("Usernames:", usernames);

    // Initialize DataTable with playerId
    const dataTable = initializeDataTable("#exampleS", tableData);

    // Highlight the row corresponding to the current player
    tableData.forEach((item, index) => {
      if (item.highlight) {
        dataTable.row(index).node().classList.add('highlight'); // Add a CSS class to highlight the row
      }
    });
  } else {
    console.log("No valid data available");
  }
}
initializePage();