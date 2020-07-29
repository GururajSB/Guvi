var num = -5;
function getOpposite(num) {
    if(parseInt(num)==num){
        if(num>0){
            let myNum=2*num;
            return num-myNum;
        }
        else{
            let myNum=-(2*num);
            return num+myNum;
        }
    }
    else{
        return -1;
    }
}
console.log(getOpposite(num));
console.log(getOpposite(5));
console.log(getOpposite(0));
console.log(getOpposite(-5));
console.log(getOpposite("5a"));
console.log(getOpposite(5.5));