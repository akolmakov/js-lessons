var expect = require("chai").expect;
var lesson1 = require("../src/lesson1");

describe("lesson1", function () {
    it("calculates length of cycle by radius rounding result downward to nearest integer", function () {
        var actual = lesson1.calculateLengthOfCycle(23.0);
        expect(144).to.equal(actual);
    });

    it("calculates area of triangle by two sides and angle between them rounding result downward to nearest integer", function () {
        var actual = lesson1.calculateAreaOfTriangle(12.0, 18.0, 40.0);
        expect(80).to.equal(actual);
    });

    it("returns character from word that stands right before the last one", function () {
        expect("n").to.equal(lesson1.getBeforeLastCharacter("AirBnb"));
        expect("l").to.equal(lesson1.getBeforeLastCharacter("Google"));
        expect("f").to.equal(lesson1.getBeforeLastCharacter("Microsoft"));
    });

    it("returns string from word that starts from the second character and ends by the last one (exclusively)", function () {
        expect("irBn").to.equal(lesson1.getBeforeLastCharacter("AirBnb"));
        expect("oogl").to.equal(lesson1.getBeforeLastCharacter("Google"));
        expect("icrosof").to.equal(lesson1.getBeforeLastCharacter("Microsoft"));
    });
});