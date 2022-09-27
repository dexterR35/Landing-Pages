


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaPsn82u0CblmIXb9SktjOvfq2vRqeBPY",
  authDomain: "macos-luna.firebaseapp.com",
  databaseURL: "https://macos-luna-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "macos-luna",
  storageBucket: "macos-luna.appspot.com",
  messagingSenderId: "689056077392",
  appId: "1:689056077392:web:8275d5fe7f18ac35a5a355",
  measurementId: "G-5EMDZ1MDC2"
};

// // JSON Object
// fetch('https://jira.rei-d-services.com/activity?maxResults=10&os_authType=basic&title=undefined', {
//     method: 'POST',
//     body: JSON.stringify({

//     }),
//     mode: 'no-cors',
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8'
//     }
// }).then(function (response) {
//     if (response.ok) {
//         return response.json();
//     }
//     return Promise.reject(response);
// }).then(function (data) {
//     console.log(data);
// }).catch(function (error) {
//     console.warn('Something went wrong.', error);
// });


// let dataLink = new Request('https://jira.rei-d-services.com/activity?maxResults=10&os_username=marian.iordache&os_password=Juyv3fwrhyYMZyTp&title=undefined');
// console.log(dataLink, "tableData")
// async function getDataJson() {
//     const response = await fetch(dataLink, {
//             method: 'POST',
//             mode: 'no-cors',
//             cache: "default",
//             headers: {
//                          'Content-type': 'application/json; charset=UTF-8'
//                     }
//         })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('Network Response is not OK');
//             }
//             return response.json();

//         })

    
//         .catch(error => {
//             console.error('There has been a problem with your fetch operation:', error);
//         });
// }



    // $.getJSON('jira.json')
    //     .success(function (data) {
    //         var tr;
    //         console.log(tr,"tr");
    //         for (var i = 0; i < data.length; i++) {
    //             tr = $('<tr/>');
    //             tr.append("<td>" + data[i][0] + "</td>");
    //             tr.append("<td>" + data[i][1] + "</td>");
    //             $('table').append(tr);
    //         }
    //     })
    //     .error(function (e) {
    //         console.error(e);
    //     })
      


 

    // (function() {




// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
// var jqxhr = $.getJSON( "https://jira.rei-d-services.com/activity?maxResults=10&os_username=marian.iordache&os_password=Juyv3fwrhyYMZyTp&title=undefined", function() {
//     console.log( "success local json", jqxhr );
//   })
//     .done(function() {
//       console.log( "second success" );
//       console.log( "getjson fetch",jqxhr );
//     })
//     .fail(function() {
//       console.log( "error" );
//     })
//     .always(function() {
//       console.log( "complete" );
//     });
   
//   // Perform other work here ...
   
//   // Set another completion function for the request above
//   jqxhr.always(function() {
//     console.log( "second complete" );
//   });


// //     var flickerAPI = "https://jira.rei-d-services.com/activity?maxResults=10&os_username=marian.iordache&os_password=Juyv3fwrhyYMZyTp&title=undefined";


// //     $.getJSON( flickerAPI, {
// //       tags: "mount rainier",
// //       tagmode: "any",
// //       format: "json",
// //       mode: 'cors',
    

// //       credentials: 'include',
// //         headers: {
// //         'Content-Type': 'application/json'
// //         // 'Content-Type': 'application/x-www-form-urlencoded',
// //       },

// //     })
// //       .done(function( data ) {
// //         $.each( data.items, function( i, item ) {
// //           $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
// //           if ( i === 3 ) {
// //             return false;
// //           }
// //         });
      
// //       });
// // console.log("flickerAPI",flickerAPI)

//     })();

const fetchDataBtn = document.querySelector("#fetchdata");
const result = document.querySelector("#result");
console.log(result , "result2");
console.log(fetchDataBtn , "fetchDataBtn");

console.log( "1");
// gets data from API and sets the content of #result div
async function getData() {
    console.log( "2");
  result.innerText = "Loading....";
  console.log(result, "result");
  try {
    const res = await fetch("https://macos-luna-default-rtdb.europe-west1.firebasedatabase.app/");
    
   
   
    const jsonResult = await res.json();
    result.innerText = JSON.stringify(jsonResult, null, 2);
  } catch (error) {
    console.log(error);
  }

}

