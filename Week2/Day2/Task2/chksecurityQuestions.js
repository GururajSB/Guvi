var securityQuestions = [
 {
 question: "What was your first pet's name?",
 expectedAnswer: "FlufferNutter"
 },
 {
 question: 'What was the model year of your first car?',
 expectedAnswer: '1985'
 },
 {
 question: 'What city were you born in?',
 expectedAnswer: 'NYC'
 }
];

function chksecurityQuestions(securityQuestions,ques,ans) {
    for(let ind in securityQuestions){
        if (securityQuestions[ind]["expectedAnswer"]==ans){ return true; }
        else{return false;}
    }
}

var ques1 = "What was your first pet's name?";
var ans1  =  "FlufferNutter";
console.log("Test Case 1");
console.log(ques1);
console.log(ans1);
console.log(chksecurityQuestions(securityQuestions,ques1,ans1));
console.log();

var ques2 = "What was your first pet's name?";
var ans2  =  "DufferNutter";
console.log("Test Case 2");
console.log(ques2);
console.log(ans2);
console.log(chksecurityQuestions(securityQuestions,ques2,ans2));
