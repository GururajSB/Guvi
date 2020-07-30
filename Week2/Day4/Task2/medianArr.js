arr1=[5,2,1,3,4].sort(function(a,b){return a-b});
arr2=[10,7,9,6,8].sort(function(a,b){return a-b});

let a=function(arr1,arr2){
    return (arr1[Math.ceil(arr1.length/2)]+arr2[Math.ceil(arr2.length/2)])/2
}
console.log("anonymous")
console.log(a(arr1,arr2))
console.log();
console.log("IIFE")
console.log((function(arr1,arr2){return (arr1[Math.ceil(arr1.length/2)]+arr2[Math.ceil(arr2.length/2)])/2})(arr1,arr2));