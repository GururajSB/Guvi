var request= new XMLHttpRequest();
var url_string="https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=bb9bc7b71ea1652ce851e35a662e3334";

request.open("GET",url_string,true);
request.send();

request.onload=function(){
    console.log(this.response);
    var data= JSON.parse(this.response);
    console.log(data);
}
