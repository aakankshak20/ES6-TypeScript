var order={
    id:1,
    title:"abc",
    price:10,
    getprice:function(price){
        {return price}
    },
    printorder:function(price){
        {return price*5}
    }
}

var copy=Object.assign({},order);
console.log(copy);
for(let val in copy){
    console.log(copy[val]);
}

console.log(order.id);
console.log(order.price);
console.log(order.title);
console.log(order.getprice(10));
console.log(order.printorder(20));
