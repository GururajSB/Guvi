function getPositives(ar)
{
  for(let ind in ar){
    if(ar[ind]>=0){
        arrP.push(ar[ind]);
    }
  }
  return arrP;
}

var ar = [-5,10,-3,12,-9,5,90,0,1];
arrP=[];
var ar2 = getPositives(ar);
console.log(getPositives(ar));