var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
    var newObject = {};
    for(let ind in arr){
         newObject[arr[ind][0]]=arr[ind][1];
    }
    return newObject;
}

console.log(fromListToObject(arr));