  // API key
  const API_KEY = 'AIzaSyAAfFbz11XXy1za2hcLHhiqKYcwF23kP-M';

  // Discovery doc URL for APIs used by the quickstart
  const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

  // The ID of the spreadsheet to retrieve data from.
  const SPREADSHEET_ID = '1pt__R7igjnx-IVYYRs0bXH6wOrREYVjeIN83ZNu8zBw';

  // The range of values to retrieve.
  const RANGE = 'Sheet1!A1:F10'; 
  const RANGE2 = 'Sheet1!J1:Q10';

  function gapiLoaded() {
    gapi.load('client', initializeGapiClient);
  }

  async function initializeGapiClient() {
    await gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: [DISCOVERY_DOC],
    });

    await fetchClassament();
    await fetchCotesData();
  }

  async function fetchCotesData() {
    try {
      const response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: RANGE,
      });

      const range = response.result;
      if (range.values.length) {
        // console.log('Data:');
        range.values.forEach((row) => {
          // console.log(row,"fasfa");
        });
        displayCotes(range.values);
      } else {
        console.log('No data found.');
      }
    } catch (err) {
      console.error('Error fetching spreadsheet data:', err);
    }
  }

  async function fetchClassament() {
    try {
      const response = await gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: SPREADSHEET_ID,
        range: RANGE2,
        includeGridData: true,
      });

      const range = response.result;
      if (range.values.length) {
        console.log('Cotes Data:');
        range.values.forEach((row) => {
          console.log(row);
        });
    
        displayClasament(range.values);
      } else {
        console.log('No cotes data found.');
      }
    } catch (err) {
      console.error('Error fetching cotes data:', err);
    }
  }

  function displayClasament(rows) {
const groupName = rows[0][1]; 
  const groupNameElement = document.querySelector('.tableScore-header .group-name');
  groupNameElement.textContent = groupName;
    const tableContent = document.getElementById('tableScore-content');
    let htmlContent = '';
  
    rows.slice(1).forEach(row => {
      const teamName = row[2];
      const isRomania = teamName.toLowerCase() === 'romania';
      const className = isRomania ? 'romania-row' : '';
      htmlContent += `
        <div class="parent-tableScore-row ${className}">
          <div class="tableScore-row">
            <div class="team-name">
              <img class="flag" src="${row[1]}" alt="${row[2]} flag">
              ${row[2]}
            </div>
            <div class="cell">${row[3]}</div>
            <div class="cell">${row[4]}</div>
            <div class="cell">${row[5]}</div>
            <div class="cell">${row[6]}</div>
            <div class="cell">${row[7]}</div>
          </div>
        </div>
      `;
    });
  
    tableContent.innerHTML = htmlContent;
  
  }

  function displayCotes(rows) {
    const cotesDiv = document.getElementById('coteMatch');
    let htmlContent = '';

    rows.slice(1).forEach(row => {
      htmlContent += `
        <div class="content-cote">
          <div class="matches-cote"><p>${row[0]}</p> <p>${row[1]}</p></div>
          <div class="date-cote"><p>${row[2]}</p></div>
          <div class="number-cote">
            <p>${row[3]} <span>|</span></p>
            <p>${row[4]} <span>|</span></p>
            <p>${row[5]} </p>
          </div>
        </div>
      `;
    });

    cotesDiv.innerHTML = htmlContent;
  }

  gapi.load('client:auth2', gapiLoaded);