function getLengthOfWord(word1){
    if(word1==undefined){
        return -1;
    }
    else if(parseInt(word1)!=word1){
        return word1.length;
    }
    else{
        return -1
    }
}

console.log(getLengthOfWord("GUVI"));
console.log(getLengthOfWord(""));
console.log(getLengthOfWord());
console.log(getLengthOfWord(9));