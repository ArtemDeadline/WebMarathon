String.prototype.removeDuplicates = function(){
    console.log("Before: "+this);
    let result = this
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .filter(function(word, word_index, string){
        return string.indexOf(word) == word_index;
    })
    .join(" ");
    console.log("After: "+result);
    return result;
};

let str = "Giant Spiders?   What’s next? Giant Snakes?";
console.log(str); // Giant Spiders?   What’s next? Giant Snakes?
str = str.removeDuplicates();
console.log(str);// Giant Spiders? What’s next? Snakes?
str = str.removeDuplicates();
console.log(str);// Giant Spiders? What’s next? Snakes?
str= ". . . . ? . . . . . . . . . . . ";
console.log(str);// . . . . ? . . . . . . . . . . .
str= str.removeDuplicates();
console.log(str);// . ?
