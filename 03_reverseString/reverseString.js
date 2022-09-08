const reverseString = function(string) {
    let result = "";
    for(let i = 1; i <= string.length; i++){
        result += string[string.length - i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
