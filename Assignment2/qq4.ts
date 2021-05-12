let chatroom1=new Map();

chatroom1.set("user1","Hello user1 here");
chatroom1.set("user2","Cia user2 ");
chatroom1.set("user3","Hii user3!!!!");

console.log(chatroom1.get("user1"));
console.log(chatroom1.get("user2"));
console.log(chatroom1.get("user3"));


let  chatroom2=new Set();

let obj1={
    username:"employee1",
    message:"hi there"
}

let obj2={
    username:"employee2",
    message:"hello"
}

let obj3={
    username:"employee3",
    message:"ciaoo"
}

chatroom2.add(obj1);
chatroom2.add(obj2);
chatroom2.add(obj3);

for(let key of  chatroom1.keys()){
    console.log(key);
}
for(let values of  chatroom1.values()){
    console.log(values);
}
for(let entries of  chatroom2.entries() ){
    console.log(entries);
}