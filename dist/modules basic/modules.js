'use strict';

console.log('------Modules Basic------');
var MNH;
(function (MNH) {
    var String = function () {
        function String(str) {
            if (str === void 0) {
                str = '';
            }
            this.str = str;
        }
        String.prototype.uppercase = function (str) {
            if (str === void 0) {
                str = this.str;
            }
            return str.toUpperCase();
        };
        String.prototype.lowercase = function (str) {
            if (str === void 0) {
                str = this.str;
            }
            return str.toLowerCase();
        };
        String.prototype.random = function (subStr) {
            if (subStr === void 0) {
                subStr = 6;
            }
            return Math.random().toString(36).substring(subStr);
        };
        return String;
    }();
    MNH.String = String;
    var Number = function () {
        function Number() {}
        Number.prototype.plus = function (numb_1, numb_2) {
            if (numb_1 === void 0) {
                numb_1 = 0;
            }
            if (numb_2 === void 0) {
                numb_2 = 0;
            }
            return numb_1 + numb_2;
        };
        Number.prototype.minus = function (numb_1, numb_2) {
            if (numb_1 === void 0) {
                numb_1 = 0;
            }
            if (numb_2 === void 0) {
                numb_2 = 0;
            }
            return numb_1 - numb_2;
        };
        Number.prototype.add = function (numb_1, numb_2) {
            if (numb_1 === void 0) {
                numb_1 = 0;
            }
            if (numb_2 === void 0) {
                numb_2 = 0;
            }
            return numb_1 * numb_2;
        };
        Number.prototype.divide = function (numb_1, numb_2) {
            if (numb_1 === void 0) {
                numb_1 = 0;
            }
            if (numb_2 === void 0) {
                numb_2 = 0;
            }
            return numb_1 / numb_2;
        };
        Number.prototype.modulus = function (numb_1, numb_2) {
            if (numb_1 === void 0) {
                numb_1 = 0;
            }
            if (numb_2 === void 0) {
                numb_2 = 0;
            }
            return numb_1 % numb_2;
        };
        Number.prototype.random = function (start, end) {
            if (start === void 0) {
                start = 0;
            }
            if (end === void 0) {
                end = 10;
            }
            return Math.floor(Math.random() * end + start);
        };
        return Number;
    }();
    MNH.Number = Number;
})(MNH || (MNH = {}));
var str = new MNH.String();
var numb = new MNH.Number();
console.log('-----String-----');
console.log(str.uppercase('dangdongminh'));
console.log(str.lowercase('dangdongminh'));
console.log(str.random(4));
console.log('-----Number-----');
console.log(numb.plus(100, 5));
console.log(numb.minus(100, 5));
console.log(numb.add(100, 5));
console.log(numb.divide(100, 5));
console.log(numb.modulus(100, 5));
console.log(numb.random(100, 5000));