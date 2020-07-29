
function getFullName(firstName, lastName){
    if(lastName==undefined){
        return firstName;
    }
    else{
        return (firstName+" "+lastName).trim();
    }
}
console.log(getFullName("GUVI","GEEK"));
console.log(getFullName("GUVI",));
console.log(getFullName("","GEEK"));
console.log(getFullName("",""));
