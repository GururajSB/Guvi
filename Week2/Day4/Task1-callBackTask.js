function something(c){
    var val1=50;
    var val2=70;
    return c(val1,val2);
}

oper=[add,sub,mul];

function add(x,y){return x+y;}
function sub(x,y){return y-x;}
function mul(x,y){return x*y;}

console.log("___________________");
www0=something(oper[0]);
console.log("Addition is: "+www0);

www1=something(oper[1]);
console.log("Subtraction is: "+www1);

www2=something(oper[2]);
console.log("multiplication is: "+www2);
console.log("___________________");
