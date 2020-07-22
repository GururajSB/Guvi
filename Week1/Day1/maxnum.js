console.log("Enter the numbers: ")
let myArr=[20,30,1,55,34,42,212,33,45];
console.log(myArr);
console.log("The Numbers entered are: "+myArr);

function maxvalueofnum(a,b){
	return (b-a);
}

myArr.sort(maxvalueofnum);
console.log("The max value is: "+myArr[0]);