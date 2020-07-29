var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];

let arrP=[];
let sumN=0;
function countPositivesSumNegatives(arr) {
    for(let ind in arr){
        if(arr[ind]>=0){
            arrP.push(arr[ind]);
        }
        else{
            sumN=sumN+arr[ind];
        }
    }
    arr.unshift(sumN);
    arr.unshift(arrP.length)
    return arr;
}
console.log(countPositivesSumNegatives(arr));