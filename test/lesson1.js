var expect = require("chai").expect;
var lesson1 = require("../src/lesson1");

describe("lesson1", function () {
    it("calculateLengthOfCycle", function () {
        var actual = lesson1.calculateLengthOfCycle(23.0);
        expect(actual).to.equal(144);
    });

    it("calculateAreaOfTriangle", function () {
        var actual = lesson1.calculateAreaOfTriangle(12.0, 18.0, 40.0);
        expect(actual).to.equal(80);
    });

    it("getCharacterBeforeLastOne", function () {
        expect(lesson1.getCharacterBeforeLastOne("AirBnb")).to.equal("n");
        expect(lesson1.getCharacterBeforeLastOne("Google")).to.equal("l");
        expect(lesson1.getCharacterBeforeLastOne("Microsoft")).to.equal("f");
    });

    it("getStringBetweenFirstAndLastCharacters", function () {
        expect(lesson1.getStringBetweenFirstAndLastCharacters("AirBnb")).to.equal("irBn");
        expect(lesson1.getStringBetweenFirstAndLastCharacters("Google")).to.equal("oogl");
        expect(lesson1.getStringBetweenFirstAndLastCharacters("Microsoft")).to.equal("icrosof");
    });
});