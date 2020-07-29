console.log(getPrimes(10, 100));
function getPrimes(nPrimes, startAt)
{
    let arr=[];
    for(let ind=startAt;ind<(startAt+nPrimes);ind++){
        if (isPrime(ind)){
            arr.push(ind)
        }
    }
    console.log(arr)
}
// Returns true if a number is prime
function isPrime(n)
{
    for(let i=2;i<n;i++){
        if(n%i===0){
            return false;
        }
    }
    return true;
}