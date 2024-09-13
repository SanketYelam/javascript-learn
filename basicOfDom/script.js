// console.log("HEllO World");
// let a=1;
// console.log(a+a);
   //print in console
// let x = document.querySelector("h1");
// console.log(x)
/*
let h2 =document.querySelector("h2");
h2.style.color="red";
h2.style.fontFamily ="Gill Sans";

let h1 =document.querySelector("h1");
h1.style.color="seagreen"
h1.style.backgroundColor="black"

let h3 =document.querySelector("h3");


setTimeout(function(){
    h3.style.color="Yellow"
h3.style.backgroundColor="black";
h3.innerHTML="Spell";

},2000) 
*/

 h1 = document.getElementById("firstEle")
h1.addEventListener("mouseenter",function(){
    h1.style.color="RED"
h1.style.backgroundColor="Black"
})
 h1.addEventListener("mouseleave",function(){
    h1.style.color="Green"
h1.style.backgroundColor="White"

})

h2 = document.getElementById("secondEle")
h2.addEventListener("mousemove",function(){
    h2.style.backgroundColor="black"
    h2.style.color="Yellow"
})
h2.addEventListener("mouseleave",function(){
h2.style.backgroundColor="White"
h2.style.color="Orange"
})

h3 = document.getElementById("thirdEle")
h3.addEventListener("mousemove",function(){
    h3.style.backgroundColor="black"
    h3.style.color="White"
})
h3.addEventListener("mouseleave",function(){
    h3.style.backgroundColor="White"
    h3.style.color="Red"
    })