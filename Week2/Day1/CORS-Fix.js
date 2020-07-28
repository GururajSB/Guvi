var request= new XMLHttpRequest();
var url_string="https://cors-anywhere.herokuapp.com/api.domainsdb.info/v1/domains/search?domain=facebook&zone=com";

request.open("GET",url_string,true);
request.send();

request.onload=function(){
    console.log(this.response);
    var data= JSON.parse(this.response);
    console.log(data[0]);
}
