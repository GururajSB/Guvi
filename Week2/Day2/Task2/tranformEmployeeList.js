var arr= [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], 
[['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];

// myObj={}
// obj["name"]="Guru";

function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
    var obj1={}
    var obj={}
    for(let ind in arr){
        // console.log(ind);
        for(let jind in arr[ind]){
            // console.log(ind+"ind");
            
            obj1[arr[ind][jind][0]]=arr[ind][jind][1]; 
            // console.log(arr[ind][jind][0]);            
            // console.log(arr[ind][jind][1]);
            // tranformEmployeeList.push(obj)
        }
        obj=JSON.stringify(obj1)
        // console.log(obj)
        tranformEmployeeList.push(obj);
        // console.log(tranformEmployeeList);
    }
  
    return tranformEmployeeList;
}


console.log(transformEmployeeData(arr));