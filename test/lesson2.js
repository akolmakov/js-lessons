var expect = require("chai").expect;
var lesson2 = require("../src/lesson2");

var undef;

describe("lesson2", function () {
    it("indexOfNumber", function () {
        var a = [13, 53, 33, 72, 65, 21, 33, 90];

        expect(lesson2.indexOfNumber([], 0)).to.equal(-1);
        expect(lesson2.indexOfNumber([22], 0)).to.equal(-1);
        expect(lesson2.indexOfNumber([22, 22], 0)).to.equal(-1);
        expect(lesson2.indexOfNumber(a, 99)).to.equal(-1);
        expect(lesson2.indexOfNumber(a, 13)).to.equal(0);
        expect(lesson2.indexOfNumber(a, 33)).to.equal(2);
        expect(lesson2.indexOfNumber(a, 90)).to.equal(7);

        expect(() => lesson2.indexOfNumber(null, 0)).to.throw(lesson2.IllegalArgumentException);
        expect(() => lesson2.indexOfNumber([], null)).to.throw(lesson2.IllegalArgumentException);
        expect(() => lesson2.indexOfNumber(undef, 0)).to.throw(lesson2.IllegalArgumentException);
        expect(() => lesson2.indexOfNumber([], undef)).to.throw(lesson2.IllegalArgumentException);
    });

    it("containsNumber", function () {
        expect(lesson2.containsNumber([], 0)).to.equal(false);
        expect(lesson2.containsNumber([22], 0)).to.equal(false);
        expect(lesson2.containsNumber([22, 22], 0)).to.equal(false);
        expect(lesson2.containsNumber([22, 22], 22)).to.equal(true);
        expect(lesson2.containsNumber([22, 33, 22], 33)).to.equal(true);
        expect(lesson2.containsNumber([22, 33, 22], 44)).to.equal(false);

        expect(() => lesson2.containsNumber(null, 0)).to.throw(lesson2.IllegalArgumentException);
        expect(() => lesson2.containsNumber([], null)).to.throw(lesson2.IllegalArgumentException);
        expect(() => lesson2.containsNumber(undef, 0)).to.throw(lesson2.IllegalArgumentException);
        expect(() => lesson2.containsNumber([], undef)).to.throw(lesson2.IllegalArgumentException);
    });

    it("takeFirst", function () {
        expect(lesson2.takeFirst([], 1)).to.equal([]);
        expect(lesson2.takeFirst([22], 1)).to.equal([22]);
        expect(lesson2.takeFirst([22], 2)).to.equal([22]);
        expect(lesson2.takeFirst([22, 34, 51, 16], 3)).to.equal([22, 34, 51]);
        expect(lesson2.takeFirst([22, 34, 51, 16], 5)).to.equal([22, 34, 51, 16]);

        expect(() => lesson2.takeFirst(null, 0)).to.throw(lesson2.IllegalArgumentException);
        expect(() => lesson2.takeFirst([], null)).to.throw(lesson2.IllegalArgumentException);
        expect(() => lesson2.takeFirst(undef, 0)).to.throw(lesson2.IllegalArgumentException);
        expect(() => lesson2.takeFirst([], undef)).to.throw(lesson2.IllegalArgumentException);
    });

    it("dropFirst", function () {
        expect(lesson2.dropFirst([], 1)).to.equal([]);
        expect(lesson2.dropFirst([22], 1)).to.equal([]);
        expect(lesson2.dropFirst([22, 16], 1)).to.equal([16]);
        expect(lesson2.dropFirst([22, 16], 3)).to.equal([]);
        expect(lesson2.dropFirst([22, 16, 53, 34], 3)).to.equal([34]);

        expect(() => lesson2.dropFirst(null, 0)).to.throw(lesson2.IllegalArgumentException);
        expect(() => lesson2.dropFirst([], null)).to.throw(lesson2.IllegalArgumentException);
        expect(() => lesson2.dropFirst(undef, 0)).to.throw(lesson2.IllegalArgumentException);
        expect(() => lesson2.dropFirst([], undef)).to.throw(lesson2.IllegalArgumentException);
    });

    it("sort", function () {
        expect(lesson2.sort([])).to.equal([]);
        expect(lesson2.sort([22])).to.equal([22]);
        expect(lesson2.sort([22, 12])).to.equal([12, 22]);
        expect(lesson2.sort([22, 12, 54, 21, 22, 17, 19])).to.equal([12, 17, 19, 21, 22, 22, 54]);

        expect(() => lesson2.sort(null)).to.throw(lesson2.IllegalArgumentException);
        expect(() => lesson2.sort(undef)).to.throw(lesson2.IllegalArgumentException);
    });
});