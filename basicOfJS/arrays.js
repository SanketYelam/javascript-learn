/*
arr =[1,2,34,5,7];
console.log(arr);
console.log(arr[2]);
a=arr.length;
console.log(a);

arr.push(99); /// add at last
console.log(arr);

arr.unshift(77);
console.log(arr); // add at first

arr.shift();
console.log(arr); //remove first element

arr.pop();//remove last element
console.log(arr);

arr =['a',7,"sanket",2.4]; // diff datatype
arr =['a',7,"sanket",2.4,[1,2,3]]; 
console.log(arr);

brr=[[1,23,45],[65,9,67,46]]; //2d array of diff length
console.log(brr); */

arr =['a',7,"sanket",2.4];
for(let i=1; i<arr.length; i++){
    console.log(i,arr[i]);
}

abc=[1,2,3,45,6,78];
for(i=1; i<abc.length; i++){
    abc[i] *= 2;
}
console.log(abc);

def=[1,23,4,5,5];
def.forEach(element => {
   console.log(element); 
});