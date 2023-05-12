$(document).ready(function () {
  let SHEET_ID = "1cszaLg-P5CCysWEjfdw1jdImEdwEBq7k7D1jz0DAT4s";
  let SHEET_TITLE = "echipe_puzzle_world";
  let SHEET_RANGE = "A2:B200";
  function fetchData() {
    let FULL_URL =
      "https://docs.google.com/spreadsheets/d/" +
      SHEET_ID +
      "/gviz/tq?sheet=" +
      SHEET_TITLE +
      "&range=" +
      SHEET_RANGE;
  
    return fetch(FULL_URL)
      .then((res) => res.text())
      .then((rep) => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let lengthData = data.table.rows.length;
        let selectedTeams = [];
  
        for (let i = 0; i < 3; i++) {
          let randomIndex;
          do {
            randomIndex = Math.floor(Math.random() * lengthData);
          } while (selectedTeams.includes(data.table.rows[randomIndex].c[1].v));
          const selectedTeam = data.table.rows[randomIndex].c[1].v;
          selectedTeams.push(selectedTeam);
      
        }
  
        return selectedTeams;
      });
  }
  async function getSelectedTeams() {
    let selectedTeams = await fetchData();
    console.log(selectedTeams, "data1");
    $("#theGrid").wordsearchwidget({
      wordlist: selectedTeams,
      gridsize: 12,
      width: 100,
      onWordFound: function () {
        foundWords++; // Increment the count when a word is found
        if (foundWords === 3) { // Check if all 3 words are found
          clearInterval(timer);
          $(".container").css("opacity", "0.5");
          // Show modal
          $("#modal-text").text("Win!");
          $("#modal").show();
        }
      }
    });
  }
  async function getSelectedTeams() {
    let selectedTeams = await fetchData();
    console.log(selectedTeams, "data1");
    $("#theGrid").wordsearchwidget({
      wordlist: selectedTeams,
      gridsize: 12,
      width: 100,
      onWordFound: function () {
        foundWords++; // Increment the count when a word is found
        if (foundWords === 3) { // Check if all 3 words are found
          clearInterval(timer);
          $(".container").css("opacity", "0.5");
          // Show modal
          $("#modal-text").text("Win!");
          $("#modal").show();
        }
      }
    });
  }

  $(".container").css("opacity", "1");
  let timeLimit = 60;
  let selectedword = 0; // Track the number of found words

  let timer = setInterval(function () {
    timeLimit--;
    $("#timer").text(timeLimit); // update the timer display
    if (timeLimit === 0) { // check if time is up
      clearInterval(timer);
      $(".container").css("opacity", "0.5");
      // Show modal
      if (selectedword === 3) {
        $("#modal-text").text("Win!");
      } else {
        $("#modal-text").text("Lose");
      }
      $("#modal").show();
    }
  }, 1000); // update every second

  $(document).ready(function () {
    $("#try-again-button").click(function () {
      $("#modal").hide();
      location.reload();
    });

    getSelectedTeams();
  });
});
