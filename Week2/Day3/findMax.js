function findMax(ar)
{
    ar.sort(function(a,b){return b-a});
    return ar[0];
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);