export function showModal(type, title, message, callback) {
    const modalHtml = `
      <div class="modal">
        <div class="modal-content">
          <h2>${title}</h2>
          <p>${message}</p>
          <div class="modal-buttons">
            ${
              type === "optOut"
                ? '<button class="btn yes-btn">Yes</button><button class="btn no-btn">No</button>'
                : '<button class="btn ok-btn">OK</button>'
            }
          </div>
        </div>
      </div>
    `;
    $("body").append(modalHtml);
  
    if (type === "optOut") {
      $(".yes-btn").click(() => {
        $(".modal").remove();
        callback(true);
      });
      $(".no-btn").click(() => {
        $(".modal").remove();
        callback(false);
      });
    } else {
      $(".ok-btn").click(() => {
        $(".modal").remove();
      });
    }
  }