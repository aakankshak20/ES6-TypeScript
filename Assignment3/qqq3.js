"use strict";
var circle = {
    name: "circle1",
    shape: "circular",
    color: "green"
};
var employee12 = {
    name: "abc",
    salary: 2339,
    id: 12
};
function printAll(obj) {
    return Object.preventExtensions(obj);
}
console.log(printAll(circle));
console.log(printAll(employee12));
