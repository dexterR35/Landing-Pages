

var dummyData = [
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

const tableData = new DataTable("#exampleS", {
  data: dummyData,
  columns: [
    {
      title: "Clienti",
      data: "username",
    },
    {
      title: "Status",
      data: "status",
      render: function (data, type, row, meta) {
        console.log(type, row, meta, "Fas");
        return data === 0
          ? '<span><img src="./png/thumbs/thumb-up.png" class="thumb-icon" alt="Thumb Up"> ai cont</span>'
          : '<span><img src="./png/thumbs/thumb-down.png" class="thumb-icon" alt="Thumb Down">Depune</span>';
      },
    },
  ],
  paging: true,
  info: true,
  lengthChange: false,
  aaSorting: false,
  responsive: true,
  pageLength: window.innerWidth < 991 ? 8 : 8,
  paginate: true,
  searching: false,
  order: [[0, "asc"]],
});
// // Function to fetch data from the API
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

const teams = [
  {
      name: "Turkey",
      flag: "https://flagcdn.com/w20/tr.png", // URL to the Turkey flag
      p: 0,
      w: 0,
      d: 0,
      l: 0,
      pts: 0
  },
  {
      name: "Italy",
      flag: "https://flagcdn.com/w20/it.png", // URL to the Italy flag
      p: 0,
      w: 0,
      d: 0,
      l: 0,
      pts: 0
  },
  {
      name: "Wales",
      flag: "https://flagcdn.com/w20/gb-wls.png", // URL to the Wales flag
      p: 0,
      w: 0,
      d: 0,
      l: 0,
      pts: 0
  },
  {
      name: "Romania",
      flag: "https://flagcdn.com/w20/ro.png", // URL to the Switzerland flag
      p: 0,
      w: 0,
      d: 0,
      l: 0,
      pts: 0
  }
];

const tableContent = document.getElementById('tableScore-content');

teams.forEach(team => {
  const row = document.createElement('div');
  row.classList.add('tableScore-row');

  row.innerHTML = `
      <div class="team-name">
          <img class="flag" src="${team.flag}" alt="${team.name} flag">
          ${team.name}
      </div>
      <div class="cell">${team.p}</div>
      <div class="cell">${team.w}</div>
      <div class="cell">${team.d}</div>
      <div class="cell">${team.l}</div>
      <div class="cell">${team.pts}</div>
  `;

  tableContent.appendChild(row);
});

// $(window).resize(function() {
//   var newPageLength = window.innerWidth < 991 ? 6 : 19;
//   tableData.page.len(newPageLength).draw();
// });
