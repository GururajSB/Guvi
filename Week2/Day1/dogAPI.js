var request= new XMLHttpRequest();
var url_string="https://dog.ceo/api/breeds/list/all";

request.open("GET",url_string,true);
request.send();

request.onload=function(){
    console.log(this.response);
    var data= JSON.parse(this.response);
    console.log(data[0].flag);
}
