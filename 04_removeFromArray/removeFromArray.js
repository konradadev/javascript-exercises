const removeFromArray = function(fullArray, ...valuesToRemove) {
    for(let i=0; i < valuesToRemove.length; i++){
        for(let j=0; j < fullArray.length; j++){
            if (valuesToRemove[i]===fullArray[j]){
                fullArray.splice(j,1);
            }
        }
    }
    return fullArray;
};

// Do not edit below this line
module.exports = removeFromArray;
