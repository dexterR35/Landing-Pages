
// // // Function to fetch data from the API
// async function fetchData() {
//   try {
//       const response = await fetch("https://casino-promo.netbet.ro/scripts/utils/leaderboard_euro2024.php");
//       if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       return data;
//   } catch (error) {
//       console.error("Failed to fetch data:", error);
//       return null; // Return null if there's an error
//   }
// }

// function initializeDataTable(selector, data) {
//   return new DataTable(selector, {
//       data: data,
//       columns: [
//           {
//               title: "Participanți",
//               data: "username",
//           },
//           {
//               title: "Status",
//               data: "status",
//               render: function (data, type, row, meta) {
//                   return data === 0
//                       ? '<span><img src="./png/thumbs/thumb-up2.png" class="thumb-icon" alt="Thumb Up"> </span>'
//                       : '<span><img src="./png/thumbs/thumb-down2.png" class="thumb-icon" alt="Thumb Down"></span>';
//               },
//           },
//       ],
//       paging: true,
//       info: true,
//       lengthChange: false,
//       aaSorting: true,
//       responsive: true,
//       pageLength: window.innerWidth < 991 ? 8 : 10,
//       paginate: true,
//       searching: false,
//       order: [[0, "asc"]],
//   });
// }

// async function initializePage() {
//   const fetchedData = await fetchData();

//   if (fetchedData && fetchedData.status) {
//       const tableData = fetchedData.data.data.map(item => ({
//           username: item.username,
//           status: item.status
//       }));

//       initializeDataTable("#exampleS", tableData);
//   } else {
//       console.log("No data available or status is false");
//   }
// }

// initializePage();

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

function initializeDataTable(selector, data) {
  return $(selector).DataTable({
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
                return data === 1
                  ? '<span><img src="./png/thumbs/thumb-up2.png" class="thumb-icon" alt="Thumb Up"> </span>'
                  : '<span><img src="./png/thumbs/thumb-down2.png" class="thumb-icon" alt="Thumb Down"></span>';
              },
          },
      ],
      createdRow: function(row, data, dataIndex) {
          if (data.status === 1) {
              $(row).addClass('highlight');
          }
      },
      paging: true,
      info: true,
      lengthChange: false,
      responsive: true,
      pageLength: window.innerWidth < 991 ? 8 : 10,
      paginate: true,
      searching: false,
      aaSorting: false,
      ordering: false,
      // order: [[2, "desc"], [0, "asc"]], 
  });
}

function initializePage() {
  // Simulate
  const dummyData = [
    { username: "zAlayer3", status: 0, player_id: "789"},
    { username: "APlayer4", status: 0, player_id: "1014"},
    { username: "BPlayer5", status: 0, player_id: "102" },
    { username: "CPlayer3", status: 0, player_id: "789"},
    { username: "DPlayer4", status: 0, player_id: "1011"},
    { username: "EPlayer5", status: 0, player_id: "102"},
    { username: "FPlayer3", status: 0, player_id: "789"},
    { username: "zMatei playerId== ", status: 1, player_id: "123" },
      { username: "XzPlayer2", status: 0, player_id: "456" },
      { username: "ZPlayer5", status: 0, player_id: "102"},
      { username: "Player3", status: 0, player_id: "789"},
      { username: "Baebastian playerId!=", status: 0, player_id: "101"},
      { username: "WPlayer5", status: 0, player_id: "102" }
  ];

  // Simulated cookie
  document.cookie = "PlayerID=123";

  const playerId = getCookie("PlayerID");

  console.log(playerId, "playerId");

  // Add highlight flag to the data
  const tableData = dummyData.map(item => ({
      ...item,
      status: item.player_id === playerId ? 1 : 0
  }));
 console.log(tableData, "tableData");
  const sortingPlayers = tableData.sort((a, b) => b.status - a.status || a.username.localeCompare(b.username));
  console.log(sortingPlayers);

  initializeDataTable("#exampleS", tableData);
}

initializePage();