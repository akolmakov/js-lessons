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
 * Returns the {@code n} first elements from the given array, or else the whole array, if it has less than {@code n}
 * elements, the whole array is returned.
 * @param array the array to take the {@code n} first elements from
 * @param n the number of element to take
 * @throws IllegalArgumentException if array or n is null or undefined
 */
exports.takeFirst = function (array, n) {
    if (n == null || n == undefined || array == null || array == undefined) {
        throw new exports.IllegalArgumentException("'array' or 'number' must not be null and undefined")
    }
    if (n > array.length) {
        return array;
    }

    var result = [];
    for (var i = 0; i < n; i++) {
        var a = array[i];
        result.push(a);
    }

    return result;
};

/**
 * Returns the array without its {@code n} first elements. If the given array has less than {@code n} elements,
 * the empty array is returned.
 * @param array the array to drop first {@code n} elements from
 * @param n the number of elements to drop
 * @throws IllegalArgumentException if array or n is null or undefined
 */
exports.dropFirst = function (array, n) {
    if (array == null || array == undefined || n == null || n == undefined) {
        throw new exports.IllegalArgumentException("'array' or 'number' must not be null and undefined")
    }

    if (n > array.length) {
        return [];
    }

    var result = [];
    for (var i = n; i < array.length; i++) {
        var element = array[i];
        result.push(element);
    }

    return result;
};

/**
 * Returns a new array that is a subarray of this array. The subarray begins at the given `beginIndex` and extends
 * to the element at index `endIndex - 1`. Thus the length of subarray is `endIndex - beginIndex`.
 * If `beginIndex` is after the last index of the array, empty subarray is returned.
 * If `endIndex - 1` is after the last index of the array, it is assumed that `endIndex` is equal to length of array.
 * Examples:
 * subArray([2, 5, 7, 3, 4], 1, 3) => [5, 7]
 * subArray([2, 5, 7, 3, 4], 4, 5) => [4]
 * subArray([2, 5, 7, 3, 4], 9, 12) => []
 * subArray([2, 5, 7, 3, 4], 3, 8) => [3, 4]
 * @param array the array to extract subarray from
 * @param beginIndex the begin index, inclusive
 * @param endIndex the end index, exclusive
 */
exports.subArray = function (array, beginIndex, endIndex) {
    if (beginIndex >= array.length) {
        return [];
    }
    if (endIndex > array.length) {
        endIndex = array.length;
    }
    var result = [];
    for (var i = beginIndex; i < endIndex; i++) {
        result.push(array[i]);
    }
    return result;

};

/**
 * Returns a new array resulting from replacing all elements of `oldNumber` in the given array with `newNumber`.
 * Examples:
 * replaceNumber([2, 5, 7, 2, 4], 2, 10) => [10, 5, 7, 10, 4]
 * @param array the array to replace numbers in
 * @param oldNumber the old number
 * @param newNumber the new number
 */
exports.replaceNumber = function (array, oldNumber, newNumber) {
    for (i = 0; i < array.length; i++) {
        if (array[i] == oldNumber) {
            array[i] = newNumber;
        }
    }
    return array;
};

/**
 * Concatenates the specified second array to the end of the fist array and returns new array as the result.
 * Examples:
 * concat([2, 5, 7], [3, 4]) => [2, 5, 7, 3, 4]
 * Note, you must not use any helper methods like push, pop, etc.
 * @param firstArray the first array
 * @param secondArray the second array
 */
exports.concat = function (firstArray, secondArray) {
    firstArray = firstArray.concat(secondArray);
    return firstArray;
};

/**
 * Sorts the given number array in ascending order using bubble sort algorithm.
 * @param array the array to sort
 */
exports.sort = function (array) {
    for (var j = 0; j < array.length; j++) {
        for (var i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                var k = array[i];
                array[i] = array[i + 1];
                array[i + 1] = k
            }
        }
    }
    return array;
};