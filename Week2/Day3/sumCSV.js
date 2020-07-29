
function sumCSV(s)
{
    let sum=0
  let num=s.split(",").map(Number)
  for(let ind in num){
      sum=sum+num[ind]
  }
  return sum;
}
console.log(sumCSV('1.5, 2.3, 3.1, 4, 5.5, 6, 7, 8, 9, 10.9'));