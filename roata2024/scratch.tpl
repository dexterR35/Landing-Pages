{literal}
<script>
  console.log("start scratch script");

  let textAppendedCount = 0;
  const texts = [
    ["500", "ron", "{/literal}{$asset}/png/elements/x3.webp{literal}"],
    [
      "50",
      "runde gratuite",
      "{/literal}{$asset}/png/elements/x4.webp{literal}",
    ],
  ];
  let prize = "safasf";
  let checkIndex = [];

  const _containers = [
    { id: "jsContainer1", completionStatus: false },
    { id: "jsContainer2", completionStatus: false },
    { id: "jsContainer3", completionStatus: false },
  ];

  function addNewDivContainer() {
    $("#loadingStatus").hide();
    $("._hH").fadeIn("slow");
    if (!containerAppended) {
      positivePopUp.play();
      let htmlStructure = `
      <div class="_scrathContainer _apDiv _hR">
          <div class="_scratchCardParent">
            ${Array.from(
              { length: 3 },
              (_, i) => `
              <div class="frame_scratch">
                <div class="${"_scratch" + "" + (i + 1)} _scratchCard" id=${
                "jsContainer" + "" + (i + 1)
              }>
                 <div class="prizeScratch"></div>
               </div>
              </div>
            `
            ).join("")}
          </div>
        </div>
        <div class="scratchPrizeSmall"><img src="{/literal}{$asset}/png/elements/suport.webp{literal}" alt"elem"><div class="wrap-prizeSmall"><div>rotiri</div><div>Gratis</div><div>${prizePool}</div></div></div>
      `;
      $("#appendDivs").append(htmlStructure);
      containerAppended = true;
      addScratch();
    } else {
      console.log("Container already appended");
    }
  }
  // this is added when button is pressed
  function addScratch() {
    $("._front_text").addClass("_s2");
    updateTextBody("RĂZUIEȘTE cartonașele și", "DESCOPERĂ bonusul");
    console.log("loaded Scratch Script");
    function checkUpdateStatus() {
      //filter _containers obj
      const completedContainers = _containers.filter(
        (container) => container.completionStatus
      );
      // Check if two or more containers have completionStatus set to true
      if (completedContainers.length >= 2) {
        // console.log(completedContainers, "completedContainers");
        // Disable pointer events for the remaining containers  -> i want to prevent/block and not use the pointerEvents because can be disabled in Inspect Element
        _containers.forEach((container) => {
          if (!container.completionStatus) {
            const containerElement = document.getElementById(container.id);
            if (containerElement) {
              containerElement.style.pointerEvents = "none";
            }
          }
        });
      }
    }
    //create scrath card
    function createScratchCard(
      containerId,
      imageForwardSrc,
      imageBackgroundSrc
    ) {
      const _containerBox = document.getElementById(containerId);
      //settings

      let percentValue;
      let brushResp;
      if (window.innerWidth < 768) {
        percentValue = 5;
        brushResp = "{/literal}{$asset}/png/elements/brushMobile.webp{literal}";
        console.log(percentValue);
        console.log(brushResp, "resp");
      } else {
        brushResp = "{/literal}{$asset}/png/elements/brush.webp{literal}";
        console.log(brushResp, "resp");
        percentValue = 5;
        console.log(percentValue);
      }
      const sc = new ScratchCard(_containerBox, {
        scratchType: SCRATCH_TYPE.BRUSH,
        containerWidth: _containerBox.offsetWidth,
        containerHeight: _containerBox.offsetHeight,
        imageForwardSrc: imageForwardSrc,
        imageBackgroundSrc: imageBackgroundSrc,
        htmlBackground: "", // for percent
        percentToFinish: percentValue,
        clearZoneRadius: 0, // for line
        nPoints: 0, // for spray
        pointSize: 0,
        brushSrc: brushResp,
        //callback when finish
        callback: function () {
          // let percent = sc.getPercent();

          //find indexid of obj
          const containerIndex = _containers.findIndex(
            (container) => container.id === containerId
          );
          //appent containerIndex in an array
          checkIndex.push(containerIndex);
          //check is empty ,check if array is === 2
          if (containerIndex !== -1) {
            if (checkIndex.length === 2) {
              // console.log(
              //   `The Final length of the array is ${checkIndex.length}`
              // );
              cardsShow.play();
              setTimeout(() => {
                jackpotWin.play();
                showModal("scenario2");
              }, 1300);
            } else {
              // console.log(`The length of the array is ${checkIndex.length}`);
            }
          }
          // console.log("done single card", containerIndex);
        },
      });

      sc.init()
        .then(() => {
          sc.canvas.addEventListener("scratch.move", () => {
            let percent = sc.getPercent().toFixed(0);
            console.log(percent, "per");
            const containerIndex = _containers.findIndex(
              (container) => container.id === containerId
            );
            if (percent >= 0) {
              if (containerIndex !== -1) {
                //add true for two containers and pointer events for last one
                _containers[containerIndex].completionStatus = true;

                checkUpdateStatus();
              }
            }
            // $percentValue check if empty document (prevent Re-render when scratch card)
            if (percent >= 2) {
              if ($(`#${containerId} .prizeScratch:empty`).length > 0) {
                if (textAppendedCount < texts.length) {
                  // Check arrays in arrays
                  const [text1, text2, imagePath1, imagePath2] =
                    texts[textAppendedCount];
                  const prizeScratchDiv = $(`#${containerId} .prizeScratch`);
                  // Function to append text and image
                  const appendTextAndImage = (text, imagePath, addCls) => {
                    const _addCls = text.slice(0, 3);
                    const divE = $("<div>")
                      .text(text)
                      .addClass("_line" + _addCls.toUpperCase())
                      .hide();
                    const imgE = $("<img>")
                      .attr("src", imagePath)
                      .addClass("prizeImage")
                      .hide();
                    // console.log(text, "tesxt");
                    prizeScratchDiv.append(divE);
                    //mini bug a second img tag is appended in(dom(parent)) with no attribute, so i check each container and i remove from dom
                    $(`#${containerId}`).append(imgE);
                    $(`#${containerId} img:not([src],[alt],[title])`).remove();
                    // fadeIn

                    divE.fadeIn("slow");
                    imgE.fadeIn("slow");
                  };

                  // Append text and image for the first/second
                  appendTextAndImage(text1, imagePath1);
                  appendTextAndImage(text2, imagePath2);

                  textAppendedCount++;
                }
              }
            }
          });
        })
        .catch((error) => {
          console.error("Error initializing scratch card:", error);
        });
    }

    _containers.forEach((container) => {
      createScratchCard(
        container.id,
        "{/literal}{$asset}/png/elements/unscratched5.webp{literal}",
        "{/literal}{$asset}/png/elements/scratched.webp{literal}"
      );
    });
    console.log("test");
  }
</script>
{/literal}
