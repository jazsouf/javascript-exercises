const removeFromArray = function(array, ...Args) {
    newArray = array.slice();
    for (let i = 0; i < array.length; i++) {
        for (const arg of Args) {
            if (array[i] === arg) {
                let removeElement = newArray.indexOf(array[i])
                newArray.splice(removeElement, 1); 
            }
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
