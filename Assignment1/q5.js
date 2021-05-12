"use strict";
var add = function (val1, val2) {
    if (val1 === void 0) { val1 = 2; }
    console.log(val1 + val2);
};
add(3, 5);
var userFriend = function (username) {
    var auserfreind = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        auserfreind[_i - 1] = arguments[_i];
    }
    console.log("username " + username);
    // console.log(auserfreind);
    for (var i in auserfreind) {
        console.log("FriendName " + auserfreind[i]);
    }
};
// let userfriend2=["abc","bcd","elf","jkl"];
var username = "xyz";
userFriend(username, "abc");
userFriend(username, "bcd");
userFriend(username, "elf");
userFriend(username, "jkl");
var capitalNames = function (names, names2, names3, names4, names5) {
    console.log("name:=" + names.toUpperCase());
    console.log("name:=" + names2.toUpperCase());
    console.log("name:=" + names3.toUpperCase());
    console.log("name:=" + names4.toUpperCase());
    console.log("name:=" + names5.toUpperCase());
};
var names = ["aaa", "bbb", "ccc", "ddd", "eee"];
capitalNames.apply(void 0, names);
