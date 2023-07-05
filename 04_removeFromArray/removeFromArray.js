const removeFromArray = function(givenArray, ...removeItems) {
    //initializing new array for return
    let newArray = [];
    //looping through givenArray parameter
    for (const element of givenArray) {
        //checking if any elements in the givenArray are also in removeItems
        if(removeItems.includes(element)) {
            continue;
        } else {
            //Push element to newArray if removeItems are not found in givenArray
            newArray.push(element);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
