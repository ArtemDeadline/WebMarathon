export  {addWords, removeWords, changeWords};

function addWords(obj, wrds) {
    var words = obj.words
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .filter(
        function(word, word_index, words){
            return words.indexOf(word) == word_index;
        }
    );
    var new_words = wrds
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .filter(
        function(word, word_index, words){
            return words.indexOf(word) == word_index;
        }
    );
    //console.log(words);
    //console.log(new_words);
    for (var i = 0; i < new_words.length; i++) {
        words.push(new_words[i]);
    }
    //console.log(words);
    obj.words = words
    .filter(
        function(word, word_index, words){
            return words.indexOf(word) == word_index;
        }
    )
    .join(" ")
    //console.log(obj.words);
}

function removeWords(obj, wrds){
    var words = obj.words
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .filter(
        function(word, word_index, words){
            return words.indexOf(word) == word_index;
        }
    );
    var del_words = wrds
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .filter(
        function(word, word_index, words){
            return words.indexOf(word) == word_index;
        }
    );
    for(let i = 0; i < del_words.length; i++){
        if(words.indexOf(del_words[i]) != -1)
            words.splice(words.indexOf(del_words[i]), 1);
    }
    obj.words = words.join(" ");
}

function changeWords(obj, oldWrds, newWrds) {
    var words = obj.words
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .filter(
        function(word, word_index, words){
            return words.indexOf(word) == word_index;
        }
    );

    oldWrds = oldWrds
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .filter(
        function(word, word_index, words){
            return words.indexOf(word) == word_index;
        }
    );

    newWrds = newWrds
    .trim()
    .replace(/\s+/g, " ")
    .split(" ")
    .filter(
        function(word, word_index, words){
            return words.indexOf(word) == word_index;
        }
    );
    console.log(words);
    console.log(oldWrds);
    console.log(newWrds);
    for(var oldInd = 0, newInd = 0; oldInd < oldWrds.length; oldInd++){
        if(words.indexOf(oldWrds[oldInd]) != -1){
            if(newInd < newWrds.length){
                words.splice(words.indexOf(oldWrds[oldInd]), 1, newWrds[newInd]);
                newInd++;
            }
            else{
                words.splice(words.indexOf(oldWrds[oldInd]), 1);
            }
        }
    }
    if(newInd < newWrds.length){
        for(;newInd < newWrds.length; newInd++)
            words.push(newWrds[newInd]);
    }
    obj.words = words.join(" ");
}
