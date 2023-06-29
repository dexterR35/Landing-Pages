$(document).ready(function () {
  let SHEET_ID = "1_3BnR6F4lUVzq4n-ifOgk8AXe5cqa_vun7SwfDBlyLc";    
  let SHEET_TITLE = "echipe_puzzle_world";
  let SHEET_RANGE = "A2:B200";

  // let timelimit = 60;
  // let timeLimitAll = timelimit;

  // let extraLives = 4;
  // let extraLivesAll = extraLives;

  // let extraTime = [0, 20, 30, 40]; // seconds to add for each extra life

  async function fetchData() {
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

  function shuffle(array) {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  function fetchSheet() {
    fetchData()
      .then(shuffle)
      .then((selectedTeams) => {
        // itemCount = selectedTeams.length;
        // itemNames = selectedTeams.join(", ");

        $("#theGrid").wordsearchwidget({
          wordlist: selectedTeams,
          gridsize: 12,
          width: 100,
        });
      });
  }
  // let tryAgainCounter = 0;
  function startGame() {
    $(".container").css("opacity", "1");
    let timelimit = 60; // Set the initial time limit to 60 seconds
    let timer = setInterval(function () {
      timelimit--;
      $("#timer").text(timelimit);
  
      if (timelimit === 0) {
        clearInterval(timer);
        $(".container").css("opacity", "0.5");
        $("#modal").show();
      }
    }, 1000);
  }


  // Attach a click event listener to the "Try Again" button
  $("#try-again-button").on("click", function () {

      startGame();
      location.reload();
   
  });

  function changeTeamsPeriodically() {
    fetchSheet();
    setInterval(fetchSheet, 24 * 60 * 60 * 1000); // Rulează funcția la fiecare 24 de ore
  }

  changeTeamsPeriodically();
  startGame();

  
});
