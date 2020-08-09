// var clearAll, result, operations;

// clearAll=0;

// result="0";

// // document.getElementById("result").textContent=result;
// // document.querySelector(".res").innerHTML="<h2><em>"+dice+"</em></h2>";


// document.querySelector("#equals").addEventListener("click", function(){
    
//     document.getElementById("result").textContent=result;
// })

// document.querySelector("#CE").addEventListener("click", function(){
    
//     document.getElementById("result").textContent=clearAll;
// })

// document.querySelector("#clear").addEventListener("click", function(){
//     let tempres=(result.toString()).split("");
//     tempres.pop();
//     let newtempres=tempres.join("")
//     document.getElementById("result").textContent=newtempres;
// })

// document.querySelector("#one").addEventListener("click", one)

// function one(num){
//     result=result+"1"
//     document.getElementById("result").textContent=result;
// // })
// var mynum=document.querySelectorAll("#num")
// mynum.addEventListener("click", function(){
    
//     document.getElementById("result").textContent=result+mynum;
// })

// // document.querySelector("#three").addEventListener("click", function(){
    
//     document.getElementById("result").textContent=result+"3";
// })

// document.querySelector("#four").addEventListener("click", function(){
    
//     document.getElementById("result").textContent=result+"4";
// })

// document.querySelector("#five").addEventListener("click", function(){
    
//     document.getElementById("result").textContent=result+"5";
// })





// class Calculator{
//     constructor(prevoperationsButtons,currentButtons){
//         this.prevoperationsButtons=prevoperationsButtons;
//         this.currentButtons=currentButtons;
//         this.clearall();
//     }

//     clear(){

//     }

//     clearall(){
//         this.resultButtons='';
//         this.prevoperationsButtons="";
//         this.operation=undefined;
//     }

//     appendNumber(number){
//         this.resultButtons=number;
//     }

//     chooseOperation(operation){

//     }
//     compute(){

//     }
//     updateDisplay(){
//         this.currentButtonsTextElement.innerText=this.resultButtons;
//     }
// }



// var numberButtons=document.querySelectorAll("#num");
// const oprButtons=document.querySelectorAll("#opr")
// const eqlButtons=document.querySelector("#equals")
// const clearallButtons=document.querySelector("#clearall")
// const clearButtons=document.querySelector("#clear")
// var prevoperationsButtonsTextElement=document.querySelector("#prevoperations")
// var currentButtonsTextElement=document.querySelector("#currentoperations")



// var calculator=new Calculator(prevoperationsButtonsTextElement,currentButtonsTextElement);
// numberButtons.forEach(button => {
//     button.addEventListener("click",()=>{
//         calculator.appendNumber(button.innerText);
//         calculator.updateDisplay();
//     })
// })

// 
// 


var num1=document.querySelector("#num1");
var num2=document.querySelector("#num2");
var num3=document.querySelector("#num3");
var num4=document.querySelector("#num4");
var num5=document.querySelector("#num5");
var num6=document.querySelector("#num6");
var num7=document.querySelector("#num7");
var num8=document.querySelector("#num8");
var num9=document.querySelector("#num9");
var num0=document.querySelector("#num0");
var num00=document.querySelector("#num00");

var opradd=document.querySelector("#opradd")
var oprmul=document.querySelector("#oprmul")
var oprsub=document.querySelector("#oprsub")
var oprdiv=document.querySelector("#oprdiv")
var oprmod=document.querySelector("#oprmod")


var equals=document.querySelector("#equals");
var clear=document.querySelector("#clear");
var clearall=document.querySelector("#clearall");
var equals=document.querySelector("#equals");

var result=document.querySelector("#result");


num1.addEventListener("click", ()=>{
    if(result.innerText==NaN||result.innerText==undefined){
        result.innerText=0;
    }
    else{
        result.innerText=parseInt((result.innerText)+"1");
    }
})

num2.addEventListener("click", ()=>{
    if(result.innerText==NaN||result.innerText==undefined){
        result.innerText=0;
    }
    else{
        result.innerText=parseInt((result.innerText)+"2");
    }
})

num3.addEventListener("click", ()=>{
    if(result.innerText==NaN||result.innerText==undefined){
        result.innerText=0;
    }
    else{
        result.innerText=parseInt((result.innerText)+"3");
    }
})