// // add event listener for #fetchdata button
fetchDataBtn.addEventListener("click", getData);  

// async function postData(url = 'https://jira.rei-d-services.com/activity?maxResults=10&os_username=marian.iordache&os_password=Juyv3fwrhyYMZyTp&title=undefined', data = {}) {
//     // Default options are marked with *

//     const response = await fetch(url, {
//       method: 'POST', // GET, POST, PUT, DELETE, etc.
//       mode: 'no-cors', // no-cors, *cors, same-origin
//       cache: 'no-cache', // default, no-cache, reload, force-cache, only-if-cached
//       credentials: 'same-origin', // include, *same-origin, omit
//       headers: {
      
//         'Content-Type': 'text/plain'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
    
   //
    
//       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       body: JSON.stringify(data) // body data type must match "Content-Type" header
//     });
//     console.log(response, "response");
//     // return response.json(); // parses JSON response into native JavaScript objects
//   }
 
//   postData('https://jira.rei-d-services.com/activity?maxResults=10&os_username=marian.iordache&os_password=Juyv3fwrhyYMZyTp&title=undefined', { answer: 42 })
//     .then((data) => {
//       console.log(data, "data2"); // JSON data parsed by `data.json()` call
//     });






    // function getRequest(url) { 
    //     return fetch(url)
    //         .then((res) => { 
    //             if (res.ok) { // Checks server response (if there is one) 
    //                 return res.json();
    //             } else {
    //                 throw new Error("Bad response");
    //             }
    //         });
    // }
    
    // function getData(url) {
        
    //     getRequest(url)
    //         .then(data => {
    //             console.log(data); // the data
    //         })
    //         .catch(err => console.log(err)); // Catch handles an error
    // }
    
    // getData("https://jira.rei-d-services.com/activity?maxResults=10&os_username=marian.iordache&os_password=Juyv3fwrhyYMZyTp&title=undefined");





    var url= 'https://macos-luna-default-rtdb.europe-west1.firebasedatabase.app/';
    $.ajax({
        url: url,
        type: 'POST',
        mode: 'no-cors',
        crossOrigin: false,
        dataType: "jsonp",
        headers: {
                                     'Content-type': 'application/json; charset=UTF-8'
                                },
        xhrFields: { withCredentials: true },
        accept: 'text/jsonp'
    }).done(function (data) {
        alert(data);                
    }).fail(function (xhr, textStatus, error) {
        var title, message;
        switch (xhr.status) {
            case 403:
                title = xhr.responseJSON.errorSummary;
                message = 'Please login to your server before running the test.';
                break;
            default:
                title = 'Invalid URL or Cross-Origin Request Blocked';
                message = 'You must explictly add this site (' + window.location.origin + ') to the list of allowed websites in your server.';
                break;
        }
    });


    const ALLOWED_ORIGINS = ["https://jira.rei-d-services.com/activity?maxResults=10&os_username=marian.iordache&os_password=Juyv3fwrhyYMZyTp&title=undefined", "hhttps://jira.rei-d-services.com/activity?maxResults=10&os_username=marian.iordache&os_password=Juyv3fwrhyYMZyTp&title=undefined", "https://example.com"]


// Set CORS headers for preflight requests
function setCorsHeaders (req, res) {
  var originUrl = "https://jira.rei-d-services.com/activity?maxResults=10&os_username=marian.iordache&os_password=Juyv3fwrhyYMZyTp&title=undefined"


  if(ALLOWED_ORIGINS.includes(req.headers.origin)){
    originUrl = req.headers.origin
  }

  res.set('Access-Control-Allow-Origin', originUrl);
  res.set('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    // Send response to OPTIONS requests
    res.set('Access-Control-Allow-Methods', 'GET,POST','PUT','DELETE');
    res.set('Access-Control-Allow-Headers', 'Bearer, Content-Type');
    res.set('Access-Control-Max-Age', '3600');
    res.status(204).send('');
  }
}

function respondError (message, error, code, res) {
  var response = {
    message: message,
    error: error
  }
  res.status(code).end(JSON.stringify(response));
}


function respondSuccess (result, res) {
  var response = {
    message: "OK",
    result: result
  }
  res.status(200).end(JSON.stringify(response));
}



