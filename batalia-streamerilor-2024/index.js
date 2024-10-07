function animateText(targetText) {
  const targetWord = targetText.toString(); // Convert to string in case a number is passed
  const totalLetters = 10; // Number of letters to show during animation for each slot
  const slotLetters = [];

  function getRandomLetter() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return letters.charAt(Math.floor(Math.random() * letters.length));
  }

  // Generate slot letters with random letters and end with the target letter
  for (let i = 0; i < targetWord.length; i++) {
    const lettersArray = [];
    for (let j = 0; j < totalLetters - 1; j++) {
      lettersArray.push(getRandomLetter());
    }
    lettersArray.push(targetWord.charAt(i)); // Ensure the last letter is the correct one
    slotLetters.push(lettersArray);
  }

  const $slotContainer = $("#slot-container"); // Use jQuery selector
  // Clear any existing slots
  $slotContainer.html('');

  // Dynamically create slots based on the target word length
  for (let i = 0; i < targetWord.length; i++) {
    const slotDiv = $('<div>').addClass("slot");
    const slotSpan = $('<span>').addClass("slot-letter").text(getRandomLetter()); // Initial random letter
    slotDiv.append(slotSpan);
    $slotContainer.append(slotDiv);
  }

  function animateSlot(slot, letters, duration, delay) {
    setTimeout(function () {
      let index = 0;
      const interval = setInterval(function () {
        $(slot).text(letters[index]);
        index++;
        if (index >= letters.length) {
          index = 0;
        }
      }, duration / letters.length);

      setTimeout(function () {
        clearInterval(interval);
        $(slot).text(letters[letters.length - 1]);
      }, duration);
    }, delay);
  }

  const duration = 500; // Total duration for animation
  const slots = $(".slot-letter");
  slots.each(function (i, slot) {
    animateSlot(slot, slotLetters[i], duration, i * 100);
  });
}

// Wait for the full page (including images and other resources) to be fully loaded
$(window).on("load", function() {
  // Show the loading animation after document is fully loaded
  animateText("NETBET.RO");
  setTimeout(function () {
    $("#slot-container").fadeTo(500, 0, function() {
      $(this).css("display", "none");
    });
    $("body").fadeTo(500, 1); // Ensure the page fades i
  }, 2000); // 2 seconds for the animation to run
});
function handleSectionVisibility(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }
  
  function observeSections() {
    const sectionObserver = new IntersectionObserver(handleSectionVisibility, {
      root: null,
      threshold: 0.25,
    });
    document.querySelectorAll("._page").forEach((section) => sectionObserver.observe(section));
  
    const footer = document.querySelector("footer");
    if (footer) sectionObserver.observe(footer);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    observeSections();
  });
  