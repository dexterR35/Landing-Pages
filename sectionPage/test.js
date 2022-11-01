/*
let xmlhttp = new XMLHttpRequest();
let url = "./json/fixtureweather.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const datapoints = JSON.parse(this.responseText);
        // console.log(data);

        const temp = datapoints.MatchDayReport[0].MatchInfo.map(function (index, i) {
            return index.Temp.slice(0, -1);
        });
        const stadium = datapoints.MatchDayReport[0].MatchInfo.map(function (index, i) {
            return index.Stadium;
        });
        const rain = datapoints.MatchDayReport[0].MatchInfo.map(function (index, i) {
            console.log(i < 3);
            return index.Wind.slice(0, -3);
        });
     
        // console.log(temp, "Test");
        // // console.log(stadium);
        // console.log(rain);


        const config = document.getElementById('myChart').getContext('2d');
        
        const myChart = new Chart(config, {
            type: 'line',
            data: {
                labels:stadium.splice(0,20),
                datasets: [{
                    label: 'temp',
                    data: rain,
                    backgroundColor: 'crimson',

                }]
            },
            options: {
                maintainAspectRatio: true,
                responsive: true,

               
                scales: {
                    y: {
                        beginAtZero: false
                    }
                },

            }
        });
        
        // myChart.data.datasets[0].data = temp;
        // myChart.config.data.datasets[0].data = temp.splice(0, 10);
        // myChart.config.data.labels = stadium.splice(0, 10);
        console.log(myChart.config.data.labels = stadium);
        console.log(myChart.config.data.datasets[0].data = temp);
        // myChart.update();
        /*    const data = {
                labels: stadium.slice(0,10),
                datasets: [{
                    label: 'stadium temp',
                    data: stadium.slice(0,5),
                    backgroundColor: "crimson"
                }]
            };
            
            // config 
            const config = {
                type: 'bar',
                data,
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            };
            
            // render init block
            const myChart = new Chart(
                document.getElementById('myChart'),
                config
            );
    };
};
*/
// window.addEventListener('beforeprint', () => {
//     myChart.resize(200, 400);
//   });
//   window.addEventListener('afterprint', () => {
//     myChart.resize();
//   });


function updateChart() {
    async function fetchData() {
        const url = './json/test.json';
        const response = await fetch(url);
        //wait until the request has been completed;
        const dataS = await response.json();
        console.log(dataS, "datas");
        return dataS;
    }

    let test = fetchData().then(dataS => {
        let dataAll = dataS.map(function (index, i) {
            //         return index.Stadium;
            //     });
            console.log(index, "index all obj");
            console.log(i, "i all obj");
        })
        let dataInfo = dataS[1].sections.map(function (index, i) {
                    return index.content;
                });
            // console.log(index, "index");
            // console.log(i, "index");
            console.log(dataInfo, "dataInfo");
        })
        // console.log(test,"test")
        // console.log(dataAll, "dataAll");
      
    
}

updateChart();
    // let test = fetchData().then(datapoints => {
    //     let dataStadium = datapoints.SectionTwo[0].infoForSectionTwo.map(function (index, i) {
    //         return index.Stadium;
    //     });

    //     let dataTemp = datapoints.SectionTwo[0].infoForSectionTwo.map(function (index, i) {
    //         return index.Temp.slice(0, 2);
    //     });
    //     const config = document.getElementById('myChart').getContext('2d');
    //     const myChart = new Chart(config, {
    //         type: 'line',
    //         data: {
    //             labels: dataStadium.slice(0, 10),
    //             datasets: [{
    //                 label: 'temp',
    //                 data: dataTemp.slice(0, 10),
    //                 backgroundColor: 'crimson',

    //             }]
    //         },
    //         options: {
    //             maintainAspectRatio: true,
    //             responsive: true,


    //             scales: {
    //                 y: {
    //                     beginAtZero: false
    //                 }
    //             },

    //         }
    //     });
    //     console.log(myChart.config.data.labels = dataStadium);
    //     console.log(myChart.config.data.datasets[0].data = dataTemp);
    //     console.log(myChart.config.data.labels = dataStadium.slice(0, 10));
    //     console.log(myChart.config.data.datasets[0].data = dataTemp.slice(0, 10));
    //     // console.log(monthInfo, "Stadium");
    //     // console.log(TempInfo, "TempInfo");
    //     // myChart.config.data.datasets[0].data = dataStadium.slice(0, 10);
    //     // myChart.config.data.labels = dataTemp.slice(0, 10);
    //     // myChart.config.data.labels = dataStadium.splice(0, 10);
    //     // myChart.config.data.datasets[0].data = dataTemp.splice(0, 10);
    //     // myChart.update();
    // });
    // console.log(test)

/*
        const removeChar = (str, c) => str.replaceAll(new RegExp(`[${c}]`, "gi"), "");
        const run = () => {
            const str = "Achievement unlocked";
            const chars = ["c"];
            let result = str;
            chars.forEach((char) => {
                result = removeChar(result, char);
            });
            return result;
        };
        console.log(run());


*/

// function boldString(str, substr) {
//     var strRegExp = new RegExp(substr, 'g');
//     return str.replace(strRegExp, '<b>'+substr+'</b>');
//   }


//   var fruitsArray = [
//     { name: 'Banana', image: 'banana.jpg' }, 
//     { name: 'Apple', image: 'apple.jpg' }, 
//     { name: 'Orange', image: 'orange.jpg' }
//   ];

//   for (var i = 0; i < boldStuffs.length; i += 1) {
//     var fruit = getRandomItem(fruitsArray);
//     boldStuffs[i].innerHTML = fruit.name + '<img src="'+fruit.image+'">';
// }


// var count =0;
// $(document).ready(function() {
//   if (window.File && window.FileList && window.FileReader) {
//     $("#files").on("change", function(e) {

//       var files = e.target.files,
//         filesLength = files.length;
//         console.log(filesLength);
//         count++;
//       for (var i = 0; i < filesLength; i++) {
//         var f = files[i]
//         var fileReader = new FileReader();
//         fileReader.onload = (function(e) {
//           var file = e.target;
//           $("<span class=\"pip\">" +
//             "<img class=\"imageThumb\" src=\"" + e.target.result + "\" title=\"" + file.name + "\"/>" +
//             "<br/><span class=\"removeImg\">Remove image</span>" +
//             "</span>").insertAfter("#files");
//           $(".removeImg").click(function(){
//             $(this).parent(".pip").remove();
//           });

//           // Old code here
//           /*$("<img></img>", {
//             class: "imageThumb",
//             src: e.target.result,
//             title: file.name + " | Click to remove"
//           }).insertAfter("#files").click(function(){$(this).remove();});*/

//         });
//         fileReader.readAsDataURL(f);
//       }
//     });
//   } else {
//     alert("Your browser doesn't support to File API")
//   }
// });







































/*


        var images = new Array();
        function preload() {
          for (i = 0; i < preload.arguments.length; i++) {
            images[i] = new Image();
            images[i].src = preload.arguments[i];
            if (i == 143) {
              function endPreloader() {
                $(".preloader").fadeOut();
                $(window).scrollTop(0);
              }
              images[i].onload = endPreloader;
            }
          }
        }
        preload(
          "https://www.exsus.com/highway-one-roadtrip/_res/css/images/bg_alcatraz.png",
          "https://www.exsus.com/highway-one-roadtrip/_res/images/img_thumbnail.jpg"
        );
  */