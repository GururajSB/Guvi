function assertObjectsEqual(actual, expected, testName){
   if(JSON.stringify(expected)==JSON.stringify(actual)){
       return "Passed";
   }
   else{
       return "Failed: Expected "+JSON.stringify(expected)+" but got "+JSON.stringify(actual);
   }
}

var expected1 = {foo: 5, bar: 6};
var actual1 = {foo: 5, bar: 6};
console.log("Test Case 1");
console.log("Expected: "+JSON.stringify(expected1));
console.log("Actual; "+JSON.stringify(actual1));
console.log(assertObjectsEqual(actual1,expected1));
console.log();

var expected2 = {foo: 6, bar: 5};
var actual2 = {foo: 5, bar: 6};
console.log("Test Case 2");
console.log("Expected: "+JSON.stringify(expected2));
console.log("Actual; "+JSON.stringify(actual2));
console.log(assertObjectsEqual(actual2,expected2));