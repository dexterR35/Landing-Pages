document.addEventListener("DOMContentLoaded", function () {
    console.log('start');
  
  
      var dropBtns = document.querySelectorAll(".dropdown-button");
      console.log(dropBtns, "btnSho");
  
      function closeOpenItems() {
        openMenus = document.querySelectorAll(".dropMenu-list");
        openMenus.forEach(function (menus) {
          menus.classList.remove("show");
        });
      }
  
      dropBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          let dropContent = btn.querySelector(".dropMenu-list"),
     
            shouldOpen = !dropContent.classList.contains("show");
            console.log(dropContent);
          e.preventDefault();
          // First close all open items.
          closeOpenItems();
          // Check if the clicked item should be opened. It is already closed at this point so no further action is required if it should be closed.
          if (shouldOpen) {
            // Open the clicked item.
            dropContent.classList.add("show");
          }
          e.stopPropagation();
        });
      });
      window.addEventListener("click", function (event) {
        if (event.target != dropBtns) {
          closeOpenItems();
        }
      });
      console.log('middle');

    })