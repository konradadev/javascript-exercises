const reverseString = function(text) {
    const splittedText = text.split('');
    const reversedSplittedText = splittedText.reverse();
    const reversedText = reversedSplittedText.join('');
    return reversedText;
};

// Do not edit below this line
module.exports = reverseString;
