var obj = {
 mykey: 'value'
};
function getProperty(obj, key) {
    if(key=="mykey"){return obj[key]}
    else{return "NA"}
}
console.log(getProperty(obj,'mykey'));
console.log(getProperty(obj,'dummykey'));