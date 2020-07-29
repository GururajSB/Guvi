var s = reverseString("JavaScript")
console.log(s);
function reverseString(s)
{
    str=s.split("");
    myArr=[];
    // console.log(str)
   for(let ind=str.length-1;ind>=0;ind--){
        myArr.push(str[ind]);
   } 
   return myArr.join("")
}