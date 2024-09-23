const token = '2f97bb641f2096c1e98a723c249a6ece'
const url = 'https://qaadmin.livepartners.com/api/streaming/'
const username = 'testcozmin'

//Add new player to table, on second request error if exist or error if not exist in Netbet DB
$.ajax({
    url: url + 'optin/' + username,
    type: 'POST',
    headers: {
        'Authorization': 'Bearer ' + token
    },
    success: function(response) {
        console.log('response:', response);
    },
    error: function(xhr, status, error) {
        console.log('response:', error);
    }
});

//Delete player from table, on second request error or error if player not exist, else empty response with code 204
$.ajax({
    url: url + 'optout/' + username,
    type: 'DELETE',
    headers: {
        'Authorization': 'Bearer ' + token
    },
    success: function(response) {
        console.log('response:', response);
    },
    error: function(xhr, status, error) {
        console.log('response:', error);
    }
});

//Check if player exist in table, return true/false
$.ajax({
    url: url + 'check/' + username,
    type: 'GET',
    headers: {
        'Authorization': 'Bearer ' + token
    },
    success: function(response) {
        console.log('response:', response);
    },
    error: function(xhr, status, error) {
        console.log('response:', error);
    }
});

//Return all stats that you need for table + time when last time cron executed to update stats
$.ajax({
    url: url + 'data', //Return stats that you need but I filtered only cash_bet > 0
    //url: url + 'data/0', //Return all stats not filtered
    type: 'GET',
    headers: {
        'Authorization': 'Bearer ' + token
    },
    success: function(response) {
        console.log('response:', response);
    },
    error: function(xhr, status, error) {
        console.log('response:', error);
    }
});

//TEST route to check in DB if all is correct, we will delete it after testing
$.ajax({
    url: url + 'get/' + username, //To check 1 player all fields in our DB
    //url: url + 'get/', //Without username return all records in DB
    type: 'GET',
    headers: {
        'Authorization': 'Bearer ' + token
    },
    success: function(response) {
        console.log('response:', response);
    },
    error: function(xhr, status, error) {
        console.log('response:', error);
    }
});