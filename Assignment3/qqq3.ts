interface Printable {
        name:string;
        id?:number;
        color?:string;
        shape?:string;
        salary?:number;
}

let circle:Printable={
    name:"circle1",
    shape:"circular",
    color:"green"

};

let employee12:Printable={
    name:"abc",
    salary:2339,
    id:12
};

function printAll(obj){
    return Object.preventExtensions(obj);
}

console.log(printAll(circle));
console.log(printAll(employee12));