//print 1 to 10 but with delay of 1 sec after each number get printed

// function print(i){
//     console.log(i);
// }
for (let i=1; i<=10; i++){
   // console.log(i);
   //print(i);
   setTimeout(function(){console.log(i)},i*100)
}


// function hello(){
//     console.log("hello");
// }

// function bye(){
//     console.log("bye");
// }

// setTimeout(hello,2*1000);
// setTimeout(bye,1*1000);