// //creating element 


// // let ul = document.querySelector("ul");
// // let container = document.getElementsByClassName("container");
// // let li = document.createElement("li");

// // // adding element
// // // ul.append(li);
// // li.innerText = "testate";


// // // modifi text
// // const firstListItems = document.querySelector('.list-items');
// // console.log(firstListItems.innerText);
// // console.log(firstListItems.textContent);
// // console.log(firstListItems.innerHTML);
// // console.log();

// // console.log(ul.parentNode, "1");
// // console.log(ul.parentElement.parentElement, "2");



// // ul.append(container);


// // element.addEventListener('click', function(){});



// const button2 = document.querySelector(".btn");


// function alertBtn() {

// alert("sss");
// let text = "tests"
// console.log(text);
// };

// button2.addEventListener("click", alertBtn);

// let newBg = document.querySelector(".box3");

// function changeBg() {
//     newBg.style.backgroundColor = "blue";
// }

// newBg.addEventListener("mouseover", changeBg);


// const revealBtn = document.querySelector(".reveal-btn");
// const hiddenContent = document.querySelector(".hidden-content");
// console.log(revealBtn);
// console.log(hiddenContent);

// function reveal() {
//     if (hiddenContent.classList.contains("reveal-btn")) {
//         hiddenContent.classList.remove("reveal-btn");
//     } else {
//         hiddenContent.classList.add("reveal-btn");
//     }
// }

// revealBtn.addEventListener("click", reveal)



// document.addEventListener("click", function(){

//     console.log(document);
// },true);


// document.querySelector(".reveal-btn").addEventListener("click", function(e){
//     console.log(e.target.innerText = "clicked");

// },{once:true});


const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
            displayScrollElement(el);
        } else if (elementOutofView(el)) {
            hideScrollElement(el)
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});





