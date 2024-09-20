function preloadAllImages(callback) {
  const imgUrls = new Set();

  // Collect all image URLs from <img> tags
  const imgTags = document.getElementsByTagName('img');
  Array.from(imgTags).forEach((img) => {
    if (img.src) {
      imgUrls.add(img.src);
    }
  });

  // Collect all background images from inline styles
  const allElements = document.getElementsByTagName('*');
  Array.from(allElements).forEach((el) => {
    const bgImage = window.getComputedStyle(el).getPropertyValue('background-image');
    const match = bgImage.match(/url\(["']?([^"')]+)["']?\)/);
    if (match && match[1]) {
      imgUrls.add(match[1]);
    }
  });

  // Collect background images from CSS stylesheets
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (rule.style && rule.style.backgroundImage) {
          const bgImage = rule.style.getPropertyValue('background-image');
          const match = bgImage.match(/url\(["']?([^"')]+)["']?\)/);
          if (match && match[1]) {
            imgUrls.add(match[1]);
          }
        }
      }
    } catch (e) {
      // Ignore cross-origin stylesheets
    }
  }

  const urlsArray = Array.from(imgUrls);
  let loadedCount = 0;
  const totalImages = urlsArray.length;

  if (totalImages === 0) {
    callback();
    return;
  }

  urlsArray.forEach((url) => {
    const img = new Image();
    img.onload = img.onerror = function () {
      loadedCount++;
      if (loadedCount === totalImages) {
        callback();
      }
    };
    img.src = url;
  });
}

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

  const $slotContainer = $("#slot-container");
  // Clear any existing slots
  $slotContainer.empty();

  // Dynamically create slots based on the target word length
  for (let i = 0; i < targetWord.length; i++) {
    const $slotDiv = $("<div>").addClass("slot");
    const $slotSpan = $("<span>")
      .addClass("slot-letter")
      .text(getRandomLetter()); // Initial random letter
    $slotDiv.append($slotSpan);
    $slotContainer.append($slotDiv);
  }

  function animateSlot($slot, letters, duration, delay) {
    setTimeout(function () {
      let index = 0;
      const interval = setInterval(function () {
        $slot.text(letters[index]);
        index++;
        if (index >= letters.length) {
          index = 0;
        }
      }, duration / letters.length);

      setTimeout(function () {
        clearInterval(interval);
        $slot.text(letters[letters.length - 1]);
      }, duration);
    }, delay);
  }

  const duration = 550; // Total duration for animation
  const $slots = $(".slot-letter");
  // Show the slot container now that everything is loaded
  $slotContainer.css("display", "flex");
  $slots.each(function (i) {
    animateSlot($(this), slotLetters[i], duration, i * 100);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  // Start the loader animation
  animateText("NETBET.RO");

  // Preload all images
  preloadAllImages(function () {
    // Hide the loader after images are loaded
    $("#slot-container").fadeOut("slow", function () {
      // Optionally, you can initialize other scripts here
    });
  });
});
