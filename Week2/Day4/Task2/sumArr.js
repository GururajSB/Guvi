let arr=[1,2,3,4,5,6,7,8,9,10];
let sum=0;

let total=arr.reduce((sum,item)=>{
    return sum+item
},0)
console.log(total);