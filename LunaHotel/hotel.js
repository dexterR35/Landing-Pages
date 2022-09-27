// let div =  document.createElement('div');





// let container = document.querySelector('.container');
// div.textContent = "div test";
// div.style.color = "crimson"
// container.setAttribute("data-map", "test");
// container.append(div);



// let div2 = document.createElement("div2");
// let p = document.createElement("p");
// div2.append(p);

// console.log(div.childNodes); // NodeList [ <p> ]





// let btn = document.createElement("button");
// btn.innerHTML = "Submit";
// btn.type = "submit";
// btn.name = "formBtn";
// container.appendChild(btn);

// // Create a new element
// var newNode = document.createElement('li');
// newNode.textContent = 'I am new here.';

// // Get the reference node
// var referenceNode = document.querySelector('#some-element');

// // Insert the new node after the last element in the reference node
// referenceNode.append(newNode);

// const list = document.getElementById("list");

// list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;
// Copy to Clipboard
// Please note that using innerHTML to append HTML elements (e.g. el.innerHTML += "<a href='…'>link</a>") will result in the removal of any previously set event listeners. That is, after you append any HTML element that way you won't be able to listen to the previously set event listeners.


// // div container
// let container = document.createElement('div');
// container.setAttribute("data-size", "100");
// container.classList.add("container");

// //wrapper
// let wrapper = document.querySelector(".wrapper");
// wrapper.appendChild(container);



// // btn div
// let btnDiv = document.createElement('div');
// btnDiv.classList.add("btn-container");
// container.appendChild(btnDiv);



// //btn check
// let btn_check = document.createElement('button');
// btn_check.innerHTML = "check av";
// btn_check.name = "check-info_booking";
// btn_check.classList.add("btn-check", "btn-all")
// btn_check.addEventListener("click", function () {
//   alert("Button ckech is clicked");
// });


// //btn cancel
// let cancel_booking = document.createElement('button');
// cancel_booking.innerHTML = "cancel";
// cancel_booking.name = "cancel-booking";
// cancel_booking.classList.add("btn-cancel_booking", "btn-all");
// cancel_booking.addEventListener("click", function () {
//   alert("Button cancel_booking is clicked");
// });

// //btn make
// let make_booking = document.createElement('button');
// make_booking.innerHTML = "make_booking";
// make_booking.name = "make-booking";
// make_booking.classList.add("btn-make_booking", "btn-all")
// make_booking.addEventListener("click", function () {
//   alert("Button make_booking is clicked");
// });

// //append buttons
// btnDiv.append(make_booking, cancel_booking, btn_check);





// //info div 

// let hotelDiv = document.createElement("div");
// hotelDiv.classList.add("hotelDiv");
// container.prepend(hotelDiv);



// let hotelDiv2 = document.querySelector(".hotelDiv");
// console.log(hotelDiv2);
// let titles = document.createElement("p");
// titles.textContent = "Luna Hotel";
// titles.classList.add = "test";
// hotelDiv2.appendChild(titles);




// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// };

// const member = {
//   firstName: "Hege",
//   lastName: "Nilsen",
// }

// let fullName = person.fullName.bind(member);


// let today = new Date();
// let hour = today.getHours();
// var message = ", mtfucker"
// let greeting;
// if (hour > 18) {
//   greeting = "good evening"
//   message.textContent = "test"

// } else if (hour > 0) {
//   greeting = "good morning" + message;

// } else {
//   greeting = "welcome"
//   message.textContent = "test"
//   greeting = "good morning" + message;
// }
// document.write(greeting);


// let price;
// let quantity;
// let total;
// price = (5 + 1) * 6;
// quantity = 0.5 * (16 + 1);
// total = price * quantity;

// let divss = document.createElement("p");
// divss.className = "quantity";
// divss.textContent = "$" + total;
// hotelDiv2.appendChild(divss);





// let colors;
// colors = ['white', 'red', 'yellow'];
// let colorDiv = document.createElement('div');

