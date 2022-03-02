const palindromes = function (phrase) {
    const trimmed = phrase.replace(/ /g,"");
    const specialsRemoved = trimmed.replace(/[^a-zA-Z0-9 ]/g, '');
    const finalPhrase = specialsRemoved.toLowerCase();
    const phraseArray = finalPhrase.split("");
    const phraseReversedArray = finalPhrase.split("").reverse();
    let isTruthful = 0;
    for(let i=0; i<finalPhrase.length;i++){
        if(phraseArray[i] === phraseReversedArray[i]){
            isTruthful++;
        }else{
            isTruthful--;
        }
    }
    if(isTruthful===finalPhrase.length){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
