const findTheOldest = function(people) {
    const currentYear = (new Date()).getFullYear();
    const peopleOldest = people.sort((a, b) => {
        let previous=0;
        let next=0;
        if(!a.yearOfDeath){
            previous = currentYear-a.yearOfBirth;
        }else{
            previous = a.yearOfDeath-a.yearOfBirth;
        };

        if(!b.yearOfDeath){
            next = currentYear-b.yearOfBirth;
        }else{
            next = b.yearOfDeath-b.yearOfBirth;
        };

        return previous > next ? -1 : 1;
    })

    return peopleOldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
