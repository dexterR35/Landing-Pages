// Dummy data for users
const dummyUserData = [
    { username: "user1", points: 100000, ranking: 1 },
    { username: "user2", points: 90000, ranking: 2 },
    { username: "user3", points: 85000, ranking: 3 },
    { username: "user4", points: 82000, ranking: 4 },
    { username: "user5", points: 80000, ranking: 5 },
    { username: "user1", points: 100000, ranking: 1 },
    { username: "user2", points: 90000, ranking: 2 },
    { username: "user3", points: 85000, ranking: 3 },
    { username: "user4", points: 82000, ranking: 4 },
    { username: "user5", points: 80000, ranking: 5 },
    { username: "user1", points: 100000, ranking: 1 },
    { username: "user2", points: 90000, ranking: 2 },
    { username: "user3", points: 85000, ranking: 3 },
    { username: "user4", points: 82000, ranking: 4 },
    { username: "user5", points: 80000, ranking: 5 },
  ];
  
  // Dummy data for streamers
  const dummyStreamerData = [
    { username: "PĂCĂNELA", points: 500000, stars: 10, ranking: 1 },
    { username: "QUIKANU", points: 450000, stars: 5, ranking: 2 },
    { username: "DUMISNINJA", points: 400000, stars: 7, ranking: 3 },
    { username: "DUDY", points: 350000, stars: 6, ranking: 4 },
    { username: "NARCIS", points: 300000, stars: 8, ranking: 5 },
    { username: "PĂCĂNELA", points: 500000, stars: 10, ranking: 1 },
    { username: "QUIKANU", points: 450000, stars: 5, ranking: 2 },
    { username: "DUMISNINJA", points: 400000, stars: 7, ranking: 3 },
    { username: "DUDY", points: 350000, stars: 6, ranking: 4 },
    { username: "NARCIS", points: 300000, stars: 8, ranking: 5 },
  ];
  
  // Function to format points
  function formatPoints(pointsf) {
    if (pointsf >= 1000000) {
      return (pointsf / 1000000).toFixed(1) + "MIL";
    } else if (pointsf >= 1000) {
      return (pointsf / 1000).toFixed(1) + "K";
    } else {
      return pointsf.toString();
    }
  }
  
  // Function to create table rows for users
  function createTableUsers(item, userPosition) {
    console.log(item,"items")
    let userAsterix = item.username;
    if (userAsterix && userAsterix.length > 2) {
      const firstTwoLetters = userAsterix.slice(0, 2);
      const asterisks = '*'.repeat(userAsterix.length - 2);
      userAsterix = firstTwoLetters + asterisks;
      userPosition = item.ranking;
    }
    const tableAHtml = `<tr class="parent-table">
        <td class="parent-position ps">#${item.ranking}</td>
        <td>
                <div class="parent-name">
                    <p class="ps">${userAsterix}</p>
                </div>
        </td>
        <td class="parent-points ps">${formatPoints(item.points)}</td>  
    </tr>`;
    return tableAHtml;
  }
  
  // Function to create table rows for streamers
  function createTableStreamers(streamer, imgSrc) {
    const tableHtml = `<tr class="parent-table">
     <td class="parent-position ps">#${streamer.ranking}</td>
     <td>
     <div class="d-flex-start flex-row parent-avatar">
         <div class="avatar-table avatar-blue">
             <img src="" alt="pict_table" class="pict_table">
         </div>
         <div class="parent-name">
         <p class="font-tabel">${streamer.username}</p> 
             <p class="font-tabel">Stars: <span style="color:orangered;">***</span>**</p>
         </div>
     </div>
  </td>
     <td class="parent-points ps">${formatPoints(streamer.points)}</td>
     </tr>`;
    return tableHtml;
  }
  
  // Function to generate user and streamer tables
  function generateTables() {
    let tableDataUser = $("#bodyUser");
    let tableDataStreamer = $("#bodyStreamer");
  
    // Clear any previous data
    tableDataUser.empty();
    tableDataStreamer.empty();
  
    // Populate user data
    dummyUserData.forEach((user, index) => {
      const userRow = createTableUsers(user, index + 1);
      tableDataUser.append(userRow);
    });
  
    // Populate streamer data
    dummyStreamerData.forEach((streamer, index) => {
      const streamerRow = createTableStreamers(streamer, `./_avatar/${streamer.username.toLowerCase()}.png`);
      tableDataStreamer.append(streamerRow);
    });
  
    // Initialize DataTables for users and streamers
    $('#usersTable').DataTable({
      autoWidth: false,
      aaSorting: false,
      responsive: false,
      pageLength: 10,
      paginate: true,
      info: false,
      searching: false,
      lengthChange: false,
      language: false,
      columnDefs: [
        { width: "10%", targets: 0 },
        { width: "60%", targets: 1 },
        { width: "15%", targets: 2 },
      ],
    });
  
    $('#streamersTable').DataTable({
      autoWidth: false,
      aaSorting: false,
      responsive: false,
      pageLength: 5,
      paginate: true,
      info: false,
      lengthChange: false,
      searching: false,
      columnDefs: [
        { width: "5%", targets: 0 },
        { width: "60%", targets: 1 },
        { width: "10%", targets: 2 },
      ],
    });
  }
  
  // Call generateTables function on document ready
  $(document).ready(function () {
    generateTables();
 
  });
  

// Call the function to fetch and display the games
