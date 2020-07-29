function powersOfTwo(n){
    myArr=[1];
    if(n==0){
        return myArr;
    }
    else{
        for(let ind=1;ind<=n;ind++){
            myArr.push(2**ind);
        }
        return myArr;
    }   
}
console.log(powersOfTwo(0));
console.log(powersOfTwo(1));
console.log(powersOfTwo(2));