const games = [
    "Super Mario Bros1.",
    "The Legend of Zelda1",
    "Minecraft1",
    "Tetris",
    "Fortnite",
    "Grand Theft Auto V",
    "Call of Duty: ",
    "Animal Crossing: ",
    "Among Us",
    "FIFA 21",
    "test",
    "test",
    "the games in games"
];
const gameSuggestions = [
    "Portal2",
    "Half-Life2",
    "Team Fortress 2",
    "Counter-Strike:cs",
    "Left 4 Dead",
    "DOTA 2",
    "Teamfight Tactics",
    "Overwatch",
    "Rocket League",
    "Player's Batt",
    "Avatar in game",
    "lol",
    "tetris",
    "vikings",
    "the games in gamesSuggestion"
];
const movieSuggestions = [
    "The Godfather3",
    "The Shawshank ",
    "The Dark Knight3",
    "Forrest Gump",
    "The Matrix",
    "Star Wars",
    "Jurassic Park",
    "Titanic",
    "Inception",
    "Avatar in movie",
    "dota",
    "the games in movieSuggestions"
];

// Define fallback suggestions
const fallbackSuggestions = [
    "The Matrix",
    "Minecraft",
    "Star Wars",
    "Red Dead Redemption",
    "Harry Potter",
];

// Get search input and game list
const searchInput = document.getElementById("search-input");
const gameList = document.getElementById("game-list");
const searchBtn = document.getElementById("searchBtn");

// Function to display game list
function displayGames(gameArray) {
    // Clear game list
    gameList.innerHTML = "";
    // Loop through games and add to list
    gameArray.forEach((game) => {
        const li = document.createElement("li");
        li.textContent = game;
        gameList.appendChild(li);
    });
}

// Display all games initially
displayGames(games);
searchBtn.addEventListener("click", filterGames);
// Function to filter games based on search input
function filterGames() {
    // Get search input value and convert to lowercase
    const searchValue = searchInput.value.toLowerCase();
    // Filter games based on search input
    const filteredGames = games.filter((game) =>
        game.toLowerCase().includes(searchValue)
    );
    console.log(searchValue, "fas");
    // Display filtered games
    displayGames(filteredGames);

    // Display suggestions if search input is not empty
    if (searchValue !== "") {
        displaySuggestions(
            filteredGames,
            searchValue,
            "gamesuggestion",
            "moviesuggestion",

            gameSuggestions,
            movieSuggestions
        );
        // Check if search value is not found in suggestion arrays
        const allSuggestions = [...gameSuggestions, ...movieSuggestions];
        const parentElement = document.querySelector(".InsertSuggestion");
        const isSuggestionFound = allSuggestions.some((suggestion) =>
            suggestion.toLowerCase().startsWith(searchValue)
        );
        if (!isSuggestionFound) {
            console.log("not Found");
            parentElement.classList.add("dont_have");
            parentElement.classList.remove("game-suggestions");
            parentElement.classList.remove("movie-suggestions");
        } else {
            console.log("Found");
            parentElement.classList.remove("dont_have");
        }
    } else {
        clearSuggestions();
    }
}

// Function to display suggestions based on search value and array of suggestions
function displaySuggestions(
    filteredGames,
    searchValue,
    suggestionType,
    ...suggestionArrays
) {
    // Clear previous suggestions
    clearSuggestions();
    // Combine all suggestion arrays into a single array
    const allSuggestions = suggestionArrays.flat();
    console.log(allSuggestions, "allSuggestions_test");
    // Get suggestions from allSuggestions array based on search value
    const suggestions = allSuggestions
        .filter((suggestion) =>
            suggestion.toLowerCase().startsWith(searchValue)
        )
        .slice(0, 20);
    // Display suggestions
    if (suggestions.length > 0) {
        suggestions.forEach((suggestion) => {
            if (filteredGames.includes(suggestion)) {
                // Don't suggest a game that is already in the filtered list
                return;
            }
            const parentElement = document.querySelector(".InsertSuggestion");
            const suggestionElement = document.createElement("div");
            suggestionElement.classList.add("suggestion");
            suggestionElement.textContent = suggestion;
            parentElement.appendChild(suggestionElement);
            const isGameSuggestion = gameSuggestions.includes(suggestion);
            const isMovieSuggestion = movieSuggestions.includes(suggestion);

            // Add classes to parent element based on suggestion type
            if (isGameSuggestion && isMovieSuggestion) {
                parentElement.classList.add("game-and-movie-suggestion");
                suggestionsDisplayed = true;
            } else if (isGameSuggestion) {
                parentElement.classList.add("game-suggestions");
                suggestionsDisplayed = true;
            } else if (isMovieSuggestion) {
                parentElement.classList.add("movie-suggestions");

                suggestionsDisplayed = true;
            }
            parentElement.appendChild(suggestionElement);
            // searchInput.parentNode.insertBefore(suggestionElement, searchInput.nextSibling);
        });
    } else {
    
    // Display the random suggestion to the user
         // Select a random fallback suggestion
        const randomSuggestion =
            allSuggestions[Math.floor(Math.random() * allSuggestions.length)];
        // allSuggestions.push(randomSuggestion);
        // parentElement.textContent = `Did you mean "${allSuggestions}"?`;
        console.log(allSuggestions, "s");
        displayGames(games);
        allSuggestions.forEach((suggestion) => {
            if (filteredGames.includes(suggestion)) {
                // Don't suggest a game that is already in the filtered list
                return;
            }
            const parentElement = document.querySelector(".InsertSuggestion");
            const suggestionElement = document.createElement("div");
            suggestionElement.classList.add("suggestion");
            suggestionElement.textContent = `"joc random > ${randomSuggestion}  + // sugestie -> ${suggestion}`;
            parentElement.appendChild(suggestionElement);
            const isGameSuggestion = gameSuggestions.includes(suggestion);
            const isMovieSuggestion = movieSuggestions.includes(suggestion);
        });
    }
}

// Function to clear suggestions
function clearSuggestions() {
    // Get all suggestions and remove them
    const searchValue = searchInput.value.toLowerCase();
    const suggestions = document.querySelectorAll(".suggestion");
    suggestions.forEach((suggestion) => suggestion.remove());
    const parentElement2 = document.querySelector(".InsertSuggestion");
    if (!searchValue) {
        parentElement2.classList.remove(
            "game-suggestions",
            "movie-suggestions",
            "game-and-movie-suggestion",
            "dont_have"
        );
    }
}
// Add event listener to search input
searchInput.addEventListener("input", filterGames);