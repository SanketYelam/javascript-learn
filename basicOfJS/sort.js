let arr =[1,5,8,5,2,8,5,22,78,11];
console.log(arr);

let x=arr.sort();

arr = arr.sort((a,b) => a-b);//increasing sort
irr =arr.sort((a,b)=>a+b);
console.log(irr);