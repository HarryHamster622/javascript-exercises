const sumAll = function(first, final) {
    var sum = 0;
    if (first > final) {
        var temp = first;
        first = final;
        final = temp;
    } 
    if (first < 0 || final < 0) {
        return "ERROR";
    }

    if (!Number.isInteger(first) || !Number.isInteger(final)) {
        return "ERROR";
    }

    for (first; first <= final; first++) {
        sum = sum + first;
       }
return sum;
};
// Do not edit below this line
module.exports = sumAll;
