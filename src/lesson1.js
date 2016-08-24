/**
 * Calculates length of cycle by the given radius rounding the result downward to nearest integer.
 */
exports.calculateLengthOfCycle = function (radius) {
    return Math.floor(2 * (Math.PI) * radius)
};

/**
 * Calculates area of triangle by the given sides: a and b, and alpha angle between them rounding the result downward
 * to nearest integer.
 */
exports.calculateAreaOfTriangle = function (a, b, alpha) {
    return Math.floor(0.5 * a * b * Math.sin(alpha));
};

/**
 * Returns character from the given word that stands right before the last one.
 */
exports.getCharacterBeforeLastOne = function (word) {
    return word.charAt(word.length - 2);
};

/**
 * Returns string from the given word that starts from the second character and ends by the last one (exclusively).
 */
exports.getStringBetweenFirstAndLastCharacters = function (word) {
    return word.slice(1, -1);
};

