var cat = {
 name: "Fluffy",
 activities: ["play", "eat cat food"],
 catFriends: [
 {
 name: "bar",
 activities: ["be grumpy", 'eat bread omblet'],
 weight: 8,
 furcolor: "white"
 }, 
 {
 name: "foo",
 activities: ["sleep", "pre-sleep naps"],
 weight: 3
 }
 ]
}

console.log();
// Adding height and weight to Fluffy
cat.height=12;
cat.weight=6;
console.log(cat.name+"'s height was updated to "+cat.height);
console.log(cat.name+"'s weight was updated to "+cat.weight);
console.log("------------------------------------------------------------");
console.log();


// Changing Fluffy to Fluffyy
cat.name="Fluffyy"
console.log("Fluffy's updated name is "+cat.name);
console.log("------------------------------------------------------------");
console.log();


// // Activities of Fluffyy's Friends
console.log(cat.catFriends[0].name+"'s activitis are: "+cat.catFriends[0]["activities"]);
console.log(cat.catFriends[1].name+"'s activitis are: "+cat.catFriends[1]["activities"]);
console.log("------------------------------------------------------------");
console.log();


// Fluffyy's Friends names
console.log("Fluffyy's Friends are: "+cat.catFriends[0].name+" and "+cat.catFriends[1].name);
console.log("------------------------------------------------------------");
console.log();


//Total Weight of Fluffy's friends 
console.log("total weight of "+cat.catFriends[0].name+" and "+cat.catFriends[1].name+" is: "+parseInt(cat.catFriends[0].weight+cat.catFriends[1]["weight"]));
console.log("------------------------------------------------------------");
console.log();


// Total activities of Bar and foo are:
console.log(cat.catFriends[0].name+" and "+cat.catFriends[1].name+"'s activitis are: "+cat.catFriends[0]["activities"].concat(cat.catFriends[0]["activities"]));
console.log("------------------------------------------------------------");
console.log();


// Adding two more activities to Bar and Foo
cat.catFriends[0]["activities"][2]="destroy things";
cat.catFriends[0]["activities"][3]="fight with other cats";
cat.catFriends[1]["activities"][2]="always roams outside";
cat.catFriends[1]["activities"][3]="not friendly";

console.log(cat.catFriends[0].name+"'s updated activitis are: "+cat.catFriends[0]["activities"]);
console.log(cat.catFriends[1].name+"'s updated activitis are: "+cat.catFriends[1]["activities"]);
console.log("------------------------------------------------------------");
console.log();


// Updating Fur Color of Bar
cat.catFriends[0].furcolor="blue";
console.log(cat.catFriends[0].name+"'s updated furcolor is "+cat.catFriends[0].furcolor);
console.log("------------------------------------------------------------");
console.log();

// console.log(cat);
