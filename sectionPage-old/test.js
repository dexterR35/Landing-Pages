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

    let config = document.getElementById('myChart').getContext('2d');

    async function getData() {
        const url = './json/fixtureweather.json';

        const response = await fetch(url);
        //wait until the request has been completed;
        const datapoints = await response.json();

        console.log(datapoints, "datapoints");
        return datapoints;
    }

    getData().then(datapoints => {


        let dataStadium = datapoints.SectionTwo[0].infoForSectionTwo.map(function (index, i) {
            // console.log(index,"all matches")
            return index.Stadium;
        });

        // dataStadium.forEach((value, index, array) => {
        //     console.log(value, "----- dataStadium");

        // })


        let dataTemp = datapoints.SectionTwo[0].infoForSectionTwo.map(function (index, i) {
            return index.Temp.slice(0, 2);
        });


        let matchDays = datapoints.SectionTwo[0].infoForSectionTwo.map(function (index, i) {
            return index.Match;
        });

        //TODO:for 1 item


        let Temperature = dataTemp;
        // console.log(Temperature, "Temperature");
        let matchDays2 = matchDays;
        // console.log(matchDays2, "matchDays2");

        // for (const teemp of matchDays2) {
        //     document.write(teemp + "<br>");
        // }
        // document.write("The value for index '" + Temperature + "' is " + matchDays2 + "<br>");
        // let all = Temperature.Match + "+" + matchDays2.Temp;
        // array3 = Temperature.concat(matchDays2);
        // console.log(array3, "array concat");
        // document.write(array3);
        // console.log(all, "all");

        let fullSectionDb = datapoints.SectionTwo[0].infoForSectionTwo.map(function (index, i) {
            return index;
        });


        let searchItem = dataStadium;
        let indexSearchOf = searchItem.indexOf("!!Name In Array!!");
        let dataInclude = searchItem.includes("!!Name In Array!!");
      
        if (indexSearchOf && dataInclude) {
            document.write("✅" + dataInclude + " " + 'Name is contained in Array - index' + " " + indexSearchOf + "<br>");
        } else  {
            document.write('⛔️" + " Name is NOT contained in Array');
            
        }

        let ks;
        for (k = 0; k < searchItem.length; k++) {
            document.write(k + "<br>");
         
               matchDays.find((value, index, arr) => {
            // Delete element 5 on first iteration
            if (index !== value) {
                // console.log(delete value, "----- Delete value Boolean"); // value[ index or count arrays]
                // console.log(matchDays[index], "---- ✅ show Match Name");
                // console.log(value.length, "---- ✅ Show Value number of match from array");
               document.write(index, " + " + " ---- ✅ Array length" + " ");
                //    matchDays[matchDays.slice(0, 1)];
                //    console.log(arr, "arr");
            }

        });
        
        }

        console.log(fullSectionDb);
        // document.getElementById("demoss").innerHTML = obj.Match;

        function displayMatches(value, index) {
            let x;

            for (i = 0; i < fullSectionDb.length; i++) {
                x = fullSectionDb[i];

                // document.write(" " + x.Match + " :" + x.Temp + " " + " -stadion- " + x.Stadium + "<br>");
                // console.log(x.Match, "4");
                // console.log(x.Stadium, "5");                           
            }



            console.log(x, "x")
            console.log(index, "index")
        }

        displayMatches("match", 1);

        // for (var i in fullSectionDb) {
        //     // console.log("fullSectionDb--", i);

        //     // document.write("" + matchDays2[i]+""+[j]);
        //     console.log(i, "fullDb");
        //     for (var j in fullSectionDb[i]) {
        //         // console.log(j, "lfasfasf");
        //         // console.log("dffsafsasfs " + fullSectionDb[i][j]);
        //         // document.write("dffsafsasfs " + fullSectionDb[i] + [j]);
        //     }
        //     // console.log("matchDays2" + " " + matchDays2[i][j]);
        //     // document.write("The value for index '" + Temperature[0] + "' is " + matchDays2[0] + "<br>");
        // }

        // document.write("The value for index '" + matchDays2[i] + "' is " + fullSectionDb + "<br>");
        // if (matchDays.indexOf('!!highlighted!!') !== 1) {
        //     console.log('✅ Name is contained in Array - index',matchDays.indexOf('USA v Wales'));
        //   } else {
        //     console.log('⛔️ Name is NOT contained in Array');
        //   }
        // console.log(matchDays.toString(),"matchDay index")
        // matchDays.find((value, index, arr) => {
        //     // Delete element 5 on first iteration
        //     if (index == value.length) {
        //         console.log(delete value, "----- Delete value Boolean"); // value[ index or count arrays]
        //         console.log(matchDays[index], "---- ✅ show Match Name");
        //         console.log(value.length, "---- ✅ Show Value number of match from array");
        //         console.log(arr.length, "---- ✅ Array length");
        //         //    matchDays[matchDays.slice(0, 1)];
        //         //    console.log(arr, "arr");
        //     }

        // });
        console.log(matchDays.splice(20, matchDays.length), "matchDays.length");
        console.log(dataTemp.splice(0, dataTemp.length), "dataTemp.length splice from 0");
        // console.log(matchDays.splice(0, 10), "dataTemp.slice(0, 10)");

        const myChart = new Chart(config, {
            type: 'line',
            data: {
                labels: console.log(Temperature, "Temperature Temperature Chart"),
                datasets: [{
                    label: 'temp',
                    data: console.log(matchDays2, "matchDays2 Chart"),
                    backgroundColor: 'crimson',
                }],
                datasets: [{
                    label: console.log(matchDays2, "matchDays2 Chart"),
                    data: console.log(Temperature, "Temperature Temperature Chart"),
                    backgroundColor: 'crimson',
                }],
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
        // console.log(myChart.config.data.labels = dataStadium);
        // console.log(myChart.config.data.datasets[0].data = dataTemp);
        // console.log(myChart.config.data.labels = dataStadium.slice(0, 10));
        // console.log(myChart.config.data.datasets[0].data = dataTemp.slice(0, 10));
        // console.log(monthInfo, "Stadium");
        // console.log(TempInfo, "TempInfo");
        // myChart.config.data.datasets[0].data = dataStadium.slice(0, 10);
        // myChart.config.data.labels = dataTemp.slice(0, 10);
        // myChart.config.data.labels = dataStadium.splice(0, 10);
        // myChart.config.data.datasets[0].data = dataTemp.splice(0, 10);
        // myChart.update();
    });


}

updateChart();

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