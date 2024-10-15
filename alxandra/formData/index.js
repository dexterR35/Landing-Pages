import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  deleteField,
  onSnapshot,
  serverTimestamp,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  getDownloadURL,
  listAll,
  uploadBytes,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";

//   import { displayAttribute } from './formular.js';

const firebaseConfig = {
  apiKey: "AIzaSyDiOqUAHF9DX9x-VdRhaGPc2_Yfj305Jxc",
  authDomain: "netbet-ea33f.firebaseapp.com",
  databaseURL:
    "https://netbet-ea33f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "netbet-ea33f",
  storageBucket: "netbet-ea33f.appspot.com",
  messagingSenderId: "184670151760",
  appId: "1:184670151760:web:08506858f2b8843fb19d55",
  measurementId: "G-7FX1PZEFQW",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

var table;

function generateDataTable(user) {
  console.log(user.destinatar_nume);
  const tableAHtml = `<tr>
  <td>${user.destinatar_nume}</td>
  <td>${user.destinatar_prenume}</td>
  <td>${user.destinatar_telefon}</td>
  <td>${user.destinatar_judet}</td>
  <td>${user.destinatar_oras}</td>
  <td>${user.destinatar_strada}</td>
  <td>${user.destinatar_bloc}</td>
  <td>${user.destinatar_nr}</td>
  <td>${user.destinatar_scara}</td>
  <td>${user.destinatar_etaj}</td>
  <td>${user.destinatar_apartament}</td>
  <td>${user.destinatar_userName}</td>
  <td>${user.destinatar_codpostal}</td>
</tr>`;
  // console.log(user.select_banks)
  // Append the HTML to the table
  return tableAHtml;
}

async function fetchFirestoreData() {
  const usersRef = collection(db, "euro_2024_premii");
  const querySnapshot = await getDocs(usersRef);

  // Initialize the DataTable if it doesn't exist
  if (!table) {
    table = $("#userTable").DataTable({
      aaSorting: [],
      responsive: false,
      searching: true,
      pageLength: 30,

      info: true,
      dom: "Bftip", // Display the buttons
      buttons: [
        {
          extend: "csvHtml5",
          text: "Csv" + " - " + '<i class="fas fa-file-csv"></i>',
        },
        {
          extend: "excel",
          text: "Excel" + " - " + '<i class="fas fa-file-excel"></i>',
        },
        {
          extend: "pdf",
          text: "Pdf" + " - " + '<i class="fas fa-file-pdf"></i>',
        },
        {
          extend: "print",
          text: "Print" + " - " + '<i class="fas fa-print"></i>',
        },
        {
          extend: "colvis",
          text: "Colvis" + " - " + '<i class="fas fa-columns"></i>',
        },
        {
          extend: "searchBuilder",
          text: "Filter Builder",
          searchBuilder: {
            columns: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13], // Specify the columns to enable in the search builder
          },
        },
      ],
      // columnDefs: [
      //   { targets: [1, 2, 3, 4, 5, 6, 7, 8], className: "text-left" },
      //   { targets: [0], className: "text-left" },
      //   { targets: [1, 2], className: "text-left" },
      // ],
    });
  }

  // Clear any existing data in the table
  table.clear().draw();

  querySnapshot.forEach((doc) => {
    var user = doc.data();
    console.log(user);

    // Generate HTML for the user data
    const userHtml = generateDataTable(user);

    // Append the user data to the table
    table.row.add($(userHtml));
  });

  // Draw the table to display the added data
  table.draw();

  $(".dataTables_filter input").attr("placeholder", "Search here...").css({
    display: "inline-block",
  });

  $('[data-toggle="tooltip"]').tooltip();
}

$(document).ready(function () {
  fetchFirestoreData();
});

// Table Header
//    1. Remove BS4-Classes for Background set in the columnDefs Options above,
//    2. Add BS4-Class for White Text on Black Background
//    3. Reduce Font Size
// $('#dtPluginExample thead tr th').removeClass("bg-warning bg-light bg-success").addClass("bg-dark text-white").css("font-size", "0.85rem");
$("thead tr th").addClass("bg-dark text-dark").css("font-size", "0.85rem");

// Table Footer
//    1. Remove BS4-Classes for Background set in the columnDefs Options above,
//    2. Add BS4-Class for White Text on Black Background
//    3. Reduce Font Size
//    4. Remove Horizontal Alignments set above and reassign for Totals.
