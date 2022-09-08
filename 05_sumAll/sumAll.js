const sumAll = function(number1, number2) {
    if (number1 < 0 || number2 < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(number1) || !Number.isInteger(number2)) {
        return "ERROR";
    }
    
    
    let result = 0;
    if(number1 < number2){
        while (number1 <= number2) {
            result += number1;
            number1++;
        }
    }else{
        while (number2 <= number1) {
            result += number2;
            number2 ++;
        }
    }
    return result;
};

console.log(sumAll(4,1));

// Do not edit below this line
module.exports = sumAll;
