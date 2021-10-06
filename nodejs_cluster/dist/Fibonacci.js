"use strict";
var Fibonacci = /** @class */ (function () {
    function Fibonacci() {
    }
    Fibonacci.prototype.calculateFibonacci = function (value) {
        var sum = 0;
        if (value === 0) {
            return sum;
        }
        if (value === 1) {
            sum += 1;
            return sum;
        }
        else {
            return (this.calculateFibonacci(value - 1) + this.calculateFibonacci(value - 2));
        }
    };
    return Fibonacci;
}());
module.exports = new Fibonacci();
//# sourceMappingURL=Fibonacci.js.map