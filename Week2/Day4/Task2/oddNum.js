arr=[1,2,3,4,5,6,7,8,9,10];

var a=function(myArr){
    return myArr.filter((item)=>{return item%2!=0})
}
console.log("using anonymous function")
console.log(a(arr));

console.log();
console.log("using IIFE");
console.log((function(myArr){return myArr.filter((item)=>{return item%2!=0})})(arr))