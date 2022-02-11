const repeatString = function(text,repeats) {
    if (repeats<0){
        return 'ERROR';
    }
    let textAppended='';
    for(let i=0;i<repeats;i++){
        textAppended+=text;
    }
    return textAppended;
};

// Do not edit below this line
module.exports = repeatString;
