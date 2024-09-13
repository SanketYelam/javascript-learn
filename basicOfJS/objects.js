var details=[1,"sanket",2353443,true]; //array
var a =5;//variable

let x ={  //object
    id:123244,
    name:"sanket",
    mobile:324345,
    indian:true
};


console.log(x);
console.log(x.indian);
console.log(x.id);
x.id=4545466;
console.log(x.id);

for(const key in x){
    console.log(key,x[key]);
}
