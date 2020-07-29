var obj = {};
   function addProperty(obj, key) {
       if(key==="mykey"){
            obj[key]=true;
            return obj;
       }
       else{return "NA"}
   }
   console.log(addProperty(obj,'mykey'));
//    console.log(addProperty(obj,'dummykey'));