// sectionObserver.js

// Function to handle visibility of sections
function handleSectionVisibility(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }
  
  // Function to observe sections
  function observeSections() {
    const sectionObserver = new IntersectionObserver(handleSectionVisibility, {
      root: null,
      threshold: 0.25,
    });
    document.querySelectorAll("._page").forEach((section) => sectionObserver.observe(section));
  
    // Optionally observe the footer (to track it)
    const footer = document.querySelector("footer");
    if (footer) sectionObserver.observe(footer);
  }
  
  // Run the observer once the DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    observeSections();
  });
  