var ar1 = [1, 2, 3];
var ar2 = [4, 5, 6];
var ar = mergeArrays(ar1, ar2);
console.log(ar);
function mergeArrays(ar1, ar2)
{
    var result = [];
    for(let el of ar1){
        result.push(el);
    }
        result=ar1.concat(ar2);
        return result;
}