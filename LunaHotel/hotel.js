
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


// div container
let container = document.createElement('div');
container.setAttribute("data-size", "100");
container.classList.add("container");

//wrapper
let wrapper = document.querySelector(".wrapper");
wrapper.appendChild(container);



// btn div
let btnDiv = document.createElement('div');
btnDiv.classList.add("btn-container");
container.appendChild(btnDiv);



//btn check
let btn_check = document.createElement('button');
btn_check.innerHTML = "check av";
btn_check.name = "check-info_booking";
btn_check.classList.add("btn-check", "btn-all")
btn_check.addEventListener("click", function () {
    alert("Button ckech is clicked");
  });


//btn cancel
let cancel_booking = document.createElement('button');
cancel_booking.innerHTML = "cancel";
cancel_booking.name = "cancel-booking";
cancel_booking.classList.add("btn-cancel_booking", "btn-all");
cancel_booking.addEventListener("click", function () {
    alert("Button cancel_booking is clicked");
  });

//btn make
let make_booking = document.createElement('button');
make_booking.innerHTML = "make_booking";
make_booking.name = "make-booking";
make_booking.classList.add("btn-make_booking", "btn-all")
make_booking.addEventListener("click", function () {
    alert("Button make_booking is clicked");
  });

//append buttons
btnDiv.append(make_booking, cancel_booking, btn_check);





//info div 

let hotelDiv = document.createElement("div");
hotelDiv.classList.add("hotelDiv");
container.prepend(hotelDiv);



let hotelDiv2 = document.querySelector(".hotelDiv");
console.log(hotelDiv2);
let titles = document.createElement("p");
titles.textContent = "Luna Hotel";
titles.classList.add = "test";
hotelDiv2.appendChild(titles);




const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };