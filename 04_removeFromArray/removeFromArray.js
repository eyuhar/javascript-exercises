const removeFromArray = function(array, removal) {
    let args = Array.from(arguments);
    args.shift();

    args.forEach(element => {
        if(array.includes(element)){
            while (array.indexOf(element) !== -1) {
                array.splice(array.indexOf(element), 1);
            }
        }
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
