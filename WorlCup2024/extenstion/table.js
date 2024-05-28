
// function initializeDataTable(selector, data) {
//   return new DataTable(selector, {
//     data: data,
//     columns: [
//       {
//         title: "Participanți",
//         data: "username",
//       },
//       {
//         title: "Status",
//         data: "status",
//         render: function (data, type, row, meta) {
//           return data === 0
//             ? '<span><img src="./png/thumbs/thumb-up.png" class="thumb-icon" alt="Thumb Up"> </span>'
//             : '<span><img src="./png/thumbs/thumb-down.png" class="thumb-icon" alt="Thumb Down"></span>';
//         },
//       },
//     ],
//     paging: true,
//     info: true,
//     lengthChange: false,
//     aaSorting: true,
//     responsive: true,
//     pageLength: window.innerWidth < 991 ? 8 : 10,
//     paginate: true,
//     searching: false,
//     order: [[0, "asc"]],
//   });
// }

// // Example usage


// var dummyData = [
//   { username: "lorem4", status: 0 },
//   { username: "user2", status: 1 },
//   { username: "user3", status: 0 },
//   { username: "user4", status: 1 },
//   { username: "user5", status: 0 },
//   { username: "user6", status: 1 },
//   { username: "user7", status: 0 },
//   { username: "user8", status: 1 },
//   { username: "user9", status: 0 },
//   { username: "user10", status: 1 },
//   { username: "user1", status: 0 },
//   { username: "user2", status: 1 },
//   { username: "user3", status: 0 },
//   { username: "user4", status: 1 },
//   { username: "user5", status: 0 },
//   { username: "user6", status: 1 },
//   { username: "user7", status: 0 },
//   { username: "user8", status: 1 },
//   { username: "user9", status: 0 },
//   { username: "user10", status: 1 },
//   { username: "user1", status: 0 },
//   { username: "user2", status: 1 },
//   { username: "user3", status: 0 },
//   { username: "user4", status: 1 },
//   { username: "user5", status: 0 },
//   { username: "user6", status: 1 },
//   { username: "user7", status: 0 },
//   { username: "user8", status: 1 },
//   { username: "user9", status: 0 },
//   { username: "user10", status: 1 },
//   { username: "user1", status: 0 },
//   { username: "user2", status: 1 },
//   { username: "user3", status: 0 },
//   { username: "user4", status: 1 },
//   { username: "user5", status: 0 },
//   { username: "user6", status: 1 },
//   { username: "user7", status: 0 },
//   { username: "user8", status: 1 },
//   { username: "user9", status: 0 },
//   { username: "user10", status: 1 },
// ];


// // // Initialize the DataTable
// initializeDataTable("#exampleS", dummyData);
// // // Function to fetch data from the API
async function fetchData() {
  try {
      const response = await fetch("https://casino-promo.netbet.ro/scripts/utils/leaderboard_euro2024.php");
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error("Failed to fetch data:", error);
      return null; // Return null if there's an error
  }
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
                  return data === 0
                      ? '<span><img src="./png/thumbs/thumb-up2.png" class="thumb-icon" alt="Thumb Up"> </span>'
                      : '<span><img src="./png/thumbs/thumb-down2.png" class="thumb-icon" alt="Thumb Down"></span>';
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
  const fetchedData = await fetchData();

  if (fetchedData && fetchedData.status) {
      const tableData = fetchedData.data.data.map(item => ({
          username: item.username,
          status: item.status
      }));

      initializeDataTable("#exampleS", tableData);
  } else {
      console.log("No data available or status is false");
  }
}


initializePage();