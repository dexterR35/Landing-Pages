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







// let dataLink = new Request('https://jira.rei-d-services.com/activity?maxResults=10&os_authType=basic&title=undefined');

// async function getDataJson() {
//     const response = await fetch(dataLink, {
//             method: 'GET',
//             mode: 'cors',
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

//         .then((objectData) => {
//             let tableData = '';
//             objectData.map((values, index, itemsToRenderInTable) => {
//                 let result = values.hasOwnProperty('stream');
//             }).join("");
//             console.log(objectData, "objectData")
//             // true
//             console.log(getDataJson, "getDataJson")
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
      


 

//     (function() {

// $.getJSON( "./jira.json", function( data ) {
  
//     var items = [];
//     console.log(items,"items local json");
//     $.each( data, function( key, val ) {
//       items.push( "<li id='" + key + "'>" + val + "</li>" );
//     });
   
//     $( "<ul/>", {
//       "class": "my-new-list",
//       html: items.join( "" )
//     }).appendTo( "body" );
//   });





// // Assign handlers immediately after making the request,
// // and remember the jqxhr object for this request
// var jqxhr = $.getJSON( "./output.json", function() {
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


//     //var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
// //     var flickerAPI = "https://jira.rei-d-services.com/activity?maxResults=10&os_authType=basic&title=undefined";

// //     $.getJSON( flickerAPI, {
// //       tags: "mount rainier",
// //       tagmode: "any",
// //       format: "json",
// //       mode: 'cors',
    

// //       credentials: 'include',
// //         headers: {
// //         // 'Content-Type': 'application/json'
// //         'Content-Type': 'application/x-www-form-urlencoded',
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
// // console.log("data",data)
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
    const res = await fetch("https://jira.rei-d-services.com/activity?maxResults=10&os_authType=basic&title=undefined");
   
    const jsonResult = await res.json();
    result.innerText = JSON.stringify(jsonResult, null, 2);
  } catch (error) {
    console.log(error);
  }

}

// add event listener for #fetchdata button
fetchDataBtn.addEventListener("click", getData);  

async function postData(url = 'https://jira.rei-d-services.com/activity?maxResults=10&os_authType=basic&title=undefined', data = {}) {
    // Default options are marked with *

    const response = await fetch(url, {
      method: 'POST', // GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
    //   headers: {
    //     'Content-Type': 'application/json'
    //     // 'Content-Type': 'text/plain'
    //     // 'Content-Type': 'application/x-www-form-urlencoded',
    //   },
      headers: {
        Authorization : 'Basic c2thcmFrYXM6NjU0MzIx',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Key: '1',
        Type : 'asd',
        Value : 'sdf'
      }),
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    console.log(response, "response");
    // return response.json(); // parses JSON response into native JavaScript objects
  }
 
  postData('https://jira.rei-d-services.com/activity?maxResults=10&os_authType=basic&title=undefined', { answer: 42 })
    .then((data) => {
      console.log(data, "data2"); // JSON data parsed by `data.json()` call
    });






    function getRequest(url) { 
        return fetch(url)
            .then((res) => { 
                if (res.ok) { // Checks server response (if there is one) 
                    return res.json();
                } else {
                    throw new Error("Bad response");
                }
            });
    }
    
    function getData(url) {
        getRequest(url)
            .then(data => {
                console.log(data); // the data
            })
            .catch(err => console.log(err)); // Catch handles an error
    }
    
    getData('https://jira.rei-d-services.com/activity?maxResults=10&os_authType=basic&title=undefined');





  
    fetch('https://jira.rei-d-services.com/activity?maxResults=10&os_authType=basic&title=undefined', {method: "POST", mode: "no-cors"})
    .then((response) => {
        console.log(response);
        response.text().then((data) => {
            console.log("data2:" + data);
    });
});

