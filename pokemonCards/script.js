let main = document.getElementById("main");


let arr=["./pok1.png",
"./pok2.png",
"./pok3.png",
"./pok4.png",
"./pok5.png",
"./pok6.png",
"./pok7.png",
"./pok8.png",
"./pok9.png",
"./pok10.png",
"./pok11.png"];
s="";
for(let i=1;  i<=55; i++){

    let r = Math.floor(Math.random()*arr.length);
    s +=` <div class="cards">
            <img src=${arr[r]} alt="">
        </div>`
}
main.innerHTML=s;


