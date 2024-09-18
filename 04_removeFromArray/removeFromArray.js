const removeFromArray = function(array) {
    for (let i=1; i<arguments.length; i++) {
        let count = 0;
        for (let j=0; j<array.length; j++) {
            if (array[j] == arguments[i]) {
                count += 1
            }
        }
        for (; count>0; count--) {
            let index = array.indexOf(arguments[i]);
            let newArray = array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
