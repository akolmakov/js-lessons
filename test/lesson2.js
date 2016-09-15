var chai = require("chai");
var expect = chai.expect;
var lesson2 = require("../src/lesson2");

chai.config.showDiff = true;

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
            expect(lesson2.takeFirst([], 1)).to.eql([]);
            expect(lesson2.takeFirst([22], 1)).to.eql([22]);
            expect(lesson2.takeFirst([22], 2)).to.eql([22]);
            expect(lesson2.takeFirst([22, 34, 51, 16], 3)).to.eql([22, 34, 51]);
            expect(lesson2.takeFirst([22, 34, 51, 16], 5)).to.eql([22, 34, 51, 16]);
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
            expect(lesson2.dropFirst([], 1)).to.eql([]);
            expect(lesson2.dropFirst([22], 1)).to.eql([]);
            expect(lesson2.dropFirst([22, 16], 1)).to.eql([16]);
            expect(lesson2.dropFirst([22, 16], 3)).to.eql([]);
            expect(lesson2.dropFirst([22, 16, 53, 34], 3)).to.eql([34]);
        });

        it("throws IllegalArgumentException when arguments are illegal", function () {
            expect(() => lesson2.dropFirst(null, 0)).to.throw(lesson2.IllegalArgumentException);
            expect(() => lesson2.dropFirst([], null)).to.throw(lesson2.IllegalArgumentException);
            expect(() => lesson2.dropFirst(undef, 0)).to.throw(lesson2.IllegalArgumentException);
            expect(() => lesson2.dropFirst([], undef)).to.throw(lesson2.IllegalArgumentException);
        });
    });

    it("subArray", function () {
        expect(lesson2.subArray([], 1, 2)).to.eql([]);
        expect(lesson2.subArray([5], 1, 2)).to.eql([]);
        expect(lesson2.subArray([5, 7, 6, 4, 0], 1, 2)).to.eql([7]);
        expect(lesson2.subArray([5, 7, 6, 4, 0], 1, 3)).to.eql([7, 6]);
        expect(lesson2.subArray([5, 7, 6, 4, 0], 1, 10)).to.eql([7, 6, 4, 0]);
        expect(lesson2.subArray([5, 7, 6, 4, 0], 10, 12)).to.eql([]);
    });

    it("replaceNumber", function () {
        expect(lesson2.replaceNumber([], 2, 3)).to.eql([]);
        expect(lesson2.replaceNumber([2], 2, 3)).to.eql([3]);
        expect(lesson2.replaceNumber([2, 6, 9, 4], 2, 3)).to.eql([3, 6, 9, 4]);
        expect(lesson2.replaceNumber([2, 6, 9, 2], 2, 3)).to.eql([3, 6, 9, 3]);
        expect(lesson2.replaceNumber([2, 6, 9, 2], 0, 3)).to.eql([2, 6, 9, 2]);
    });

    it("concat", function () {
        expect(lesson2.concat([], [])).to.eql([]);
        expect(lesson2.concat([], [3])).to.eql([3]);
        expect(lesson2.concat([1], [])).to.eql([1]);
        expect(lesson2.concat([1], [3])).to.eql([1, 3]);
        expect(lesson2.concat([1, 5, 2], [3, 7])).to.eql([1, 5, 2, 3, 7]);
    });

    it("findModNElement", function () {
        expect(lesson2.findModNElement([], 1)).to.eql([]);
        expect(lesson2.findModNElement([], 3)).to.eql([]);
        expect(lesson2.findModNElement([1, 2, 3, 4, 5, 6], 1)).to.eql([1, 2, 3, 4, 5, 6]);
        expect(lesson2.findModNElement([1, 2, 3, 4, 5, 6], 2)).to.eql([2, 4, 6]);
        expect(lesson2.findModNElement([1, 2, 3, 4, 5, 6], 3)).to.eql([3, 6]);
    });

    it("sumNumbers", function () {
        expect(lesson2.sumNumbers([])).to.eql(0);
        expect(lesson2.sumNumbers([1])).to.eql(1);
        expect(lesson2.sumNumbers([1, 2])).to.eql(3);
        expect(lesson2.sumNumbers([1, 2, 3])).to.eql(6);
    });

    it("sort", function () {
        it("sorts a number array in ascending order using bubble sort algorithm", function () {
            expect(lesson2.sort([])).to.eql([]);
            expect(lesson2.sort([22])).to.eql([22]);
            expect(lesson2.sort([22, 12])).to.eql([12, 22]);
            expect(lesson2.sort([22, 12, 54, 21, 22, 17, 19])).to.eql([12, 17, 19, 21, 22, 22, 54]);
        });
    });
});