// colorDiv.textContent = colors.length;
// hotelDiv2.appendChild(colorDiv);




// let msg = "sign up to recive";

// function updateMsg() {
//   let element = document.createElement("p");
//   element.textContent = msg;
//   hotelDiv2.appendChild(element);
// }
// updateMsg();


// function getArea(width, height, depth) {
//   let areaC = width * height;
//   let volume = width * height * depth;
//   let sizes = [areaC, volume];
//   console.log(depth, "depth");
//   console.log(volume, "volume");
//   console.log(areaC, "areaC");
//   console.log(sizes, "sizes");
//   return sizes;
// }


// let one = getArea(2, 4, 6)[0];
// let two = getArea(1, 3, 9)[1];

// console.log(one, "one");
// console.log(two, "two");



// var hotel = {
//   name: "luna",
//   rooms: 40,
//   booked: 25,
//   gym: true,
//   roomTypes: ["twin", "double", "suite"],
//   checkAvailability: function () {

//     return this.rooms - this.booked;
//   },
// };
// let check = hotel.checkAvailability();
// console.log(check, "check anailability")

// console.log(hotel, "Hotel");


// let hotelName = document.createElement('p');
// hotelName.textContent = hotel.checkAvailability();
// hotelDiv2.appendChild(hotelName);
// let hotelName2 = document.createElement('p');
// let textD = document.createTextNode("pssss");
// hotelDiv2.appendChild(textD);
// hotel.name = "new obj";
// console.log(hotel.name, "hotelChange")
// hotelName2.textContent = hotel.name;
// hotelDiv2.appendChild(hotelName2);


// let msgG = '<h2>browser windows</h2><p>witdh: ' + window.innerWidth + '</p>';
// msgG += '<p>height: ' + window.innerHeight + '</p>';

// msgG += '<h2>history</h2><p>items: ' + window.history.length + '</p>';

// let dov = document.createElement('p');

// dov.innerHTML = msgG;
// hotelDiv2.appendChild(dov);


// let dov2 = document.getElementById("#tess");

// console.log(msgG, "msgg");
// // dov2.innerHTML = msgG;
// // // document.write(msgG);


// var randomNum = Math.floor((Math.random() * 3) + 1);
// console.log(randomNum, "random number");


// let showNum = document.createTextNode(randomNum);
// var resultNum = document.getElementById("showNum");
// console.log(resultNum, "resultNum")
// resultNum.innerHTML = '<h2 style="color:red">random number</h2><p style="color:blue; font-size:30px;margin:0;padding:0;">' + randomNum + '</p>';










(function(){





  let hotel = {
    name: "Park",
    roomRate: 240,
    discount: 15,
    offerPrice: function () {
      let offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    }
  }

  let hotelNames, roomRate, specialRate;
  hotelNames = document.getElementsByClassName("hotelName2");

  roomRate = document.getElementsByClassName("roomRate");
  specialRate = document.getElementsByClassName("specialRate");


  hotelNames.innerHTML = hotel.name;
  console.log(hotel.name);
  roomRate.textContent = '$' + hotel.roomRate.toFixed(2);
  specialRate.textContent = "$" + hotel.offerPrice();




  let expiryMsg;
  let today;
  let elEnds;


  function offerExpires(today) {
    let weekFromToday, day, date, month, year, dayNames, monthNames;
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    dayNames = ["Sunday", "Monday", "tuesday", "wednesday", "thursday", "Friday", "saturday"];
    monthNames = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
    day = dayNames[weekFromToday.getMonth()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    expiryMsg = "offer expired next";
    expiryMsg += day + ' </br> (' + date + ' ' + month + ' ' + year + ')';
    return expiryMsg;
  }
  today = new Date();
  elEnds = document.getElementById("offerEnds");
  console.log(elEnds,"elEnds")
  elEnds.innerHTML = offerExpires(today);
}());
