const token = '2f97bb641f2096c1e98a723c249a6ece';
const url = 'https://qaadmin.livepartners.com/api/streaming/';
const username = 'TestCristianPa'; // Specify the username you want to check

// Function to check if a player exists in the table
function checkIfPlayerExists(username) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: url + 'check/' + username,
            type: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            success: function(response) {
                console.log('Check Player Exists Response:', response);
                // Assuming response contains a property 'exists' or similar that is true/false
                if (response && response.exists !== undefined) {
                    resolve(response.exists);
                } else {
                    resolve(false); // Default to false if response is not structured as expected
                }
            },
            error: function(xhr, status, error) {
                console.error('Error checking if player exists:', error);
                reject(error);
            }
        });
    });
}

// Function to get all stats
function getAllStats(filtered = true) {
    const requestUrl = filtered ? url + 'data' : url + 'data/0';
    return new Promise((resolve, reject) => {
        $.ajax({
            url: requestUrl,
            type: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            success: function(response) {
                console.log('Stats Response:', response);
                resolve(response); // Return the response data
            },
            error: function(xhr, status, error) {
                console.error('Error fetching stats:', error);
                reject(error);
            }
        });
    });
}

// Example usage:

// Check if player exists
checkIfPlayerExists(username).then(exists => {
    if (exists) {
        console.log(`Player ${username} exists in the table.`);
    } else {
        console.log(`Player ${username} does not exist in the table.`);
    }
}).catch(error => {
    console.error('An error occurred while checking player existence:', error);
});

// Get all stats (filtered by cash_bet > 0)
getAllStats(true).then(stats => {
    console.log('Filtered Stats:', stats);
}).catch(error => {
    console.error('An error occurred while fetching stats:', error);
});

// Get all stats (unfiltered)
getAllStats(false).then(stats => {
    console.log('Unfiltered Stats:', stats);
}).catch(error => {
    console.error('An error occurred while fetching stats:', error);
});
