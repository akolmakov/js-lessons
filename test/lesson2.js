var expect = require("chai").expect;
var lesson2 = require("../src/lesson2");

var undef;

describe("lesson2", function () {
    describe("indexOfNumber", function () {
        it("returns first index of a number in a number array", function () {
            var a = [13, 53, 33, 72, 65, 21, 33, 90];

            expect(lesson2.indexOfNumber([], 0)).to.equal(-1);
            expect(lesson2.indexOfNumber([22], 0)).to.equal(-1);
            expect(lesson2.indexOfNumber([22, 22], 0)).to.equal(-1);
            expect(lesson2.indexOfNumber(a, 99)).to.equal(-1);
            expect(lesson2.indexOfNumber(a, 13)).to.equal(0);
            expect(lesson2.indexOfNumber(a, 33)).to.equal(2);
            expect(lesson2.indexOfNumber(a, 90)).to.equal(7);
        });

        it("throws IllegalArgumentException when arguments are illegal", function () {
            expect(() => lesson2.indexOfNumber(null, 0)).to.throw(lesson2.IllegalArgumentException);
            expect(() => lesson2.indexOfNumber([], null)).to.throw(lesson2.IllegalArgumentException);
            expect(() => lesson2.indexOfNumber(undef, 0)).to.throw(lesson2.IllegalArgumentException);
            expect(() => lesson2.indexOfNumber([], undef)).to.throw(lesson2.IllegalArgumentException);
        });
    });

    describe("containsNumber", function () {
        it("checks existence of a number in a number array", function () {
            expect(lesson2.containsNumber([], 0)).to.equal(false);
            expect(lesson2.containsNumber([22], 0)).to.equal(false);
            expect(lesson2.containsNumber([22, 22], 0)).to.equal(false);
            expect(lesson2.containsNumber([22, 22], 22)).to.equal(true);
            expect(lesson2.containsNumber([22, 33, 22], 33)).to.equal(true);
            expect(lesson2.containsNumber([22, 33, 22], 44)).to.equal(false);
        });

        it("throws IllegalArgumentException when arguments are illegal", function () {
            expect(() => lesson2.containsNumber(null, 0)).to.throw(lesson2.IllegalArgumentException);
            expect(() => lesson2.containsNumber([], null)).to.throw(lesson2.IllegalArgumentException);
            expect(() => lesson2.containsNumber(undef, 0)).to.throw(lesson2.IllegalArgumentException);
            expect(() => lesson2.containsNumber([], undef)).to.throw(lesson2.IllegalArgumentException);
        });
    });

    describe("takeFirst", function () {
        it("returns first n elements from an array", function () {
            expect(lesson2.takeFirst([], 1)).to.equal([]);
            expect(lesson2.takeFirst([22], 1)).to.equal([22]);
            expect(lesson2.takeFirst([22], 2)).to.equal([22]);
            expect(lesson2.takeFirst([22, 34, 51, 16], 3)).to.equal([22, 34, 51]);
            expect(lesson2.takeFirst([22, 34, 51, 16], 5)).to.equal([22, 34, 51, 16]);
        });

        it("throws IllegalArgumentException when arguments are illegal", function () {
            expect(() => lesson2.takeFirst(null, 0)).to.throw(lesson2.IllegalArgumentException);
            expect(() => lesson2.takeFirst([], null)).to.throw(lesson2.IllegalArgumentException);
            expect(() => lesson2.takeFirst(undef, 0)).to.throw(lesson2.IllegalArgumentException);
            expect(() => lesson2.takeFirst([], undef)).to.throw(lesson2.IllegalArgumentException);
        });
    });

    describe("dropFirst", function () {
        it("returns an array with first n elements", function () {
            expect(lesson2.dropFirst([], 1)).to.equal([]);
            expect(lesson2.dropFirst([22], 1)).to.equal([]);
            expect(lesson2.dropFirst([22, 16], 1)).to.equal([16]);
            expect(lesson2.dropFirst([22, 16], 3)).to.equal([]);
            expect(lesson2.dropFirst([22, 16, 53, 34], 3)).to.equal([34]);
        });

        it("throws IllegalArgumentException when arguments are illegal", function () {
            expect(() => lesson2.dropFirst(null, 0)).to.throw(lesson2.IllegalArgumentException);
            expect(() => lesson2.dropFirst([], null)).to.throw(lesson2.IllegalArgumentException);
            expect(() => lesson2.dropFirst(undef, 0)).to.throw(lesson2.IllegalArgumentException);
            expect(() => lesson2.dropFirst([], undef)).to.throw(lesson2.IllegalArgumentException);
        });
    });

    describe("sort", function () {
        it("sorts a number array in ascending order using bubble sort algorithm", function () {
            expect(lesson2.sort([])).to.equal([]);
            expect(lesson2.sort([22])).to.equal([22]);
            expect(lesson2.sort([22, 12])).to.equal([12, 22]);
            expect(lesson2.sort([22, 12, 54, 21, 22, 17, 19])).to.equal([12, 17, 19, 21, 22, 22, 54]);
        });

        it("throws IllegalArgumentException when arguments are illegal", function () {
            expect(() => lesson2.sort(null)).to.throw(lesson2.IllegalArgumentException);
            expect(() => lesson2.sort(undef)).to.throw(lesson2.IllegalArgumentException);
        });
    });
});