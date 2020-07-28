var request= new XMLHttpRequest();
var url_string="https://dog.ceo/api/breeds/list/all";

try{
    request.open("GET",url_string,true);
    request.send();
}
catch (exception1) {
    console.log("ConnectionFailed: Please try again");
}

try{
    request.onload=function(){
        console.log(this.response);
        var data= JSON.parse(this.response);
        console.log(data[0].flag);
    }
}
catch (exception2){
    console.log("Error in loading the function, Please try again");
}
