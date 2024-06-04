let userLoginCheck = "netbet_login"; //test1686042757550
let qNetbet_id = "netbet_id"; //39438169 good bet

// Function to get cookie value by name
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

let modalIntervalId;

// Function to fetch data from the API
async function fetchData() {
  try {
    const response = await fetch(
      "https://casino-promo.netbet.ro/scripts/utils/leaderboard_euro2024.php"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log(responseData, "data")
    if (
      responseData ?.status === true &&
      Array.isArray(responseData.data ?.data)
    ) {
      return responseData.data.data;
    } else {
      throw new Error("Invalid response data format");
    }
  } catch (error) {
    console.error("Failed to fetch data:", error);
    return null;
  }
}
let linkGo;
let actionBtn = document.getElementById("actionBtn");
if (userLoginCheck === "logged_out") {
  actionBtn.href = "https://sport.netbet.ro/"; 
  actionBtn.textContent = "Înregistrează-te"; 
  userLoginCheck = "Înregistrează-te"
  linkGo = "https://sport.netbet.ro/"
} else if (userLoginCheck === "netbet_login") {
  actionBtn.href = "https://sport.netbet.ro/"; 
  actionBtn.textContent = "Înregistrează-te"; 
  userLoginCheck = "Înregistrează-te"
  linkGo = "https://sport.netbet.ro/" 
} else if (userLoginCheck === "") {
  actionBtn.href = "https://sport.netbet.ro/"; 
  actionBtn.textContent = "Înregistrează-te"; 
  userLoginCheck = "Înregistrează-te"
  linkGo = "https://sport.netbet.ro/" 
} else {
  userLoginCheck = "Pariază Acum"
  linkGo = "https://sport.netbet.ro/fotbal/euro-2024/" 
  actionBtn.href = "https://sport.netbet.ro/fotbal/euro-2024/"; 
  actionBtn.textContent = "Pariază Acum"; 
}
// Function to initialize the DataTable
function initializeDataTable(selector, data, qNetbet_id) {
  const dataSorted = data.sort((a, b) =>
    a.player_id == qNetbet_id ? -1 : b.player_id == qNetbet_id ? 1 : 0
  ); // for {user with auth to be first}
  // console.log(matchingItem,"matchingItem")
  return new DataTable(selector, {
    data: dataSorted,
    columns: [{
        title: "Participanți",
        data: "username",
      },
      {
        title: "Status",
        data: "status",
        render: (data) => {
          const thumbIcon = data === 0 ? "thumb-up2.png" : "thumb-down2.png";
          return `<span><img src="./png/thumbs/${thumbIcon}" class="thumb-icon" alt="Thumb Icon"></span>`;
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
    ordering: false,
    createdRow: function (row, rowData) {
      console.log("rowdata", rowData.player_id);
      console.log("qNetbet_id", qNetbet_id);
      if (rowData.player_id === parseInt(qNetbet_id)) {
        addClass(row, "highlight");
        let firstTd = row.getElementsByTagName("td")[0];
        if (firstTd) {
          firstTd.textContent = userLoginCheck;
        }
      }
    },
  });
}

async function initializePage() {
  const fetchedData = await fetchData();

  if (!fetchedData) {
    console.error("No data fetched");
    return null;
  }

  const tableData = fetchedData.map((item) => ({
    username: item.username,
    status: item.status,
    player_id: item.player_id,
  }));

  console.log(tableData, "--tableData");
  console.log(userLoginCheck, "--userLoginCheck");
  console.log(qNetbet_id, "--qNetbet_id");

  // find id
  const matchingItem = tableData.find((item) => item.player_id == qNetbet_id);
  console.log(matchingItem, "--matchingItem");
  initializeDataTable("#tableJs", tableData, qNetbet_id);
  return matchingItem;
}

initializePage().then((matchingItem) => {
  if (matchingItem) {
    console.log("Found matching item:", matchingItem);
    console.log("You are eligible", matchingItem);
  } else {
    setTimeout(() => {
      showNotEligibleModal();
      console.log("start show modal when player_id not matching");
    }, 2000);
  }
});

function startModalInterval() {
  console.log("start internval show  modal");
  modalIntervalId = setInterval(() => {
    if (!document.getElementById("modalOverFlow")) {
      showNotEligibleModal();
    }
  }, 60000); //60sec
}



function showNotEligibleModal() {
  if (document.getElementById("modalOverFlow")) return;
  const modal = document.createElement("div");


  modal.innerHTML = `
    <div class="modalOverFlow" id="modalOverFlow">
      <div class="modalParent">
        <div>
             <button id="modalCloseButton">&#10006</button>
         </div>
      <div class="modalContainer">
          <p>${"Înregistrează-te sau accesează contul tău și plasează un pariu eligibil pentru a fi inclus în tragerea la sorți ce oferă mingea momentului!"}</p>
          <a href="${linkGo}" target="_blank">
          <button class="_btnReg" id="deposit">
          ${userLoginCheck}
          </button>
          </a>
      </div>
    </div>
  </div>
  `;
  document.body.appendChild(modal);
  document.getElementById("modalCloseButton").onclick = closeModal;
  clearInterval(modalIntervalId);
}

function closeModal() {
  console.log("close modal");
  const modal = document.getElementById("modalOverFlow");
  if (modal) {
    modal.remove();
  }
  startModalInterval();
}