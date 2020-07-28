var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(obj) {
    var myArr=[];
    for(let ind in obj){
        myArr.push(obj[ind]);
    }
    return myArr

}

// Printing All Values
console.log(printAllValues(obj));