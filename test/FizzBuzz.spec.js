function FizzBuzz() {
    "use strict";

    function devisible(value, divisor) {
        return value % divisor === 0;
    }

    this.print = function(value) {
        var result = "";
        if (devisible(value, 3)) {
            result += 'Fizz';
        }
        if (devisible(value, 5)) {
            result += 'Buzz';
        }

        return result || value.toString();
    };
}

var fb = new FizzBuzz();

function testOutput(value, result) {
    "use strict";
    equal(fb.print(value), result);
}

module('FizzBuzz');
test('FizzBuzz exists', function() {
    "use strict";
    ok(fb instanceof FizzBuzz);
});

test('return 1 when 1 is given', function() {
    "use strict";
    testOutput(1, "1");
});

test('return 2 when 2 is given', function() {
    "use strict";
    testOutput(2, "2");
});

test('return Fizz when 3 is given', function() {
    "use strict";
    testOutput(3, "Fizz");
});

test('return 4 when 4 is given', function() {
    "use strict";
    testOutput(4, "4");
});

test('return Buzz when 5 is given', function() {
    "use strict";
    testOutput(5, "Buzz");
});

test('return Fizz when 6 is given', function() {
    "use strict";
    testOutput(6, "Fizz");
});

test('return Buzz when 10 is given', function() {
    "use strict";
    testOutput(10, "Buzz");
});

test('return FizzBuzz when 15 is given', function() {
    "use strict";
    testOutput(15, "FizzBuzz");
});