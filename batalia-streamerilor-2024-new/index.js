
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
      threshold: 0.1,
    });
    document.querySelectorAll("._page").forEach((section) => sectionObserver.observe(section));
  
    const footer = document.querySelector("footer");
    if (footer) sectionObserver.observe(footer);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    observeSections();
  });
  