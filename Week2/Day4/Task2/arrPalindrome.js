arr=["malayalam","abcd","abcba","nitin","happy","ironman","1001"]

for(let item in arr){
    splitItem=arr[item].split("")
    let rev=(function(item1){return item1.reverse()})
    revStr=rev(splitItem).join("")
    if(arr[item]===revStr){
        console.log(arr[item])
    }
}