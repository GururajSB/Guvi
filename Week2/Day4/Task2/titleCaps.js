arr=["hELLO","wORLD","iNDIA","rAFALE","jAVASCRIPT"];

let lower=[];
arr.forEach((item)=>{
    return lower.push(item.toLowerCase())
})

let lower1=lower.map((item)=>{
    return (item.charAt(0).toUpperCase()+item.slice(1))
})
console.log(lower1)
