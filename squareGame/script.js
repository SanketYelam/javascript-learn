let s1 = document.getElementById("sq1");
let clr="red";
s1.addEventListener("mouseenter",function(){

    if(clr =="red"){
        s1.style.backgroundColor="red";
        clr="green"
    }
    else if (clr == "green"){
        s1.style.backgroundColor="green"
        clr="blue"
    }
    else{
          s1.style.backgroundColor="blue";
           clr="red";
    } 
})



let s2 = document.getElementById("sq2");
s2.addEventListener("mouseenter",function(){
    let r = Math.floor(Math.random()*1000);
    s2.innerHTML=`<h1>${r}</h1>`;

})

s2.addEventListener("mouseleave",function(){
    s2.innerHTML="2"
    
})



let s3 = document.getElementById("sq3");
s3.addEventListener("mouseenter",function(){
  let  a=Math.floor(Math.random()*256)
 let   b=Math.floor(Math.random()*256)
 let   c=Math.floor(Math.random()*256)

    s3.style.backgroundColor=`rgb(${a},${b},${c})`;

})

s3.addEventListener("mouseleave",function(){
    s3.style.backgroundColor="white"
})

let s4 =document.getElementById("sq4")

s4.addEventListener("mouseenter",function(){
    let  a=Math.floor(Math.random()*256)
    let   b=Math.floor(Math.random()*256)
    let   c=Math.floor(Math.random()*256)

    s1.style.backgroundColor = `rgb(${a},${b},${c})`
    s2.style.backgroundColor = `rgb(${c},${a},${b})`
    s3.style.backgroundColor =`rgb(${b},${c},${a})`
})
s4.addEventListener("mouseleave",function(){
    s1.style.backgroundColor="white"
    s2.style.backgroundColor="white"
    s3.style.backgroundColor="white"
})

