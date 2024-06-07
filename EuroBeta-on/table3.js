

let userLoginCheck = getCookie("netbet_login") ; 
let qNetbet_id = getCookie("netbet_id"); 

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
      "https://api.netbet.com/leaderboard/euro2024?website=casino&lang=eu&device=desktop"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const responseData = await response.json();
    console.log(responseData, "data fetch");
    if (
      responseData?.status === true &&
      Array.isArray(responseData.data?.data)
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
const qsaEnd = "<?php echo $qsa_with_end; ?>";
const qsa = "<?php echo $qsa; ?>";
const actionBtn = document.getElementById("actionBtn");
const depositBtn = document.getElementById("deposit");
const textContentReg =
  "Înregistrează-te sau accesează contul tău și plasează un pariu eligibil pentru a fi inclus în tragerea la sorți ce oferă mingea momentului!";
const textContentBet =
  "Plasează acum un pariu eligibil pentru a fi inclus în tragerea la sorți ce oferă mingea momentului!";
const checkStatus =
  userLoginCheck === "logged_out" ||
  userLoginCheck === "netbet_login" || 
  userLoginCheck === null ||
  userLoginCheck === "";
if (checkStatus) {
  linkGo = `https://sport.netbet.ro/?register=1${qsaEnd}`;
  actionBtn.href = `https://sport.netbet.ro/?register=1${qsaEnd}`;
  actionBtn.textContent = "Înregistrează-te";
} else {
  linkGo = `https://sport.netbet.ro/fotbal/euro-2024/${qsa}`;
  actionBtn.href = `https://sport.netbet.ro/fotbal/euro-2024/${qsa}`;
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
    columns: [
      {
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

  // console.log(tableData, "--tableData");
  // console.log(userLoginCheck, "--userLoginCheck");
  console.log(qNetbet_id, "--qNetbet_id");

  // find id
  const matchingItem = tableData.find((item) => item.player_id == qNetbet_id);
  initializeDataTable("#tableJs", tableData, qNetbet_id);
  return matchingItem;
}
initializePage().then((matchingItem) => {
  if (matchingItem) {
    // console.log("Found matching item:", matchingItem);
    actionBtn.removeAttribute("href");
    actionBtn.textContent = "Vezi Clasamentul";
    actionBtn.addEventListener("click", () => {
      fullpage_api.moveSectionDown();
    });
  } else {
    setTimeout(() => {
      showNotEligibleModal();
    }, 2000);
  }
});

function startModalInterval() {
  modalIntervalId = setInterval(() => {
    if (!document.getElementById("modalOverFlow")) {
      showNotEligibleModal();
    }
  }, 300000); //5 min in milisec
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
        <p>${checkStatus ? textContentReg : textContentBet} </p>
          <a href="${linkGo}" target="_blank">
          <button class="_btnReg" id="deposit">
          ${actionBtn.textContent}
          </button>
          </a>
          <p class="arrow-custom">Termeni și Condiții</p>
      </div>
    </div>
  </div>
  `;
  document.body.appendChild(modal);

document.querySelector(".arrow-custom").addEventListener("click", () => {
  fullpage_api.moveTo('tcs');
  closeModal();
});
  document.getElementById("modalCloseButton").onclick = closeModal;
  clearInterval(modalIntervalId);
}





function closeModal() {
  const modal = document.getElementById("modalOverFlow");
  if (modal) {
    modal.remove();
  }
  startModalInterval();
}
