// Your code goes here
const background = document.querySelector("body");

document.addEventListener("click", (event) => {
background.style.backgroundColor = "red";

});
//1
const navBar = document.querySelector(".nav");

navBar.addEventListener("mouseover", function(){
    navBar.style.border = "5px solid blue"

});
//2 
const imgs = document.querySelector("img");
 
imgs.addEventListener("dblclick", function(){
        imgs.style.boxShadow = "0 0 0 10px blue, 0 0 0 15px green, 0 0 0 20px red "
        });



//3 

const header2 = document.getElementById("firstHeader");

header2.addEventListener("click", function(){
header2.style.backgroundColor = "blue";
header2.style.border = "solid 5px black";
header2.style.color = "white";
})

//4 
// const adv = getElementById("adventure");

// adv.addEventListener("mouseenter",function(){
//     adv.style.borderRadius = "0px";
//     adv.style.filter = "blur(30px)";
// });
//5 
const foot = document.querySelector("footer");

foot.addEventListener("mouseover",function(){
alert("you moused over!");

});
//6 
const a = document.getElementById("sign");
console.log(a);
a.addEventListener("click", logKey);
    function logKey(e){ 
    if ( `${e.altKey}`){
        console.log("hello");
     a.style.backgroundColor = "black";
    }
    }

//7 
navBar.addEventListener("click", function (){
    nav.style.color = "yellow";
});
//8 
navBar.addEventListener("toggle", function(){
    nav.style.color = "red";
});
//9


//10 