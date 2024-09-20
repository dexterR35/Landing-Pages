//  // Second Carousel: Fetched Games Carousel
//  async function fetchGames() {
//     try {
//       const response = await fetch('./games.json');
//       const data = await response.json();

//       if (data.status && data.data && data.data.games) {
//         const selectedGames = [
//           "Gates of Olympus",
//           "Sweet Bonanza",
//           "The Dog House",
//           // ... add more games here
//         ];

//         const pragmaticPlayGames = data.data.games.filter(game =>
//           game.provider === "pragmaticplay" && selectedGames.includes(game.name)
//         );

//         const limitedGames = pragmaticPlayGames.slice(0, 21);

//         const $blazeTrack2 = $('#games-carousel .blaze-track');
//         $blazeTrack2.empty(); // Clear the container first

//         $.each(limitedGames, function(index, game) {
//           const fixedImageUrl = game.image_url ? game.image_url.replace(game.id, game.id - 1) : '';
//           if (fixedImageUrl && game.game_url) {
//             const gameElement = `
//               <div class="game" id="image-carousel">
//                 <div class="parent-game">
//                   <a href="${game.game_url}" target="_blank">
//                     <img src="${fixedImageUrl}" alt="${game.name}">
//                   </a>
//                   <div class="hover-overlay">Play Now</div>
//                   <div class="footer-game">
//                     <p>${game.provider}</p>
//                     <p>${game.name}</p>
//                   </div>
//                 </div>
//               </div>`;
//             $blazeTrack2.append(gameElement);
//           } else {
//             console.warn(`Missing URL for game: ${game.name}`);
//           }
//         });

//         // Initialize the second BlazeSlider for games
//         new BlazeSlider($('#games-carousel')[0], {
//           all: {
//             enableAutoplay: true,
//             autoplayInterval: 2000,
//             transitionDuration: 500,
//             slidesToShow: 4,
//           },
//           '(max-width: 900px)': {
//             slidesToShow: 2,
//           },
//           '(max-width: 600px)': {
//             slidesToShow: 1,
//           },
//         });

//       } else {
//         console.log('No games found or API returned an error.');
//       }
//     } catch (error) {
//       console.error('Error fetching games:', error);
//     }
//   }

//   // Call the fetchGames function to load the second carousel
//   fetchGames();

