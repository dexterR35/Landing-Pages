

let userLoginCheck = "test1686042757550";
let qNetbet_id = "139438169";
let modalIntervalId;
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


// Function to initialize the DataTable
function initializeDataTable(selector, data ,qNetbet_id) {
  const dataSorted = data.sort((a, b) => (a.player_id == qNetbet_id ? -1 : b.player_id == qNetbet_id ? 1 : 0)); // for {user with auth to be first}
  const matchingItem = data.some(item => item.player_id == qNetbet_id);
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
        render: function (data) {
          if (data===0) {
            console.log(matchingItem, "you are not in this table");
            return '<span><img src="./png/thumbs/thumb-up2.png" class="thumb-icon" alt="Thumb Up"></span>';
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
    ordering: false,
    // order: [
    //   [0, "asc"]
    // ],
    createdRow: function (row, data, dataIndex) {
      // console.log(data,"dada")
      if (data.player_id == qNetbet_id) {
        addClass(row,'highlight');
        let firstTd = row.getElementsByTagName('td')[0];
        if (firstTd) {
          firstTd.textContent = userLoginCheck; 
        }
      }
   
    }
  });
}

async function initializePage() {
 
  const fetchedData = await fetchData();
  if (!fetchedData) {
    console.error("No data fetched");
    return null;
  }
  const tableData = fetchedData.map(item => ({
    username: item.username,
    status: item.status,
    player_id: item.player_id
  }));
  console.log(tableData, "tableData");
  console.log(userLoginCheck, "userLoginCheck");
  console.log(qNetbet_id, "qNetbet_id");
  
  const matchingItem = tableData.find(item => item.player_id == qNetbet_id);
  const dataTable = initializeDataTable("#exampleS", tableData, qNetbet_id);
  console.log(dataTable, "matchingItem");
  
  return matchingItem;
}

initializePage().then(matchingItem => {
  if (userLoginCheck === "logged_out" || qNetbet_id === "logged_out" || userLoginCheck === null || qNetbet_id === null) {
    showNotEligibleModal();
    return;
  }
  else if (matchingItem) {
    console.log('Found matching item:', matchingItem);
    alert("You are eligible");
  } else {
    setTimeout(() => {
      showNotEligibleModal();
      console.log("start show modal")
    }, 6000);
  }

});

function startModalInterval() {
  console.log("start internval show  modal")
  modalIntervalId = setInterval(() => {
    if (!document.getElementById('modalOverFlow')) {
      showNotEligibleModal();
    }
  }, 4000);
}
function showNotEligibleModal() {
  const existingModal = document.getElementById('modalOverFlow');
  if (existingModal) return; // Prevent multiple modals
  const modal = document.createElement('div');
  modal.innerHTML = `
    <div class="modalOverFlow" id="modalOverFlow">
      <div class="modalParent">
        <button id="modalCloseButton">Close</button>
        <div class="modalContainer">
          <p>You are not eligible ${userLoginCheck ? (userLoginCheck === "logged_out" ? "user" : "user") : "user"}</p>
          <p>Depune 50 .... to </p>
          <button class="_btnReg" id="deposit">${userLoginCheck ? (userLoginCheck === "logged_out" ? "inregistreaza-te" : "make bet") : "Login"}</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  // Close button functionality
  document.getElementById('modalCloseButton').onclick = () => {
 
    const modal = document.getElementById('modalOverFlow');
    if (modal && modal.parentNode) {
      modal.parentNode.removeChild(modal);
    }
    console.log("restart modal interval")
    startModalInterval();
  };
  console.log("existing modal =>  clear interval")
  clearInterval(modalIntervalId);
}