// let userLoginCheck = "test1686042757550";
// let qNetbet_id = "40123952";
// let userLoginCheck = "logged_out";
// let qNetbet_id = "logged_out";
let modalIntervalId;
let userLoginCheck = "test1686042757550";
let qNetbet_id = "40123952";
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
    console.log(responseData,"data")
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
      // console.log(data,"dada")
      if (rowData.player_id == qNetbet_id) {
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
  // if (
  //   userLoginCheck === "logged_out" || 
  //   qNetbet_id === "logged_out" 
  //   // userLoginCheck === null || 
  //   // qNetbet_id === null 
  // ) {
  //   showNotEligibleModal("please login pentru a putea vedea clasamentul");
  //   return;
  // } 
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
  const matchingItem = tableData.find((item) => item.player_id == qNetbet_id);

  initializeDataTable("#exampleS", tableData, qNetbet_id);

  return matchingItem;
}

initializePage().then((matchingItem) => {
  if (matchingItem) {
    console.log("Found matching item:", matchingItem);
    console.log("You are eligible",matchingItem);
  } else {
    setTimeout(() => {
      showNotEligibleModal("You are not eligible please bet");
      console.log("start show modal when player_id not matching");
    }, 3000);
  }
});

function startModalInterval() {
  console.log("start internval show  modal");
  modalIntervalId = setInterval(() => {
    if (!document.getElementById("modalOverFlow")) {
      console.log("show again the modal");
      showNotEligibleModal("dont close ,make a bet");
    }
  }, 2000);
}

function showNotEligibleModal(textContent) {
  if (document.getElementById('modalOverFlow')) return;
  const modal = document.createElement("div");
  modal.innerHTML = `
    <div class="modalOverFlow" id="modalOverFlow">
      <div class="modalParent">
        <button id="modalCloseButton">Close</button>
        <div class="modalContainer">
          <p>${textContent} 
          <p>Depune 50 .... to </p>
          <button class="_btnReg" id="deposit">${
            userLoginCheck
              ? userLoginCheck === "logged_out"
                ? "inregistreaza-te"
                : "make bet"
              : "Login"
          }</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  document.getElementById('modalCloseButton').onclick = closeModal;
  clearInterval(modalIntervalId);
}


function closeModal() {
  console.log("close modal");
  const modal = document.getElementById('modalOverFlow');
  if (modal) {
    modal.remove();
  }
  startModalInterval();
}