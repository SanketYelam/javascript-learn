let arr=[1,2,3,4,5,6]

brr=[]
function triple(x){
    return 3*x
}
// for (const ele of arr){
//     brr.push(ele*3)
// }

 //brr =arr.map(triple)

 brr =arr.map(function(ele){
    return ele*ele
 })
console.log(brr)