num4.addEventListener("click", ()=>{
    if(result.innerText==NaN||result.innerText==undefined){
        result.innerText=0;
    }
    else{
        result.innerText=parseInt((result.innerText)+"4");
    }
})

num5.addEventListener("click", ()=>{
    if(result.innerText==NaN||result.innerText==undefined){
        result.innerText=0;
    }
    else{
        result.innerText=parseInt((result.innerText)+"5");
    }
})

num6.addEventListener("click", ()=>{
    if(result.innerText==NaN||result.innerText==undefined){
        result.innerText=0;
    }
    else{
        result.innerText=parseInt((result.innerText)+"6");
    }
})

num7.addEventListener("click", ()=>{
    if(result.innerText==NaN||result.innerText==undefined){
        result.innerText=0;
    }
    else{
        result.innerText=parseInt((result.innerText)+"7");
    }
})

num8.addEventListener("click", ()=>{
    if(result.innerText==NaN||result.innerText==undefined){
        result.innerText=0;
    }
    else{
        result.innerText=parseInt((result.innerText)+"8");
    }
})

num9.addEventListener("click", ()=>{
    if(result.innerText==NaN||result.innerText==undefined){
        result.innerText=0;
    }
    else{
        result.innerText=parseInt((result.innerText)+"9");
    }
})

num0.addEventListener("click", ()=>{
    if(result.innerText==NaN||result.innerText==undefined){
        result.innerText=0;
    }
    else{
        result.innerText=parseInt((result.innerText)+"0");
    }
})

num00.addEventListener("click", ()=>{
    if(result.innerText==NaN||result.innerText==undefined){
        result.innerText=0;
    }
    else{
        result.innerText=parseInt((result.innerText)+"00");
    }
})



opradd.addEventListener("click", ()=>{
    if(result.innerText==NaN||result.innerText==undefined){
        result.innerText=0;
    }
    else{
        operations.innerText=((result.innerText)+"+");
        result.innerText=""
    }
})

oprsub.addEventListener("click", ()=>{
    if(result.innerText==NaN||result.innerText==undefined){
        result.innerText=0;
    }
    else{
        operations.innerText=((result.innerText)+"-");
        result.innerText=""
    }
})

oprmul.addEventListener("click", ()=>{
    if(result.innerText==NaN||result.innerText==undefined){
        result.innerText=0;
    }
    else{
        operations.innerText=((result.innerText)+"*");
        result.innerText=""
    }
})

oprdiv.addEventListener("click", ()=>{
    if(result.innerText==NaN||result.innerText==undefined){
        result.innerText=0;
    }
    else{
        operations.innerText=((result.innerText)+"/");
        result.innerText=" "
    }
})

oprmod.addEventListener("click", ()=>{
    if(result.innerText==NaN||result.innerText==undefined){
        result.innerText=0;
    }
    else{
        operations.innerText=((result.innerText)+"%");
        result.innerText=" "
    }
})


equals.addEventListener("click", ()=>{
    if((operations.innerText).length<=0){
        operations.innerText=""
    }
    else{
        oprstr=operations.innerText;
        tempopr=oprstr.charAt(oprstr.length-1);
        newoprstr=oprstr.slice(0,-1);
       
        if(tempopr=="+"){
            operations.innerText=""
            result.innerText=parseInt(newoprstr)+parseInt(result.innerText);
        }
        else if(tempopr=="-"){
            operations.innerText=""
            result.innerText=parseInt(newoprstr)-parseInt(result.innerText);
        }
        else if(tempopr=="*"){
            operations.innerText=""
            result.innerText=parseInt(newoprstr)*parseInt(result.innerText);
        }
        else if(tempopr=="/"){
            operations.innerText=""
            result.innerText=parseInt(newoprstr)/parseInt(result.innerText);
        }
        else{
            operations.innerText=""
            result.innerText=parseInt(newoprstr)%parseInt(result.innerText);
            
        }
    }
})

clear.addEventListener("click",()=>{
    resstr=result.innerText;
    newresstr=resstr.slice(0,-1);
    result.innerText=newresstr;
})

clearall.addEventListener("click",()=>{
    operations.innerText=""
    result.innerText=""
})