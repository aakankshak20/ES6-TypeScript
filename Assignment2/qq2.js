"use strict";
var getNextArmstrong = function () {
    for (var i = 100;; i++) {
        var n = i.toString().length;
        var sum = 0;
        var temp = i;
        while (temp > 0) {
            var rem = temp % 10;
            sum += Math.pow(rem, n);
            temp = parseInt(temp / 10);
        }
        if (sum == i) {
            console.log(i);
        }
        if (i > 1000) {
            break;
        }
    }
};
console.log(getNextArmstrong());
