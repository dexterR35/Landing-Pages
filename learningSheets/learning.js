// create an empty array
var myArray = [];

// create array with items. Can store any type
var myOtherArray = [myArray, true, 'a random string'];

// call specific value in an array
myOtherArray[0];
// will return myArray

// change value for this item
myOtherArray[0] = false;
// will now return false

// add to end of array
myOtherArray[myOtherArray.length] = 'new stuff';
// will return the new item 'new stuff'

// or you can use push()
myOtherArray.push('new stuff');
// will return new length of array

// you can remove this last item by using pop()
myOtherArray.pop();
// will return the last item of the array and will have removed it from myOtherArray

// shift and unshift will do the same for the begging of the Array
myOtherArray.shift();
// will remove and return first item of array

myOtherArray.unshift(1, 2);
// this will add 1 and 2 to beginning of array and return new length

// you can use delete keyword but turn value to undefine and not shorten length. so we use splice()
myOtherArray.splice(2, 1);
// this will remove and return  the third item only.
// first arg is where to start and second is how many things to splice. this example is 1.







//Adding to an API with Fetch

// If we use a “POST” request, we are able to add data to an API. 
// To post to an API, we now need to include a second argument in the original fetch request, which will be an object. 
// The object will contain important information. Below, you can see that my configObj has three key-value pairs. 
// The first is the type of request we are sending to the backend, which in this case is a post. 
// The second key-value pair is our headers, which tell the application what type of data content we are sending and what type of data we will accept in return.
// The third KV pair is our body, which is stringified form data. 
// Notice in the API image above that “name”, “image”, and “likes” are the non-primary keys of our API

let configObj = {
    method: "POST",
    mode: 'no-cors',
    headers: {
        "Content-Type": "application/json",
        //'Content-Type', 'text/html'
        "Accept": "application/json",
    },
    body: JSON.stringify({
        name,
        image,
        "likes": 0;
    })
};
fetch("link-httml", configObj)
    .then(function (response) {
        return response.json();
    })
    .then(toy => {
        console.log(toy)
    })
    .catch(err => console.error(err));



// FETCH APT GET REQEST USING ASYNC/AWAIT

const asyncGetCall = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        // enter you logic when the fetch is successful
        console.log(data);
    } catch (error) {
        // enter your logic for when there is an error (ex. error toast)
        console.log(error);
    }
}


asyncGetCall();



//Fetch api POST request using async/await:

const asyncPostCall = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // your expected POST request payload goes here
                title: "My post title",
                body: "My post content."
            })
        });
        const data = await response.json();
        // enter you logic when the fetch is successful
        console.log(data);
    } catch (error) {
        // enter your logic for when there is an error (ex. error toast)

        console.log(error)
    }
}

asyncPostCall();


//GET request using Promises:

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => {
        // enter you logic when the fetch is successful
        console.log(data)
    })
    .catch(error => {
        // enter your logic for when there is an error (ex. error toast)
        console.log(error)
    })

//POST request using Promises:
fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            // your expected POST request payload goes here
            title: "My post title",
            body: "My post content."
        })
    })
    .then(res => res.json())
    .then(data => {
        // enter you logic when the fetch is successful
        console.log(data)
    })
    .catch(error => {
        // enter your logic for when there is an error (ex. error toast)
        console.log(error)
    })



//GET request using Axios:

const axiosGetCall = async () => {
    try {
        const {
            data
        } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        // enter you logic when the fetch is successful
        console.log(`data: `, data)

    } catch (error) {
        // enter your logic for when there is an error (ex. error toast)
        console.log(`error: `, error)
    }
}

axiosGetCall()


//POST request using Axios:
const axiosPostCall = async () => {
    try {
        const {
            data
        } = await axios.post('https://jsonplaceholder.typicode.com/posts', {
            // your expected POST request payload goes here
            title: "My post title",
            body: "My post content."
        })
        // enter you logic when the fetch is successful
        console.log(`data: `, data)

    } catch (error) {
        // enter your logic for when there is an error (ex. error toast)
        console.log(`error: `, error)
    }
}


axiosPostCall();