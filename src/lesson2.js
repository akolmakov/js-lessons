/**
 * Error to throw to indicate that a method has been passed an illegal or inappropriate argument.
 * @param message
 * @constructor
 */
exports.IllegalArgumentException = function (message) {
    this.name = "IllegalArgumentException";
    this.message = message
};
exports.IllegalArgumentException.prototype = Object.create(Error.prototype);
exports.IllegalArgumentException.prototype.constructor = exports.IllegalArgumentException;


/**
 * Returns first index of the given number in the given number array, if the number exists in the array. Otherwise, -1 is
 * returned.
 * @param array the array of numbers
 * @param number the number, whose index in the given array to return
 * @throws IllegalArgumentException if array or number is null or undefined
 */
exports.indexOfNumber = function (array, number) {
    if (array == null || array == undefined || number == null || number == undefined) {
        throw new exports.IllegalArgumentException("'array' or 'number' must not be null and undefined")
    }

    for (var i = 0; i < array.length; i++) {
        if (array[i] == number) {
            return i;
        }
    }

    return -1;
};
/**
 * Returns {@code true} if the given number contains in the given number array. Otherwise, {@code false} is returned.
 * @param array array of numbers
 * @param number number to check for existence in the given array
 * @throws IllegalArgumentException if array or number is null or undefined
 */
exports.containsNumber = function (array, number) {
    if (array == null || array == undefined || number == null || number == undefined) {
        throw new exports.IllegalArgumentException("'array' or 'number' must not be null and undefined")
    }

    for (var i = 0; i < array.length; i++) {
        if (number == array[i]) {
            return true;
        }
    }
    return false;
};

/**
 * Returns the {@code n} first elements from the given array, or else the whole array, if it has less than {@code n} elements.
 * @param array the array to take the {@code n} first elements from
 * @param n the number of element to take
 * @throws IllegalArgumentException if array or n is null or undefined
 */
exports.takeFirst = function (array, n) {
    if (n == null || n == undefined || array == null || array == undefined) {
        throw new exports.IllegalArgumentException("'array' or 'number' must not be null and undefined")
    }
    var f = [];
    for (i = 0; i < n.length; i++) {
        f.push(n++);
    }
    return f;
}
;

/**
 * Returns the array without its {@code n} first elements. If the given array has less than {@code n} elements,
 * the empty array is returned.
 * @param array the array to drop first {@code n} elements from
 * @param n the number of elements to drop
 * @throws IllegalArgumentException if array or n is null or undefined
 */
exports.dropFirst = function (array, n) {
    // todo: implement
};

/**
 * Sorts the given number array in ascending order using bubble sort algorithm.
 * @param array the array to sort
 * @throws IllegalArgumentException if array is null or undefined
 */
exports.sort = function (array) {
    var n = array.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - 1 - i; j++) {
            if (array[j + 1] < array[j]) {
                var t = array[j + 1];
                array[j + 1] = array[j];
                array[j] = t;
            }
        }
        return array;
    }
    ;
};