$(document).ready(function () {
    let SHEET_ID = '1Yy9ofhf_D1-6WPH0BUsaOOXTPuUdnluwXRn4LSKefa4'
    let SHEET_TITLE = 'search_words';
    let SHEET_RANGE = 'A1:B200'
    let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

    let team_fetch = fetch(FULL_URL)
        .then(res => res.text())
        .then(rep => {
            let data = JSON.parse(rep.substr(47).slice(0, -2));
            let lengthData = data.table.rows.length;
            let selectedTeams = [];

            for (let i = 0; i < 3; i++) {
                let randomIndex;
                do {
                    randomIndex = Math.floor(Math.random() * lengthData);
                }
                while (selectedTeams.includes(data.table.rows[randomIndex].c[1].v));
                const selectedTeam = data.table.rows[randomIndex].c[1].v;
                selectedTeams.push(selectedTeam);
                console.log(selectedTeam, "data");

            }

            return selectedTeams;

        });


    async function getSelectedTeams() {
        let selectedTeams = await team_fetch;
        console.log(selectedTeams, "data22");
        $("#theGrid").wordsearchwidget({
            "wordlist": selectedTeams,
            "gridsize": 14,
            "width": 100
        });
    }
    getSelectedTeams();


    $(".container").css("opacity", "1")
    let gameCompleted = false; //set initial game completion status to false
    let timeLimit = 60; //in seconds
    let timer = setInterval(function () {
        timeLimit--;
        $("#timer").text(timeLimit); //update the timer display
        if (timeLimit === 0) { //check if time is up or game is completed
            clearInterval(timer);
            $(".container").css("opacity", "0")
            setTimeout(() => {
                location.reload();

            }, 500);
        }
    }, 1000) //update every second
    //listen for word search widget completion event

    // $("#theGrid").on("gameCompleted", function () {
    //     gameCompleted = true;

    // });


});