"use strict";
var promise1 = Promise.resolve(2);
var promise2 = Promise.resolve(3);
var promise3 = Promise.resolve(2 + 3);
Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values);
});
