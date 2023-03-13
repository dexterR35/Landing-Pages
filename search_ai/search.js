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
    "the games in games",
    "Assassin's Creed Valhalla",
    "Cyberpunk 2077",
    "Death Stranding",
    "The Last of Us Part II",
    "Ghost of Tsushima",
    "Demon's Souls",
    "Hades",
    "Celeste",
    "Undertale",
    "Stardew Valley",
    "Factorio",
    "Civilization VI",
    "Age of Empires II",
    "Starcraft II",
    "League of Legends",
    "Dota 2",
    "marian in game",
    "avatar in game"
];
const gameSuggestions = [
    "Borderlands 3",
    "Destiny 2",
    "Rainbow Six Siege",
    "Rocket League",
    "Apex Legends",
    "Valorant",
    "Genshin Impact",
    "Phasmophobia",
    "Resident Evil Village",
    "Hollow Knight",
    "Portal 2",
    "Bioshock Infinite",
    "Mass Effect 2",
    "Skyrim",
    "Disco Elysium",
    "Control",
    "marian in game Suggestions",
    "avatar in game Suggestions"
];
const movieSuggestions = [
    "The Godfather",
    "The Shawshank Redemption",
    "The Dark Knight",
    "Pulp Fiction",
    "The Lord of the Rings: The Fellowship of the Ring",
    "Fight Club",
    "Forrest Gump",
    "Inception",
    "The Matrix",
    "Star Wars: Episode V - The Empire Strikes Back",
    "Schindler's List",
    "Goodfellas",
    "The Silence of the Lambs",
    "The Departed",
    "The Prestige",
    "City of God",
    "Blade Runner",
    "Alien",
    "The Terminator",
    "Indiana Jones and the Raiders of the Lost Ark",
    "marian in movie Suggestions",
    "avatar in movie Suggestions"
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
displayGames(games.slice(0, 100));
searchBtn.addEventListener("click", filterGames);
// Function to filter games based on search input
function filterGames() {
    // Get search input value and convert to lowercase
    const searchValue = searchInput.value.toLowerCase();
    // Filter games based on search input
    const filteredGames = games.filter((game) =>
        game.toLowerCase().includes(searchValue)
    );
    console.log(filteredGames, "filteredGames");
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
            if (!allSuggestions.includes(searchValue)) {
                const randomIndex = Math.floor(Math.random() * allSuggestions.length);
                const randomSuggestion = allSuggestions[randomIndex];
                console.log(`ce zici de  ${randomSuggestion}?`);
                // const randomSuggestion =


                const container_random = document.querySelector(".container_random");
                const _randomSuggestionElement = document.createElement("div");
                _randomSuggestionElement.textContent = `"afiseaza un joc/movie random > ${randomSuggestion}`;
                container_random.appendChild(_randomSuggestionElement);
            }

            // console.log(randomSuggestion,"fasfa")
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
    ...suggestionArrays
) {
    // Clear previous suggestions
    clearSuggestions();
    // Combine all suggestion arrays into a single array
    const allSuggestions = suggestionArrays.flat();
    // Get suggestions from allSuggestions array based on search value
    const suggestions = allSuggestions
        .filter((suggestion) =>
            suggestion.toLowerCase().startsWith(searchValue)
        )
        .slice(0, 20);

    // Display suggestions 
    if (suggestions.length > 0) {

        suggestions.forEach((suggestion) => {

            // console.log(suggestions,"sugestions")
            // if (filteredGames.includes(suggestion)) {
            //     // console.log(filteredGames.includes(suggestion),"filteredGames")
            //     // Don't suggest a game that is already in the filtered list
            //     return;
            // }
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
            } else if (isGameSuggestion) {
                parentElement.classList.add("game-suggestions");
            } else if (isMovieSuggestion) {
                parentElement.classList.add("movie-suggestions");
            }
            parentElement.appendChild(suggestionElement);
            // searchInput.parentNode.insertBefore(suggestionElement, searchInput.nextSibling);
        });
    } else {

        displayGames(games);

        allSuggestions.forEach((suggestion) => {
            if (filteredGames.includes(suggestion)) {
                // Don't suggest a game that is already in the filtered list
                return;
            }

            const parentElement = document.querySelector(".InsertSuggestion");
            const suggestionElement = document.createElement("div");
            suggestionElement.classList.add("suggestion");
            suggestionElement.textContent = `${suggestion}`;
            parentElement.appendChild(suggestionElement);

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