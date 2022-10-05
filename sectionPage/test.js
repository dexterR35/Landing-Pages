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
            return index.Wind.slice(0, -3);
        });
        // console.log(temp);
        console.log(temp, "Test");
        // console.log(stadium);
        console.log(rain);


        const ctx = document.getElementById('myChart').getContext('2d');
        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: stadium,
                datasets: [{
                    label: 'temp',
                    data: rain,
                    backgroundColor: 'crimson',

                }]
            },
            options: {
                maintainAspectRatio: true,
                responsive: true,

                normalized: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },

            }
        });
        myChart.data.labels = stadium;
        myChart.data.datasets[0].data = temp;
        // myChart.config.data.datasets[0].data = temp.splice(0, 10);
        // myChart.config.data.labels = stadium.splice(0, 10);
        console.log(myChart.config.data.labels = stadium);
        console.log(myChart.config.data.datasets[0].data = temp);
        myChart.update();
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
            );*/
    };
};

// window.addEventListener('beforeprint', () => {
//     myChart.resize(200, 400);
//   });
//   window.addEventListener('afterprint', () => {
//     myChart.resize();
//   });

/*
function updateChart() {



    async function fetchData() {
        const url = './json/fixtureweather.json';
        const response = await fetch(url);
        //wait until the request has been completed;
        const datapoints = await response.json();
        console.log(datapoints, "datapoints");
        return datapoints;
        //
    }

    let test = fetchData().then(datapoints => {

        let dataStadium = datapoints.MatchDayReport[0].MatchInfo.map(function (index, i) {
            return index.Stadium;
        });
        let dataTemp = datapoints.MatchDayReport[0].MatchInfo.map(function (index, i) {
            return index.Temp;
        });





        // console.log(monthInfo, "Stadium");
        // console.log(TempInfo, "TempInfo");
        console.log(myChart.config.data.labels);
        console.log(myChart.config.data.datasets[0].data.splice(0, 10));
        myChart.config.data.labels = dataStadium.splice(0, 10);
        myChart.config.data.datasets[0].data = dataTemp.splice(0, 10);
        myChart.update();
    });
    console.log(test)
}



// setup 
const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
        label: 'stadium temp',
        data: [18, 12, 6, 9, 12, 3, 9],
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

updateChart();*/


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