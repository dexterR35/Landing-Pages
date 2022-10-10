// $(document).ready(function () {
//     updateChart();
// });











































// function updateChart() {
//     async function fetchData() {
//         const url = "./stadium.json";

//         const response = await fetch(url);
//         //wait until the request has been completed;
//         const datapoints = await response.json();
//         //   console.log(datapoints, "datapoints");
//         console.log(Object.values(datapoints), "values");
//         return datapoints;
//     };

//     fetchData().then(datapoints => {
//         const monthInfo = datapoints.SectionTwo[0].infoForSectionTwo.map(function (index) {
//             return index.Stadium;
//         });
//         console.log(monthInfo, "monthInfo outside return");
//         const Match2 = datapoints.SectionTree[0].infoForSectionTree.map(function (index) {
//             return index.Match;
//         });
//         console.log(Match2, "Match return");
//         myChart.config.data.labels = monthInfo;
//         console.log(monthInfo.slice(0, 10), "show top 10 whatever");
//         console.log(Match2.slice(0, 10), "show top 10 whatever");
//         myChart.config.data.labels = monthInfo.slice(0, 10);
//         // myChart.config.data.labels = Match2.slice(0, 10);
//         myChart.update();
//     });
// }




var xhr = new XMLHttpRequest();
xhr.onload = function () {
    if (xhr.status === 200) {
        responseObject = JSON.parse(xhr.responseText);
        console.log(responseObject,'test')
        //build dom manipulation
        let newContent = '';
        console.log(newContent,"test");
        for (var i = 0; i < responseObject.events.length; i++); {
            console.log(i,"events de i")
            newContent += '<div class = "events">';
            newContent += '<img src ="' + responseObject.events[i].SectionTwo.Stadium + ' " ';
            newContent += 'alt="' + responseObject.events[i].Stadium + ' " />';
            newContent += '<p><b>' + responseObject.events[i].Temp + '</b><br>';
            newContent += responseObject.events[i].Wind + '</p>';
            newContent += '</div>';
        }
        document.getElementById('content').innerHTML = newContent;
    }
};

xhr.open('GET', './stadium.json', true);
console.log(xhr, 'xhr')
xhr.send(null);