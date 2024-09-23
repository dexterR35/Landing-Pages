const token = 'testcozmin'; // Replace with actual token
const baseURL = 'https://qaadmin.livepartners.com/api/streaming/';
const headers = {
    'Authorization': `Bearer ${token}`, // Include Bearer token
    'Content-Type': 'application/json'  // Set content type
};

// Utility function to make AJAX requests
function apiRequest(endpoint, method, data = null) {
    return $.ajax({
        url: baseURL + endpoint,
        type: method,
        headers: headers, // Include headers in the request
        data: data ? JSON.stringify(data) : null, // Serialize data if present
        success: function(response) {
            console.log(`Success: ${method} ${endpoint}`, response);
        },
        error: function(xhr, status, error) {
            console.error(`Error: ${method} ${endpoint}`, {
                status: status,
                message: xhr.responseText,
                error: error
            });
            if (xhr.status === 401) {
                console.error('Unauthorized! Check your token or CORS settings.');
            } else if (xhr.status === 403) {
                console.error('Forbidden! You do not have permission to access this resource.');
            } else if (xhr.status === 0) {
                console.error('Network Error. CORS issue likely.');
            }
        }
    });
}

// Function to add a new player
function addPlayer(username) {
    return apiRequest(`optin/${username}`, 'POST')
        .then(response => {
            console.log(`Player ${username} added:`, response);
        })
        .catch(error => {
            console.error(`Failed to add player ${username}:`, error);
        });
}

// Function to delete a player
function deletePlayer(username) {
    return apiRequest(`optout/${username}`, 'DELETE')
        .then(response => {
            console.log(`Player ${username} deleted.`);
        })
        .catch(error => {
            console.error(`Failed to delete player ${username}:`, error);
        });
}

// Function to check if player exists
function checkPlayerExists(username) {
    return apiRequest(`check/${username}`, 'GET')
        .then(response => {
            console.log(`Player ${username} exists:`, response);
            return response; // This should return true/false based on API response
        })
        .catch(error => {
            console.error(`Failed to check player ${username}:`, error);
            return false; // Return false on error
        });
}

// Function to get player statistics
function getPlayerStats(filter = true) {
    const endpoint = filter ? 'data/' : 'data/0';
    return apiRequest(endpoint, 'GET')
        .then(response => {
            console.log('Player statistics:', response);
        })
        .catch(error => {
            console.error('Failed to get player statistics:', error);
        });
}

// Function to get player data for testing
function getPlayerData(username = null) {
    const endpoint = username ? `get/${username}` : 'get/';
    return apiRequest(endpoint, 'GET')
        .then(response => {
            console.log(`Player data ${username ? `for ${username}` : ''}:`, response);
        })
        .catch(error => {
            console.error(`Failed to get player data ${username ? `for ${username}` : ''}:`, error);
        });
}

// Function to set streamer status
function setStreamerStatus(username, status) {
    return apiRequest(`streamer/${username}/${status}`, 'POST')
        .then(response => {
            console.log(`Streamer status for ${username} set to ${status}:`, response);
        })
        .catch(error => {
            console.error(`Failed to set streamer status for ${username}:`, error);
        });
}

// Example Usage
async function exampleUsage() {
    const username = 'billos13';

    try {
        // Check if player exists
        const playerExists = await checkPlayerExists(username);

        if (!playerExists) {
            // Add player if not exists
            await addPlayer(username);
        }

        // Get player stats
        await getPlayerStats();

        // Set streamer status to 1 (active)
        await setStreamerStatus(username, 1);

        // Check player data in DB (for testing)
        await getPlayerData(username);
    } catch (error) {
        console.error('An error occurred during the example usage process:', error);
    } finally {
        // Delete player (to clean up) - cleanup should not throw error
        try {
            await deletePlayer(username);
        } catch (cleanupError) {
            console.warn('Failed to delete player during cleanup:', cleanupError);
        }
    }
}

// Execute example usage
exampleUsage();
