"use strict";
var chatroom1 = new Map();
chatroom1.set("user1", "Hello user1 here");
chatroom1.set("user2", "Cia user2 ");
chatroom1.set("user3", "Hii user3!!!!");
console.log(chatroom1.get("user1"));
console.log(chatroom1.get("user2"));
console.log(chatroom1.get("user3"));
var chatroom2 = new Set();
var obj1 = {
    username: "employee1",
    message: "hi there"
};
var obj2 = {
    username: "employee2",
    message: "hello"
};
var obj3 = {
    username: "employee3",
    message: "ciaoo"
};
chatroom2.add(obj1);
chatroom2.add(obj2);
chatroom2.add(obj3);
for (var _i = 0, _a = chatroom1.keys(); _i < _a.length; _i++) {
    var key_1 = _a[_i];
    console.log(key_1);
}
for (var _b = 0, _c = chatroom1.values(); _b < _c.length; _b++) {
    var values = _c[_b];
    console.log(values);
}
for (var _d = 0, _e = chatroom2.entries(); _d < _e.length; _d++) {
    var entries = _e[_d];
    console.log(entries);
}
