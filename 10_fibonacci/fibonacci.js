const fibonacci = function(n) {
    if(n<1){
        return "OOPS";
    }
    let current=1;
    let previous=1;
    for(let i=2; i<n; i++){
        current=current+previous;
        previous=current-previous;
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
