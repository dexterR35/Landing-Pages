
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
            ? '<span><img src="./png/thumbs/thumb-up.png" class="thumb-icon" alt="Thumb Up"> </span>'
            : '<span><img src="./png/thumbs/thumb-down.png" class="thumb-icon" alt="Thumb Down"></span>';
        },
      },
    ],
    paging: true,
    info: true,
    lengthChange: false,
    aaSorting: true,
    responsive: true,
    pageLength: window.innerWidth < 991 ? 8 : 8,
    paginate: true,
    searching: false,
    order: [[0, "asc"]],
  });
}

// Example usage


var dummyData = [
  { username: "lorem4", status: 0 },
  { username: "user2", status: 1 },
  { username: "user3", status: 0 },
  { username: "user4", status: 1 },
  { username: "user5", status: 0 },
  { username: "user6", status: 1 },
  { username: "user7", status: 0 },
  { username: "user8", status: 1 },
  { username: "user9", status: 0 },
  { username: "user10", status: 1 },
  { username: "user1", status: 0 },
  { username: "user2", status: 1 },
  { username: "user3", status: 0 },
  { username: "user4", status: 1 },
  { username: "user5", status: 0 },
  { username: "user6", status: 1 },
  { username: "user7", status: 0 },
  { username: "user8", status: 1 },
  { username: "user9", status: 0 },
  { username: "user10", status: 1 },
  { username: "user1", status: 0 },
  { username: "user2", status: 1 },
  { username: "user3", status: 0 },
  { username: "user4", status: 1 },
  { username: "user5", status: 0 },
  { username: "user6", status: 1 },
  { username: "user7", status: 0 },
  { username: "user8", status: 1 },
  { username: "user9", status: 0 },
  { username: "user10", status: 1 },
  { username: "user1", status: 0 },
  { username: "user2", status: 1 },
  { username: "user3", status: 0 },
  { username: "user4", status: 1 },
  { username: "user5", status: 0 },
  { username: "user6", status: 1 },
  { username: "user7", status: 0 },
  { username: "user8", status: 1 },
  { username: "user9", status: 0 },
  { username: "user10", status: 1 },
];


// // Initialize the DataTable
initializeDataTable("#exampleS", dummyData);
// // // Function to fetch data from the API
// async function fetchData() {
//   try {
//     const response = await fetch("https://api.netbet.com/leaderboard/euro2024?website=casino&lang=eu&device=desktop");
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return data.data;
//   } catch (error) {
//     console.error("Failed to fetch data:", error);
//     return []; // Return an empty array if there's an error
//   }
// }

// // Function to initialize the DataTable
// async function initializeDataTable() {
//   const fetchedData = await fetchData();
  
//   const tableData = new DataTable("#exampleS", {
//     data: fetchedData,
//     columns: [
//       {
//         title: "Clienti",
//         data: "username",
//       },
//       {
//         title: "Status",
//         data: "status",
//         render: function (data, type, row, meta) {
//           console.log(type, row, meta, "Fas");
//           return data === 0
//             ? '<span><img src="./png/thumbs/thumb-up.png" class="thumb-icon" alt="Thumb Up"> ai cont</span>'
//             : '<span><img src="./png/thumbs/thumb-down.png" class="thumb-icon" alt="Thumb Down">Depune</span>';
//         },
//       },
//     ],
//     paging: true,
//     info: true,
//     lengthChange: false,
//     aaSorting: false,
//     responsive: true,
//     pageLength: window.innerWidth < 991 ? 8 : 8,
//     paginate: true,
//     searching: false,
//     order: [[0, "asc"]],
//   });
// }

// // Call the function to initialize the DataTable
// initializeDataTable();


