// const sheetId = '1dzx8QSiBQFcUOQTPa_uI64OCGQqESWtrq6EwqOVngZw';
// const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
// const sheetName = 'user-data';
// const query = encodeURIComponent('Select *')
// const url = `${base}&sheet=${sheetName}&tq=${query}`
// const data = []
// document.addEventListener('DOMContentLoaded', init)
// const output = document.querySelector('.output')
// function init() {
//     fetch(url)
//         .then(res => res.text())
//         .then(rep => {
//             //Remove additional text and extract only JSON:
//             const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
//             console.log(rep)
//             const colz = [];
//             const tr = document.createElement('tr');
//             //Extract column labels
//             jsonData.table.cols.forEach((heading) => {
//                 if (heading.label) {
//                     let column = heading.label;
//                     colz.push(column);
//                     const th = document.createElement('th');
//                     th.innerText = column;
//                     tr.appendChild(th);
//                 }
//             })
//             output.appendChild(tr);
//             //extract row data:
//             jsonData.table.rows.forEach((rowData) => {
//                 const row = {};
//                 colz.forEach((ele, ind) => {
//                     row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
//                 })
//                 data.push(row);
//             })
//             processRows(data);
//         })
// }

// function processRows(json) {
//     json.forEach((row) => {
//         const tr = document.createElement('tr');
//         const keys = Object.keys(row);

//         keys.forEach((key) => {
//             const td = document.createElement('td');
//             td.textContent = row[key];
//             tr.appendChild(td);
//         })
//         output.appendChild(tr);
//     })
// }


let SHEET_ID = '1Yy9ofhf_D1-6WPH0BUsaOOXTPuUdnluwXRn4LSKefa4'
let SHEET_TITLE = 'search_words';
let SHEET_RANGE = 'A1:B200'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

    let team_fetch = fetch(FULL_URL)
    .then(res => res.text())
    .then(rep => {
        let data = JSON.parse(rep.substr(47).slice(0, -2));
        let lengthData = data.table.rows.length;
        let selectedTeams = [];
        for (let i = 0; i < 3; i++) {
            let randomIndex;
          
            // never same value
            do {
                randomIndex = Math.floor(Math.random() * lengthData);
            }
            while (selectedTeams.includes(randomIndex));

            const selectedTeam = data.table.rows[randomIndex].c[1].v;
            selectedTeams.push(selectedTeam);
            console.log(selectedTeam,"data");
        }
  
        return selectedTeams;
    });
 

    async function getSelectedTeams() {
        let selectedTeams = await team_fetch;
        console.log(selectedTeams,"data22");
    }
   let test =  getSelectedTeams();

   console.log (test,"test")