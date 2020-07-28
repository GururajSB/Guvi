var myCar = {
 make: 'Bugatti',
 model: 'Bugatti La Voiture Noire',
 year: 2019,
 accidents: [
 {
 date: '3/15/2019',
 damage_points: '5000',
 atFaultForAccident: true
 },
 {
 date: '7/4/2022',
 damage_points: '2200',
 atFaultForAccident: true
 },
 {
 date: '6/22/2021',
 damage_points: '7900',
 atFaultForAccident: true
 }
 ]
}

// Changing atFaultForAccident to false
for(let ind=0;ind<myCar.accidents.length;ind++){
    if(myCar.accidents[ind].atFaultForAccident==true){
        myCar.accidents[ind].atFaultForAccident=false;
        console.log(myCar.accidents[ind].atFaultForAccident);
    }
}
console.log("------------------------------------------------------------");
console.log();


// printing dates of accidents
console.log("The Accident dates are: ")
for(let ind=0;ind<myCar.accidents.length;ind++){
    console.log(myCar.accidents[ind].date);
}

// console.log(myCar.accidents);