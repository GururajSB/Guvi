var arr = ['GUVI', 'I', 'am', 'geek'];
function transformFirstAndLast(arr) {
    var obj={};
    obj[arr[0]]=arr[arr.length-1];
    return obj;
}

console.log(transformFirstAndLast(arr));