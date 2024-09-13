function odd(ele){
if(ele%2!=0)return true
else return false;

}

let arr=[1,2,3,4,5,67,8];

console.log(arr);

arr=arr.filter(odd);
//console.log(arr);

arr = arr.filter((ele) => {
    if (ele < 5) return true;
    else return false;
});

console.log(arr);