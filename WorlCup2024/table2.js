// Function to fetch data from the API
async function fetchData() {
  try {
    const response = await fetch("https://casino-promo.netbet.ro/scripts/utils/leaderboard_euro2024.php");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    if (responseData && responseData.status === true && responseData.data && Array.isArray(responseData.data.data)) {
      console.log(responseData,"responseData")
      return responseData.data.data;
    } else {
      throw new Error("Invalid response data format");
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
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

// Function to initialize the DataTable
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
        render: function (data) {
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
    order: [
      [0, "asc"]
    ],
  });
}

// Main function to initialize the page
async function initializePage() {
  // Fetch data from API
  const fetchedData = await fetchData();
  if (!fetchedData) {
    console.error("No data fetched");
    return;
  }

  const tableData = fetchedData.map(item => ({
    username: item.username,
    status: item.status,
    player_id: item.player_id
  }));
console.log(tableData,"tableData")
  // Get the user login status and ID from cookies
  let userLoginCheck = getCookie("netbet_login");
  let qNetbet_id = getCookie("netbet_id");

  // Ensure qNetbet_id is of the same type as items in tableData
  qNetbet_id = Number(qNetbet_id); // or String(qNetbet_id) depending on the type of player_id

  // Initialize the DataTable with fetched data
  const dataTable = initializeDataTable("#exampleS", tableData);

  // Check if the user is in the fetched data
  const userInData = tableData.some(item => item.player_id === qNetbet_id);

  if (userInData) {
    tableData.forEach((item, index) => {
      if (item.player_id === qNetbet_id) {
        // Move the user's row to the top
        const userRow = tableData.splice(index, 1)[0];
        tableData.unshift(userRow);
        
        // Re-initialize the DataTable with updated data
        dataTable.clear();
        dataTable.rows.add(tableData);
        dataTable.draw();

        // Add the "highlight" class to the moved row
        const row = dataTable.row(0).node();
        $(row).addClass("highlight");
      }
    });
  }

  console.log(userLoginCheck, "userLoginCheck");
  console.log(qNetbet_id, "qNetbet_id");
  console.log(userInData, "userInData");
}

// Initialize the page
initializePage();