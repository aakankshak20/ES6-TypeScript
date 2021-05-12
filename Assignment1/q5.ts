let add=function(val1=2,val2){
    console.log(val1+val2);
}

add(3,5);


let userFriend=function(username,...auserfreind){
    console.log("username "+username);
    // console.log(auserfreind);
    for(let i in auserfreind){
        
        console.log("FriendName "+auserfreind[i]);
    }

}

// let userfriend2=["abc","bcd","elf","jkl"];
let username="xyz";
userFriend(username,"abc");
userFriend(username,"bcd");
userFriend(username,"elf");
userFriend(username,"jkl");



let capitalNames=function(names,names2,names3,names4,names5){
    console.log("name:="+names.toUpperCase());
    console.log("name:="+names2.toUpperCase());
    console.log("name:="+names3.toUpperCase());
    console.log("name:="+names4.toUpperCase());
    console.log("name:="+names5.toUpperCase());
}

let names=["aaa","bbb","ccc","ddd","eee"];
capitalNames(...names);