const sumAll = function(startAt, endAt) {

    if(typeof(startAt) + typeof(endAt) != "numbernumber"){
        return "ERROR";
    }

    if(startAt < 0 || endAt < 0){
        return "ERROR";
    }

    //make startAt always smaller
    if(startAt > endAt){
        let helper = startAt;
        startAt = endAt;
        endAt = helper;
    }

    const repeats = endAt - startAt;
    let result = 0;

    for(let i=0; i <= repeats; i++){
        result = result + (startAt + i);
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
